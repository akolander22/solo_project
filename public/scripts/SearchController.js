angular.module('tvApp').controller('SearchController', function($http,$rootScope){
  var vm = this;
  // vm.isDisabled = false;
  vm.myShows = [];


  vm.findData = function(){
    // console.log(vm.entry);
    $http.get("http://api.tvmaze.com/search/shows?q=" + vm.entry).then(function(response){
      vm.info = response.data;
      console.log(vm.info);
      vm.showImage = [];
      vm.showName = [];
      vm.showSum = [];
      vm.showRuntime = [];
      for (var i = 0; i < response.data.length; i++) {
        if(response.data[i].show.image != null){
          vm.showImage.push(response.data[i].show.image.original);
        } else {
          vm.showImage.push('assets/download.jpeg')
        }
        vm.showName.push(response.data[i].show.name);
        // console.log(vm.showName);
        // console.log(vm.showImage);
        // vm.showSum.push(response.data[i].show.summary);
        vm.showRuntime.push(response.data[i].show.runtime);
        // console.log(vm.showSum);
      }
      console.log(vm.showName);


    });
    vm.addToMyShows = function(showName){
      // vm.isDisabled = true;
      console.log('Clicked', showName);
      var sendData = {};
      sendData.showName = showName;

      console.log(sendData);
      $http.post('/show/createdShow', sendData).then(function(response){
        console.log('Success', response);
      }, function(response){
        console.log('Fail');
      })

    }
  }
})
