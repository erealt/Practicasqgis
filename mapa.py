import os # This is is needed in the pyqgis console also

import qgis
from qgis.core import *
from qgis.utils import *


QgsApplication.setPrefixPath("/usr", True)
qgs = QgsApplication([], False)

qgs.initQgis()

#AÑADE CAPA CON LOS DATOS DE LOS 3 PUNTOS DEL CSV
uri = "file:////home/estela/PycharmProjects/mapas/puntosaire.csv?delimiter={}&xField={}&yField={}&crs={}".format(",", "x", "y","epsg:4326")
vlayer = QgsVectorLayer(uri, "capa", "delimitedtext")


QgsProject.instance().addMapLayer(vlayer)


#AÑADE MAPA BASE
from qgis.core import QgsRasterLayer, QgsProject


def loadXYZ(url, name):
   rasterLyr = QgsRasterLayer("type=xyz&url=" + url, name, "wms")
   QgsProject.instance().addMapLayer(rasterLyr)



urlWithParams = 'https://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png&zmax=19&zmin=0&crs=EPSG3857'
loadXYZ(urlWithParams, 'OpenStreetMap')



#path = '/home/estela/aire/aire'


#options = QgsVectorFileWriter.SaveVectorOptions()
#options.driverName = "ESRI Shapefile"

#QgsVectorFileWriter.writeAsVectorFormatV2(vlayer, path, QgsCoordinateTransformContext(), options)
