angular.module('app.components.tabs', [])
  .controller('TabsCtrl', function ($element) {
    var tabs = this;

    tabs.registeredTabs = [];

    tabs.selectTab = function (tab) {
      if (tabs.selectedTab) {
        tabs.selectedTab.selected = false;
      }
      tabs.selectedTab = tab;
      tab.selected = true;
    };

    tabs.registerTab = function (tab) {
      if (!tabs.selectedTab) {
        tabs.selectTab(tab);
      }
      tabs.registeredTabs.push(tab);
    };

  })

  .directive('tabs', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'tabs/tabs.html',
      scope: {},
      controller: 'TabsCtrl as tabs'
    }; // DDO
  })

  .directive('tab', function () {
    return {
      restrict: 'E',
      transclude: true,
      require: '^tabs',
      template: '<div ng-if="selected" ng-transclude></div>',
      scope: {
        label: '@'
      },
      link: function (scope, element, attrs, tabsCtrl) {
        tabsCtrl.registerTab(scope);
      }
    }; // DDO
  })

;