'use strict';

angular.module('pluralSightApp')
  .service('alert', function ($rootScope,$timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return function(type,title,message,timeout) {
      var alertTimeout;
      $rootScope.alert = {
        hasBeenShown: true,
        type: type,
        show: true,
        message: message,
        title: title
      };
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function(){
        $rootScope.alert.show = false;
      },timeout || 2000);
    };

  });
