const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
/*var datosAire= //añadimos los datos de nuestra capa propia
{
"type": "FeatureCollection",
"name": "datosAire",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": {"idStation": "Barrax" }, "geometry": { "type": "Point", "coordinates": [ -1.853862418305368, 38.977322663475398 ] } },
{ "type": "Feature", "properties": { "idStation": "Gobierno" }, "geometry": { "type": "Point", "coordinates": [ -1.857766360298926, 38.991772976209432 ] } },
{ "type": "Feature", "properties": { "idStation": "Poligono" }, "geometry": { "type": "Point", "coordinates": [ -1.88398252444569, 39.015499820206024 ] } }
]
}*/

var myMap = L.map('myMap').setView([38.99, -1.86],13)

L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap)
/*L.geoJson(datosAire, {
    onEachFeature:function(features,layer){
        var Station=features.properties['idStation'];
        layer.bindPopup('<button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">Grafica</button>')
        .bindTooltip('<b>'+Station+'</b>') ;
        
       
        
        
    }
    
}).addTo(myMap)*/


 var Barrax=L.marker([38.977322663475398,-1.853862418305368 ] ).addTo(myMap).bindPopup('<button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">Grafica</button>')
 .bindTooltip('<b>'+"Barrax"+'</b>');
 var Gobierno=L.marker([38.991772976209432,-1.857766360298926]).addTo(myMap).bindPopup('<button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">Grafica</button>')
 .bindTooltip('<b>'+"Gobierno"+'</b>');
 var Poligono=L.marker([39.015499820206024,-1.88398252444569]).addTo(myMap).bindPopup('<button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">Grafica</button>')
 .bindTooltip('<b>'+"Poligono"+'</b>');

myMap.zoomControl.remove();

L.control.zoom({
    position: 'bottomright'
}).addTo(myMap);

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.width="50%"
    
 }

 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
 }

 function mostrar(){
    
    let fecha=document.getElementById("fecha").value;
    var timestamp=Date.parse(fecha)/1000;
    
 }
