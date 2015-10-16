module.exports = function CaptureScreenshot() {
    var fs = require('fs'), dir = 'features/screenShots/';

    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                    //var decodedImage = new Buffer(png, 'base64').toString('binary');
                    //scenario.attach(decodedImage, 'image/png');

                    var fname = 'Screenshot_Scenario'+'_' + new Date() + '.png';
                    fname = fname.replace(/"|'|\//g, '').replace(/\s|:|>/g, '_');
                    fs.writeFile(dir+fname, png, 'base64');
                callback();
            });
        } else {
            callback();
        }
    });

};