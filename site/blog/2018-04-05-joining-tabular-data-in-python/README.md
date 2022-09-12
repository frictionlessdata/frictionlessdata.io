---
title: Joining Tabular Data
date: 2018-04-05
tags: ["Python"]
category: working-with-data-packages
---

In a [separate guide](/blog/2018/04/06/joining-data-in-python/), I walked through joining a tabular dataset with one containing geographic information.  In this guide, I will demonstrate an example of joining two tabular datasets.

There are, of course, various, more robust ways of joining tabular data.  The example listed below is intended to demonstrate how the current libraries and specifications work together to perform this common task.

## Data

In this case, we want to join a dataset containing the *nominal* Gross Domestic Product(GDP) per country per year with the Consumer Price Index (CPI) per country per year.  By adjusting a given GDP measure by the CPI, a measure of inflation, one can yield the *real* GDP, a measure of economic output adjusted for price changes over time.  To do that, of course, we need to join these independent datasets on the common values "Country Code" and "Year".

### GDP

| Country Name | Country Code | Year | Value |
|---|---|---|---|
| Afghanistan | AFG | 2004 | 5285461999.33739 |
| Afghanistan | AFG | 2005 | 6275076016.47174 |
| Afghanistan | AFG | 2006 | 7057598406.61553 |
| Afghanistan | AFG | 2007 | 9843842455.48323 |
| Afghanistan | AFG | 2008 | 10190529882.4878 |

### CPI

| Country Name | Country Code | Year | CPI |
|---|---|---|---|
| Afghanistan | AFG | 2004 | 63.1318927309 |
| Afghanistan | AFG | 2005 | 71.1409742918 |
| Afghanistan | AFG | 2006 | 76.3021776777 |
| Afghanistan | AFG | 2007 | 82.7748069188 |
| Afghanistan | AFG | 2008 | 108.0666000101 |

## Loading the Data

As usual, the first step is to load the Data Packages library `datapackage`.  We also need to import `DictWriter` to write our merged rows to a new CSV.

```python
import datapackage
from csv import DictWriter

cpi_dp = datapackage.DataPackage('https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/cpi/datapackage.json')
gdp_dp = datapackage.DataPackage('https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/gross-domestic-product-all/datapackage.json')
```

Given that our source data has already been packaged in [Tabular Data Package](https://specs.frictionlessdata.io/tabular-data-package/) format, we know that we have a [*schema*](https://specs.frictionlessdata.io/table-schema) for each CSV which specifies useful information for each column.  We'd like to merge and preserve this schema information as we'll need it for specifying the combined schema in our new Data Package.  Note that we're also adding a new derived column named 'Real GDP' and giving it a type of `number`.

```python
field_info = []
field_info.extend(cpi_dp.resources[0].descriptor['schema']['fields'])
field_info.extend(gdp_dp.resources[0].descriptor['schema']['fields'])
field_info.append({'name': 'Real GDP', 'type': 'number'})
```

Now that we have this information, we can generate a `fieldnames` array containing only the names of the columns to eventually pass to `DictWriter` when we're ready write out our new CSV.

```python
fieldnames = [f['name'] for f in field_info]
```

## Joining the Data

What follows is a fairly simple example of iterating through each row of each CSV and creating a new `merged_row` when 'Year' and 'Country Code' match on the two datasets.  We are also calculating our derived 'Real GDP' column based in the information found in the original columns.

```python
with open('real_gdp.csv', 'w') as csvfile:
    writer = DictWriter(csvfile,fieldnames=fieldnames)
    writer.writeheader()
    for gdp_row in gdp_dp.resources[0].data:
        for cpi_row in cpi_dp.resources[0].data:
            if gdp_row['Year'] == cpi_row['Year'] and gdp_row['Country Code'] == cpi_row['Country Code']:
                merged_row = gdp_row.copy()
                merged_row.update(cpi_row)
                merged_row.update({'Real GDP': 100*(float(gdp_row['Value'])/float(cpi_row['CPI']))})
                writer.writerow(merged_row)

```

## Creating a New Data Package

Now that we've created our new CSV `real_gdp.csv`, we can use the Data Package library to package it up with some useful metadata. Note that we are passing the merged `field_info` array into our `schema` definition.  Given that we are generating this Data Package "by hand", we need to run the `validate` method on the new Data Package object to make sure that we are, indeed, creating a valid Data Package.  After validating the Data Package metadata, we can either write the Data Package directly or save the whole thing as a zip file using the `save` method.

```python
dp = datapackage.Package()
dp.descriptor['name'] = 'real-gdp'
    {
     'name': 'data',
     'path': 'real_gdp.csv',
     'format': 'csv',
     'schema': {
        'fields': field_info
      }
    }
]

resource = dp.resources[0]
resource.descriptor['path'] = 'real_gdp.csv'

dp.validate()

with open('datapackage.json', 'w') as f:
    f.write(dp.to_json())

# dp.save("real_gdp.zip")
```
