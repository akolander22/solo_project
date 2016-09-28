angular.module('tvApp').controller('LoginController', function($http, $location,$rootScope){
  var vm = this;

  vm.username = '';
  vm.password = '';
  $rootScope.loggedIn = false;

  vm.login = function(){

    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/login', sendData).then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    $rootScope.username = vm.username;
    $rootScope.loggedIn = true;

    $location.path('/search');
  };

  function handleFailure(response){
    console.log('Failure', response);
    $location.path('/failure');
  };
})
