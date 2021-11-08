import os # This is is needed in the pyqgis console also
from qgis.core import *
from pathlib import Path

QgsApplication.setPrefixPath("C:\Program Files\QGIS 3.10", True)
qgs = QgsApplication([], False)


qgs.initQgis()

uri = "file:///C:/Users/realt/PycharmProjects/pythonProject/aire.csv?delimiter={}&xField={}&yField={}&crs={}".format(",", "x", "y","epsg:4326")
vlayer = QgsVectorLayer(uri, "capa", "delimitedtext")
QgsProject.instance().addMapLayer(vlayer)


path = r'C:\Users\realt\OneDrive\Escritorio\aire\aire'


options = QgsVectorFileWriter.SaveVectorOptions()
options.driverName = "ESRI Shapefile"

QgsVectorFileWriter.writeAsVectorFormatV2(vlayer, path, QgsCoordinateTransformContext(), options)

