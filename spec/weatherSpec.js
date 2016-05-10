'use strict';

describe('Weather', function() {
	
	var weather;
	
	it('Can be sunny, windy, rainy or stormy',function() {
		weather = new Weather();
		expect(['sunny', 'stormy', 'windy', 'rainy']).toContain(weather.condition())
	});
});