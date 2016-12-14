Session.setDefault('editing_calevent', null);
Session.setDefault('showEditEvent', false);

// function getCurrentParty() {
// 	return Session.get("currentParty")
// }

Template.calendar.showEditEvent = function(){
	return Session.get('showEditEvent');
}

Template.editEvent.evt = function(){
	var calEvent = Parties.findOne({'_id': getCurrentParty()});
	return calEvent;
}

var updateCalendar = function(){
	$('#calendar').fullCalendar( 'refetchEvents' );
}

Template.editEvent.events({
	'click .save':function(evt,tmpl){
		updateCalEvent(Session.get('editing_calevent'),tmpl.find('.title').value, tmpl.find('.assignee').value,);
		Session.set('editing_calevent',null);
		Session.set('showEditEvent',false);
		$('#EditEventModal').modal("hide");
	},
	'click .close':function(evt,tmpl){
		Session.set('editing_calevent',null);
		Session.set('showEditEvent',false);
		$('#EditEventModal').modal("hide");
	}	,
	'click .remove':function(evt,tmpl){
		removeCalEvent(Session.get('editing_calevent'));
		Session.set('editing_calevent',null);
		Session.set('showEditEvent',false);
		$('#EditEventModal').modal("hide");
	},
	'click .complete':function(evt,tmpl){
		completeCalEvent(Session.get('editing_calevent'), tmpl.find('.title').value);
		Session.set('editing_calevent',null);
		Session.set('showEditEvent',false);
		$('#EditEventModal').modal("hide");
	}
})

Template.calendar.rendered = function(){
	$('#calendar').fullCalendar({
		header:{
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},

		dayClick:function( date, allDay, jsEvent, view) {
			Parties.update({'_id': getCurrentParty()}, {$addToSet: { tasks: { title:'New Item',start: date, end: date,assignee:'Assignee' } } } );
			updateCalendar();
		},

		eventClick:function(calEvent,jsEvent,view){
			Session.set('editing_calevent',calEvent.id);
			Session.set('showEditEvent', true);
			$('#EditEventModal').modal("show");
		},

		eventDrop:function(calEvent){
			Parties.update({'_id': getCurrentParty()}, {$addToSet: {start:calEvent.start,end:calEvent.end}});
			updateCalendar();
		},

		events: function(start, end, callback) {

			// Template.editEvent.evt = function(){
			// 	var calEvent = Parties.findOne({'_id': getCurrentParty()});
			// 	return calEvent;
			// }


			var events = [];
			var currentParty = getCurrentParty();
			var calEvents = Parties.find({'_id':currentParty()}).fetch();
			console.log(calEvents);
			console.log(currentParty());
			calEvents.forEach(function(evt){
				events.push({	id:evt._id,title:evt.title,start:evt.start,end:evt.end,assignee:evt.assignee});
			});
			callback(events);
		},
		editable:true
	});

	Tracker.autorun( () => {
		Parties.find().fetch().tasks;
		$( "#calendar" ).fullCalendar( 'refetchEvents' );
	});
}
var removeCalEvent = function(id,title){
	Parties.remove({'_id': getCurrentParty()}); //#TODO
	updateCalendar();
}
var completeCalEvent = function(id,title){
	Parties.update({'_id': getCurrentParty()}, {$set: {title:"COMPLETED: " + title}});
	updateCalendar();
}
var updateCalEvent = function(id,title, assignee){
	Parties.update({'_id': getCurrentParty()}, {$set: {title:title}});
	Parties.update({'_id': getCurrentParty()}, {$set: {assignee:assignee}});
	updateCalendar();
}
