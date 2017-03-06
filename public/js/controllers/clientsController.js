angular.module('sigame').controller('clientsController',
function($scope, Client){

    $scope.clients = [];
    $scope.filter = '';
    $scope.message = { text: ''};

    function listClient(){
        Client.query(
            function(clients){
                $scope.clients = clients;
            },
            function(erro){
                console.log("Unable to get client list!");
                console.log(erro);
            }
        )
    }
    listClient();


});