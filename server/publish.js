
Meteor.publish( 'events', function() {
  return Events.find();
});

Meteor.publish('tasks', function() {
    return Tasks.find();
});

Meteor.publish('parties', function() {
    return Parties.find();
});
