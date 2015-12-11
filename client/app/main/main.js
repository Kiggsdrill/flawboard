'use strict';

angular.module('flawboardApp')
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/main/main.html',
		controller: 'MainController',
		controllerAs: 'main',
		authenticate: true
	});
});
