angular.module('sigame').controller('workController',
  function ($scope, $routeParams, Work) {

    if ($routeParams.workId) {

      Work.get({ id: $routeParams.workId },
        function (work) {
          $scope.work = work;
        },
        function (erro) {
          console.log("Não foi possível trazer os dados");
          console.log(erro);
        }
      );

    } else {
      $scope.work = {};
    }

    $scope.work = new Work();

    $scope.save = function () {
      $scope.work.$save()
        .then(function () {
          $scope.message = { text: 'Salvo com sucesso' };
          $scope.work = new Work();
        })
        .catch(function (erro) {
          $scope.message = { text: 'Não foi possível salvar!' };
        });
    };

  });