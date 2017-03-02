angular.module('sigame').factory('Cliente', function($resource){
  return $resource('/api/clientes/:id');
});

