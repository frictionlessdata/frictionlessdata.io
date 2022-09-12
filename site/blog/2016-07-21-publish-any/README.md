---
title: Publish Any Kind of Data as a Data Package
date: 2016-07-21
tags:
description: A guide on how to publish any kind of data as datapackages
category: publishing-data
---


You can publish **all and any kind of data** as Data packages. It's as simple as 1-2-3:

1. Get your data together
2. Add a `datapackage.json` file to wrap those data files up into a useful whole (with key information like the license, title and format)
3. [optional] Share it with others, for example, by uploading the data package online

## 1. Get your data together

Get your data together in one folder (you can have data in subfolders of that folder too, if you wish).

## 2. Add a datapackage.json file

The `datapackage.json` is a small file in [JSON][json] format that describes your dataset. You'll need to create this file and then place it in the directory you created.

*Don't worry if you don't know what JSON is - we provide some tools such as [Data Package Creator][dp-creator] that can automatically create this file for you.*


There are 2 options for creating the `datapackage.json`:

**Option 1**: Use the online [datapackage.json creator tool][dp-creator] - just answer a few questions and give it your data files and it will spit out a datapackage.json for you to include in your project

**Option 2**: Do it yourself - if you're familiar with JSON you can create this yourself. Take a look at the [Data Package Specification][spec-dp].

## 3. Put the data package online

See the [step-by-step instructions for putting your Data Package online][pub-online].

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
