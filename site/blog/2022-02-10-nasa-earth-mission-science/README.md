---
title: Frictionless response to NASA Earth mission science data processing
date: 2022-02-10
tags: ["news"]
category: news
image: /img/blog/eclipse_epc.png
description: Why Frictionless Data would benefit the ESO mission science data processing in its effort to find a more integrated approach to enhance data architecture efficiency and promote the open science principles...
author: Lilly Winfree & Sara Petti
---
We are very excited to announce that we responded to a [request for information](https://sam.gov/opp/869f4051df38475591fa48fce5b0868d/view) that was recently published by NASA for its [Earth System Observatory (ESO)](https://science.nasa.gov/earth-science/earth-system-observatory).

What is ESO? It is a set of (mainly satellite) missions providing information on planet Earth, which can guide efforts related to climate change, natural hazard mitigation, fighting forest fires, and improving real-time agricultural processes. 

With this request for information, ESO wants to gather expert advice on ways to find a more integrated approach to enhance data architecture efficiency and promote the open science principles.

**We believe Frictionless Data would benefit the mission science data processing in several ways.** Here’s how:

First, Frictionless automatically infers metadata and schemas from a data file, and allows users to edit that information. Creating good metadata is vital for downstream data users – if you can’t understand the data, you can’t use it (or can’t *easily* use it). Similarly, having a data schema is useful for interoperability, promoting the usefulness of datasets. 

The second Frictionless function we think will be helpful is data validation. Frictionless validates both the structure and content of a dataset, using built-in and custom checks. For instance, Frictionless will check for missing values, incorrect data types, or other constraints (e.g. temperature data points that exceed a certain threshold). If any errors are detected, Frictionless will generate a report for the user detailing the error so the user can fix the data during processing. 

Finally, users can write reproducible data transformation pipelines with Frictionless. Writing declarative transform pipelines allows humans and machines to understand the data cleaning steps and repeat those processes if needed in the future. Collectively, these functions create well documented, high quality, clean data that can then be used in further downstream analysis.

We provided them with two examples of relevant collaboration:

### Use Case 1

The [Biological and Chemical Oceanography Data Management Office (BCO-DMO)](https://www.bco-dmo.org/) cleans and hosts a wide variety of open oceanography data sets for use by researchers. A main problem for them was data being submitted to them was messy and not standardized, and it was time consuming and difficult for their data managers to clean in a reproducible, documented way. They implemented Frictionless code to create a new data transformation pipeline that ingests the messy data, performs defined cleaning/transforming steps, documents those steps, and produces a cleaned, standardized dataset. It also produces a (human and machine-readable) document detailing all the transformation steps so that downstream users could understand what happened to the data and undo/repeat if necessary. This process not only helps data managers clean data faster and more efficiently, it also drives open science by making the hosted data more understandable and usable while preserving provenance.

More info on this use case [here](https://frictionlessdata.io/blog/2020/02/10/frictionless-data-pipelines-for-open-ocean/).

### Use Case 2 

[Dryad](https://datadryad.org/stash) is a biological data repository with a large user base. In our collaboration, their main issue was that they do not have the people-power to curate all the submitted datasets, so they implemented Frictionless tooling to help data submitters curate their data as they submit it. When data is submitted on the Dryad platform, Frictionless performs validation checks, and generates a report if any errors are found. The data submitter can then fix that error (e.g. there are no headers in row 1) and resubmit. Creating easy-to-understand error reports helps submitters understand how to create more useable, standardized data, and also frees up valuable time for the Dryad data management team. Ultimately, now the Dryad data repository hosts higher quality open science data.

More info on this use case [here](https://frictionlessdata.io/blog/2021/08/09/dryad-pilot/).

***

 Are there other ways you think Frictionless Data could help the ESO project? Let us know!
 
*Image used: Antarctica Eclipsed. NASA image courtesy of the DSCOVR EPIC team. NASA Earth Observatory images by Joshua Stevens, using Landsat data from the U.S. Geological Survey. Story by Sara E. Pratt.*
