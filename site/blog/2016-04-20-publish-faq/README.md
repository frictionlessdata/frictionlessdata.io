---
title: FAQ on Publishing Data Packages
date: 2016-04-20
tags:
category: publishing-data
---

FAQs and best practice patterns for publishing data packages.

Complete specifications are available at [specs/data-package](https://specs.frictionlessdata.io/data-package/).

## Data Package Name

The Data Package name is used in the `name` field of the `datapackage.json`.

*This name is also frequently used for the folder/directory in which the Data Package is stored.*

As per the Data Package spec The name SHOULD be:

* lower-case
* use '-' for word separators
* reasonably concise (3-4 words)

**Naming conventions**

For country specific datasets:

```
{topic}                  # e.g. gdp
{topic}-{2-digit-iso}    # e.g. gdp-us
```

For time series data:

```
[...-]year
[...-]quarter
[...-]month
[...-]day
```

----

## Resource and File Names

Similar to Data Package Names:

* lower-case
* use '-' for word separators

Resource names SHOULD, usually, be the same as the name of the associated file on disk but without the file extension. e.g.

```
gdp-quarterly     # resource name
gdp-quarterly.csv # on disk
```

Naming conventions of files follow that for data packages in terms of country or time series facets.

----

## Descriptor `datapackage.json`

### Alignment

With JSON, data is structured in a nested way through curly and squared brackets. Though the alignment of these structures is not relevant for computer programs, it makes it easier for the human reader if they are properly aligned.

Good alignment:

```json
{
  "name": "corruption-perceptions-index",
  "title": "Corruption Perceptions Index (CPI)",
  "sources": [
    {
      "name": "Transparency International",
      "web": "http://www.transparency.org/research/cpi/overview"
    }
  ],
...
}
```

Bad alignment:

```json
{
  "name": "corruption-perceptions-index","title": "Corruption Perceptions Index (CPI)",
  "sources":
  [{
    "name": "Transparency International",
    "web": "http://www.transparency.org/research/cpi/overview"}]
    ,
...
}
```

Please make sure to have your `datapackage.json` well structured to ease the understanding of your Data Package content. The [Online DataPackage.json Creator](https://create.frictionlessdata.io/) can help you create the general structure.

### Contributors fields

Add the 'contributors' field (original author of the package - see [specs/data-package](https://specs.frictionlessdata.io/data-package/) if you wish to keep the credits for the package.

----

## Data Package Folder Names and Structure

It is standard practice to use the Data Package name (from the `datapackage.json`) for the name of the folder/directory in which the Data Package is kept.

If storing in e.g. git(hub) this would also be the the name of the repository.

If you include scripts allowing to automate the data extraction process, these should be stored in a `script` folder/directory.

----

## README

A README is a text file giving (human-readable) information about your dataset.

Data Packages SHOULD have a README.

### Formatting

The README SHOULD be a plain text file (no word or rich text etc) and SHOULD use markdown to allow for formatting

### File Name

If markdown is used the file SHOULD be named `README.md` and otherwise SHOULD be named `README.txt`.

### Sections

You can include anything you like in your README. It is standard practice to include some (if possible all) of the following sections: **Introduction, Data, Preparation, License**.

We SHOULD NOT include the title of the Data Package at the top of the README.

Each section other than the introduction should be headed with its name using level 2 heading in markdown e.g. for the data section you would have the following markdown in your README:

```
## Data
```

#### Introduction

Start with a short description of the dataset (the first sentence and first paragraph should be extractable to provide short standalone descriptions).

Unlike other sections **this section SHOULD NOT have a heading** as it starts the README. (i.e. you do not need the heading `## Introduction`

#### Data

Put specific information about the data in a Data section. This can be things like information about the source of the data, the specific structure of the data, missing values etc.

#### Preparation

Put information on preparing the data in a Preparation section. In particular, any instructions about how to run any preparation and processing scripts to generate the data should go here.

#### License

Put additional information on the permissions and licensing of the data in the Data Package in the License section.

Since licensing information is often not clear from the data producers, the guideline here is to license the Data Package under the Public Domain Dedication and License, and then to add any relevant information or disclaimers regarding the source data.

See, for example:

* <http://datahub.io/core/corruption-perceptions-index#readme>
* <http://datahub.io/core/geo-nuts-administrative-boundaries#readme>

See also the following thread <https://discuss.okfn.org/t/copyright-on-data-sources/189>

----

## Validate and preview your Data Package

Use the [Data Package Creator][dp-creator] to check that your `datapackage.json` and Data Package are good to go. Simply drop the URL to your `datapackage.json` file in the input box, or upload from a local source, and press `Validate`. If everything is fine, `Status: Valid` is returned.

Then use the [Online Data Package viewer app][dp-viewer] to have a preview of your Data Package.

----

## Examples

For examples of well-structured Data Package see:

* For tabular data: <http://datahub.io/core/corruption-perceptions-index>
* For geospatial data: <http://datahub.io/core/geo-nuts-administrative-boundaries>

Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive [Frictionless Data Field Guide][field-guide].

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
[field-guide]: /tag/field-guide

[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io
