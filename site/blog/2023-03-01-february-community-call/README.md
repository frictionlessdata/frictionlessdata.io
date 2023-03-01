---
title: Frictionless Data Community Call February 2023
date: 2023-03-01
tags: ['events', 'community-hangout']
category: events
image: /img/blog/WGMS-community-photo.png
description: At our last community call we heard about generating spreadsheet templates from Tabular Data Package metadata from Ethan Welty...
author: Sara Petti
---
At our last community call on February 28th, we heard about generating spreadsheet templates from Tabular Data Package metadata from Ethan Welty.

Ethan works for the [World Glacier Monitoring Service (WGMS)](https://wgms.ch/), which maintains and curates a single longrunning dataset (with entries dating back to 1894!) combining both satellite measurements, and manual submissions of scientists from around the world who go out to glaciers and measure the mass changes on the ground.

One of their biggest challenges is that parts of the data are not machine-generated, but inserted by humans. It is therefore important to review the data submissions to try and catch any possible error. To do that, Ethan adopted the Frictionless Tabular Data Package approach, getting as much of the organisation logic and data management into a centralised metadata. 

Plus, to help people doing their data entry, they have spreadsheet templates automatically generated. The file is built in markup language, and is generated from the validation pipeline (which works in a slightly different way than in Frictionless Data, as it scales to a much longer pipeline). The template generator, called _Tablecloth_, currently supports Excel - as it is what most people who work with the WGMS are comfortable using, and it is soon going to support Google Sheets too. 

If you want to know more about _Tablecloth_ and are interested in having a look at the demo Ethan did on the call, go ahead and have a look at the recording of the presentation:

<iframe width="560" height="315" src="https://www.youtube.com/embed/79CrD5O96vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

You can also check out _Tablecloth_ on [GitHub](https://github.com/ezwelty/tablecloth) and [GitLab](https://gitlab.com/wgms/).

# Join us next month!
Next community call is on March 30<sup>th</sup> and guess what? We do not have any presentations scheduled yet! So this could be your moment to come and tell us about your project! If you are interested in doing so just fill out [this form](https://forms.gle/AWpbxyiGESNSUFK2A), or come and tell us on our community chat.

You can sign up for the call already [here](https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform?usp=sf_link). Do you want to share something with the community? Let us know when you sign up. 

# Call Recording
On a final note, here is the recording of the full call:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_k7NlWztGlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
