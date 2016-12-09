// import { getBrowser, cleanDatabase } from './testHelpers';
//
//
//
// describe("Tasks", function () {
//   it("shows a list of task", function () {
//     browser.url('http://localhost:3000/tasks');
//     expect(browser.getTitle()).to.equal("street-party");
//   });
// });
var chai = require('chai');

describe("Tasks", function () {
  it("has 'description' in its table", function () {
    browser.url('http://localhost:3000/tasks');
    expect(browser.getText("label")).to.include('Description');
  });
});
