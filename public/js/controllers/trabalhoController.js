angular.module('sigame').controller('trabalhoController',
  function ($scope, $routeParams, Trabalho) {

    if ($routeParams.trabalhoId) {

      Trabalho.get({ id: $routeParams.trabalhoId },
        function (trabalho) {
          $scope.trabalho = trabalho;
        },
        function (erro) {
          console.log("Não foi possível trazer os dados");
          console.log(erro);
        }
      );

    } else {
      $scope.trabalho = {};
    }

    $scope.trabalho = new Trabalho();

    $scope.salvar = function () {
      $scope.trabalho.$save()
        .then(function () {
          $scope.mensagem = { texto: 'Salvo com sucesso' };
          $scope.Trabalho = new Trabalho();
        })
        .catch(function(erro){
          $scope.mensagem = { texto: 'Não foi possível salvar!'};
        });
    };

  });