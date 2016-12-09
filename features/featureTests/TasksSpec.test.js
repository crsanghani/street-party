// import { getBrowser, cleanDatabase } from './testHelpers';

var chai = require('chai');

describe("Tasks", function() {

    beforeEach(() => {
        browser.url('http://localhost:3000/tasks');
    });

    it("has 'description' in its table", function() {
        expect(browser.getText("label")).to.include('Description');
    });

    //   describe("Add Tasks", function() {
    //     it("should be able to add a task", function() {
    //       browser.setValue("[name=name]", "This is a Task")
    //              .setValue("[name=desc]", "This is the Tasks Description")
    //              .setValue("[name=deadline]", Date.now())
    //              .submitForm("#insertTaskForm");
    //       expect(browser.getText(".tasks h3")).to.include("This is a Task");
    //     });
    //   });
});