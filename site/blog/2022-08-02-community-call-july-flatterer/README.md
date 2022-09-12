---
title: Frictionless Data July 2022 Community Call 
date: 2022-08-03
tags: ['events', 'community-hangout']
category: events
image: /img/blog/july-community-call-flatterer.png
description: At our Frictionless Data community call we heard about Flatterer, a tool he developed to convert JSON data into tabular data, from David Raznick...
author: Sara Petti
---
On the last community call on July 28<sup>th</sup>, we heard David Raznick (an ex OKFer, now working at [Open Data Services](https://opendataservices.coop/)) presenting Flatterer, a tool he developed to convert structured JSON data into tabular data, using Frictionless Data specifications.

David has been working with many different open data standards functioning with deeply nested JSON. To make the data in standard formats more human readable, users often flatten JSON files with flattening tools, but the result they get are very large spreadsheets, which can be difficult to work with. 

Flattening tools are also often used to unflatten tabular data in JSON. That way, the data, initially written in a more human readable format, can then be used according to the standards. Unfortunately the result is not optimal, the output of flattening tools is often not user-friendly and the user would probably still need to tweak it by hand, for example modifying headers’ names and/or the way tables are joined together. 

Flatterer aims at making these processes easier and faster. It can convert in the blink of an eye your JSON file in the tabular format of your choice: csv, xlsx, parquet, postgres and sqlite. Flatterer will convert your JSON file into a main table, with keys to link one-to-many tables to their parents. That way the data is tidy and easier to work with.

If you are interested in knowing more about Flatterer, have a look at David’s presentation and demo: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hi9tDGfteoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also read more about the project here: https://flatterer.opendata.coop/, or have a look at [the project documentation](https://deepnote.com/@david-raznick/Flatterer-Demo-15678671-ca7f-40a0-aed5-6004190d2611).

# Join us next month!
Next community call is on August 25<sup>th</sup>. Frictionless Data developer Shashi Gharti will discuss with the community a tool she would like to add to the Frictionless Framework. Stay tuned to know more!

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link).

Do you want to share something with the community? Let us know when you sign up. 

Would you like to present at one of the next community calls? Please fill out [this form](https://forms.gle/AWpbxyiGESNSUFK2A).

Join our community on [Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg) (also via [Matrix](https://matrix.to/#/#frictionlessdata:matrix.okfn.org)) or [Twitter](https://twitter.com/frictionlessd8a). See you there!

# Call Recording
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hfGT6vAjjwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
