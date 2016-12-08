Parties = new Mongo.Collection('parties');

Party = new SimpleSchema({
  name: {
    type: String,
    label: "Party Name"
  },
  streetName: {
    type: String,
    label: "Street Name"
  },
  date: {
    type: Date,
    label: "Party Date"
  },
  time: {
    type: String,
    label: "Party Time"
  },
  createdBy: {
    type: String,
    label: "Created By",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Parties.attachSchema(Party);
