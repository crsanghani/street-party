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
        BlazeLayout.render('HomeLayout', { main: 'Parties'});
    }
});

FlowRouter.route('/create-party', {
    name: 'create-party',
    action() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('HomeLayout', { main: 'CreateParty'});
    }
});

FlowRouter.route('/street-party', {
    name: 'street-party',
    action() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('MainLayout', { main: 'Events' });
    }
});

FlowRouter.route('/tasks', {
    name: 'tasks',
    action() {
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('MainLayout', { main: 'Tasks' });
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render('HomeLayout', { main: 'login' });
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render('HomeLayout', { main: 'register' });
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
      if(!Meteor.userId()) {
        FlowRouter.go('home');
      }
        BlazeLayout.render('MainLayout', { main: 'profile' });
    }
});
