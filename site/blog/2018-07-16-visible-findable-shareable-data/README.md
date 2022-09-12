---
title: Visible, findable, shareable data
date: 2018-07-16
tags: ["Goodtables", "field-guide"]
category:
image: /img/blog/visible.png
description: Getting your data out into the world is a crucial step towards its being used and useful. We walk through the steps to publishing on the top data platforms.
---


This section requires knowledge on how to [write a Table Schema](/blog/2018/03/07/well-packaged-datasets/#write-a-table-schema) and [attach descriptive metadata](/blog/2018/03/07/well-packaged-datasets/#add-your-dataset-s-metadata) to your data collection.

Creating and Sharing Data Packages is important for both data publishers and data users because it provides a common and open specification to describe your dataset's metadata. This facilitates data reuse, as users don't need to understand each data publisher's specific metadata format, and as the specification is machine-readable, it also allows tools to parse the metadata. This enables software to:

* Import the data packages into different tools and languages, like Python and R
* Validate the data contents according to the schema described in the data package
* Convert the data package into other formats, for example loading it into a SQL database for further analysis

Although these reasons are not unique to publishing data as data packages, here's why we think data publishers should consider publishing in this format:

* Archiving data collections using data packages ensure data publishers can update data  more efficiently at any time. The associated schema is a guide on existing data fields and acceptable data types for individual tabular data resources and can be easily built upon.

* Sharing data with descriptive metadata and its associated schema provides context for your data no matter where it is used, and significantly cuts down on time spent researching data provenance before using acquired data.

* Data Packages allow for accountability and enrich the feedback process as data publishers can add metadata with contact information for users to reach out to them and licensing to spell out accepted use of published data.

If don't need your own data portal, there are many platforms where you can publish your data (if you need your own, check [CKAN](https://ckan.org/)). In the section below, we dive into a few options. Read along and decide what option is most suitable:

## Publish Packaged Data in our community CKAN instance

CKAN is an open source platform for publishing data that makes it easy to discover, use and share data. [datahub.ckan.io](http://datahub.ckan.io) is a public instance of CKAN that allows anyone to publish their data.

Here’s why you should consider creating an organization on [datahub.ckan.io](http://datahub.ckan.io) and publishing datasets therein:
* [datahub.ckan.io](https://datahub.ckan.io/) is free for all to use! The file upload size limit on the platform is currently 100mb.
* The decision on whether to publicly or privately publish datasets rests with data publishers.
* [datahub.ckan.io](http://datahub.ckan.io) organizations allow for multiple users to collaborate with varied privileges:
 * **Admin**: Can add/edit and delete datasets, as well as manage organization members.
 * **Editor**: Can add and edit datasets, but not manage organization members.
 * **Member**: Can view the organization's private datasets, but not add new datasets.

To publish data on [datahub.ckan.io](http://datahub.ckan.io):

1. Request for a new Organization to be created on the platform for you via [our community page](https://discuss.okfn.org/c/open-knowledge-labs/datahub).
     This is required only to ensure spammers don’t take up space and hog resources on the platform.

     The request format is simple and requires:
    * **Title**: This will be the name of your Organization on [datahub.ckan.io](http://datahub.ckan.io) i.e.<br/>
      *My New Organization*

    * **Slug**: This is an acronym, word or hyphenated phrase that will be added to the end of the [datahub.ckan.io](http://datahub.ckan.io) url to uniquely identify your Organization and associate your data collections with it i.e.<br/>
    	*my-new-organization*

    * **Username**: The username you provide is associated with an email address on [datahub.ckan.io](http://datahub.ckan.io) and allows us to give you admin access to your Organization on [datahub.ckan.io](http://datahub.ckan.io).

2. Log In and add new datasets

  Adding datasets on [datahub.ckan.io](http://datahub.ckan.io) is no different from using any other CKAN platform, but [here’s a good guide by Dan Fowler](http://okfnlabs.org/blog/2016/07/25/publish-data-packages-to-datahub-ckan.html) for first timers.

3.Publish and share public datasets widely.

  On [datahub.ckan.io](http://datahub.ckan.io), you can either publish datasets privately, meaning only members of your organization have access to them, or publicly, as open data. [Find out more](http://okfnlabs.org/blog/2016/07/25/publish-data-packages-to-datahub-ckan.html).


## Publish Packaged Data on DataHub.io

DataHub.io is a platform for finding, sharing and publishing high quality data online.

[DataHub.io](http://datahub.io) and [datahub.ckan.io](http://datahub.ckan.io) share the same name for historical reasons. [Datahub.ckan.io](http://datahub.ckan.io) used to be the DataHub, but was moved to its current address, and the current DataHub uses new software developed from scratch.

1. Set up a data publisher / user account on [DataHub.io](http://datahub.io)

  Join the [datahub.io community group](https://gitter.im/datahubio/chat), introduce yourself and request for an account.

2. Publish Datasets on [DataHub.io](http://datahub.io)

  [This post](http://datahub.io/docs/getting-started/publishing-data) provides helpful information on publishing datasets on [DataHub.io](http://datahub.io).


## Publish Packaged Data on GitHub

GitHub is the largest repository of source code, with [more than 20 million
users](https://github.com/blog/2345-celebrating-nine-years-of-github-with-an-anniversary-sale). Although the focus is on hosting source code, any type of file can be hosted. Documents, thesis, images, shapefiles, you can even host an entire static website with [GitHub Pages](https://pages.github.com/).

By using GitHub, you get all the advantages of using a version control system as Git, where every modification to your files is tracked. You also get an issue ticketing system, wiki pages, milestones tracking, and other useful
collaboration tools.

** What types of datasets can be hosted on GitHub?**

Although GitHub offers many useful functionalities, not all datasets are a good fit for it. The main limitations are:

* Individual files have less than 100 MB
* Entire repository have less than 1 GB
  * The repository size includes not only the current files, but all of their previous versions.

You can store larger files using [git-lfs](https://git-lfs.github.com/), but we won't go in details about it on this post.

It's also useful if your data files use text-based file formats like CSV or GeoJSON, as then git is able to show you exactly what changed between two versions of the files. However, even if you use binary file formats like XLS, GitHub is still useful.

** Step 1. Organise your dataset folder structure **

The way to structure your dataset depends on your data, and what extra artifacts it contains (e.g. images, scripts, reports, etc.). In this section, we'll show a complete example with:

* **Data files**: The files with the actual data (e.g. CSV, XLS, GeoJSON, ...)
* **Documentation**: How was the data collected, any caveats, how to update it, etc.
* **Metadata**: Where the data comes from, what's in the files, what's their source and license, etc.
* **Scripts**: Software scripts that were used to generate, update, or modify the data.

Even though we'll see an example that has all of these different types of files, this isn't always the case. For example, datasets that were manually collected might not have any scripts.

This is the final structure:

```
data/
    schools.csv
    cities.csv
docs/
    screenshot.png
scripts/
    clean_data.py
Makefile
datapackage.json
README.md
```

* **data/**: All data files are contained in this folder. In our example, there are two: `data/schools.csv` and `data/cities.csv`.
* **docs/**: Images, sample analysis, and other documentation files regarding the dataset. The main documentation is in `README.md`, but in this folder you can add any images used in the README, and other writings about the dataset.
* **scripts/**: All scripts are contained in this folder. There could be scripts to scrape the data, join different files, clean them, etc. Depending on the programming language you use, you might also add requirements files like `requirements.txt` for Python, or `package.json` for NodeJS.
* **Makefile**: The scripts are only part of the puzzle, we also need to know how to run them. In which order they should be executed, which one should I run to update the data, and so on. You could document this information textually in the `README.md` file, but the `Makefile` allows you to have executable documentation. You can think of it as a script to run the scripts. If you have never written a Makefile, read [Why Use Make](https://bost.ocks.org/mike/make/).
* **datapackage.json**: This file describes the dataset's metadata. For example, what is the dataset, where are its files, what they contain, what each column means (for tabular data), what's the source, license, and authors, and so on. As it's a machine-readable specification, other software can import and validate your files. See HOW TO CREATE A DATA PACKAGE on instructions on writing this file.
* **README.md**: This is where the dataset is described for humans. We recommend the following sections:
  * **Introduction**: A short description of the dataset, what it contains, the time or geographical area it covers
  * **Data**: What the data structure? Does it use any codes? How do you define missing values (e.g. 'N/A' or '-1')
  * **Preparation**: How was the data collected? How do I update the data? Was it modified in any way? If you have a `Makefile`, this section will mostly document how to run it. Otherwise you can describe how to run the scripts, or how to collect the data manually.
  * **License**: There are two issues here: the license of the data itself, and the license of the package you are creating (including any scripts). Our recommendation is to license the package you created as [CC0][cc0], and add any relevant information or disclaimers regarding the source data's license.

To summarize, these are the folders, files, and their respective contents in this structure:

| Path             | Type          | Contents                                                                              |
| ---              | ---           | ---                                                                                   |
| data/            | Data          | Dataset's data files.                                                                 |
| docs/            | Documentation | Images, analysis, and other documentation files.                                      |
| scripts/         | Scripts       | Scripts used for creating, modifying, or analysing the dataset.                       |
| Makefile         | Scripts       | Executable documentation on how to run the scripts.                                   |
| datapackage.json | Metadata      | Data Package descriptor file.                                                         |
| README.md        | Documentation | Textual description of the dataset with description, preparation steps, license, etc. |

** Step 2. Upload the dataset to GitHub **

1. Login (or create) a new account on GitHub
1. Create [a new repository][gh:newrepo]
    * Write a short description about the dataset
1. On your repository page, click on the "Upload files" link
1. Upload the files you created in the previous step
    * If your have files larger than 25 MB, you'll need to either [upload using the command line][gh:addfiles-cli], or the [GitHub Desktop client][gh:desktop].

** (Optional) Step 3. Enable automatic tabular data validation **

You can automatically validate your tabular data files using [goodtables.io][gt.io]. This will take only a few minutes, and will ensure you'll always know when there are errors with your dataset, maintaining its quality. [Read the walkthrough here](/blog/2018/03/12/automatically-validated-tabular-data).

The sample datasets used in this example, that is, List of schools in Birmingham, UK are available [in this repository](https://github.com/vitorbaptista/birmingham_schools).

[why-make]: https://bost.ocks.org/mike/make/ "Why use Make"
[publish-faq]: /guides/publish-faq/ "Publishing Data Packages - FAQ"
[gt.io]: https://goodtables.io
[gt.io:github]: https://docs.goodtables.io/getting_started/github.html "Validating data on GitHub"
[cc0]: https://creativecommons.org/publicdomain/zero/1.0/ "Creative Commons Public Domain Dedication"
[gh:newrepo]: https://github.com/new "GitHub New Repository"
[gh:desktop]: https://desktop.github.com/
[gh:addfiles]: https://help.github.com/articles/adding-a-file-to-a-repository/ "Adding a file to a repository"
[gh:addfiles-cli]: https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/ "Adding a file to a repository using the command line"
