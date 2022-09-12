---
title: Announcing the New Frictionless Framework
date: 2020-10-08
tags: ["news"]
category: news
image: /img/blog/frictionless-logo.png
description: We are excited to announce our new high-level Python framework, frictionless-py. Frictionless-py was created to...
author: Evgeny Karev and Lilly Winfree
---
## Frictionless Framework
We are excited to announce our new high-level Python framework, frictionless-py: https://github.com/frictionlessdata/frictionless-py. Frictionless-py was created to simplify overall user-experience for working with Frictionless Data in Python. It provides several high-level improvements in addition to many low-level fixes. Read more details below, or watch this intro video by Frictionless developer Evgeny: https://youtu.be/VPnC8cc6ly0  

## Why did we write new Python code?
Frictionless Data has been in development for almost a decade, with global users and projects spanning domains from science to government to finance. However, our main Python libraries (`datapackage`,`goodtables`, `tableschema`,`tabulator`) were originally built with some inconsistencies that have confused users over the years. We had started redoing our documentation for our existing code, and realized we had a larger issue on our hands - mainly that the disparate Python libraries had overlapping functionalities and we were not able to clearly articulate how they all fit together to form a bigger picture. We realized that overall, the existing user experience was not where we wanted it to be. Evgeny, the Frictionless Data technical lead developer, had been thinking about ways to improve the Python code for a while, and the outcome of that work is `frictionless-py`.

## What happens to the old Python code (`datapackage-py`, `goodtables-py`, `tableschema-py`, `tabulator-py`)? How does this affect current users?
`Datapackage-py` (see [details](https://github.com/frictionlessdata/datapackage-py#datapackage-py)), `tableschema-py` (see [details](https://github.com/frictionlessdata/tableschema-py#tableschema-py)), `tabulator-py` (see [details](https://github.com/frictionlessdata/tabulator-py#tabulator-py)) still exist, will not be altered, and will be maintained. If your project is using this code, these changes are not breaking and there is no action you need to take at this point. However, we will be focusing new development on `frictionless-py`, and encourage you to consider starting to experiment with or work with `frictionless-py` during the last months of 2020 and migrate to it starting from 2021 [(here is our migration guide)](https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/migration-guide/README.md). The one important thing to note is that `goodtables-py` has been subsumed by `frictionless-py` (since version 3 of Goodtables). We will continue to bug-fix `goodtables@2.x` in [this branch](https://github.com/frictionlessdata/goodtables-py/tree/goodtables) and it is also still available on [PyPi](https://pypi.org/project/goodtables/) as it was before. Please note that `frictionless@3.x` version's API is not stable as we are continuing to work on it at the moment. We will release `frictionless@4.x` by the end of 2020 to be the first SemVer/stable version.

## What does `frictionless-py` do?
`Frictionless-py` has four main functions for working with data: describe, extract, validate, and transform. These are inspired by typical data analysis and data management methods.

*Describe your data*: You can infer, edit and save metadata of your data tables. This is a first step for ensuring data quality and usability. Frictionless metadata includes general information about your data like textual description, as well as field types and other tabular data details.

*Extract your data*: You can read your data using a unified tabular interface. Data quality and consistency are guaranteed by a schema. Frictionless supports various file protocols like HTTP, FTP, and S3 and data formats like CSV, XLS, JSON, SQL, and others.

*Validate your data*: You can validate data tables, resources, and datasets. Frictionless generates a unified validation report, as well as supports a lot of options to customize the validation process.

*Transform your data*: You can clean, reshape, and transfer your data tables and datasets. Frictionless provides a pipeline capability and a lower-level interface to work with the data.

Additional features: 
- Powerful Python framework
- Convenient command-line interface
- Low memory consumption for data of any size
- Reasonable performance on big data
- Support for compressed files
- Custom checks and formats
- Fully pluggable architecture
- The included API server
- More than 1000+ tests

## How can users get started?
We recommend that you begin by reading the [Getting Started Guide](https://colab.research.google.com/drive/1VyDx6C3pxF3Vab8MxH_sI86OTSNmYuDJ) and the [Introduction Guide](https://colab.research.google.com/drive/1HGXJa7BWyEgoGZLkC6tKt2DMqgeHibEY). We also have in depth documentation for [Describing Data](https://colab.research.google.com/drive/1eIq1ZTUntJplRxkGHxmqlxZ0zyXCm0wU), [Extracting Data](https://colab.research.google.com/drive/1is_PcpzFl42aWI2B2tHaBGj3jxsKZ_eZ), [Validating Data](https://colab.research.google.com/drive/1cJSZlG_v6OI3I2FtnXdKOSPjhwZNjMK1), and [Transforming Data](https://colab.research.google.com/drive/1C4dFWDExyxzGIwLUovrDQZghZK4JK2PD).

## How can you give us feedback?
What do you think? Let us know your thoughts, suggestions, or issues by joining us in our community chat on [Discord](https://discord.com/invite/j9DNFNw) or by opening an issue in the `frictionless-py` repo: https://github.com/frictionlessdata/frictionless-py/issues.

## FAQ’s

### Where’s the documentation?
Are you a new user? Start here: [Getting Started](https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/getting-started/README.md) & [Introduction Guide](https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/introduction-guide/README.md)
Are you an existing user? Start here: [Migration Guide](https://github.com/frictionlessdata/frictionless-py/blob/master/docs/target/migration-guide/README.md)
The full list of documentation can be found here: https://github.com/frictionlessdata/frictionless-py#documentation 

### What’s the difference between `datapackage` and `frictionless`?
In general, `frictionless` is our new generation software while `tabulator`/`tableschema`/`datapackage`/`goodtables` are our previous generation software. `Frictionless` has a lot of improvements over them. Please see this issue for the full answer and a code example: https://github.com/frictionlessdata/frictionless-py/issues/428

### I’ve spotted a bug - where do I report it?
Let us know by opening an issue in the `frictionless-py` repo: https://github.com/frictionlessdata/frictionless-py/issues. For `tabulator`/`tableschema`/`datapackage` issues, please use the corresponding issue tracker and we will triage it for you. Thanks!

### I have a question - where do I get help?
You can ask us questions in our Discord chat and someone from the main developer team or from the community will help you. Here is an invitation link: https://discord.com/invite/j9DNFNw. We also have a Twitter account [(@frictionlessd8a)](https://twitter.com/frictionlessd8a) and community calls where you can come meet the team and ask questions: http://frictionlessdata.io/events/. 

### I want to help - how do I contribute?
Amazing, thank you! We always welcome community contributions. Start here (https://frictionlessdata.io/contribute/) and here (https://github.com/frictionlessdata/frictionless-py/blob/master/CONTRIBUTING.md) and you can also reach out to Evgeny (@roll) or Lilly (@lwinfree) on GitHub if you need help.

### Additional Links/Resources
- Intro to `frictionless-py` video: https://youtu.be/VPnC8cc6ly0 
- `frictionless-py` repository: https://github.com/frictionlessdata/frictionless-py 
- Frictionless Data website: https://frictionlessdata.io/ 