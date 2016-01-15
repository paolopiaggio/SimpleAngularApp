'use strict';
 
describe('PasswordController', function(){
    var scope;//we'll use this scope in our tests
 
    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('myApp'));

    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('PasswordController', {$scope: scope});
    }));

    // tests start here
    it('should have variable password = ""', function(){
        expect(scope.password).toBe('');
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      scope.password = 'longerthaneightchars';
      scope.grade();
      expect(scope.strength).toEqual('strong');
    });

    it('sets the strength to "medium" if the password length is >3 chars and <8 chars', function() {
      scope.password = 'btw3&8';
      scope.grade();
      expect(scope.strength).toEqual('medium');
    });

    it('sets the strength to "weak" if the password length is <3 chars', function() {
      scope.password = 'p';
      scope.grade();
      expect(scope.strength).toEqual('weak');
    });
});