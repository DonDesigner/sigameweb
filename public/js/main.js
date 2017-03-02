angular.module('sigame', ['ngRoute', 'ngResource'])

//  .config(['$locationProvider', function ($locationProvider) {
//    $locationProvider.hashPrefix('');
//  }])

  .config(function ($routeProvider, $locationProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'partials/root.html',
      })

      .when('/trabalhos', {
        templateUrl: 'partials/trabalhos.html',
        controller: 'trabalhosController'
      })

      .when('/trabalhos/:trabalhoId', {
        templateUrl: 'partials/trabalho.html',
        controller: 'trabalhoController'
      })

      .when('/trabalho', {
        templateUrl: 'partials/trabalho.html',
        controller: 'trabalhoController'
      })

      .when('/clientes', {
        templateUrl: 'partials/clientes.html',
        controller: 'clientesController'
      })

      .when('/cliente', {
        templateUrl: 'partials/cliente.html',
        controller: 'clienteController'
      })

      .when('/clientes/:clienteId', {
        templateUrl: 'partials/cliente.html',
        controller: 'clienteController'
      });

     // $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');

  });
