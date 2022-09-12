---
title: Open Data Blend
date: 2021-07-12
tags: ["case-studies"]
category: case-studies
image: /img/blog/open-data-blend-home-page.png
description: Open Data Blend  is a set of open data services that aim to make large and complex UK open data easier to analyse.
author: Michael Amadi
---

[Open Data Blend](https://www.opendatablend.io) is a set of open data services that aim to make large and complex UK open data easier to analyse. We source the raw open data, transform it into [dimensional models](https://en.wikipedia.org/wiki/Dimensional_modeling) (also referred to as ‘star schemas’), cleanse and enrich it, add metadata to support its reuse, and make this processed data openly available as compressed CSV, Apache ORC, and Apache Parquet data files. In summary, we provide analysis-ready open data with an emphasis on quality over quantity. We are excited to tell you more about Open Data Blend and how it uses Frictionless Data specifications to make this data easier to understand and use.

There are two core data services: Open Data Blend Datasets and Open Data Blend Analytics. Open Data Blend Datasets has a user interface (UI) called the [Open Data Blend Dataset UI](http://opendatablend.io/datasets) and a bulk data API called the [Open Data Blend Dataset API](https://packages.opendatablend.io/v1). [Open Data blend Analytics](https://www.opendatablend.io/analytics) is an interactive analytical query service that can be used from popular BI tools like Excel, Power BI Desktop, and Tableau Desktop.

![open-data-blend-home-page](https://user-images.githubusercontent.com/74717970/125306833-d4515480-e32f-11eb-8a6d-306ce25cc854.png)

## Why Open Data Blend Was Created
The idea behind Open Data Blend was born at [Nimble Learn](https://www.nimblelearn.com/) in 2014 after several pain points were experienced when working with large and complex UK open datasets. One of these pain points was that a significant effort, and access to large computational resources, was needed to prepare the data for analysis in a reasonable timeframe. Another pain point was that the lookups and data dictionaries would often be buried in unstructured sources like Word documents, PDF files, and web pages.

## Our Frictionless Data Journey
At Nimble Learn, we have over six years’ experience working with the Frictionless Data specifications. We have delivered two other Frictionless Data projects to date: Data Package M and Data Package Connector. 

[Data Package M](https://github.com/nimblelearn/datapackage-m) is a Power Query M library that simplifies the loading of Tabular Data Packages into Excel or Power BI. 

![data-package-m](https://user-images.githubusercontent.com/74717970/125307259-314d0a80-e330-11eb-938b-c70cf3de7cc6.png)

You can read the Frictionless Data case study for Data Package M [here](https://frictionlessdata.io/blog/2018/07/20/nimblelearn/).

[Data Package Connector](https://github.com/nimblelearn/datapackage-connector) is a [Power BI custom connector](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connector-extensibility#custom-connectors) that enables one or more tables from Data Packages, that implement the Table Schema specification, to be loaded directly into Power BI through the 'Get Data' experience. 

![data-package-connector](https://user-images.githubusercontent.com/74717970/125307384-4de94280-e330-11eb-9ef1-f66084ceca32.png)

The Frictionless Data case study for Data Package Connector can be read [here](https://frictionlessdata.io/blog/2019/07/22/nimblelearn-dpc/).

## How Open Data Blend Uses Frictionless Data
During over six years of extensive research and development into open data publishing, we reviewed and evaluated several open standards that could be used as a base for our open data API. After carefully weighing the pros and cons of each, we chose to adopt the Frictionless Data specifications because they were lightweight, simple, robust, and highly scalable. We also wanted our users to benefit from the growing ecosystem of [Frictionless Data tools](https://libraries.frictionlessdata.io/) that make Frictionless Data even more accessible.

The Open Data Blend Dataset UI and the Open Data Blend Dataset API are both powered by Frictionless Data. When you visit the [Open Data Blend Datasets](https://www.opendatablend.io/datasets) page, all of the information that you see nicely presented is coming from a data package that conforms to the [Data Package Catalog pattern](https://specs.frictionlessdata.io/patterns/#describing-data-package-catalogs-using-the-data-package-format). Clicking on one of the datasets takes you to a dedicated dataset page that is driven by extended [Data Package metadata](https://specs.frictionlessdata.io/data-package/). The ‘Get metadata’ button at the top of each dataset page reveals the contents of the underlying datapackage.json file.

So far, we have implemented and extended the following Frictionless Data specifications and patterns:
[Data Package](https://specs.frictionlessdata.io/data-package/)
[Table Schema](https://specs.frictionlessdata.io/table-schema/)
[Data Catalogue pattern](https://specs.frictionlessdata.io/patterns/#describing-data-package-catalogs-using-the-data-package-format)
[Compressed resources pattern](https://specs.frictionlessdata.io/patterns/#compression-of-resources)

You can see how deeply ingrained the Frictionless Data specifications are just by skimming through the Open Data Blend Dataset API [reference documentation](https://docs.opendatablend.io/open-data-blend-datasets/dataset-api).

## How Open Data Blend Helps
Each Open Data Blend dataset is presented with helpful metadata. The data is modelled and enriched to enable effective data analysis. The columns that contain descriptive values are carefully combined into [dimension tables](https://en.wikipedia.org/wiki/Dimension_(data_warehouse)) and those that contain measurable facts are grouped into [fact tables](https://en.wikipedia.org/wiki/Fact_table). Modelling the data in this way makes it easier to understand and analyse. You can learn more about these dimensional modelling concepts [here](https://en.wikipedia.org/wiki/Dimensional_modeling) and [here](https://en.wikipedia.org/wiki/Star_schema).

![open-data-blend-datasets-page](https://user-images.githubusercontent.com/74717970/125307186-21cdc180-e330-11eb-9650-68bbd75ea0dd.png)

In addition to CSVs, we make the data available as Apache ORC and Apache Parquet files because they are two of the most popular and efficient open file formats for analytical workloads. Libraries available for [Python](https://arrow.apache.org/docs/python/parquet.html), [R](https://arrow.apache.org/docs/r/), and other popular languages make it possible to query these files very quickly. If you are a data engineer, data analyst, or data scientist with access to data lake storage, such as Amazon S3 and Azure Data Lake Storage Gen2, the ORC or Parquet files can be ingested into your data lake. Once there, you can query them interactively using data lake engines like Apache Spark, Azure Synapse Analytics, Databricks, Dremio, and Trino.

To accelerate the data acquisition process when working with Open Data Blend datasets through code, we have developed a lightweight Python package called ‘opendatablend’. Once installed, this package allows you to effortlessly cache our data files locally with just a few lines of Python. Data engineers, data analysts, and data scientists can use the opendatablend package to get data and use it with whatever data tools they prefer. For example, a data scientist might start off doing some exploratory data analysis (EDA) in [Pandas](https://pandas.pydata.org/) or [Koalas](https://koalas.readthedocs.io/) using a [Jupyter notebook](https://jupyter.org/), transition to feature engineering, and then train and score machine learning models using [scikit-learn](https://scikit-learn.org/) or [Spark MLlib](https://spark.apache.org/mllib/).

Below is a simple example that shows how easy the opendatablend for Python is to use:

```
import opendatablend as odb
import pandas as pd

dataset_path = 'https://packages.opendatablend.io/v1/open-data-blend-road-safety/datapackage.json'

# Specify the resource name of the data file. In this example, the 'date' data file will be requested in .parquet format.
resource_name = 'date-parquet'

# Get the data and store the output object
output = odb.get_data(dataset_path, resource_name)

# Print the file locations
print(output.data_file_name)
print(output.metadata_file_name)

# Read a subset of the columns into a dataframe
df_date = pd.read_parquet(output.data_file_name, columns=['drv_date_key', 'drv_date', 'drv_month_name', 'drv_month_number', 'drv_quarter_name', 'drv_quarter_number', 'drv_year'])

# Check the contents of the dataframe
df_date
```

You can learn more about the opendatablend package [here](https://github.com/opendatablend/opendatablend-py).

To further reduce the time to value and to make the open data insights more accessible, the [Open Data Blend Analytics](https://www.opendatablend.io/analytics) service can be used with business intelligence (BI) tools like Excel, Power BI Desktop, and Tableau Desktop to directly analyse the data over a live connection. Depending on the use case, this can remove the need to work with the data files altogether.

![open-data-blend-excel-experience](https://user-images.githubusercontent.com/74717970/125306996-f77c0400-e32f-11eb-99f4-1aa898678f9e.gif)

## Want to Learn More About Open Data Blend?
You can visit the Open Data Blend website [here](https://www.opendatablend.io) to learn more about the services. We also have some comprehensive documentation available [here](https://docs.opendatablend.io/), where Frictionless Data specific documentation can be found [here](https://docs.opendatablend.io/open-data-blend-datasets/frictionless-data). If you would like to contribute to the project, you can find out how [here](https://www.opendatablend.io/get-involved). 

Follow us on Twitter [@opendatablend](https://www.twitter.com/opendatablend) to get our latest news, feature highlights, thoughts, and tips.

