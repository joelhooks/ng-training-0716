angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this,
      URL = 'http://www.json-generator.com/api/json/get/cqWBceTYLC?indent=2';
    
    app.sortField = 'firstName';
    
    app.setSortField = function(fieldName) {
      if(fieldName === app.sortField) {
        fieldName = '-' + fieldName;
      }
      app.sortField = fieldName;
    };
    
    function success(result) {
      app.people = result.data;
    }

    function error(error) {
     console.error(error)
    }

    $http.get(URL).then(success, error);
  })
;