---
title: Schema Collaboration
date: 2021-01-18
tags: ["tool-fund"]
category: grantee-profiles
image: /img/blog/schema-collaboration.png
description: The tool is designed to help data managers and researchers document data packages. The documentation needs to be started by the data manager who then sends the URL to the researchers allowing them to edit the schema.
author: Carles Pina Estany
---

*This blog is part of a series showcasing projects developed during the 2020 Tool Fund. The Tool Fund provided five mini-grants of $5,000 to support individuals or organisations in developing an open tool for reproducible research built using the Frictionless Data specifications and software. This Fund is part of the Frictionless Data for Reproducible Research project, which is funded by the Sloan Foundation. This project applies our work in Frictionless Data to data-driven research disciplines, in order to facilitate reproducible data workflows in research contexts.*

## What problem does Schema-Collaboration solve?
As a software engineer, I’ve spent more than a decade developing software used by researchers or data managers using different technologies. I have been involved in free software communities and projects for more than 20 years.

Whilst working for a polar research institute, we saw the opportunity to take advantage of Frictionless data packages to describe datasets in a machine readable way ready for publication. But it was difficult for data managers and researchers to collaborate effectively on this, particularly when one or both groups were not familiar with Frictionless schemas. We needed a way for researchers submitting datasets to get feedback from the data managers to ensure that the dataset’s schema was correct.

## How does Schema-Collaboration make collaborating easier?
The Frictionless [Data Package Creator](https://create.frictionlessdata.io/) is a very good Web-based tool to create the schemas but it didn’t help out of the box on the collaboration part. The solution in this tool fund was to build a system that uses Data Package Creator to enable data managers and researchers to create and share dataset schemas, edit them, post messages and export the schemas in different formats (text, Markdown, PDF). To encourage collaboration within a project multiple researchers can work on the same schema. Being able to view the description in human-readable formats makes it easier to spot mistakes and to integrate with third-party data repositories.

From a data manager’s perspective the tool allows them to keep tabs on the datasets being managed and their progress. It prevents details getting lost in emails and hopefully provides a nicer interface to encourage better collaboration.

In other words: think of a very simplified “Google Docs” specialised for data packages.

## Who can use Schema-Collaboration?
The tool is designed to help data managers(*) and researchers document data packages. The documentation (which is based on Frictionless schemas) needs to be started by the data manager who then sends the URL to the researchers allowing them to edit the schema.

*: or anybody who wants to collaborate on creating a data package.

![Data-packages](https://user-images.githubusercontent.com/74717970/104922881-8e788c80-599b-11eb-9260-21b9a5747a8f.png)
*Data managers can view a list of datapackages within the Schema-Collaboration tool.*

## How can I use this tool?
 To evaluate the tool it is possible to use the [public demo server](https://carles.eu.pythonanywhere.com/) or to install it locally on a computer.

It was packaged in a Docker container to make it easier to install on servers. There is full [documentation available](https://github.com/frictionlessdata/schema-collaboration/blob/master/docker/README.md).

Once the tool is installed it is used via a Web browser both by data managers and researchers.

![datapackage-detail](https://user-images.githubusercontent.com/74717970/104923256-19598700-599c-11eb-9cc4-19bb7637fdaa.png)
*You can view details about the datapackage, including comments from the data manager or other users, and also edit the datapackage.*

## Future plans for Schema-Collaboration
We plan to install the schema-collaboration at the Swiss Polar Institute to be used to describe polar data sets.

In the upcoming January  Frictionless Data community call (sign up [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform) to join), I will do a demo and I would really appreciate feedback. Please feel free to use it and add issues (bugs or ideas) in the [GitHub repository](https://github.com/frictionlessdata/schema-collaboration).

## Tech stack
For the curious: schema-collaboration is developed using Python and Django and uses the django-crispy-forms package to create the forms. It supports sqlite3 and MariaDB databases.

## Thanks to…
In order to integrate Data Package Creator with schema-collaboration some changes where needed in the Data Package Creator. Evgeny (@roll on GitHub/Discord) from Frictionlessdata project made the changes to Data Package Creator needed to achieve this and helped with the integration. Thank you very much!

**Further reading:**

GitHub repository: https://github.com/frictionlessdata/schema-collaboration

Meet Carles Pina Estany: https://frictionlessdata.io/blog/2020/07/16/tool-fund-polar-institute/#meet-carles-pina-estany
