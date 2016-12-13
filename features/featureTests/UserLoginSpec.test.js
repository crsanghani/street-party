describe('User Login', function() {
    it("Should have user login links on homepage", function() {
        browser.url('http://localhost:3000/');
        browser.waitForExist(".fa-sign-in");
        var actualText = browser.getText("#__blaze-root > header > nav > ul > li:nth-child(1) > a");
        expect(actualText).to.equal("Login");
    });
});