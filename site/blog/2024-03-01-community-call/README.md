---
title: Frictionless Data Community Call February 2024
date: 2024-03-01
tags: ["events", "community-hangout"]
category: events
image: /img/blog/FD-community-call-february.png
description: At our last call we continued talking about the specs update, this month the discussion focus was versioning...
author: Sara Petti
---
On our last community call was on February 27<sup>th</sup>, we continued discussing the Frictionless Specs update with community members. As a reminder, thanks to the generous support of [NLnet](https://nlnet.nl/), the Frictionless core team, together with a working group composed of members of the community, is now working on a v2 of the Specs. Read the [announcement blog](https://frictionlessdata.io/blog/2023/11/15/frictionless-specs-update/) to know more about it.

## Working group discussion

The main focus of this call was **versioning** and what the rules for versioning would be.

When announcing the Spec update, we decided there would be no breaking change introduced, and that the Data Package v2 (and all the following versions) would always support any previous version as well.

One thing that was highlighted during the discussion, though, is that there are some minimal aspects that we might want to modify for the sake of elegance (and to make implementers’ life easier too!). For example, Tableschema might require unique file names, and this could potentially be a breaking change. The group also pointed out that it would probably be better to do this now rather than later, when we hopefully have a much wider adoption. We would of course still be leaning towards conservatism and backwards compatibility, while having just enough flexibility to define v2 better.

With the working group we will need to clarify what a breaking change is: is it a change that breaks data or implementation? Kyle believes we can’t stop supporting data, and we want to be able to forever support a Data Package, even a 20 years old one (while we can afford to not support an implementation anymore). Keith thought we could decide to drop support for very old versions giving a very long timeframe for data published to update their Data Packages (e.g. 10 years).

There was a wide consensus on the fact that the easiest way to manage this would be to version the Spec, and introduce a version tag from v2 onwards. That way any consumer software would be able to read the version and convert it to the latest version if necessary. If no version is indicated, we would automatically assume it is a pre-v2 version.

Another thing we all agreed on is that the versioning would apply to Data Package as a whole, together with all the specs sitting under it. Data publishers would therefore need to indicate only one version for the Data Package.

Most of these considerations have been excellently captured by Peter in [this issue](https://github.com/frictionlessdata/specs/issues/858#issuecomment-1914820238) already.

One thing the working group will need to decide is how to actually indicate the version number in the Data Package JSON. Evgeny suggested adding it on top of the [metadata profiles](https://specs.frictionlessdata.io/profiles/#language), but we will then need to consider how a data publisher could indicate both the profile and the Data Package version.

Once we agree on a rule, we will add it to the [governance page](https://datapackage.org/standard/governance/) for future versioning too. 

A Changelog will be added to the Data Package repo, to help implementers know what tasks they need to go through to update to the new version.

# Join us in March!
Next community call is on March 21<sup>st</sup>, join us to hear all the exciting news about the [Frictionless specs](https://specs.frictionlessdata.io/) update! 

Do you have something you would like to present to the community at one of the upcoming calls? Let us know via [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our [community chat on Slack](https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg).

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

# Call Recording
Here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-F3egB_40xo?si=0NrYa7N6QKni43A5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#Thank you
On a final note, we would like to thank all community members that joined the call and that keep all these discussions alive, and particularly tho those who are putting a lot of thinking and hard work into the specs working group. Without you, all of this would not be possible.
