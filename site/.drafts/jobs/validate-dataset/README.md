---
title: Validate Dataset
tagline: Check syntax and structure of data against a schema.
description: When relying on external sources, you need to ensure a dataset remains valid over time.
pain: Initially, you may do validation\ by hand or in a simple script. Over time, the Frictionless Data-way is to declare expectations in a file and have a library to continuously verify that for you.
context: It becomes a requirements when external changes often breaks your pipeline.
hexagon: validate dataset
layout: job
---

## Examples

```
for row in mydata:
  if not validDate(row[0]):
    log("Bad data:" + row[0]
```

## Solutions

**Table Schema**
It's an implementation-agnostic way to declare a schema for tabular data.
 
**GoodTables**
It validates if a dataset complies to a Table Schema.
 
**Data Quality Dashboard**
It builds on top of GoodTables to provide a dashboard showing the state of multiple datasets
