angular.module('tvApp').controller('MyShowsController', function($http, $rootScope){
  var vm = this;

  // vm.showsVisible = function(){
  //   ng
  // }


  // $rootScope.username = vm.username;
  $http.get('/show/findId').then(function(response){
    // console.log(request.params.id);
    // console.log(request.user._id);


    // console.log('Success', response);
    vm.showsList = response.data.shows;
    // console.log(vm.showsList);

    vm.add = function(oneshow){
      console.log('clicked plus');
      oneshow.episodesWatched += 1;
      console.log(oneshow.episodesWatched);
    }
    vm.subtract = function(oneshow){
      console.log('clicked minus');
      oneshow.episodesWatched -= 1;
      if(oneshow.episodesWatched < 0){
        oneshow.episodesWatched = 0;
      }
      console.log(oneshow.episodesWatched);
    }
  }, function(response){
    console.log('Fail to get shows');
  })
  vm.saveToMyDb = function(oneshow){
    var sendData = {};


    console.log(oneshow.episodesWatched);
    sendData.episodesWatched = oneshow.episodesWatched;
    $http.post('/show/editEpisodes', sendData).then(function(response){
      console.log('Successful editing', response);


    }, function(response){
      console.log('Fail with edit');
    })
  }


})
