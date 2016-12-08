Meteor.subscribe('parties');

Template.Parties.helpers({
  parties: ()=> {
    return Parties.find()
  }
});
