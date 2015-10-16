
var WallGreensSignInPage = function() {
    this.url = '/login.jsp';
    this.usernameField = element(by.id('signin-username'));
    this.passwordField = element(by.id('signin-password'));
    this.signInButton = element(by.css('button[ng-click="validateLoginData()"]'));
    this.signInError = element(by.binding('errorText'));

    this.visit = function () {
        return browser.get(this.url).then(function(){
            expect(browser.getTitle()).toContain('Walgreens');
        })
    };

    /**
     * Sign In a user
     * 
     * @param  {string} userName
     * @param  {string} passwd
     */
    this.signInUser = function(userName, passwd) {
       this.usernameField.clear();
        this.usernameField.sendKeys(userName);
        this.passwordField.clear();
        this.passwordField.sendKeys(passwd);
        this.signInButton.click();
    };

    this.signInAs = function(userObj){
        this.signInUser(userObj.username, userObj.password);
    };
};

module.exports = new WallGreensSignInPage();

