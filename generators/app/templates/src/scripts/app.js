'use strict';

require('angular');
require('angular-ui-router');
require('./partials.min');

var app = angular.module('<%= appName %>', [
  'ui.router',
  'partials'
]);

require('./components');
require('./routes');
require('./helpers');
require('./services');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'routes/home/home.template.html'
    })

  $urlRouterProvider.otherwise('/');
}]);


