---
title: Frictionless Data November 2021 Virtual Hangout
date: 2021-11-23
tags: ['events', 'community-hangout']
category: events
image: /img/blog/November-community-call.png
description: At our Frictionless Data community call we had Peter Desmet presenting Frictionless Data exchange format for camera trapping data...
author: Sara Petti
---
On our last Frictionless Data community call on November 18<sup>th</sup> we had Peter Desmet from the Research Institute for Nature and Forest (INBO) giving a presentation on Frictionless Data exchange format for camera trapping data. 

Camera trapping is a non-invasive wildlife monitoring technique generating more and more data in the last few years. Darwin Core, a well established standard in the biodiversity field, does not capture the full scope of camera trapping data (e.g. it does not express your camera setup) and it is therefore not ideal. To tackle this problem, the camera trapped data package was developed, using Frictionless Data standards. The camera trapped data package is both a **model** and a **format** to exchange camera trapping data, and it is designed to capture all the essential data and metadata of camera trap studies.

The camera trap data package model includes:
* Metadata about the project
* Deployments info about the location, the camera and the time
* Media including the file url, the timestamp and if it is a sequence
* Observation about the file (Is it blank? What kind of animal can we see? etc....)

The format is similar to a Frictionless Data data package. It includes: **metadata** about the project and the data package structure, **csv files** for the deployments, the media captured in the deployments, and the observations in those media.

If you would like to dive deeper and discover all about the Frictionless Data exchange format for camera trapping data, you can watch Peter Desmet’s presentation here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pi_kbQ_KYiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also find Peter’s presentation deck [here](https://speakerdeck.com/peterdesmet/camtrap-dp-using-frictionless-standards-for-a-camera-trapping-data-exchange-format).

## Other agenda items from our hangout
We are part of the organisation of the FOSDEM DevRoom Open Research Tools & Technologies this year too. We would love to have someone from the Frictionless community giving a talk. If you are interested please let us know! We are very happy to help you structure your idea, if needed. Calls for participation will be issued soon. Keep an eye on [this page](https://fosdem.org/2022/news/2021-11-02-devroom-cfp/).

# Join us next month!
Next community call is one week earlier than usual, on December 16<sup>th</sup>, because of the Winter holidays. Keith Hughitt is going to present some ideas around representing data processing flows as a DAG inside of a datapackage.json, and tools for interacting with and visualizing such DAGs.

You can sign up [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link).

Do you want to share something with the community? Let us know when you sign up!

# Call recording:
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/DQ4hpARBVSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As usual, you can join us on [Discord](https://discord.com/invite/j9DNFNw) or [Twitter](https://twitter.com/frictionlessd8a) to say hi or ask any questions. See you there!
