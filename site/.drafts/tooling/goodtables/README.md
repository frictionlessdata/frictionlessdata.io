---
title: GoodTables
tagline: A simple yet powerful tool to ensure the quality of tabular data, in Python and on the command line.
description: A simple yet powerful tool to ensure the quality of tabular data, in Python and on the command line.
hexagon:
github: goodtables-py, goodtables.io, goodtables-ui, goodtables-js
layout: product
---

GoodTables is a managed service to validate tabular data. It can check the structure of your data (e.g. all rows have the same number of columns), and its contents (e.g. all dates are valid). Internally, it uses the [Data Quality Spec](https://github.com/frictionlessdata/data-quality-spec) for common tabular data errors. GoodTables also supports data described by [Data Package](/tooling/data-package-tools/) and [Table Schema](/tooling/table-schema-tools/).

Let's visit the [GoodTables][gt] website and login with GitHub to start the process of validating our data.

[gt]: https://goodtables.io/

![goodtables dashboard](https://i.imgur.com/Mxkgsoa.png)

Add a data source in the dashboard using GitHub (Amazon S3 is also supported, but we're only covering GitHub here):

:::tip INFO
We need to create a GitHub repository to store our `helloworld.csv` file. Make sure you use the valid CSV from our example above.
:::

![adding source to goodtables](https://i.imgur.com/6H7jOsf.png)

Because we have valid and well-structured data in our`helloworld.csv`, the results will come back as valid, as seen in the image below

![valid data](https://i.imgur.com/cfp1Jej.png)

Now, let's change to invalid tabular data and see what the checks return:

```bash
Name,Email,,Age
Jill,jill@foo.com
Jack,jack@bar.com,33
23,Jane,jane@foo.com, 22, 33
```

![Invalid data](https://i.imgur.com/LIDV1OC.png)

Of course, this build will fail because some structural errors were detected by GoodTables (**"Blank Header", "Missing value", and "Extra Value"**).

>**Additionally, here's a video walkthrough of the content outlined above**

<iframe width="730" height="315" src="https://www.youtube.com/embed/QSvbMmvhxN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[py]: https://github.com/frictionlessdata/goodtables-py
[js]: https://github.com/frictionlessdata/goodtables-js
[pip]:https://pip.pypa.io/en/stable/
[json]:https://github.com/frictionlessdata/goodtables-py/blob/master/goodtables/schemas/report.json
