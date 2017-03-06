angular.module('sigame').factory('Client', function($resource){
  return $resource('/api/clients/:id');
});

