//Angular var that Sets Namespace for the App
var myApp = angular.module("myApp", []);

/**
* Core Controller for the App
* @param (String) Name of the controller
* @param (Array) List of name-protected fields to pass, including constructor
*/
myApp.controller("MyController", ['$scope','$http' , function ($scope, $http){

  //The http service allows for the reading of our json file
  $http.get('js/data.json').success(function(data){
    //In this case, $scope carries the data to use in the App
    $scope.artists = data;
    //Set default sort field to name
    $scope.artistOrder = 'name';

  });


}]);
