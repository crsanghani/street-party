if(Meteor.isClient) {
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
