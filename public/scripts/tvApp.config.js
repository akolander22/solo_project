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
  .when('/logout', {
    templateUrl: 'views/login.html',
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
  // .otherwise({
  //   redirectTo: '/login'
  // })





  $locationProvider.html5Mode(true);
})
