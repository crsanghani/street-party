Meteor.subscribe('tasks');

Template.Tasks.helpers({
    recipes: () => {
        return Tasks.find({});
    }
});