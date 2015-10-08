Meteor.publish('graphs', function() {
	return Graphs.find();
})

Meteor.publish('deathData', function(){
	return Deathdata.find();
})