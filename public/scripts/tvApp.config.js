angular.module('tvApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  // .when('/', {
  //   templateUrl: 'views/index.html',
  //   controller: 'MainController',
  //   controllerAs: 'main'
  // })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
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
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileController',
    controllerAs: 'profile'
  })
  .when('/progress', {
    templateUrl: 'views/progress.html',
    controller: 'ProgressController',
    controllerAs: 'progress'
  })
  .when('/failure', {
    templateUrl: 'views/nope.html',
  })





  $locationProvider.html5Mode(true);
})
