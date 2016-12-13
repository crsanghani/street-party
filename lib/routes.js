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
        BlazeLayout.render('MainLayout', { main: 'Events' });
    }
});

FlowRouter.route('/tasks', {
    name: 'tasks',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Tasks' });
    }
});

FlowRouter.route('/parties', {
    name: 'parties',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Parties' });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render('MainLayout', { main: 'login' });
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render('MainLayout', { main: 'register' });
    }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action: function() {
    Accounts.logout();
    FlowRouter.go('/');
  }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action: function() {
        BlazeLayout.render('MainLayout', { main: 'profile' });
    }
});
