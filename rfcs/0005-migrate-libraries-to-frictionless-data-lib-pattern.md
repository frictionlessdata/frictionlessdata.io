# Migrate Libraries to Frictionless Data Lib Pattern

- Author: Rufus Pollock
- Start date: 2019-12-11
- Status: Approved (see also [RFC 6](./0006-software-structure.md)
- Reference issues: See https://github.com/frictionlessdata/project/issues/380 for most recent discussion

# Summary

The proposal is to move away from "datapackage-py/js/..." style libraries to the [Frictionless data lib pattern][f11s-lib] as it is more oriented to what people actually need / want / think about.

We already have a lot of this in python with tabulator and datapackage-py.

The Frictionless Data lib pattern is in Frictionless [RFC 0004][f11s-lib].

[f11s-lib]: ./0004-frictionless-data-lib-pattern.md

# Approach

See RFC 0004.

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

