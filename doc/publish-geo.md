# Publishing Geospatial Data as Data Packages

Publishing your Geodata as Data Packages is very easy.

You have two options for publishing your geodata:

* **Geo Data Package** (Recommended). This is a basic Data Package with the
  requirement that data be in GeoJSON and with a few special additions to the
  metadata for geodata. See the next section for instructions on how to do
  this.
* **Generic Data Package**. This allows you to publish geodata in any kind of
  format (KML, Shapefiles, Spatialite etc). If you choose this option you will
  want to follow the standard [instructions for packaging any kind of data as a
  Data Package][any].

We recommend Geo Data Package if that is possible as it makes it much easier
for you to use 3rd party tools with your Data Package. For example, the [data
package viewer][viewer] on this site will automatically preview a Geo Data Package.

> *Note: this document focuses on *vector* geodata &ndash; i.e. points, lines polygons etc (not
imagery or raster data).*

[any]: /doc/publish-any/
[viewer]: /tools/view

## Geo Data Packages

### Examples

#### [Exemplar Geo Data Package](https://github.com/datasets/ex-geojson)

Demonstrates `multipolygon` and `point` geometry

[View it with the Data Package Viewer][view-1]

[view-1]: http://data.okfn.org/tools/view?url=https%3A%2F%2Fgithub.com%2Fdatasets%2Fex-geojson

<script src="http://gist-it.appspot.com/github/datasets/ex-geojson/blob/master/datapackage.json"></script>

#### [Traffic signs of Hansbeke, Belgium](https://github.com/peterdesmet/traffic-signs-hansbeke)
  
Example of using `point` geometries with described properties in real world situation.

[View it with the Data Package Viewer][view-2]

[view-2]: http://data.okfn.org/tools/view?url=https%3A%2F%2Fgithub.com%2Fpeterdesmet%2Ftraffic-signs-hansbeke

<script src="http://gist-it.appspot.com/github/datasets/ex-geojson/blob/master/datapackage.json"></script>
