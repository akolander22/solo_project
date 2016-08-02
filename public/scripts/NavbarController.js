angular.module('tvApp').controller('NavbarController', function($http, $location){
  var vm = this;

  vm.isActive = function(viewLocation){
    return viewLocation === $location.path();
  };

});
