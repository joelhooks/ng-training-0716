var appModule = angular.module('exampleApp', []);

appModule.controller('AppCtrl', function AppCtrl($scope, $rootScope) {
  console.log('AppCtrl is ALIVE!', $scope, $rootScope);
  
  // don't use $rootScope!!! ;)

  $scope.message = "Affecting change on the scope y'all."
});