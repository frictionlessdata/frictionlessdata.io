---
title: "Tool Fund Grantee: Matt Thompson"
date: 2017-10-26  
tags: ["tool-fund"]
author: Matt Thompson
category: grantee-profiles
image: /img/blog/matt-thompson-image.png
github: https://github.com/cblop
twitter: https://twitter.com/_mthom
website: http://mthompson.org/
---

This grantee profile features Matt Thompson for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved.

<!-- more -->

My name is Matt Thompson, I am from Bristol, UK, and work as a lecturer in Creative Computing at Bath Spa University. I have been involved in the Clojure community for a while, running the [Bristol Clojurians group](https://bristolclojurians.github.io) since 2014. I was involved in the [DM4T project](http://www.cs.bath.ac.uk/dm4t/) during my postdoc at Bath University, where we used Frictionless Data software to create metadata for large datasets recording domestic energy usage.

We worked with Open Knowledge International’s Developer Advocate, Dan Fowler, on the DM4T project at Bath in a collaboration which turned into a soon-to-be-published pilot study for the project. [Dan showed us](https://github.com/frictionlessdata/pilot-dm4t) how the Frictionless Data software could allow us to quickly automate ways to annotate our datasets with metadata. We came away excited about the possibilities that the Frictionless Data software enable for the datasets we’re working with.

When the [call for applications](https://blog.okfn.org/2017/03/01/announcing-the-frictionless-data-tool-fund/) for Frictionless Data’s Tool Fund was made in May 2017, I was already building tools in Clojure for working with Frictionless Data as part of DM4T, and I decided to apply to enable me to flesh them out into well-tested, documented libraries.

The problem we had with the DM4T project is that the same kinds of data were being collected by many different projects run by different universities across the country. In addition to describing the energy usage of different appliances, the data also includes different types of readings as well (electric usage, gas usage, humidity levels, temperature readings, etc). Different projects store their data in different ways, with some using mySQL databases, and others using CSV tables. The Frictionless Data software allow us to create simple JSON files describing the metadata for each project in a uniform way that is easy for the collaborating researchers to understand and implement.

Once datasets are put into the public domain, it is extremely useful to also have the metadata that describe them. This would enable people to, for example, run queries across multiple datasets. One example in our case would be to ask: “What was the energy usage of all homes in Exeter for January 2014?”. This information would be contained in datasets that are curated by different people, and so we need uniform metadata in order to be able to make these kinds of queries.

We run Clojure events and workshops twice a month as part of the [Bristol Clojurians group](https://bristolclojurians.github.io), so interested people can drop in and discuss the work we’re doing with Frictionless Data. I’m also planning to give a talk about Frictionless Data at one of the Clojurian events.

You can follow the development of the Clojure libraries on the [Clojure Data Package library](https://github.com/frictionlessdata/datapackage-clj) and [Clojure Table Schema library](https://github.com/frictionlessdata/tableschema-clj) Github repositories.