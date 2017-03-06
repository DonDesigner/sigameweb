angular.module('sigame').controller('worksController',
  function ($scope, Work) {

    $scope.works = [];
    $scope.filter = '';
    $scope.message = { text: '' };

    function listWorks() {
      Work.query(
        function (works) {
          $scope.works = works;
        },
        function (erro) {
          console.log("Não foi possível obter a lista")
          console.log(erro);
        }
      )
    }
    listWorks();

    $scope.remove = function (work) {
      Work.delete({ id: work._id },
        listWorks,
        function (erro) {
          console.log("Não foi possível remover o contato!");
          console.log(erro)
        });
    }
  }
);