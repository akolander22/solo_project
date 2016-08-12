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
    vm.hboEpisodes = 0;
    vm.hboEpisodesWatched = 0;
    vm.showtimeList = [];
    vm.showtimeEpisodes = 0;
    vm.showtimeEpisodesWatched = 0;
    vm.basicCableList = [];
    vm.basicCableEpisodes = 0;
    vm.basicCableEpisodesWatched = 0;
    vm.fxOrAmcList = [];
    vm.fxOrAmcEpisodes = 0;
    vm.fxOrAmcEpisodesWatched = 0;
    vm.otherList = [];
    vm.otherEpisodes = 0;
    vm.otherEpisodesWatched = 0;

    for (var i = 0; i < shows.length; i++) {
      vm.allOfTheEpisodes += shows[i].totalEpisodes;
      vm.allOfTheEpisodesWatched += shows[i].episodesWatched;
      vm.timeWatched += (shows[i].episodesWatched * shows[i].runtime);
      vm.timeNeededToWatch += (shows[i].totalEpisodes * shows[i].runtime);



      switch (shows[i].network){
        case "HBO":
          vm.hboList.push(shows[i]);
          vm.hboEpisodes += (shows[i].totalEpisodes);
          vm.hboEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "Showtime":
          vm.showtimeList.push(shows[i]);
          vm.showtimeEpisodes += (shows[i].totalEpisodes);
          vm.showtimeEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "ABC":
          vm.basicCableList.push(shows[i]);
          vm.basicCableEpisodes += (shows[i].totalEpisodes);
          vm.basicCableEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "FOX":
          vm.basicCableList.push(shows[i]);
          vm.basicCableEpisodes += (shows[i].totalEpisodes);
          vm.basicCableEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "NBC":
          vm.basicCableList.push(shows[i]);
          vm.basicCableEpisodes += (shows[i].totalEpisodes);
          vm.basicCableEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "CBS":
          vm.basicCableList.push(shows[i]);
          vm.basicCableEpisodes += (shows[i].totalEpisodes);
          vm.basicCableEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "FX":
          vm.fxOrAmcList.push(shows[i]);
          vm.fxOrAmcEpisodes += (shows[i].totalEpisodes);
          vm.fxOrAmcEpisodesWatched += (shows[i].episodesWatched);
          break;
        case "AMC":
          vm.fxOrAmcList.push(shows[i]);
          vm.fxOrAmcEpisodes += (shows[i].totalEpisodes);
          vm.fxOrAmcEpisodesWatched += (shows[i].episodesWatched);
          break;
        default:
          vm.otherList.push(shows[i]);
          vm.otherEpisodes += (shows[i].totalEpisodes);
          vm.otherEpisodesWatched += (shows[i].episodesWatched);
      }
      // console.log(vm.hboEpisodes);
    }

  }, function(response){
    console.log('Fail to get shows');
  });


})
