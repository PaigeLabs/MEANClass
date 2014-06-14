var app = angular.module('mainApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
            })
            .when('/login', {
                templateUrl: 'partials/login.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });