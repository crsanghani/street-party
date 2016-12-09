let isPast = (date) => {
  let today = moment().format();
  return moment(today).isAfter(date);
};

Template.Events.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'events' );
});

Template.Events.onRendered( () => {
  $( "#events-calendar" ).fullCalendar({
    events( start, ends, timezone, callback ) {
      let data = Events.find().fetch().map( ( event ) => {
        event.editable = !isPast( event.start );
        return event;
      });

      if ( data ) {
        callback( data );
      }
    },
    eventRender( event, element ) {
      element.find( '.fc-content' ).html(
        `<h4>${ event.title }</h4>`
      );
    }
  });

  Tracker.autorun( () => {
    Events.find().fetch();
    $( "#events-calendar" ).fullCalendar( 'refetchEvents' );
  });
});
