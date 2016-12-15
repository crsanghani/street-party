Meteor.subscribe('parties');

Template.Parties.helpers({
    parties: () => {
        return Parties.find()
    }
});

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('LL');
});

Template.Parties.events({
  'click .party': function() {
    Session.set('currentPartyName', this.name);
    Session.set('currentParty', this._id);
  }
});
