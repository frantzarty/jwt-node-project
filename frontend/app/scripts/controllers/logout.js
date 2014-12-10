'use strict';

/**
 * @ngdoc function
 * @name pluralSightApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the pluralSightApp
 */
angular.module('pluralSightApp')
  .controller('LogoutCtrl', function ($scope,authToken,$state) {
    authToken.removeToken();
    $state.go('main');
  });
