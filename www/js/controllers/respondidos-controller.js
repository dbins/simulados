angular.module('simulados').controller('RespondidosController', function($scope, $rootScope, $http, $routeParams) {
	$scope.acoes = [];
	$scope.vazio = true;
	$http.get("http://www.dbins.com.br/ferramentas/pesquisa/api/concluidos.php?entidade=" + $rootScope.entidade)
    .then(function(response) {
        //First function handles success
	   if (response.data.length >0){
			$scope.vazio = false;	
	   }
       $scope.acoes = response.data;
    }, function(response) {
        //Second function handles error
       alert("Nao foi possivel conectar com o nosso servidor, por favor verifique a sua conexao com a Internet");
    });
});