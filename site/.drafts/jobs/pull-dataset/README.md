---
title: Pull Dataset
tagline: Get raw data from a source to your environment quickly and repeatedly.
description: In the process of getting from data to insight, you need to download data from external sources.
pain: Initially, you may get data using just the browser or curl. Over time, you will want to pull using a CLI or library compatible with the Data Package specification.
context: Together with finding good datasets, it's one of the first steps of every data project.
hexagon: pull dataset
layout: job
---

# {{ $page.frontmatter.title }}

**{{ $page.frontmatter.tagline }}**

{{ $page.frontmatter.description }}

## Examples

Click the download link on the website

```
$ wget <insert download link>"
```

## Solutions

**data-cli**
CLI tool for interacting with datasets hosted in DataHub.
 
**Tabulator**
It creates consistent streams for interacting with datasets available via HTTP, FTP, and Amazon S3.
 
**DataFlows**
Declare this task as a step in a data pipeline.
 
**Data Package Pipelines**
Declare this task as a step in a data pipeline.
