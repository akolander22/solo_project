angular.module('tvApp').controller('SearchController', function($http,$rootScope){
  var vm = this;
  // vm.isDisabled = false;


//accessing the tvmaze api to return search results
  vm.findData = function(){
    console.log('clicked here');
    $http.get("//api.tvmaze.com/search/shows?q=" + vm.entry).then(function(response){
      vm.info = response.data;
      console.log(vm.info);
      vm.showArray = [];
      for (var i = 0; i < response.data.length; i++) {
        var tempShow = {};
        if(response.data[i].show.image != null){
          tempShow.image = response.data[i].show.image.original;
        } else {
          tempShow.image = 'assets/download.jpeg';
        }
        if(response.data[i].show.network != null){
          tempShow.network = response.data[i].show.network.name;
        } else {
          tempShow.network = 'Netflix';
        }
          tempShow.name = response.data[i].show.name;
          tempShow.runtime = response.data[i].show.runtime;
          tempShow.summary = response.data[i].show.summary;
          tempShow.status = response.data[i].show.status;
          tempShow.url = response.data[i].show.url;
          tempShow.premiered = response.data[i].show.premiered;
          tempShow.tvMazeId = response.data[i].show.id;
          // tempShow.network = response.data[i].show.network.name;
          vm.showArray.push(tempShow);
      }
    });
  }

  //button function which adds selected show to users 'shows'
  vm.addToMyShows = function(item){
    // vm.isDisabled = true;
    // console.log('Clicked', item);
    var sendData = {};
    sendData.showName = item.name;
    sendData.runtime = item.runtime;
    sendData.summary = item.summary;
    sendData.status = item.status;
    sendData.url = item.url;
    sendData.premiered = item.premiered;
    sendData.image = item.image;
    sendData.tvMazeId = item.tvMazeId;
    sendData.totalEpisodes = item.totalEpisodes;
    sendData.network = item.network;
    // console.log(sendData);


//get request to get episode information of individual show
    $http.get('//api.tvmaze.com/shows/' + item.tvMazeId + '?embed=episodes').then(function(response){
      // console.log(response.data._embedded);
      item.totalEpisodes = response.data._embedded.episodes.length;
      sendData.totalEpisodes = item.totalEpisodes;
      // console.log(item);

      createShow(sendData);
      // console.log(item.totalEpisodes);
      // console.log(item.premiered);
    })


  }

//post to db
  function createShow(sendData){

    $http.post('/show/createdShow', sendData).then(function(response){
      // console.log('Success', response);
    }, function(response){
      console.log('Fail');
    })

  }
})
