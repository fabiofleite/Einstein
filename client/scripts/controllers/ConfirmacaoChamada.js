angular.module("Estrutura-Inicial")
    .controller('ConfirmacaoChamadaController', ConfirmacaoChamadaController);

function ConfirmacaoChamadaController($location, $scope) {
    $scope.devList = [
        { text: "HTML5", checked: true },
        { text: "CSS3", checked: false },
        { text: "JavaScript", checked: false }
    ];
}
