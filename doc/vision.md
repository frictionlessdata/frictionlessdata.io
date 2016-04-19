There's too much friction working with data - friction getting data, friction processing data, friction sharing data.

This friction stops people: stops them creating, sharing, collaborating, and using data - especially amongst more distributed communities.

It kills the cycles of find, improve, share that would make for a dynamic, productive and *attractive* (open) data ecosystem.

We need to make an ecosystem that, like open-source for software, is useful and attractive to those without any principled interest, the vast majority who simply want the best tool for the job, the easiest route to their goal.

We think that by getting a few key pieces in place we can reduce friction enough to revolutionize how the (open) data ecosystem operates with massively improved data quality, utilization and sharing.

<img src="http://assets.okfn.org/p/data.okfn.org/img/the-idea.png" alt="" style="width: 100%" />
<p style="text-align: center; font-size: 85%;">Diagram illustrating the key decoupling concept &ndash; you can read more in the original <a href="http://blog.okfn.org/2013/04/24/frictionless-data-making-it-radically-easier-to-get-stuff-done-with-data/">Frictionless Data post</a>.</p>

We think this because there's a multiplier here that means relatively small changes can have big effects. This multiplier is Network effects: the utility of a particular standard, pattern or even tool depends on how many other people are using it. This means that creating a critical mass of use around the tooling and standards will have a huge effect. This isn't easy. But after working on these issues for nearly a decade we think the time is right.

## A Metaphor

Today, when you decide to cook, the ingredients are readily available at local supermarkets or even already in your kitchen. You don't need to travel to a farm, collect eggs, mill the corn, cure the bacon etc - as you once would have done! Instead, thanks to standard systems of measurement, packaging, shipping (e.g. containerization) and payment ingredients can get from the farm direct to my local shop or even my door.

But with data we're still largely stuck at this early stage: every time you want to do an analysis or build an app you have to set off around the internet to dig up data, extract it, clean it and prepare it before you can even get it into your tool and begin your work proper.

What do we need to do for the working with data to be like cooking today - where you get to spend your time making the cake (creating insights) not preparing and collecting the ingredients (digging up and cleaning data)?

The answer: radical improvements in the logistics of data associated with specialisation and standardisation. In analogy with food we need standard systems of "measurement", packaging, and transport so that its easy to get data from its original source into the application where I can start working with it.

# What We Want To Do

We start with an advantage: unlike for physical goods transporting digital information from one computer to another is very cheap!

This means the focus can be on standardizing and simplifying the process of getting data from one application to another (or one form to another).

The following gives an overview of the main areas of work. There is more detail in the [Roadmap][].

<a href="/roadmap/"><img src="https://docs.google.com/drawings/d/1td7wmG54wbxCpS7kb5clPLyqESwHHTBvuxlIIRd-x5k/pub?w=942&amp;h=708" style="width: 100%;" alt="" /></a>
<p style="text-align: center; font-size: 85%;">High-level overview of the components. See the <a href="/roadmap">Roadmap</a> for more detail.</p>

[Roadmap]: http://data.okfn.org/roadmap/

## Data Package "Standards"

Lightweight, RFC-style proposals and patterns covering topics such as:

- The basic pattern for preparing and sharing data
- Mininum viable "data package" standards 
- Extensible to tabular and geo data

## Tooling &amp; Integration

Building out tooling and integrations to make it easy to **publish** and **use** data (packages).

- Core tools and Libraries - python, javascript, R, etc
- A Registry - you need a place to publish and pull from
- Integration to existing apps, tools and platform (R, Excel, Google Docs, CKAN etc) - its got to be incredibly easy to share and use "packaged" data
- Support for syncing and patching data to support real-time updating and efficient sharing (data is big relative to code!)

## Documentation, Outreach and Community

Engaging and evangelizing around the concepts, standards and tooling including:

- Website with overview, introduction, tool listing
- Tutorials, code examples etc
- Talks and meetups
- Outreach and evangelism to build adoption

We should emphasize how important role that will be. As mentioned above, network effects matter and so its not just about building the better mouse-trap but building use of that mouse-trap.

# Principles

Our work is based on a few key principles: 

* Simple and Lightweight - we aim to be as parsimonious as we can and no more. We want rough consensus and **running** code
* Distributed - we design for a distributed ecosystem (no centralized, single point of failure or dependence)
* Web oriented - build using formats that are a natural part of the web ecosystem
* Focus - we concentrate on one specific part of the data chain - e.g. we are not making a better analytics engine or visualization tool
* Open - anyone should be able to freely and openly use what we build


# Doesn't this already exist?

You might be thinking: people have been working on data for a while - doesn't something like this already exist? The basic answer is yes and no. People, including many of us here at Open Knowledge International, have been working on this for quite some time, and there are already some parts of the solution out there.

Many of the ideas we're putting forward directly borrow or build on existing work whether in software (around packaging) or in terms of data structures (the semantic web, Google's DSPL etc). What we are doing is bringing these ideas together into one, small, coherent package.

Our approach has these distinguishing features:

* Ultra-simplicity - we want to keep things as simple as they possibly can be. This includes formats (JSON and CSV), a focus on end-user tool integration etc
* Web orientation - we want an approach that fits naturally with the web (e.g. use of JSON, formats that stream over HTTP)
* Focus on reuse and integration with existing tools
* Distributed and not tied to a given tool or project - this is not about creating a central data marketplace or similar setup. It's about creating a basic framework that would enable anyone to publish and use datasets more easily and without going through a central broker.

Many of these are shared with (and build on) activity in other areas but as a whole we believe this provides a different, and especially powerful, approach.

