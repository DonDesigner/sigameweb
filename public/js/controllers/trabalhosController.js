angular.module('sigame').controller('trabalhosController',
  function ($scope, Trabalho) {

    $scope.trabalhos = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };

   //var Trabalhos = $resource('/trabalhos/');

    function listaTrabalhos() {
      Trabalho.query(
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
      Trabalho.delete({id : trabalho._id},
      listaTrabalhos,
      function(erro){
        console.log("Não foi possível remover o contato!");
        console.log(erro)
      });
    }
  }
);