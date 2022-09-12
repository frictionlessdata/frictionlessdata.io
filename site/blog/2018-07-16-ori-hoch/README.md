---
title: "Tool Fund Grantee: Ori Hoch"
date: 2018-07-16
tags:
author: Ori Hoch
category: grantee-profiles
image: /img/blog/ori-hoch-image.png
# description: Tool Fund Grantee - PHP
github: https://github.com/OriHoch
twitter: https://twitter.com/OriHoch
website: https://www.linkedin.com/in/ori-hoch-bb62b033/
---

_This grantee profile features Ori Hoch for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved._

<!-- more -->

My name is Ori Hoch, I am 35 years old, living in Israel and married with 2 children. I recently took my family to Midburn - the Israeli regional Burning Man event where I juggled some fire clubs in the main burn ceremony. Through the Tool Fund, I am working on implementing the PHP libraries for Frictionless Data. I am also working on several other open source data projects: [Open Knesset](https://github.com/hasadna/Open-Knesset), [Open Budget](https://github.com/OpenBudget/budgetkey-data-pipelines), [Beit Hatfutsot](https://github.com/beit-hatfutsot) - all projects are open source and fully transparent - both the code and the development process - which I think is a great way to work. I’m also very interested in community and teamwork - how to get a group of people working together on a common goal, a hard task in normal scenarios which grows even more complex when dealing with volunteers / open source contributors. Of course, besides all the philosophical ideals I’m also a hard-core technologist who loves diving into complex problems, finding and implementing the right solution.

I first heard about the Frictionless Data ecosystem from my activity in [The Public Knowledge Workshop](http://www.hasadna.org.il/en/) where I worked with Adam Kariv and Paul Walsh. I have a lot of experience working with data, and know many of the common problems and pitfalls. One of the major obstacles is interoperability between different data sources. Having the core Frictionless Data libraries available in different languages will allow for easier interoperability and integrations between sources.

At [Beit Hatfutsot](http://www.bh.org.il/) (The Museum of The Jewish People), we aggregate data from many sources, including some data from PHP frameworks such as MediaWiki / Wordpress. At the moment we ask developers of the external data sources to create a datapackage for us, based on a given schema. Frictionless Data libraries for PHP will make this much easier for people to do, and will have a huge effect in reducing errors.

In addition to interoperability, the Frictionless Data specifications and software are based on the combined experience of many individuals working on a variety of data projects. Anyone using the libraries and tools will benefit from these experiences and will avoid problems and pitfalls which other people encountered in the past.

I welcome PHP enthusiasts to join in the development effort of the [tableschema](https://github.com/frictionlessdata/tableschema-php) and [datapackage](https://github.com/frictionlessdata/datapackage-php) libraries which I am currently working on. Both repositories follow standard GitHub development flow using Issues, Pull Requests, Releases et al. Check the README and CONTRIBUTING files in the repositories above for more details and reach out to me or the rest of the Frictionless Data developer community on [the active Gitter channel](https://gitter.im/frictionlessdata/chat).

I would also love to have PHP developers use the core libraries to write some more high-level tools. For example - consider an organization which has some data in their Wordpress / Drupal installation which they would like to publish or use with Frictionless Data compatible tools. Without a compatible plugin for their framework it would require them to either write some custom code or create the datapackage manually - both options are time consuming and error prone. If they had a ready to use plugin for their framework which publishes a compliant datapackage - it will greatly simplify the process and ensure interoperability.

With the availability of the PHP libraries for Frictionless Data the task of developing such plugins will be greatly simplified. The libraries handle all the work of creating / loading datapackages and ensuring they conforms to the specs. Allowing the developer to focus on the plugin logic.

Additional possibilities for leveraging the PHP libraries:

- Import plugins - for loading datapackages into a data store
- visualization tools to allow people to view and analyze data packages from PHP based code
- Integration of existing Frictionless Data to be available for use from PHP, for example the [datapackage-pipelines](https://github.com/frictionlessdata/datapackage-pipelines) framework

Finally, I would like to thank Open Knowledge International and The Sloan foundation for the opportunity to work on the forefront of the open data eco-system. I think that the tools we are developing now will have tremendous effects on how we manage and use data in the future and we have not yet seen all the possible benefits and outcomes from this work.
