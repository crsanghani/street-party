describe("Homepage Calendar", function () {
  it("should have a calender ", function () {
    browser .url('http://localhost:3000/');
    expect(browser.getText('h2')).to.equal("December 2016");
  });
});
