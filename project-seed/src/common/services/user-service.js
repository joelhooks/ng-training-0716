angular.module('example.services.user', [])
  .service('userService', function UserService($http, baseApiUrl) {
    var userService = this;

    function makeHttpCall(url) {
      return $http.get(url).then(function (results) {
        return results.data;
      })
    }

    userService.getUserRepos = function(username) {
      return makeHttpCall(baseApiUrl + '/users/' + username + '/repos')
    };

    userService.getUser = function(username) {
      return makeHttpCall(baseApiUrl + '/users/' + username)
    };

    userService.getUsers = function() {
      return makeHttpCall(baseApiUrl + '/users')
    }
  })
;