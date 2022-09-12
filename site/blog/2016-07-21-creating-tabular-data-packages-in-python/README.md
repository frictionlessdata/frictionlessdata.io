---
title: Creating Data Packages in Python
date: 2016-07-21
tags: ["Python"]
description: A guide on how to create datapackages in Python
category: working-with-data-packages
---

This tutorial will show you how to install the Python library for working with Data Packages and Table Schema, load a CSV file, infer its schema, and write a Tabular Data Package.

## Setup

For this tutorial, we will need the [Data Package library](https://github.com/frictionlessdata/datapackage-py) ([PyPI](https://pypi.python.org/pypi/datapackage)) library.

```bash
pip install datapackage
```

## Creating basic metadata

You can start using the library by importing `datapackage`.

```python
import datapackage
```

The Package() class allows you to work with data packages. Use it to create a blank datapackage called package like so:

```python
package = datapackage.Package()
```

You can then add useful metadata by adding keys to metadata dict attribute.  Below, we are adding the required `name` key as well as a human-readable `title` key.  For the keys supported, please consult the full [Data Package spec](https://specs.frictionlessdata.io/data-package/#metadata). Note, we will be creating the required `resources` key further down below.

```python
package.descriptor['name'] = 'period-table'
package.descriptor['title'] = 'Periodic Table'
```

To view your descriptor file at any time, simply type

```python
package.descriptor
```

## Inferring a CSV Schema

Let's say we have a file called `data.csv` ([download](https://github.com/frictionlessdata/example-data-packages/blob/master/periodic-table/data.csv)) in our working directory that looks like this:

|  atomic number | symbol | name          | atomic mass             | metal or nonmetal?    |
|----------------|--------|---------------|-------------------------|-----------------------|
|  1             | H      | Hydrogen      | 1.00794                 | nonmetal              |
|  2             | He     | Helium        | 4.002602                | noble gas             |
|  3             | Li     | Lithium       | 6.941                   | alkali metal          |
|  4             | Be     | Beryllium     | 9.012182                | alkaline earth metal  |
|  5             | B      | Boron         | 10.811                  | metalloid             |

We can extrapolate our CSV's schema by using `infer` from the Table Schema library.  The `infer` function checks a small subset of your dataset and summarizes expected datatypes against each column, etc. To infer a schema for our dataset and view it, we will simply run

```python
package.infer('periodic-table/data.csv')
package.descriptor
```

Where there's need to infer a schema for more than one tabular data resource, use the glob pattern `**/*.csv` instead to infer a schema:

```python
package.infer('**/*.csv')
package.descriptor
```

We are now ready to save our `datapackage.json` file locally. The dp.save() function makes this possible.

```python
dp.save('datapackage.json')
```

The `datapackage.json`
([download](https://github.com/frictionlessdata/example-data-packages/blob/master/periodic-table/datapackage.json)) is inlined below.  Note that atomic number has been correctly inferred as an `integer` and atomic mass as a `number` (float) while every other column is a `string`.

```json
{
  'profile': 'tabular-data-package',
  'resources': [{
    'path': 'data.csv',
    'profile': 'tabular-data-resource',
    'name': 'data',
    'format': 'csv',
    'mediatype': 'text/csv',
    'encoding': 'UTF-8',
    'schema': {
      'fields': [{
          'name': 'atomic number',
          'type': 'integer',
          'format': 'default'
        },
        {
          'name': 'symbol',
          'type': 'string',
          'format': 'default'
        },
        {
          'name': 'name',
          'type': 'string',
          'format': 'default'
        },
        {
          'name': 'atomic mass',
          'type': 'number',
          'format': 'default'
        },
        {
          'name': 'metal or nonmetal?',
          'type': 'string',
          'format': 'default'
        }],
    'missingValues': ['']
    }
  }],
  'name': 'periodic-table',
  'title': 'Periodic Table'
}
```

## Publishing

Now that you have created your Data Package, you might want to [publish your data online](/blog/2016/08/29/publish-online/) so that you can share it with others.
