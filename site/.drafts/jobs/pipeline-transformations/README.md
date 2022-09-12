---
title: Pipeline Transformations
tagline: Clean up and transform data using an automated pipeline of operations.
description: When a project starts to grow, data transformations once in a single file need to be decoupled from others to scale.
pain: Initially, you may do this in functions inside a single script file. Over time, the Frictionless Data-way is to move these functions into a framework that more easily scales and can be understood by new contributors.
context: It's a task part of every data project. The difference is just the complexity.
hexagon: pipeline transformations
layout: job
---

## Examples

```
cat mydata.csv
  | sed s/Roma/Rome/g
  | head -n 50
  > cleandata.csv
```

## Solutions

**Data Package Pipelines**
Write transformations in declarative files.
