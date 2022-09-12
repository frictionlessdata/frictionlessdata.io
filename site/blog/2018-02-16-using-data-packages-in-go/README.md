---
title: Using Data Packages in Go
date: 2018-02-16
tags: ["Go"]
author: Daniel Fireman
description: A guide on how to use datapackage with Go
category: working-with-data-packages
---


Daniel Fireman was one of 2017's [Frictionless Data Tool Fund][toolfund] grantees tasked with extending implementation of core Frictionless Data libraries in Go programming language. You can read more about this in [his grantee profile][toolfund-daniel]. In this post, Fireman will show you how to install and use the [Go](http://golang.org) libraries for working with [Tabular Data Packages][tdp].

Our goal in this tutorial is to load a data package from the web and read its metadata and contents.

## Setup
For this tutorial, we will need the [datapackage-go][dp-go] and [tableschema-go][ts-go] packages, which provide all the functionality to deal with a Data Package's metadata and its contents.

We are going to use the [dep tool](https://golang.github.io/dep/) to manage the dependencies of our new project:

```sh
$ cd $GOPATH/src/newdataproj
$ dep init
```

## The Periodic Table Data Package

A [Data Package][dp] is a simple container format used to describe and package a collection of data. It consists of two parts:

* Metadata that describes the structure and contents of the package
* Resources such as data files that form the contents of the package

In this tutorial, we are using a [Tabular Data Package][tdp] containing the periodic table. The package descriptor ([datapackage.json][datapackage.json]) and contents ([data.csv][data.csv]) are stored on GitHub. This dataset includes the atomic number, symbol, element name, atomic mass, and the metallicity of the element. Here are the header and the first three rows:

| atomic number | symbol | name     | atomic mass | metal or nonmetal? |
|---------------|--------|----------|-------------|--------------------|
| 1             | H      | Hydrogen | 1.00794     | nonmetal           |
| 2             | He     | Helium   | 4.002602    | noble gas          |
| 3             | Li     | Lithium  | 6.941       | alkali metal       |

## Inspecting Package Metadata

Let's start off by creating the `main.go`, which loads the data package and inspects some of its metadata.

```go
package main

import (
    "fmt"

    "github.com/frictionlessdata/datapackage-go/datapackage"
)

func main() {
    pkg, err := datapackage.Load("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json")
    if err != nil {
        panic(err)
    }
    fmt.Println("Package loaded successfully.")
}
```

Before running the code, you need to tell the dep tool to update our project dependencies. Don't worry; you won't need to do it again in this tutorial.

```sh
$ dep ensure
$ go run main.go
Package loaded successfully.
```

Now that you have loaded the periodic table Data Package, you have access to its `title` and `name` fields through the [Package.Descriptor() function](https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package.Descriptor).  To do so, let's change our main function to (omitting error handling for the sake of brevity, but we know it is _very_ important):

```go
func main() {
    pkg, _ := datapackage.Load("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json")
    fmt.Println("Name:", pkg.Descriptor()["name"])
    fmt.Println("Title:", pkg.Descriptor()["title"])
}
```

And rerun the program:

```sh
$ go run main.go
Name: period-table
Title: Periodic Table
```

And as you can see, the printed fields match the [package descriptor][datapackage.json]. For more information about the Data Package structure, please take a look at the [specification](https://specs.frictionlessdata.io/data-package/).

## Quick Look At the Data

Now that you have loaded your Data Package, it is time to process its contents. The package content consists of one or more resources. You can access [Resources][dp-go-resource] via the [Package.GetResource()](https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package.GetResource()) method. Let's print the periodic table `data` resource contents.

```go
func main() {
    pkg, _ := datapackage.Load("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json")
    res := pkg.GetResource("data")
    table, _ := res.ReadAll()
    for _, row := range table {
        fmt.Println(row)
    }
}
```

```sh
$ go run main.go
[atomic number symbol name atomic mass metal or nonmetal?]
[1 H Hydrogen 1.00794 nonmetal]
[2 He Helium 4.002602 noble gas]
[3 Li Lithium 6.941 alkali metal]
[4 Be Beryllium 9.012182 alkaline earth metal]
...
```

The [Resource.ReadAll()](https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource.ReadAll) method loads the whole table in memory as raw strings and returns it as a Go `[][]string`. This can be quick useful to take a quick look or perform a visual sanity check at the data.

## Processing the Data Package's Content

Even though the string representation can be useful for a quick sanity check, you probably want to use actual language types to process the data. Don't worry, you won't need to fight the casting battle yourself. Data Package Go libraries provide a rich set of methods to deal with data loading in a very idiomatic way (very similar to [encoding/json](https://golang.org/pkg/encoding/json/)).

As an example, let's change our `main` function to use actual types to store the periodic table and print the elements with atomic mass smaller than 10.

```go
package main

import (
    "fmt"

    "github.com/frictionlessdata/datapackage-go/datapackage"
    "github.com/frictionlessdata/tableschema-go/csv"
)

type element struct {
    Number int     `tableheader:"atomic number"`
    Symbol string  `tableheader:"symbol"`
    Name   string  `tableheader:"name"`
    Mass   float64 `tableheader:"atomic mass"`
    Metal  string  `tableheader:"metal or nonmetal?"`
}

func main() {
    pkg, _ := datapackage.Load("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json")
    resource := pkg.GetResource("data")

    var elements []element
    resource.Cast(&elements, csv.LoadHeaders())
    for _, e := range elements {
        if e.Mass < 10 {
            fmt.Printf("%+v\n", e)
        }
    }
}
```

```sh
$ go run main.go
{Number:1 Symbol:H Name:Hydrogen Mass:1.00794 Metal:nonmetal}
{Number:2 Symbol:He Name:Helium Mass:4.002602 Metal:noble gas}
{Number:3 Symbol:Li Name:Lithium Mass:6.941 Metal:alkali metal}
{Number:4 Symbol:Be Name:Beryllium Mass:9.012182 Metal:alkaline earth metal}
```

In the example above, all rows in the table are loaded into memory. Then every row is parsed into an `element` object and appended to the slice. The `resource.Cast` call returns an error if the whole table cannot be successfully parsed.

If you don't want to load all data in memory at once, you can lazily access each row using [Resource.Iter](https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource.Iter) and use [Schema.CastRow](https://godoc.org/github.com/frictionlessdata/tableschema-go/schema#Schema.CastRow) to cast each row into an `element` object. That would change our main function to:

```go
func main() {
    pkg, _ := datapackage.Load("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json")
    resource := pkg.GetResource("data")

    iter, _ := resource.Iter(csv.LoadHeaders())
    sch, _ := resource.GetSchema()
    var e element
    for iter.Next() {
        sch.CastRow(iter.Row(), &e)
        if e.Mass < 10 {
            fmt.Printf("%+v\n", e)
        }
    }
}
```

```sh
$ go run main.go
{Number:1 Symbol:H Name:Hydrogen Mass:1.00794 Metal:nonmetal}
{Number:2 Symbol:He Name:Helium Mass:4.002602 Metal:noble gas}
{Number:3 Symbol:Li Name:Lithium Mass:6.941 Metal:alkali metal}
{Number:4 Symbol:Be Name:Beryllium Mass:9.012182 Metal:alkaline earth metal}
```

And our code is ready to deal with the growth of the periodic table in a very memory-efficient way :-)

We welcome your feedback and questions via our [Frictionless Data Gitter chat][fd-gitter] or via [GitHub issues][dp-go-issues] on the datapackage-go repository.

[dp]: https://specs.frictionlessdata.io/data-package/
[tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[toolfund]: https://toolfund.frictionlessdata.io
[toolfund-daniel]:/blog/2017/11/01/daniel-fireman/
[dp-go]: https://github.com/frictionlessdata/datapackage-go
[ts-go]: https://github.com/frictionlessdata/tableschema-go
[ts]: /table-schema/
[dp-go-resource]:https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource
[fd-gitter]: http://gitter.im/frictionlessdata/chat
[dp-go-issues]: https://github.com/frictionlessdata/datapackage-go/issues
[datapackage.json]: https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json
[data.csv]: https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/data.csv
