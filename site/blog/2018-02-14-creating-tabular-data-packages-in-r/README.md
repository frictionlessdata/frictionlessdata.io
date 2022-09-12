---
title: Creating Data Packages in R
date: 2018-02-14
tags: ["R"]
author: Kleanthis Koupidis
description: A guide on how to create datapackage with R
category: working-with-data-packages
---

[Open Knowledge Greece][okgreece] was one of 2017's [Frictionless Data Tool Fund][toolfund] grantees tasked with extending implementation of core Frictionless Data libraries in R programming language. You can read more about this in [their grantee profile][toolfund-okgreece]. In this tutorial, [Kleanthis Koupidis](https://gr.linkedin.com/in/kleanthis-koupidis-8348b88b), a Data Scientist and Statistician at Open Knowledge Greece, explains how to create Data Packages in R.

## Creating Data Packages in R

This tutorial will show you how to install the R library for working with Data Packages and Table Schema, load a CSV file, infer its schema, and write a Tabular Data Package.

## Load

For this tutorial, we will need the Data Package R library ([datapackage.r](https://github.com/frictionlessdata/datapackage-r)).
You can start using the library by loading `datapackage.r`.

```r
    library(datapackage.r)
```

You can add useful metadata by adding keys to metadata dict attribute. Below, we are adding the required `name` key as well as a human-readable `title` key. For the keys supported, please consult the full [Data Package spec][dp]. Note, we will be creating the required `resources` key further down below.

```r
    dataPackage = Package.load()
    dataPackage$descriptor['name'] = 'period-table'
    dataPackage$descriptor['title'] = 'Periodic Table'
    # commit the changes to Package class
    dataPackage$commit()

    ## [1] TRUE
```

## Infer a CSV Schema

We will use periodic-table data from [remote path](https://raw.githubusercontent.com/frictionlessdata/datapackage-r/9eed05d1710fd69a0cb74f7941c7f142563f571b/vignettes/example_data/data.csv)

| atomic.number | symbol | name      | atomic.mass | metal.or.nonmetal.   |
|---------------|--------|-----------|-------------|----------------------|
| 1             | H      | Hydrogen  | 1.00794     | nonmetal             |
| 2             | He     | Helium    | 4.002602    | noble gas            |
| 3             | Li     | Lithium   | 6.941       | alkali metal         |
| 4             | Be     | Beryllium | 9.012182    | alkaline earth metal |
| 5             | B      | Boron     | 10.811      | metalloid            |
| 6             | C      | Carbon    | 12.0107     | nonmetal             |
| 7             | N      | Nitrogen  | 14.0067     | nonmetal             |
| 8             | O      | Oxygen    | 15.9994     | nonmetal             |
| 9             | F      | Fluorine  | 18.9984032  | halogen              |
| 10            | Ne     | Neon      | 20.1797     | noble gas            |

We can guess our CSV's [schema][ts] by using `infer` from the Table Schema library. We pass directly the remote link to the infer function, the result of which is an inferred schema. For example, if the processor detects only integers in a given column, it will assign `integer` as a column type.

```r
    filepath = 'https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/exampledata/data.csv'

    schema = tableschema.r::infer(filepath)
```

Once we have a schema, we are now ready to add a `resource` key to the Data Package which points to the resource path and its newly created schema. Below we define resources with three ways, using json text format with usual assignment operator in R list objects and directly using `addResource` function of `Package` class:

```r
    # define resources using json text
    resources = helpers.from.json.to.list(
      '[{
        "name": "data",
        "path": "filepath",
        "schema": "schema"
      }]'
    )
    resources[[1]]$schema = schema
    resources[[1]]$path = filepath

    # or define resources using list object
    resources = list(list(
      name = "data",
      path = filepath,
      schema = schema
      ))
```

And now, add resources to the Data Package:

```r
    dataPackage$descriptor[['resources']] = resources
    dataPackage$commit()

    ## [1] TRUE
```

Or you can directly add resources using `addResources` function of `Package` class:

```r
    resources = list(list(
      name = "data",
      path = filepath,
      schema = schema
      ))

    dataPackage$addResource(resources)
```

Now we are ready to write our `datapackage.json` file to the current working directory.

```r
    dataPackage$save('example_data')
```

The `datapackage.json` ([download](https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/exampledata/package.json)) is inlined below. Note that atomic number has been correctly inferred as an `integer` and atomic mass as a `number` (float) while every other column is a `string`.

```
    jsonlite::prettify(helpers.from.list.to.json(dataPackage$descriptor))

    ## {
    ##     "profile": "data-package",
    ##     "name": "period-table",
    ##     "title": "Periodic Table",
    ##     "resources": [
    ##         {
    ##             "name": "data",
    ##             "path": "https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/exampledata/data.csv",
    ##             "schema": {
    ##                 "fields": [
    ##                     {
    ##                         "name": "atomic number",
    ##                         "type": "integer",
    ##                         "format": "default"
    ##                     },
    ##                     {
    ##                         "name": "symbol",
    ##                         "type": "string",
    ##                         "format": "default"
    ##                     },
    ##                     {
    ##                         "name": "name",
    ##                         "type": "string",
    ##                         "format": "default"
    ##                     },
    ##                     {
    ##                         "name": "atomic mass",
    ##                         "type": "number",
    ##                         "format": "default"
    ##                     },
    ##                     {
    ##                         "name": "metal or nonmetal?",
    ##                         "type": "string",
    ##                         "format": "default"
    ##                     }
    ##                 ],
    ##                 "missingValues": [
    ##                     ""
    ##                 ]
    ##             },
    ##             "profile": "data-resource",
    ##             "encoding": "utf-8"
    ##         }
    ##     ]
    ## }
    ##
```

## Publishing

Now that you have created your Data Package, you might want to [publish your data online](/blog/2016/08/29/publish-online/) so that you can share it with others.

Now that you have created a data package in R, [find out how to use data packages in R in this tutorial][use-r].

[dp]: https://specs.frictionlessdata.io/data-package/
[tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[okgreece]: http://okfn.gr/
[toolfund]: https://toolfund.frictionlessdata.io
[toolfund-okgreece]:https://frictionlessdata.io/articles/open-knowledge-greece/
[dp-r]: https://github.com/frictionlessdata/datapackage-r
[ts]: https://specs.frictionlessdata.io/table-schema/
[r-devtools]: https://cran.r-project.org/package=devtools
[fd-gitter]: http://gitter.im/frictionlessdata/chat
[dp-r-issues]: https://github.com/frictionlessdata/datapackage-r/issues

[use-r]: /blog/2018/02/14/using-data-packages-in-r/
