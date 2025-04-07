---
title: Frictionless Summit
date: 2025-04-07
tags: ["events", "community-hangout"]
category: events
image: /img/blog/Frictionless-summit.png
description: On March 28th we hosted the first Frictionless Summit to bring together maintainers, users, and contributors to discuss challenges, priorities, and governance for the project moving forward.
---
On 28 March 2025 the Open Knowledge Foundation (OKFN) hosted a new iteration of [The Tech We Want initiative](https://okfn.org/en/events/the-tech-we-want-online-summit/) — an ambitious effort to reimagine how technology is built and used. The focus this time was the [Frictionless Data project](https://frictionlessdata.io/), an open source toolkit for making data management, data integration, data validation and data flows more FAIR (Findable, Accessible, Interoperable, Reusable). Frictionless has at its core the simple and extensible [Data Package standard](https://datapackage.org/) - which has been recently released in its [version 2](https://frictionlessdata.io/blog/2024/06/26/datapackage-v2-release/#so-what-is-new-in-version-2), and software implementations [in many programming languages](https://frictionlessdata.io/universe/#visual) which allow to describe, extract, validate, and transform data described and containerised according to the Data Package standard.

It’s been almost 2 decades since the project started, with the very first Data Package created back in November 2007, and the project has enormously evolved since. The Data Package update to v2 has inaugurated [a better and more explicit governance for the standard](https://datapackage.org/overview/governance/), and the core libraries have a notable community investment, with the R library curated and maintained by INBO, the Belgian [Research Institute for Nature and Forest](https://www.vlaanderen.be/inbo/en-gb/homepage/), and the Python library maintained by the French [multi.coop](https://www.multi.coop/). It was therefore the right time to convene maintainers, users, and contributors to celebrate the project in a Frictionless Summit, and discuss challenges, priorities, and governance for the project moving forward.

## Frictionless today
The Summit started with 7 presentations of amazing projects out there that use Frictionless. 

1. Pierre Camilleri from [multi.coop](https://www.multi.coop/) presented [Validata](https://validata.fr/) - a platform they developed which offers users the opportunity to check that their data complies with the national reference data schemas listed on [schema.data.gouv.fr](https://schema.data.gouv.fr/). Validata uses the validation function of the Frictionless Python library, and it validates against the Frictionless Tableschem used by schema.data.gouv.fr. 

2. Romina Colman from [OKFN](https://okfn.org/) presented [Open Data Editor](https://opendataeditor.okfn.org/) -  the Frictionless-based desktop application which offers data validation and publication to a non tech-audience. 

3. Peter Desmet from [INBO](https://www.vlaanderen.be/inbo/en-gb/homepage/) presented [Camtrap DP](https://camtrap-dp.tdwg.org/) - a data exchange format which extends the Data Package to allow users to easily exchange, harmonize and archive camera trap data at local to global scales. 

4. Nick Kellett from [Deploy Solutions](https://www.deploy.solutions/) presented one of their last prototypes: an app which allows people to calculate the risks linked to climate change to their assets, and what they can do to mitigate those risks. To standardise the data and metadata fields in their databases, Deploy Solution uses Frictionless schemas. 

5. Phil Schumm from the [University of Chicago](https://www.uchicago.edu/) presented some of the amazing work him and his team are doing with biomedical research data, to make the Data Package standard and Frictionless tools accessible to investigators working to follow [NIH](https://www.nih.gov/)'s Data Management and Sharing Policy. The policy heavily encourages FAIR data sharing and data sharing practices, which is why Frictionless is an ideal toolkit to use to comply with it. The [HEAL Data Platform](https://healdata.org/) that Phil and his team are building on top of [Gen3 Stack](https://gen3.org/), is currently using the Frictionless Table Schema and uses some of the Python library pipelines.

6. Adam Shepherd from [BCO-DMO](https://www.bco-dmo.org/) showed how they have integrated Frictionless in their data submission process, data curation, and data accessibility. Every time contributors submit a new dataset to BCO-DMO, an interface under the hood builds a Data Package for them. The data curation team then uses the Frictionless Data Pipeline to turn the submitted data into consistent and standardised datasets, while recording the cleaning steps for reproducibility purposes. 

     You can read more of how BCO-DMO uses Frictionless [in their blogs](https://blog.bco-dmo.org/tag.html#frictionlessdata). 

7. Ethan Welty from the [World Glacier Monitoring Service (WGMS)](https://wgms.ch/) talked about the comprehensive global glacier datasets they are curating. To ensure quality and reliability of the data they use the Frictionless standard and validation. Ethan gave us a demo of the [Validator](https://github.com/ezwelty/validator/) tool that he built on top of Frictionless to better handle the numerous tests he was running on the datasets.

## Frictionless tomorrow
Using the use-cases that were presented as a starting point, we then moved to a common reflection about the future of the project. Patricio del Boca, OKFN’s Tech Lead, briefly presented The Tech We Want initiative, in order to understand if the idea of simplifying technology in order to make it last (in the sense that less resources are needed to keep it running) is an approach that could be beneficial to the Frictionless project too. 

This idea resonated across the room. Pierre Camilleri highlighted the challenge of maintaining a codebase that has grown large and complex, especially with limited contributors. He suggested narrowing the scope and focusing on modularity—removing features that aren't widely used and concentrating efforts where they matter most. **“We need to strike a balance between having the flexibility to change things when it’s time, and refraining from changing things every time something isn’t perfect,”** he noted. 

The discussion focused on building a resilient core around the Data Package standard—something envisioned to last for 100 years—and minimizing dependencies to make that possible.

Peter echoed this by suggesting **a more focused scope around validation**, possibly reducing or even eliminating components related to data manipulation. The core idea is to simplify and solidify the foundational tools, leaving more domain-specific or experimental extensions to external efforts. 

The conversation also touched on expanding the standard thoughtfully. There were suggestions to include elements like units and taxonomy mapping layers—but with caution. While mappings and controlled vocabularies are helpful, they should remain optional and outside of the core standard to avoid locking the project into domain-specific use cases.

Though Data Package v2 has been [officially released for months](https://frictionlessdata.io/blog/2024/06/26/datapackage-v2-release/#so-what-is-new-in-version-2) now, much of the supporting software has yet to catch up. This underlines the urgency of deciding what parts of the ecosystem should be actively maintained and where to scale back. Phil Schumm advocated for maintaining one core library that is “very well thought through and well maintained,” which other libraries could then build upon —an approach mirrored by [Camtrap DP’s R library](https://inbo.github.io/camtrapdp/), which focuses tightly on reading, converting, validating, and writing.

Pierre had prepared some clustering of the features of the Python library, an excellent starting point to discuss the scope reduction. You’ll find Pierre’s clustering in [this GitHub discussion](https://github.com/frictionlessdata/frictionless-py/discussions/1723#discussioncomment-12653204)

The conversation then shifted toward **adoption and outreach**. The truth is, the more Frictionless is adopted the more it can rely on people to maintain things (e.g. [GBIF](https://www.gbif.org/) or [ROpenSci](https://ropensci.org/)) **How do we better communicate the value of Frictionless and its philosophy?** Steve Diggs challenged the group to think about who needs Data Package but doesn’t know it yet. There’s still a lot of self-imposed “friction” in the world of data sharing, and Frictionless offers a powerful antidote to that. From concerns about political shifts in data policy to data rescue scenarios during natural disasters, Frictionless was positioned as a way to preserve and democratize access to data.

This point struck a chord, especially when reflecting on real-world situations where data is hidden or duplicated in panic, rather than shared in accessible, structured formats. Frictionless could provide clarity and structure—“untangling the ball of string,” as Steve puit—even for those without deep domain expertise.

Finally, the group agreed with Phil, when he mentioned that growing adoption will require partnerships with overlapping communities—platforms like [OSF](https://osf.io/), standards groups, and data-sharing tools that already solve related problems. Rather than competing, **Frictionless should aim for interoperability, making it easier for users to switch between standards and tools. The key will be clearly demonstrating how Frictionless tools can help automate and simplify the messy business of data curation.**

## Conclusion
The community agreed to follow up on the two macro-topics that emerged with separate meetings, possibly building working groups around them:

* One for software simplification and core functionalities
* One for outreach and adoption

Join the [community chat on Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg) to know more about the meetings.

## Call recording

<iframe width="560" height="315" src="https://www.youtube.com/embed/lizmcrSHBhI?si=CVHPdemUW6EcV8tM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
