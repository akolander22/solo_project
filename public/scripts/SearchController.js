angular.module('tvApp').controller('SearchController', function($http){
  var vm = this;
  vm.isDisabled = false;
  vm.myShows = [];


  vm.findData = function(){
    // console.log(vm.entry);
    $http.get("http://api.tvmaze.com/search/shows?q=" + vm.entry).then(function(response){
      vm.info = response.data;
      console.log(vm.info);
      vm.showImage = [];
      vm.showName = []
      for (var i = 0; i < response.data.length; i++) {
        vm.showImage.push(response.data[i].show.image.original);
        vm.showName.push(response.data[i].show.name)
        // console.log(vm.showName);
        // console.log(vm.showImage);
      }
    });
    vm.addToMyShows = function(){
      vm.isDisabled = true;
      console.log('Clicked');
    }
  }
})
