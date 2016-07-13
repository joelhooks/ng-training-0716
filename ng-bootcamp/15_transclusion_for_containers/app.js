angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.message = "this is the content I want to transclude";
  })
  .directive('headline', function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<h1>This is the headline!</h1><div ng-transclude></div>'
    }; // Directive Definition Object or DDO
  })
  .directive('bigHeadline', function() {
    return {
      restrict: 'E',
      templateUrl: 'big-headline.html'
    }; // Directive Definition Object or DDO
  })
;