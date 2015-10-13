(function() {

  "use strict";

  var App = angular.module("App.controllers", []);

  App.controller("MyCtrl1", ["$scope", function ($scope, UtilSrvc){
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("User");
  }]);

  App.controller('GreetingController', ['$scope', '$http', function($scope, $http) {
    //$http.get('http://www.w3schools.com/angular/customers.php').
      $http.get('http://localhost:8080/greeting').
      success(function(data) {
        $scope.names = data.records;
      })

    $scope.greeting = 'Hola!';
  }]);

  // App.controller("Hello", ["$scope", function($scope,$http){
  //   $http.get('http://rest-service.guides.spring.io/greeting').
  //       success(function(data) {
  //           $scope.greeting = data;
  //       });
  // }]);

  App.controller("MyCtrl2", ["$scope", function($scope){
      // if you have many controllers, it's better to separate them into files
  }]);

}());
