---
title: Frictionless software structure for the future
date: 2020-08-04
author: ["Evgeny Karev", "Rufus Pollock"]
---

This RFC is written on top of:
- [RFC1: Libraries consolidation for better users/contributors UX](./0001-library-consolidation.md)
- [RFC3: Implementation Reference for Frictionless Libraries](./0003-library-implementation-reference.md)
- [RFC4: Migrate Libraries to Frictionless Data Lib Pattern](./0004-frictionless-data-lib-pattern.md)
- [RFC5: Migrate Libraries to Frictionless Data Lib Pattern](./0005-migrate-libraries-to-frictionless-data-lib-pattern.md)

# Frictionless Software

This RFC introduces a new high-level structure for the Frictionless Software. It will use the following sections to list different layers of software and concrete implementations.

## Frictionless Application

> Graphical Interface is on the top of the stack

It's a proposed application that should combine the functionality of:
- Data Package Creator
- Table Schema Editor
- Try Goodtables
- etc

## Frictionless Frameworks/Toolkits

> High-level frameworks are in-the-middle of the stack

### For Python

A brand-new framework `frictionless-py` has just been released for initial testing and feedback collection - https://github.com/frictionlessdata/frictionless-py

It encapsulates the functionality of:
- tabulator
- tableschema
- tableschema-drivers
- datapackage
- goodtables
- dataflows (integration)

### For JavaScript

There is no high-level framework for JavaScript at the moment. The proposed solution is to enhance and promote as `frictionless-js` the `data-js` library from Datopian - https://github.com/datopian/data.js

### For R-Lang

There is a work currently happening on `frictionless-r` to become a high-level framework for the R-Lang: https://github.com/frictionlessdata/frictionless-r

## Frictionless SDKs/Drivers

> Low-level SDKs are at the bottom of the stack

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

---

## Appendix

### Services

It's not a part of this RFC, but we have to mention that we also have a few managed services:
- DataHub.io
- Goodtables.io

### Userland

Also we have various user-led projects like:
- Delimiter
- Data Curator
- etc

### Migration

To move for the current situation to the described situation, we need to:
- write the application
- finish `frictionless-py`
- create `frictionless-js` from `data-js`
- finish `frictionless-r`
- update some Python SDK libraries

#### Updating Python Libraries

It's proposed to:
- make `tabulator-py` a thin wrapper over `frictionless-py`
- continue maintaining `tableschema-py` as a part of SDK
- continue maintaining `datapackage-py` as a part of SDK
- deprecate various `tableschema-sql/pandas/etc` drivers in favour of `frictionless-py`
- deprecate `goodtables-py` in favour of `frictionless-py`

---

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
