angular.module('TodoApp')
  .service('TodolistsService', TodolistsService);

  TodolistsService.$inject = ['$resource'];
  function TodolistsService($resource) {
    /* ngResource RESTful routes
      {
        'get':    'GET /items/:id',
        'save':   'POST /items',
        'query':  'GET /items',
        'remove': 'DELETE /items/:id',
        'update': 'PUT /items/:id'
      };
    */
    resource = $resource('/api/todolists/:todolistsId/listitems/:id', {todolistsId: '@todolistsId', listitemsId: '@id'}, {
      update: {
        method: 'PUT'
      },
      query: {
        isArray: true,
      }
    });
    return resource;
  }
