---
title: schema-collaboration Tool Fund
date: 2020-07-16
tags: ["tool-fund"]
category: grantee-profiles
image: /img/blog/fd_reproducible.png
description: This grantee profile features Carles Pina Estany for our series of Frictionless Data Tool Fund posts...
author: Carles Pina Estany
---

*This grantee profile features Carles Pina Estany for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved.*

## Meet Carles Pina Estany
I’m Carles and I’m currently working part-time for the [Swiss Polar Institute](https://swisspolar.ch/) as a software engineer. I'm not a scientist but I like working with scientists, for science institutions, in research, education and with free/open source software. You can read more about me on my website: [https://carles.pina.cat/](https://carles.pina.cat/). 

One of the tasks in the institute is to publish data and encourage researchers to provide detailed metadata. Often this metadata is written by researchers together with a data manager and without a tool in place to do this, it can become tricky to keep track of versions and progress. Frictionless Data schemas provide a model on which the metadata can be written to ensure it is machine-readable and standardised but completing the metadata in JSON files is not very user-friendly. My Tool Fund project, `schema-collaboration`, will help data managers and researchers collaborate easily to document data following the already-existing Frictionless Data schemas datapackage and tableschema.

## How did you first hear about Frictionless Data?
We have had Frictionless Data on our radar for about a year. [Lilly Winfree’s talk at FOSDEM 2020](https://fosdem.org/2020/schedule/event/open_research_frictionless_data/) gave us a good insight into how it could be used and we realised that it was a good fit. Recently we have been improving the way that we describe data for a collaborating organisation: Frictionless Data was a natural way to go and we started using it to describe all datasets. [create.frictionlessdata.io](https://create.frictionlessdata.io) was a good start for creating a first draft of the tableschema and datapackage but we missed a tool to collaborate with the researchers when describing a data set.

## What specific issues are you looking to address with the Tool Fund?
Collaboration between data managers and researchers needs to be as easy as possible for both sides. Currently there is no tool to collaboratively document tabular data and data packages easily. Using this tool the researcher will be able to enter the information in a controlled manner and the data manager will be able to give feedback on what’s missing or what needs to be changed through a common platform.

Hopefully this will lead to more productive use of time for both sides and having the data described with machine-readable Frictionless Data schemas will make it easier to validate, reuse and have consistent documentation. The tool will be based on [datapackage-ui](https://github.com/frictionlessdata/datapackage-ui) for the frontend, allowing all those involved to collaborate on the metadata through a user-friendly UI. Django will be used for the backend and Docker will be used for installation and deployments.

## How can the open data, open source, or open science communities engage with the work you are doing?
This project will be based on [datapackage-ui](https://github.com/frictionlessdata/datapackage-ui) so using this tool and opening and fixing issues would be useful contributions to the project.

Feel free to submit issues, ideas and PR on the Github repository [schema-collaboration](https://github.com/frictionlessdata/schema-collaboration) or [Discord](https://discord.com/invite/j9DNFNw) and test the project on the staging deployment when available.