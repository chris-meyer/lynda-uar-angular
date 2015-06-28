var myApp = angular.module('myApp',[
  'ngRoute',
  'artistControllers'
])

//Calls routeProvider service
myApp.config(['$routeProvider', function($routeProvider){
  //When the /list route is called, include the list.html partial
  $routeProvider
  .when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  })
  .otherwise({
    redirectTo: '/list'
  });

}]);
