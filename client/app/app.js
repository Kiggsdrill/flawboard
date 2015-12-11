'use strict';

angular.module('flawboardApp', [
  'flawboardApp.auth',
  'flawboardApp.admin',
  'flawboardApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
  ])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
