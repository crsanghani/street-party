Parties = new Mongo.Collection('parties');

// Host = new SimpleSchema({
//   firstName: {
//     type: String,
//     autoValue: function() {
//       return Meteor.user().profile.firstName;
//     }
//   },
//   lastName: {
//     type: String,
//     autoValue: function() {
//       return Meteor.user().profile.lastName;
//     }
//   }
// });

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
  host: {
    type: String,
    label: "Hosted By",
    autoValue: function() {
      return `${Meteor.user().profile.firstName} ${Meteor.user().profile.lastName}`;
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
