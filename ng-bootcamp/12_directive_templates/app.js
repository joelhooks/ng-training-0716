angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.message = "some message: ";
  })
  .directive('headline', function() {
    return {
      restrict: 'E',
      template: '<h1>This is the headline!</h1>'
    }; // Directive Definition Object or DDO
  })
  .directive('bigHeadline', function() {
    return {
      restrict: 'E',
      templateUrl: 'big-headline.html'
    }; // Directive Definition Object or DDO
  })
;