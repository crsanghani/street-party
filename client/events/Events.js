Template.Events.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'Events' );
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
    }
  });
});
