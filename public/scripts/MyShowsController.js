angular.module('tvApp').controller('MyShowsController', function($http, $rootScope){
  var vm = this;

  // $rootScope.username = vm.username;
  $http.get('/show/findId').then(function(response){
    // console.log(request.params.id);
    // console.log(request.user._id);
    console.log('Success', response);
    vm.showsList = response.data.shows;
    console.log(vm.showsList);
    // vm.showNamesArray =[];
    // for (var i = 0; i < vm.showsList.length; i++) {
    //   vm.showNamesArray.push(vm.showsList.showName[i]);
    // }
    // console.log(vm.showNamesArray);
  }, function(response){
    console.log('Fail');
  })


})
