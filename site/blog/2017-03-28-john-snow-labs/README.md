---
title: John Snow Labs
date: 2017-03-28
tags: ["case-studies"]
category: case-studies
interviewee: Ida Lucente
subject_context: John Snow Labs uses Frictionless Data specifications to avail data to users for analysis
image: /img/blog/john-snow-labs-logo.png
description: Turnkey data to data science, analytics and software teams in healthcare industry.
author: Ida Lucente
---

[John Snow Labs](https://www.johnsnowlabs.com/) accelerates data science and analytics teams, by providing clean, rich and current data sets for analysis. Our customers typically license between 50 and 500 data sets for a given project, so providing both data and metadata in a simple, standard format that is easily usable with a wide range of tools is important.

Each data set we license is curated by a domain expert, which then goes through both an automated DataOps platform and a manual review process. This is done in order to deal with a string of data challenges. First, it’s often hard to find the right data sets for a given problem. Second, data files come in different formats, and include dirty and missing data. Data types are inconsistent across different files, making it hard to join multiple data sets in one analysis. Null values, dates, currencies, units and identifiers are represented differently. Datasets aren’t updated on a standard or public schedule, which often requires manual labor to know when they’ve been updated. And then, data sets from different sources have different licenses - we use over 100 data sources which means well over 100 different
data licenses that we help our clients be compliant with.

The most popular data format in which we deliver data is the Data Package [^datapackage]. Each of our datasets is available, among other formats, as a pair of data.csv and datapackage.json files, complying with the specs [^specs]. We currently provide over 900 data sets that leverage the Frictionless Data specifications.

Two years ago, when we were defining the product requirements and architecture, we researched six different standards for metadata definition over a few months. We found Frictionless Data as part of that research, and after careful consideration have decided to adopt it for all the datasets we curate. The Frictionless Data specifications were the simplest to implement, the simplest to explain to our customers, and enable immediate loading of data into the widest variety of analytical tools.

Our data curation guidelines have added more specific requirements, that are currently underspecified in the Frictionless Data specifications. For example, there are guidelines for dataset naming, keywords, length of the description, field naming, identifier field naming and types, and some of the properties supported for each field. Adding these to Frictionless Data would make it harder to comply with the specifications, but would also raise the quality bar of standard datasets; so it may be best to add them as recommendation.

Another area where the Frictionless Data specifications are worth expanding is more explicit definition of the properties of each data type - in particular geospatial data, timestamp data, identifiers, currencies and units. We have found a need to extend the type system and properties for each field’s type, in order to enable consistent mapping of schemas to different analytics tools that our customers use (Hadoop, Spark, MySQL, ElasticSearch, etc). We recommend adding these to the specifications.

We are working with [Open Knowledge International](http://www.okfn.org/) on open sourcing some of the libraries and tools we’re building. Internally, we are adding more automated validations, additional output file formats, and automated pipelines to load data into ElasticSearch[^elasticsearch] and Kibana[^kibana], to enable interactive data discovery & visualization.

The core use case we see for Frictionless Data specs is making data ready for analytics. There is a lot of Open Data out there, but a lot of effort is still required to make it usable. This single use case expands into as many variations as there are BI & data management tools, so we have many years of work ahead of us to address this one core use case.

[^datapackage]: Data Package: [https://specs.frictionlessdata.io/data-package/](https://specs.frictionlessdata.io/data-package/)
[^specs]: Frictionless Data Specifications [specs](https://specs.frictionlessdata.io/)
[^elasticsearch]: Elastic Search <https://www.elastic.co/>
[^kibana]: kibana <https://www.elastic.co/products/kibana>
