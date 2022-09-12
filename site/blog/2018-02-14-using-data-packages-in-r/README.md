---
title: Using Data Packages in R
date: 2018-02-14
tags: ["R"]
author: Kleanthis Koupidis
description: A guide on how to use datapackage with R
category: working-with-data-packages
---

[Open Knowledge Greece][okgreece] was one of 2017's [Frictionless Data Tool Fund][toolfund] grantees tasked with extending implementation of core Frictionless Data libraries in R programming language. You can read more about this in [their grantee profile][toolfund-okgreece]. In this tutorial, [Kleanthis Koupidis](https://gr.linkedin.com/in/kleanthis-koupidis-8348b88b), a Data Scientist and Statistician at Open Knowledge Greece, explains how to work with Data Packages in R.

This tutorial will show you how to install the R libraries for working with Tabular Data Packages and demonstrate a very simple example of loading a Tabular Data Package from the web and pushing it directly into a local SQL database and send query to retrieve results.

::: tip
For a comprehensive introduction to creating tabular data packages in R, [start by going through this tutorial][create-r].
:::

## Setup

For this tutorial, we will need the Data Package R library ([datapackage.r][dp-r]). [Devtools library](https://cran.r-project.org/package=devtools) is also required to install the datapackage.r library from github.

```bash
    # Install devtools package if not already
    install.packages("devtools")
```

And then install the development version of [datapackage.r][dp-r] from github.

```bash
    devtools::install_github("frictionlessdata/datapackage-r")
```

## Load

You can start using the library by loading `datapackage.r`.

```r
    library(datapackage.r)
```

## Reading Basic Metadata

In this case, we are using an example Tabular Data Package containing the periodic table stored on [GitHub](https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table) ([datapackage.json](https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json), [data.csv](https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/data.csv)). This dataset includes the atomic number, symbol, element name, atomic mass, and the metallicity of the element. Here are the first five rows:

```r
    url = 'https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/example_data/data.csv'
    pt_data = read.csv2(url, sep = ',')
    knitr::kable(head(pt_data, 5), align = 'c')
```

| atomic.number | symbol | name      | atomic.mass | metal.or.nonmetal.   |
|---------------|--------|-----------|-------------|----------------------|
| 1             | H      | Hydrogen  | 1.00794     | nonmetal             |
| 2             | He     | Helium    | 4.002602    | noble gas            |
| 3             | Li     | Lithium   | 6.941       | alkali metal         |
| 4             | Be     | Beryllium | 9.012182    | alkaline earth metal |
| 5             | B      | Boron     | 10.811      | metalloid            |

Data Packages can be loaded either from a local path or directly from the web.

```r
    url = 'https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/exampledata/package.json'
    datapackage = Package.load(url)
    datapackage$resources[[1]]$descriptor$profile = 'tabular-data-resource' # tabular resource descriptor profile
    datapackage$resources[[1]]$commit() # commit changes

    ## [1] TRUE
```

At the most basic level, Data Packages provide a standardized format for general metadata (for example, the dataset title, source, author, and/or description) about your dataset. Now that you have loaded this Data Package, you have access to this `metadata` using the metadata dict attribute. Note that these fields are optional and may not be specified for all Data Packages. For more information on which fields are supported, see [the full Data Package standard][dp].

```r
    datapackage$descriptor$title

    ## [1] "Periodic Table"
```

## Reading Data

Now that you have loaded your Data Package, you can read its data. A Data Package can contain multiple files which are accessible via the `resources` attribute. The `resources` attribute is an array of objects containing information (e.g. path, schema, description) about each file in the package.

You can access the data in a given resource in the `resources` array by reading the `data` attribute.

```r
    table = datapackage$resources[[1]]$table
    periodic_table_data = table$read()
```

You can further manipulate list objects in R by using

```r
 [purrr](https://cran.r-project.org/package=purrr), [rlist](https://cran.r-project.org/package=rlist) packages.
```

## Loading into an SQL database

[Tabular Data Packages][tdp] contains schema information about its data using [Table Schema][ts]. This means you can easily import your Data Package into the SQL backend of your choice. In this case, we are creating an [SQLite](http://sqlite.org/) database.

To create a new SQLite database and load the data into SQL we will need [DBI](https://cran.r-project.org/package=DBI) package and [RSQLite](https://cran.r-project.org/package=RSQLite) package, which contains [SQLite](https://www.sqlite.org/) (no external software is needed).

You can install and load them by using:

```r
    install.packages(c("DBI","RSQLite"))

    library(DBI)
    library(RSQLite)
```

To create a new SQLite database, you simply supply the filename to `dbConnect()`:

```r
    dp.database = dbConnect(RSQLite::SQLite(), "") # temporary database
```

We will use [data.table](https://cran.r-project.org/package=RSQLite) package to convert the list object with the data to a data frame object to copy them to database table.

```r
    # install data.table package if not already
    # install.packages("data.table")

    periodic_table_sql = data.table::rbindlist(periodic_table_data)
    periodic_table_sql = setNames(periodic_table_sql,unlist(datapackage$resources[[1]]$headers))
```

You can easily copy an R data frame into a SQLite database with `dbWriteTable()`:

```r
    dbWriteTable(dp.database, "periodic_table_sql", periodic_table_sql)
    # show remote tables accessible through this connection
    dbListTables(dp.database)

    ## [1] "periodic_table_sql"
```

The data are already to the database.

We can further issue queries to hte database and return first 5 elements:

```r

    dbGetQuery(dp.database, 'SELECT * FROM periodic_table_sql LIMIT 5')

    ##   atomic number symbol      name atomic mass   metal or nonmetal?
    ## 1             1      H  Hydrogen    1.007940             nonmetal
    ## 2             2     He    Helium    4.002602            noble gas
    ## 3             3     Li   Lithium    6.941000         alkali metal
    ## 4             4     Be Beryllium    9.012182 alkaline earth metal
    ## 5             5      B     Boron   10.811000            metalloid
```

Or return all elements with an atomic number of less than 10:

```r
    dbGetQuery(dp.database, 'SELECT * FROM periodic_table_sql WHERE "atomic number" < 10')

    ##   atomic number symbol      name atomic mass   metal or nonmetal?
    ## 1             1      H  Hydrogen    1.007940             nonmetal
    ## 2             2     He    Helium    4.002602            noble gas
    ## 3             3     Li   Lithium    6.941000         alkali metal
    ## 4             4     Be Beryllium    9.012182 alkaline earth metal
    ## 5             5      B     Boron   10.811000            metalloid
    ## 6             6      C    Carbon   12.010700             nonmetal
    ## 7             7      N  Nitrogen   14.006700             nonmetal
    ## 8             8      O    Oxygen   15.999400             nonmetal
    ## 9             9      F  Fluorine   18.998403              halogen
```

More about using databases, SQLite in R you can find in vignettes of [DBI](https://cran.r-project.org/package=DBI) and [RSQLite](https://cran.r-project.org/package=RSQLite) packages.

We welcome your feedback and questions via our [Frictionless Data Gitter chat][fd-gitter] or via [Github issues][dp-r-issues] on the [datapackage-r][dp-r] repository.

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

[create-r]: /blog/2018/02/14/creating-tabular-data-packages-in-r/
