'use strict';

/**
 * @ngdoc function
 * @name dateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dateApp
 */
angular.module('dateApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    //$scope.userType = 'gest';
    /*$scope.user = {
     name: 'guest',
     last: 'visitor'
     }*/
//checkbox
    /*$scope.value1 = true;
     $scope.value2 = 'yes';*/

    //input[date]

    //$scope.value = new Date(2015, 9, 11);

    //input[radio]
    /*$scope.radio = 'value1';//设置默认值
    $scope.change = function(){
      alert("change");
    }*/

    /*$scope.radio = 'v1';
    $scope.counter = 0;
    $scope.change = function(){
      $scope.counter++;
    };*/

    $scope.records = [
      {
        "Name" : "Alfreds Futterkiste",
        "Country" : "Germany"
      },
      {
        "Name" : "Berglunds snabbk",
        "Country" : "Sweden"
      },
      {
        "Name" : "Centro comercial Moctezuma",
        "Country" : "Mexico"
      },
      {
        "Name" : "Ernst Handel",
        "Country" : "Austria"
      }
    ]
  }]);
