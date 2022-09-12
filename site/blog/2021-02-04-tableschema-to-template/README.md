---
title: HuBMAP - Table Schema generating an Excel template
date: 2021-02-04
tags: ["case-studies"]
category: case-studies
image: /img/blog/HuBMAP-Retina-Logo-Color.png
description: The Human BioMolecular Atlas Program Given has developed tableschema-to-template which takes a Frictionless Table Schema as input, and returns an Excel template with embedded documentation and basic validations.
author: Chuck McCallum
---
HuBMAP ([Human BioMolecular Atlas Program](https://portal.hubmapconsortium.org/)) is creating an open, global atlas of the human body at the cellular level. To do this, we’re incorporating data from dozens of different assay types, and as many institutions. Each assay type has its own metadata requirements, and Frictionless Table Schemas are an important part of our validation framework, to ensure that the metadata supplied by the labs is good.

That system has worked well, as far as it goes, but when there are errors, it’s a pain for the labs to read the error message, find the original TSV, scroll to the appropriate row and column, re-enter, re-save, re-upload… and hopefully not repeat! To simplify that process, we’ve made [tableschema-to-template](https://pypi.org/project/tableschema-to-template/#description): it takes a Table Schema as input, and returns an Excel template with embedded documentation and some basic validations.

`pip install tableschema-to-template`

`ts2xl.py schema.yaml new-template.xlsx`

It can be used either as a command-line tool, or as a python library. Right now the generated Excel files offer pull-downs for enum constraints, and also check that floats, integers, and booleans are the correct format, and that numbers are in bounds. Adding support for regex pattern constraints is a high priority for us… What features are important to you? Issues and PRs are welcome at the [GitHub repo](https://github.com/hubmapconsortium/tableschema-to-template).
