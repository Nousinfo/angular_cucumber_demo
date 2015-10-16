var genericsUI = {

    InsertText : function(UIObj, TextToInsert){
        UIObj.sendKeys(TextToInsert);
    },

    ClearText: function(UIObj){
        UIObj.clear();
    },

    Click: function(UIObj){
        UIObj.click();
    },

    isDisplayed: function(UIObj){
        return UIObj.isDisplayed().then(function(isDisplayed){
            return isDisplayed.toString();
        });
    },

    isEnabled: function(UIObj){
        return UIObj.isEnabled().then(function(isEnabled){
            return isEnabled.toString();
        });
    },

    isSelected: function(UIObj){
        return UIObj.isSelected().then(function(isSelected){
            return isSelected.toString();
        });
    },

    GetTextInElement: function (UIObjs) {
        return UIObjs.getText().then(function (actText) {
            if(actText.constructor.isArray){
                return actText.toString();
            } else {
                return actText;
            }
        });
    },

    GetAttributeValOfElement: function(UIObjs, Attr){
        return UIObjs.getAttribute(Attr).then(function(actValue){
            return actValue;
        });
    },

    LinkText: function(menuLinkText){
        return element.all(by.linkText(menuLinkText));
    },

    ButtonText: function(buttonText){
        return element.all(by.buttonText(buttonText));
    },

    GetCurrentUrl: function(){
        return browser.getCurrentUrl().then(function(ActUrl) {
            return ActUrl.toString();
        });
    }
};

module.exports = genericsUI;