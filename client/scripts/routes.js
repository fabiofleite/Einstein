angular.module("Estrutura-Inicial")
	.config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('first-page', {
			url: '/first-page',
			templateUrl: 'client/templates/first-page.html',
			controller: 'FirstPageController as firstCtrl'
    		})
		.state('second-page', {
			url: '/second-page',
			templateUrl: 'client/templates/second-page.html',
			controller: 'SecondPageController as secondCtrl'
		})
		.state('third-page', {
			url: '/third-page',
			templateUrl: 'client/templates/third-page.html',
			controller: 'ThirdPageController as thirdCtrl'
		})
		.state('detalhe-chamada' , {
			url: '/detalhe-chamada',
			templateUrl: 'client/templates/detalhe-chamada.html',
			controller: 'DetalheChamadaController as detalheCtrl'
		})
		;
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$urlRouterProvider.otherwise('/first-page');
}
