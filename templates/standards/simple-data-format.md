# Simple Data Format (SDF)

Simple Data Format is a simple structure for publishing and sharing data with
the following key features:

* **Data** is stored in <a href="#csv">CSV (comma separated variables)</a>
  files
* **"Metadata"** about the dataset both general (e.g. title, author) and the
  specific data files (e.g. schema) is stored in a single JSON file named
  **datapackage.json** which follows the [Data Package spec][dp]

<div class="alert alert-info">
The Data Protocols website has a full **[RFC-style specification of the simple
data format][spec]** to complement this quick introduction.
</div>

[dp]: ../data-package
[spec]: http://www.dataprotocols.org/en/latest/simple-data-format.html


## Simple Example

Here's an example of a minimal simple data format dataset:

There are 2 just files, the data file `data.csv` and the `datapackage.json`:

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
                "id": "var1",
                "type": "string"
              },
              {
                "id": "var2",
                "type": "integer"
              },
              {
                "id": "var3",
                "type": "number"
              }
            ]
          }
        }
      ]
    }

## Examples

<https://github.com/datasets/gdp/blob/master/datapackage.json>

<script src="http://gist-it.appspot.com/github/datasets/gdp/blob/master/datapackage.json"></script>


<h2 id="csv">CSVs</h2>

CSVs are plain text files with commas separating each column and each row on
one line (normally!). CSVs can be produced and consumed by almost all tools
including spreadsheet programmes like Excel and databases like MySQL. Read more
on [Wikiepedia][wp].

CSVs for SDF **must** use the utf8 character encoding.

[wp]: http://en.wikipedia.org/wiki/Comma-separated_values

<div class="alert alert-success">
CSV files in Simple Data Format are not absolutely required to have "," as the
field delimeter - you can use tab, ";" or any other kind of character. 
</div>

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

