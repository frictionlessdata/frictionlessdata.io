---
title: Frictionless Data Package for InterMine
date: 2021-04-13
tags: ["tool-fund"]
category: grantee-profiles
image: /img/blog/intermine.png
description: This blog is part of a series showcasing projects developed during the 2020 Tool Fund.
author: Nikhil Vats
---

*This blog is part of a series showcasing projects developed during the 2020-2021 Tool Fund. The Tool Fund provided five mini-grants of $5,000 to support individuals or organisations in developing an open tool for reproducible research built using the Frictionless Data specifications and software. This Fund is part of the Frictionless Data for Reproducible Research project, which is funded by the Sloan Foundation. This project applies our work in Frictionless Data to data-driven research disciplines, in order to facilitate reproducible data workflows in research contexts.*

My name is Nikhil and I am a pre-final year student  pursuing M.Sc. Economics and B.E. Computer Science from BITS Pilani, India. For my Frictionless Data Tool Fund, I worked with [InterMine](http://intermine.org) which is an open-source  biological data warehouse and offers a webapp to query and download that data in multiple formats like CSV, TSV, JSON, XML, etc. However, it is sometimes difficult for new users to understand the InterMine  data since it is complex and structured. Also, for developers to contribute to InterMine in a more effective way, they need to understand the data and its structure at the core of InterMine, and this can be difficult for new developers.

To help resolve these user needs, my solution was to design a data package for InterMine and give users the option to download the data package along with the results of any query. This would help them understand the structure of the results like class and attributes by describing all the attributes and summarizing other important information such as data sources, primary key(s), etc. Also, other fields like the version of app, link to query and timestamp can help them trace any potential errors. The new feature to export data packages is available in both the old version of InterMine webapps and the new version (BlueGenes). Users can use any of the apps to build a query and then go to the results page, where they can click on the export button, which provides the option to export Frictionless Data Package (see the images below for detailed steps).

Within InterMine, there are over 30 mines that  provide biological data for organisms like flies, humans, rats, etc. For this Frictionless Tool Fund, the target audience is the InterMine community, whether it’s researchers in institutes around the world or Google Summer of Code and Outreachy applicants who can understand the process of querying and the structure of data to kickstart their contribution.

While this Tool Fund is over, a future idea to improve this work is adding class and attribute descriptions in the data package using the configuration files in the InterMine codebase. The class description file already exists but we need to add the attribute descriptions. Another possible future expansion would be integrating this feature with one of the frictionless tools, like Goodtables. For more details, see the images below and read the documentation for the tool [here](https://github.com/intermine/im-docs/blob/master/versioned_docs/version-5.0.0/webapp/frictionless/index.md).

Screenshot 1 : Step 1 to export data package
![screenshot1](https://user-images.githubusercontent.com/74717970/114539496-d6364980-9c54-11eb-8d17-b4eb35f483b4.png)

Screenshot 2 : Step 2 to export data package
![screenshot2](https://user-images.githubusercontent.com/74717970/114539567-e9e1b000-9c54-11eb-933d-4545f79a3b65.png)

Screenshot 3 : A sample data package
![screenshot3](https://user-images.githubusercontent.com/74717970/114539626-f49c4500-9c54-11eb-8452-fdf6bf810686.png)
