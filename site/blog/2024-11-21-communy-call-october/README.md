---
title: Frictionless Data Community Call October 2024
date: 2024-11-21
tags: ["events", "community-hangout"]
category: events
image: /img/blog/community-call-october-2024.png
description: At our last call Keith Hughitt shared some ideas to improve the project....
author: Sara Petti
---
On our last community call on October 31<sup>st</sup> Keith Hughitt, Postdoctoral fellow at National Institutes of Health shared some ideas for project improvement.

Keith had already shared some thoughts in this direction in [another community call, in April 2023](https://frictionlessdata.io/blog/2023/05/08/april-community-call/), and this presentation was actually a continuation of the ideas that he had shared then. 

The first thing to focus on is motivation, and trying to identify what is the future we are all imagining for the project. Keith’s vision is that we should encourage having many more specialised Data Package extensions (like the [Cameratrap DP](https://camtrap-dp.tdwg.org/) developed by Peter Desmet). We need to think about an organisational structure that can support that grassroot approach, while at the same time avoiding duplication and approaches that differ too much.

As he already shared in the call last year, Keith also believes we should start thinking about extending the support to other data types beyond tabular data. Would we encounter any issue if we tried to adapt the standard and libraries as they are now to work with other data types (e.g. image, audio, geospatial, spectral…)? Would there be any problem in using the [Frictionless Python Framework](https://framework.frictionlessdata.io/) with other types of data, for example? Keith tried the `describe` function on genomic datasets (data type: matrix) and it works, but the result is not optimal.

The key would therefore be to work on domain-specific extensions. We do have an [extension mechanism](https://datapackage.org/standard/extensions/), which works quite well, so how can we make this happen? Keith suggested that we have smaller groups convening monthly to discuss and plan domain-specific standards, while meeting collectively every quarter (or so) to share progress and coordinate on areas where there is overlap. This should address the challenge that may arise with growth and coordination.

Here’s a couple of things the domain-specific groups will need  to consider: 
* Pick a name for the collection of standards/specs related to a specific domain (e.g. bio), 
* Decide what kind of data types they want to cover 
* Clearly define what is the data structure 
* Take into consideration what is being already used (in terms, for example, of ontologies and controlled vocabularies)

To help us approaching abstractly how we want to handle data, Keith shared a paper by Sandborn et al. (Beyond Euclid: An Illustrated Guide to Modern Machine Learning with Geometric, Topological, and Algebraic Structures, https://doi.org/10.48550/arXiv.2407.09468), which describes different types of data from an abstract point of view (not exhaustive, but it still covers quite a wide range of data types). 

Keith also mentioned it would be interesting to create a community repository / an open source server where people could host their Data Packages. The server could provide an API to query the deposited Data Packages. Creating a CLI to interact with people’s local data and query and retrieve data from remote repositories (giving of course the user the possibility to enable or disable the search and or specify the search order). If you are interested in building a common API, you can get in touch with Keith on the community chat.

# Join us in November!
Next community call is on November 28<sup>th</sup>. Product Owner Romina Colman will be presenting the Frictionless application Open Data Editor. 

Do you have something you would like to present to the community at one of the upcoming calls? Let us know via [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our [community chat on Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg) (also accessible via a [Matrix bridge](https://matrix.to/#/#frictionlessdata:matrix.okfn.org) if you prefer to use an open protocol).

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

# Call Recording
Here is the recording of the full call:
<iframe width="560" height="315" src="https://www.youtube.com/embed/NHKAC0yXjOE?si=wTC1LJLTrNJeBrSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
