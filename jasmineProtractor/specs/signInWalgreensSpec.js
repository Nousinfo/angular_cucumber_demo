/**
 * Example tests of an Angular site
 */
var walGreensSignInPage = require('../../jasmineProtractor/pages/walGreensSignInPage');
var testUserData = require('../../jasmineProtractor/data/multiUserData');
var userData = require('../../jasmineProtractor/data/userData');

describe ('WalGreens Home page: Search a keyword ', function() {

	beforeEach(function() {
        walGreensSignInPage.visit();
	});

    it('should not be able to login with invalid credentials', function(){
        walGreensSignInPage.signInAs(userData.testUser);
        browser.sleep(3000);
        walGreensSignInPage.signInError.getText().then(function(text){
            expect(text).toBe('You entered an invalid username or password. Please try again.');
        });
    });

    it('parameterized login verification for invalid data', function(){
        testUserData.forEach(function(multiUserData) {
            walGreensSignInPage.signInUser(multiUserData.username, multiUserData.password);
            browser.sleep(3000);
            walGreensSignInPage.signInError.getText().then(function (text) {
                expect(text).toContain('You entered an invalid username or password. Please try again.');
            });
        });
    });

});
