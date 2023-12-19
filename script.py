import folium
from coordinates.py import coordinates

m = folium.Map(location=coordinates[0], zoom_start=15)

folium.Polygon(locations=coordinates, color='blue', fill_color='green', fill_opacity=0.4).add_to(m)
