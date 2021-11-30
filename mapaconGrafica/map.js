
const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var datosAire= //añadimos los datos de nuestra capa propia
{
"type": "FeatureCollection",
"name": "datosAire",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": {"idStation": "Barrax" }, "geometry": { "type": "Point", "coordinates": [ -1.853862418305368, 38.977322663475398 ] } },
{ "type": "Feature", "properties": { "idStation": "Gobierno" }, "geometry": { "type": "Point", "coordinates": [ -1.857766360298926, 38.991772976209432 ] } },
{ "type": "Feature", "properties": { "idStation": "Poligono" }, "geometry": { "type": "Point", "coordinates": [ -1.88398252444569, 39.015499820206024 ] } }
]
}

let myMap = L.map('myMap').setView([38.99, -1.86],13)

L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap)
 L.geoJson(datosAire).addTo(myMap) ;



