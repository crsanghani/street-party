Meteor.subscribe('tasks');

Template.Tasks.helpers({
    tasks: () => {
        return CalEvents.find({});
    }
});

Template.Tasks.events({
  'click .toggle-checked'() {
    CalEvents.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
});
