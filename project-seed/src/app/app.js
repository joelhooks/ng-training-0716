angular.module('project-seed', [
  'example.user-list',
  'example.user-detail',
  'project-seed.common',
  'ngAria',
  'ui.router',
  'ui.bootstrap',
  'templates-app'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  })
;