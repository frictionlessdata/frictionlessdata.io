---
title: Data Package version 2.0 is out!
date: 2024-06-26
tags: ["news"]
category: news
image: /img/blog/DP-release.png
description: We are very excited to announce the release of Data Package v2
author: Sara Petti
---
We are very excited to announce the release of the version 2.0 of Data Package (previously known as Frictionless Specs). Thanks to the generous support of [NLnet](https://nlnet.nl/) from November last year we were able to [focus on reviewing Data Package](https://frictionlessdata.io/blog/2023/11/15/frictionless-specs-update/#additional-deliverables) in order to include features that were often requested throughout the years and improve extensibility for domain-specific implementations. 

Data Package is a standard for data containerisation, which consists of a set of simple yet extensible specifications to describe datasets, data files and tabular data. It is a data definition language (DDL) and data API that enhances data FAIRness (findability, accessibility, interoperability, and reusability). Since the last releases of Data Package and all its components, the community had requested a few features throught the years that would improve the standard support for specific data types and simplify the extensions. Some of the Internet requirements also have evolved meanwhile. We therefore used [the issues that had accumulated in the GitHub repository](https://github.com/frictionlessdata/datapackage/issues) to build our Roadmap.

In parallel we assembled an outstanding Data Package Working Group composed of experts from the community. We carefully selected a diverse group of people who could bring to the discussion table different use-cases, formats, and data types that we would need the Standard to support, and crafted together with them [a governance model](https://datapackage.org/overview/governance/) that is explicit, in order to create an environment that adequately supports new contributions and ensures project sustainability.

We would like to thank each one of them for their remarkable contribution and for the incredibly insightful conversations we had during these months. Thank you to my colleague Evgeny Karev, Peter Desmet from the [Research Institute for Nature and Forest (INBO)](https://www.vlaanderen.be/inbo/en-gb/homepage/), Phil Schumm from [CTDS - University of Chicago](https://ctds.uchicago.edu/), Kyle Husmann from the [PennState University](https://www.psu.edu/), Keith Hughitt  from the [National Institutes of Health](https://www.nih.gov/), Jakob Voß from the [Verbundzentrale des GBV (VZG)](https://www.gbv.de/), Ethan Welty from the [World Glacier Monitoring Service](https://wgms.ch/), Paul Walsh from [Link Digital](https://linkdigital.com.au/), Pieter Huybrechts from the [Research Institute for Nature and Forest (INBO)](https://www.vlaanderen.be/inbo/en-gb/homepage/), Martin Durant from [Anaconda, inc.](https://www.anaconda.com/), Adam Kariv from [The Public Knowledge Workshop](https://www.hasadna.org.il/), Johan Richer from [Multi](https://www.multi.coop/?locale=fr), and Stephen Diggs from the [University of California Digital Library](https://cdlib.org/). 

If you are curious about the conversations we had during the Standard review,they were all captured (and recorded) in [the blog summaries of the community calls](https://frictionlessdata.io/blog/). Alternatively you can also check out the [closed issues on GitHub](https://github.com/frictionlessdata/datapackage/milestone/6?closed=1). 

## So what is new in version 2?

During these months we have been working on the core specifications that compose the Standard, namely: [Data Package](https://datapackage.org/standard/data-package/) – a simple container format for describing a coherent collection of data in a single ‘package’, [Data Resource](https://datapackage.org/standard/data-resource/) to describe and package a single data resource, [Table Dialect](https://datapackage.org/standard/table-dialect/) to describe how tabular data is stored in a file, and [Table Schema](https://datapackage.org/standard/table-schema/) to declare a schema for tabular data.

During the update process we tried to be as little disruptive as possible, avoiding breaking changes when possible. 

We put a lot of effort into removing ambiguity, cutting or clarifying under-defined features, and promoting some well-oiled [recipes](https://datapackage.org/recipes/caching-of-resources/) into the Standard itself. An example of a recipe (or pattern, as they were called in v1) that has been promoted to the Standard is the [Missing values per field
one](https://specs.frictionlessdata.io/patterns/#missing-values-per-field).

Among other things, we added versioning, to ensure consistency and reliability over time, and support for categorical data.

If you are curious and would like to know more details about what changes with version 2, go and have a look at the [Changelog](https://datapackage.org/overview/changelog/) we published.

To increase and facilitate adoption, we published a [metadata mapper written in Python](https://github.com/frictionlessdata/dplib-py). We have also worked on Data Package integrations for the most notable open data portals out there. Many people from the community use Zenodo, so we definitely wanted to target that. As they are moving their system to [Invenio RDM](https://inveniordm.web.cern.ch/), we proposed a Data Package serializer to the project. We also created a pull request that exposes `datapackage.json` as a metadata export target in the [Open Science Framework](https://www.cos.io/) system, and built an extension that adds a `datapackage.json` endpoint to every dataset in [CKAN](https://github.com/frictionlessdata/ckanext-datapackage).

If you want to know more about how to coordinate a standard update, we shared our main takeaways at FOSDEM 2024. The presentation was recorded, and you can watch it [here](https://fosdem.org/2024/schedule/event/fosdem-2024-3109-updating-open-data-standards/).

## And what happens now?

While the work on Data Package 2.0 is done (for now!), we will keep working on the [Data Package website and documentation](https://datapackage.org/) together with the working group, to make it as clear and straightforward as possible for newcomers. In parallel, we will also start integrating the version 2 changes in the [software implementations](https://frictionlessdata.io/universe/). 

Would you like to contribute? We always welcome new people to the project! Go and have a look at our [Contribution page](https://frictionlessdata.io/work-with-us/contribute/) to understand the general guideline. Please get in touch with us by joining [our community chat on Slack](https://frictionlessdata.io/development/roadmap/) (also accessible via [Matrix](https://matrix.to/#/#frictionlessdata:matrix.okfn.org)), or feel free to jump in any of [the discussions on GitHub](https://github.com/frictionlessdata/datapackage/issues).

 ## Funding

This project was funded through [NGI0 Entrust](https://nlnet.nl/entrust), a fund established by [NLnet](https://nlnet.nl) with financial support from the European Commission's [Next Generation Internet](https://ngi.eu) program. Learn more at the [NLnet project page](https://nlnet.nl/project/FrictionlessStandards/).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLnet foundation logo" width="20%" />](https://nlnet.nl)
[<img src="https://nlnet.nl/image/logos/NGI0_tag.svg" alt="NGI Zero Logo" width="20%" />](https://nlnet.nl/entrust)
