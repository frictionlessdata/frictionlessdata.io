---
title: Frictionless Data for Wheat
date: 2020-08-17
tags: ["tool-fund"]
category: grantee-profiles
image: /img/blog/fd_reproducible.png
description: This grantee profile features Simon Tyrrell, Xingdong Bian, and Robert Davey for our series of Frictionless Data Tool Fund posts...
author: Simon Tyrrell
---
*This grantee profile features Simon Tyrrell, Xingdong Bian, and Robert Davey for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved.*

## Meet the Grassroots team

Hi I’m Simon Tyrrell and I’m a research software engineer having spent most of my career in academia. My first degree was in Maths and I did my PhD in Cheminformatics, both done at the University of Sheffield. After some postdoctoral fellowships in Computational Chemistry, I now happily reside in the field of Bioinformatics here at the Earlham Institute (EI) writing software to a diet of tea and loud guitars, both listened to and played.

Xingdong Bian is a member of the [Data Infrastructure group](http://www.earlham.ac.uk/davey-group), he joined the Earlham Institute in January 2010 and was involved in the development of EI’s Laboratory Information Management System (MISO) and the TGAC Browser. He has worked on solutions for data visualisation, managing servers, genomic databases and bioinformatics tools. Xingdong is now working mainly on the Grassroots project as a research software engineer. He has a BSc in Computer Science from the University of Sheffield and a MSc in Software Engineering from the University of York.

Robert Davey leads the Data Infrastructure group at the Earlham Institute and is the PI for the Grassroots project. He has a PhD in Computer Science from the University of East Anglia, undertaken at the Roberts lab in the [National Collection of Yeast Cultures](http://www.ncyc.co.uk). Rob leads a number of large computing infrastructure development and deployment projects, is a certified [Software Carpentry](https://software-carpentry.org) Instructor and Trainer, an editorial board member for Nature Scientific Data, and a [Software Sustainability Institute](https://www.software.ac.uk) Fellow.

Together Xingdong and I work in Robert Davey’s team at the Earlham Institute developing Grassroots. This is a set of middleware tools for sharing bioinformatics data and services so that users and developers can do scientific analyses as easily as possible. 

## How did you first hear about Frictionless Data?

We have always been big believers in the FAIR data principles and when we saw a tweet about the Frictionless Data tool fund, the more that we read about it, the more it seemed to be exactly what we were after! Even without the fund, it is likely to have been something that we would have looked to implement anyway.

## What specific issues are you looking to address with the Tool Fund?

As part of the Designing Future Wheat (DFW) project, we currently have two different repositories: the [DFW data portal](https://opendata.earlham.ac.uk/), using  [iRODS](https://irods.org/) with [mod_eirods_dav](https://github.com/billyfish/eirods-dav), and a [digital repository](https://ckan.grassroots.tools/) using [CKAN](https://ckan.org/). Both of these contain a wide variety of heterogeneous data such as genetic sequences, field trial experiment results, images, spreadsheets, publications, etc., and we are trying to standardise how to expose these datasets and their associated metadata. This is where Frictionless Data comes in! The ability to have consistent methods of accessing this information should make it easier for other researchers and data scientists to access and do some great work with all of this data.

## How can the open data, open source, or open science communities engage with the work you are doing?

We firmly believe in open source and open data and everything that we create is freely available. We plan to build a selection of Frictionless Data tools and make them available on our existing data portals so people can try them out and give any feedback. These will be rolled out incrementally so that progress is visible from early on. Our initial set of work will focus on extending the DFW data portal that uses one of our existing tools, eirods-dav (https://github.com/billyfish/eirods-dav) which is a tool for exposing the data in an iRODS repository in a user-friendly way with rich APIs for developers and data scientists too. So if anyone has any feedback, ideas, suggestions, rants :-), please raise an issue at the GitHub repo; the more, the merrier! 