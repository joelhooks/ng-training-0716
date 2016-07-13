angular.module('app.people-list', [])
  .directive('peopleList', function () {
    return {
      restrict: 'E',
      templateUrl: 'people-list/people-list.html',
      bindToController: true,
      scope: {
        people: '='
      },
      controller: 'PeopleListCtrl as peopleList'
    }; //Directive Definition Object DDO
  })

  .controller('PeopleListCtrl', function PeopleListCtrl() {
    var peopleList = this;

    peopleList.sortField = 'firstName';

    peopleList.inputOptions = {
      updateOn: 'default blur',
      debounce: {blur: 1250, default: 100}
    };

    peopleList.setSortField = function (fieldName) {
      if (fieldName === peopleList.sortField) {
        fieldName = '-' + fieldName;
      }
      peopleList.sortField = fieldName;
    };
  })