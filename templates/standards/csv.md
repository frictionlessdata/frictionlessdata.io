# CSV = Comma Separated Variables

This page provides an overview CSV = Comma Separated Variables.

CSV is a very old, very simple and very common 'standard' for (tabular) data.
There isn't really a formal standard for it - although there is now an
[RFC][rfc] (from 2005).

Key points:

* CSV is probably the simplest possible structured format for data
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

## What a CSV looks like

If you open up a CSV file in a text editor it would look something like:

    A,B,C
    1,2,3
    4,"5,3",6

Here there are 3 rows each of 3 columns (note a CSV file does not have to have
the same number of columns in each row). Now how 2nd column in last line is
"quoted" because the content of that column contain a "," which we have to
escape so it does not clash with the "," separating columns.

## Dialects of CSVs

As mentioned above CSV files actually have quite a bit of variation in the
structure of CSV files. Key options are:

* Delimiter: rather than ',' can be ';', '\t' (tab), '|' etc
* Record / line terminator: is '\n' (unix), '\n\r' (dos) or something else ...
* How do you quote records that contain your delimiter

You can read more in the [CSV Dialect Description Format][csvddf] which all
defines a small JSON-oriented structure for specifying what options a CSV uses.

## CSVs and Git

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
and to [James Smith](http://floppy.org.uk/).

## Links

Specifications and overviews:

* [RFC specification of CSV][rfc]
* [CSV Dialect Description Format][csvddf]
* [CSV on Wikipedia][wiki]

Tools:

* Using [unix command line tools on CSV][cldw]
* The wonderful [csvkit][] (python)
* [messytables][] (python) - convert lots of badly structured data into CSV (or
  other formats)

[rfc]: http://tools.ietf.org/html/rfc4180
[csvddf]: http://www.dataprotocols.org/en/latest/csv-dialect.html
[wiki]: http://en.wikipedia.org/wiki/Comma-separated_values
[csvkit]: http://csvkit.readthedocs.org/
[messytables]: http://messytables.readthedocs.org

