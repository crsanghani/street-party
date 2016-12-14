Meteor.subscribe('parties');

Template.Parties.helpers({
    parties: () => {
        return Parties.find()
    }
});

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('LL');
});