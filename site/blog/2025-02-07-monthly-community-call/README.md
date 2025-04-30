---
title: Frictionless Data Community Call January/February 2025
date: 2025-02-07
tags: ["events", "community-hangout"]
category: events
image: /img/blog/monthly-call-jan-feb-2025.png
description: Our first Frictionless community call of 2025 we discussed new project ideas and got an update from the Categorical Data Working group...
author: Sara Petti
---
Our first Frictionless community call of 2025 took place on February 6th. We discussed new project ideas and we got an update from the Categorical Data Working group.

## 🚀 Moving forward with Data Package 
The first part of the call focused on a new project we are outlining with Peter Desmet from [INBO](https://www.vlaanderen.be/inbo/home) and Pierre Camilleri and Johan Richer from [multi.coop](https://multi.coop/) (core maintainers of the R and Python libraries). The goal? **Upadting the Python and R implementations to Data Package v2** and introducing **fast validation** using a lower-level language like C or Rust. As part of the project, we will also be working on an **editorial streamline of the Data Package documentation** and write a **scientific publication** on Data Package to improve its visibility and discoverability.

Community members were enthusiastic about the idea, with many expressing interest in contributing. 

## 🔍 Categorical Data Working Group Updates
Next, Kyle Husmann presented the **latest work of the Categorical Data Working Group** (composed of Kyle, Albert-Jan Roskam, Jan van der Laan, and Phil Schumm) on categorical fields in Frictionless schemas. The new approach allows tables to reference shared category definitions, reducing redundancy, improving metadata organization, and making it easier to integrate with statistical tools like R, Pandas, and DuckDB. 

The recipe, detailed in [PR #1081](https://github.com/frictionlessdata/datapackage/pull/1081), introduces **a method for defining categorical data by referencing external tables that list possible categories**. This structure not only streamlines data validation but also enhances clarity by separating category definitions from the main dataset. For example, instead of repeating category labels within multiple tables, a single category table can be referenced, ensuring consistency across datasets.

You can have a look at the presentation [here](https://docs.google.com/presentation/d/1m5QGpp4WEljozEtlxALURoH26R7Bz3y3vks-Ydc-4aA/edit?usp=sharing).

The proposal was well-received, and the group encouraged community members to review the [PR](https://github.com/frictionlessdata/datapackage/pull/1081) and provide feedback, especially if they have datasets that might challenge the current model.

## 🗓️ Looking Ahead: A Frictionless Summit?
To wrap up, we discussed plans for **a Frictionless community summit at the end of the month**, tentatively scheduled for Friday, February 28th. The goal is to bring together maintainers, users, and contributors to discuss challenges, priorities, and governance for the project moving forward.

Several attendees also raised topics they'd like to see discussed, including performance improvements, metadata best practices, and linked data.

📢 Stay tuned for an official invite to the summit soon! You can sign up for it already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link).

## 👋 Until Next Time
Thanks to everyone who joined and contributed to the discussion. If you missed the call, you can always watch the recording here:
<iframe width="560" height="315" src="https://www.youtube.com/embed/d1ywRlv29cY?si=SYtJHF7z9-O1gBKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
