'use strict';

/**
 * @ngdoc function
 * @name pluralSightApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the pluralSightApp
 */
angular.module('pluralSightApp')
  .controller('JobsCtrl', function ($scope,$http,API_URL,alert) {
    $http.get(API_URL +'jobs')
      .success(function(jobs){
        $scope.jobs=jobs;
      })
      .error(function(err){
        console.log(err);
        alert('warning','Unable to get jobs',err.message);
      });



  });
