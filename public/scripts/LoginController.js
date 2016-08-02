angular.module('tvApp').controller('LoginController', function($http, $location){
  var vm = this;

  vm.username = '';
  vm.password = '';

  vm.login = function(){
    console.log('Username', vm.username);

    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/login', sendData).then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Success', response);
    $location.path('/search');
  };

  function handleFailure(response){
    console.log('Failure', response);
    $location.path('/failure');
  };
})
