
exports.config = {
    baseUrl: 'https://paytm.com',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'cucumber',
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,

    specs: [
        'features/homepage_datacard.feature'
    ],

    capabilities: {
        'browserName': 'chrome',
        'platform': 'WINDOWS',
        'version': '45'
    },

    cucumberOpts: {
        require: ['features/step_definitions/homepage_datacard_steps.js', 'features/support/*.js'],
        //require: 'features/**/*.js',
        format: 'summary'
    },

    onPrepare: function(){
        var chai, chaiAsPromised;

        chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);

        global.expect = chai.expect;
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().maximize();
    }

    //multiCapabilities: [{
    //    'browserName': 'firefox',
    //    'platform': 'WINDOWS',
    //    'version': '40'
    //}, {
    //    'browserName': 'internet explorer',
    //    'platform': 'WINDOWS',
    //    'version': '11'
    //}, {
    //    'browserName': 'chrome',
    //    'platform': 'WINDOWS',
    //    'version': '45'
    //}]
};