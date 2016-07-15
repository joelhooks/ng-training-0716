angular.module('example.user-detail', [
  'ui.router',
  'example.user-repos'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      });
  })

  .controller('UserDetailCtrl', function UserDetailCtrl(userService, $stateParams) {
    var userDetail = this;

    userService.getUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    });
  })
;