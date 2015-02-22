## Publishing Tabular Data

Here's how to publish your tabular data as [Tabular Data
Packages][sdf]. There are 4 simple steps:

1. Create a folder (directory) - this folder will hold your "data package"
2. Put your data into [CSV (comma-separated values)][csv]
   files and add them to that folder
3. Add a `datapackage.json` file to hold some information about the data
   package and the data in it e.g. a title, who created it, how other people
   can use it (licensing), etc
4. Upload the data package online

[csv]: /standards/csv/

### 1. Create a Directory (Folder)

We'll assume you know how to do this!

### 2. Create your CSV files

A CSV is a really common and simple file format for storing a (single) table of
data (for example, a single sheet in a spreadsheet). If you've got more than
one table you can save multiple CSV files, one for each for table.

Put the CSV files in the directory you created - we suggest putting them in a
subdirectory called data so that your base directory does not get too cluttered
up.

You can produce CSV files from almost any application that handles data including
spreadsheets like Excel and databases like MySQL or Postgresql.

You can find out more about CSVs and how to produce them by taking a look at
the [dedicated CSV page][csv] or by doing a quick search online for CSV + the
name of your tool.

### 3. Add a datapackage.json file

The `datapackage.json` is a small file in [JSON][] format that gives a bit of
information about your dataset. You'll need to create this file and then place
it in the directory you created.

<div class="alert">
Don't worry if you don't know what JSON is - we provide some tools that can
automatically create your this file for you.
</div>

There are 2 options for creating the `datapackage.json`:

Option 1: Use the online [datapackage.json creator tool][creator] - just answer
a few questions and give it your data files and it will spit out a
datapackage.json for you to include in your project

Option 2: Do it yourself - if you're familiar with JSON you can just create
this yourself. Take a look at the [Data Package][dp] and [Simple Data
Format][sdf] specs.

[creator]: http://data.okfn.org/tools/create
[JSON]: http://en.wikipedia.org/wiki/JSON
[dp]: http://data.okfn.org/standards/data-package
[sdf]: http://data.okfn.org/standards/simple-data-format

### 4. Put the data package online

See [Putting Your Data Package online][online]

[online]: /doc/publish-online

----

# Appendix - Examples of Existing Tabular Data Packages

Pay special attention to the scripts directory (and look at the commit logs!) 

- [https://github.com/datasets/finance-vix](https://github.com/datasets/finance-vix) 
- [https://github.com/datasets/s-and-p-500-companies](https://github.com/datasets/s-and-p-500-companies) 
- [https://github.com/datasets/co2-fossil-global](https://github.com/datasets/co2-fossil-global) 
- [https://github.com/datasets/imf-weo](https://github.com/datasets/imf-weo) 

