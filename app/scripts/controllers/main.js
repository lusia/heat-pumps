'use strict';

var app = angular.module('heatPumpsApp');

app.controller('MainCtrl', ['$scope', '$interval', function ($scope, $interval) {
	var time = function(){
		$scope.time = (new Date()).getTime();
	};

	$interval(time, 1000);
	time();
}]);
