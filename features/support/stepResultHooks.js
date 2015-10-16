module.exports  = function stepResultHooks() {
    var fs = require('fs'), dir = 'features/screenShots/';
    //if (typeof __base != 'undefined') dir = __base + dir;

    //this.StepResult(function (event, callBack) {
    //    var stepResult = event.getPayloadItem('stepResult'), step = stepResult.getStep();
    //
    //    if (stepResult.isFailed()) {
    //        browser.takeScreenshot().then(function (png) {
    //            browser.getCapabilities().then(function (capabilities) {
    //                var browserName = capabilities.caps_.browserName;
    //                var browserVersion = capabilities.caps_.version;
    //                var stream, fname;
    //
    //                fname = 'Screenshot' + '_' + 'Failed Step' + '_' + step.getName() + '_' + browserName.toUpperCase()+'_'+browserVersion+'_' + new Date() + '.png';
    //                fname = fname.replace(/"|'|\//g, '').replace(/\s|:|>/g, '_');
    //
    //                stream = fs.createWriteStream(dir + fname);
    //                stream.write(new Buffer(png, 'base64'));
    //                stream.end();
    //            });
    //        }).then(callBack);
    //    } else callBack();
    //});

    this.FailedStepResult(function(event, callback) {
        var stepResult = event.getPayloadItem('stepResult'), step = stepResult.getStep();
        //var scenario = event.getPayloadItem('scenario');

        if (stepResult.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                var stream, fname;
                fname = 'Screenshot' + '_' + new Date() + '.png';
                fname = fname.replace(/"|'|\//g, '').replace(/\s|:|>/g, '_');
                stream = fs.createWriteStream(dir + fname);
                stream.write(new Buffer(png, 'base64'));
                stream.end();
            }).then(callback);
        } else {
            callback();
        }
    });

    //this.FailedStepResult(function (scenario, callback) {
    //    if (scenario.isFailed()) {
    //        browser.takeScreenshot().then(function (png) {
    //            var decodedImage = new Buffer(png, 'base64').toString('binary');
    //            scenario.attach(decodedImage, 'image/png');
    //            callback();
    //        });
    //    } else {
    //        callback();
    //    }
    //});
};