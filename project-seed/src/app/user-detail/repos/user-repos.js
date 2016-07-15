angular.module('example.user-repos', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail.repos', {
        url: '/repos',
        templateUrl: 'user-detail/repos/user-repos.tpl.html',
        controller: 'UserReposCtrl as userRepos'
      })
  })
  .controller('UserReposCtrl', function UserRepoCtrl(userService, $stateParams) {
    var userRepos = this;

    userService.getUserRepos($stateParams.username).then(function(repos) {
      userRepos.repos = repos;
    })
  })
;