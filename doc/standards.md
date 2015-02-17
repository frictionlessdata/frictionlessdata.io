# Standards - Decoupling Publishers and Consumers

We provide two new standards for data "transport": **[Data package](data-package)** and **[Tabular Data Package](tabular-data-package)**

![Overview](https://docs.google.com/drawings/d/1SZxJ00WEp3iK5fqljc-yumalRePmwdaaH98_8uJYlbs/pub?w=350&h=345)

These standards are **ultra-lightweight**, RFC-style specifications. They build **heavily on prior work** (e.g. JSON, DSPL, JSON-LD, CommonJS/Debian/PyPI packaging). **Simplicity and practicality** were guiding design criteria.</p>

### [Data package](data-package)

* Minimal wrapping around data
* Can 'package' any kind of data
* Designed for extension – you can add your own additional structure and metadata

Data Package's flexibility means it can be used as a "transport" for any
kind of data. However, this also limits the possibilities for tool integration (e.g. loading a data package into a database automatically). This limitation is addressed by extending Data Package – for example, Tabular Data Package does this for tabular data.

[Read the Data Packages overview »](data-package)

### [Tabular Data Package](tabular-data-package)

* Designed for tabular data
* Extends data package (data in tabular data package is a data package)
* Requires data to be "good" CSVs
* Provides a simple JSON-based schema to describe them ("JSON Table Schema")

[Read the Tabular Data Package overview »](tabular-data-package)

## The Motivation

The idea behind Data Package and Tabular Data Package is to **decouple** data publishers and consumers and make it easier to build standard tooling: publishers can publish their data as a data package from their favourite app or tool and a consumer can load that package into their (different) favourite tool.

[![Diagram](http://assets.okfn.org/p/data.okfn.org/img/the-idea.png)](http://assets.okfn.org/p/data.okfn.org/img/the-idea.png)

*Diagram to illustrate the key decoupling concept – you can read more in the original [Frictionless Data post](http://blog.okfn.org/2013/04/24/frictionless-data-making-it-radically-easier-to-get-stuff-done-with-data/).*

[data-package]: /doc/data-package
[tabular-data-package]: /doc/tabular-data-package
[data-package-examples]: /doc/data-package#examples
[tabular-data-package-examples]: /doc/tabular-data-package#examples
[tools-create]: /tools/create
[tools-view]: /tools/view

<div class="well">
### Quick start

#### Data Package

* [Overview](data-package)
* [Examples](data-package-examples)

#### Tabular Data Package

* [Overview](tabular-data-package)
* [Examples](tabular-data-package-examples)

#### CSV / Comma Separated Variables</h4>

* [Overview](csv)

#### Tools

* [Create a Data Package from your existing data](tools-create)
* [View a Data Package](tools-view)
</div>
