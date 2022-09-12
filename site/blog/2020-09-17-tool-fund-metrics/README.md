---
title: Metrics in Context
date: 2020-09-17
tags: ['tool-fund']
category: grantee-profiles
image: /img/blog/fd_reproducible.png
description: This grantee profile features Asura for our series of Frictionless Data Tool Fund posts...
author: Asura Enkhbayar
---

*This grantee profile features Asura for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved.*

## Meet Asura

Hallihallöchen meine Lieben!

I’m Asura and I’m a doctoral student at Simon Fraser University, Vancouver. I’m working in the muddy area between data science, communication, and philosophy in order to explore questions of power and systemic inequality within scholarly communication. This means that I work at the ScholCommLab as a data scientist, while exploring the philosophical issues in my doctoral project. Concretely, I am intending to develop an analytic framework for the study citations as infrastructure building on critical feminist theory and Science and Technology Studies (STS). However, I remain a coder and tinkerer at heart, which is how I ended up working with Frictionless Data on Metrics in Context.

## How did you first hear about Frictionless Data?

I first heard about Frictionless Data at the pre-csv,conf,v4 meetup hosted by Open Knowledge Foundation in 2019. I remember being quite impressed by the basic premise of Frictionless, although I hadn’t grasped the full picture of the technicalities yet. During the main conference I then learnt about more opportunities to get involved such as the Fellowship and the Tool Fund. I left csv,conf with great impressions and plans to work out an application but then life a.k.a my PhD happened... I had forgotten about Frictionless Data, until I recently found out that the Tool Fund is going into its second round. At the time I had started working with the Make Data Count team on data citations, then ideas and topics fell into place, and here I am now!

## What specific issues are you looking to address with the Tool Fund?

In this project, I want to address a common theme within the critique of modern technology in our data-driven world: the lack of context for data and, often related, biases in databases. Algorithmic and database biases have moved into the spotlight of critical thought on how technology exacerbates systemic inequalities. Following these insights, I want to address the need for different (rather than simply more) context and metadata for scholarly metrics in the face of racial, gender, and geographic biases which plague modern academia.

It isn’t controversial to say that scholarly metrics have become an integral part of scholarship and probably they are here to stay. Controversy usually comes into play once we discuss how and for which purposes metrics are used. This typically refers to the (mis)use of citation counts and citation-based indicators<sup>1</sup> for research assessment and governance, which also led to a considerable number of initiatives and movements calling for a responsible use of metrics<sup>2</sup>. However, I would like to take a step back and redirect the attention to the origin of the data underlying citation counts. 

These conversations about the inherent biases of citation databases are not entirely new and scholars across disciplines have been highlighting the consequential systemic issues. However, in this project I am not proposing a solution to overcome or abolish these biases per se, but rather I want to shine light on the opaque mechanism of capturing metrics which lead to the aforementioned inequalities. In other words, I propose to develop an open data standard<sup>3</sup> for scholarly metrics which documents the context in which the data was captured. This metadata describes the properties of the capturing apparatus of a scholarly event (e.g., a citation, news mention, or tweet of an article) such as the limitations of document coverage (what kind of articles are indexed?), the kind of events captured (tweets, retweets, or the both maybe?) or other technicalities (is Facebook considered as a whole or only a subset of public pages?).

While metrics in context don’t remove systemic inequality, they make the usually hidden and inaccessible biases visible and explicit. In doing so, they facilitate conversations about structural issues in academia and eventually contribute to the development of better infrastructures for the future.

## How can the open data, open source, or open science communities engage with the work you are doing?

Metrics in Context will be fully conducted out in the open which means that all resources will be available on Github and I will do my best to transparently document progress and decisions.

The project is organized in three parts (roughly breaking down into conceptual questions, technical implementation, and scholarly application) and I invite all of you to leave your ideas, thoughts, and critiques via email or a Github issue.

You can see the full roadmap with a detailed breakdown of tasks here: https://github.com/Bubblbu/metrics-in-context/issues/2 

---
  <sup> 1. </sup> There is extensive literature for the critique of indicators such as the h-index or Journal Impact Factor. See Haustein and Larivière (2015) for an overview.
  <sup> 2. </sup> See DORA and the Leiden Manifesto for two prominent examples of responsible research metrics initiatives
  <sup> 3. </sup> I am expecting references to this xkcd comic on standards: https://xkcd.com/927/