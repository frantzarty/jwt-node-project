'use strict';

/**
 * @ngdoc service
 * @name pluralSightApp.authToken
 * @description
 * # authToken
 * Factory in the pluralSightApp.
 */
angular.module('pluralSightApp').factory('authToken', function ($window) {
    // Service logic
    // ...
    var storage=$window.localStorage;
    var cachedToken;
    var userToken='userToken';
    // Public API here
    var authToken= {
      setToken: function (token) {
        cachedToken=token;
        storage.setItem(userToken,token);
      },
      getToken:function(){
        if (!cachedToken) {
          cachedToken = storage.getItem('userToken');
        }
        return cachedToken;
      },
      isAuthenticated:function(){
        return !!authToken.getToken();
      },
      removeToken:function(){
        cachedToken=null;
        storage.removeItem(userToken);
      }

    };

  return authToken;
  });
