Parties = new Mongo.Collection('parties');

let TasksSchema = new SimpleSchema({
  'title': {
    type:   String,
    label:  "The name of the task."
  },
  'start': {
    type:   String,
    label:  "When this task is due."
  },
  'assignee': {
    type:   String,
    label:  "Participant responsible for task."
  },
  'createdBy': {
    type:   String,
    label:  "Administrator",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  }
});


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
  tasks: {
    type: [TasksSchema]
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
