/*
Christopher Bernhard
ICT 4510
Project 3: Build A Map with API
Using the geolocation API, the user can see their location on a map.
If the user does not want to enable the geolocation on their browser, a map of University of Denver is displayed
*/

'use strict'

//GLOBAL VARIABLES
const accessToken = 'pk.eyJ1IjoiY2Jlcm5oYXJkIiwiYSI6ImNra3JjMGQ4NDAxMTUybnF0NmRjYmgybGcifQ.EO4xXGkO9HznNQ_sg41tmA';
const geoButton = document.querySelector('#geo-button');
const mymap = new L.Map('mapid');
const mapid = document.querySelector('#mapid');

//FUNCTIONS
function makeMap(coords, popUpMessage) {
  mapid.classList.remove('hidden');
  mymap.setView(coords, 15);

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(mymap);

  const marker = L.marker(coords).addTo(mymap);

  marker.bindPopup(popUpMessage).openPopup();
}

function getUserLocation() {

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    const coords = [position.coords.latitude, position.coords.longitude];
    const popUpMessage = '<p class="message">You are here!</p>';
    makeMap(coords, popUpMessage);
  }

  function error() {
    console.log('Unable to find your location');
    setUniversityOfDenverMap();
  }

  if (!navigator.geolocation) {
    console.log('not supported');
    setUniversityOfDenverMap();
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function setUniversityOfDenverMap() {
  const coords = [39.678121, -104.961753];
  const popUpMessage = '<p class="message"><b>University Of Denver</b><br/>Main Campus</p>';
  makeMap(coords, popUpMessage);
}

//EVENT LISTENERS
geoButton.addEventListener('click', getUserLocation);