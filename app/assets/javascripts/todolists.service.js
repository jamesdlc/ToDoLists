angular.module('TodoApp')
  .service('TodolistService', TodolistService);

  TodolistService.$inject = ['$resource'];
  function TodolistService($resource) {
    /* ngResource RESTful routes
      {
        'get':    'GET /items/:id',
        'save':   'POST /items',
        'query':  'GET /items',
        'remove': 'DELETE /items/:id',
        'update': 'PUT /items/:id'
      };
    */
    resource = $resource('/api/todolists/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      },
      query: {
        isArray: true,
      }
    });
    return resource;
  }
