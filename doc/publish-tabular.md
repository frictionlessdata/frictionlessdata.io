## Publishing Tabular Data

Here's how to publish your tabular data as [Simple Data Format Data
Packages][sdf]. There are 4 simple steps:

1. Create a folder (directory) - this folder will hold your "data package"
2. Put your data into [CSV (comma-separated values)][csv]
   files and add them to that folder
3. Add a package.json file to hold some information about the data
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

### 3. Add a package.json file

The `package.json` is a small file in [JSON][] format that gives a bit of
information about your dataset. You'll need to create this file and then place
it in the directory you created.

<div class="alert">
Don't worry if you don't know what JSON is - we provide some tools that can
automatically create your this file for you.
</div>

There are 2 options for creating the `package.json`:

Option 1: Use the online [package.json creator tool][creator] - just answer
a few questions and give it your data files and it will spit out a
package.json for you to include in your project

Option 2: Do it yourself - if you're familiar with JSON you can just create
this yourself. Take a look at the [Data Package][dp] and [Simple Data
Format][sdf] specs.

[creator]: http://data.okfn.org/tools/create
[JSON]: http://en.wikipedia.org/wiki/JSON
[dp]: http://data.okfn.org/standards/data-package
[sdf]: http://data.okfn.org/standards/simple-data-format

### 4. Put the data package online

You just need to upload the data package (i.e. the files in it) to a suitable location online.

One nice option for the more sophisticated is to put this in a git or mercurial
repo and push it to githuh or similar. But you can also publish to your
wordpress website, to dropbox or anywhere else. The one important thing is that:

* All the files should be accessible online
* The relative paths between files should be preserved e.g. if your data
  package directory had the package.json and a single other csv named
  data.csv in it (at the root) then online it should look like:

      http://your.website.com/mydatapackage/package.json
      http://your.website.com/mydatapackage/data.csv
  
  This can be a problem with services like e.g. Google Drive where files in a
  given folder don't have a web address that relates to that folder. The reason we need to preserve relative paths is that your 

----

## Optional Extras

### Add a README

A README is a text file giving (human-readable) information about your dataset.
You can include anything you like but standard practice is to start with a
short description of the dataset and to include data specific information in a
Data section, information on preparing the data in a section called Prepartion
and data on permissions and licensing in a section called Licensing.

The README should be a plain text file (no word or rich text etc) and we
recommend using markdown to allow for some formatting. If markdown is used the
file should be named README.md and otherwise should be named README.txt.

