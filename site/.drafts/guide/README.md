# Guide

:::tip
This guide is still early-stage. We are currently consolidating our existing materials into one place here. Thus, in addition to this guide, you may want to check out these other resources:

* [Introduction to Table Schema][ts]
* [Introduction to Data Package][dp]
:::

[ts]: /table-schema/
[dp]: /data-package/

## Introduction

### What is Frictionless Data?

Frictionless Data is a progressive open-source framework for building data infrastructure -- data management, data integration, data flows, etc.

Unlike some other frameworks, Frictionless is designed from the ground up to be both incrementally adoptable and "progressive". Its purpose is to work with, build on, and enhance your existing data and tooling (rather than replacing it). It is also extremely lightweight!

The core of the framework is a suite of ultra-simple patterns to describe and organize data. This allows the data to flow fluidly between tools and across teams. The patterns have been refined to zen-like simplicity, and they can be picked up in minutes and immediately integrated with other libraries or existing projects.

<!--
[These patterns are language and platform agnostic so you can use and integrate them with your favorite language, tool or platform. We also have a rich set of libraries and tooling to help you do that e.g. bindings in Python, R, Ruby, Go, Swift ...]
-->

At the same time, Frictionless Data is also perfectly capable of powering sophisticated data workflows when used in combination with modern tooling and supporting libraries. This is possible because the framework follows an "atomic" approach[^atomic] where specs and tools are broken down into small components that can be used on their own but also composed together to make larger ones. This allows you to take a minimalistic approach for simple solutions and then combine elements components for more complex solutions.

If you’d like to learn more about Frictionless before diving in, we created a video walking through the core principles.

<iframe width="730" height="400" src="https://www.youtube.com/embed/lWHKVXxuci0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- TODO: If you are an experienced data developer [engineer] and want to know how Frictionless compares to other libraries/frameworks, check out the Comparison with Other Frameworks and Tools. -->

[^atomic]: We have borrowed the concept of Atomic Data from the web design field. For us, it means tools or specs are **a)** broken down into their minimum viable components, and **b)** these components are combinable into larger and more complex components and systems. The Atomic approach is what underpins the incremental adoptability and the ability to scale from the simplest situation to highly complex data engineering.

### Getting Started

:::warning INFO
The official guide assumes some basic knowledge about data. If you are completely new to working with data, for example, you haven't heard of CSV or JSON or have never used a spreadsheet, it may be  best idea to get some of those basics and then come back! A good starting point would be the first module, "What is Data?", at [School of Data][scoda].
:::

[scoda]: https://schoolofdata.org/

<!--
TODO: The most straightforward way to try out Frictionless is using the Hello World example. Feel free to open it in another tab and follow along as we go through some basic examples. Or, you can create your CSV file.

TODO: maybe install a tool to play along - either the CLI or maybe in python, JS or R. However, worry that this always a bit of an obstacle for people
-->

## Declarative Data

At the core of Frictionless is a system that enables us to declaratively describe data (and datasets) using a straightforward syntax.


## Table

A table is a collection of related **data** represented in **rows** and **columns**. In a table, the intersection between a row and a column is called a **cell**. Tables are widely used in different contexts and fields, ranging from data analysis to data research.

Tables come in different variants, CSV, JSON, and Excel formats. Here's an example of each of these formats.

```csv
Name,Email,Age
Jill,jill@foo.com,25
Jack,jack@bar.com,33
```

```json
{
  "name": "Jill",
  "email": "Jill@foo.com",
  "age": "25"
}
```


```excel
Name,Email,Age
Jill,jill@foo.com,25
Jack,jack@bar.com,33
```

### Table Schema

Table Schema is a specification for providing a “schema” (similar to a [database schema](https://en.wikipedia.org/wiki/Database_schema)) for tabular data. This information includes the expected type of each value in a column *(“string”, “number”, “date”, etc.)*, constraints on the value *(“this string can only be at most 10 characters long”)*, and the expected format of the data *(“this field should only contain strings that look like email addresses")*. Table Schema can also specify relations between tables.

Here's our simple `helloworld.csv` CSV (you can paste this in a local file):

```bash
Name,Email,Age
Jill,jill@foo.com,25
Jack,jack@bar.com,33
```

As a table, it looks like this:

| Name | Email        | Age |
|------|--------------|-----|
| Jill | jill@foo.com |  25 |
| Jack | jack@bar.com |  33 |

And here's a **Table Schema** (in JSON) to describe that file. Note that a minimum age of 18 is specified in the `Age` column, and a string that looks like an email address must be present in the `Email` column:

```json
{
  "fields": [
    {
      "name": "Name",
      "type": "string",
      "description": "User’s name"
    },
    {
      "name": "Email",
      "type": "string",
      "format": "email",
      "description": "User’s email"
    },
    {
      "name": "Age",
      "type": "integer",
      "description": "User’s age",
      "constraints": {
        "minimum": 18
      }
    }
  ]
}
```

Copy and paste this into a file called `tableschema.json` in the same directory as your CSV file.

Well done! 👏 You have just created your very first Frictionless Data!

### Validation

Having errors in your data is not uncommon. They also often get in the way of quick and timely data analysis for many data users. Validating data helps ease the process of collecting data by checking the **quality** and **validity** of a data source before publishing it.

Let's take a look at how to validate the tabular data we created in the previous section using the GoodTables [Python][py] and [JavaScript][js] libraries. GoodTables is a set of libraries and command-line tool for validating and transforming tabular data. These libraries exist to identify structural and content errors in your tabular data, so they can be fixed quickly. For example, a table schema contains information on fields and their assigned data types, making it possible to highlight misplaced data types (e.g. a string in an age column where an integer is expected, or an integer in an email column where a string is expected).

Here's an example of how to validate a tabular data using the [Python library][py]. Using your terminal, install `goodtables` with the package manager [PIP][pip]:

```bash
pip install goodtables
```

You can see a list of options by using the `--help` argument:

```bash
goodtables --help
```

To validate our data, we need to run the `goodtables` command followed by the path to the file:

```bash
goodtables helloworld.csv
```
Goodtables supports CSV, XLS, XLSX, ODS, and JSON. After running the command above, we get the following validation report, which follows the [JSON Schema Report][json]:

```bash
DATASET
=======
{
 'error-count': 0,
 'preset': 'nested',
 'table-count': 1,
 'time': 0.104,
 'valid': True
}

TABLE [1]
=========
{
 'encoding': 'utf-8',
 'error-count': 0,
 'format': 'csv',
 'headers': ['name', 'email', 'age'],
 'row-count': 3,
 'scheme': 'file',
 'source': 'helloword.csv',
 'time': 0.003,
 'valid': True
}

```

Now, consider the following CSV with invalid data. Let's check for structural or content errors in the tabular data:

```bash
id,name,age,
1,John,24,john@mail.com
1,Jane,14,jane@mail.com
1,Jane,14,jane@mail.com
,Jane,22,7
```

```bash
DATASET
=======
{
 'error-count': 2,
 'preset': 'nested',
 'table-count': 1,
 'time': 0.105,
 'valid': False
}

TABLE [1]
=========
{
 'encoding': 'utf-8',
 'error-count': 2,
 'format': 'csv',
 'headers': ['id', 'name', 'age', ''],
 'row-count': 5,
 'scheme': 'file',
 'source': 'invalid.csv',
 'time': 0.003,
 'valid': False
}
---------
[-,4] [blank-header] Header in column 4 is blank
[4,-] [duplicate-row] Row 4 is duplicated to row(s) 3
```

You might notice that this validation report looks a bit different. The two lines at the bottom of the report, `blank-header` and `duplicate-row`, are structural errors.

Now, let's see how we can do the same with Goodtables [JavaScript][js] Library. First, install [Goodtables package][js]:

```bash
npm install goodtables
```

After installing the package, let's create an example. Create an `index.js` file and add the following:

```javascript
const goodtables = require('goodtables');

async function validate () {
//  Validate a CSV File
const source = 'helloworld.csv'

const report = await goodtables.validate(source)

console.log(report)
}

validate();

```
The result shows that the CSV contains some structural errors:

```bash
{ 'error-count': 1,
  preset: 'nested',
  'table-count': 1,
  tables:
   [ { encoding: null,
       'error-count': 1,
       errors: [Array],
       format: null,
       headers: [],
       'row-count': 0,
       schema: null,
       scheme: 'http',
       source: 'helloworld.csv',
       time: 0.001,
       valid: false } ],
  time: 0.004,
  valid: false,
  warnings: []
 }
```
>**Additonally, here's video walkthrough of the content outlined above**

<iframe width="730" height="315" src="https://www.youtube.com/embed/PqtM6d696eY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[py]: https://github.com/frictionlessdata/goodtables-py
[js]: https://github.com/frictionlessdata/goodtables-js
[pip]:https://pip.pypa.io/en/stable/
[json]:https://github.com/frictionlessdata/goodtables-py/blob/master/goodtables/schemas/report.json

:::tip NOTE
We can also use the Goodtables online tool to validate any tabular data.
:::

Let's head over to the [GoodTables][gt] website and login with GitHub to start the process of validating our data.

[gt]: https://goodtables.io/

![goodtables dashboard](https://i.imgur.com/Mxkgsoa.png)

Add a data source in the dashboard using GitHub (Amazon S3 is also supported, but we're only covering GitHub here):

:::tip INFO
We need to create a GitHub repository to store our `helloworld.csv` file. Make sure you use the valid CSV from our example above.
:::

![adding source to goodtables](https://i.imgur.com/6H7jOsf.png)

Because we have valid and well-structured data in our`helloworld.csv`, the results will come back as valid, as seen in the image below

![valid data](https://i.imgur.com/cfp1Jej.png)

Now, let's change to invalid tabular data and see what the checks return:

```bash
Name,Email,,Age
Jill,jill@foo.com
Jack,jack@bar.com,33
23,Jane,jane@foo.com, 22, 33
```

![Invalid data](https://i.imgur.com/LIDV1OC.png)

Of course, this build will fail because some structural errors were detected by GoodTables (**"Blank Header", "Missing value", and "Extra Value"**).

>**Additionally, here's a video walkthrough of the content outlined above**

<iframe width="730" height="315" src="https://www.youtube.com/embed/QSvbMmvhxN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Tabulator
[Tabulator][Tabulator] is a consistent interface for reading and writing streams of tabular data, in Python and on the command line. Tabulator is a tool designed to help navigate dealing with data flows from diverse sources. Imagine when you have to work with some data that is human-generated and some that are machine-generated, and you need to handle a range of issues related to formatting, encoding, and markup. This is exactly what the Tabulator tool was designed to help with.

Tabulator is a useful building block for data fetching and data processing. It provides a clean, structured stream of data covering Excel, CSV, SQL, Google Sheets, etc.

Here's an example of using the [Tabulator] library to read tabular data. First, we need the library installed:

```bash
pip install tabulator
```

Let's run an example using Python:

```python
import tabulator

with tabulator.Stream('helloworld.csv', headers=1) as stream:
    stream.headers # [header1, header2, ..]
    for row in stream:
        print(row)  # [value1, value2, ..]
```

Also, [Tabulator] ships with a CLI tool and can be used to read tabular data directly:

```bash
tabulator https://github.com/frictionlessdata/tabulator-py/raw/4c1b3943ac98be87b551d87a777d0f7ca4904701/data/table.csv.gz
id, name
1, english
2,中国人
```

[Tabulator]:https://github.com/frictionlessdata/tabulator-py


## Ready for More?

We’ve briefly introduced the core concepts of Frictionless Data - the rest of the guide will cover more concepts and tooling with much more details. For the next section, let's move on  and learn about Data Resource.

