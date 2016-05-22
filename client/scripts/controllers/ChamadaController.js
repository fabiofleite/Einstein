angular.module("Estrutura-Inicial")
    .controller('ChamadaController', ChamadaController);

function ChamadaController($location, $scope, $stateParams) {
    var vm = this;

	let alunoId = parseInt($stateParams.alunoId.slice(1));
	let aluno = Alunos.findOne({matricula: alunoId});

	$scope.aluno = {
		nome: aluno.nome,
		matricula: aluno.matricula,
		foto: aluno.foto
	};

	vm.markFalta = function() {
		if(alunoId == 123456){
			alunoId = 123123;
		}else if(alunoId == 123123){
			alunoId = 456789;
		}else {
			alunoId = 123456;
		}
		$location.path('/einstein/chamada/:'.concat(alunoId));
	}

	vm.markPresenca = function() {
		if(alunoId == 123456){
			alunoId = 123123;
		}else if(alunoId == 123123){
			alunoId = 456789;
		}else {
			alunoId = 123456;
		}
		$location.path('/einstein/chamada/:'.concat(alunoId));
	}

	vm.goToDetalhePage = function() {
		$location.path('/einstein/detalhe-chamada/:'.concat(123456));
	}
  vm.back = function(){
    if(alunoId == 123456){
      alunoId = 123456;
    }else if(alunoId == 123123){
      alunoId = 123456;
    }else if(alunoId==456789){
      alunoId = 123123;
    }
    $location.path('/einstein/chamada/:'.concat(alunoId));
  }

	vm.goToListaPage = function() {
		$location.path('/einstein/lista-chamada');
	}

}
