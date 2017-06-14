angular.module('simulados').controller('NovosController', function($scope, $http, $routeParams) {
	$scope.acoes = [];
	$http.get("http://www.dbins.com.br/ferramentas/pesquisa/api/acoes.php")
    .then(function(response) {
        //First function handles success
        $scope.acoes = response.data;
    }, function(response) {
        //Second function handles error
       console.log("Something went wrong");
    });
	
});