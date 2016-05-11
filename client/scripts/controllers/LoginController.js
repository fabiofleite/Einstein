angular.module("Estrutura-Inicial")
    .controller('LoginController', LoginController);

function LoginController($location, $scope, $ionicPopup) {
    var vm = this;

    vm.doLogin = function() {
		let loggedIn = Meteor.userId();

		console.log(Meteor.userId());

		if(loggedIn){
        	$location.path('/einstein/first-page');
		}else {
			$ionicPopup.alert({
				title: 'Usuário ou senha incorretos!',
				template: 'Por favor tente novamente'
			});
		}
    }

}
