'use strict';

function Airport() {
	this._weather = new Weather();
	this._checkWeather = this._weather.condition();
	this._hangar = []
};
		
Airport.prototype.planes = function () {
	return this._hangar;
};
Airport.prototype.land = function(plane) {
	if (this.isStormy() === false) {
	this._hangar.push(plane);
	return plane.name() + " landed into Airport";
   } else {
   	return plane.name() + " could not land into Airport";
   }
};

 Airport.prototype.isStormy = function() {
	 if (this._checkWeather === "stormy") {
		 return true
	 } else {
	 return false
	 }
 };

Airport.prototype.takeOff = function(plane) {
	if (this.isStormy() === true) {
		return plane.name() + " could not take off from Airport";
	} else {
		return plane.name() + " took off from Airport";
	}
};