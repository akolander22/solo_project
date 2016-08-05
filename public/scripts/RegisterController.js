angular.module('tvApp').controller('RegisterController', function($http){
  var vm = this;

  vm.register = function(){
    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;

    $http.post('/register', sendData).then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Success', response);
    $location.path('/login');
  };

  function handleFailure(response){
    console.log('Failure', response);
    $location.path('/failure');
  };
});
