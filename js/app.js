/*
Christopher Bernhard
ICT 4510
Project 3: Build A Map with API
map token: pk.eyJ1IjoiY2Jlcm5oYXJkIiwiYSI6ImNra3JjMGQ4NDAxMTUybnF0NmRjYmgybGcifQ.EO4xXGkO9HznNQ_sg41tmA
*/

const accessToken = 'pk.eyJ1IjoiY2Jlcm5oYXJkIiwiYSI6ImNra3JjMGQ4NDAxMTUybnF0NmRjYmgybGcifQ.EO4xXGkO9HznNQ_sg41tmA';
// const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const mymap = L.map('mapid').setView([39.678121, -104.961753], 15);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);