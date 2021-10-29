import pymongo
#from pymongo import MongoClient
import csv
import pandas as pd

myclient=pymongo.MongoClient("mongodb://localhost:27017/")
mydb=myclient["prueba"]
mycol=mydb["prueba"]

x=[]

#consulta =mycol.find().sort("_id",-1).limit(3)

for i in mycol.find().sort("_id",1).limit(3):
  x.append(i)

df = pd.DataFrame(x, columns = ['_id','date','no2C','timestampSensor','o3','pm10','pressure','co','batteryVolts','no2','idStation','serial','pm1','coC','pm2_5','temperature','humidity','luminosity','batteryCurrent','o3C','timestaup','batteryLevel'])

df.to_csv('aire.csv', sep=',',index=False)

 #ORDENA EL FICHERO POR idStation
fichero = pd.read_csv('aire.csv')

fichero = fichero.sort_values(['idStation'], ascending=True)

fichero = fichero.to_csv("aire.csv", sep=',',index=False)

#AÑADIR X/Y
df = pd.read_csv("aire.csv")
df["x"] = ['-18565','-1.8569737837709792','-1.882785915086828']
df["y"]=['38977','38.98344370359718','39.01808029461647']
df.to_csv("aire.csv", sep=',', index=False)





