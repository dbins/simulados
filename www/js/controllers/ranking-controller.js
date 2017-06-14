angular.module('simulados').controller('RankingController', function($scope,  $rootScope, $http, $routeParams) {
	var link_ranking = "http://www.dbins.com.br/ferramentas/pesquisa/api/ranking.php";
	$http.get(link_ranking)
	.then(function(response) {
		//First function handles success
		$scope.resultados = response.data;
	}, function(response) {
		//Second function handles error
	   alert("Nao foi possivel conectar com o nosso servidor, por favor verifique a sua conexao com a Internet");
	});
	
});