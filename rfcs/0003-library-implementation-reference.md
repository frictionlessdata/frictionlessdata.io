---
title: Implementation Reference for Frictionless Libraries
number: 3
author: ["Evgeny"]
---

## Architecture

![Architecture](https://i.imgur.com/tILRP84.png)

## Language
- row number - row number starting from 1
- col number - column number starting from 1
- headers - array of column names
- row - array of column values
- keyed row - dictionary of column values
- extended row - array containing row number, headers and row
- descriptor - dictionary describing something

## Implementation

There are two level of implementations:
  - `basic`
  - `extended`

Python libraries are intended to be on `extended` level of implementation when all other languages should fosuc on `basic` implementation level (it includes `datapackage` and `tableschema` without API marked as `extended`).

## Interface

This interface is described on pseodo declarative language to provide general functional requirements and naming conventions for implementations. This language based on Python idioms. Implementations for other languages should follow they own language idioms (e.g. exception handling, asynchronous functions etc).

### goodtables

```
[extended implementation]
---
validate(source,
         preset='table',
         checks='all',
         table_limit=10,
         row_limit=1000,
         error_limit=1000,
         order_fields=False,
         infer_fields=False,
         custom_presets=[],
         custom_checks=[],
         **options) -> report
~@check(code, type, context, position)
~@preset(name)
exceptions
spec
~cli
```

### datapackage

```
[basic implementation]
---
Package(descriptor, base_path=None, strict=False)
    valid -> dict
    errors -> list
    profile -> Profile
    descriptor -> dict
    resources -> Resource[]
    resource_names -> str[]
    get_resource(name) -> Resource/None
    add_resource(descriptor) -> Resource/None
    remove_resource(name) -> Resource/None
    infer(pattern=False) -> descriptor
    commit(strict=None) -> bool
    save(target) -> bool
Resource(descriptor, base_path=None, strict=False)
    valid -> dict
    errors -> list
    profile -> Profile
    descriptor -> dict
    name -> str
    inline -> bool
    local -> bool
    remote -> bool
    multipart -> bool
    tabular -> bool
    source -> data/path
    headers -> str[]
    schema -> tableschema.Schema
    iter(keyed/extended=False, cast=True, relations=False) -> (generator) (keyed/extended)row[]
    read(keyed/extended=False, cast=True, relations=False, limit=None) -> (keyed/extended)row[]
    check_relations() -> True/raise
    raw_iter() -> bytes[]
    raw_read() -> bytes
    infer() -> descriptor
    commit(strict=None) -> bool
    save(target) -> bool
Profile(profile)
    name -> str
    jsonschema -> dict
    validate(descriptor) -> True/raise
validate(descriptor) -> True/raise
infer(pattern, basePath) -> descriptor
exceptions
---
[extended implementation]
---
DataPackage(descriptor, base_path=None, strict=True, storage=None, **options)
    save(target, storage=None, **options)
Resource(descriptor, base_path=None)
    config(**options)
~cli
```

### tableschema

```
[basic implementation]
---
Table(source, schema=None, strict=False, **options)
    headers -> str[]
    schema -> Schema
    iter(keyed/extended=False, cast=True, relations=False) -> (generator) (keyed/extended)row[]
    read(keyed/extended=False, cast=True, relations=False, limit=None) -> (keyed/extended)row[]
    infer(limit=100) -> descriptor
    save(target) -> bool
Schema(descriptor, strict=False)
    valid -> bool
    errors -> list
    descriptor -> dict
    primary_key -> str[]
    foreign_keys -> str[]
    fields -> Field[]
    field_names -> str[]
    get_field(name) -> Field/None
    add_field(descriptor) -> Field/None
    remove_field(name) -> Field/None
    cast_row(row) -> row
    infer(rows, headers=1) -> descriptor
    commit(strict=None) -> bool
    save(target) -> bool
Field(descriptor, missing_values=[''])
    name -> str
    type -> str
    format -> str
    required -> bool
    constraints -> dict
    descriptor -> dict
    cast_value(value, constraints=True) -> value
    test_value(value, constraints=True) -> bool
validate(descriptor) -> True/raise
infer(source, **options) -> descriptor
exceptions
---
[extended implementation]
---
Table(source, schema=None, post_cast=None, storage=None, **options)
    save(target, storage=None, **options)
Storage(**options)
    buckets -> str[]
    create(bucket, descriptor, force=False)
    delete(bucket=None, ignore=False)
    describe(bucket, descriptor=None) -> descriptor
    iter(bucket) -> (generator) row[]
    read(bucket) -> row[]
    write(bucket, rows)
plugins
~cli
```

### tabulator

```
[extended implementation]
---
Stream(source,
       headers=None,
       scheme=None,
       format=None,
       encoding=None,
       sample_size=None,
       post_parse=None,
       **options)
    closed/open/close/reset
    sample -> rows
    headers -> list
    iter(keyed/extended=False) -> (generator) (keyed/extended)row[]
    read(keyed/extended=False, limit=None) -> (keyed/extended)row[]
    save(target, format=None, encoding=None, **options)
validate(source, scheme=None, format=None) -> True/raise
exceptions
~cli
```

# New Proposal (2018) by @rufuspollock

> See https://github.com/frictionlessdata/project/issues/380 for discussion

I wrote up the Frictionless Data lib pattern here:

https://okfnlabs.org/blog/2018/02/15/design-pattern-for-a-core-data-library.html

The intention is that we move away from "datapackage-xx" style libraries to more of a Frictionless data lib pattern in the future as it is more oriented to what people actually need / want / think about.

We already have a lot of this in python with tabulator and datapackage-py.

## Tasks

* [ ] Review existing libraries and do a gap analysis
* [ ] Short intro / guide to writing a Frictionless Data lib
* [ ] Trial for one language (e.g. python or javascript)
* [ ] Decide whether worth doing generally as recommended default pattern for libs

## Analysis

# Appendix: Existing Library APIs

## Table Schema JS

https://github.com/frictionlessdata/tableschema-js

```
Table.load

Table.iter

Table.read
```

### Infer a schema

```javascript=
const tableschema = require("tableschema")

(async () => {
  const source = 'path/to/data/file'
  const schema = await tableschema.infer(source)
  console.log(schema)
})()
```

More about "infer" - https://github.com/frictionlessdata/tableschema-js#async-infersource-headers1-options

### Read a data file

```javascript=
const {Table} = require("tableschema")

(async () => {
  const source = 'path/to/data/file'
  const table = await Table.load(source)
  const data = await table.read()
  console.log(data)
})()
```

## Python Data Package Library

### Pandas

```
>>> import datapackage

>>> data_url = 'http://data.okfn.org/data/core/country-list/datapackage.json'
>>> storage = datapackage.push_datapackage(data_url, 'pandas')

>>> storage.buckets
['data___data']

>>> type(storage['data___data'])
<class 'pandas.core.frame.DataFrame'>

>>> storage['data___data'].head()
```

* Why is it called storage.buckets
* Why different from http://okfnlabs.org/blog/2016/08/01/using-data-packages-with-pandas.html


Why not:

```
import datapackage
import datapackage2pandas

dataset = datapackage.Dataset(url)

# pandas dataframe ...
dataframe = datapacakge2pandas.dump(dataset)
```

# Original Motivation for the article https://okfnlabs.org/blog/2018/02/15/design-pattern-for-a-core-data-library.html

Rufus original issue: https://github.com/frictionlessdata/tableschema-js/issues/78

With a few tweaks we can get something really nice as an interface and we can centralize it in one lib (at the moment, whilst the libs are nicely factored you do have to look into too many places -- e.g. this issue ends up being here but relating to 3 other libs).

First I must emphasize a key point:

**People don't care about Data Packages / Resources they care about opening a data file and doing something with it**

> *Data Packages / Resources come up because they are a nicely agreed metadata structure for all the stuff that comes up in the **background** when you do that.*

Put crudely: Most people are doing stuff with a file (or dataset), and they want to grab it and read it preferably in a structured way e.g. as a row iterator -- sometimes inferring or specifying stuff a long the way e.g. encoding, formatting, field types.

=> **Our job is to help users to open that file (or dataset) and stream it as quickly as possible.**


### Comments

The above was done for JS but could be common to python and any other language too (tabulator-py Stream would need to have a stream() method rather than open() or similar but that's minor).

At the moment we have all the ingredients for this but we don't provide this in one place often e.g.

* https://github.com/frictionlessdata/datapackage-js#resource - Resource is missing the stream methods and we have to call Table and then iter to get objects (and why don't we support Node Stream API for the object streams?)
* Python: you have to work your way across tabulator-py, tableschema-py and datapackage-py to put the underlying concepts and approach together.
* General point: I'm wondering if we almost want to leave the Data Package stuff to one side and present this front and center - this data interface is what people really want and the Data Package and Data Resource are just the descriptor structures that you happen to need. (This is more a presentation aspect but its important e.g. you'd start examples not loading a datapackage.json but loading a file path)

Asides

* More and more think the profile stuff should be a separate library outside of core. 90% of the time I don't want and I don't want to know about it and I don't want to validate before I start -- I just want to load the data! If I want it i can import/require it separately and use it separately to test whatever i have once i've loaded it.
  * As an example of how this gets in the way: two of the first four items in the first example for datapackage-py deal with validation and the fairly obscure issue of schemas not in the local cache https://github.com/frictionlessdata/datapackage-py

