/*global $ */
/*global angular */
var chart = angular.module('chartApp', ["chart.js"]);

var xlabels = ["Pt1", "Pt2", "Pt3", "Pt3", "Pt4", "Pt5", "Pt6"];
var xseries = ['Series A', 'Series B'];
var xdata = [[65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]];
var plabels = ['Pt1', 'Pt2', 'Pt3', 'Pt4', 'Pt5', 'Pt6'];
var pdata = [15, 59, 80, 2, 56, 55];


chart.controller("LineCtrl", function ($scope) {
    $scope.labels = xlabels;
    $scope.series = xseries;
    $scope.data = xdata;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

chart.controller("BarCtrl", function ($scope) {
    $scope.labels = xlabels;
    $scope.series = xseries;
    $scope.data = xdata;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

chart.controller("DoughnutCtrl", function ($scope) {
    $scope.labels = plabels;
    $scope.data = pdata;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

chart.controller("RadarCtrl", function ($scope) {
    $scope.labels = xlabels;
    $scope.series = xseries;
    $scope.data = xdata;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

chart.controller("PieCtrl", function ($scope) {
    $scope.labels = plabels;
    $scope.data = pdata;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

chart.controller("PolarCtrl", function ($scope) {
    $scope.labels = plabels;
    $scope.data = pdata;
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});
