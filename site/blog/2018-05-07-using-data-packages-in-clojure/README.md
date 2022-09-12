---
title: Using Data Packages in Clojure
date: 2018-05-07
tags: ["Clojure"]
author: Matt Thompson
description: A guide on how to use datapackage with Clojure
category: working-with-data-packages
---

Matt Thompson was one of 2017's [Frictionless Data Tool Fund][toolfund] grantees tasked with extending implementation of core Frictionless Data [data package][dp-clj] and [table schema][ts-clj] libraries in Clojure programming language. You can read more about this in [his grantee profile][toolfund-matt]. In this post, Thompson will show you how to set up and use the [Clojure](http://clojure.org) libraries for working with [Tabular Data Packages][tdp].

This tutorial uses a worked example of downloading a data package from a remote location on the web, and using the Frictionless Data tools to read its contents and metadata into Clojure data structures.

## Setup

First, we need to set up the project structure using the [Leiningen](http://leiningen.org) tool. If you don't have Leiningen set up on your system, follow the link to download and install it. Once it is set up, run the following command from the command line to create the folders and files for a basic Clojure project:

```sh

lein new periodic-table

```

This will create the *periodic-table* folder. Inside the *periodic-table/src/periodic-table* folder should be a file named *core.clj*. This is the file you need to edit during this tutorial.

## The Data

For this tutorial, we will use a pre-created data package, the Periodic Table Data Package hosted by the Frictionless Data project. A [Data Package][dp] is a simple container format used to describe and package a collection of data. It consists of two parts:

* Metadata that describes the structure and contents of the package
* Resources such as data files that form the contents of the package

Our Clojure code will download the data package and process it using the metadata information contained in the
package. The data package can be found [here on GitHub][datapackage.json].

The data package contains data about elements in the periodic table, including each element's name, atomic number, symbol and atomic weight. The table below shows a sample taken from the first three rows of the CSV file:

| atomic number | symbol | name     | atomic mass | metal or nonmetal? |
|---------------|--------|----------|-------------|--------------------|
| 1             | H      | Hydrogen | 1.00794     | nonmetal           |
| 2             | He     | Helium   | 4.002602    | noble gas          |
| 3             | Li     | Lithium  | 6.941       | alkali metal       |


## Loading the Data Package

The first step is to load the data package into a Clojure data structure (a map). The initial step is to require the data package library in our code (which we will give the alias **dp**). Then we can use the **load** function to load our data package into our project. Enter the following code into the core.clj file:

```clojure
(ns periodic-table.core
  (:require [frictionlessdata.datapackage :as dp]
            [frictionlessdata.tableschema :as ts]
            [clojure.spec.alpha :as s]))

(def pkg
  (dp/load "https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"))
```

This pulls the data in from the remote GitHub location and converts the metadata into a Clojure map. We can access this metadata by using the `descriptor` function along with keys such as `:name` and `:title` to get the relevant information:

```clojure
(println (str "Package name:" (dp/descriptor pkg :name)))
(println (str "Package title:" (dp/descriptor pkg :title)))
```

The package descriptor contains metadata that describes the contents of the data package. What about accessing the data itself? We can get to it using the `get-resources` function:

```clojure
(def table (dp/get-resources pkg :data))

(doseq [row table]
  (println row))
```

The above code locates the data in the data package, then goes through it line by line and prints the contents.

## Casting Types with core.spec

We can use Clojure's [spec](https://clojure.org/guides/spec) library to define a schema for our data, which can then be used to cast the types of the data in the CSV file.

Below is a spec description of a periodic element type, consisting of an atomic number, atomic symbol, the element's name, its mass, and whether or not the element is a metal or non-metal:

```clojure
(s/def ::number int?)
(s/def ::symbol string?)
(s/def ::name string?)
(s/def ::mass float?)
(s/def ::metal string?)

(s/def ::element (s/keys :req [::number ::symbol ::name ::mass ::metal]))
```

The above spec can be used to cast values in our tabular data so that they match the specified schema. The example below shows our tabular data values being cast to fit the spec description. Then the `-main` function loops through the elements, printing only those with an atomic mass of over 10.

```clojure
(ns periodic-table.core
  (:require [frictionlessdata.datapackage :as dp]
            [frictionlessdata.tableschema :as ts]
            [clojure.spec.alpha :as s]))

(s/def ::number int?)
(s/def ::symbol string?)
(s/def ::name string?)
(s/def ::mass float?)
(s/def ::metal string?)

(s/def ::element (s/keys :req [::number ::symbol ::name ::mass ::metal]))

(def pkg
  (dp/load "https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"))

(def resources (dp/get-resources pkg :data))

(def elements (dp/cast resources element))

(defn -main []
  (doseq [e elements]
    (if (< (:mass e) 10)
      (println e))))
```

When run, the program produces the following output:

```sh
$ lein run
{::number 1 ::symbol "H" ::name "Hydrogen" ::mass 1.00794 ::metal "nonmetal"}
{::number 2 ::symbol "He" ::name "Helium" ::mass 4.002602 ::metal "noble gas"}
{::number 3 ::symbol "Li" ::name "Lithium" ::mass 6.941 ::metal "alkali gas"}
{::number 4 ::symbol "Be" ::name "Beryllium" ::mass 9.012182 ::metal "alkaline earth metal"}
```

This concludes our simple tutorial for using the Clojure libraries for Frictionless Data.

We welcome your feedback and questions via our [Frictionless Data Gitter chat][fd-gitter] or via [GitHub issues][dp-clj-issues] on the [datapackage-clj][dp-clj] repository.

[dp]: https://specs.frictionlessdata.io/data-package/
[tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[ts]: /table-schema/
[toolfund]: https://toolfund.frictionlessdata.io
[dp-clj]: https://github.com/frictionlessdata/datapackage-clj
[ts-clj]: https://github.com/frictionlessdata/tableschema-clj
[fd-gitter]: http://gitter.im/frictionlessdata/chat
[dp-clj-issues]: https://github.com/frictionlessdata/datapackage-clj/issues
[datapackage.json]: https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json
[toolfund-matt]: /blog/2017/10/26/matt-thompson/
