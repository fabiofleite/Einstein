angular.module("Estrutura-Inicial")
    .controller('LoginController', LoginController);

function LoginController($location, $scope) {
    var vm = this;

    vm.doLogin = function() {
        $location.path('/einstein/first-page');
    }

}
