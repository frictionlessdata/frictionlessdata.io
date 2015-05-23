# Publishing Data Packages - Best practice patterns

This page summarizes the best practice patterns that should be followed when creating a data package. It addresses
* [The Data Package name](#DataPackageName), 
* [The resource and data file names](#Resources),
* [The descriptor `datapackage.json`](#DatapackageJSON),
* [The Data Package folder names and structure](#FolderStructure),
* [The README file](#README),
* [Validate and preview](#ValidatePreview),
* [Examples of well-structured packages](#Examples). 

Complete specifications are available at http://dataprotocols.org/data-packages.

<a name="DataPackageName"></a>
## Data Package Name

The Data Package name is used in the `name` field of the `datapackage.json`.

*This name is also frequently used for the folder/directory in which the Data
Package is stored.*

As per the Data Package spec The name SHOULD be:

* lower-case
* use '-' for word separators
* reasonably concise (3-4 words)

**Naming conventions**

For country specific datasets:

```
{topic}                  # e.g. gdp
{topic}-{2-digit-iso}    # e.g. gdp-us 
```

For time series data:

```
[...-]year
[...-]quarter
[...-]month
[...-]day
```

---

<a name="Resources"></a>
## Resource and File Names

Similar to Data Package Names:

* lower-case
* use '-' for word separators

Resource names SHOULD, usually, be the same as the name of the associated file
on disk but without the file extension. e.g.

```
gdp-quarterly     # resource name
gdp-quarterly.csv # on disk
```

Naming conventions of files follow that for data packages in terms of country
or time series facets.

----

<a name="DatapackageJSON"></a>
## Descriptor `datapackage.json`

### Alignment

With JSON, data is structured in a nested way through curly and squared brackets. Though the alignment of these structures is not relevant for computer programs, it makes it easier for the human reader if they are properly aligned.

Good alignment:
```
{
  "name": "corruption-perceptions-index",
  "title": "Corruption Perceptions Index (CPI)",
  "sources": [
    {
      "name": "Transparency International",
      "web": "http://www.transparency.org/research/cpi/overview"
    }
  ],
...
}
```

Bad alignment:
```
{
  "name": "corruption-perceptions-index","title": "Corruption Perceptions Index (CPI)",
  "sources": 
  [{
    "name": "Transparency International",
    "web": "http://www.transparency.org/research/cpi/overview"}]
    ,
...
}
```

Please make sure to have your `datapackage.json` well structured to ease the understanding of your Data Package content. The [Online DataPackage.json Creator](http://data.okfn.org/tools/create) can help you create the general structure.  

### Contributors fields

Add the 'contributors' field (original author of the package - see http://dataprotocols.org/data-packages) if you wish to keep the credits for the package.

----

<a name="FolderStructure"></a>
## Data Package Folder Names and Structure

It is standard practice to use the Data Package name (from the
`datapackage.json`) for the name of the folder/directory in which the Data
Package is kept.

If storing in e.g. git(hub) this would also be the the name of the repository.

If you include scripts allowing to automate the data extraction process, these should be stored in a `script` folder/directory.

----

<a name="README"></a>
## README

A README is a text file giving (human-readable) information about your dataset.

Data Packages SHOULD have a README.

### Formatting

The README SHOULD be a plain text file (no word or rich text etc) and SHOULD use markdown to allow for formatting

### File Name

If markdown is used the file SHOULD be named `README.md` and otherwise SHOULD be named
`README.txt`.

### Sections

You can include anything you like in your README. It is standard practice to
include some (if possible all) of the following sections: **Introduction, Data, Preparation, License**.

We SHOULD NOT include the title of the Data Package at the top of the README.

Each section other than the introduction should be headed with its name using
level 2 heading in markdown e.g. for the data section you would have the
following markdown in your README:

```
## Data
```

#### **Introduction**

Start with a short description of the dataset (the first sentence and first
paragraph should be extractable to provide short standalone descriptions).

Unlike other sections **this section SHOULD NOT have a heading** as it starts the README. (i.e. you do not
need the heading `## Introduction` 

#### **Data**

Put specific information about the data in a Data section. This can be things
like information about the source of the data, the specific structure of the
data, missing values etc.

#### **Preparation**

Put information on preparing the data in a Preparation section. In particular,
any instructions about how to run any preparation and processing scripts to
generate the data should go here.

#### **License**

Put additional information on the permissions and licensing of the data in the
Data Package in the License section.

Since licensing information is often not clear from the data producers, the guideline here is to license the Data Package under the Public Domain Dedication and License, and then to add any relevant information or disclaimers regarding the source data. 

See for example 
* http://data.okfn.org/data/core/corruption-perceptions-index#readme
* http://data.okfn.org/data/core/geo-nuts-administrative-boundaries#readme 

See also the following thread https://discuss.okfn.org/t/copyright-on-data-sources/189.

----

<a name="ValidatePreview"></a>
## Validate and preview your Data Package

Use the [Online validator](/tools/validate) to check that your datapackage.json and Data Package are good to go. Simply drop the URL to your Data Package in the input box, and press `Validate`. If everything is fine, `Status: Valid` is returned.

Then use the [Online Data Package viewer app](/tools/view) to have a preview of your Data Package.

----

<a name="Examples"></a>
## Examples

For examples of well-structured Data Package see:
* For tabular data: http://data.okfn.org/data/core/corruption-perceptions-index
* For geospatial data: http://data.okfn.org/data/core/geo-nuts-administrative-boundaries


