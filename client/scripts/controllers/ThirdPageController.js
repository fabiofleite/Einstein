angular.module("Estrutura-Inicial")
    .controller('ThirdPageController', ThirdPageController);

function ThirdPageController($location, $scope) {
    var vm = this;

    vm.goToFirstPage = function() {
        $location.path('/first-page');
    }
}