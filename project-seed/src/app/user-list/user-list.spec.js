describe('UserListCtrl', function() {
  var userListCtrl,
    userService;
  
  beforeEach(module('example.user-list'));

  beforeEach(inject(function($controller) {
    userService = createUserServiceMock();

    userListCtrl = $controller('UserListCtrl', {
      userService: userService
    })
  }));

  it('should create an instance of controller', function() {
    expect(userListCtrl).toBeDefined();
  });

  it('should call getUsers when instance is created', function() {
    expect(userService.getUsersWasCalled).toBe(true);
  });

  it("should set the users property when promise is successful", function () {

    expect(userListCtrl.users).toBeDefined();
  });

  function createUserServiceMock() {
    var fakePromise = {
      then: function (callback) {
        callback([]);
      }
    };

    return {
      getUsersWasCalled: false,
      getUsers: function () {
        this.getUsersWasCalled = true;
        return fakePromise;
      }
    };
  }
});