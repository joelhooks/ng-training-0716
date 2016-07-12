angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
    
    app.dynamicMessage = function() {
      return Math.random();
    };
    
    app.handleClick = function(message) {
      app.submittedMessage = message;
    };
  })
;