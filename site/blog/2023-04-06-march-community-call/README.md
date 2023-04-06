---
title: Frictionless Data Community Call March 2023
date: 2023-04-06
tags: ['events', 'community-hangout']
category: events
image: /img/blog/Frictionless-new-CLI-commands.png
description: At our last community call Evgeny Karev presented the new Frictionless CLI commands and we talked with the community about project governance...
author: Sara Petti
---
At our last community call on March 30<sup>th</sup>, our very own Evgeny Karev - tech lead of the Frictionless Data project at [Open Knowledge Foundation](http://okfn.org/), presented the new Frictionless command line features. 

The new commands have been developed as part of the effort of building recommended data workflows for different needs, and might be particularly useful for data wrangling and data exploration. Here they are:

* **List** function is a new command to quickly see lists of resources in a dataset.
* **Describe**, an old command actually, but that can be part of the exploration workflow as it infers Table Schemas for all tabular resources.
* **Extract**, also an old command, can be used to understand what kind of data is in the table, and get a preview of it.
* **Explore**, to use in combination with [Visidata](https://www.visidata.org/) to edit tables directly in the command line.
* **Query** which will put a dataset into a SQLite database, with everything indexed, adding nice functionalities, like the possibility of saving queries as CSV files.
* **Script** is a feature that allows dataset indexing and will create Pandas dataframes for you.
* **Convert**, a work-in-progress command that can be used to convert from one format to the other, something that was historically done with the Extract function in the Framework.
* **Publish** is also a work-in-progress command, and you can use it to upload your dataset to a data portal (e.g. a CKAN instance) just providing an API key.

To better understand how you can use all these new commands, have a look at Evgeny’s presentation and demo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yNYAGMcAGl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Join us next month!
Next community call is on April 27<sup>th</sup>. Keith Hughitt will share with us his ideas on how to improve support for non-tabular data, a proposed abstract data model, and a specification for describing the relationship between datasets.

Do you have something you would like to present to the community at one of the upcoming calls? Let us know via [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our [community chat on Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg)(also accessible via a [Matrix bridge](https://matrix.to/#/#frictionlessdata:matrix.okfn.org) if you prefer to use an open protocol) .

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

# Call Recording
On a final note, here is the recording of the full call, including the short presentation and community discussion on the project governance:

<iframe width="560" height="315" src="https://www.youtube.com/embed/vgeXcDd5KEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
