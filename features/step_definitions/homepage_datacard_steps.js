var genericsui = require('../../libraries/genericsUI.js');
var HomePage = require("../../libraries/homepage.js");

var homepage_datacard_steps;
homepage_datacard_steps = function () {

    this.Given(/^On Paytm (.*) page$/, function (expTitle, callback) {
        HomePage.visit(HomePage.urlDataCard).then(function(currentTitle){
            try{
                expect(currentTitle).to.have.string(expTitle);
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User insert data card number$/, function (callback) {
        genericsui.ClearText(HomePage.MobileNumber);
        genericsui.InsertText(HomePage.MobileNumber, '9900793619');
        callback();
    });

    this.When(/^User confirm respective data card operator$/, function (callback) {
        genericsui.GetAttributeValOfElement(HomePage.OperatorName, 'value').then(function(operatorName){
            try{
                expect(operatorName).to.eq('Airtel');
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User enters recharge amount for data card$/, function (callback) {
        genericsui.ClearText(HomePage.Amount);
        genericsui.InsertText(HomePage.Amount, '145');
        callback();
    });

    this.Then(/^User tries with a payment for data card by clicking (.*)$/, function (btnText, callback) {
        genericsui.isDisplayed(HomePage.ProceedBtnText).then(function(btnVisible){
            try{
                expect(btnVisible).to.eq('true');
                genericsui.Click(genericsui.ButtonText(btnText));
                browser.sleep(2000);
                callback();
            } catch(e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User insert data card number and confirm respective operators$/, function (callback) {
        genericsui.ClearText(HomePage.MobileNumber);
        genericsui.InsertText(HomePage.MobileNumber, '9900793619');
        genericsui.GetAttributeValOfElement(HomePage.OperatorName, 'value').then(function(operatorName){
            try{
                expect(operatorName).to.eq('Airtel');
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User enters no amount for data card and clicks (.*) button$/, function (btnText, callback) {
        genericsui.ClearText(HomePage.Amount);
        genericsui.Click(genericsui.ButtonText(btnText));
        browser.sleep(2000);
        callback()
    });

    this.Then(/^User should see the error message (.*)$/, function (errMsg, callback) {
        genericsui.GetTextInElement(HomePage.ErrorMessage).then(function(message) {
            try{
                expect(message).to.contains(errMsg);
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });
};

module.exports = homepage_datacard_steps;
