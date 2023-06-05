---
title: Frictionless Data Community Call May 2023
date: 2023-06-05
tags: ['events', 'community-hangout']
category: events
image: /img/blog/Augustos-presentation-FastETL.png
description: At our last community call Augusto Herrmann presented FastETL, a free and open source software library for Apache Airflow that makes it easier to integrate heterogeneous data sources and to publish open data...
author: Sara Petti
---
At our last community call on May 25<sup>th</sup> Augusto Herrmann presented FastETL, a free and open source software library for Apache Airflow that makes it easier to integrate heterogeneous data sources and to publish open data (e.g. to CKAN data portals) using Apache Airflow. 

Augusto told us how the data engineering team at the Secretariat for Management and Innovation in the Brazilian federal government has been using FastETL in combination with the Frictionless Framework, and Tabular Data Packages for processing data pipelines and to publish open data.

Augusto and his team have developed FastETL, among other things, to be able to periodically synchronise data sources in the data lake, publish open data on open data portals, and be notified about publications in the official gazette. 

Some of the things that you can do with FastETL are:
* Full or incremental replication of tables in SQL Server, and Postgres databases (and MySQL sources).
* Load data from GSheets and from spreadsheets on Samba/Windows networks.
* Extract CSVs from SQL.
* Query the Brazilian National Official Gazette's API, and get a notification when there is a new publication in the Official Gazette.
* Use CKAN or dados.gov.br's API to update dataset metadata.
* Use Frictionless Tabular Data Packages to write data dictionaries in OpenDocument Text format.

Would you like to know more? You can have a look at Augusto’s slides on [his website here](https://herrmann.tech/slide-decks/2023/05/integrating-data-sources-and-publishing-open-data-with-fastetl-airflow-and-frictionless), or check out the [FastETL GitHub Repository](https://github.com/gestaogovbr/FastETL). 
And if you want to better understand how to use FastETL, have a look at Augusto’s presentation, with some great data pipeline examples:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z8bo6cyd-gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Join us next month!
Next community call is on June 29<sup>th</sup>, and it will be a hands-on session on strange datasets and how to describe them! Jesper Zedlitz from the German federal state of  Schleswig-Holstein will be bringing one. Let us know if you would also like to bring a dataset to this call, by emailing Sara Petti sara.petti[at]okfn.org.

Do you have something you would like to present to the community at one of the upcoming calls? Let us know via [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our [community chat on Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg) (also accessible via a [Matrix bridge](https://matrix.to/#/#frictionlessdata:matrix.okfn.org) if you prefer to use an open protocol) .

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

# Call Recording
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z8bo6cyd-gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
