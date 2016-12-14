
Meteor.publish( 'events', function() {
  return Events.find();
});

Meteor.publish('tasks', function() {
    return Parties.find().fetch().tasks;
});

Meteor.publish('parties', function() {
    return Parties.find();
});
