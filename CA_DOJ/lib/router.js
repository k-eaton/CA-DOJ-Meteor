Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('graphs'); }
});

Router.route('/', {name: 'graphsList'});