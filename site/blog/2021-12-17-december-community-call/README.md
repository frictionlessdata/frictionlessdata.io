---
title: Frictionless Data December 2021 Virtual Hangout
date: 2021-12-17
tags: ['events', 'community-hangout']
category: events
image: /img/blog/data-dag-blog.png
description: At our Frictionless Data community call we had Keith Hughitt presenting some ideas around representing data processing flows as a DAG inside of a datapackage.json...
author: Sara Petti
---
On the last Frictionless Data community call of the year, on December 16<sup>th</sup>, we had Keith Hughitt from the National Cancer Institute (NCI)  sharing (and demoing) his ideas around representing data processing flows as a DAG (Directed Acyclic Graph) inside of a datapackage.json, and tools for interacting with and visualizing such DAGs.

Keith started thinking about this when he realised that cleaning and processing data are not obvious processes, on the contrary, there is a lot of bias in them. The decisions made to clean the raw data are not generally included in the publications and are not made available in any transparent way. To allow collaboration and reproducibility, Keith thought of embedding and annotated data provenance DAG in a datapackage.json using the Frictionless specs.

The basic process Keith has in mind to solve this problem is:
* The data provenance is encoded as a DAG in the metadata
* For each step in processing the workflow, the previous DAG is copied and extended
* Each node of the DAG represents a dataset at a particular stage of processing, and it can be associated with annotations, views
* Datapackages would be generated and associated with each node
* Have a web UI that reads the metadata and renders the DAG.

If you would like to dive deeper and discover all about representing data processing flows as DAG inside of a Data Package, you can watch Keith Hughitt’s presentation here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pDpAuyTCvF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you find this idea interesting, come and talk to Keith on [Discord](https://discord.com/invite/j9DNFNw)! He would love to hear what you think and if you have other ideas in mind.

## Other agenda items from our hangout
We are part of the organisation of the [FOSDEM](https://fosdem.org/) Thematic Track *Open Research Tools & Technologies* this year too. We would love to have someone from the Frictionless community giving a talk. The deadline has been extended and you have time until December 23<sup>rd</sup> to submit a talk proposal! More info at [this page](https://fosdem.org/2022/news/2021-11-02-devroom-cfp/).

# Join us next month!
Next community call is next year, on January 21<sup>st</sup>. Francisco Alves, from the DPCKAN team who won the Frictionless Data hackathon back in October, is going to present their prototype and how it evolved.

You can sign up [here:](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link)

Do you want to share something with the community? Let us know when you sign up!

# Call recording:
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/FaWixB29SUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As usual, you can join us on [Discord](https://discord.com/invite/j9DNFNw) or [Twitter](https://twitter.com/frictionlessd8a) to say hi or ask any questions. See you there!
