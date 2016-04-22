'use strict';

/**
 * @ngdoc directive
 * @name dateApp.directive:treeMap
 * @description
 * # treeMap
 */
angular.module('dateApp')
  .directive('treeMap', function () {
    return {
      template: "<svg></svg>",
      restrict: 'EA',
      replace: true,
      link: function postLink(scope, element, attrs) {
        //定义样式
        var margin = {top: 40, right: 10, bottom: 10, left: 10},
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

        var color = d3.scale.category20c();
        //所引用的可视化视图布局模板,并且设置尺寸
        var treemap = d3.layout.treemap()
          .size([width, height])
          //.sticky(true)
          .value(function (d) {
            return d.size;
          });//将value访问器设定为size

        //开始绘制treeMap
        var group = d3.select("svg").append("g")
          .style("position", "relative")
          .style("width", (width + margin.left + margin.right) + "px")
          .style("height", (height + margin.top + margin.bottom) + "px")
          .style("left", margin.left + "px")
          .style("top", margin.top + "px")
          .style("display", "block");
        //D3读取外部json数据
        d3.json("flare.json", function (error, root) {
          if (error) throw error;

          //datum()：绑定一个数据到选择集上
          //data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
          var node = group.datum(root).selectAll(".node")
            .data(treemap.nodes)
            //enter方法和append方法表示由于此时rect元素还不存在，必须根据数据的个数将它们创造出来。
            .enter().append("rect")
            .attr("class", "node")
            .call(position)
            .on("click", function (i, d) {
              var I = i;
              console.log("click block:" + I.name);
              transition(I);
              return false;
            })

            //d:绑定的数据
            //i:索引
            .style("background", function (d) {
              return d.children ? color(d.name) : null;
            })
            .text(function (d) {
              return d.children ? null : d.name;
            });
        });


        function position() {
          this.style("left", function (d) {
              return d.x + "px";
            })
            .style("top", function (d) {
              return d.y + "px";
            })
            .style("width", function (d) {
              return Math.max(0, d.dx - 1) + "px";
            })
            .style("height", function (d) {
              return Math.max(0, d.dy - 1) + "px";
            });
        }

        //缩放函数
        function transition(I){
          var zoomBlock = d3.select(".treeMapWrap").selectAll("rect");
          console.log(zoomBlock[0][I]);
        }

      }
    };
  });
