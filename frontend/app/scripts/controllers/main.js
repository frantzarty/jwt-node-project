'use strict';

/**
 * @ngdoc function
 * @name pluralSightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pluralSightApp
 */
angular.module('pluralSightApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
