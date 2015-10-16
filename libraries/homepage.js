var config = require("../config");

var HomePage = {

    MobileNumber: element(by.id('mobileNumber')),
    OperatorName: element(by.model('operatorName')),
    Amount: element(by.id('amount')),
    ProceedBtnText: element.all(by.css('.proceedButton.btn-4.btn-4c.icon-arrow-right.btn.btn-primary.btn-lg.btn-block.width320.proceedButtonAnimate')),
    ErrorMessage: element.all(by.css('.failed.f13.tp5')),
    PrepaidRadioBtn: element.all(by.css('input[value="Prepaid"]')),
    PostpaidRadioBtn: element.all(by.css('input[value="Postpaid"]')),
    FastForwardCheckBx: element.all(by.model('isFastForward')),
    ConfirmToPay: element.all(by.css('.copdet.tp10')),

    visit: function (url) {
        return browser.get(url).then(function(){
            return browser.getTitle();
        })
    }
};

HomePage.urlMobile = '/';
HomePage.urlDataCard = '/data-card';


module.exports = HomePage;