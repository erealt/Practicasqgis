import pymongo

# from pymongo import MongoClient
import csv
import json
import pandas as pd

myclient = pymongo.MongoClient("mongodb://pluton.i3a.uclm.es:27017/")
mydb = myclient["kikeDev"]
mycol = mydb["AirMeasurement"]

x = []

# consulta =mycol.find().sort("_id",-1).limit(3)

for i in mycol.find().sort("_id", 1).limit(3):
    x.append(i)

df = pd.DataFrame(x, columns=['_id', 'date', 'no2C', 'timestampSensor', 'o3', 'pm10', 'pressure', 'co', 'batteryVolts',
                              'no2', 'idStation', 'serial', 'pm1', 'coC', 'pm2_5', 'temperature', 'humidity',
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

df.to_csv("puntosaire.csv", sep=',', index=False)



import pandas as pd
csv_data = pd.read_csv("puntosaire.csv")
csv_data.to_json("puntosAire.json", orient = "records")
