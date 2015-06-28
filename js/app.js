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
  .when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  })
  .otherwise({
    redirectTo: '/list' //Go to list route by default
  });

}]);
