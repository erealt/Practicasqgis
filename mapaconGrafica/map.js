const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var puntosAire; //añadimos los datos de nuestra capa propia

var hoy = new Date();
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var fechaYhora = fecha + ' ' + hora;
let myMap = L.map('myMap').setView([38.99, -1.86],13)

L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap)

$.getJSON('puntosAire.json',function(puntosAire){
L.geoJson(puntosAire).addTo(myMap).bindPopup("<h1>Marcador</h1><p>Datos del día:</p>"+fechaYhora );
})
