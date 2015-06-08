//Angular var that Sets Namespace for the App
var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope){

  //In this case, $scope carries the data to use in the App
  $scope.author = {
    'name' : 'Jim Bob',
    'title' : 'Rabbits 101',
    'company' : 'Petz R Us'
  }

});
