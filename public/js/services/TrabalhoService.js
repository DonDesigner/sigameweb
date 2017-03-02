angular.module('sigame').factory('Trabalho', function($resource){
  return $resource('/api/trabalhos/:id');
});