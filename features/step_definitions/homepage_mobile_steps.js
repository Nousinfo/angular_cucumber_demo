var genericsui = require('../../libraries/genericsUI.js');
var HomePage = require("../../libraries/homepage.js");

var homepage_mobile_steps;
homepage_mobile_steps = function () {

    this.Given(/^On Paytm (.*) website$/, function (expTitle, callback) {
        HomePage.visit(HomePage.urlMobile).then(function(currentTitle){
            try{
                expect(currentTitle).to.have.string(expTitle);
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User insert mobile number$/, function (callback) {
        genericsui.ClearText(HomePage.MobileNumber);
        genericsui.InsertText(HomePage.MobileNumber, '9900793619');
        callback();
    });

    this.When(/^User confirm respective operator$/, function (callback) {
        genericsui.GetAttributeValOfElement(HomePage.OperatorName, 'value').then(function(operatorName){
            try{
                expect(operatorName).to.eq('Airtel');
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User enters recharge amount$/, function (callback) {
        genericsui.ClearText(HomePage.Amount);
        genericsui.InsertText(HomePage.Amount, '100');
        callback();
    });

    this.Then(/^User tries with a payment by clicking (.*)$/, function (btnText, callback) {
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

    this.When(/^User insert mobile number and confirm respective operators$/, function (callback) {
        genericsui.ClearText(HomePage.MobileNumber);
        genericsui.InsertText(HomePage.MobileNumber, '9812789891');
        genericsui.GetAttributeValOfElement(HomePage.OperatorName, 'value').then(function(operatorName){
            try{
                expect(operatorName).to.eq('Idea');
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User enters no amount and clicks (.*) button$/, function (btnText, callback) {
        genericsui.ClearText(HomePage.Amount);
        browser.sleep(2000);
        genericsui.Click(genericsui.ButtonText(btnText));
        browser.sleep(2000);
        callback();
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

    this.When(/^User enters no values in the fields$/, function (callback) {
        genericsui.ClearText(HomePage.MobileNumber);
        genericsui.ClearText(HomePage.OperatorName);
        genericsui.ClearText(HomePage.Amount);
        callback();
    });

    this.When(/^User clicks on (.*)$/, function (btnText, callback) {
        genericsui.Click(genericsui.ButtonText(btnText));
        callback();
    });

    this.Then(/^User should see the errors (.*), (.*), (.*)$/, function (errMsg1, errMsg2, errMsg3, callback) {
        genericsui.GetTextInElement(HomePage.ErrorMessage).then(function(message) {
            try{
                expect(message).to.contains(errMsg1, errMsg2, errMsg3);
                callback();
            } catch (e) {
                callback.fail('AssertionError: '+e.message);
            }
        });
    });
    this.When(/^User checks whether 'Postpaid Mobile' option is available$/, function (callback) {
        genericsui.isDisplayed(HomePage.PostpaidRadioBtn).then(function(status){
            try{
                expect(status).to.eq('true');
                callback();
            } catch(e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User clicks 'Postpaid Mobile' radio button$/, function (callback) {
        genericsui.isEnabled(HomePage.PostpaidRadioBtn).then(function(status){
            try{
                expect(status).to.eq('true');
                genericsui.Click(HomePage.PostpaidRadioBtn);
                browser.sleep(2000);
                callback();
            } catch(e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.Then(/^User verifies whether 'Postpaid Mobile' option is selected$/, function (callback) {
        genericsui.isSelected(HomePage.PostpaidRadioBtn).then(function(status){
            try{
                expect(status).to.eq('true');
                callback();
            } catch(e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User clicks 'Prepaid Mobile' and selects 'Fast Forward' option$/, function (callback) {
        genericsui.isSelected(HomePage.PrepaidRadioBtn).then(function(status){
            if(status == true){
                genericsui.Click(HomePage.FastForwardCheckBx);
                browser.sleep(2000);
            }else{
                genericsui.Click(HomePage.PrepaidRadioBtn);
                browser.sleep(2000);
                genericsui.Click(HomePage.FastForwardCheckBx);
            }
        });
        callback();
    });

    this.Then(/^User verifies text of Submit button changes to (.*)$/, function (btnText, callback) {
        genericsui.GetTextInElement(HomePage.ProceedBtnText).then(function(message) {
            try{
                expect(message).to.contains(btnText);
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });

    this.When(/^User clicks 'Postpaid Mobile' and selects 'Fast Forward' option$/, function (callback) {
        genericsui.isSelected(HomePage.PostpaidRadioBtn).then(function(status){
           if(status == true){
               genericsui.Click(HomePage.FastForwardCheckBx);
               browser.sleep(2000);
           } else{
               genericsui.Click(HomePage.PostpaidRadioBtn);
               browser.sleep(2000);
               genericsui.Click(HomePage.FastForwardCheckBx);
           }
        });
        callback();
    });

    this.Then(/^User verifies text of Submit button changes to (.*)$/, function (btnText, callback) {
        genericsui.GetTextInElement(HomePage.ProceedBtnText).then(function(message) {
            try{
                expect(message).to.contains(btnText);
                callback();
            } catch (e){
                callback.fail('AssertionError: '+e.message);
            }
        });
    });
};

module.exports = homepage_mobile_steps;