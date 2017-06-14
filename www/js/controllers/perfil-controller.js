angular.module('simulados').controller('PerfilController', function($scope, $rootScope, $http, $routeParams) {

	var link_perfil = "http://www.dbins.com.br/ferramentas/pesquisa/api/desempenho.php?entidade="  + $rootScope.entidade;

 	$http.get(link_perfil)
	.then(function(response) {
		//First function handles success
		$scope.resultados = response.data;
	}, function(response) {
		//Second function handles error
	   alert("Nao foi possivel conectar com o nosso servidor, por favor verifique a sua conexao com a Internet");
	});
});