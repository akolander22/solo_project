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
    for (var i = 0; i < shows.length; i++) {
      vm.allOfTheEpisodes += shows[i].totalEpisodes;
      vm.allOfTheEpisodesWatched += shows[i].episodesWatched;
      vm.timeWatched += (shows[i].episodesWatched * shows[i].runtime);
      vm.timeNeededToWatch += (shows[i].totalEpisodes * shows[i].runtime);
    }

  }, function(response){
    console.log('Fail to get shows');
  });


})
