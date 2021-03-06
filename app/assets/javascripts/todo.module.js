angular.module('TodoApp', ['ngRoute', 'templates', 'ngResource'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ( $routeProvider, $locationProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: 'todolists.template.html',
      controller: 'TodolistsController',
      controllerAs: 'todolistsCtrl'
    })
    .when('/todolists/:todolistId', {
      templateUrl: 'todolist.template.html',
      controller: 'TodolistController',
      controllerAs: 'todolistCtrl'
    })
    .when('/todolists', {  //note same as above, JIC
      templateUrl: 'todolists.template.html',
      controller: 'TodolistsController',
      controllerAs: 'todolistsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider
     .html5Mode({
       enabled: true,
       requireBase: false
     });
}
