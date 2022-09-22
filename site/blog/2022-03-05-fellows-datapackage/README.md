---
title: Why is it important to package data?
date: 2022-03-05
tags: ['fellows']
category:
image: /img/standards/data-package.png
description: As part of their training, we asked the 3rd cohort of Frictionless Fellows to package their research data in Frictionless Data Packages...
author: Sara Petti
---
With the Frictionless Data Reproducible Research Fellows Programme, supported by the Sloan Foundation and Open Knowledge Foundation, we are recruiting and training early career researchers to become champions of the Frictionless Data tools and approaches in their field. Fellows learn about Frictionless Data, including how to use Frictionless tools in their domains to improve reproducible research workflows, and how to advocate for open science.

As part of their training, we asked the 3rd cohort of Frictionless Fellows to package their research data in Frictionless [Data Packages](https://specs.frictionlessdata.io/data-package/). Here’s what they reported on their experience:

## Victoria
Constantly under the impression that I’m six months behind on lab work, I am capital Q - Queen - of bad data practices. My computer is a graveyard of poorly labeled .csv files, featuring illustrative headers such as “redo,” “negative pressure why?” and “weird - see notes.” I was vaguely aware of the existence of data packages, but like learning Italian or traveling more, implementing them in my workflow got slotted in the category of “would be nice if I had the time.” That clemency, however, was not extended to my research lifeblood - molecular spectroscopy databases, you disorganised beauties you - nor to collaborators who often invoked the following feeling:

![fellows-img-1](https://user-images.githubusercontent.com/74717970/191775957-4971c845-c9fe-498a-8906-97aeb4428202.png)

Particularly in fields where measurables aren’t tangible macro concepts (see: population) but abstract and insular conventions with many varied representations, clear descriptors of multivariate data are a must in order for that data to be easily used and reproduced. This is where data packages come in; they bundle up your data with a human and machine readable file containing, at minimum, standardised information regarding structure and contents. In this lil’ post here, we’re going to walk through this process together by packaging data together with its metadata, and then validating the data using Frictionless tools.

Keep on reading about Victoria’s experience packaging data in her blog [here](https://fellows.frictionlessdata.io/blog/victoria-datapackage-blog/).

## Lindsay
The first tenet of the American Library Association’s Bill of Rights states: “Books and other library resources should be provided for the interest, information, and enlightenment of all people of the community the library serves” (American Library Association). Libraries are supposed to be for everyone. Unfortunately, like many other institutions, libraries were founded upon outdated and racist patriarchal heteronormative ideals that ostracise users from marginalized backgrounds. Most academic libraries in the United States use the Library of Congress Classification System to organize books, a system that inadvertently centers christian, heterosexual white males. Critical librarianship, or critical cataloging is “a movement of library workers dedicated to bringing social justice principles into our work in libraries” [critlib](http://critlib.org/about/). I would like to use data science principles to explore bias in library MARC (machine readable catalog) records.

Read Lindsay’s Data Package blog [here](https://fellows.frictionlessdata.io/blog/lindsay-datapackage-blog/).

## Zarena
As a social science researcher studying the research landscape in Central Asian countries, I decided to share a part of my dataset with key bibliometric information about the journal articles published by Kyrgyzstani authors between 1991-2021. The data I am going to share comes from the [Lens](https://www.lens.org/) platform. To ensure the data quality, and to comply with the [FAIR principles](https://howtofair.dk/what-is-fair/#fair-principles), before sharing my data, I created a data package that consists of the cleaned raw data, [metadata](https://specs.frictionlessdata.io/data-resource/#metadata-properties), and [schema](https://specs.frictionlessdata.io/table-schema/#language).

I tested two methods to create such a package. First, I tried to use the [data package programming libraries](https://framework.frictionlessdata.io/). This method lets you do more than just to create a data package (e.g., describe, extract, transform, and validate your data). But I found the programming libraries a bit complicated. So, I ended up using the second method, that is the browser tool [Frictionless Data Package Creator](https://create.frictionlessdata.io/). It lets you create a data package without ay technical knowledge. The tool is comparatively simple and easy to navigate. It allows you to clean your dataset, change datatypes, provide a short description to your data as well as to add and edit associated metadata…

Keep on reading about how Zarena packaged here data in her blog [here](https://fellows.frictionlessdata.io/blog/zarena-datapackage-blog/).

## Kevin
My research aims at understanding the transmission mechanisms of neglected vector-borne diseases. I mostly deal with data on the distribution and diversity of vectors of diseases and their infection status. The metadata would include but not be limited to the date of sample collection, location and GPS coordinates of the sites of sample collection, type of sample (blood or fly sample), the concentration of RNA or DNA extracted from the samples, and the infection status of the samples (whether the samples are infected with pathogens or not) as well as the blood meal sources of the insect vectors. All these datasets are supposed to be presented in a way that it can be understood by whoever accesses it and that information regarding the licensing and other attribution information can easily be accessed. One way to reduce friction when dealing with such huge datasets is to put them in a container that groups all the descriptive data and schema together. A schema tells us how the data is structured and the type of content that is expected in it. All this is contained in a data package that can be generated by a data package creator.

I am going to take you through a step by step process on how I created a data package for my dataset on sandflies diversity, infection status, and their blood-meal sources, using Frictionless Data Package Creator…

Read Kevin’s blog [here](https://fellows.frictionlessdata.io/blog/kk-datapackage-blog/) to know more about how he created data packages for his data.

## Guo Qiang
The dataset I am going to package is from a project which we have recently completed – “[Menopausal hormone therapy and women’s health: An umbrella review](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003731)” which summarizes the clinical evidence on various health effects of menopausal hormone therapy in menopausal women. The full datasets are publicly available in the [Open Science Framework](https://osf.io/dsy37/). I am going to use one of the datasets –All-Cause Mortality.xlsx, which summarizes all the clinical trials published until 2017 investigating the effect of menopausal hormone therapy on all-cause mortality in menopausal women – to illustrate the process of creating a Data Package. 

As the Data Package Creator currently accepts only .csv format, first I need to convert All-Cause Mortality.xlsx to .csv format…

Keep on reading about Guo Qiang’s experience of packaging is data in his blog [here](https://fellows.frictionlessdata.io/blog/guo-qiang-datapackage-blog/).

## Melvin
Being a soil science student, I felt using soil data would be useful for me to better understand this process of packaging data for future use. I got data on the impact of fertiliser recommendations on yield and felt it would be great to use it. However, this wasn’t such a good idea as I got so many error messages and clean-ups to do to suit the tabular data accepted by the data package creator (create.frictionlessdata.io). Similarly in case you want to create a data package using someone else's data it should either have a licence or ask to use the data.Afterwards, I got around to working with a different data set that was more straightforward and easy to work with.The data was on the infection prevalence of ‘Ca. Anaplasma camelii’ in camels and camel keds evaluated in different seasons within a year…

To read about the errors that Melvin got and what she learned from them, read her blog [here](https://fellows.frictionlessdata.io/blog/melvin-datapackage-blog/).

-------

You can read all the Frictionless Data Fellows' blogs on the dedicated website: https://fellows.frictionlessdata.io/
