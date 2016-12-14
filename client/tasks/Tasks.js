Meteor.subscribe('tasks');

Template.Tasks.helpers({
    tasks: () => {
        return Parties.find({});
    }
});

Template.Tasks.events({
  'click .toggle-checked'() {
    Parties.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
});
