angular.module('tvApp').controller('MyShowsController', function($http){

  $http.get('/createdShow').then(function(response){
    console.log('success', response);
  }, function(response){
    console.log('nope fail');
  })

})
