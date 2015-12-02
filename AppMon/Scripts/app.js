/*global $ */
/*global angular */
var chart = angular.module('chartApp', ["chart.js"]);

var xlabels = ["Pt1", "Pt2", "Pt3", "Pt3", "Pt4", "Pt5", "Pt6"];
var xseries = ['Series A', 'Series B'];
var xdata = [[65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]];
var plabels = ['Pt1', 'Pt2', 'Pt3', 'Pt4', 'Pt5', 'Pt6'];
var pdata = [15, 59, 80, 2, 56, 55];


chart.controller("LineCtrl", function ($scope, $http) {
    var doStuff = function () {

        var now = new Date().getTime();
        loclabels = [];
        locdata = [];
        //$.ajaxSetup({ async: false });
        $http.get("/api/ResponseTimes/GetTop?count=20")
                .success(function (data) {
                    function processArray(element, index, array) {
                        loclabels.push(new Date(element.mtts).getHours().toString() + new Date(element.mtts).getMinutes().toString());
                        locdata.push(element.resptime);
                    }
                    data.forEach(processArray);
                    $scope.series = ['eBanking-NO'];
                    $scope.labels = loclabels;
                    $scope.data = [];
                    $scope.data.push(locdata);
                });
        setTimeout(doStuff, 5000);
    };

    setTimeout(doStuff, 100);

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
