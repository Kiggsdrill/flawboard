'use strict';

angular.module('flawboardApp.auth', [
  'flawboardApp.constants',
  'flawboardApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
