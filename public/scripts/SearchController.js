angular.module('tvApp').controller('SearchController', function($http,$rootScope){
  var vm = this;
  // vm.isDisabled = false;

  vm.findData = function(){
    $http.get("http://api.tvmaze.com/search/shows?q=" + vm.entry).then(function(response){
      vm.info = response.data;
      // console.log(vm.info);
      vm.showArray = [];
      for (var i = 0; i < response.data.length; i++) {
        var tempShow = {};
        if(response.data[i].show.image != null){
          tempShow.image = response.data[i].show.image.original;
        } else {
          tempShow.image = 'assets/download.jpeg';
        }

        tempShow.name = response.data[i].show.name;
        tempShow.runtime = response.data[i].show.runtime;
        tempShow.summary = response.data[i].show.summary;
        tempShow.status = response.data[i].show.status;
        tempShow.url = response.data[i].show.url;
        tempShow.premiered = response.data[i].show.premiered;
        vm.showArray.push(tempShow);
      }
      // console.log(vm.showArray);
      // console.log(vm.searchedShows);
      // console.log(vm.showName);


    });
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
      // $rootScope.showName = showName;
      console.log(sendData);
      $http.post('/show/createdShow', sendData).then(function(response){
        console.log('Success', response);
      }, function(response){
        console.log('Fail');
      })

    }
  }
})
