angular.module('exampleApp', [
    'app.people-list',
    'app.services.people'
])
  .controller('AppCtrl', function AppCtrl(peopleService) {
    var app = this,
      ID = 'cqWBceTYLC';
    
    peopleService.getPeople(ID).then(function(people) {
      console.log(people);
      app.people = people;
    })
  })


;