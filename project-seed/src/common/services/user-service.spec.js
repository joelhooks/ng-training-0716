describe('userService', function() {
  var userService,
    allUsers,
    $httpBackend;

  beforeEach(module('example.services.user', {
    baseApiUrl: '/api'
  }));

  beforeEach(inject(function(_userService_, _$httpBackend_) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;
    setupMocks();
  }));

  it('should create an instance of the userService', function() {
    expect(userService).toBeDefined();
  });

  it('should return an array of users when getUsers is called', function() {
    userService.getUsers().then(function(users) {
      expect(users.length).toBeGreaterThan(0);
    });
    $httpBackend.flush();
  });

  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');

    $httpBackend.whenGET('/api/users').respond(allUsers);
  }


});