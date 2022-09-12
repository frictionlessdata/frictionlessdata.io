---
title: Creating Data Packages in JavaScript
date: 2018-04-04
tags: ["JavaScript"]
category: working-with-data-packages
---

This tutorial will show you how to install the JavaScript libraries for working with Data Packages and Table Schema, load a CSV file, infer its schema, and write a Tabular Data Package.

## Setup

For this tutorial we will need [datapackage-js](https://github.com/frictionlessdata/datapackage-js) which is a JavaScript library for working with Data Packages.

Using Node Package Manager (`npm`), install the latest version of `datapackage-js` by entering the following into your command line:
```bash
npm install datapackage@latest
```

Run the `datapackage --help` command to find out all options available to you.

## Creating a package

The basic building block of a data package is the `datapackage.json` file. It contains the schema and metadata of your data collections.

Now that the node package for working with data packages has been installed, create a directory for your project, and use the command `datapackage infer path/to/file.csv` to generate a schema for your dataset. To save this file in the directory for editing and sharing, simply append `> datapackage.json` to the command above, like so:

```bash
datapackage infer path/to/file.csv > datapackage.json
```

This creates a `datapackage.json` file in this directory.

## Publishing

Now that you have created your Data Package, you might want to [publish your data online](/blog/2016/08/29/publish-online/) so that you can share it with others.
