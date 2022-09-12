---
title: Packaging your Data
date: 2018-07-16
tags: ["datapackage"]
category: working-with-data-packages
---

You can package any kind of data as a Data Package.
<!-- more -->
1. Get your data together
   1. Get your data together in one folder (you can have data in subfolders of that folder too if you wish).
1. Add a `datapackage.json` file to package those data files into a useful whole (with key information like the license, title and format)
   1. The datapackage.json is a small file in JSON format that gives a bit of information about your dataset. You'll need to create this file and then place it in the directory you created.
   1. Don't worry if you don't know what JSON is - we provide some tools that can automatically create your this file for you.
   1. There are 2 options for creating the datapackage.json:
      1. Use the [Data Package Creator][dp-creator]) tool
         1. Just answer a few questions and give it your data files and it will spit out a datapackage.json for you to include in your project
      1. Use the [Python][dp-py], [JavaScript][dp-js], [PHP][dp-php], [Julia][dp-jl], [R][dp-r], [Clojure][dp-clj], [Java][dp-java], [Ruby][dp-rb] or [Go][dp-go] libraries for working with data packages.

Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive [Frictionless Data Field Guide][field-guide].

[field-guide]: /tag/field-guide

[dp-creator]: http://create.frictionlessdata.io

[dp-js]: https://github.com/frictionlessdata/datapackage-js
[dp-py]: https://github.com/frictionlessdata/datapackage-py
[dp-php]: https://github.com/frictionlessdata/datapackage-php
[dp-java]: https://github.com/frictionlessdata/datapackage-java
[dp-clj]: https://github.com/frictionlessdata/datapackage-clj
[dp-jl]: https://github.com/frictionlessdata/datapackage-jl
[dp-r]: https://github.com/frictionlessdata/datapackage-r
[dp-go]: https://github.com/frictionlessdata/datapackage-go
[dp-rb]: https://github.com/frictionlessdata/datapackage-rb
