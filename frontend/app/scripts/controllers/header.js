'use strict';


angular.module('pluralSightApp')
  .controller('HeaderCtrl', function ($scope,authToken) {
    $scope.isAuthenticated=authToken.isAuthenticated;

  });
