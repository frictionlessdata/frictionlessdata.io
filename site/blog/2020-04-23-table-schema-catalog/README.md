---
title: Open Data Quality, Standardization and Why we Need a Schema Catalog
date: 2020-04-23
tags: ["table-schema"]
category: table-schema
image:
description: The issue of open data quality has been a prominent subject of discussion for years past.
author: Johan Richer
---

[Jailbreak](https://www.jailbreak.paris/) is a French company founded by former employees of [Etalab](https://www.etalab.gouv.fr/), the national open data agency, and [Easter-eggs](https://www.easter-eggs.com/), GNU/Linux experts since 1997.

# Open Data Quality: The case of France

The issue of open data quality has been a prominent subject of discussion for years past. These articles covers more discussion on it. [Why the Open Definition Matters for Open Data: Quality, Compatibility and Simplicity][open-definition] and more recently [Open data quality – the next shift in open data?][open-data] 


[open-definition]: https://blog.okfn.org/2014/09/30/why-the-open-definition-matters-for-open-data-quality-compatibility-and-simplicity/
[open-data]: https://blog.okfn.org/2017/05/31/open-data-quality-the-next-shift-in-open-data/

Since 2017, [OpenDataFrance](http://www.opendatafrance.net/) has made it a top priority to help open data producers, mainly local governments, improve the quality of their open data.

Jailbreak joined the team tasked to find solutions to that problem. We proposed to start with data validation as a way to point out quality problems in datasets, and choose [Goodtables](https://goodtables.io/) as a basis for that. We developed a new UI with adaptations and localization for French users, as well as some custom checks to tackle specific errors which are common in French datasets. This has given birth to a validator tool called [Validata](https://go.validata.fr/).

Like Goodtables, it checks tabular data sources for structural problems, such as blank rows, but where it really shines is when you give it a schema to validate your data.

## Schemas as Standards

A schema is a file describing the way the data should be formatted. For example, if a column exists for dates, the schema is where it would be specified. This way, the validator can automatically check that all the cells in that column contain dates.

[Table Schemas](https://frictionlessdata.io/specs/table-schema/) are perfect for open data, which is often just tabular data such as CSV or XLSX files. They're also really easy to write and, if enough people use them, they can become *de facto* standards for datasets.

Spearheaded by OpenDataFrance, the French open data community has created 8 common open data schemas as part of a so-called "Socle commun des données locales" (Common Ground of Local Data). These are now the standards to publish datasets on subjects like grants given to non-profits, decisions voted in local assemblies or stations for electric vehicles.

What we learned with Validata is that the s**chemas and tools we created in order to improve open data quality are only as good as their popularity**. If only a few are using the schemas to publish their data, nobody else will follow these schemas and, immediately, the validator tool is not as useful anymore. The quality is not improving if the "standards" are not used. But, most importantly, **a standard cannot be self-proclaimed.**

## Where are all the schemas? We need catalog(s)

A few months ago, Etalab has launched [schema.data.gouv.fr](https://schema.data.gouv.fr/), an official open data schema catalog specific to France. The idea is now to go next-level and start **a community-run schema catalog which would be both inclusive and international**. First to share Table Schemas but it could also be open to other schemas such as [Data Package Schemas](https://frictionlessdata.io/specs/data-package/) or even others.

For schemas to become standards, they must be easily found and usable. They must be shared. We propose to open a new chapter for Table Schemas with [schemas.frictionlessdata.io](https://schemas.frictionlessdata.io/) as the place to catalog them.

Each schema page could have link tools, calling users to appropriate actions ; for example "Validate a file" with Goodtables or Validata, "Create a file" with [CSV Good Generator](https://github.com/etalab/csv-gg) developed by Etalab or [tsfaker](https://gitlab.com/healthdatahub/tsfaker/), or "Download a template" with [table-schema-resource-template](https://framagit.org/opendataschema/table-schema-resource-template), etc.

The website for the catalog should have all the features needed such as full-text search and filtered search (by country, etc.). It should also have an API to make use of the catalog within other tools, for example, an open data portal proposing schemas when people upload a data package. This is an idea already experimented by ODI with [Octopub](https://octopub.io/).

Those are some ideas that need to be expanded. We have to give schemas their chance to shine!


:::tip Situation: Poor quality of open data
Question: How to improve the quality of open data?

1. Problem: Standardization of common datasets
Solution: Table Schemas
Example: A schema for the names of babies born in a city in a given year.

2. Problem: Checking the quality of datasets
Solution: Goodtables
Example: [Validata](https://go.validata.fr/), an adaptation of Goodtables for French open data.

3. Problem: Sharing open data standards
Solution: Schema Catalog
Example: [SCDL](https://scdl.opendatafrance.net/), Schema.data.gouv.fr, Schemas.frictionlessdata.io
:::

There's an ongoing conversation about this project on [Frictionless Data Forum][schema-catalog] and it's open to feedback and contribution.


[schema-catalog]: https://github.com/frictionlessdata/forum/issues/5