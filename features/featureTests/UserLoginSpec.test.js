describe('User Login', function() {
    it("Should have user login links on homepage", function() {
        browser.url('http://localhost:3000');
        browser.waitForExist("#login-sign-in-link");
        var actualText = browser.getText("#login-sign-in-link");
        expect(actualText).to.equal("Sign in ▾");
    });
});