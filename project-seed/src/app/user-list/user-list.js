angular.module('example.user-list', [
    'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '/users',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })

  .controller('UserListCtrl', function UserListCtrl($http) {
    var userList = this;

    $http.get('https://api.github.com/users').then(function (results) {
      userList.users = results.data;
    });
  })
;