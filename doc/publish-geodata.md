## Publishing Geodata (Geospatial Data)

Note: this focuses on *vector* geodata -- i.e. points, lines polygons etc (not
imagery or raster data).

Unlike tabular data we don't have a single specific recommendation for the
geodata format to use when publishing geodata.

Instead we recommend a few formats and show how you would publish these.

## GeoJSON

Examplar Geo Data Packages using `geojson`:

* [Example Geo Data Package](https://github.com/datasets/ex-geojson), with `multipolygon` and `point` geometry
* [Traffic signs of Hansbeke, Belgium](https://github.com/peterdesmet/traffic-signs-hansbeke), `point` geometries with described properties

## TopoJSON

## KML 

We recommend against KML compared to GeoJSON.

## Shapefiles

We recommend against Shapefiles due to there proprietary nature and somewhat
complex structure. However, it is a common geodata format so we explain here
how to publish these.

