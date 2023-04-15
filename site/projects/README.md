---
title: Frictionless Projects
---

# Frictionless Projects

<big><strong>Open source projects for working with data.</strong></big>

The Frictionless Data project provides a rich set of open source projects for working with data. There are tools, a visual application, and software for many programming platforms.

:::tip
This document is an overview of the Frictionless Projects - for more in-depth information, please click on one of the projects below and you will be redirected to a corresponding documentation portal.
:::

## Software and Standards

It's a list of core Frictionless Projects developed by the core Frictionless Team:

<div class="main-section black-text">
<div class="features flex flex-row flex-wrap py-4">

<!-- Frictionless Application -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://application.frictionlessdata.io/" target="_blank">
     <img src="/img/software/components.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px" />
     <h3>Frictionless Application</h3>
   </a>
   <p>Data management application for Browser and Desktop for working with tabular data.</p>
 </div>
</div>

<!-- Frictionless Framework -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://framework.frictionlessdata.io" target="_blank">
     <img src="/img/software/framework.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Framework</h3>
   </a>
   <p>Python framework to describe, extract, validate, and transform tabular data.</p>
 </div>
</div>

<!-- Livemark -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://livemark.frictionlessdata.io" target="_blank">
     <img src="/img/software/livemark.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Livemark</h3>
   </a>
   <p>Static site generator that extends Markdown with charts, tables, scripts, and more.</p>
 </div>
</div>

<!-- Frictionless Repository -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://repository.frictionlessdata.io" target="_blank">
     <img src="/img/software/repository.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Repository</h3>
   </a>
   <p>Github Action allowing you to validate tabular data on every commit to your repository.</p>
 </div>
</div>

<!-- Frictionless Standards -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io" target="_blank">
     <img src="/img/software/libraries.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Standards</h3>
   </a>
   <p>Lightweight yet comprehensive data standards as Data Package and Table Schema.</p>
 </div>
</div>

<!-- Datahub -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://datahub.io/" target="_blank">
     <img src="/img/software/datahub.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Datahub</h3>
   </a>
   <p>A web platform built on Frictionless Data that allows discovering, publishing, and sharing data.</p>
 </div>
</div>

</div>
</div>

## Which software is right for me?

Choosing the right tool for the job can be challenging. Here are our recommendations:

### Visual Interfaces

If you prefer to use a visual interface:

- **Frictionless Application (coming soon):** We're working on our brand-new Frictionless Application that will be released in 2021. Until then, you can use [Data Package Creator](https://create.frictionlessdata.io/) to create and edit data packages and [Goodtables On-Demand](http://try.goodtables.io/) for data validation.
- **Frictionless Repository:** For ensuring the quality of your data on Github, Frictionless provides [Frictionless Repository](https://repository.frictionlessdata.io/). This creates visual quality reports and validation statuses on Github everytime you commit your data.
- **Datahub:** For discovering, publishing, and sharing data we have [Datahub](https://datahub.io/) which is built on Frictionless software. Using this software as a service, you can sign-in and find, share, and publish quality data.

### Command-line Interfaces

If you like to write commands in the command-line interface:

- **Frictionless Framework:** For describing, extracting, validating, and transforming data, Frictionless provides the [Frictionless Framework's](https://framework.frictionlessdata.io/) command-line interface. Using the "frictionless" command you can achieve many goals without needing to write Python code.
- **Livemark:** For data journalists and technical writers we have a project called [Livemark](https://livemark.frictionlessdata.io/). Using the "livemark" command in the CLI you can publish a website that incorporates Frictionless functions and is powered by markdown articles.
- **Datahub:** Frictionless provides a command-line tool called [Data](https://datahub.io/docs/features/data-cli) which is an important part of the Datahub project. The "data" command is available for a JavaScript environment and it helps you to interact with data stored on Datahub.

### Programming Languages
If you want to use or write your own Frictionless code:

- **Frictionless Framework:** For general data programming in Python, the [Frictionless Framework](https://framework.frictionlessdata.io/) is the way to go. You can describe, extract, validate, and transform your data. It's also possible to extend the framework by adding new validation checks, transformation steps, etc. In addition, there is a lightweight version of the framework written in [JavaScript](https://github.com/frictionlessdata/frictionless-js).
- **Frictionless Universe:** For Frictionless implementations in other languages like [R](https://github.com/frictionlessdata/frictionless-r) or Java and visual components, we have [Frictionless Universe](../universe/). Each library provides metadata validation and editing along with other low-level data operations like reading or writing tabular files.

## Which standard is right for me?

To help you pick a standard to use, we've categorized them according to how many files you are working with.

### Collection of Files

If you have more than one file:

- **Data Package**: Use a [Data Package](https://specs.frictionlessdata.io/data-package/) for describing datasets of any file format. Data Package is a basic container format for describing a collection of data in a single "package". It provides a basis for convenient delivery, installation and management of datasets.
- **Fiscal Data Package**: For fiscal data, use a [Fiscal Data Package](https://specs.frictionlessdata.io/fiscal-data-package/). This lightweight and user-oriented format is for publishing and consuming fiscal data. It concerns with how fiscal data should be packaged and providing means for publishers to best convey the meaning of the data - so it can be optimally used by consumers.

### Individual File

If you need to describe an individual file:

- **Data Resource**: Use [Data Resource](https://specs.frictionlessdata.io/data-resource/) for describing individual files. Data Resource is a format to describe and package a single data resource of any file format, such as an individual table or file. It can also be extended for specific use cases.
- **Tabular Data Resource**: For tabular data, use the Data Resource extension called [Tabular Data Resource](https://specs.frictionlessdata.io/tabular-data-resource/). Tabular Data Resource describes a single *tabular* data resource such as a CSV file. It includes support for metadata and schemas to describe the data content and structure.
- **Table Schema**: To describe only the schema of a tabular data file, use [Table Schema](https://specs.frictionlessdata.io/table-schema/). Table Schema is a format to declare a schema for tabular data. The schema is designed to be expressible in JSON. You can have a schema as independent metadata or use it with a Tabular Data Resource.
- **CSV Dialect**: To specify the CSV dialect within a schema, use [CSV Dialect](https://specs.frictionlessdata.io/csv-dialect/). This defines a format to describe the various dialects of CSV files in a language agnostic manner. This is important because CSV files might be published in different forms, making it harder to read the data without errors. CSV Dialect can be used with a Tabular Data Resource to provide additional information.
