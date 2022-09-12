---
title: Frictionless Data for Wheat
date: 2021-03-05
tags: ["tool-fund"]
category: grantee-profiles
image: /img/blog/wheat.png
description: This blog is part of a series showcasing projects developed during the 2020-2021 Tool Fund. The Tool Fund provided five mini-grants of $5,000 to support individuals or organisations in developing an open tool for reproducible research.
author: Simon Tyrrell and Xingdong Bian
---

*This blog is part of a series showcasing projects developed during the 2020-2021 Tool Fund. The Tool Fund provided five mini-grants of $5,000 to support individuals or organisations in developing an open tool for reproducible research built using the Frictionless Data specifications and software. This Fund is part of the Frictionless Data for Reproducible Research project, which is funded by the Sloan Foundation. This project applies our work in Frictionless Data to data-driven research disciplines, in order to facilitate reproducible data workflows in research contexts.*

We are Simon Tyrrell and Xingdong Bian, both research software engineers, in Robert Davey’s Data Infrastructure and Algorithms group at the Earlham Institute. We built the [Grassroots Infrastructure project](https://grassroots.tools/) which aims to create an easily-deployable suite of computing middleware tools to help users and developers gain access to scientific data. This is part of the [Designing Future Wheat (DFW)](https://designingfuturewheat.org.uk/) project.  There are two separate parts of this project that we have added Frictionless Data support to and we’ll now describe each of these in turn.

## Why add Frictionless to the Designing Future Wheat project?
The first part of the Tool Fund project we added Frictionless Data to is the DFW data portal which delivers large scale wheat datasets that are also tied to semantically marked-up metadata. These datasets  are heterogeneous and vary from  field trial information, sequencing data, through to phenotyping images, etc. Given the different needs of users of this data, there is an increasing need to be able to manage this data and its associated metadata to allow for as easy dissemination as possible.  So the issue that we had was how can we standardize the methods to access this data/metadata and label it using both well-defined ontologies and standards to deliver consistent data packages to users in an interoperable way. This is where Frictionless Data came in, allowing data scientists a consistent, well-defined standard to use when building programs or workflows to access the data stored on the portal.

The portal uses a combination of an [iRODS](https://irods.org/) repository, to store the data and metadata, and [Apache](https://httpd.apache.org/) to host the files with our in-house developed Apache module, mod_eirods_dav, linking the two together.  It was this module that we added the Frictionless Data support to and further details are available in the [documentation](https://github.com/billyfish/eirods-dav#frictionless-data-support).

## How does the new Frictionless implementation work?
So what does it do? Well, it can generate a datapackage.json file automatically for any number of specified directories. These Data Packages can either be generated dynamically on each access or can optionally be written back to the iRODS repository and served like any other static file stored there. Since every iRODS repository can use different metadata keys for storing the information that the Data Packages require, the required key names are completely configurable by specifying the iRODS metadata keys to use in the mod_eirods_dav configuration file and you can do things like combining the values of multiple iRODS metadata keys with generic strings to produce the value that you want to use in the Data Package. Currently the Data Package’s name, title, description, authors, unique identifier and license details are all supported. For each entry within the Data Package’s resources array, the name, path checksum and size attributes are also stored.

As well as standard entries within the Data Package, we also added support for Tabular Data Packages. As with standard entries, all of the keys for the column names can be generated from setting the required directives within the module configuration file.

![imgblog](https://user-images.githubusercontent.com/74717970/110128100-b5154a00-7dc6-11eb-8d8a-a915a49e6742.png)
Figure1: A Data Package generated automatically by mod_eirods_dav

![imgblog2](https://user-images.githubusercontent.com/74717970/110128509-25bc6680-7dc7-11eb-8c2e-ff966169f9c5.png)
Figure2: Tabular Data Package generated automatically by mod_eirods_dav

## Adding CKAN support
The second of the tools that we have implemented Frictionless Data support for is the DFW CKAN website. Primarily we use this to store publications from the project output. We currently have over 300 entries in there and since its collection is getting larger and larger, we needed a more manageable way of having better data integration, especially when using other systems through the projects by our collaborators.

So we built a simple Python Django webapp to do this:

![imgblog3](https://user-images.githubusercontent.com/74717970/110128662-58fef580-7dc7-11eb-88c9-46e8e36b4def.png)

By querying the REST API provided by CKAN and getting the datasets’ metadata as JSON output, followed by using the [Frictionless CKAN Mapper](https://github.com/frictionlessdata/frictionless-ckan-mapper), the JSON is converted into  datapackage.json, to conform with Frictionless Data standard. If any of the resources under a dataset is CSV, the headings will be extracted as the [tabular data package schema](https://specs.frictionlessdata.io/table-schema/) and integrated into the datapackage.json file itself. As well as providing the datapackage.json file as a download through the Django web app, it is also possible to push the datapackage.json back to the CKAN as a resource file on the page. This requires the CKAN user key with the relevant permissions.

![imgblog4](https://user-images.githubusercontent.com/74717970/110128881-94012900-7dc7-11eb-9833-e46f351477be.png)

## How can you try this tool?
The tool can be used by accessing its REST interface:
* `/convert?q={ckan-dataset-id}` - convert CKAN dataset json to datapackage json e.g. /convert?q=0c03fa08-2142-426b-b1ca-fa852f909aa6
* `/convert_resources?q={ckan-dataset-id}` - convert CKAN dataset json to datapackage json with resources, also if any of the resources files are CSV files, the tabular data package will be converted. e.g. /convert_resources?q=grassroots-frictionless-data-test
* `/convert_push?q={ckan-dataset-id}&key={ckan-user-key}` - push the generated datapackage.json to the CKAN entry.
An example REST query page:

![imgblog5](https://user-images.githubusercontent.com/74717970/110129172-efcbb200-7dc7-11eb-9230-a70cbbd6d9cf.png)

It is possible to have your own local deployment of the tool too by downloading the web app from its Github repository, installing the requirements, and running the server with

`$manage.py runserver 8000`

Our collaborators can utilise the datapackage.json and integrate the CKAN entries to their own tools or project with ease as it conforms to the Frictionless Data standard.

## Next Steps for Frictionlessly Designing Future Wheat
It has been a hugely positive step to implement support for Frictionless Data Packages and we’ve already used these packages ourselves after two of our servers decided to fall over within three days of each other! Our future plans are to add support for further metadata keys within the datapackage.json files and expose more datasets as Frictionless Data Packages. For the CKAN-side, there are a few improvements that can be made in future: firstly, make the base CKAN url configurable in a config file, so this can be used for any CKAN website. Secondly, create a docker file to include the whole Django app, so it is more portable and easier to be deployed. You can keep track of the project at the following links:

* The Designing Future Wheat Data Portal: https://opendata.earlham.ac.uk/wheat/under_license/toronto/
* The Designing Future Wheat publications portal: https://ckan.grassroots.tools
* mod_eirods_dav: https://github.com/billyfish/eirods-dav
* CKAN Frictionless Data web application: https://github.com/TGAC/ckan-frictionlessdata

