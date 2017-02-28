angular.module('sigame').factory('Cliente', function($resource){
  return $resource('/clientes/:id');
});

