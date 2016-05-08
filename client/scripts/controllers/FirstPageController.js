angular.module("Estrutura-Inicial")
    .controller('FirstPageController', FirstPageController);

function FirstPageController($location, $scope) {
    var vm = this;

    vm.goToSecondPage = function() {
        $location.path('/second-page');
    }

    vm.showMessage = function() {
        confirm("Você clicou no botão");
    }

    vm.goToDetalhePage = function() {
        $location.path('/detalhe-chamada');
    }
}
