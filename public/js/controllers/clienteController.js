angular.module('sigame').controller('clienteController',
  function ($scope, $routeParams, Cliente) {

    if ($routeParams.clienteId) {

      Cliente.get({id: $routeParams.clienteId},
      function(cliente){
        $scope.cliente = cliente;
      },
        function(erro){
          console.log('Não foi possível recuperar os dados');
          console.log(erro);
        }
      )
    } else {
      $scope.cliente = {};
    }

    $scope.cliente = new Cliente();

    $scope.salvar = function () {
      console.log("chegou");

      $scope.cliente.$save()
        .then(function () {
          $scope.mensagem = { texto: 'Salvo com sucesso' };
          $scope.cliente = new Cliente();
        })
        .catch(function (erro) {
          $scope.mensagem = { texto: 'Não foi possível salvar!' };
        });
    }

  });