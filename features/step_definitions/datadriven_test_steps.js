var genericsui = require('../../libraries/genericsUI.js');
var HomePage = require("../../libraries/homepage.js");
var testOperatorData = require('../../testdata/multiOperatorData.json');
var testLinkTextData = require('../../testdata/multiLinkTextData.json');

var datadriven_test_steps;
datadriven_test_steps = function () {

    this.Given(/^On (.*) website for data driven tests$/, function (expTitle, callback) {
        HomePage.visit(HomePage.urlMobile).then(function(currentTitle){
            try{
                expect(currentTitle).to.have.string(expTitle);
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.Then(/^User tries variety of numbers and confirm respective operators$/, function (callback) {
        testOperatorData.forEach(function(data) {
            genericsui.ClearText(HomePage.MobileNumber);
            genericsui.InsertText(HomePage.MobileNumber, data.mobileNumber);
            genericsui.GetAttributeValOfElement(HomePage.OperatorName, 'value').then(function(operatorName){
                try{
                    expect(operatorName).to.contains(data.operatorName);
                } catch (e){
                    callback.fail('AssertionError: '+e.message);
                }
            });
        });
    callback();
    });

    this.Then(/^User selects variety of menu links and confirm respective pages$/, function (callback) {
        testLinkTextData.forEach(function (data) {
            genericsui.Click(genericsui.LinkText(data.menuLinkText));
            genericsui.GetCurrentUrl().then(function(currentUrl){
                try{
                    expect(currentUrl).to.eq(data.expectedUrl);
                } catch (e){
                    callback.fail('AssertionError: '+e.message);
                }
            });
        });
        callback();
    });
};

module.exports = datadriven_test_steps;