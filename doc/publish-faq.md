# FAQs - Publishing Data Packages

## Naming Data Packages

Data Package names are used in the `name` field of the `datapackage.json`.

*This name is also frequently used for the folder/directory in which the Data
Package is stored.*

As per the Data Package spec The name SHOULD be:

* lower-case
* use '-' for word separators
* reasonably concise (3-4 words)

----


## Data Package Folder Names

It is standard practice to use the Data Package name (from the
`datapackage.json`) for the name of the folder/directory in which the Data
Package is kept.

If storing in e.g. git(hub) this would also be the the name of the repository.

----


## README

A README is a text file giving (human-readable) information about your dataset.

Data Packages SHOULD have a README.

### Formatting

The README SHOULD be a plain text file (no word or rich text etc) and SHOULD use markdown to allow for formatting

### File Name

If markdown is used the file SHOULD be named `README.md` and otherwise SHOULD be named
`README.txt`.

### Sections

You can include anything you like in your README. It is standard practice to
include some or all of the following sections.

We SHOULD NOT include the title of the Data Package at the top of the README.

Each section other than the introduction should be headed with its name using
level 2 heading in markdown e.g. for the data section you would have the
following markdown in your README:

```
## Data
```

#### Introduction

Start with a short description of the dataset (the first sentence and first
paragraph should be extractable to provide short standalone descriptions).

Unlike other sections this section SHOULD NOT have a heading as it starts the README. (i.e. you do not
need the heading `## Introduction` 

#### Data

Put specific information about the data in a Data section. This can be things
like information about the source of the data, the specific structure of the
data, missing values etc.

#### Preparation

Put information on preparing the data in a Preparation section. In particular,
any instructions about how to run any preparation and processing scripts to
generate the data should go here.

#### License

Put additional information on the permissions and licensing of the data in the
Data Package in the License section.

### Examples

For examples of standard READMDS see the Core Datasets at
http://data.okfn.org/data/

