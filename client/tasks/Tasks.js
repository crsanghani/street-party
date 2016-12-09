Meteor.subscribe('tasks');

Template.Tasks.helpers({
    tasks: () => {
        return Tasks.find({});
    }
});