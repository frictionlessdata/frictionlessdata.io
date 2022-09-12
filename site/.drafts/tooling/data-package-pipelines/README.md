---
title: Data Package Pipelines
tagline: A framework for processing data packages in pipelines of modular components.
description: A framework for processing data packages in pipelines of modular components.
hexagon:
github: datapackage-pipelines, datapackage-pipelines-aws, datapackage-pipelines-elasticsearch, datapackage-pipelines-github, datapackage-pipelines-spss, datapackage-pipelines-ckan, datapackage-pipelines-sourcespec-registry, datapackage-pipelines-goodtables
layout: product
---

Data Package Pipelines is a declarative, stream-based framework for building tabular data processing pipelines. It can be used for all extract, transform, and load (ETL) tasks, and is particularly suited for working with diverse and heterogeneous data sources of varying and unknown quality.

There are many tools and frameworks for doing ETL work with data. Data Package Pipelines is another one! The focus here is on wrangling and controlling messy data from various sources, and using the Frictionless Data tooling to transform these feeds into a stream of clean, consistent data.

Data Package Pipelines is part of [Frictionless Data](https://frictionlessdata.io), a project funded and maintained by the [Open Knowledge Foundation](https://okfn.org) and [Datopian](https://datopian.com).

## Check it out

- [Get the code](https://github.com/frictionlessdata/datapackage-pipelines)
- [Integrations](https://github.com/frictionlessdata?utf8=%E2%9C%93&q=pipeline&type=&language=
)
- [Data Flows](https://github.com/datahq/dataflows)

## Where it is used

Data Package Pipelines is ideal for building complex ETL pipelines with a diverse collection of data sources. It uses a declarative pipeline format which can help with teams of engineers and non-technical staff working on data processing and integration projects.

## A simple example

A pipeline spec file

```
worldbank-co2-emissions:
  title: CO2 emission data from the World Bank
  description: Data per year, provided in metric tons per capita.
  pipeline:
    -
      run: update_package
      parameters:
        name: 'co2-emissions'
        title: 'CO2 emissions (metric tons per capita)'
        homepage: 'http://worldbank.org/'
    -
      run: load
      parameters:
        from: "http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.PC?downloadformat=excel"
        name: 'global-data'
        format: xls
        headers: 4
    -
      run: set_types
      parameters:
         resources: global-data
         types:
           "[12][0-9]{3}":
              type: number
    -
      run: dump_to_zip
      parameters:
          out-file: co2-emissions-wb.zip
```
