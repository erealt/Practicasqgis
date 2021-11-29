import pymongo

# from pymongo import MongoClient
import csv
import json
import pandas as pd

#CONEXION CON EL SERVIDOR
myclient = pymongo.MongoClient("mongodb://pluton.i3a.uclm.es:27017/")
mydb = myclient["kikeDev"]
mycol = mydb["AirMeasurement"]

#CONSULTA PARA GUARDAR LOS 3 ULTIMOS DATOS QUE SE VAN AÑADIENDO
x = []

for i in mycol.find().sort("_id", -1).limit(3):
    x.append(i)

#GUARDAMOS LOS DATOS EN UN CSV
df = pd.DataFrame(x, columns=['_id', 'date', 'no2C', 'timestampSensor', 'o3', 'pm1', 'pressure', 'co', 'batteryVolts',
                              'no2', 'idStation', 'serial', 'pm10', 'coC', 'pm2_5', 'temperature', 'humidity',
                              'luminosity', 'batteryCurrent', 'o3C', 'timestaup', 'batteryLevel'])

df.to_csv('puntosaire.csv', sep=',', index=False)

# ORDENA EL FICHERO POR idStation
fichero = pd.read_csv('puntosaire.csv')

fichero = fichero.sort_values(['idStation'], ascending=True)

fichero = fichero.to_csv("puntosaire.csv", sep=',', index=False)

# AÑADIR X/Y
df = pd.read_csv("puntosaire.csv")
df["x"] = ['-1.853862418305368', '-1.8577663602989256', '-1.8839825244456896']
df["y"] = ['38.9773226634754', '38.99177297620943', '39.015499820206024']

df.to_csv("puntosaire.csv", sep=',', index=False,header =None)
df.to_csv("puntosaireHeader.csv", sep=',', index=False)
import csv, json
from geojson import Feature, FeatureCollection, Point

features = []
with open('puntosaire.csv') as csvfile:
    reader = csv.reader(csvfile)
    for _id, date, no2C, timestampSensor, o3, pm1, pressure, co, batteryVolts,no2, idStation, serial, pm10, coC, pm2_5, temperature, humidity,luminosity, batteryCurrent, o3C, timestaup, batteryLevel,x,y in reader:
        features.append({
            "type": "Feature",
             "properties":{
                 "_id":_id,
                 "date":date,
                 "no2C":no2C,
                 "timestampSensor":timestampSensor,
                 "o3":o3,
                 "pm10":pm1,
                 "preassure":pressure,
                 "co":co,
                 "batteryVolts":batteryVolts,
                 "no2":no2,
                 "idStation":idStation,
                 "serial":serial,
                 "pm10":pm1,
                 "coC":coC,
                 "pm2_5":pm2_5,
                 "temperature":temperature,
                 "humidity":humidity,
                 "luminosity":luminosity,
                 "batteryCurrent":batteryCurrent,
                 "o3C":o3C,
                 "timestaup":timestaup,
                 "batteryLevel":batteryLevel,
                 "x":x,
                 "y":y
             },
            "geometry":{"type":"Point","coordinates":[x,y]}
        }

        )

puntosAire={
    "type":"FeatureCollection",
    "name": "puntosAire",
    "crs": {"type": "name", "properties": {"name": "urn:ogc:def:crs:OGC:1.3:CRS84"}},
    "features":features }


with open("puntosAire.json", "w") as f:
    f.write(json.dumps(puntosAire))
