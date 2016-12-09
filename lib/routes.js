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
