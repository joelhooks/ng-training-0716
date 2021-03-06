angular.module('example.user-list', [
    'ui.router',
    'example.services.user'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/users',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })

  .controller('UserListCtrl', function UserListCtrl(userService) {
    var userList = this;
    
    userService.getUsers().then(function(users) {
      userList.users = users;
    });
  })
;