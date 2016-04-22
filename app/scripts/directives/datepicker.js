'use strict';

/**
 * @ngdoc directive
 * @name dateApp.directive:datePicker
 * @description
 * # datePicker
 */
angular.module('dateApp')
  .directive('datePicker', function ($timeout) {
    return {
      restrict: 'A',
      scope: {//=attr “Isolate”作用域的属性与父作用域的属性进行双向绑定，任何一方的修改均影响到对方，
        //_bind: "@datePicker"//单向绑定
        _bind: "=datePicker"
      },
      link: function postLink(scope, element, attrs, ctrl) {

        // var
        scope.bind = scope._bind ? scope._bind : {};

        // init
        var init = function () {
          // do something
          scope.startWatch();
        };

        //
        scope.startWatch = function () {
          element.datepicker({
            /*datepicker 插件暴露了一个 onSelect 事件，这个事件会在用户选择日期时触发。为了在Angular应用内部获取用户选择的日期， 我们需要在 $apply()函数内运行 datepicker 的回调函数。*/
            dateFormat: 'yy-mm-dd-DD',
            onSelect: function (date) {
              //console.log(a+"--"+b);
              scope.$apply(function(){
                scope.bind = date;
              });
            }

          });
        };

        window.setTimeout(function(){
          //alert(1);
        });

        //alert(2);

        $timeout(init,100);
        //scope._bind = "111";
      }
    };
  });
