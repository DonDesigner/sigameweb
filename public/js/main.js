angular.module('sigame', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'partials/root.html',
      })

      .when('/trabalhos', {
        templateUrl: 'partials/trabalhos.html',
        controller: 'trabalhosController'
      })

      .when('/trabalhos/:trabalhoId',{
        templateUrl : 'partials/trabalho.html',
        controller : 'trabalhoController'
      })
      
      .when('/trabalho', {
        templateUrl : 'partials/trabalho.html',
        controller : 'trabalhoController'
      })

      .when('/adm/tipo', {
        templateUrl : 'partials/tipo.html',
        controller : 'tipoController'
      })

  });
