app.controller('speakerCtrl', function($scope, $http){
    $http.get('/api/speakers')
        .success(function(data){
            $scope.speakers = data
        });
})