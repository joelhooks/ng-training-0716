angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl($http) {
    var app = this;

    app.message = "some message: ";
  })
  
  .directive('logger', function() {
    return function link(scope, element, attrs) {
      console.log(scope);
      console.log(element);
      console.log(attrs);

      element.on('click', function() {
        element.toggleClass(attrs.logger);
      })
    }
  }) //returns the module
  
;