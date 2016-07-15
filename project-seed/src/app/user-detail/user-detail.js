angular.module('example.user-detail', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })

  .controller('UserDetailCtrl', function UserDetailCtrl() {
    var userDetail = this;

    console.log('It is alive!!! 💣');
  })
;