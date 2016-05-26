var project_week = angular.module('project_week', ['ngRoute'])

project_week.config(function($routeProvider){

  $routeProvider
  .when('/color',{
    templateUrl: "/partials/color.html"
  })
  .when('/location',{
    templateUrl: "/partials/location.html"
  })
  .when('/time',{
    templateUrl: "/partials/time.html"
  })
  .otherwise({
    redirectTo: '/color'
  })
})
