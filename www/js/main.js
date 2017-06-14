var simulados = angular.module('simulados', ['ngAnimate', 'ngRoute'])
simulados.config(function($routeProvider){

		$routeProvider.when('/index', {
            templateUrl: 'partials/index.html',
            controller: 'IndexController'
        });
  
        $routeProvider.when('/menu', {
            templateUrl: 'partials/menu.html',
            controller: 'MenuController'
        });

        $routeProvider.when('/novos', {
            templateUrl: 'partials/novos.html',
			controller: 'NovosController'
        });
		
		$routeProvider.when('/respondidos', {
            templateUrl: 'partials/respondidos.html',
			controller: 'RespondidosController'
        });
		
		 $routeProvider.when('/pergunta/:acaoId', {
            templateUrl: 'partials/pergunta.html',
            controller: 'PerguntaController'
        });
		
		$routeProvider.when('/perfil', {
            templateUrl: 'partials/perfil.html',
            controller: 'PerfilController'
        });
		
		$routeProvider.when('/ranking', {
            templateUrl: 'partials/ranking.html',
            controller: 'RankingController'
        });
		
		$routeProvider.when('/desempenho', {
            templateUrl: 'partials/desempenho.html',
            controller: 'DesempenhoController'
        });
		
		$routeProvider.when('/gabarito/:gabaritoId', {
            templateUrl: 'partials/gabarito.html',
            controller: 'GabaritoController'
        });


        $routeProvider.otherwise({redirectTo: '/index'});

}).run(function ($rootScope) {
        $rootScope.entidade = 0;
    });

//http://arian-celina.com/developing-hybrid-mobile-apps-with-phonegap-angularjs-bootstrap/
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
		//alert('iniciou o phonegap');
        //navigator.geolocation.getCurrentPosition(app.onSuccess, app.onErr);
    },
    onErr: function(error)
    {
        alert('Unable to get your location. Without location you will not be able to use navigate feature! Error:' + 'n' + error.message);
    },

    onSuccess: function(position)
    {
        //blogSample.latitude = position.coords.latitude;
        //blogSample.longitude = position.coords.longitude;
    }
};
