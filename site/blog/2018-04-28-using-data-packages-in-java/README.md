---
title: Using Data Packages in Java
date: 2018-04-28
tags: ["Java"]
author: Georges Labrèche
description: A guide on how to use datapackage with Java
category: working-with-data-packages
---

Georges Labrèche was one of 2017's [Frictionless Data Tool Fund][toolfund] grantees tasked with extending implementation of core Frictionless Data libraries in Java programming language. You can read more about this in [his grantee profile](/blog/2017/10/24/georges-labreche/).

In this post, Labrèche will show you how to install and use the [Java](https://www.java.com/en/) libraries for working with [Tabular Data Packages][tdp].

Our goal in this tutorial is to load tabular data from a CSV file, infer data types and the table's schema.

## Setup

First things first, you'll want to grab [datapackage-java][dp-java] and the [tableschema-java][ts-java] libraries.


## The Data

For our example, we will use a [Tabular Data Package][tdp] containing the periodic table. You can find the [data package descriptor][datapackage.json] and the [data][data.csv] on GitHub.

A [Data Package][dp] is a simple container format used to describe and package a collection of data. It consists of two parts:

* Metadata that describes the structure and contents of the package
* Resources such as data files that form the contents of the package

## Packaging

Let's start by fetching and packaging the data:

```java

// fetch the data
URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json");

// package the data
Package dp = new Package(url);

```

That's it, you're all set to start playing with the packaged data. There are parameters you can set such as loading a schema or imposing strict validation so be sure to go through the project's [README][dp-java-readme] for more detail.

## Iterating

Now that you have a Data Package instance, let's see what the data looks like. A data package can contain more than one resource so you have to use the `Package.getResource()` method to specify which resource you'd like to access.

Let's iterate over the data:

```java

// Get a resource named data from the data package
Resource resource = pkg.getResource("data");

// Get the Iterator
Iterator<String[]> iter = resource.iter();

// Iterate
while(iter.hasNext()){
	String[] row = iter.next();
   	String atomicNumber = row[0];
   	String symbol = row[1];
   	String name = row[2];
  	String atomicMass = row[3];
   	String metalOrNonMetal = row[4];
}

```

Notice how we're fetching all values as `String`. This may not be what you want, particularly for the atomic number and mass. Alternatively, you can trigger data type inference and casting like this:

```java

// Get Iterator
// Third boolean is the cast flag.
Iterator<Object[]> iter = resource.iter(false, false, true));

// Iterator
while(iter.hasNext()){
	String[] row = iter.next();
   	int atomicNumber = row[0];
   	String symbol = row[1];
   	String name = row[2];
  	float atomicMass = row[3];
   	String metalOrNonMetal = row[4];
}

```

And that's it, your data is now associated with the appropriate data types!

## Inferring the Schema

We wouldn't have had to infer the data types if we had included a [Table Schema][ts] when creating an instance of our Data Package. If a Table Schema is not available, then it's something that can also be inferred and created with `tableschema-java`:

```java

URL url = new URL("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/data.csv");
Table table = new Table(url);
Schema schema = table.inferSchema();
schema.write("/path/to/write/schema.json");

```

The type inference algorithm tries to cast to available types and each successful type casting increments a popularity score for the successful type cast in question. At the end, the best score so far is returned.

The inference algorithm traverses all of the table's rows and attempts to cast every single value of the table. When dealing with large tables, you might want to limit the number of rows that the inference algorithm processes:

```java

// Only process the first 25 rows for type inference.
Schema schema = table.inferSchema(25);

```

Be sure to go through `tableschema-java`'s [README][ts-java-readme] as well to learn more about how to operate with [Table Schema][ts].


## Contributing
In case you discovered an issue that you'd like to contribute a fix for, or if you would like to extend functionality:

```sh

# install jabba and maven2
$ cd tableschema-java
$ jabba install 1.8
$ jabba use 1.8
$ mvn install -DskipTests=true -Dmaven.javadoc.skip=true -B -V
$ mvn test -B

```

Make sure that all tests pass, and submit a PR with your contributions once you're ready.

We also welcome your feedback and questions via our [Frictionless Data Gitter chat][fd-gitter] or via [GitHub issues][dp-java-issues] on the datapackage-java repository.

[dp]: https://specs.frictionlessdata.io/data-package/
[tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[ts]: https://specs.frictionlessdata.io/table-schema/
[toolfund]: https://toolfund.frictionlessdata.io
[dp-java]: https://github.com/frictionlessdata/datapackage-java
[ts-java]: https://github.com/frictionlessdata/tableschema-java
[fd-gitter]: http://gitter.im/frictionlessdata/chat
[dp-java-issues]: https://github.com/frictionlessdata/datapackage-java/issues
[dp-java-readme]: https://github.com/frictionlessdata/datapackage-java/blob/master/README.md
[ts-java-readme]: https://github.com/frictionlessdata/tableschema-java/blob/master/README.md
[datapackage.json]: https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json
[data.csv]: https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/data.csv
