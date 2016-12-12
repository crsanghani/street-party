// let closeModal = () => {
//   $( '#add-edit-event-modal' ).modal( 'hide' );
//   $( '.modal-backdrop' ).fadeOut();
// };
//
// Template.AddEditEventModal.helpers({
//   modalType(type) {
//     let eventModal = Session.get('eventModal');
//     if (eventModal) {
//       return eventModal.type === type;
//     }
//   },
//   modalLabel() {
//     let eventModal = Session.get( 'eventModal' );
//
//     if ( eventModal ) {
//       return {
//         button: eventModal.type === 'edit' ? 'Edit' : 'Add',
//         label: eventModal.type === 'edit' ? 'Edit' : 'Add'
//       };
//     }
//   },
//   selected( v1, v2 ) {
//     return v1 === v2;
//   },
//   event() {
//     let eventModal = Session.get( 'eventModal' );
//
//     if ( eventModal ) {
//       return eventModal.type === 'edit' ? Events.findOne( eventModal.event ) : {
//         start: eventModal.date,
//         end: eventModal.date
//      };
//    }
//   }
// });
//
// Template.AddEditEventModal.events({
//   'submit form' ( event, template ) {
//     event.preventDefault();
//
//     let eventModal = Session.get( 'eventModal' ),
//         submitType = eventModal.type === 'edit' ? 'editEvent' : 'addEvent',
//         eventItem  = {
//           title: template.find( '[name="title"]' ).value,
//           start: template.find( '[name="start"]' ).value,
//           end: template.find( '[name="end"]' ).value
//         };
//
//     if ( submitType === 'editEvent' ) {
//       eventItem._id   = eventModal.event;
//     }
//
//     Meteor.call( submitType, eventItem, ( error ) => {
//       if ( error ) {
//         Bert.alert( error.reason, 'danger' );
//       } else {
//         Bert.alert( `Event ${ eventModal.type }ed!`, 'success' );
//         closeModal();
//       }
//     });
//   },
//   'click .delete-event' ( event, template ) {
//     let eventModal = Session.get( 'eventModal' );
//     if ( confirm( 'Are you sure? This is permanent.' ) ) {
//       Meteor.call( 'removeEvent', eventModal.event, ( error ) => {
//         if ( error ) {
//           Bert.alert( error.reason, 'danger' );
//         } else {
//           Bert.alert( 'Event deleted!', 'success' );
//           closeModal();
//         }
//       });
//     }
//   }
// });
