angular.module('tvApp').controller('MyShowsController', function($http, $rootScope){
  var vm = this;

  // vm.showsVisible = function(){
  //   ng
  // }


  // $rootScope.username = vm.username;
  $http.get('/show/editEpisodes').then(function(response){
    // console.log(request.params.id);
    // console.log(request.user._id);
    // console.log('Success', response);
    var showsList = response.data.shows;
    vm.currentShowsList = [];
    vm.caughtUpShowsList = [];
    vm.overAndOut = [];
    // console.log(vm.showsList);
    for (var i = 0; i < showsList.length; i++) {
      if(showsList[i].caughtUp == false){
        vm.currentShowsList.push(showsList[i]);
        // console.log(vm.currentShowsList);
      } else if(showsList[i].caughtUp == true) {
          vm.caughtUpShowsList.push(showsList[i]);
          // console.log(vm.caughtUpShowsList);
      }

    }
    // console.log(vm.showsList);

    vm.add = function(oneshow){
      // console.log('clicked plus');
      oneshow.episodesWatched += 1;
      // console.log(oneshow.episodesWatched);

      if(oneshow.episodesWatched > oneshow.totalEpisodes){
        oneshow.episodesWatched = oneshow.totalEpisodes;
      }
      if(oneshow.episodesWatched == oneshow.totalEpisodes){
        oneshow.caughtUp = true;
      }
    }
    vm.subtract = function(oneshow){
      // console.log('clicked minus');
      oneshow.episodesWatched -= 1;
      if(oneshow.episodesWatched < 0){
        oneshow.episodesWatched = 0;
      }
      // console.log(oneshow.episodesWatched);
    }
  }, function(response){
    console.log('Fail to get shows');
  })
  vm.saveToMyDb = function(oneshow){
    var sendData = {};

    // console.log(oneshow.episodesWatched);
    sendData.episodesWatched = oneshow.episodesWatched;
    sendData.tvId = oneshow._id;
    sendData.caughtUp = oneshow.caughtUp;
    // console.log(oneshow._id);
    // console.log(oneshow.episodesWatched);
    $http.post('/show/editEpisodes', sendData).then(function(response){
      // console.log(sendData);
      console.log('Success', response);
    }, function(response){
      console.log('Fail');
    })
  };

})
