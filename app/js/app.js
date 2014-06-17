var app = angular.module('mainApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
            })
            .when('/speakers', {
                templateUrl: 'partials/speakers.html',
                controller: 'speakerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });