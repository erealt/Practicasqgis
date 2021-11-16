const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var puntosAire;
let myMap = L.map('myMap').setView([38.99, -1.86],13)

L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap);
$.getJSON('puntosAire.json',function(puntosAire){
L.geoJson(puntosAire).addTo(myMap);
})
