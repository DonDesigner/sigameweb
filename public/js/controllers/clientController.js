angular.module('sigame').controller('clientController',
  function ($scope, $routeParams, Client) {

    if ($routeParams.clientId) {

      Client.get({id: $routeParams.clientId},
      function(client){
        $scope.client = client;
      },
        function(erro){
          console.log('Não foi possível recuperar os dados');
          console.log(erro);
        }
      )
    } else {
      $scope.client = {};
    }

    $scope.client = new Client();

    $scope.save = function () {
      $scope.client.$save()
        .then(function () {
          $scope.message = { text: 'Salvo com sucesso' };
          $scope.client = new Client();
        })
        .catch(function (erro) {
          $scope.message = { text: 'Não foi possível salvar!' };
        });
    }

  });