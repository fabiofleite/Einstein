angular.module("Estrutura-Inicial")
    .controller('DetalheChamadaController', DetalheChamadaController);

function DetalheChamadaController($location, $scope) {
    var vm = this;

    vm.goToFirstPage = function() {
        $location.path('/first-page');
    }

    $scope.aluno = {
        nome: "Joaozinho",
        idade: 20,
        matricula: 55555,
        faltas : {
            total: 10,
            fisica: 2,
            quimica: 3,
            biologia: 5
    },
        foto: 'https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png'
    };

    $scope.toggleGroup = function() {
        if ($scope.isGroupShown()) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = true;
        }
    };
    $scope.isGroupShown = function() {
        return $scope.shownGroup;
    };
}
