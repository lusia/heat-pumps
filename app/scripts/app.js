'use strict';

var app = angular.module('heatPumpsApp', [
	'ngRoute'
]);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
