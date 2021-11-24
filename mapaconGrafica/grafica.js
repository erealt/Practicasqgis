var myChart=document.getElementById("myChart").getContext('2d');
     
var NO2={
label:"NO2",
lineTension:0,
borderColor:'red',
data:[0,16,6]
};
var SO2={
label:"SO2",
lineTension:0,
borderColor:'green',
data:[0,15,30]
};
var O3={
label:"O3",
lineTension:0,
borderColor:'purple',
data:[0,10,25]
};
var PM25={
label:"PM2.5",
lineTension:0,
borderColor:'orange',
data:[5,0,10]
};
var PM10={
label:"PM10",
lineTension:0,
borderColor:'blue',
data:[10,5,0]
};
var speedData={
labels:["00:00","02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],
datasets:[NO2,SO2,O3,PM25,PM10]
};

var chartOptions={
legend:{
display:true,
position:'top',
labels:{
boxWidth:80,
fontColor:'black'}}};

var chart=new Chart(myChart,{
type:'line',
data:speedData,
options:chartOptions
});