---
title: Publish Tabular Data as a Data Package
date: 2016-07-21
tags:
description: A guide on how to publish tabular datapackages
category: publishing-data
---

Here's how to publish your tabular data as [Tabular Data Packages][spec-tdp]. There are 4 steps:

1. Create a folder (directory) - this folder will hold your "data package"
2. Put your data into comma-separated values files ([CSV][csv-blog]) and add them to that folder
3. Add a `datapackage.json` file to hold some information about the data package and the data in it e.g. a title, who created it, how other people can use it (licensing), etc
4. Upload the data package online

### 1. Create a Directory (Folder)

### 2. Create your CSV files

CSV is a common file format for storing a (single) table of data (for example, a single sheet in a spreadsheet). If you've got more than one table you can save multiple CSV files, one for each table.

Put the CSV files in the directory you created -- we suggest putting them in a subdirectory called `data` so that your base directory does not get too cluttered up.

You can produce CSV files from almost any application that handles data including spreadsheets like Excel and databases like MySQL or Postgresql.

You can find out more about CSVs and how to produce them in our [guide to CSV][csv-blog] or by doing a quick search online for CSV + the name of your tool.

### 3. Add a datapackage.json file

The `datapackage.json` is a small file in [JSON][json] format that gives a bit of information about your dataset. You'll need to create this file and then place it in the directory you created.

> *Don't worry if you don't know what JSON is - we provide some tools that can automatically create your this file for you.*

There are three options for creating the `datapackage.json`:

**Option 1:** Use the online [datapackage.json creator tool][dp-creator] - answer a few questions and give it your data files and it will spit out a `datapackage.json` for you to include in your project.

**Option 2:** Do it yourself - if you're familiar with JSON you can create this yourself. Take a look at the [Data Package][spec-dp] and [Tabular Data Format][spec-tdp] specifications.

**Option 3:** Use the Python, JavaScript, PHP, Julia, R, Clojure, Java, Ruby or Go [libraries][libraries] for working with data packages.

### 4. Put the data package online

See [Putting Your Data Package online][pub-online]

----

## Appendix: Examples of Tabular Data Packages

Pay special attention to the scripts directory (and look at the commit logs!)

- [datahub.io/core/finance-vix](https://datahub.io/core/finance-vix)
- [datahub.io/core/s-and-p-500-companies](https://datahub.io/core/s-and-p-500-companies)
- [datahub.io/core/co2-fossil-global](https://datahub.io/core/co2-fossil-global)
- [datahub.io/core/imf-weo](https://datahub.io/core/imf-weo)

::: tip
Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our [introduction][introduction].
:::

[dp]: /data-package
[dp-main]: /data-package
[ts]: /table-schema/
[ts-types]: https://specs.frictionlessdata.io/table-schema/#field-descriptors

[csv-blog]: /blog/2018/07/09/csv/

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
[libraries]: /software
[introduction]: /introduction