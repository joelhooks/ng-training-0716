angular.module('app.services.people', [])
  .constant('BASE_API_URL', 'http://www.json-generator.com/api/json/get/')

  .factory('Person', function() {
    function Person(person) {
      this.firstName = person.firstName;
      this.lastName = person.lastName;
      this.picture = person.picture;
      this.company = person.company;
      this.email = person.email;
      this.phone = person.phone;

      this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
      };

      this.save = function() {
        // save to service!!!
      }
    }

    return Person;
  })
  
  .service('peopleService', function PeopleService($http, BASE_API_URL, Person) {
    var peopleService = this;

    console.log(Person);
    peopleService.getPeople = function (id) {
      return $http.get(BASE_API_URL + id).then(function success(result) {
        return result.data.map(function(person) {
          return new Person(person);
        });
      });
    }

  })
;

