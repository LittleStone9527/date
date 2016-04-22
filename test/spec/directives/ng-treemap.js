'use strict';

describe('Directive: ngTreeMap', function () {

  // load the directive's module
  beforeEach(module('dateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-tree-map></ng-tree-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngTreeMap directive');
  }));
});
