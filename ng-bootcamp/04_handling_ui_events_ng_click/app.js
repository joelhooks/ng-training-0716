angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
    
    app.dynamicMessage = function() {
      return Math.random();  //this is a bad idea, breaks Angular
    };
    
    app.handleClick = function(message) {
      app.submittedMessage = message;
    };
  })
;