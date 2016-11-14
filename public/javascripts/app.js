console.log("test");

var CatsApp = angular.module('CatsApp', ['ngRoute']);

CatsApp.controller('CatsCtrl', function ($scope) {
    $scope.cats = [];
    
    $scope.addCat = function (name,note) {
        var cat = {
            name: name,
            note: note
        }
        $scope.cats.push(cat);
        console.log($scope.cats);
    }
});