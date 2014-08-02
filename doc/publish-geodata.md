# Publishing Geodata (Geospatial Data) as Data Packages

Note: this focuses on *vector* geodata -- i.e. points, lines polygons etc (not
imagery or raster data).

Publishing your Geodata as Data Packages is very easy.

There are 2 options:

* "Geo Data Package" - this is the special case where the geodata is in GeoJSON
  or GeoCSV
* Publish as a Data Package - a Data Package can have any kind of data in it so
  just need to pull together your existing data (whatever its format, KML,
  Shapefiles etc) and add a datapackage.json. This option is the same as
  publish any kind of data so you should see the general instructions for this.

We recommend going for the Geo Data Package if you can as having your data in a
standard format makes it easier for standard tools to work with it (for
example, the data package viewer that is on this site will automatically
preview GeoJSON and GeoCSV data).

## GeoJSON

Examplar Geo Data Packages using `geojson`:

* [Example Geo Data Package](https://github.com/datasets/ex-geojson), with `multipolygon` and `point` geometry
* [Traffic signs of Hansbeke, Belgium](https://github.com/peterdesmet/traffic-signs-hansbeke), `point` geometries with described properties

