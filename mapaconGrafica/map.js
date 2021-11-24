const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

/*var hoy = new Date();
var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
var fechaYhora = fecha + ' ' + hora;*/

let myMap = L.map('myMap').setView([38.99, -1.86],13) 
// crea el mapa con una posicion determinada en este caso la de Albacete, el 13 es el zoom inicial

L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(myMap) 
//agregamos al layer el mapa con openstream



let geojson="puntosAire.json"

fetch(
geojson
).then(
    res=> res.json()

).then(
    data=>{
       let geojsonlayer=L.geoJson(data,{
           onEachFeature:function(features,layer){
               layer.bindPopup(features.properties['idStation'])
           }
       }).addTo(myMap)
    }
)

