'use strict';

describe('Airport', function() {
	var airport;
	var plane;
	
	beforeEach(function() {
		airport = new Airport();
		plane = jasmine.createSpyObj('plane', ['name']);
	});

 
	   it('has a spy object for plane', function() {
	   	expect(plane.name).toBeDefined();
	   });
	    
		it('can land a pane at an airport', function() {
			expect(airport.land).not.toBeUndefined();
		});
		
		it('stores planes in the hangar', function() {
			spyOn(airport, 'isStormy').and.returnValue(false)
			airport.land(plane);
			expect(airport.planes()).toContain(plane);
		});
	 });

