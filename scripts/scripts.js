'use strict';

var airport = new Airport();

function displayHangar() {
  var hangarRef = document.getElementById('hangar_display');
  hangarRef.innerHTML = (airport.planes().length > 0) ? airport.planes().length + " Planes" : "Hangar Empty";
}

function displayLanded() {
  var landed = document.getElementById('landed_message'), 
  plane = new Plane();
  landed.innerHTML = (airport.land(plane));
}