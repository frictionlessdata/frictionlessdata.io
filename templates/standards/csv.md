# CSV = Comma Separated Values

<div class="alert alert-info" style="max-width: 400px;">This page is a work in progress. <a href="#contribute">Contributions are welcome &raquo;</a>.</div>

This page provides an overview CSV (Comma Separated Values) format for data.

CSV is a very old, very simple and very common 'standard' for (tabular) data.
There isn't really a formal standard for it - although there is now an
[RFC][rfc] (from 2005).

CSV is supported by a **huge** number of tools from spreadsheets like Excel,
OpenOffice and Google Docs to complex databases to almost all programming
languages. As such it is probably the most widely supported data format in the
world.

----

## The Format

Key points are:

* CSV is probably the simplest possible structured format for data
* CSV strikes a delicate balance, remaining readable by both machines & humans
* CSV is a two dimentsional structure consisting of rows of data each row
  containing multiple cells. Rows are (usually) separated by line terminators
  so each row corresponds to one line. Cells within a row are separated by
  commans (hence the C(ommmas) part)
  * Note that strictly we're really talking about DSV files in that we can
    allow 'delimiters' between cells other than a comma. However, many people
    and many programs still call such data CSV (since comma is so common as the
    delimiter)
* CSV is a "text-based" format, i.e. a CSV file *is* a text file. This makes it
  amenable for processing with all kinds of text-oriented tools (from text
  editors to [unix tools like sed, grep etc][cldw])

[cldw]: https://github.com/rgrp/command-line-data-wrangling

### What a CSV looks like

If you open up a CSV file in a text editor it would look something like:

    A,B,C
    1,2,3
    4,"5,3",6

Here there are 3 rows each of 3 columns. Notice how the second column in the last line is
"quoted" because the content of that value actually contains a "," character. Without
the quotes this character would be interpreted as a column separator. To avoid this
confusion we put quotes around the whole value. The result is that we have 3 rows each
of 3 columns (Note a CSV file does not *have* to have
the same number of columns in each row)

### Dialects of CSVs

As mentioned above CSV files actually can have quite a bit of variation in
structure. Key options are:

* Delimiter: rather than ',' can be ';', '\t' (tab), '|' etc
* Record / line terminator: is '\n' (unix), '\n\r' (dos) or something else ...
* How do you quote records that contain your delimiter

You can read more in the [CSV Dialect Description Format][csvddf] which all
defines a small JSON-oriented structure for specifying what options a CSV uses.

### What is Bad about CSV?

* CSV lacks any way to specify type information: that is, there is no way to
  distinguish "1" the string from 1 the number. (This shortcoming can be
  addressed by adding some form of simple schema. See e.g. [Simple Data
  Format][sdf] for an approach whereby CSV is combined with a schema or you can
  even inline schema information - see [Linked CSV][linked-csv] for an example
  of this approach).
* No support for relationships between different "tables" (this is similar to
  the previous point - again see [Simple Data Format][sdf] for a way to address
  this with additional schema information) information)
* Works best for tabular data - not good for data with nesting or where
  structure is not especially tabular (though remember most data can be put
  into tabular form if you try hard enough!)

### Links

Specifications and overviews:

* [RFC specification of CSV][rfc]
* [CSV Dialect Description Format][csvddf]
* [CSV on Wikipedia][wiki]

----

## Tools

The great thing about CSV is the huge level of tool support. The following is
not intended to be comprehensive but is more at the electic end of the spectrum.

### Desktop

All spreadsheet programmes including Excel, OpenOffice, Google Docs
Spreadsheets supporting opening, editing and saving CSVs.

### View a CSV file in your Browser

You can view a CSV file (saving you the hassle of downloading it and opening
it). Options include:

* You can use datapipes: <http://datapipes.okfnlabs.org/csv/html>

  Just paste your CSV file and away you go.

* Install this [Chrome Browser Extension][chrome-csv]. This can be used both
  for online files and for files on your local disk (if you open them with your
  browser!)

### Unix Command Line Manipulation

See

* Using [unix command line tools on CSV][cldw]
* The wonderful [csvkit][] (python)

### Power Tools

* [OpenRefine][] is a powerful tool for editing and manipulating data and works
  very well with CSV
* [Data Explorer][datax] supports importing CSVs and manipulating and changing
  them using javascript in the browser

### Libraries

This is heavily biased towards python!

#### Python

* Built in csv library is good
* The wonderful [csvkit][] (python)
* [messytables][] (python) - convert lots of badly structured data into CSV (or
  other formats)

#### Node

Nothing in standard lib yet and best option seems to be:

* <https://github.com/wdavidw/node-csv>

----

## Tips and Tricks

### CSVs and Git

Get git to handle CSV diffs in a sensible way (very useful if you are [using
git or another version control system to store data][git-for-data]).

Make these changes to config files:

    # ~/.config/git/attributes
    *.csv diff=csv

    # ~/.gitconfig
    [diff "csv"]
      wordRegex = [^,\n]+[,\n]|[,]

Then do:

    git diff --word-diff
    # make it even nicer
    git diff --word-diff --color-words

Credit for these fixups to [contributors on this question on
StackExchange](http://opendata.stackexchange.com/questions/748/is-there-a-git-for-data)
and to [James Smith](http://theodi.org/blog/adapting-git-simple-data).

<a name="contribute" href="//github.com/okfn/data.okfn.org/blob/master/templates/standards/csv.md" target="_blank" class="btn">Contributions Welcome - Edit this Page</a>

[rfc]: http://tools.ietf.org/html/rfc4180
[csvddf]: http://www.dataprotocols.org/en/latest/csv-dialect.html
[wiki]: http://en.wikipedia.org/wiki/Comma-separated_values
[csvkit]: http://csvkit.readthedocs.org/
[messytables]: http://messytables.readthedocs.org
[git-for-data]: http://blog.okfn.org/2013/07/02/git-and-github-for-data/
[sdf]: http://data.okfn.org/standards/simple-data-format
[linked-csv]: http://jenit.github.io/linked-csv/
[chrome-csv]: https://chrome.google.com/webstore/detail/recline-csv-viewer/ibfcfelnbfhlbpelldnngdcklnndhael
[OpenRefine]: http://openrefine.org/

