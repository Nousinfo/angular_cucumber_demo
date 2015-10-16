
var WallGreensHomePage = function() {
    this.url = '/';
    this.searchBox = element(by.css('input.search-input'));
    this.searchBoxBtn = element(by.css('span[title="Search Walgreens"]'));
    this.searchResult = element(by.css('h1.wag-head-xs-mt1.wag-header-pointoffers-title-h1.hidden-xs'));
    //this.emptySearchError = function(text) {return element(by.css('section[role="alert"]')).getText(); };
    this.signInButton = element(by.linkText('Sign In'));

    this.visit = function () {
        return browser.get(this.url).then(function(){
            expect(browser.getTitle()).toContain('Walgreens');
        })
    };

    /**
     * search for a friend
     * 
     * @param  {string} string 
     */
    this.searchFor = function(string) {
       this.searchBox.sendKeys(string);
    };

    /**
     * click search a button
     */
    this.clickSearch = function() {
        this.searchBoxBtn.click();
    };

};

module.exports = new WallGreensHomePage();

