describe("StreetParty.js", function () {
  it("has 'street-party' as a title", function () {
    browser.url('http://localhost:3000/');
    expect(browser.getTitle()).to.equal("street-party");
  });
});
