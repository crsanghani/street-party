if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('street-party');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/street-party', {
    name: 'street-party',
    action() {
        BlazeLayout.render('MainLayout', { main: 'fullcalendar' });
    }
});

<<<<<<< HEAD
FlowRouter.route('/tasks', {
    name: 'tasks',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Tasks' });
    }
});
=======
FlowRouter.route('/parties', {
  name: 'parties',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Parties'});
  }
});
>>>>>>> 08e6677b91fd94de66ea8ff70e32caddfed9bb75
