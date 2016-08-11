angular.module('tvApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/logout', {
    templateUrl: 'views/logout.html',
    controller: 'LogoutController'
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
  .when('/progress', {
    templateUrl: 'views/progress.html',
    controller: 'ProgressController',
    controllerAs: 'progress'
  })
  .when('/myshows', {
    templateUrl: 'views/myshows.html',
    controller: 'MyShowsController',
    controllerAs: 'myshows'
  })
  .when('/failure', {
    templateUrl: 'views/nope.html',
  })


  $locationProvider.html5Mode(true);
})
