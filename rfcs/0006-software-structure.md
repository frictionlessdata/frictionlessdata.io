# Restructuring Libraries to Drivers and Toolkits

- Start date: 2020-08-04
- Author: Evgeny Karev, Rufus Pollock
- Reference Issues: (fill in existing related issues, if any)
- Implementation PR:
- Status: Draft

# Summary

This RFC introduces a new high-level structure for the Frictionless suite of libraries.

Going forward, there will be two types of software libraries:

* Drivers (aka SDKs): low level connectors that speaks “Frictionless”. For a language this is a low level SDK around Resource / Dataset / Table Schema etc. (The driver terminology comes from operating systems where driver s are low level connectors providing a standard interface from the the kernel of the operating system to peripherals. In our case drivers are low level connectors from data files and datasets into the standard frictionless model).
* Toolkits: sets of useful user-focused utilities. More high level and the kind of thing wranglers, developers are actually looking for.

Drivers are created for as many languages / tools as possible. Toolkits will focused on Python (and javascript and R).

Drivers will follow [RFC4: Frictionless Data Lib Pattern](./0004-frictionless-data-lib-pattern.md) (that RFC is accepted as applying to drivers).

Toolkits are described in more detail below and you can see frictionless-py for a demo

## Today vs Future

|   | Today | Future |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Drivers (SDKs) | Python<br>`datapackage-py`<br>`tableschema-py`<br>`tabulator`<br><br>Javascript<br>...<br>Go<br>...| `driver-py`<br><br>API follows RFC 004 (for future work) e.g. `open(...)`<br>with core objects `Dataset, Resource, TableSchema` |
| Toolkit          | `goodtables`<br>`datapackage-py`<br>`tabulator` | `frictionless-py`<br><br>A single library/tool with a bunch of utilities<br>e.g. describe, extract, validate, infer, ... |


## Frictionless Application

> [Rufus] I propose the App stuff be a separate RFC.

Graphical Interface is on the top of the stack

It's a proposed application that should combine the functionality of:

- Data Package Creator
- Table Schema Editor
- Try Goodtables
- etc

# Basic example

A brand-new framework `frictionless-py` has just been released for initial testing and feedback collection - https://github.com/frictionlessdata/frictionless-py (https://github.com/frictionlessdata/frictionless-py/blob/b316acc828a1061b0cba9bb01f1bb20d34cc94d2/README.md)

`$ frictionless validate data/invalid.csv`

# Approach

## Drivers (SDKs)

> Low-level Drivers / SDKs are at the bottom of the stack

Low level SDK library for interfacing with datasets and data files and exposing the core Frictionless objects `Dataset`, `Resource`, `TableSchema` etc.

* Drivers will follow [RFC4: Frictionless Data Lib Pattern](./0004-frictionless-data-lib-pattern.md)
  * We will apply this for new developments. Existing libraries can be left as is
* One driver per language rather than one per object e.g. `f11s-driver-py` rather than `datapackage-py`, `tableschema-py` etc.
  * TODO: naming e.g. we can't `frictionless-py` as used for other stuff. Could have simple `driver-py` (and published named in PyPI as `frictionless-driver`)

## Toolkits

> Toolkits are in-the-middle of the stack

Toolkits encapsulate the functionality of:

- tabulator
- tableschema
- tableschema-drivers
- datapackage
- goodtables
- dataflows (integration)

TODO: @roll  put more detail on approach from python docs.

### Migration

To move for the current situation to the described situation, we need to:
- write the application
- finish `frictionless-py`
- create `frictionless-js` from `data-js`
- finish `frictionless-r`
- update some Python SDK libraries

### Python

`frictionless-py` has been released (Aug 2020) for initial testing and feedback collection - https://github.com/frictionlessdata/frictionless-py

For migration it's proposed to:

- make `tabulator-py` a thin wrapper over `frictionless-py`
- continue maintaining `tableschema-py` as a part of SDK
- continue maintaining `datapackage-py` as a part of SDK
- deprecate various `tableschema-sql/pandas/etc` drivers in favour of `frictionless-py`
- deprecate `goodtables-py` in favour of `frictionless-py`

### For JavaScript

There is no high-level framework for JavaScript at the moment. The proposed solution is to enhance and promote as `frictionless-js` the `data-js` library from Datopian - https://github.com/datopian/data.js

### For R-Lang

There is a work currently happening on `frictionless-r` to become a high-level framework for the R-Lang: https://github.com/frictionlessdata/frictionless-r

# Drawbacks

* It's a change and may involve breaking changes in library naming and dependencies

# Alternatives

* Leaving as is
* One library (which is toolkit and driver)

# Adoption strategy

TODO

# Unresolved questions

* Driver naming: driver, sdk or connector?

# Appendix

## Existing Drivers

### Table Schema

| Language | URL |
|----------|-----|
| Clojure | https://github.com/frictionlessdata/tableschema-clj |
| Go | https://github.com/frictionlessdata/tableschema-go |
| Java | https://github.com/frictionlessdata/tableschema-java |
| Javascript | https://github.com/frictionlessdata/tableschema-js |
| Julia | https://github.com/frictionlessdata/TableSchema.jl |
| PHP | https://github.com/frictionlessdata/tableschema-php |
| Python | https://github.com/frictionlessdata/tableschema-py |
| R | https://github.com/frictionlessdata/tableschema-r |
| Ruby | https://github.com/frictionlessdata/tableschema-rb |
| Swift | https://github.com/frictionlessdata/tableschema-swift |

### Data Package

| Language | URL |
|----------|-----|
| Clojure | https://github.com/frictionlessdata/datapackage-clj |
| Go | https://github.com/frictionlessdata/datapackage-go |
| Java | https://github.com/frictionlessdata/datapackage-java |
| Javascript | https://github.com/frictionlessdata/datapackage-js |
| Julia | https://github.com/frictionlessdata/DataPackage.jl |
| MATLAB | https://github.com/KrisKusano/datapackage |
| PHP | https://github.com/frictionlessdata/datapackage-php |
| Python | https://github.com/frictionlessdata/datapackage-py |
| R | https://github.com/frictionlessdata/datapackage-r |
| Ruby | https://github.com/frictionlessdata/datapackage-rb |
| Swift | https://github.com/frictionlessdata/datapackage-swift |

## Existing Services

It's not a part of this RFC, but we have to mention that we also have a few managed services:
- DataHub.io
- Goodtables.io

## Existing Userland

Also we have various user-led projects like:

- Delimiter
- Data Curator
- etc

## Meeting 28 July 2020

> TOTAL AGREEMENT: SDK (“driver”) + Toolkit (aka Framework / Platform)

Decisions:
- [Agreed] Converge on Frictionless lib patterns for SDKs.
- [Agreed] Adopt frictionless-py approach to toolkit => Python/R/JavaScript.

Summary:
- Two types of thing going forward:
  - Driver (SDK): a low level connector that speaks “Frictionless”. For a language this is a low level SDK around Resource / Dataset / Table Schema etc.
  - Toolkit: set of useful user-focused utilities. More high level kind of thing wranglers, developers are actually looking for.
- Drivers for as many languages / tools as possible
- Toolkits focused on python (javascript / R)
