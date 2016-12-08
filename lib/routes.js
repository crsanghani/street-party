FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/parties', {
  name: 'parties',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Parties'});
  }
});
