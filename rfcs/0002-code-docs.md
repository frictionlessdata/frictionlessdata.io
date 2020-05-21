---
title: Code Docs
number: 2
---

# Overview

Work how we provide good docs (reference and otherwise) for Frictionless Code Libraries.


# Reference

## Design documentation infrastructure (Oct 2017 - @vitorbaptista and @roll) https://github.com/frictionlessdata/project/issues/466

### Item 1

Frictionless Data implementations is a middle-sized software project containing a lot of libraries of different languages. We need to design documentation infrastructure for it.

Current state - we use repository READMEs for all user-facing documentation.

# Tasks

- [ ] TBD

---

_From @vitorbaptista_

### How to write our technical reference?

Currently, we write the technical reference (methods, arguments, return values, etc) in the README. Our docstrings just point to the relevant section. For example:

https://github.com/frictionlessdata/goodtables-py/blob/c1bc6995cffc2a3b92b8b351044074306012d5a2/goodtables/validate.py#L13-L15

I don't think this is the best approach, as we're breaking a well-established convention. This means that methods like `help()` won't work (which I use quite often in the REPL), IDEs won't be able to show you the docs, and we have to define the layouts ourselves (instead of using a tool like ReadTheDocs).

I like Twilio's strategy, which is to have just a small quickstart with 2-3 basic examples on the most important features, and use the readthedocs-style of tools that support each of the different languages. For example, this is their libraries' references page: https://www.twilio.com/docs/libraries/reference/, and this is the PHP library: https://github.com/twilio/twilio-php.

I think we should do something similar.

### Item 2

So I had more time to think of it. There are many parts of the docs, here I'm mostly talking about library reference docs (i.e. what methods exist, their parameters and return values, etc.). Our main issue is that we have multiple programming languages and a tiny team, so anything we do must be easy to maintain.

I couldn't think of anything better than what Twilio does for [their reference docs](https://www.twilio.com/docs/libraries/reference/). The idea is to have a libraries page, with each of our libraries and the languages available, like:

* datapackage
  * Python
  * JavaScript
  * Ruby
  * ...
* goodtables
  * Python
  * JavaScript
* ...

Only the language names are clickable. On clicking on them, you'll be redirected to a page with the project's README. This README contains a brief explanation about what the library is, its features, and a few basic examples. For datapackage, the examples could be loading a datapackage, saving it, and creating a datapackage. These examples are the same across all languages. Then we just link to the reference docs.

The reference themselves are generated using docstrings or similar for the specific language. I imagine sphinx for Python, JSDoc (or sphinx) for JavaScript, and so on.

We follow across all codebases the patterns:

* The index page contains the contents of the README plus links to the released versions' reference docs
* The reference docs are generated using the language's docstrings equivalent
* There is a `make docs` command that generates the static pages into the `./docs` folder, ideally for every version
  * Some doc generators generate older versions by looking into git tags, but maybe not all do. If not, we'll need to code something ourselves.
* Each reference docs uses their respective tool's default template

The remaining question is how to deploy all of this into an unified page? We can either have each repository handle deploying locally (probably to GitHub Pages) and linking them via DNS/Proxy, or have a central "documentation generator" that clones all repositories, generate the docs, and deploys them in a single place.

I think each repository handling deployment might be easier, but it can lead to some duplication, for example:

* How to generate docs for each version (in case some of the tools don't support this out of the box)
* How to generate the index page from the README + list of api reference versions URLs.

If we were to keep the docs centralized, we'd need a tool that would, for each library:

1. Clone the repository
1. Generate the docs for all versions
1. Generate the index page, based on the README and the versions

I'm leaning towards keeping the docs centralized, but that can change when we start implementing it.

(cc @roll @serahrono)

### @roll response

Here is a quick overview of what I was working these few years. My reasoning etc. I've created a quick demo of the final product:

> https://roll.github.io/docs/

## Maintainable

The main problem with the FD documentation is that there are an overwhelming amount of separate libraries (around 30 for now) written in 9 languages. For now, OKI maintains 3 language implementations (Python/JavaScript/Ruby).

At the same time, we had/have around 0.2/0.4 dev/day for the whole maintenance/development work. So the main goal is reducing the cost of maintenance:

- zero duplication
- one point of truth
- the only markdown is used
- highly copy/pasted between languages e.g.:
  - https://github.com/frictionlessdata/datapackage-py#package
  - https://github.com/frictionlessdata/datapackage-r#package

## Explicit

One of the most important point in mature software development is providing explicit public APIs. It should be absolutely clear from your documentation (source code/docstrings is not counted) what's your API (classes/methods/arguments) and how it could be changed/follows semver.

## Knowing Your Audience

My assumption that the most FD users are more non-tech, scientific etc persons. So the main goal was to focus on this people not hard-code devs with expensive IDEs.

## Centralized

An idea behind this work is that FrictionlessData should provide product-like feeling. Not many not linked docs sites but something looking like a product having a good care.

## Linkable

Every section including even single method could be referenced - https://roll.github.io/docs/references/datapackage-js.html#packageaddresourcedescriptor

It's highly used in current work with the community. And it's kind really bad to link source code. It's both fragile and not really serious looking for users.

## Searchable

Global search index - https://roll.github.io/docs/?q=iter

---

So based on this current approach has been selected. It has some shortcoming like not providing docscring. But the main idea of this work that - better to have a partially limited solution but 100% working.

For now it:
- works great for maintenance (proven in last 2 years)
- provides 100% up-to-date documentation
- covers almost every public Class/method/argument
- etc

I was starting to work on the libs where there were docstrings, readthedocs builds etc. TBH it was in a very very bad shape - out-dated, living in different places etc. That's because of the structure of the project - many libs, contributors, very limited resources etc.

I was intentionally removing many low-level helpers docstrings because of nothing worse than out-dated documentation. With limited resources e.g. better to use self-explanatory function and argument names.

---

So my recommendations:
- the most important sync all the changes with the next stack maintainer/team. It should be maintainable otherwise it doesn't matter what approach is used - if everything is out-dated and messed up. I mean documentation should follow work not otherwise.

