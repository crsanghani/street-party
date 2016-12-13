CalEvents = new Mongo.Collection('calevents');

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

CalEvents.attachSchema( TasksSchema );
