'use strict';

/**
 * @ngdoc directive
 * @name dateApp.directive:ngTreeMap
 * @description
 * # ngTreeMap
 */
angular.module('dateApp')
  .directive('ngTreeMap', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      replace: true,
      link: function postLink(scope, element, attrs) {

        var w = 1280,
          h = 800,
          x = d3.scale.linear().range([0, w]),
          y = d3.scale.linear().range([0, h]),
          color = d3.scale.category20c(),
          root,
          node;

        var treemap = d3.layout.treemap()
          .size([w, h])
          .sticky(true)
          .value(function(d){return d.size});

        var svg = d3.select(".mapWrap").append("div")
          .attr("class", "chart")
          .style("width", w+'px')
          .style("height", h+'px')

          .append("svg")
          .style("width", w)
          .style("height", h)

          .append("g");
        //.style("position", "relative");
          //.attr("transform", "translate(.5,.5)");


        d3.json("flare.json", function(data) {
          node = root = data;

          var nodes = treemap.nodes(root)
            .filter(function(d) { return !d.children; });

          var cell = svg.selectAll("g")
            .data(nodes)
            .enter().append("svg:g")
            .attr("class", "cell")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
            .on("click", function(d) { return zoom(node == d.parent ? root : d.parent); });

          cell.append("svg:rect")
            .attr("width", function(d) { return d.dx - 1; })
            .attr("height", function(d) { return d.dy - 1; })
            .style("fill", function(d) { return color(d.parent.name); });

          //cell.append("svg:text")
          //  .attr("x", function(d) { return d.dx / 2; })
          //  .attr("y", function(d) { return d.dy / 2; })
          //  .attr("dy", ".35em")
          //  .attr("text-anchor", "middle");
            //.text(function(d) { return d.name; });
            //.style("opacity", function(d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });

        });

        function zoom(d) {
          var kx = w / d.dx, ky = h / d.dy;
          x.domain([d.x, d.x + d.dx]);//定义域 domain（）d.x表示某个数据块的 x 坐标 d.dx表示某个数据块的宽度
          y.domain([d.y, d.y + d.dy]);

          var t = svg.selectAll("g.cell").transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

          t.select("rect")
            .attr("width", function(d) { return kx * d.dx - 1; })
            .attr("height", function(d) { return ky * d.dy - 1; });

          /*t.select("text")
            .attr("x", function(d) { return kx * d.dx / 2; })
            .attr("y", function(d) { return ky * d.dy / 2; })
            .style("opacity", function(d) { return kx * d.dx > d.w ? 1 : 0; });*/

          node = d;
          /*d3.event.stopPropagation();*/
        }


      }
    };
  });
