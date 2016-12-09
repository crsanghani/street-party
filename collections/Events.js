Events = new Mongo.Collection( 'events' );

Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let EventsSchema = new SimpleSchema({

  'title': {
    type:   String,
    label:  "The title of the event."
  },

  'start': {
    type:   String,
    label:  "When this event will start."
  },

  'end': {
    type:   String,
    label:  "When this event will end."
  }
});

Events.attachSchema( EventsSchema );
