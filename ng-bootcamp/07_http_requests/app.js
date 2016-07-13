angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this,
      URL = 'http://www.json-generator.com/api/json/get/cqWBceTYLC?indent=2';

    function success(result) {
      app.people = result.data;
    }

    function error(error) {
     console.error(error)
    }

    $http.get(URL).then(success, error);
  })
;