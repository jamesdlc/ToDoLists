angular
  .module('TodoApp')
  .controller('TodolistsController', TodolistsController);

TodolistsController.$inject = ['TodolistsService', '$location'];
function TodolistsController ( TodolistsService, $location ) {
  var vm = this;
  console.log('Todolists Controller is running');
  vm.todolists = [];
  vm.newTodolistName = '';
  vm.deleteTodolist = deleteTodolist;
  vm.createTodolist = createTodolist;
  vm.showTodolist = showTodolist;

  getTodolists();

  function getTodolists() {
    TodolistsService.query(function(data){
      console.log('here\'s the lists data in the controller', data);
      vm.todolists = data;
    });
  }

  function deleteTodolist(todolist, $event) {
    TodolistsService.remove({id: todolist.id}, handleDeleteSuccess);
    $event.stopPropagation();

    function handleDeleteSuccess(data) {
      console.log('deleted!');
      vm.todolists.splice(vm.todolists.indexOf(todolist), 1);
    }
  }

  function createTodolist() {
    console.log('create with', vm.newTodolistName);
    if(vm.newTodolistName.length > 1) {
      TodolistsService.save({name: vm.newTodolistName}, handleCreateSuccess);
      vm.newTodolistName = '';
    }
  }

  function handleCreateSuccess(data) {
    console.log('created', data);
    vm.todolists.unshift(data);
  }

  function showTodolist(todolist) {
    console.log('transition to showing todolist:', todolist);
    $location.path('/todolists/' + todolist.id);
  }

}
