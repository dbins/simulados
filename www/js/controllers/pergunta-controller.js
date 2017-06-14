angular.module('simulados').controller('PerguntaController', function($scope, $rootScope, $http, $routeParams, $location) {
	
	var id_acao = 0;
	var pergunta = 0;
	var total_perguntas = 0;
	var resposta_selecionada = 0;
	var tmp_opcoes_selecionadas = [];
	var respostas_selecionadas = [];
	var dados_servidor;
	var dados_gabarito;
	var dados_para_postar;
	var link_perguntas = "http://www.dbins.com.br/ferramentas/pesquisa/api/perguntas.php";
	var link_post = "http://www.dbins.com.br/ferramentas/pesquisa/api/questionario.php";
	
	$scope.pergunta_descricao = "";
	$scope.opcoes = [];
	
	
	function imprimir(){
		$scope.opcoes = [];	
		//console.log(dados_servidor);
		total_perguntas = dados_servidor.length;
		var lista_opcoes = '';
		for (var i = 0; i < dados_servidor.length; i++) {
			if (pergunta == i){
				var pergunta_atual = dados_servidor[i];
				var opcoes = pergunta_atual.opcoes;
				for (var x = 0; x < opcoes.length; x++) {
					$scope.opcoes.push(opcoes[x]);
				}
				$scope.pergunta_descricao = pergunta_atual.descricao;
			}
		}
		
	}
	
	function GuardarRespostas(){
		var x = document.getElementsByName("opcao");
		var i;
		for (i = 0; i < x.length; i++) {
			//if (x[i].type == "checkbox") {
			if (x[i].checked == true) {
				resposta_selecionada = x[i].value;
				tmp_opcoes_selecionadas.push(x[i].value);
			}
		}
	}
	
	function finalizar(){
		dados_para_postar = '{"acao":"' + id_acao + '", "entidade":"' + $rootScope.entidade + '", "respostas":' + JSON.stringify(respostas_selecionadas) + '}';
		console.log(dados_para_postar);
		$http.post(link_post, dados_para_postar).success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			console.log(data);
			if (data.retorno == "OK"){
				$location.path("/gabarito/"+ id_acao);
			}
		}).
			error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
		
	$scope.continuar = function(){
		GuardarRespostas();
		if (resposta_selecionada == 0){
			alert('Precisa selecionar uma resposta!');
		} else {
			pergunta++;
			respostas_selecionadas.push({questao: tmp_opcoes_selecionadas});
			resposta_selecionada = 0;
			tmp_opcoes_selecionadas = [];
			
			if (pergunta < total_perguntas){
				imprimir();
			} else {
				//Finalizar
				alert('Obrigado por responder todas as perguntas! Chegou a hora de ver os resultados');
				console.log(respostas_selecionadas);
				finalizar();
			}
		}
	}
	
	if($routeParams.acaoId) {
		id_acao = $routeParams.acaoId;
		link_perguntas = link_perguntas + "?acao=" + $routeParams.acaoId;	
		
		$http.get(link_perguntas)
		.then(function(response) {
			//First function handles success
			dados_servidor = response.data;
			console.log(response.data);
			imprimir();
		}, function(response) {
			//Second function handles error
		   console.log("Something went wrong");
		});
	}
	
});