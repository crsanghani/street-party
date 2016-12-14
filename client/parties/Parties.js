Meteor.subscribe('parties');

Template.Parties.helpers({
  parties: ()=> {
    return Parties.find()
  }
});

Template.Parties.events({
  'click .party':  function() {
    Session.set('currentParty', this._id)
  }
});
