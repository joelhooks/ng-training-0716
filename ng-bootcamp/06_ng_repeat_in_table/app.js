angular.module('exampleApp', [])
  .controller('AppCtrl', function AppCtrl() {
    var app = this;

    app.people = [
      {
        name:'Henry',
        title: 'Janitor'
      },
      {
        name:'Sally',
        title: 'Manager'
      },
      {
        name:'Joel',
        title: 'Painter'
      },
      {
        name:'Mike',
        title: 'Intern'
      },
      {
        name:'Becky',
        title: 'Engineer'
      },
      {
        name:'Jess',
        title: 'Intern'
      }
    ];

    app.addNewPerson = function(name) {
      app.people.push({name: name});
    }
  })
;