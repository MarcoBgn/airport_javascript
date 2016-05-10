'use strict';

describe('Plane',function () {
	var plane;
	
	beforeEach(function () {
		plane = new Plane();
	});
	
	it('has a name',function () {
		expect(plane.name()).toEqual("737");
	});
  
  it('returns the name as a string',function () {
    expect(plane.name()).toEqual(jasmine.any(String));
  })
});