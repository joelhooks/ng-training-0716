angular.module('exampleApp', [])
  .component('counter', {
    bindings: {
      count: '='
    },
    controller: function CounterCtrl() {
      this.increment = function() {
        this.count++;
      };

      this.decrement = function() {
        this.count--;
      }
    },
    templateUrl: 'counter.html'
  })
;
