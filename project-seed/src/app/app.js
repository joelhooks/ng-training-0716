angular.module('project-seed', [
  'example.user-list',
  'project-seed.common',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  'templates-app'
])

  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    // load data from: https://api.github.com/users

    // $http <- GET <- then <- assign to app.users
    // ng-repeat it!
    
    $http.get('https://api.github.com/users').then(function(results) {
      app.users = results.data;
    });

    console.log('AppCtrl is alive! 🔥');
  })

;