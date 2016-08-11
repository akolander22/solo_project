angular.module('tvApp').controller('MyShowsController', function($http, $rootScope){
  var vm = this;

//get request to get list of users shows
  $http.get('/show/editEpisodes').then(function(response){
    // console.log(request.params.id);
    // console.log(request.user._id);
    // console.log('Success', response);
    var showsList = response.data.shows;
    vm.currentShowsList = [];
    vm.caughtUpShowsList = [];
    vm.overAndDone = [];

    for (var i = 0; i < showsList.length; i++) {
      vm.currentShowsList.push(showsList[i]);
      if(showsList[i].caughtUp == true && showsList[i].status == "Running"){
        vm.caughtUpShowsList.push(showsList[i]);
      }
      if(showsList[i].caughtUp == true && showsList[i].status == "Ended"){
        // console.log(showsList[i]);
        vm.overAndDone.push(showsList[i]);
      }
    }

//button function to add episodes
  vm.add = function(oneshow){
    oneshow.episodesWatched += 1;

    if(oneshow.episodesWatched > oneshow.totalEpisodes){
      oneshow.episodesWatched = oneshow.totalEpisodes;
    }
    if(oneshow.episodesWatched == oneshow.totalEpisodes){
      oneshow.caughtUp = true;
    } else {
      oneshow.caughtUp = false;
    }
  }

//button function to subtract episodes
  vm.subtract = function(oneshow){
        // console.log('clicked minus');
    oneshow.episodesWatched -= 1;
    if(oneshow.episodesWatched < 0){
      oneshow.episodesWatched = 0;
    }
    oneshow.caughtUp = false;
    // console.log(oneshow.episodesWatched);
      }
    }, function(response){
      console.log('Fail to get shows');
    })



//function to save episodes watched and caughtup status to DB
  vm.saveToMyDb = function(oneshow){
    var sendData = {};

    // console.log(oneshow.episodesWatched);
    sendData.episodesWatched = oneshow.episodesWatched;
    sendData.tvId = oneshow._id;
    sendData.caughtUp = oneshow.caughtUp;

    $http.post('/show/editEpisodes', sendData).then(function(response){
      console.log('Success', response);
    }, function(response){
      console.log('Fail');
    })
  };

})
