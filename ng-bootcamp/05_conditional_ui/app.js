angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.displayDynamicMessage = function() {
      return app.submittedMessage === 'please';
    };
    
    app.dynamicMessage = function() {
      return Math.random();
    };
    
    app.handleClick = function(message) {
      app.submittedMessage = message;
    };
  })
;