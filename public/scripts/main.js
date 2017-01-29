'use strict';

angular.module('mainApp', [
      'ui.router',
      'ui.bootstrap'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        
      })
    

 // if none of the above states are matched, use this as the fallback
             $urlRouterProvider.otherwise('/');
  });
