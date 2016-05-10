'use strict';

describe('Airport Feature:', function() {
	var airport;
	var plane;
	
	beforeEach(function() {
	  airport = new Airport();
	  plane = new Plane();
	});
	
	describe('allows', function () {
		it('a plane to land into the airport', function () {
			_clearWeather();
			expect(airport.land(plane)).toEqual("737 landed into Airport");
			expect(airport.planes()).toContain(plane)
		});
		
		it('a plane to take-off from the airport', function () {
			_clearWeather();
			expect(airport.takeOff(plane)).toEqual("737 took off from Airport");
		});
	});
	
	describe('does not allow', function () {
		it("a plane to land into the airport when it's stormy", function () {
			_stormyWeather();
			expect(airport.land(plane)).toEqual("737 could not land into Airport")
		});
		
		it("a plane to take-off from the airport when it's stormy", function () {
			_stormyWeather();
			expect(airport.takeOff(plane)).toEqual("737 could not take off from Airport")
		});
	});
	
	var _clearWeather = function() {
		spyOn(airport, 'isStormy').and.returnValue(false);
	};
	
	var _stormyWeather = function() {
		spyOn(airport, 'isStormy').and.returnValue(true);
	};
});