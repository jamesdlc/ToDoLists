angular
  .module('TodoApp')
  .controller('TodolistsController', TodolistsController);

TodolistsController.$inject = ['$location'];
function TodolistsController ( $location ) {
  var vm = this;
  console.log('Todolists Controller is running');
  vm.todolists = [];
  vm.newTodolistName = '';
  
}
