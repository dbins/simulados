angular.module('simulados')
    .controller('IndexController', function($scope, $rootScope, $http, $routeParams, $location) {
	var link_login = "http://www.dbins.com.br/ferramentas/pesquisa/api/login.php";
	
	$scope.senha = '';
	$scope.email = '';
	
	$scope.continuar = function(){
		var efetuar_login = false;
		if ($scope.senha != ""){
			if ($scope.email != ""){
				efetuar_login = true;
			}
		}
		
		if (efetuar_login){
			dados_para_postar = '{"email":"' + $scope.email + '", "nome":""}';
			$http.post(link_login, dados_para_postar).success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				$rootScope.entidade = data.codigo;
				$location.path("/menu");
			}).
				error(function(data, status, headers, config) {
					console.log(data);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		} else {
			alert('Informe seus dados para continuar!');
		}
	}
	
    });