'use strict';

var Weather = function() {};
 

Weather.prototype.condition = function() {
	var condition = ['sunny', 'stormy', 'windy', 'rainy'];
	return condition[Math.round(Math.random() * (condition.length -1))];
};