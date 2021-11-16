const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var datosAire= //añadimos los datos de nuestra capa propia
{
"type": "FeatureCollection",
"name": "datosAire",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "_id": "5d63f1c464c833009b7e10cf", "date": 1566831044009.0, "no2C": 0.0, "timestampS": 1566837875, "o3": 37097.05399788115, "pm10": 10.78, "pressure": 93839.859, "co": 65.452864685286499, "batteryVol": null, "no2": 0.0, "idStation": "Barrax", "serial": "6107AAE80593E4B2", "pm1": 4.5, "coC": 0.062208362, "pm2_5": 5.66, "temperatur": 27.52, "humidity": 42.343, "luminosity": 12186, "batteryCur": 0, "o3C": 20.5746, "timestaup": null, "batteryLev": 80, "x": -1.853862418305368, "y": 38.977322663475398 }, "geometry": { "type": "Point", "coordinates": [ -1.853862418305368, 38.977322663475398 ] } },
{ "type": "Feature", "properties": { "_id": "5d63f4396bd29c009c7f56d7", "date": 1566831668031.0, "no2C": 0.0, "timestampS": 1566838487, "o3": 0.0, "pm10": 5.22, "pressure": 93984.516, "co": 395.8004098605557, "batteryVol": null, "no2": 0.0, "idStation": "Gobierno", "serial": "765A67057C1054A4", "pm1": 2.93, "coC": 0.37486452, "pm2_5": 3.94, "temperatur": 26.93, "humidity": 44.712, "luminosity": 12006, "batteryCur": 104, "o3C": 0.0, "timestaup": null, "batteryLev": 90, "x": -1.8577663602989261, "y": 38.991772976209432 }, "geometry": { "type": "Point", "coordinates": [ -1.857766360298926, 38.991772976209432 ] } },
{ "type": "Feature", "properties": { "_id": "5d63f5896bd29c009c7f56d9", "date": 1566832009631.0, "no2C": 0.0, "timestampS": 1566838833, "o3": 370.37604839752316, "pm10": 4.88, "pressure": 93909.258, "co": 632.03946572288328, "batteryVol": null, "no2": 0.0, "idStation": "Poligono", "serial": "0E23A2E80593E429", "pm1": 3.23, "coC": 0.59944677, "pm2_5": 4.21, "temperatur": 27.11, "humidity": 44.5, "luminosity": 17123, "batteryCur": 0, "o3C": 0.20498458, "timestaup": null, "batteryLev": 70, "x": -1.88398252444569, "y": 39.015499820206024 }, "geometry": { "type": "Point", "coordinates": [ -1.88398252444569, 39.015499820206024 ] } }
]
}

let myMap = L.map('myMap').setView([38.99, -1.86],13)

L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap)
L.geoJson(datosAire).addTo(myMap)

document.addEventListener('DOMContentLoaded', function(){
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems);
sidenav_popup = instances[0];
});

//evento click
myMap.on('click', function(e){
sidenav_popup.open();
});
