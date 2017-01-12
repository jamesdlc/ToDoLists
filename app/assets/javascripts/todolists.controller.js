angular
  .module('TodoApp')
  .controller('TodolistsController', TodolistsController);

TodolistsController.$inject = ['$location'];
function TodolistsController ( $location ) {
  var vm = this;
  console.log('Todolists Controller is running');
  vm.todolists = [{id: 1, name: 'sup list'}, {id: 45, name: 'bucket list'}];
  vm.sampleData = 'Yo what up';
}
