(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{692:function(e,t,a){"use strict";a.r(t);var r=a(29),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v("Originally posted on: "),a("a",{attrs:{href:"https://medium.com/opendatacoop/announcing-flatterer-converting-structured-data-into-tabular-data-c4652eae27c9",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://medium.com/opendatacoop/announcing-flatterer-converting-structured-data-into-tabular-data-c4652eae27c9"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("em",[e._v("In this blog post, we introduce Flatterer - a new tool that helps convert JSON into tabular data. To hear more about Flatterer, "),a("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeuNCopxXauMkrWvF6VHqOyHMcy54SfNDOseVXfWRQZWkvqjQ/viewform",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign up"),a("OutboundLink")],1),e._v(" to join David Raznick at the Frictionless Data community call on July 28th.")])]),e._v(" "),a("p",[e._v("Open data needs to be available in formats people want to work with. In our experience at "),a("a",{attrs:{href:"https://opendataservices.coop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Data Services"),a("OutboundLink")],1),e._v(", we’ve found that developers often want access to structured data (for example, JSON) while analysts are used to working with flat data (in CSV files or tables).")]),e._v(" "),a("p",[e._v("More and more data is being published as JSON, but for most analysts this isn’t particularly useful. For many, working with JSON means needing to spend time converting the structured data into tables before they can get started.")]),e._v(" "),a("p",[e._v("That’s where "),a("a",{attrs:{href:"https://github.com/kindly/flatterer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flatterer"),a("OutboundLink")],1),e._v(" comes in. Flatterer is an opinionated JSON to CSV/XLSX/SQLITE/PARQUET converter. It helps people to convert JSON into relational, tabular data that can be easily analysed. It’s fast and memory efficient, and can be run either in the "),a("a",{attrs:{href:"https://flatterer.opendata.coop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),a("OutboundLink")],1),e._v(" or as a "),a("a",{attrs:{href:"https://deepnote.com/@david-raznick/Flatterer-Demo-FWeGccp_QKCu1WAEGQ0mEQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python library"),a("OutboundLink")],1),e._v(". The Python library supports creating data frames for all the flattened data, making it easy to analyse and visualise.")]),e._v(" "),a("h2",{attrs:{id:"what-does-it-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-do"}},[e._v("#")]),e._v(" What does it do?")]),e._v(" "),a("p",[e._v("With Flatterer you can:")]),e._v(" "),a("ul",[a("li",[e._v("easily convert JSON to flat relational data such as CSV, XLSX, Database Tables, Pandas Dataframes and Parquet;")]),e._v(" "),a("li",[e._v("convert JSON into data packages, so you can use Frictionless data to convert into any database format;")]),e._v(" "),a("li",[e._v("create a data dictionary that contains metadata about the conversion, including fields contained in the dataset, to help you understand the data you are looking at;")]),e._v(" "),a("li",[e._v("create a new table for each one-to-many relationship, alongside _link fields that help to join the data together.")])]),e._v(" "),a("h2",{attrs:{id:"why-we-built-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-we-built-it"}},[e._v("#")]),e._v(" Why we built it")]),e._v(" "),a("p",[e._v("When you receive a JSON file where the structure is deeply nested or not well specified, it’s hard to determine what the data contains. Even if you know the JSON structure, it can still be time consuming to work out how to flatten the JSON into a relational structure for data analysis, and to be part of a data pipeline."),a("br"),e._v("\nFlatterer aims to be the first tool to go to when faced with this problem. Although you may still need to handwrite code, Flatterer has a number of benefits over most handwritten approaches:")]),e._v(" "),a("ul",[a("li",[e._v("it’s fast – written in Rust but with Python bindings for ease of use. It can be 10x faster than hand written Python flattening;")]),e._v(" "),a("li",[e._v("it’s memory efficient – flatterer uses a custom streaming JSON parser which means that a long list of objects nested with the JSON will be streamed, so less data needs to be loaded into memory at once;")]),e._v(" "),a("li",[e._v("it gives you fast, memory efficient output to CSV/XLSX/SQLITE/PARQUET;")]),e._v(" "),a("li",[e._v("it uses best practice that has been learnt from our experience flattening JSON countless times, such as generating keys to link one-to-many tables to their parents.")])]),e._v(" "),a("h2",{attrs:{id:"using-flatterer-in-the-openownership-data-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-flatterer-in-the-openownership-data-pipeline"}},[e._v("#")]),e._v(" Using Flatterer in the OpenOwnership data pipeline")]),e._v(" "),a("p",[e._v("As an example, we’ve used "),a("a",{attrs:{href:"https://github.com/kindly/flatterer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flatterer"),a("OutboundLink")],1),e._v(" to help "),a("a",{attrs:{href:"https://www.openownership.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenOwnership"),a("OutboundLink")],1),e._v(" create a data pipeline to make information about who owns and controls companies available in a "),a("a",{attrs:{href:"https://bods-data.openownership.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("variety of data formats"),a("OutboundLink")],1),e._v(". In the example below, we’ve used Flatterer to convert beneficial ownership data from the Register of Enterprises of the Republic of Latvia and the OpenOwnership Register from JSON into CSV, SQLite, Postgresql, Big Query and Datasette formats.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/74717970/179058338-08ce8ea1-9b1f-4c4c-b59c-64b04cd450f6.png",alt:"img-1-flatterer"}})]),e._v(" "),a("p",[e._v("Alongside converting the data into different formats, Flatterer has created a data dictionary that shows the fields contained in the dataset, alongside the field type and field counts. In the example below, we show how this dictionary interprets person_statement fields contained in the Beneficial Ownership Data Standard.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/74717970/179058526-19694210-514e-4215-bf9d-f6abc7ef5400.png",alt:"img-2-flatterer"}})]),e._v(" "),a("p",[e._v("Finally, you can see Flatterer has created special _link fields, to help with joining the tables together. The example below shows how the _link field helps join "),a("a",{attrs:{href:"https://medium.com/opendatacoop/why-do-open-organisational-identifiers-matter-46af05ab30a",target:"_blank",rel:"noopener noreferrer"}},[e._v("entity identifiers"),a("OutboundLink")],1),e._v(" to statements about beneficial ownership.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/74717970/179058657-ae4ab534-9fdb-4d6d-ad59-56521f0218e0.png",alt:"img-3-flatterer"}})]),e._v(" "),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What’s next?")]),e._v(" "),a("p",[e._v("Next, we’ll be working to make Flatterer more user friendly. We’ll be exploring creating a desktop interface, improving type guessing for fields, and giving more summary statistics about the input data. We welcome feedback on the tool through "),a("a",{attrs:{href:"https://github.com/kindly/flatterer/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(", and are really interested to find out what kind of improvements you’d like to see.")]),e._v(" "),a("p",[e._v("More information about using Flatterer is available on "),a("a",{attrs:{href:"https://deepnote.com/@david-raznick/Flatterer-Demo-FWeGccp_QKCu1WAEGQ0mEQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("deepnote"),a("OutboundLink")],1),e._v(". To hear more about Flatterer, you can join David Raznick at Frictionless Data’s monthly community call on July 28th.")]),e._v(" "),a("h4",{attrs:{id:"at-open-data-services-cooperative-we-re-always-happy-to-discuss-how-developing-or-implementing-open-data-standards-could-support-your-goals-find-out-more-about-our-work-and-get-in-touch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#at-open-data-services-cooperative-we-re-always-happy-to-discuss-how-developing-or-implementing-open-data-standards-could-support-your-goals-find-out-more-about-our-work-and-get-in-touch"}},[e._v("#")]),e._v(" At Open Data Services Cooperative we’re always happy to discuss how developing or implementing open data standards could support your goals. Find out more about "),a("a",{attrs:{href:"https://opendataservices.coop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("our work"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://opendataservices.coop/#contact",target:"_blank",rel:"noopener noreferrer"}},[e._v("get in touch"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);