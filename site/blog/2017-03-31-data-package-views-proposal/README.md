---
title: Data Package Views Proposal
date: 2017-03-31
tags: ["specs", "views"]
image: https://docs.google.com/drawings/d/1M_6Vcal4PPSHpuKpzJQGvRUbPb5yeaAdRHomIIbfnlY/pub?w=790&h=1402
description: Producers and consumers of data want to have their data presented in tables and graphs -- "views" on the data. This outlines a proposal on a Frictionless approach this including a spec and tooling.
author: Rufus Pollock
---

**Update: Sep 2017: the core views proposal is now an official spec https://specs.frictionlessdata.io/views/https://specs.frictionlessdata.io/views/**

## Introduction

### Motivation

Producers and consumers of data [packages] want to have their data presented in tables and graphs -- "views" on the data.

*Why? For a range of reasons -- from simple eyeballing to drawing out key insights.*

```mermaid
graph LR
  data[Your Data] --> table[Table]
  data --> grap[Graph]

  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;
  class data implemented;
```

To achieve this we need to provide:

* A tool-chain to create these views from the data.
* A descriptive language for specifying views such as tables, graphs, map.

These requirements are addressed through the introduction of Data Package "Views" and associated tooling.

```mermaid
graph LR

  subgraph Data Package
    resource[Resource]
    view[View]
    resource -.-> view
  end
  
  view --> toolchain
  toolchain --> svg["Rendered Graph (SVG)"]
  toolchain --> table[Table]
```

We take a "running code" approach -- as in the rest of the Frictionless Data effort. We develop the spec by building a working implementation, and iterate around the spec as we develop. As development progresses the spec crystallizes and becomes ever less subject to change.

Our current implementation efforts focus on provide javascript tools and building a data package registry (DPR). 

### Desired Features

* Specify views such as graphs and tables as part of a data package
  * => views should be describable in a specification serializable as JSON
* Simple things are simple: adding a bar chart or line chart is fast and easy -- seconds to do and requiring minimal knowledge
* Powerful and extensible: complex and powerful graphing is also powerful
* Reuse: leverage the power of existing specs like [Vega][] (and tools like Vega and Plotly)
* Composable: the views spec should be independent but composable with the other data package specs (and even usable on its own)

[Vega]: http://vega.github.io/

### Concepts and Background

*In progress -- not quite finished*

To generate visualizations you usually want the following 3 types of information:

- metadata: e.g. title of graph, credits etc
- graph: description / specification of the graph itself
- data: specification of data sources for the graph including location and key metadata like types

The data spec itself often consists of three distinct parts:

- "raw / graph data": a spec / description of data exactly in the form needed by the visualization system. This is often a very well defined spec e.g. an array of series ... 
- locate/describe: a spec of where to get data from e.g. `url` or `data` attribute plus some information on that data such as format and types.
- transform: a spec of how transform external data prior to use e.g. pivoting or filtering it 

From this description it should be clear that the latter two data specs -- locate/describe and transform -- are actually generic and independent of the specific graphing library. The only thing the graphing library really needs is a clear description of the "raw" format which it directly consumes. Thus, we can consider a natural grouping of specs as:

- general-metadata - e.g. title of graph, credits etc [provided by e.g. Data Package / define yourself!]
- data: sourcing and transform [provided by e.g. Data Resource]
  - sourcing: how to source data from external sources
  - transform: how to transform data e.g. pivot it, select one field, scale a field etc
- graph description / specification [provided by e.g. Vega]
  - graph data (raw): data as directly consumed by graph spec (usually JSON based if we are talking about JS web-based visualization)

However, in many visualization tools -- including specs like Vega -- these items are combined together. This is understandable as these tools seek to offer users a "complete solution". However, **decoupling these parts and having clearly defined interfaces would offer significant benefits**:

* Extensability: it would be easier to extend and adapt the system. For example, adding new data import options could be done without changing the graph system.
* Composability: we can combine different parts together in different ways. For example, data import and transformation could be used for generating data for tabular display as well as graphing. 
* Reusability: we want to reuse existing tools and specifications wherever possible. If we keep the specs relatively separate we can reuse the best spec for each job.
* Reliability: when the system is decoupled it is easier to test and check.

In summary, a smaller pieces, loosely joined makes it easier to adapt and evolve the specs and the associated tooling.


## The Tool Chain

*We describe the tool chain first -- following Frictionless Data practice of "running code". The tool chain is what turns source data + a graph description into a rendered graph.*

:::info
NOTE: In v1 described here there is no transform support as yet.
:::

***Figure 1: From Data Package View Spec to Rendered output***

```mermaid
graph TD
  pre[Pre-cursor views e.g. Recline] --bespoke conversions--> dpv[Data Package Views]
  dpv --"normalize (correct any variations and ensure key fields are present)"--> dpvn["Data Package Views<br />(Normalized)"]
  dpvn --"compile in resource & data ([future] do transforms)"--> dpvnd["Self-Contained View<br />(All data and schema inline)"]
  dpvnd --compile to native spec--> plotly[Plotly Spec]
  dpvnd --compile to native spec--> vega[Vega Spec]
  plotly --render--> html[svg/png/etc]
  vega --render--> html
```

:::info
**IMPORTANT**: an important "convention" we adopt for the "compiling-in" of data is that resource data should be inlined into an `_values` attribute. If the data is tabular this attribute should be an array of *arrays* (not objects).
:::


### Graphs

***Figure 2: Conversion paths***

```mermaid
graph LR
  inplotly["Plotly DP Spec"] --> plotly[Plotly JSON]
  simple[Simple Spec] --> plotly
  simple .-> vega[Vega JSON]
  invega[Vega DP Spec] --> vega
  vegalite[Vega Lite DP Spec] --> vega
  recline[Recline] .-> simple
  plotly --plotly lib--> svg[SVG / PNG]
  vega --vega lib--> svg
  
  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;
  class recline,simple,plotly,svg implemented;
```

Notes:

* Implemented paths are shown in lightblue.
* Left-most column (Recline): pre-specs that we can convert to our standard specs
* Second-from-left column: DP View spec types.
* Second-from-right column: the graphing libraries we can use (which all output to SVG)

### Geo support

:::info
**Note**: support for customizing map is limited to JS atm - there is no real map "spec" in JSON yet beyond the trivial version.

**Note**: vega has some geo support but geo here means full geojson style mapping.
:::

```mermaid
graph LR

  geo[Geo Resource] --> map
  map[Map Spec] --> leaflet[Leaflet]
  
  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;
  class geo,map,leaflet implemented;
```

### Table support

```mermaid
graph LR
  resource[Tabular Resource] --> table
  table[Table Spec] --> handsontable[HandsOnTable]
  table --> html[Simple HTML Table]
  
  classDef implemented fill:lightblue,stroke:#333,stroke-width:4px;
  class resource,table,handsontable implemented;
```

### Summary

***Figure 3: From Data Package View to Rendered output flow (richer version of diagram 1)***

<img src="https://docs.google.com/drawings/d/1M_6Vcal4PPSHpuKpzJQGvRUbPb5yeaAdRHomIIbfnlY/pub?w=790&h=1402" />


---


## Data Package Views Specification

*This is the formal specification*

Data Package Views ("Views") define data views such as graphs or tables based on the data in a Data Package.

> TODO: could they exist independently of a data package? Yes! 

Views are defined in the `views` property of the Data Package descriptor.

`views` MUST be an array. Each entry in the array MUST be an object. This object MUST follow the Data Package View specification set out here.

A View MUST have the following form:

```javascript
{
  // generic metadata - very similar to Data Resource or Data Package
  "name": "..."   // unique identifier for view within list of views. (should we call it id ?)
  "title": "My view" // title for this graph
  ...
  
  // data sources for this spec
  "resources": [ resource1, resource2 ]  
  
  "specType": "" // one of simple | plotly | vega
  // graph spec
  "spec":
}
```

### Data Source Spec

The data source spec is as follows:

```
resources: [ resourceObjOrId, resourceObjOrId ]
```

That is: an array where each entry is either:

* A number - indicating the resource index in the resource array of the parent Data Package
* A string - indicating the name of the resource in the resource array of the parent Data Package
* An Object: being a full Data Resource object

:::info
The resources is termed "compiled" if all resources are objects and all data on those resources has been inlined onto an attribute named `_values`. At this point, the view is entirely self-contained -- all resources and their associated data is "inside" the view object and no external data loading is required.
:::

### Graph Spec

#### Simple Graph Spec

The simple graph spec provides a very simple graph descriptor setup that aims for an 80/20 result. It supports only the following graph types:

* Line `line` (single and multiple). Especially time series
* Bar `bar` - Especially time series
* (?) Pie `pie` -- we are considering excluding pie charts as they are not widely used, often poor information design
* (?) Stacked bar


```
// example data

| x | y | z |
-------------
| 1 | 8 | 5 |
-------------
| 2 | 9 | 7 |
-------------
```


```javascript
{
  "type": "line",
  "group": "x",
  "series": [ "y", "z" ]
}
```

#### Table Spec

```
{
  "name": "table-1",
  "resources": ["resource-1"]
  "specType": "table"
}
```

#### Vega Spec

*We are using vega as an input: raw vega plus a few tweaks to support data input out of line from their spec (e.g. resources)*

This is straight-up Vega. The only modification that we leave out data references (where we need to know a table name we can rely on the names in the resources array).

This example is just copied from http://vega.github.io/vega-editor/?mode=vega&spec=bar

```javascript
{
  "width": 400,
  "height": 200,
  "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
  
  // NOTE: data property is MISSING here!
  
  "scales": [
    {
      "name": "x",
      "type": "ordinal",
      "range": "width",
      "domain": {"data": "table", "field": "x"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "domain": {"data": "table", "field": "y"},
      "nice": true
    }
  ],
  "axes": [
    {"type": "x", "scale": "x"},
    {"type": "y", "scale": "y"}
  ],
  "marks": [
    {
      "type": "rect",
      "from": {"data": "table"},
      "properties": {
        "enter": {
          "x": {"scale": "x", "field": "x"},
          "width": {"scale": "x", "band": true, "offset": -1},
          "y": {"scale": "y", "field": "y"},
          "y2": {"scale": "y", "value": 0}
        },
        "update": {
          "fill": {"value": "steelblue"}
        },
        "hover": {
          "fill": {"value": "red"}
        }
      }
    }
  ]
}
```

To understand how this fits together with the overall spec here's the full view -- note how the data and graph spec are separated:

```javascript
{
  "title": "My amazing bar chart"
  "resources": [
    {
      "name": "table",
      "data": [
        {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
        {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
        {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
        {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
        {"x": 9,  "y": 52}, {"x": 10, "y": 48},
        {"x": 11, "y": 24}, {"x": 12, "y": 49},
        {"x": 13, "y": 87}, {"x": 14, "y": 66},
        {"x": 15, "y": 17}, {"x": 16, "y": 27},
        {"x": 17, "y": 68}, {"x": 18, "y": 16},
        {"x": 19, "y": 49}, {"x": 20, "y": 15}
      ]
    }
  ],
  "specType": "vega",
  "spec": {
    "width": 400,
    "height": 200,
    "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
    "scales": [
      {
        "name": "x",
        "type": "ordinal",
        "range": "width",
        "domain": {"data": "table", "field": "x"}
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "domain": {"data": "table", "field": "y"},
        "nice": true
      }
    ],
    "axes": [
      {"type": "x", "scale": "x"},
      {"type": "y", "scale": "y"}
    ],
    "marks": [
      {
        "type": "rect",
        "from": {"data": "table"},
        "properties": {
          "enter": {
            "x": {"scale": "x", "field": "x"},
            "width": {"scale": "x", "band": true, "offset": -1},
            "y": {"scale": "y", "field": "y"},
            "y2": {"scale": "y", "value": 0}
          },
          "update": {
            "fill": {"value": "steelblue"}
          },
          "hover": {
            "fill": {"value": "red"}
          }
        }
      }
    ]
  }
}
```

#### Vega support status 31 Mar 2017

> We have implemented Vega graph spec support, but there are some limitations that are described below.

##### Support for Vega spec that does not have data transform, e.g.:

```json
{
  "width": 800,
  "height": 500,
  "data": [
    {
      "name": "drive",
      "url": "data/driving.csv"
    }
  ],
  ...
}
```

can be used in a Data Package as following:

```json
{
  "name": "some dp",
  ...
  "resources": [...],
  "views": [
    {
      "name": "demo-dp",
      "title": "demo dp",
      "resources": [0], //or can be avoided as it refers to the first resource
      "specType": "vega",
      "spec": {
        "width": 800,
        "height": 500,
        // NOTE no data property in here
        ...
      }
    }
  ]
}
```
so information about dataset is moved to "resources" attribute of the Datapackage and looks like following:
```json
"resources": [
  {
    "name": "drive",
    "path": "data/driving.csv",
    "schema": {
      "fields": [
        {
          "name": "side",
          "type": "string"
        },
        ...
      ]
    }
  }
],
```

##### Multiple resources per a view

If there are no data transforms, Vega spec with multiple datasets are also supported, e.g. https://staging.datapackaged.com/anuveyatsu/lifelines
```json
{
  "width": 400,
  "height": 100,
  "data": [
    {
      "name": "people",
      "url": "data/people.csv"
    },
    {
      "name": "events",
      "format": {"parse":{"when":"date"}},
      "url": "data/events.csv
    }

  ],
  ...
}
```

#### Vega-lite spec

Identical to Vega approach

#### Plotly spec

Identical to vega approach


-------------------------------------------------

## Appendix: Simple Views - FAQ

Why not vega-lite?

* vega-lite multiple lines approach is a bit weird and counter-intuitive. This matters as this is very common.
* overall vega-lite retains too much complexity.

Why not this alternative series notation:

```
  series: [["x", "y"], ["x", "z"]]
```

* pros: explicit about the series ... 
* pros: you can plot two different series with different x values (as long as they have some commonality ... )
* cons: more verbose.
* cons: 2nd multiple x values point is actually confusing for most users ... (?)

Simplicity is crucial here so those cons outweight the pros.

The following assumes the data has been provided in standard table form - with relevant naming for tables if multiple tables.

#### vega-lite simple example

```javascript
{
  "mark": "line",
  "encoding": {
    "x": {"field": "Date", "type": "temporal"},
    "y": {"field": "VIXClose", "type": "quantitative"}
  }
}
```

* What we don't like: having to tell it explicitly what the types are - can we infer that?

## Appendix - Recline Views

To specify a Recline view, it must have `type` and `state` attributes. 

### `"type"` attribute

>We used to use this attribute to identify what graph type we need: plotyl or vega-lite. I suppose it should be used for something else. Right now, if `"type"` attribute  is set to `vega-lite`, we render vega-lite chart. In all other cases we render plotly chart.

### `"state"` attribute

`"state"` attribute must be an object and have `"graphType"`, `"group"` and `"series"` attributes.

`"graphType"` indicates type of the chart - line chart, bar chart, etc. Value must be a string.

`"group"` is used to specify base axis - right now it is used as abscissa. It must be a string that is usually a primary key in a resource.

`"series"` is used to specify ordinate - it must be an array of string elements. Each element represents a field name.

### Example of the `views` attribute:

```
"views": [
    {
      "type": "Graph",
      "state": {
        "graphType": "lines",
        "group": "date",
        "series": [ "autumn" ]
      }
    }
  ]
```

## Appendix: Analysis of Vis libraries data objects

Focus on "inline" data structure - i.e. data structure in memory.

Motivation for this: need to generate this data structure.

### Vega

See: https://github.com/vega/vega/wiki/Data#examples

Data structure is standard "array of objects":

```
[
  {"x":0, "y":3},
  {"x":1, "y":5}
]

# note in Vega docs it is put as ...
[{"x":0, "y":3}, {"x":1, "y":5}]
```

Also supports simple array of values `[1,2,3]` which is implicitly mapped to:

```
[
  { "data": 1 },
  { "data": 2 },
  { "data": 3 }
]
```

Note that internally vega adds `_id` to all rows as a unique identifier (cf pandas).

```
# this input
[{"x":0, "y":3}, {"x":1, "y":5}]

# internally becomes
[{"_id":0, "x":0, "y":3}, {"_id":1, "x":1, "y":5}]
```

You can also add a `name` attribute to name the data table and then the data is put in `values`:

```
{
  "name": "table",
  "values": [12, 23, 47, 6, 52, 19]
}
```

Finally, inside the overall vega spec you put the data inside a `data` property:

```
{
  "width": 400,
  "height": 200,
  "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
  "data": [
    {
      "name": "table",
      "values": [
        {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
				...
```

See https://vega.github.io/vega-editor/?mode=vega

#### Remote Data

Looks like a lot like Resource. Assume that data is mapped to inline structure


### Vega-Lite

https://vega.github.io/vega-lite/docs/data.html

Same as Vega except that:

* `data` is an object not an array -- only one data source allowed
	* Will be given the name `source` when converting to Vega
* Only one property allowed: `values`
	* And for remote data: `url` and `format`

### Plotly

http://help.plot.ly/json-chart-schema/
https://plot.ly/javascript/reference/

The Plotly model does not separate the data out quite as cleanly as vega does. The structure for Plotly json specs is as follows:

* Oriented around "series"
* Each series includes its data **plus** the spec for the graph
	* The data is stored in two attributes `x` and `y`
* Separate `layout` property giving overall layout (e.g. margins, titles etc)

To give a sense of how it works this is the JS for creating a Plotly graph:

```javascript
Plotly.plot('graphDiv', data, layout);
```

#### Examples

From http://help.plot.ly/json-chart-schema/ and links therein:

```javascript
{
	"data": [
		{
			"x": [
				"giraffes", 
				"orangutans", 
				"monkeys"
			], 
			"y": [
				20, 
				14, 
				23
			], 
			"type": "bar"
		}
	]
}
```

```javascript
[
  {
    "name": "SF Zoo",
    "marker": {
      "color": "rgba(55, 128, 191, 0.6)",
      "line": {
        "color": "rgba(55, 128, 191, 1.0)",
        "width": 1
      }
    },
    "y": [
      "giraffes",
      "orangutans",
      "monkeys"
    ],
    "x": [
      20,
      14,
      23
    ],
    "type": "bar",
    "orientation": "h",
    "uid": "a4a45d"
  },
  {
    "name": "LA Zoo",
    "marker": {
      "color": "rgba(255, 153, 51, 0.6)",
      "line": {
        "color": "rgba(255, 153, 51, 1.0)",
        "width": 1
      }
    },
    "y": [
      "giraffes",
      "orangutans",
      "monkeys"
    ],
    "x": [
      12,
      18,
      29
    ],
    "type": "bar",
    "orientation": "h",
    "uid": "d912bc"
  }
]
```

## Appendix: Plotly Graph spec research

We would like users to be able to use Plotly JSON chart schema in their Data Package Views specs so they can take full advantage of Plotly's capabilities.

Here's an example - https://plot.ly/~Dreamshot/8259/

```json
{
    "data": [
        {
            "name": "Col2", 
            "uid": "babced", 
            "fillcolor": "rgb(224, 102, 102)", 
            "y": [
                "17087182", 
                "29354370", 
                "38760373", 
                "40912332", 
            ], 
            "x": [
                "2000-01-01", 
                "2001-01-01", 
                "2002-01-01", 
                "2003-01-01", 
            ], 
            "fill": "tonexty", 
            "type": "scatter", 
            "mode": "none"
        }
    ], 
    "layout": {
        "autosize": false, 
        "yaxis": {
            "range": [
                0, 
                1124750578.9473684
            ], 
            "type": "linear", 
            "autorange": true, 
            "title": ""
        }, 
        "title": "Total Number of Websites", 
        "height": 500, 
        "width": 800, 
        "xaxis": {
            "tickformat": "%Y", 
            "title": "...", 
            "showgrid": false, 
            "range": [
                946702800000, 
                1451624400000
            ], 
            "type": "date", 
            "autorange": true
        }
    }
}
```

So, the major requirement will be link the plotly data structure with an external data resources in the Data Package View.

**Key point:  Plotly data is of form:**

```javascript
data: [
    {
      "name": ...
      x: [...]
      y: [...],
      z: [...] // optional
    },
    ...
  ]
}
```

We just need a way to bind these ... 

```javascript
data: [
    {
      name: // by convention this must match the resource - if that is not possible use resource
      resource: .... // only if name cannot match resource
      x: "field name ..."  // if this is a string not an array then look it up in the resource ...
      y: "field name ..."
      z: "field name ..."
    },
    ...
  ]
}
```

*Using this approach we would support most of Basic, Statistical and 3D charts of Plotly library. We would not support pie chart (labels, values), maps ...*

:::info
**Data manipulations -- not supported**

In some examples of Plotly there are manipulations (e.g. filtering) on the raw data. As this is done in Javascript outside of Plotly JSON language we would not be able to support this.
:::


In the `plotlyToPlotly` function:
```javascript
export function plotlyToPlotly(view) {
  let plotlySpec = Object.assign({}, view.spec)
  
  for trace in plotlySpec.data {
    if(trace.resource) {
      let resource = findResourceByNameOrIndex(view, trace.resource)
      const rowsAsObjects = true
      const rows = getResourceCachedValues(resource, rowsAsObjects)
      if(trace.xField) {
        trace.x = rows.map(row => row[trace.xField])
        delete trace.xField
      }
      if(trace.yField) {
        trace.y = rows.map(row => row[trace.yField])
        delete trace.yField
      }
      if(trace.zField) {
        trace.z = rows.map(row => row[trace.zField])
        delete trace.zField
      }

      delete trace.resource      
    }
  }
  
  return plotlySpec
}
```


## Appendix: Data Transform Research

### Plotly Transforms

No libraries for data transform have been found.

### Vega Transforms

https://github.com/vega/vega/wiki/Data-Transforms - v2

https://vega.github.io/vega/docs/transforms/ - v3

Vega provided Data Transforms can be used to manipulate datasets before rendering a visualisation. E.g., one may need to perform transformations such as aggregation or filtering (there many types, see link above) of a dataset and display the graph only after that. Another situation would be creating a new dataset by applying various calculations on an old one.

Usually transforms are defined in `transform` array inside `data` property.

"Transforms that do not filter or generate new data objects can be used within the transform array of a mark definition to specify post-encoding transforms."

Examples:

#### Filtering 

https://vega.github.io/vega-editor/?mode=vega&spec=parallel_coords

This example filters rows that have both `Horsepower` and `Miles_per_Gallon` fields.

```json
{
 "data": [
    {
      "name": "cars",
      "url": "data/cars.json",
      "transform": [
        {
          "type": "filter",
          "test": "datum.Horsepower && datum.Miles_per_Gallon"
        }  
      ]
    }
  ] 
}
```

#### Geopath, aggregate, lookup, filter, sort, voronoi and linkpath

https://vega.github.io/vega-editor/?mode=vega&spec=airports

This example has a lot of transforms - in some cases there is only transform applied to a dataset, in other cases there are sequence of transforms.

In the first dataset, it applies `geopath` transform which maps GeoJSON features to SVG path strings. It uses `alberUsa` projection type ([more about projection](https://vega.github.io/vega/docs/projections/)).

In the second dataset, it applies sum operation on "count" field and outputs it as "flights" fields.

In the third dataset: 
1) it compares its "iata" field against "origin" field of "traffic" dataset. Matching values are outputed as "traffic" field. 
2) Next, it filters out all values that are null.
3) After that, it applies `geo` transform as in the first dataset above. 
4) Next, it filters out layout_x and layout_y values that are null. 
5) Then, it sorts dataset by traffic.flights field in descending order.
6) After that, it applies `voronoi` transform to compute voronoi diagram based on "layout_x" and "layout_y" fields.

In the last dataset:
1) First, it filters values on which there is a signal called "hover" (specified in the Vega spec's "signals" property) with "iata" attribute that matches to the dataset's "origin" field.
2) Next, it looks up matching values of "airports" dataset's "iata" field against its "origin" and "destination" fields. Output fields are saved as "_source" and "_target".
3) Filters "_source" and "_target" values that are truthy (not null).
4) Finally, linkpath transform creates visual links between nodes ([more about linkpath](https://vega.github.io/vega/docs/transforms/linkpath/)).

```json
{
  "data": [
    {
      "name": "states",
      "url": "data/us-10m.json",
      "format": {"type": "topojson", "feature": "states"},
      "transform": [
        {
          "type": "geopath", "projection": "albersUsa",
          "scale": 1200, "translate": [450, 280]
        }
      ]
    },
    {
      "name": "traffic",
      "url": "data/flights-airport.csv",
      "format": {"type": "csv", "parse": "auto"},
      "transform": [
        {
          "type": "aggregate", "groupby": ["origin"],
          "summarize": [{"field": "count", "ops": ["sum"], "as": ["flights"]}]
        }
      ]
    },
    {
      "name": "airports",
      "url": "data/airports.csv",
      "format": {"type": "csv", "parse": "auto"},
      "transform": [
        {
          "type": "lookup", "on": "traffic", "onKey": "origin",
          "keys": ["iata"], "as": ["traffic"]
        },
        {
          "type": "filter",
          "test": "datum.traffic != null"
        },
        {
          "type": "geo", "projection": "albersUsa",
          "scale": 1200, "translate": [450, 280],
          "lon": "longitude", "lat": "latitude"
        },
        {
          "type": "filter",
          "test": "datum.layout_x != null && datum.layout_y != null"
        },
        { "type": "sort", "by": "-traffic.flights" },
        { "type": "voronoi", "x": "layout_x", "y": "layout_y" }
      ]
    },
    {
      "name": "routes",
      "url": "data/flights-airport.csv",
      "format": {"type": "csv", "parse": "auto"},
      "transform": [
        { "type": "filter", "test": "hover && hover.iata == datum.origin" },
        {
          "type": "lookup", "on": "airports", "onKey": "iata",
          "keys": ["origin", "destination"], "as": ["_source", "_target"]
        },
        { "type": "filter", "test": "datum._source && datum._target" },
        { "type": "linkpath" }
      ]
    }
  ]
}
```

#### Further research on Vega transforms

https://github.com/vega/vega-dataflow-examples/

It is quite difficult to me to read the code as there is not enough documentation. I have included here the simplest example:

`vega-dataflow.js` contains Dataflow, all transforms and vega's utilities.

```htmlmixed
<!DOCTYPE HTML>
<html>
  <head>
    <title>Dataflow CountPattern</title>
    <script src="../../build/vega-dataflow.js"></script>
    <style>
      body { margin: 10px; font-family: Helvetica Neue, Arial; font-size: 14px; }
      textarea { width: 800px; height: 200px; }
      pre { font-family: Monaco; font-size: 10px; }
    </style>
  </head>
  <body>
    <textarea id="text"></textarea><br/>
    <input id="slider" type="range" min="2" max="10" value="4"/>
    Frequency Threshold<br/>
    <pre id="output"></pre>
  </body>
</html>
```

`df` is a Dataflow instance where we register (.add) functions and parameters - as below on line 36-38. The same with adding transforms - lines 40-44. We can pass different parameters to the transforms depending on requirements of each of them. Event handlers can added by using `.on` method of the Dataflow instance - lines 46-48.

```javascript
var tx = vega.transforms; // all transforms 
var out = document.querySelector('#output');
var area = document.querySelector('#text');
area.value = [
  "Despite myriad tools for visualizing data, there remains a gap between the notational efficiency of high-level visualization systems and the expressiveness and accessibility of low-level graphical systems."
].join('\n\n');
var stopwords = "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his)";

var get = vega.field('data');

function readText(_, pulse) {
  if (this.value) pulse.rem = this.value;
  return pulse.source = pulse.add = [vega.ingest(area.value)];
}

function threshold(_) {
  var freq = _.freq,
      f = function(t) { return t.count >= freq; };
  return (f.fields = ['count'], f);
}

function updatePage() {
  out.innerText = c1.value.slice()
    .sort(function(a,b) {
      return (b.count - a.count)
        || (b.text > a.text ? -1 : a.text > b.text ? 1 : 0);
    })
    .map(function(t) {
      return t.text + ': ' + t.count;
    })
    .join('\n');
}

var df = new vega.Dataflow(), // create a new Dataflow instance
// then add various operators into Dataflow instance:
    ft = df.add(4), // word frequency threshold
    ff = df.add(threshold, {freq:ft})
    rt = df.add(readText),
    // add a transforms (tx):
    cp = df.add(tx.CountPattern, {field:get, case:'lower',
      pattern:'[\\w\']{2,}', stopwords:stopwords, pulse:rt}),
    cc = df.add(tx.Collect, {pulse:cp}),
    fc = df.add(tx.Filter, {expr:ff, pulse:cc}),
    c1 = df.add(tx.Collect, {pulse:fc}),
    up = df.add(updatePage, {pulse: c1});
df.on(df.events(area, 'keyup').debounce(250), rt)
  .on(df.events('#slider', 'input'), ft, function(_, e) { return +e.target.value; })
  .run();
```
---
> // below is old analysis

There are number of transforms and they are located in different libraries. Basics are here https://github.com/vega/vega-dataflow/tree/master/src/transforms

Generally, all data flow happens in the [vega-dataflow module](https://github.com/vega/vega-dataflow). There are lots of complicated operations performed to data input and parameters. Some of transform functions are inherited from another functions/classes which makes difficult to separate them:

Filter function:
```javascript
export default function Filter(params) {
  Transform.call(this, fastmap(), params);
}

var prototype = inherits(Filter, Transform);

// more code for prototype
```
and Transform is:
```javascript
import Operator from './Operator';
import {inherits} from 'vega-util';

/**
 * Abstract class for operators that process data tuples.
 * Subclasses must provide a {@link transform} method for operator processing.
 * @constructor
 * @param {*} [init] - The initial value for this operator.
 * @param {object} [params] - The parameters for this operator.
 * @param {Operator} [source] - The operator from which to receive pulses.
 */
export default function Transform(init, params) {
  Operator.call(this, init, null, params);
}

var prototype = inherits(Transform, Operator);

/**
 * Overrides {@link Operator.evaluate} for transform operators.
 * Marshalls parameter values and then invokes {@link transform}.
 * @param {Pulse} pulse - the current dataflow pulse.
 * @return {Pulse} The output pulse (or StopPropagation). A falsy return
     value (including undefined) will let the input pulse pass through.
 */
prototype.evaluate = function(pulse) {
  var params = this.marshall(pulse.stamp),
      out = this.transform(params, pulse);
  params.clear();
  return out;
};

/**
 * Process incoming pulses.
 * Subclasses should override this method to implement transforms.
 * @param {Parameters} _ - The operator parameter values.
 * @param {Pulse} pulse - The current dataflow pulse.
 * @return {Pulse} The output pulse (or StopPropagation). A falsy return
 *   value (including undefined) will let the input pulse pass through.
 */
prototype.transform = function() {};
```
and as we can see Transform inherits from Operator and so on.


But some of the transform functions looks independent:

Getting cross product:
```javascript
// filter is an optional  function for selectively including tuples in the cross product.
function cross(input, a, b, filter) {
  var data = [],
      t = {},
      n = input.length,
      i = 0,
      j, left;

  for (; i<n; ++i) {
    t[a] = left = input[i];
    for (j=0; j<n; ++j) {
      t[b] = input[j];
      if (filter(t)) {
        data.push(ingest(t));
        t = {};
        t[a] = left;
      }
    }
  }

  return data;
}
```

Other transforms:
* Linkpath https://github.com/vega/vega-encode
* Geo https://github.com/vega/vega-geo
* Hierarchical https://github.com/vega/vega-hierarchy/tree/master/definitions
* voronoi https://github.com/vega/vega-voronoi
* crossfilter https://github.com/vega/vega-crossfilter


### DP Pipelines transforms

DPP provides number of transforms that can be applied to a dataset. However, those transforms cannot be processed inside browsers as the library requires Python scripts to run.

**Below is a copy-paste from DPP docs:**


#### ***`concatenate`***

Concatenates a number of streamed resources and converts them to a single resource.

_Parameters_:

- `sources` - Which resources to concatenate. Same semantics as `resources` in `stream_remote_resources`.

  If omitted, all resources in datapackage are concatenated.

  Resources to concatenate must appear in consecutive order within the data-package.

- `target` - Target resource to hold the concatenated data. Should define at least the following properties:

  - `name` - name of the resource
  - `path` - path in the data-package for this file.

  If omitted, the target resource will receive the name `concat` and will be saved at `data/concat.csv` in the datapackage.

- `fields` - Mapping of fields between the sources and the target, so that the keys are the _target_ field names, and values are lists of _source_ field names.

  This mapping is used to create the target resources schema.

  Note that the target field name is _always_ assumed to be mapped to itself.

*Example*:

```yaml
- run: concatenate
  parameters: 
    target:
      name: multi-year-report
      path: data/multi-year-report.csv
    sources: 'report-year-20[0-9]{2}'
    fields:
      activity: []
      amount: ['2009_amount', 'Amount', 'AMOUNT [USD]', '$$$']    
```

In this example we concatenate all resources that look like `report-year-<year>`, and output them to the `multi-year-report` resource.

The output contains two fields:

- `activity` , which is called `activity` in all sources
- `amount`, which has varying names in different resources (e.g. `Amount`, `2009_amount`, `amount` etc.)

#### ***`join`***

Joins two streamed resources. 

"Joining" in our case means taking the *target* resource, and adding fields to each of its rows by looking up data in the _source_ resource. 

A special case for the join operation is when there is no target stream, and all unique rows from the source are used to create it. 
This mode is called _deduplication_ mode - The target resource will be created and  deduplicated rows from the source will be added to it.

_Parameters_:

- `source` - information regarding the _source_ resource
  - `name` - name of the resource
  - `key` - One of
    - List of field names which should be used as the lookup key
    - String, which would be interpreted as a Python format string used to form the key (e.g. `{<field_name_1>}:{field_name_2}`)
  - `delete` - delete from data-package after joining (`False` by default)
- `target` - Target resource to hold the joined data. Should define at least the following properties:
  - `name` - as in `source`
  - `key` - as in `source`, or `null` for creating the target resource and performing _deduplication_.
- `fields` - mapping of fields from the source resource to the target resource. 
  Keys should be field names in the target resource.
  Values can define two attributes:
  - `name` - field name in the source (by default is the same as the target field name)

  - `aggregate` - aggregation strategy (how to handle multiple _source_ rows with the same key). Can take the following options: 
    - `sum` - summarise aggregated values. 
      For numeric values it's the arithmetic sum, for strings the concatenation of strings and for other types will error.

    - `avg` - calculate the average of aggregated values.

      For numeric values it's the arithmetic average and for other types will err.

    - `max` - calculate the maximum of aggregated values.

      For numeric values it's the arithmetic maximum, for strings the dictionary maximum and for other types will error.

    - `min` - calculate the minimum of aggregated values.

      For numeric values it's the arithmetic minimum, for strings the dictionary minimum and for other types will error.

    - `first` - take the first value encountered

    - `last` - take the last value encountered

    - `count` - count the number of occurrences of a specific key
      For this method, specifying `name` is not required. In case it is specified, `count` will count the number of non-null values for that source field.

    - `set` - collect all distinct values of the aggregated field, unordered 
    
    - `array` - collect all values of the aggregated field, in order of appearance   

    - `any` - pick any value.

    By default, `aggregate` takes the `any` value.

  If neither `name` or `aggregate` need to be specified, the mapping can map to the empty object `{}` or to `null`.
- `full`  - Boolean,
  - If `True` (the default), failed lookups in the source will result in "null" values at the source.
  - if `False`, failed lookups in the source will result in dropping the row from the target.

_Important: the "source" resource **must** appear before the "target" resource in the data-package._

*Examples*:

```yaml
- run: join
  parameters: 
    source:
      name: world_population
      key: ["country_code"]
      delete: yes
    target:
      name: country_gdp_2015
      key: ["CC"]
    fields:
      population:
        name: "census_2015"        
    full: true
```

The above example aims to create a package containing the GDP and Population of each country in the world.

We have one resource (`world_population`) with data that looks like:

| country_code | country_name   | census_2000 | census_2015 |
| ------------ | -------------- | ----------- | ----------- |
| UK           | United Kingdom | 58857004    | 64715810    |
| ...          |                |             |             |

And another resource (`country_gdp_2015`) with data that looks like:

| CC   | GDP (£m) | Net Debt (£m) |
| ---- | -------- | ------------- |
| UK   | 1832318  | 1606600       |
| ...  |          |               |

The `join` command will match rows in both datasets based on the `country_code` / `CC` fields, and then copying the value in the `census_2015` field into a new `population` field.

The resulting data package will have the `world_population` resource removed and the `country_gdp_2015` resource looking like:

| CC   | GDP (£m) | Net Debt (£m) | population |
| ---- | -------- | ------------- | ---------- |
| UK   | 1832318  | 1606600       | 64715810   |
| ...  |          |               |            |



A more complex example:

```yaml
- run: join
  parameters: 
    source:
      name: screen_actor_salaries
      key: "{production} ({year})"
    target:
      name: mgm_movies
      key: "{title}"
    fields:
      num_actors:
        aggregate: 'count'
      average_salary:
        name: salary
        aggregate: 'avg'
      total_salaries:
        name: salary
        aggregate: 'sum'
    full: false
```

This example aims to analyse salaries for screen actors in the MGM studios.

Once more, we have one resource (`screen_actor_salaries`) with data that looks like:

| year | production                  | actor             | salary   |
| ---- | --------------------------- | ----------------- | -------- |
| 2016 | Vertigo 2                   | Mr. T             | 15000000 |
| 2016 | Vertigo 2                   | Robert Downey Jr. | 7000000  |
| 2015 | The Fall - Resurrection     | Jeniffer Lawrence | 18000000 |
| 2015 | Alf - The Return to Melmack | The Rock          | 12000000 |
| ...  |                             |                   |          |

And another resource (`mgm_movies`) with data that looks like:

| title                     | director      | producer     |
| ------------------------- | ------------- | ------------ |
| Vertigo 2 (2016)          | Lindsay Lohan | Lee Ka Shing |
| iRobot - The Movie (2018) | Mr. T         | Mr. T        |
| ...                       |               |              |

The `join` command will match rows in both datasets based on the movie name and production year. Notice how we overcome incompatible fields by using different key patterns.

The resulting dataset could look like:

| title            | director      | producer     | num_actors | average_salary | total_salaries |
| ---------------- | ------------- | ------------ | ---------- | -------------- | -------------- |
| Vertigo 2 (2016) | Lindsay Lohan | Lee Ka Shing | 2          | 11000000       | 22000000       |
| ...              |               |              |            |                |                |


---

### Vega Dataflow usage for DP views

Vega has quite a lot of data transform functions available, however, most of them require complicated JSON descriptor to use. Although we may implement them in the future, at the moment we could start with the most basic and essential ones:

**List of transforms that we could use:**

* Aggregate
* Filter
* Formula (applies given formula to dataset)
* Sample

#### Aggregate example

We have dataset with 4 fields - a, b, c and d. Lets apply different aggregation methods on them - count, sum, min and max:

```javascript
const vegadataflow = require('./build/vega-dataflow.js');

var tx = vegadataflow.transforms,
    changeset = vegadataflow.changeset;

var data = [
 {
   "a": 17.76,
   "b": 20.14,
   "c": 17.05,
   "d": 17.79
 },
 {
   "a": 19.19,
   "b": 21.29,
   "c": 19.19,
   "d": 19.92
 },
 {
   "a": 20.33,
   "b": 22.9,
   "c": 19.52,
   "d": 21.12
 },
 {
   "a": 20.15,
   "b": 20.72,
   "c": 19.04,
   "d": 19.31
 },
 {
   "a": 17.93,
   "b": 18.09,
   "c": 16.99,
   "d": 17.01
 }
];

var a = vegadataflow.field('a'),
    b = vegadataflow.field('b'),
    c = vegadataflow.field('c'),
    d = vegadataflow.field('d');

var df = new vegadataflow.Dataflow(),
    col = df.add(tx.Collect),
    agg = df.add(tx.Aggregate, {
            fields: [a, b, c, d],
            ops: ['count', 'sum', 'min', 'max'],
            pulse: col
          }),
    out = df.add(tx.Collect, {pulse: agg});

df.pulse(col, changeset().insert(data)).run();

console.dir(out.value);
```

Output:
```javascript
[ 
  {
    _id: 7, 
    count_a: 5, 
    sum_b: 103.14, 
    min_c: 16.99, 
    max_d: 21.12 
  }
]
```

#### Filter example

Using the dataset from example above, lets filter values of field `a` that are not greater than 19:

```javascript
const vegadataflow = require('./build/vega-dataflow.js');

var tx = vegadataflow.transforms,
    changeset = vegadataflow.changeset;

var data = [
 {
   "a": 17.76,
   "b": 20.14,
   "c": 17.05,
   "d": 17.79
 },
 {
   "a": 19.19,
   "b": 21.29,
   "c": 19.19,
   "d": 19.92
 },
 {
   "a": 20.33,
   "b": 22.9,
   "c": 19.52,
   "d": 21.12
 },
 {
   "a": 20.15,
   "b": 20.72,
   "c": 19.04,
   "d": 19.31
 },
 {
   "a": 17.93,
   "b": 18.09,
   "c": 16.99,
   "d": 17.01
 }
];

var a = vegadataflow.field('a');

var filter1 = vegadataflow.accessor(d => { return d.a > 19 }, ['a']);

var df = new vegadataflow.Dataflow(),
    ex = df.add(null),
    col = df.add(tx.Collect),
    fil = df.add(tx.Filter, {expr: ex, pulse: col}),
    out = df.add(tx.Collect, {pulse: fil});

df.pulse(col, changeset().insert(data));
df.update(ex, filter1).run();

console.log(out.value);

```

Output:
```javascript
[ 
  { a: 19.19, b: 21.29, c: 19.19, d: 19.92, _id: 3 },
  { a: 20.33, b: 22.9, c: 19.52, d: 21.12, _id: 4 },
  { a: 20.15, b: 20.72, c: 19.04, d: 19.31, _id: 5 } 
]
```

#### Formula example

Using the same dataset, lets apply mapping on a field:

```javascript
const vegadataflow = require('./build/vega-dataflow.js');

var tx = vegadataflow.transforms,
    changeset = vegadataflow.changeset;

var data = [
 {
   "a": 17.76,
   "b": 20.14,
   "c": 17.05,
   "d": 17.79
 },
 {
   "a": 19.19,
   "b": 21.29,
   "c": 19.19,
   "d": 19.92
 },
 {
   "a": 20.33,
   "b": 22.9,
   "c": 19.52,
   "d": 21.12
 },
 {
   "a": 20.15,
   "b": 20.72,
   "c": 19.04,
   "d": 19.31
 },
 {
   "a": 17.93,
   "b": 18.09,
   "c": 16.99,
   "d": 17.01
 }
];


var df = new vegadataflow.Dataflow(),
    e = vegadataflow.field('e'),
    f = vegadataflow.field('f'),
    formula1 = vegadataflow.accessor(d => { return d.a * 10; }, ['a']),
    formula2 = vegadataflow.accessor(d => { return d.b / 10; }, ['b']),
    col = df.add(tx.Collect),
    fa = df.add(tx.Formula, {expr: formula1, as: 'e', pulse: col}),
    fb = df.add(tx.Formula, {expr: formula2, as: 'f', pulse: fa});

df.pulse(col, changeset().insert(data)).run();

console.log(col.value.map(e));
console.log(col.value.map(f));
```

Output:
```
[ 177.60000000000002, 191.9, 203.29999999999998, 201.5, 179.3 ]
[ 2.0140000000000002, 2.129, 2.29, 2.072, 1.809 ]
```

#### Sample example

Lets create a dataset with 100 rows and take a sample of 10 from it:

```javascript
const vegadataflow = require('./build/vega-dataflow.js');

var tx = vegadataflow.transforms,
    changeset = vegadataflow.changeset;

var n = 100,
    sampleSize = 10,
    data = Array(n),
    i;

for(i=0; i<n; i++) data[i] = {v:Math.random()};

var df = new vegadataflow.Dataflow(),
    s = df.add(tx.Sample, {size: sampleSize});

df.pulse(s, changeset().insert(data)).run();

console.log(s.value);
```

Output:
```
[ 
  { v: 0.3332451883830292, _id: 69 },
  { v: 0.2874480689159735, _id: 3 },
  { v: 0.18009915754527817, _id: 41 },
  { v: 0.10513776386462825, _id: 27 },
  { v: 0.4972760501252764, _id: 35 },
  { v: 0.757859721485594, _id: 67 },
  { v: 0.248170225498199, _id: 64 },
  { v: 0.431513510601889, _id: 28 },
  { v: 0.07281378713091247, _id: 37 },
  { v: 0.9543216903991236, _id: 33 } 
]
```

### Suggestion on usage from datapackage.json

Our current simple view layout:

```javascript
{
  name: 'sample',
  resource: [0],
  specType: 'simple',
  spec: {
    type: 'line',
    group: 'a',
    series: ['b', 'c']
  }
}
```

We could add `transform` property that would be a specification for transforms to be applied. Each transform would have slightly different properties:

#### Aggregate

```javascript
{
  ...
  transform: {
    type: 'aggregate',
    fields: ['a', 'b'],
    operations: ['sum', 'min']
  },
  ...
}
```
For `aggregate` transform, a publisher should pass a field name and an operation to be applied. Operations should be one of https://vega.github.io/vega/docs/transforms/aggregate/

#### Filter

```javascript
{
  ...
  transform: {
    type: 'filter',
    expr: 'data.fieldName > 10'
  },
  ...
}
```
For `filter` type expression should evaluate to true or false so only truthy values will be kept.

#### Formula

```javascript
{
  ...
  transform: {
    type: 'formula',
    expr: ['data.fieldName * 2', 'data.fieldName + 10'],
    as: ['x', 'y']
  },
  ...
}
```

For `formula` type, a field will be mapped with given expression and output will be stored in new fields that are specified in `as` property.

#### Sample

```javascript
  ...
  transform: {
    type: 'sample',
    size: 'some integer'
  },
  ...
```
In `sample` type, only size of a sample is needed.


## Appendix: SQL Transforms

Just use SQL e.g.

* http://harelba.github.io/q/
* https://github.com/agershun/alasql
* https://github.com/google/lovefield
