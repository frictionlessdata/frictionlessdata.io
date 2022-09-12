---
title: Version Dataset
tagline: Keep each revision of a dataset and its metadata and track changes between them.
description: You want to version datasets for the same reasons you version code and infrastructure – for reproducibility and for facilitating the track for changes.
pain: Often done in quick-and-dirty scripts, it works well enough in short exploratory projects. When scaling in file or team size, you want robust tools made for the job.
context: Not every project needs versioning from the start. When the necessity appears, it is in the start of the data pipeline.
hexagon: version dataset
layout: job
---

## Examples

```
git add mydata.csv
git commit -m ""Change mydata""
git checkout --tag v1.0
```

## Solutions

**Data Package**
This specification tracks schema and business-specific changes. Everything in a datapackage.json file that goes with existing datasets.
