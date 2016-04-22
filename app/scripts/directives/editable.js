'use strict';

/**
 * @ngdoc directive
 * @name dateApp.directive:editable
 * @description
 * # editable
 */
angular.module('dateApp')
  .directive('editable', function () {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        element.$apply(function(){
          ctrl.$setViewValue(element.html());
        });

        ctrl.$render = function(value){
          element.html(value);
        };

        ctrl.$setViewValue(element.html());
      }
    };
  });
