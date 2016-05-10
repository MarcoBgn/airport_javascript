'use strict';

var airport = new Airport();

function displayHangar() {
  var hangarRef = document.getElementById('hangar_display')
  hangarRef.innerHTML = (airport.planes().length > 0) ? airport.planes() : "Hangar Empty";
}