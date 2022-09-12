---
title: Publishing Geospatial Data as a Data Package
date: 2016-04-30
tags:
description: A guide on how to publish geospatial data as datapackages
category: publishing-data
---
    
Publishing your Geodata as Data Packages is very easy.

You have two options for publishing your geodata:

* **Geo Data Package** (Recommended). This is a basic Data Package with the requirement that data be in GeoJSON and with a few special additions to the metadata for geodata. See the next section for instructions on how to do this.
* **Generic Data Package**. This allows you to publish geodata in any kind of format (KML, Shapefiles, Spatialite etc). If you choose this option you will want to follow the standard [instructions for packaging any kind of data as a Data Package][pub-any].

We recommend Geo Data Package if that is possible as it makes it much easier for you to use 3rd party tools with your Data Package. For example, the [datapackage viewer][dp-viewer] on this site will automatically preview a Geo Data Package.

::: tip
*Note: this document focuses on *vector* geodata &ndash; i.e. points, lines polygons etc (not imagery or raster data).*
:::

## Geo Data Packages

### Examples

#### [Traffic signs of Hansbeke, Belgium](https://github.com/peterdesmet/traffic-signs-hansbeke)

Example of using `point` geometries with described properties in real world situation.

[View it with the Data Package Viewer][view-2](*deprecated*)

[view-2]: http://data.okfn.org/tools/view?url=https%3A%2F%2Fgithub.com%2Fpeterdesmet%2Ftraffic-signs-hansbeke

#### [GeoJSON example on DataHub](https://datahub.io/examples/geojson-tutorial)

#### See more Geo Data Packages in the [example data packages](https://github.com/frictionlessdata/example-data-packages) GitHub repository.

::: tip
Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our [Introduction][introduction].
:::

[dp]: /data-package
[dp-main]: /data-package
[tdp]: /data-package/#tabular-data-package
[ts]: /table-schema/
[ts-types]: https://specs.frictionlessdata.io/table-schema/#field-descriptors
[csv]: /blog/2018/07/09/csv/
[json]: http://en.wikipedia.org/wiki/JSON

[spec-dp]: https://specs.frictionlessdata.io/data-package/
[spec-tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[spec-ts]: https://specs.frictionlessdata.io/table-schema/
[spec-csvddf]: https://specs.frictionlessdata.io/csv-dialect/

[publish]: /docs/publish/
[pub-tabular]: /blog/2016/07/21/publish-tabular/
[pub-online]: /blog/2016/08/29/publish-online/
[pub-any]: /blog/2016/07/21/publish-any/
[pub-geo]: /blog/2016/04/30/publish-geo/
[pub-faq]: /blog/2016/04/20/publish-faq/
[introduction]: /introduction

[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io
