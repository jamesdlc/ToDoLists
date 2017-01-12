angular.module('TodoApp', ['ngRoute', 'templates'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ( $routeProvider, $locationProvider ) {
  $routeProvider
    .when('/', {
      templateUrl: 'todolists.template.html',
      controller: 'TodolistsController',
      controllerAs: 'todolistCtrl'
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
