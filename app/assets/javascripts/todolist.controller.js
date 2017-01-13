angular
  .module('TodoApp')
  .controller('TodolistController', TodolistController);

TodolistController.$inject = ['TodolistsService', 'ListitemsService', '$location', '$routeParams'];
function TodolistController ( TodolistsService, ListitemsService, $location, $routeParams ) {

}
