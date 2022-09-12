---
title: Applying licenses, waivers or public domain marks
date: 2018-03-27
tags: ["licenses"]
description: A guide on applying licenses, waivers or public domain marks to datapackages
category: publishing-data
---

Applying licenses, waivers or public domain marks to [data packages](https://specs.frictionlessdata.io/data-package/) and [data resources](https://specs.frictionlessdata.io/data-resource/) helps people understand how they can use, modify and share the contents of a data package.

It is recommended to that you apply a license, waiver or public domain mark to a data package using the [`licenses`](https://specs.frictionlessdata.io/data-package/#licenses) property. The value assigned to the data package `licenses` property applies to all the data, files and metadata in the data package unless specified otherwise.

You can optionally apply a license to a data resource. This allows a license that differs from the data package license to be applied to the data resource. If the data resource [`licenses`](https://specs.frictionlessdata.io/data-resource/#optional-properties) property is not specified, it inherits the data package `licenses`.

## Specifying a license
The Frictionless Data specification states that a [license](https://specs.frictionlessdata.io/data-package/#licenses) must contain a `name` property and/or a `path` property, and may contain a `title` property.

> * `name`: The name MUST be an [Open Definition license ID](http://licenses.opendefinition.org)
> * `path`: A [url-or-path](https://specs.frictionlessdata.io/data-resource/#url-or-path) string, that is a fully qualified HTTP address, or a relative POSIX path
> * `title`: A human-readable title

You can specify the location of a license using a URL or a Path.

### Specify a license using a URL

To specify a license using a URL, use the fully qualified HTTP address as the value in the `path` property, e.g.

```
"licenses": [{
  "path": "https://cdla.io/sharing-1-0/",
  "title": "Community Data License Agreement – Sharing, Version 1.0"
}]
```

### Specify a license using a Path

To specify a license using a path, use a relative POSIX path to the file in the data package as the value in the `path` property, e.g.

```
"licenses": [{
  "path": "LICENSE.pdf"
}]
```

In this example, LICENSE.pdf would be in the root of the data package folder, e.g.

```
folder
  |- datapackage.json
  |- LICENSE.pdf
  |- README.md
  |- data
      |- data.csv
      |- reference-data.csv

```

It is recommended that the licence is provided in [markdown](http://commonmark.org) format to simplify its display in data platforms and other software.

The license can be a separate file or included in the `README.md` file. If license information is included in the `README.md` file, it is recommended that it follows the [guide for formatting a README file](/blog/2016/04/20/publish-faq/#readme).

## Applying a license

These scenarios apply to either the data package or a data resource.

1. [Apply an open license](#apply-an-open-license)
2. [Apply a non-open license](#apply-a-non-open-license)
3. [Apply a waiver](#apply-a-waiver)
4. [Apply a public domain mark](#apply-a-public-domain-mark)
5. [Do not apply a license](#do-not-apply-a-license)

Other considerations:
* [Provide additional license information](#provide-additional-license-information)
* [Copyright belongs to multiple parties](#copyright-belongs-to-multiple-parties)
* [License may become legally binding](#license-may-become-legally-binding)
* [Software may not fully support the Frictionless Data specification](#software-may-not-fully-support-the-frictionless-data-specification)

### Apply an open license

For an [open license](http://opendefinition.org/licenses/), use `name`, `path` and `title`, e.g.

```
"licenses": [{
  "name": "CC-BY-4.0",
  "path": "https://creativecommons.org/licenses/by/4.0/",
  "title": "Creative Commons Attribution 4.0"
}]
```

`name` must be an [Open Definition license ID](http://licenses.opendefinition.org) however note that some license IDs are placeholders or have been retired and should not be used, e.g. [other-at](http://licenses.opendefinition.org/licenses/other-at.json), [other-open](http://licenses.opendefinition.org/licenses/other-open.json), [other-pd](http://licenses.opendefinition.org/licenses/other-pd.json), [notspecified](http://licenses.opendefinition.org/licenses/notspecified.json),  [ukcrown-withrights](http://licenses.opendefinition.org/licenses/ukcrown-withrights.json).

### Apply a non-open license

To apply an non-open license, use the `path` and optionally the `title` properties. It is preferred that the license is published at a URL (a fully qualified HTTP address), e.g.

```
"licenses": [{
  "path": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  "title": "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
}]
```

If the license is not available at a URL, you can [specify a license using a path](#specify-a-license-using-a-path).

### Apply a waiver

You can indicate that copyright has been waived by referencing a waiver at a URL in the `path` property, e.g.

```
"licenses": [{
  "name": "CC0-1.0"
  "path": "https://creativecommons.org/publicdomain/zero/1.0/",
  "title": "CC0 1.0"
}]
```

If the waiver is not available at a URL, you can [specify a waiver using a path](#specify-a-license-using-a-path).

### Apply a public domain mark

You can indicate that there is no copyright in the data or that copyright has expired, using the [public domain mark](https://creativecommons.org/share-your-work/public-domain/pdm/) or other public domain dedications, e.g.

```
"licenses": [{
  "path": "http://creativecommons.org/publicdomain/mark/1.0/",
  "title": "Public Domain Mark"
}]
```

If the public domain dedication is not available at a URL, you can  [specify the public domain dedication using a path](#specify-a-license-using-a-path).

### Do not apply a license

If you have not decided what license to apply but still want to publish the data package, describe the situation in a file in the data package, e.g.

```
"licenses": [{
  "path": "README.md"
}]
```

## Other considerations

### Provide additional license information

It can be helpful to data consumers to provide additional copyright or attribution information such as:

* copyright notice - this allows a data publisher to specify a short copyright notice
* copyright statement URL - a URL to a copyright statement
* preferred attribution text - the text to be used when attributing the creator(s) of the data
* attribution URL - a URL to be used when building an attribution link

This is explained in the ODI [Publisher's Guide to the Open Data Rights Statement Vocabulary](https://theodi.org/guides/publishers-guide-to-the-open-data-rights-statement-vocabulary) and [Re-users Guide to the Open Data Rights Statement Vocabulary](https://theodi.org/guides/odrs-reusers-guide).

Some licenses require that data consumers provide the copyright notice in the attribution (e.g. [CC BY 4.0 Section 3](https://creativecommons.org/licenses/by/4.0/legalcode#s3)).

Some data publishers may waive some of their rights under a license, e.g.

> [Noosa Wedding Locations](https://data.gov.au/dataset/noosa-wedding-locations) data by [Noosa Shire Council](https://www.noosa.qld.gov.au) is licensed under a [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) licence.
> Noosa Shire Council waives the requirements of attribution under this licence, for this data.

You can include this information, either:
* in the file containing license information (e.g. `README.md`)
* as additional metadata properties in the datapackage.json

The data package specification supports adding [additional metadata properties](https://specs.frictionlessdata.io/data-package/#descriptor) to the datapackage.json, e.g.

```
{
  "name" : "coastal-data-system-near-real-time-wave-data",
  "title" : "Coastal Data System – Near real time wave data",
  "licenses" : [{
    "name": "CC-BY-4.0",
    "path": "https://creativecommons.org/licenses/by/4.0/",
    "title": "Creative Commons Attribution 4.0"
  }],
  "copyrightNotice": "© The State of Queensland 1995–2017",
  "copyrightStatement": "https://www.qld.gov.au/legal/copyright",
  "attributionText": "Science, Information Technology and Innovation, Queensland Government, Coastal Data System – Near real time wave data, licensed under Creative Commons Attribution 4.0 sourced on 26 December 2017",
  "resources": [
    {
      "path": "https://data.qld.gov.au/dataset/coastal-data-system-near-real-time-wave-data",
      ...
    }
  ]
}
```

### Copyright belongs to multiple parties

Sometimes data in a resource may be combined from multiple sources that are licensed in different ways. You can indicate this by placing two or more licenses in the `licenses` property. Further explanation should be given in the `README.md`.

```
"licenses": [{
    "name": "PDDL-1.0",
    "path": "http://opendatacommons.org/licenses/pddl/",
    "title": "Open Data Commons Public Domain Dedication and License v1.0"
  },
  {
    "name": "CC-BY-SA-4.0",
    "path": "https://creativecommons.org/licenses/by-sa/4.0/",
    "title": "Creative Commons Attribution Share-Alike 4.0"
  }]
```

### License may become legally binding

The [specification](https://specs.frictionlessdata.io/data-package/#licenses) for `licenses` states:

> **This property is not legally binding and does not guarantee the package is licensed under the terms defined in this property.**

A data package may be uploaded to a data platform and the `licenses` applied to the data resources may be publicly displayed. This may make, or give the perception that, the license is legally binding. Please check your specific situation before publishing the data.

### Software may not fully support the Frictionless Data specification

Be aware that some data platforms or software may not fully support the Frictionless Data specification. This may result in license information being lost or other issues. Always test your data publication to ensure you communicate the correct license information.

For example, at the time of writing:

* [CKAN Data Package extension](https://github.com/frictionlessdata/ckanext-datapackager):
  * does not upload the `README.md` file in a data package. If you have described licence information in the `README.md` file, this will be lost ([issue #60](https://github.com/frictionlessdata/ckanext-datapackager/issues/60))
  * does not display license information in the datapackage.json file correctly ([issue #62](https://github.com/frictionlessdata/ckanext-datapackager/issues/62))

* [Data Curator](/blog/2019/03/01/datacurator/) only allows the user to select from a limited set of open licenses to describe the data package and data resource licenses.
