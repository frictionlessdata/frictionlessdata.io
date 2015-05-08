# Tabular Data Packages

Tabular Data Package is a simple structure for publishing and sharing tabular data with
the following key features:

* **Data** is stored in <a href="#csv">CSV (comma separated values)</a>
  files
* **Metadata** about the dataset both general (e.g. title, author) and the
  specific data files (e.g. schema) is stored in a single JSON file named
  **datapackage.json** which follows the [Data Package format][dp]

As suggested by the name, Tabular Data Packages extend and specialize the [Data Package][dp] format for the specific case where the data is tabular.

[dp]: ./data-package
[spec]: http://www.dataprotocols.org/en/latest/simple-data-format.html

<div class="row">
<div class="span3">
<h3>Full Spec</h3>
There is a full **<a href="http://www.dataprotocols.org/simple-data-format/">RFC-style specification of Tabular Data Package</a>**
on the Data Protocols website to complement this quick introduction.
</div>
<div class="span3">
<h3>Tools</h3>
There is a growing set of <a href="/tools">online and offline tools</a> for working with Tabular Data
Packages including tools for creating, viewing and validating.
</div>
</div>


## Simple Example

Here's an example of a minimal simple data format dataset:

There are just 2 files, the data file `data.csv` and the `datapackage.json`:

    data.csv
    datapackage.json

data.csv looks like:

    var1,var2,var3
    A,1,2.5
    B,3,4.3

That is there are 3 fields (columns) and 2 rows of data.
    
A simple datapackage.json for this data would be:

    {
      "name": "my-dataset",
      # here we list the data files in this dataset
      "resources": [
        {
          "path": "data.csv",
          "schema": {
            "fields": [
              {
                "name": "var1",
                "type": "string"
              },
              {
                "name": "var2",
                "type": "integer"
              },
              {
                "name": "var3",
                "type": "number"
              }
            ]
          }
        }
      ]
    }

More [examples below ...](#examples).

### JSON Table Schema

The schema for each CSV resource follows [JSON Table Schema][jts]. Its purpose
is to provide crucial additional information about the fields (columns) in the
CSV file, most importantly the type (string, number, date etc) of that data.

The structure of the `fields` attribute is an array with each entry being a
field descriptor. Field descriptors look like:

    {
      # required
      "name": "name of field/column (should correspond to field name in data)",

      # not strictly required but strongly recommended
      "type": "A string specifying the data type for data in this field",

      # all of these are optional ...
      "title": "A nicer human readable label or title for the field",
      "format": "A string specifying format of data (e.g. date format)",
      "description": "A description for the field",
      ...
    }

The JSON Table Schema spec has a [full list of data types that are
supported][jts-types] including string, number, date etc.

[jts]: http://www.dataprotocols.org/en/latest/json-table-schema.html
[jts-types]: http://www.dataprotocols.org/en/latest/json-table-schema.html#types


<h2 id="csv">CSVs</h2>

CSVs are plain text files with commas separating each column and each row on
one line (normally!). CSVs can be produced and consumed by almost all tools
including spreadsheet programmes like Excel and databases like MySQL. Read more
about [CSVs here][csv].

There are a few specific requirements for CSV files in Simple Data Format:

* They **must** use the utf-8 character encoding.
* They must be well-formatted - a single header row at the top of the file, no
  blank rows before, within, or after the data rows, etc
* Use "," as the field delimiter unless explicitly stated otherwise

[csv]: /standards/csv/

#### Delimiters other than Comma

CSV files in Simple Data Format are not absolutely required to have "," as the
field delimeter - you can use tab, ";" or any other kind of character. 

If you do use a delimiter other than "," you must specify the info about the
delimiters in the resource entry using a "dialect" attribute and [CSV Dialect
Description Format][dialect].

Here is an example of how the datapackage.json would look in this case:

    ...
    resources: [
      {
        url:
        dialect: { # as per CSV Dialect specification
          "delimiter": ";"
        },
        schema:  # as per JSON Table Schema 
      }
    ]

[dialect]: http://www.dataprotocols.org/en/latest/csv-dialect.html


<h2 id="examples">Examples</h2>

There are many examples of Tabular Data Packages in the [datasets organization on github][datasets]. Specific examples:

[datasets]: https://github.com/datasets

### [World GDP][]

[World GDP]: https://github.com/datasets/gdp 

<script src="http://gist-it.appspot.com/github/datasets/gdp/blob/master/datapackage.json"></script>

### [S&P 500 Companies Data][sp500]

[sp500]: https://github.com/datasets/s-and-p-500-companies

This is an example with more than one resource in the data package.

<script src="http://gist-it.appspot.com/github/datasets/s-and-p-500-companies/blob/master/datapackage.json"></script>

