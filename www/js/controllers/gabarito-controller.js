angular.module('simulados').controller('GabaritoController', function($scope, $rootScope, $http, $routeParams) {
	var link_gabarito = "http://www.dbins.com.br/ferramentas/pesquisa/api/gabarito.php?acao=3&entidade=" + $rootScope.entidade;
	$scope.respostas = [];
	$scope.total_questoes = 0;
	$scope.total_acertos = 0;
	if($routeParams.gabaritoId) {
		$http.get(link_gabarito)
		.then(function(response) {
			//First function handles success
			$scope.respostas = response.data;
			$scope.total_questoes = $scope.respostas.length;
			for (var i = 0; i < $scope.respostas.length; i++) {
				if ($scope.respostas[i].acerto==1){
					$scope.total_acertos++;
				}
			}	
		}, function(response) {
			//Second function handles error
		   alert("Nao foi possivel conectar com o nosso servidor, por favor verifique a sua conexao com a Internet");
		});
	}
});