angular.module('exampleApp', [
    'app.people-list'
])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this,
      URL = 'http://www.json-generator.com/api/json/get/cqWBceTYLC?indent=2';

    $http.get(URL).then(function success(result) {
      app.people = result.data;
    });
  })
;