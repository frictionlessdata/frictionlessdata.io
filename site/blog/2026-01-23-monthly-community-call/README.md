---
title: Frictionless Data Community Call January 2026
date: 2026-01-23
tags: ["events", "community-hangout"]
category: events
image: /img/blog/2026-01-23-FD-Community-call.png
description: At our last call we discussed the evolution of the Frictionless Data standards, ongoing software development, and real-world adoption across research domains.
---
The Frictionless Data Community Call was held on **23 January 2026** at 16:00 CET, bringing together contributors, maintainers, and new community members to discuss the evolution of the Frictionless Data standards, ongoing software development, and real-world adoption across research domains.

## Welcome and Introductions

The meeting opened with brief introductions from participants.

**Adam Shepherd**, Technical Director at the **Biological and Chemical Oceanography Data Management Office (BCO-DMO)** at WHOI, introduced himself alongside colleagues **Shravani Nagala** (Information Services, WHOI) and **Vimal Narepalepu** (BCO-DMO). The team shared their long-standing engagement with Frictionless Data, having explored its specifications and Python tooling since around 2014–2015 in the context of oceanographic data repositories. Shravani highlighted role as a software engineer working on infrastructure and cloud-based systems, with a strong interest in reproducible research and open data. 

**Keith Hughitt** shared that he first became aware of **Frictionless Data** through his work in bioinformatics, where he was exploring tools and standards that support reproducible research. He worked on the past 2017 to last year and then transitioned and joined a friend who started a company.

**Peter Desmet** works at **INBO** in Belgium. His team is providing software and helping researchers to publish data sets, and on the plans for this year related to frictionless data packages are, they work a lot in biodiversity informatics and the Global Biodiversity Information Facility, which is a huge database of observations, and they are going to adopt data package for publishing data to that platform and deriving data from that platform. He is also the maintainer of Camtrap DP, which is a standard to exchange camera trap data that is built on data packages, and this year they are planning to expand that to accommodate bioacoustics data. He is the co-maintainer of the frictionless R package and their plan for this year is to extend its functionality so it can read and write data package version 2.

**Caitlin Augustine**, from **Datakind**, a global nonprofit organization, focused on building digital public goods for social impact. Their team is interested to learn more about the climate-related efforts as Datakind is building, tooling in partnership with local governments in Kenya, bringing together climate and health data and looking to make that impactful.

## Progress on Data Package Version 2

A major portion of the call focused on progress around **Data Package version 2**. Peter explained how they are working on the frictionless R package and the frictionless Python package so that it can read data package version 2 and also write data package version 2 because currently the software can only do data package version 1 and there will be errors if we try to read a data set that is created in data package version 2 which is of course a big blocker for the adoption of the standards.

These efforts follow a high-scoring but unfunded European grant proposal, and the current contracts aim to deliver a baseline level of functionality rather than full implementation of every new v2 feature. They want to make sure that the current workflows that users have is not affected if they're happy with data package version one, that it's not converted to data package version two without them wanting this, especially since the software for data package version 2 is not.

Community members were encouraged to follow development on GitHub and to contribute feedback, particularly R users interested in applying Data Packages in their workflows.

## Why Frictionless Data Matters

One of the newer members has asked a question about the frictionless data package. He wanted to understand the frictionless community and was interested in how these standards help make shared data easier to understand and reuse, especially across the different teams and the domains and how they can use these frictionless standards in their work.

Peter outlined about Frictionless Data standards and how the data package can be used for any data whether governmental data or data from other organizations that needs to be shared openly. He explained that in the research community there's now this concept of FAIR to make data *Findable, Accessible, Interoperable, and Reusable* but in practice, this is mainly about the metadata about your data set so that metadata of one data set can easily be exchanged or be submitted to the same platform such as Zenodo etc. as metadata from another data set can talk to each other, so you know who are the contributors, what is the description, what is the license, so to make sure that that aspect is Findable, accessible, interoperable, and reusable.

Data Packages allow datasets—especially tabular data—to be described in a way that is both human- and machine-readable. Using Table Schema, communities can define fields, constraints, and expectations consistently, without reinventing the underlying structure each time. This enables validation, interoperability, and long-term reuse.

## About Darwin Core Data Package

The discussion highlighted how community-specific standards can build on the Generic Data Package framework. In biodiversity informatics, the long-established **Darwin Core** standard defines shared terms (such as scientific name, event date, and location), while **Darwin Core Data Packages** now use Frictionless Data as their foundation to describe more complex, multi-file datasets. Darwin Core standard is a standard that is over 15 years old and is community maintained by volunteers.

Peter discussed how the community is moving to Darwin Core data packages as the groundwork to express how the files should be organized, what the column headers are, and there's currently a huge public review underway to allow the community to provide feedback on that.

And the result will be that a Darwin Core data package will be a community-specific version of a generic data package with the big advantage that all software that is developed for data packages can be used for Darwin Core data packages.

## Getting Started with Frictionless Data Package

Peter explained to the beginner (who is new to the data package and standards) how they can adopt the standards and work with the csv data of 10 columns headers  for example and how they can define them to publish the dataset. The first step would be to have column headers that are understandable for an end user like readable names that somebody can understand. The next step would be to indicate in your metadata, these are my 10 column headers and these are the definitions for those and explaining what the units are. The data is then still not machine readable. It is usable for a human stumbling upon your data sets. And then the next thing would be, in addition to your CSV file, you add a data package JSON file. The dataset  is now readable for a human, but also readable for a machine. The frictionless software can be used to read the data set and to validate the data, for example, are all the data types that you say in your data packages actually, what I find in the data.

## How does data package version two differ from version one?

Peter described that the new data package version 2 has tried two things. Version one was not really defined as a version one, this is a data package, no chances of changing it whatsoever. For example if you have suggestions, there is no mechanism to incorporate this into the standards. But with version two, we now have a mechanism to make changes to the standard and also clearly indicate this is standard version 2, 2.1, 2.2, etc. and there are some critical things we wanted to fix which is try to, get rid of things that were a bit dubious as in not super well defined, and another thing was, there was a feature that people really wanted as in the fields that you define in your CSV file and the fields that you define in your data package.
They only want to define a subset that people can add their own things, so that there's a match between what you define in your data packages and in your CSV file that has been a long-standing request as well as a number of other requests that we try to tackle as many as possible from version one to version 2.

## Twofold benefit of using Frictionless data package

First, it enables data to be described in a standardized, community-adopted way rather than in an individual or ad hoc format.

Second, it provides an easy way to validate data, and that is what the Python package does very well. For example  if there's any row in a million row data set that is not following the specifications, it can automatically detect those.

## Challenges and Action Points

Following challenges have been discussed for consideration.

It is hard to get recognition for that work or to find funding for that work even though it could underpin a lot of other things and most of the work is happening within more dedicated communities rather than a more generic frictionless data community.

So, as a community they have to make conscious decisions and what they want to implement and support, for example, data packages as a generic standard  to describe a data set.

The work is in progress for data package version 2 yet because the Python package currently doesn't support that type of validation for data package version 2.

The suggestions have been provided to expand to describe other types of data besides tabular data but maintaining the standard and trying to maintain the software that is supporting the standard as well requires more contributions or interests, or everybody participating in this call is very useful.

## Community Updates and Closing

Towards the end of the call, **Lucas Pretti** from the Open Knowledge Foundation shared an update on an upcoming **Frictionless Data explainer video**, currently in script development. Community members were invited to participate in reviewing the script and contributing ideas.

Lucas also asked participants about plans for the upcoming **EU Open Source Week**.

The call concluded with appreciation for the active discussion and encouragement for continued community engagement. Participants highlighted the importance of growing adoption, contributing feedback, and supporting the ecosystem of tools that make Frictionless Data a practical and sustainable standard for open, reusable data.

## Call Recording

<iframe width="560" height="315" src="https://www.youtube.com/embed/7fPPCkreGF0?si=rAv42NFgjll3jLeK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
