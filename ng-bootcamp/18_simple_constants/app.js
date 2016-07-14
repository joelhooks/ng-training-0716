angular.module('exampleApp', [
    'app.people-list'
])
  .constant('BASE_API_URL', 'http://www.json-generator.com/api/json/get/')
  
  .controller('AppCtrl', function AppCtrl($http, BASE_API_URL) {
    var app = this,
      ID = 'cqWBceTYLC';
    
    $http.get(BASE_API_URL + ID).then(function success(result) {
      app.people = result.data;
    });
  })
;