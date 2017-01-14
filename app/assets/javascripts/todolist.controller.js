angular
  .module('TodoApp')
  .controller('TodolistController', TodolistController);

TodolistController.$inject = ['TodolistsService', 'ListitemsService', '$location', '$routeParams'];

function TodolistController ( TodolistsService, ListitemsService, $location, $routeParams ) {
  console.log("todolist.controller.js is connected!");
  var vm = this;
  var todolistId = $routeParams.todolistId;
  vm.todolist = {};
  vm.listitems = [];

  vm.deleteListitem = deleteListitem;
  vm.toggleEditForm = toggleEditForm;
  vm.updateListitem = updateListitem;
  vm.createListitem = createListitem;

  getTodolist(todolistId);
  function getTodolist(id) {
    TodolistsService.get({id: id}, function(data) {
      console.log('query result:', data);
      vm.todolist = data;
      vm.listitems = data.listitems;
    });
  }

  function deleteListitem(listitem) {
    console.log('deleting list item: ', listitem);
    ListitemsService.delete({todolistId: listitem.todolist_id, listitemId: listitem.id}, function(listitem) {
      console.log('deleted item', listitem);
      vm.listitems.splice(vm.listitems.indexOf(listitem), 1);
    });

  }

  function toggleEditForm(listitem) {
    console.log('toggleEditForm for', listitem);
    listitem.showForm = !listitem.showForm;
  }

  function updateListitem(listitem) {
    console.log('update list item', listitem);
    ListitemsService.update({todolistId: listitem.todolist_id, listitemId: listitem.id}, listitem, updateListitemSuccess);

    function updateListitemSuccess(receivedListitem) {
      console.log('updateListitemSuccess ', receivedListitem);
      var index = vm.listitems.indexOf(listitem);
      vm.listitems[index] = receivedListitem;
    }
  }

  function createListitem() {
    var listitemTask = vm.newListitemTask;
    console.log('create with ', listitemTask);
    if(vm.newListitemTask.length > 1) {
      ListitemsService.save({todolistId: todolistId},
                       {task: listitemTask},
                       handleCreateListitemSuccess);
      vm.newListitemTask = '';
    }
  }
  function handleCreateListitemSuccess(listitem) {
   console.log('created', listitem);
   vm.listitems.unshift(listitem);
 }
}
