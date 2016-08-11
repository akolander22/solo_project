angular.module('tvApp').controller('ProgressController', function($http){
  var vm = this;

  $http.get('/show/editEpisodes').then(function(response){

    vm.progressList = [];

    // console.log(response.data.shows);
    var shows = response.data.shows;
    // console.log(shows);
    vm.allOfTheEpisodes = 0;
    vm.allOfTheEpisodesWatched = 0;
    vm.timeWatched = 0;
    vm.timeNeededToWatch = 0;
    vm.hboList = [];
    vm.showtimeList = [];
    vm.basicCableList = [];
    vm.fxOrAmcList = [];
    vm.other = [];

    for (var i = 0; i < shows.length; i++) {
      vm.allOfTheEpisodes += shows[i].totalEpisodes;
      vm.allOfTheEpisodesWatched += shows[i].episodesWatched;
      vm.timeWatched += (shows[i].episodesWatched * shows[i].runtime);
      vm.timeNeededToWatch += (shows[i].totalEpisodes * shows[i].runtime);

      switch (shows[i].network){
        case "HBO":
          vm.hboList.push(shows[i]);
          break;
        case "Showtime":
          vm.showtimeList.push(shows[i]);
          break;
        case "ABC":
          vm.basicCableList.push(shows[i]);
          break;
        case "FOX":
          vm.basicCableList.push(shows[i]);
          break;
        case "NBC":
          vm.basicCableList.push(shows[i]);
          break;
        case "CBS":
          vm.basicCableList.push(shows[i]);
          break;
        case "FX":
          vm.fxOrAmcList.push(shows[i]);
          break;
        case "AMC":
          vm.fxOrAmcList.push(shows[i]);
          break;
        default:
          vm.other.push(shows[i]);
      }
      // console.log(vm.other);
    }

  }, function(response){
    console.log('Fail to get shows');
  });


})
