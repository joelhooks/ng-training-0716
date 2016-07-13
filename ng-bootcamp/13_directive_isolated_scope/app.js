angular.module('exampleApp', [])

  .directive('peopleList', function() {
    return {
      restrict: 'E',
      templateUrl: 'people-list.html',
      scope: {
        people: '=',
        action: '&'
      }
    }; //Directive Definition Object or DDO
  })

  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.sayHello = function(text) {
      console.log('hello!', text, Math.random());
    }
    app.sayGoodbye = function(text) {
      console.log('goodbye!', text, Math.random());
    }

    app.people2 = [
      {
        name: 'Henry',
        title: 'Janitor'
      },
      {
        name: 'Sally',
        title: 'Manager'
      },
      {
        name: 'Joel',
        title: 'Painter'
      }
    ];

    app.people = [
      {
        name: 'Mike',
        title: 'Intern'
      },
      {
        name: 'Becky',
        title: 'Engineer'
      },
      {
        name: 'Jess',
        title: 'Intern'
      }
    ];

    app.message = "some message: ";
  })
  .directive('randomNumber', function() {
    return {
      restrict: 'E',
      template: '<h1>{{ randomNumber }} {{message}}</h1>',
      scope: {
        message: '@'
      },
      link: function (scope, element, attrs) {
        console.log(scope);
        scope.randomNumber = Math.random();
      }
    }; //Directive Definition Object or DDO
  })
;