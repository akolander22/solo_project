angular.module('tvApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  // .when('/login', {
  //   templateUrl: 'views/login.html',
  //   controller: 'LoginController',
  //   controllerAs: 'login'
  // })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })
  .when('/search', {
    templateUrl: 'views/search.html',
    controller: 'SearchController',
    controllerAs: 'lookup'
  })
  .when('/failure', {
    templateUrl: 'views/nope.html',
  })





  $locationProvider.html5Mode(true);
})
