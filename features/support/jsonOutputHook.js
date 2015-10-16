module.exports = function JsonOutputHook() {
    var Cucumber = require('cucumber');
    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    var fs = require('fs');
    var path = require('path');

    JsonFormatter.log = function (json) {

        fs.writeFile(path.join(__dirname, './cucumber-test-results.json'), json, function (err) {
            //if (err) throw err;
            //console.log('json file location: file not found ' +err);
        });
    };

    this.registerListener(JsonFormatter);
};