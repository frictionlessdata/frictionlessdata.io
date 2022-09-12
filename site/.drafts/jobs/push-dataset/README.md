---
title: Push Dataset
tagline: Push data from your environment to an external location e.g. (cloud) storage or database.
description: Following the task of producing or enriching data, you need to publish the resulting dataset so others can consume.
pain: Depending who's the consumer, if it's a machine or a person, you may start doing it with Git or even by e-mail. Over time, you want to start wrapping data in Data Packages. When reasonable, use streams, too.
context: Unless you're working alone or don't care about sharing results with others, you need to push data to a third-party.
hexagon: push dataset
layout: job
---

## Examples

s3cmd put localfile.csv s3://my-bucket/file.csv

## Solutions

**data-cli**
A command line tool to push data to DataHub.
 
**Tabulator**
Python library to work with streams of multiple formats. CSV, JSON, and XLS supported.
 
**DataFlows**
You may push data as the final process of a data transformation pipeline.
 
**Data Package Pipelines**
You may push data as the final process of a data transformation pipeline.
