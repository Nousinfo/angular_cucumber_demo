/**
 * Example tests of an Angular site
 */
var walGreensHomePage = require('../../jasmineProtractor/pages/walGreensHomePage');

describe ('WalGreens Home page: Search a keyword ', function() {

	beforeEach(function() {
        walGreensHomePage.visit();
	});

    it('should search proper keyword', function() {
        walGreensHomePage.searchFor('abc');
        walGreensHomePage.clickSearch();
        browser.sleep(3000);
        walGreensHomePage.searchResult.getText().then(function(text){
            expect(text).toContain('abc');
        });
    });

});
