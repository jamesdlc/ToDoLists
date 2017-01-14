angular.module('TodoApp')
  .service('ListitemsService', ListitemsService);

  ListitemsService.$inject = ['$resource'];
  function ListitemsService($resource) {
    /* ngResource RESTful routes
      {
        'get':    'GET /items/:id',
        'save':   'POST /items',
        'query':  'GET /items',
        'remove': 'DELETE /items/:id',
        'update': 'PUT /items/:id'
      };
    */
    resource = $resource('/api/todolists/:todolistId/listitems/:listitemId', {todolistId: '@todolistId', listitemId: '@id'}, {
      update: {
        method: 'PUT'
      },
      query: {
        isArray: true,
      }
    });
    return resource;
  }
