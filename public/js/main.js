angular.module('sigame', ['ngRoute', 'ngResource'])

//  .config(['$locationProvider', function ($locationProvider) {
//    $locationProvider.hashPrefix('');
//  }])

  .config(function ($routeProvider, $locationProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'partials/root.html',
      })

      .when('/works', {
        templateUrl: 'partials/works.html',
        controller: 'worksController'
      })

      .when('/works/:workId', {
        templateUrl: 'partials/work.html',
        controller: 'workController'
      })

      .when('/work', {
        templateUrl: 'partials/work.html',
        controller: 'workController'
      })

      .when('/clients', {
        templateUrl: 'partials/clients.html',
        controller: 'clientsController'
      })

      .when('/client', {
        templateUrl: 'partials/client.html',
        controller: 'clientController'
      })

      .when('/clients/:clientId', {
        templateUrl: 'partials/client.html',
        controller: 'clientController'
      });

     // $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');

  });
