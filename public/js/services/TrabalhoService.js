angular.module('sigame').factory('Trabalho', function($resource){
  return $resource('/trabalhos/:id');
});