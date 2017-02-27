angular.module('sigame').controller('trabalhosController',
  function ($resource, $scope) {

    $scope.trabalhos = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };

    var Trabalhos = $resource('/trabalhos/');

    function listaTrabalhos() {
      Trabalhos.query(
        function (trabalhos) {
          $scope.trabalhos = trabalhos;
        },
        function (erro) {
          console.log("Não foi possível obter a lista")
          console.log(erro);
        }
      )
    }
    listaTrabalhos();

    $scope.remove = function(trabalho){
      Trabalhos.delete({id : trabalho._id});
    }
  }
);