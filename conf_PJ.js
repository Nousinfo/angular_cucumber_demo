var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['jasmineProtractor/specs/*Spec.js'],
    baseUrl: 'http://www.walgreens.com/',
    framework: 'jasmine2',

    onPrepare: function(){
        // set implicit wait times in ms...
        browser.manage().timeouts().implicitlyWait(5000);
        // set browser size...
        browser.manage().window().maximize();

        // better jasmine 2 reports...
        //var SpecReporter = require('jasmine-spec-reporter');
        //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'spec'}));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'jasmineProtractor/reports/',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true
            })
        );
    },

    capabilities: {
		browserName: 'chrome',
        'platform': 'ANY',
        'version': '44'
	},

    //multiCapabilities: [{
    //    'browserName': 'firefox',
    //    'platform': 'ANY',
    //    'version': '40'
    //}, {
    //    'browserName': 'internet explorer',
    //    'platform': 'ANY',
    //    'version': '11'
    //}, {
    //    'browserName': 'chrome',
    //    'platform': 'ANY',
    //    'version': '44'
    //}],

    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: function () {}
        //defaultTimeoutInterval: 50000
    }
};
