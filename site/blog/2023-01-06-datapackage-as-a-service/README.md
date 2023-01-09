---
title: Frictionless Data last Community Call of the year 2022
date: 2023-01-06
tags: ['events', 'community-hangout']
category: events
image: /img/blog/Datapackage-service.png
description: At our last community call we discussed Data Packages as a service with Oleg Lavrovsky...
author: Sara Petti
---
On December 22<sup>nd</sup>, for our last community call of the year, we had a nice discussion with Oleg Lavrovsky, an old friend of Open Knowledge Foundation, board member of the Swiss chapter, and valued member of the Frictionless Data community, about Data Package as a Service.

Oleg together with Thorben Westerhuys (remember his [spatiotemporal covid 19 vaccination tracker he presented in March 2021](https://frictionlessdata.io/blog/2021/03/29/february-virtual-hangout/#a-recap-from-our-march-community-call)?) already made a first attempt at this in 2019, as you can see in this [GitHub repo here](https://github.com/datalets/daats). The repository works as a template to create a quick API around your Frictionless Data Package. This solution is based on the [Falcon micro framework](http://falconframework.org/) and the [Pandas Data Package Reader](https://github.com/rgieseke/pandas-datapackage-reader).

More recently Edgar Zanella from the Frictionless Data core team also worked on an [experimental solution](https://github.com/aivuk/datapackage-api), converting a Data Package to SQLite database and using [Datasette](https://datasette.io/) to have a [JSON API](https://github.com/aivuk/datapackage-api/) over the data. The advantage of this solution is that the way of querying the data is going to be familiar for those that knows [SQL](https://docs.datasette.io/en/stable/sql_queries.html).

Then in November 2022, during the GLAMhack 2022 in Mendrisio, an API for Frictionless Data Packages was needed again to be able to sort data and view it on a map. The end result was a [Living Herbarium app](https://hack.glam.opendata.ch/project/177).

So Oleg decided to pitch the idea of Frictionless Data Packages as services, as a challenge at the [DINAcon hacknights](https://hacknight.dinacon.ch/project/60) in Bern. The challenge was not picked by anyone at the hackathon itself, but it sparked a conversation [in our community chat](https://frictionlessdata.slack.com/archives/C0369JLDJ1Z/p1668597797541189). 

If you are also interested in joining the conversation, just get on the thread in the community chat. If you need a bit of context, you can of course rewatch Oleg’s presentation:

<iframe width="560" height="315" src="https://www.youtube.com/embed/n_neCrY02jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

It was also noted during the call that 2 other excellent ways to get a quick API for Frictionless Data Packages are:
* The [Flat Data project](https://githubnext.com/projects/flat-data), developed on top of an idea by Simon Willison, allows (among other things) to have a quick API for your Data Package.

* CKAN, since CKAN provides APIs. For example via [CKAN-embed](https://github.com/datalets/ckan-embed), a widget for embedding live data searches from CKAN data portals into external websites.

# Join us next month!
Next community call is on January 26<sup>th</sup> and we are going to hear about Frictionless Data and DCAT from Matteo Fortini.

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

And if you have a cool project that you would like to show to the community, please let us know! You can just fill out [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our community chat on [Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg) (also via [Matrix](https://matrix.to/#/#frictionlessdata:matrix.okfn.org)). See you there!

# Call Recording
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hmr18OhY578" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
