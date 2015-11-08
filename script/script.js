// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

//// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/portfolio', {
            templateUrl : 'views/portfolio.html',
            controller  : 'portfolioController'
        })

        // route for the contact page
        .when('/contatos', {
            templateUrl : 'views/contatos.html',
            controller  : 'contatosController'
        });
});
//
//// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
//
scotchApp.controller('portfolioController', function($scope) {
    $scope.message = 'Look! I am an portfolio page.';
});

scotchApp.controller('contatosController', function($scope, $location) {

    $scope.toggle = function() {
        alert('Obrigado por entrar em contato.');
        $location.path( "/" );
    };

    $scope.message = 'Contact us! JK. This is just a demo.';
});