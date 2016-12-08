
Template.body.events({

    'click .addEvent': function () {
        Events.insert({
            date: new Date()
        })
    },

});
