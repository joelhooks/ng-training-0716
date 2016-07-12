angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;
    
    app.display = false;
    
    app.dynamicMessage = function() {
      return Math.random();
    };
    
    app.handleClick = function(message) {
      app.display = message === 'please';
      app.submittedMessage = message;
    };
  })
;