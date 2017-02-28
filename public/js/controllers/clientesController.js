angular.module('sigame').controller('clientesController',
function($scope, Cliente){

    $scope.clientes = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: ''};

    function listarClientes(){
        Cliente.query(
            function(clientes){
                $scope.clientes = clientes;
            },
            function(erro){
                console.log('Não foi possível obser lista de clientes');
                console.log(erro);
            }
        )
    }
    listarClientes();


});