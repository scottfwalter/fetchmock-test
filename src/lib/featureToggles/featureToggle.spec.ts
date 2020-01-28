import { FeatureToggles } from './featureToggle';
// import * as fetchMock from 'fetch-mock';
import fetchMock from 'fetch-mock';


describe('HelloComponent', () => {
    let featureToggles: FeatureToggles;
    beforeEach(() => {
        featureToggles = new FeatureToggles();
    });


    it('should load feature toggles',  (done) => {
        fetchMock.mock( 'http://www.mocky.io/v2/5e2f9b21320000100085846', {
            movie: 'Star Wars'
        });

        featureToggles.allFetchPlusObservables().subscribe(res => {
            expect(res).toEqual({movie: 'Star Wars'});
            done();
        })
    });
});

