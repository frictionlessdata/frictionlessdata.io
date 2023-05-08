---
title: Frictionless Data Community Call April 2023
date: 2023-05-08
tags: ['events', 'community-hangout']
category: events
image: /img/blog/Keith-community-call.png
description: At our last community call Keith Hughitt shared with the communities some ideas on how we can improve the support for non-tabular data...
author: Sara Petti
---
At our last community call on April 27<sup>th</sup> Keith Hughitt presented his ideas on how we can improve support for non-tabular data, and on how we could build a specification for describing the relationship between datasets. It took me some time to write this recap blog, because some of the reflections that Keith shared with us resonated very much with some of the thinking we have been doing at Open Knowledge Foundation around governance. I had explained during the [March community call](https://frictionlessdata.io/blog/2023/04/06/march-community-call/) that the governance of the specs has been recently unblocked, and we are starting to think about how to get to v2. It was actually Keith who urged me to do that presentation to clarify the project governance (and I am so glad he did!).

Keith’s main goals are pretty clear: 1. He wants datasets to be soft contained and well defined enough to be combinable with minimal effort. Datasets should function like lego blocks, which is the way Frictionless Data works too. 2. He wants transparency on how the data is processed and communicated, as this is key to reproducibility. 

At the moment the Frictionless Data specs have a strong focus on tabular data, and Keith would like to extend that same kind of support to other types of data as well. Having some kind of common spec would be very useful for all those who work with more than  one type of data, and he feels something can be done to make that work easier.

### So what does Keith have in mind?

He argues that we should separate the description of structure (data types) and domain (fields that are included in one discipline). This is easy to achieve because Frictionless is modular by design.

We should take some intentional action to design a high-level model, so that even if we leave it to community members to build domain-specific specs, the core Frictionless team at Open Knowledge Foundation would oversee that they all still have a common core data model which allows all the different extensions to interact easily. 

Keith suggests using a mix-in approach, where the domain-specific schema would be made by combining specs (data type/structure + data domain). This would make sense to avoid redundancy in the code structure.

It would be important to have a working group with representatives from different disciplines, and working in different capacities, to build together this common data model in a way that really fits the needs of everyone (or at least find some minimal common ground). This is exactly the direction we would like the project to move forward. We are working on it, so stay tuned!

Meanwhile, if you want to know more about Keith’s ideas, you can watch the recording of his presentation:

<iframe width="560" height="315" src="https://www.youtube.com/embed/UhRYtkYDHsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Join us next month!
Next community call is on May 27<sup>th</sup>.

Do you have something you would like to present to the community at one of the upcoming calls? Let us know via [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our [community chat on Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg)(also accessible via a [Matrix bridge](https://matrix.to/#/#frictionlessdata:matrix.okfn.org) if you prefer to use an open protocol) .

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

# Call Recording
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/qL3uBfer1sA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
