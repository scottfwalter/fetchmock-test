import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

export class FeatureToggles {
    constructor() { }

    allFetchPlusObservables(): Observable<any> {
        return fromFetch('http://www.mocky.io/v2/5e2f9b21320000100085846', {}).pipe(
            tap(console.log),
            switchMap(response => {
                if (response.ok) {
                    // OK return data
                    return response.json();
                } else {
                    return of({ error: true, message: `Error ${response.status}` });
                }
            }),
            catchError(err => {
                // Network or other error, handle appropriately
                return of({ error: true, message: err.message })
            })
        )
    }
}

