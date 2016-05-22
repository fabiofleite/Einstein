angular.module("Estrutura-Inicial")
    .controller('AcompanhamentoController', AcompanhamentoController);

function AcompanhamentoController($location, $scope, $ionicScrollDelegate) {

	let turmas = _.map(Turmas.find().fetch(), function(r){
		return {
			turma: r,
			faltas: {aluno: "fulano de tal", presenca: "80%"}
		};
	});

	$scope.turmas = turmas;

	console.log(turmas);

	$scope.toggleGroup = function() {
		if ($scope.isGroupShown()) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = true;
			$ionicScrollDelegate.scrollBottom();
		}
	};
	$scope.isGroupShown = function() {
		return $scope.shownGroup;
	};
};
