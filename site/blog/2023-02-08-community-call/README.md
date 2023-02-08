---
title: Frictionless Data Community Call January 2023
date: 2023-02-06
tags: ['events', 'community-hangout']
category: events
image: /img/blog/Frictionless-dcat-january-2023.png
description: At our last community call we discussed about DCAT and Frictionless Data with Matteo Fortini...
author: Sara Petti
---
At our last community call on January 26<sup>th</sup>, we had Matteo Fortini from the Italian National Department of Digital Transformation, who led a discussion about DCAT and Frictionless Data.

Open data is key to ensure transparency and accountability, understand the world, and have an economy of data. The open data publishing chain in Europe starts with distribution of datasets that go into a national catalogue, which is then harvested by an EU catalogue - all this enabled by metadata. 

In practice, Matteo and his colleagues would publish the data (e.g. on the Next Generation EU funds, or on the National Population Registry) as Frictionless Data with DCAT metadata, a format that is mandatory to get into the EU catalogue.

The data is gathered on GitHub (a CKAN instance is sadly not available yet) through scripts that are run everyday. The data is published in both CSV and JSON format, with foreign keys to other tabular data (e.g. geographical data for municipalities) and Frictionless metadata to have a standard way to document all the different attributes of the data, to enforce constraints, and ensure data quality in general. On top of that there is the Italian DCAT_AP, and the mandatory attributes for metadata.

While DCAT is very useful to understand the content, the themes, and the licences, Frictionless Data goes down to attribute descriptions, data types and constraints. So what Matteo would like to have in the future is one type of metadata that would cover both the data description and attributes, and the catalogue information.

Some efforts were already made in the past by community members Augusto Herrman and Ayrton Bourne to map data packages to DCAT (as documented in this [issue](https://github.com/frictionlessdata/frictionlessdata.io/issues/551)). Now Matteo and his colleagues are actively looking for other people who would be interested in creating a working group about this, to try to get to some kind of shared standard.

Other community members present at the call shared their own experience with Frictionless and DCAT:.

The German State of Schleswig - Holstein shared [a very interesting example](https://opendata.schleswig-holstein.de/dataset/marktplatz-autos-2023) from their portal. As they did not find a good way to attach the Frictionless Specification to the DCAT Distribution, they created a separate distribution for the Frictionless Tabular Data Resource. Switzerland took the same approach, linking the Frictionless Specification as a separate distribution, as you can see [in this example](https://opendata.swiss/de/dataset/vollzugsresultate-der-co2-emissionsvorschriften-fur-lieferwagen-und-leichte-sattelschlepper). They are unsure about this approach though, as it seems to be a misuse of the DCAT Class.

To make Frictionless Data more interoperable with other semantic web standards, Dan Feder pointed out the idea to create RDF or JSON-LD Specification, something that had already been discussed in the past, as documented in [this issue](https://github.com/frictionlessdata/specs/issues/218).

Do you have anything to add to this? Are you interested in joining the open discussion? Let us know in our community chat on [Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg) or [Matrix](https://matrix.to/#/#frictionlessdata:matrix.okfn.org).

If you want to know more about Matteo’s presentation, here’s the recording:

<iframe width="560" height="315" src="https://www.youtube.com/embed/sHHRT5ptqbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Join us next month!
Next community call is on February 23<sup>rd</sup> and we are going to hear about the database curation software for the World Glacier Monitoring Service (WGMS) from Ethan Welty.

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

And if you have a cool project that you would like to show to the community, please let us know! You can just fill out [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our community chat.

# Call Recording
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/DTykNylDdsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


