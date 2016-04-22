'use strict';

describe('Directive: treemap2', function () {

  // load the directive's module
  beforeEach(module('dateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<treemap2></treemap2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the treemap2 directive');
  }));
});
