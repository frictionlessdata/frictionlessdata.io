(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{685:function(e,a,t){"use strict";t.r(a);var r=t(29),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("I started the "),t("a",{attrs:{href:"https://www.librarieshacked.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Libraries Hacked"),t("OutboundLink")],1),e._v(" project in 2014. Inspired by ‘tech for good’ open data groups and hackathons, I wanted to explore how libraries could leverage data for innovation and service improvement. I had already been involved in the work of the group "),t("a",{attrs:{href:"https://www.bathhacked.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bath Hacked"),t("OutboundLink")],1),e._v(", and worked at the local Council in Bath, releasing large amounts of open data that was well used by the community. That included data such as live car park occupancy, traffic surveys, and air quality monitoring.")]),e._v(" "),t("p",[e._v("Getting involved in civic data publishing led me to explore data software, tools, and standards. I’ve used the Frictionless standards of Table Schema and CSV Dialect, as well as the code libraries that can be utilised to implement these. Data standards are an essential tool for data publishers in order to make data easily usable and reproducible across different organisations.")]),e._v(" "),t("p",[e._v("Public library services in England are managed by 150 local government organisations. The central government department for Digital, Culture, Media, and Sport (DCMS) hold responsibility for superintending those services. In September 2019 they convened a meeting about public library data.")]),e._v(" "),t("p",[e._v("Library data, of many kinds, is not well utilised in England.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Lack of public data")]),e._v(". There are relatively few library services sharing data about themselves for public use.")]),e._v(" "),t("li",[t("strong",[e._v("Low expectations")]),e._v(". There is no guidance on what data to share. Some services will publish certain datasets, but these will likely be different to the ones other publish.")]),e._v(" "),t("li",[t("strong",[e._v("Few standards")]),e._v(". The structure of any published data will be unique to each library service. For example, there are published lists of library branches from "),t("a",{attrs:{href:"https://www.opendatanottingham.org.uk/dataset.aspx?id=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nottinghamshire County Council"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://data.gov.uk/dataset/9342032d-ab88-462f-b31c-4fb07fd4da6f/libraries",target:"_blank",rel:"noopener noreferrer"}},[e._v("North Somerset Council"),t("OutboundLink")],1),e._v(". Both are out of date, and have different fields, field names, field types, and file formats.")])]),e._v(" "),t("p",[e._v("The meeting discussed these issues, amongst others. The problems are understood, but difficult to tackle, as no organisation has direct responsibility for library data. There are also difficult underlying causes - low skills and funding being two major ones.")]),e._v(" "),t("p",[e._v("Large scale culture change will take many years. But to begin some sector-led collaborative work, a group of the attendees agreed to define the fields for a core selection of library datasets. The project would involve data practitioners from across English library services.")]),e._v(" "),t("p",[e._v("The datasets would cover:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Events")]),e._v(": the events that happen in libraries, their attendance, and outcomes")]),e._v(" "),t("li",[t("strong",[e._v("Library branches")]),e._v(": physical building locations, opening hours, and contact details")]),e._v(" "),t("li",[t("strong",[e._v("Loans")]),e._v(": the items lent from libraries, with counts, time periods, and categories")]),e._v(" "),t("li",[t("strong",[e._v("Stock")]),e._v(": the number of items held in libraries, with categories")]),e._v(" "),t("li",[t("strong",[e._v("Mobile library stops")]),e._v(": locations of mobile library stops, and their timetabled frequency")]),e._v(" "),t("li",[t("strong",[e._v("Physical visits")]),e._v(": how many people visit library premises")]),e._v(" "),t("li",[t("strong",[e._v("Membership")]),e._v(": counts of people who are library members, at small-area geographies.")])]),e._v(" "),t("p",[e._v("These can be split into 3 categories:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Registers")]),e._v(". Data that should be updated when it changes. A list of library branches is a permanent register, to be updated when there are changes to those branches.")]),e._v(" "),t("li",[t("strong",[e._v("Snapshot")]),e._v(". Data that is released as a point in time representation. Library membership will be continually changing, but a snapshot of membership counts should be released at regular intervals.")]),e._v(" "),t("li",[t("strong",[e._v("Time-series")]),e._v(". Data that is new every time it is published. Loans data should be published at regular intervals, each published file being an addition to the existing set.")])]),e._v(" "),t("p",[e._v("To work on these, we held an in-person workshop at the DCMS offices. This featured an exciting interruption by a fire drill, and we had to relocate to a nearby café (difficult for a meeting with many people held in in London!). We also formed an online group using Slack to trial and discuss the data.")]),e._v(" "),t("h2",{attrs:{id:"schemas-and-frictionless-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schemas-and-frictionless-data"}},[e._v("#")]),e._v(" Schemas and Frictionless Data")]),e._v(" "),t("p",[e._v("The majority of our discussions were practical rather than technical, such as what data would be most useful, whether or not it was currently used locally by services, and common problems.")]),e._v(" "),t("p",[e._v("However, to formalise how data should be structured, it became clear that it would be necessary to create technical 'data schemas’.")]),e._v(" "),t("p",[e._v("It can be easy to decide on the data you want, but fail to describe it properly. For example, we could provide people with a spreadsheet that included a column title such as ‘Closed date’. I’d expect people to enter a date in that column, but we’d end up with all kinds of formats.")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table Schema"),t("OutboundLink")],1),e._v(" specification for defining data, from Frictionless Data, provided a good option for tackling this problem. Not only would it allow us to create a detailed description for the data fields, but we could use other frictionless tools such as "),t("a",{attrs:{href:"https://goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Good Tables"),t("OutboundLink")],1),e._v(". This would allow library services to validate their data before publishing. Things like mismatching date formats would be picked up by the validator, and it would give instructions for how to fix the issue. We would additionally also provide ‘human-readable’ guidance on the datasets.")]),e._v(" "),t("p",[e._v("Frictionless Data is an "),t("a",{attrs:{href:"https://okfn.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Knowledge Foundation"),t("OutboundLink")],1),e._v(" project, and using tools from an internationally renowned body was also a good practice. The schemas are UK-centric but could be adapted and reused by international library services.")]),e._v(" "),t("p",[e._v("The schemas are all documented at "),t("a",{attrs:{href:"https://schema.librarydata.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Public Library Open Data"),t("OutboundLink")],1),e._v(", including guidance, links to sample data, and the technical definition files.")]),e._v(" "),t("h2",{attrs:{id:"lessons-learned"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lessons-learned"}},[e._v("#")]),e._v(" Lessons learned")]),e._v(" "),t("p",[e._v("The initial datasets are not comprehensive. They are designed to be a starting point, allowing more to be developed from service requirements.")]),e._v(" "),t("p",[e._v("They are overly focussed towards ‘physical’ library services. It wasn’t long after these meetings that public libraries adjusted to provide all-digital services due to lockdowns. There is nothing here to cover valuable usage datasets like the video views that library services receive on YouTube and Facebook.")]),e._v(" "),t("p",[e._v("There are some that have become even more important. The physical visits schema describes how to structure library footfall data, allowing for differences in collection methods and intervals. This kind of data is now in high demand, to analyse how library service visits recover.")]),e._v(" "),t("p",[e._v("Some of the discussions we had were fascinating. It was important to involve the people who work with this data on a daily basis. They will know how easy it is to extract and manipulate, and many of the pitfalls that come with interpreting it.")]),e._v(" "),t("h3",{attrs:{id:"complexity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#complexity"}},[e._v("#")]),e._v(" Complexity")]),e._v(" "),t("p",[e._v("There was often a battle between complexity and simplicity. Complex data is good, it often means it is more robust, such as using external identifiers. But simplicity is also good, for data publishers and consumers.")]),e._v(" "),t("p",[e._v("Public library services will primarily employ data workers who are not formally trained in using data. Where there are complex concepts (e.g. Table Schema itself), they are used because they make data publishing easier and more consistent.")]),e._v(" "),t("p",[e._v("Public data should also be made as accessible as possible for the public, while being detailed enough to be useful. In this way the data schemas tend towards simplicity.")]),e._v(" "),t("h3",{attrs:{id:"standards-not-standardisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#standards-not-standardisation"}},[e._v("#")]),e._v(" Standards not standardisation")]),e._v(" "),t("p",[e._v("There is a difference between a standard format for data, and standardised data. The schemas are primarily aimed at getting data from multiple services into the same format, to share analysis techniques between library services, and to have usable data when merged with other services.")]),e._v(" "),t("p",[e._v("There were some cases where we decided against standardising the actual data within data fields. For example, there is a column in the loans and the stock datasets called ‘Item type’. This is a category description of the library item, such as ‘Adult fiction’. In some other previous examples of data collection this data is standardised into a uniform set of categories, in order to make it easily comparable.")]),e._v(" "),t("p",[e._v("That kind of exercise defies reality though. Library services may have their own set of categories, many of them interesting and unique. To use a standard set would mean that library services would have to convert their underlying data. As well as extra work, it would be a loss of data. It would also mean that library services would be unlikely to use the converted data themselves. Why use such data if it doesn’t reflect what you actually hold?")]),e._v(" "),t("p",[e._v("The downside is that anyone analysing combined data would have to decide themselves how to compare data in those fields. However, that would be at least a clear task for the data analyst - and would most likely be an easier exercise to do in bulk.")]),e._v(" "),t("h3",{attrs:{id:"detail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detail"}},[e._v("#")]),e._v(" Detail")]),e._v(" "),t("p",[e._v("In my ideal world, data would be as detailed as possible. Instead of knowing how many items a library lent every month, I want that data for every hour. In fact I want to have every lending record! But feasibly that would make the data unwieldy and difficult to work with, and wouldn’t be in-line with the statistics libraries are used to.")]),e._v(" "),t("p",[e._v("We primarily made decisions based upon what library services already do. In a lot of cases this was data aggregated into monthly counts, with fields such as library branch and item type used to break down that data.")]),e._v(" "),t("h2",{attrs:{id:"the-future"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-future"}},[e._v("#")]),e._v(" The future")]),e._v(" "),t("p",[e._v("The initial meetings were held over two years ago, and it seems longer than that! A lot has happened in the meantime. We are still in a global pandemic that from library perspectives has de-prioritised anything other than core services.")]),e._v(" "),t("p",[e._v("However, there are good examples of the data in action. Barnet libraries "),t("a",{attrs:{href:"https://open.barnet.gov.uk/dataset/e14dj/library-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("publish 5 out of the 7 data schemas"),t("OutboundLink")],1),e._v(" on a regular basis.")]),e._v(" "),t("p",[e._v("I have also been creating tools that highlight how the data can be used such as "),t("a",{attrs:{href:"https://www.librarymap.co.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Library map"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://www.mobilelibraries.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mobile libraries"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("There is national work underway that can make use of these schemas. The British Library is working on a "),t("a",{attrs:{href:"https://www.artscouncil.org.uk/blog/single-digital-presence-libraries",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single Digital Presence"),t("OutboundLink")],1),e._v(" project that will require data from library services in a standard form.")]),e._v(" "),t("p",[e._v("Internationally there are calls for more public library open data. The International Federation of Library Associations and Institutions (IFLA) has "),t("a",{attrs:{href:"https://www.ifla.org/news/ifla-releases-statement-on-open-library-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("released a statement on Open Library Data"),t("OutboundLink")],1),e._v(" calling for “governments to ensure, either directly or through supporting others, the collection and open publication of data about libraries and their use”. It would be great to work with organisations like IFLA to promote schemas that could be reused Internationally as well as for local services. There could also be the opportunity to use other Frictionless Data tools to aid in publishing data, such as "),t("a",{attrs:{href:"https://datahub.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DataHub"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Hopefully in the future there can be workshops, training events, and conferences that allow these data schemas to be discussed and further developed.")])])}),[],!1,null,null,null);a.default=i.exports}}]);