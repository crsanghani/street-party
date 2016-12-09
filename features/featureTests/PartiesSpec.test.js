// import StubCollections from 'meteor/hwillson:stub-collections';
// import { Parties } from '../../client/parties/Parties.js';

describe("Parties", function () {
  // StubCollections.stub(Parties);

  beforeEach(() => {
    browser.url('http://localhost:3000/parties');
    // Parties.insert({ name: 'Party Name',
    //                  streetName: 'Street Name',
    //                  date: '2016-12-08',
    //                  time: '10:00pm'
    //               });
  });

  it("should display the page title", function () {
    expect(browser.getText(".main-layout h1")).to.equal("Parties");
  });

  // it("should be able to see a party", function() {
  //   expect(browser.getText(".party")).to.include("Party Name");
  // });

  // Restore the `Parties` collection
  // StubCollections.restore();
});
