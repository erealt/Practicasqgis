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
df["x"] = ['1634318557','39.01352326070366','39.01781355042017']
df["y"]=['-1.8565,38.977','-1.8698280707816208','-1.8822709309889267']
df.to_csv("aire.csv", sep=',', index=False)





