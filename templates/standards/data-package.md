# Data Packages

A Data Package (or DataPackage) is a simple way of "packaging" up data.

To create a Data Package, all you need to do is place a "descriptor" file named
`datapackage.json` in the top-level directory of your set of data files.

**Motivating Use Case**

* You have a set of data files in a directory (and subdirectories) - whether
  locally or online
* You want to provide basic info for this collection (the "dataset")
* Information like: author, license, list of files in the dataset (and possibly
  info on those files, like a schema)

The data package approach provides a *very* simple, but standardized and
extensible, way for you to do this.

<div class="alert alert-info">
The Data Protocols website has a full **[RFC-style specification of Data
Package format][spec]** to complement this quick introduction.
</div>

<div class="alert alert-info">
**[Simple Data Format][sdf]** builds on Data Package by requiring that the data
files be CSV and using the `datapackage.json` to describe key information about
the CSV files (e.g. data types of columns etc).
</div>

[spec]: http://www.dataprotocols.org/en/latest/data-packages.html
[sdf]: /standards/simple-data-format


Example
-------

A minimal example Data Package would look like this on disk:

    datapackage.json
    # a data file (CSV in this case)
    data.csv

Any number of additional files such as a README, scripts (for processing or analyzing the
data) and other material may be provided but are not required.

Several exemplar data packages can be found in the [datasets organization on
github][datasets], including:

* [World GDP][]
* [ISO 3166-2 country codes][]

[datasets]: https://github.com/datasets
[World GDP]: https://github.com/datasets/gdp 
[ISO 3166-2 country codes]: https://github.com/datasets/country-codes


## datapackage.json

`datapackage.json` is the central file in a Data Package. It provides:

* General metadata such as the name of the package, its license, its publisher etc
* A list of the data files (resources) included in this data package along with information on those files (e.g. size and schema)

Here is an illustrative example of a datapackage JSON file::

    {
      "name": "a-unique-human-readable-and-url-usable-identifier",
      "datapackage_version": "1.0-beta",
      "title": "A nice title",
      "description": "...",
      "version": "2.0",
      "keywords": ["name", "My new keyword"],
      "licenses": [{
        "url": "http://opendatacommons.org/licenses/pddl/",
        "name": "Open Data Commons Public Domain",
        "version": "1.0",
        "id": "odc-pddl"
      }]
      "sources": [{
        "name": "World Bank and OECD",
        "web": "http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"
      }],
      "contributors":[ {
        "name": "Joe Bloggs",
        "email": "joe@bloggs.com",
        "web": "http://www.bloggs.com"
      }],
      "maintainers": [{
        # like contributors
      }],
      "publishers": [{
        # like contributors
      }],
      "dependencies": {
        "data-package-name": ">=1.0"
      }
      "resources": [
        {
        }
      ]
    }
    

<h2 id="resources">Resources</h2>

You list data files in the resources entry of the datapackage.json.

    {
      # one of url or path should be present (you can have both)
      path: "relative-path-to-file" # e.g. data/mydata.csv
      url: "online url" # e.g http://mysite.org/some-data.csv
    }

