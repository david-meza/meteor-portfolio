if (Meteor.isClient) {

  var app = angular.module('portfolio', ['angular-meteor', 'ui.router', 'ngAnimate']);

  app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/header.html'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'templates/projects.html'
      })

    }]);

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
