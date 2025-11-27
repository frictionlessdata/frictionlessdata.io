---
title: Frictionless Data Community Call November 2025
date: 2025-11-21
tags: ["events", "community-hangout"]
category: events
image: /img/blog/Community-call-Nov-25.png
description: At our last call we discussed the Zenodo Integration of the Data Package and an Action Plan for the community reactivation in 2026.
---
Our Frictionless community call took place on November 21st, 2025 at 04:00 pm CET.

We started the meeting with introduction of the New Community Manager, Renu Kumari (myself) from India alongwith the members of data package working groups.

The people participated in the meetings were:

* Renu Kumari, Open Science Fellow, Community Manager, Frictionless Data 
* Evgeny Karev (Datist, developer of Frictionless at OKFN for many years)
* Peter Desmet (Research Institute for Nature and Forest (INBO))
* Ethan Welty (World Glacier Monitoring Service (WGMS))
* Amber York (BCO-DMO)
* Lucas Pretti (Communications, Institutional Relations and Advocacy Director, Open Knowledge Foundation)
* Oleg Lavrovsky, Opendata.ch
* Nikesh Balami, Open Knowledge Nepal
* Renata Avila, (CEO Open Knowledge Foundation)
* Patricio Del Boca, Tech Lead and Open Activist, OKFN

## Introduction

1. Renu Kumari, new community manager, Frictionless Data, is a Ph.D. in Biotechnology and working as program manager with #semanticClimate, New Delhi, India. She joined the OKF as Open Science Fellow in September 2025.

2. Evgeny Karev (Datist, lead developer of Frictionless at OKFN for many years)

3. Ethan Welty, database manager of the World Glacier Monitoring Service (WGMS), in Zurich, Switzerland. He has been making use of or extending frictionless tools with the data package standard and also  involved in the version two data package specification. 

4. Peter Desmet, works at INBO, Belgium.  He is working with biodiversity data, and also involved in data package, version 2. He is maintaining the R package called Frictionless to read and add resources and write data packages and have applied data package standards to biodiversity data of camera traps. Peter has also briefly talked about another important standard used in biodiversity data called Darwin Core Data Package.

5. Amber York, works at BCO-DMO, the Biological and Chemical Oceanography Data Management Office, who work primarily with NSF funded oceanography data, to make it well described, interoperable, fair, and free. Her team is making a new architecture for streamlining archival packages which is relying heavily on data packages standard.

6. Oleg Lavrovsky is from Switzerland, working with the Swiss chapter of Open Knowledge called Opendata.ch for a few years and developed tools that are based on data packages, especially in the, kind of activist domain of crowdsourcing data through datathons and hackathons, as well as through geographic information systems.

7. Nikesh Balami leads Open Knowledge Nepal. He is an open data advocate and tech researcher based in Nepal.

## Zenodo Integration of the Data Package

The announcement for the Zenodo integration of the Data package was made by Evgeny Karev  in the meeting. Zenodo integration will reduce the need for multiple libraries or custom support tools as it has a Data Package export option.

He discussed the best way to grow the data package format as a kind of new unified data exchange format is working with data portals because, having support for each data portal just reduces the need of having support like each and every library, people maintain white fiction. Zenodo has 12 export formats, it supports rich metadata and tables.
 
Peter Desmet gave inputs of a few points. One of the important things to realize is that it exports the metadata that you have in Zenodo in the data package format, and it also lists the files that are included. So in that sense it is a bit similar to the Zenodo API but in data package format, but it does not express any schemas about the files.

They discussed the different aspects of the integrating data package to Zenodo for easy access by the non-technical group of people. The members  have also raised what's the most flexible and maybe easy way to publish data. They supported inclusion of tabular schemas for richer export.

An example of a custom integration: [https://github.com/mjacqu/glenglat](https://github.com/mjacqu/glenglat) (publishes to [https://zenodo.org/records/15005624](https://zenodo.org/records/15005624) using [https://github.com/mjacqu/glenglat/blob/main/zenodo.py](https://github.com/mjacqu/glenglat/blob/main/zenodo.py))
Open Data Editor (e.g. [openeconomics](https://openeconomics.zbw.eu/en/2025/04/check-and-improve-data-quality-with-the-open-data-editor-no-programming-knowledge-is-needed/))

## Suggestions from the team

Ethan Welty suggested an option which is curating tabular data on all of their repositories. It's an enormous data repository, focusing in the natural sciences.

Amber York talked about what's really important for data reuse and suggested to include some more of the schema in there, especially places to put important metadata, like for tabular at least, like descriptions of what, what's in there, like the column descriptions, units etc. And in generalist repositories, that's often a big barrier that kind of information doesn't always make it in with the data, and it's a barrier to reuse.

The conclusion summary of the discussion is that the export includes Zenodo’s metadata and the list of files but does not include table schemas or detailed tabular information.Team suggested the next step is enabling structured schemas, especially for tabular datasets which will support improved data reuse.

## Frictionless Community in 2026

Renata Avila briefly highlighted the Frictionless tomorrow to the working group. What are the plans for the implementation in the year 2026. She mentioned three things.

**1. Reactivate the community:**

* Establish a more structured and consistent meeting format.

* Continue meetings regularly, likely in a lighter format than today.

* Include a short presentation by someone in each meeting.

* Share a roundup of current opportunities.

* Discuss technical updates or comments.

* Cover any other business, events, or announcements.

**2. Updating Videos**

* Few videos will be updated for providing information about the software. 
* A simple updated video on what frictionless is.
* About the Open Data Editor 
* Updating collaborations on the website for  true representation of the community 

**3. Submitting Application of  frictionless data**

* The process is going on to submit an application of frictionless data as a whole thing in Digital Public Goods, Brasilia.  

She also made an announcement of  the Open Technologies Research Network in a partnership with [Open Source Initiative](https://www.linkedin.com/company/open-source-initiative-osi-/) (OSI) and [Open Forum Europe](https://www.linkedin.com/company/openforum-europe/) and part of this alliance will be to launch a stream, hopefully of both funding and research on the data of open technologies and the data component of open technologies.

Lucas Pretti shared the glimpse of a short video for Open Data Editor and Frictionless Data package to capture the new talent, and to bring more people in the community. This will be launched and released at the DPG Fair in Brasília.

## Updates on software development

Peter highlighted the points towards software development. They have submitted a funding application for the Frictionless Science this year with Amber and Ethan. The goals of that project were to support science or fair science more with data packages and the component was to write a scientific paper about the data package standard and why it can be used for science.

They will update the Python and R packages to make use of data package version 2, so that it has more outreach to the scientific community because of the faster validation of the data sets. He described that not all features of version two, for example, the schema match or other things will be implemented. The emphasis was given to writing scientific paper for a huge impact on the scientific community.

## Action Plan

The community suggested the following points need to be focussed in the coming year 2026.

1. They suggested removing old websites or at least redirecting the URLs to the new things that can be controlled by Open Knowledge Foundation.

2. Updating the documentation as there's lots of variation in how the specification is written and some of the definitions also need to be updated.

3. Peter is going to focus on getting the software up to the current version of the standards.

## Call Recording

<iframe width="560" height="315" src="https://www.youtube.com/embed/YdCSFDr3Z40?si=nCbtmwpUcBJQpH6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
