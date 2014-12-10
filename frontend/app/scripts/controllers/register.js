'use strict';


angular.module('pluralSightApp')
  .controller('RegisterCtrl', function ($scope,$http,alert,authToken) {
    $scope.submit=function(){
      var url='http://localhost:3000/register';
      var user={
        email:$scope.email,
        password:$scope.password
      };
      $http.post(url,user)
        .success(function(res){
          authToken.setToken(res.token);
          alert('success','Account Created!','Welcome, ' + res.user.email + '!');
        })
        .error(function(){
          alert('warning','oops!','could not register');
          //console.log('bad');
        });
    };
  });
