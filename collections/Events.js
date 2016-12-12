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
  'createdBy': {
    type:   String,
    label:  "Administrator",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  // 'assignee': {
  //   type:   String,
  //   label:  "Assign this task.",
  //   autoValue: function() {
  //     return null;
  //   }
  // },
  // 'completed': {
  //   type:   Boolean,
  //   label:  "Has this task been completed?",
  //   autoValue: false
  // }
});

CalEvents.attachSchema( TasksSchema );


// Events = new Mongo.Collection( 'events' );

// Events.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false
// });
//
// Events.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true
// });
//
// let EventsSchema = new SimpleSchema({
//
//   'title': {
//     type:   String,
//     label:  "The title of the event."
//   },
//
//   'start': {
//     type:   String,
//     label:  "When this event will start."
//   },
//
//   'end': {
//     type:   String,
//     label:  "When this event will end."
//   }
// });
//
// Events.attachSchema( EventsSchema );
