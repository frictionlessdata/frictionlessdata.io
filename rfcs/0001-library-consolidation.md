---
title: Libraries consolidation for better users/contributors UX
date: 2020-04-16
author: ["Evgeny", "Rufus"]
---

# Overview

It's a continuation of the discussion - https://github.com/frictionlessdata/project/issues/380. Instead of going into low-level details it's, for now, more focused on the high-level picture.

There are main FD's tools:

![fd](https://user-images.githubusercontent.com/557395/79447268-47aece00-7fe8-11ea-9d2c-ee81aa7d431e.png)

I think in high-level it can be a good map for libraries consolidation e.g.

## frictionless

> Also as an options `datapackage/datalib` etc. Datapackage is a good brand though it seems kind narrow and something having a mention of Frictionless Data feels the most practical for project popularization 

```
SOURCE: tabulator(?) + tableschema + tableschema-sql/datahub/etc + datapackage
TARGET: frictionless
---
pip install frictionless
pip install frictionless[sql,pandas]
---
Package/Resource.fromCsv()
Package/Resource.fromSql()
Package/Resource.fromPandas()
etc
```

## goodtables

> Already consolidated but goodtables.js/goodtables.io needs an update

```
SOURCE: goodtables
TARGET: goodtables
---
pip install goodtables
pip install goodtables[stats]
```

## dataflows

> I'm not sure if we need both DPP and Dataflows names. Dataflows sounds very nice

```
SOURCE: datapackage-pipelines-* + dataflows-* (processors are duplicated)
TARGET: dataflows
---
pip install dataflows
pip install dataflows[aws,scheduler]
```

