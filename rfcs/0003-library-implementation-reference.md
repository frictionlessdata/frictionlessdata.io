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
