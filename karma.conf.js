module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
            reports: {
                "cobertura": {
                    "directory": "coverage",
                    "filename": "coverage.xml",
                    "subdirectory": "cobertura"
                },
                "html": "coverage",
                "lcovonly": {
                    "directory": "coverage",
                    "filename": "lcov.txt",
                    "subdirectory": "lcov",
                },
                "text-summary": ""
            }
        },

        browsers: ["ChromeHeadless"],

        singleRun: true
    });
};