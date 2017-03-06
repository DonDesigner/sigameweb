angular.module('sigame').factory('Work', function($resource){
  return $resource('/api/trabalhos/:id');
});