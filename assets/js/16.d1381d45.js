(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{397:function(t,a,s){t.exports=s.p+"assets/img/bigquery-schema.bd14abfc.png"},398:function(t,a,s){t.exports=s.p+"assets/img/bigquery-preview.4c191e7d.png"},399:function(t,a,s){t.exports=s.p+"assets/img/aws-redshift-cluster-endpoint.bc9d3903.png"},555:function(t,a,s){"use strict";s.r(a);var e=s(29),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("This tutorial uses "),e("code",[t._v("datapackage-py")]),t._v(" which has been replaced with "),e("code",[t._v("frictionless-py")]),t._v(" (as of 2021). See the "),e("a",{attrs:{href:"https://framework.frictionlessdata.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Framework documentation"),e("OutboundLink")],1),t._v(" for help with "),e("code",[t._v("frictionless-py")]),t._v(".")])]),t._v(" "),e("p",[t._v("This tutorial will show you how to install the Python libraries for working with Tabular Data Packages and demonstrate a very simple example of loading a Tabular Data Package from the web and pushing it directly into a local SQL database. Short examples of pushing your dataset to Google’s BigQuery and Amazon’s RedShift follow.")]),t._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("p",[t._v("For this tutorial, we will need the main Python Data Package library:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-py"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("You can install it as follows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" datapackage\n")])])]),e("h2",{attrs:{id:"reading-basic-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-basic-metadata"}},[t._v("#")]),t._v(" Reading Basic Metadata")]),t._v(" "),e("p",[t._v("In this case, we are using an example Tabular Data Package containing the periodic table stored on "),e("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(" ("),e("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage.json"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("data.csv"),e("OutboundLink")],1),t._v("). This dataset includes the atomic number, symbol, element name, atomic mass, and the metallicity of the element.  Here are the first five rows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("atomic number")]),t._v(" "),e("th",[t._v("symbol")]),t._v(" "),e("th",[t._v("name")]),t._v(" "),e("th",[t._v("atomic mass")]),t._v(" "),e("th",[t._v("metal or nonmetal?")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("H")]),t._v(" "),e("td",[t._v("Hydrogen")]),t._v(" "),e("td",[t._v("1.00794")]),t._v(" "),e("td",[t._v("nonmetal")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("He")]),t._v(" "),e("td",[t._v("Helium")]),t._v(" "),e("td",[t._v("4.002602")]),t._v(" "),e("td",[t._v("noble gas")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Li")]),t._v(" "),e("td",[t._v("Lithium")]),t._v(" "),e("td",[t._v("6.941")]),t._v(" "),e("td",[t._v("alkali metal")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Be")]),t._v(" "),e("td",[t._v("Beryllium")]),t._v(" "),e("td",[t._v("9.012182")]),t._v(" "),e("td",[t._v("alkaline earth metal")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("B")]),t._v(" "),e("td",[t._v("Boron")]),t._v(" "),e("td",[t._v("10.811")]),t._v(" "),e("td",[t._v("metalloid")])])])]),t._v(" "),e("p",[t._v("You can start using the library by importing "),e("code",[t._v("datapackage")]),t._v(".  Data Packages can be loaded either from a local path or directly from the web.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datapackage\nurl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json'")]),t._v("\ndp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("At the most basic level, Data Packages provide a standardized format for general metadata (for example, the dataset title, source, author, and/or description) about your dataset.  Now that you have loaded this Data Package, you have access to this metadata using the "),e("code",[t._v("metadata")]),t._v(" dict attribute.  Note that these fields are optional and may not be specified for all Data Packages.  For more information on which fields are supported, see "),e("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the full Data Package standard"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Periodic Table"')]),t._v("\n")])])]),e("h2",{attrs:{id:"reading-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-data"}},[t._v("#")]),t._v(" Reading Data")]),t._v(" "),e("p",[t._v("Now that you have loaded your Data Package, you can read its data.  A Data Package can contain multiple files which are accessible via the "),e("code",[t._v("resources")]),t._v(" attribute.  The "),e("code",[t._v("resources")]),t._v(" attribute is an array of objects containing information (e.g. path, schema, description) about each file in the package.")]),t._v(" "),e("p",[t._v("You can access the data in a given resource in the "),e("code",[t._v("resources")]),t._v(" array by reading the "),e("code",[t._v("data")]),t._v(" attribute.  For example, using our our Periodic Table Data Package, we can return all elements with an atomic number of less than 10 by doing the following:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" e "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hydrogen'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helium'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lithium'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Beryllium'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Boron'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Carbon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nitrogen'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Oxygen'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fluorine'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("If you don’t want to load all data in memory at once, you can lazily access the data using the "),e("code",[t._v("iter()")]),t._v(" method on the resource:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("rows "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("iter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nonmetal'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hydrogen'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.00794'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'noble gas'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'He'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helium'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.002602'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrows"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alkali metal'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Li'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lithium'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6.941'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"loading-into-an-sql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-an-sql-database"}},[t._v("#")]),t._v(" Loading into an SQL database")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://specs.frictionlessdata.io/tabular-data-package/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tabular Data Packages"),e("OutboundLink")],1),t._v(" contains schema information about its data using "),e("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Table Schema"),e("OutboundLink")],1),t._v(". This means you can easily import your Data Package into the SQL backend of your choice. In this case, we are creating an "),e("a",{attrs:{href:"http://sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQLite"),e("OutboundLink")],1),t._v(" database in a new file named "),e("code",[t._v("datapackage.db")]),t._v(".")]),t._v(" "),e("p",[t._v("To load the data into SQL we will need the Table Schema SQL Storage library:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-sql-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-sql-py"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("You can install it by doing:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tableschema-sql\n")])])]),e("p",[t._v("Now you can load your data as follows:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the database connection (using SQLAlchemy)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load and save table to SQL")]),t._v("\nengine "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sqlite:///periodic-table-datapackage.db'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("storage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sql'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("p",[t._v("One way to check if your data has been saved successfully is by running")]),t._v(" "),e("div",{staticClass:"language-Python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * from data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Alternatively, if you have "),e("code",[t._v("sqlite3")]),t._v(" installed, you can inspect and play with your newly created database.  Note that column type information has been translated from the Table Schema format to native SQLite types:")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("$ sqlite3 periodic"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("datapackage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db\nSQLite version "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.19")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v("\nEnter "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usage")]),t._v(" hints"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*check database schema*/")]),t._v("\n\nsqlite"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("schema")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"atomic number"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsymbol "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tname "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"atomic mass"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metal or nonmetal?"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*view all records in the data table*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"loading-into-bigquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-bigquery"}},[t._v("#")]),t._v(" Loading into BigQuery")]),t._v(" "),e("p",[t._v("Loading into BigQuery requires some setup on Google’s infrastructure, but once that is completed, loading data can be just as frictionless. Here are the steps to follow:")]),t._v(" "),e("ol",[e("li",[t._v("Create a new project - "),e("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/projects",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Create a new service account key - "),e("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Download credentials as JSON and save as "),e("code",[t._v(".credentials.json")])]),t._v(" "),e("li",[t._v("Create dataset for your project - "),e("a",{attrs:{href:"https://bigquery.cloud.google.com/welcome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),e("OutboundLink")],1),t._v(" (e.g. “dataset”)")])]),t._v(" "),e("p",[t._v("To load the data into BigQuery using Python, we will need the Table Schema BigQuery Storage library:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-bigquery-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-bigquery-py"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("You can install it as follows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tableschema-bigquery\n")])])]),e("p",[t._v("The code snippet below should be enough to push your dataset into the cloud!")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tableschema "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Table\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" apiclient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discovery "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" build\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" oauth2client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GoogleCredentials\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Prepare BigQuery credentials")]),t._v("\nos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GOOGLE_APPLICATION_CREDENTIALS'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dp-py/credentials.json'")]),t._v("\ncredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GoogleCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_application_default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nservice "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" build"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" credentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("credentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nproject "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("io"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credentials.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load and save table to BigQuery")]),t._v("\ntable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.csv'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" project"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dataset'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("If everything is in place, you should now be able to inspect your dataset on BigQuery.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(397),alt:"BigQuery Schema"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(398),alt:"BigQuery Preview"}})]),t._v(" "),e("h2",{attrs:{id:"loading-into-amazon-redshift"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-amazon-redshift"}},[t._v("#")]),t._v(" Loading into Amazon RedShift")]),t._v(" "),e("p",[t._v("Similar to Google’s BigQuery, Amazon RedShift requires "),e("a",{attrs:{href:"http://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("some setup"),e("OutboundLink")],1),t._v(" on AWS. Once you’ve created your cluster, however, all you need to do is use your cluster endpoint to create a connection string for SQLAlchemy.")]),t._v(" "),e("p",[t._v("! Note: using the "),e("a",{attrs:{href:"https://sqlalchemy-redshift.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqlalchemy-redshift dialect"),e("OutboundLink")],1),t._v(" is optional as the "),e("code",[t._v("postgres://")]),t._v(" dialect is sufficient to load your table into AWS RedShift.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(399),alt:"AWS RedShift"}})]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the database connection (using SQLAlchemy)")]),t._v("\nREDSHIFT_URL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres://<user>:<pass>@<host>.redshift.amazonaws.com:5439/<database>'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# load and save table to RedShift")]),t._v("\nengine "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("REDSHIFT_URL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("storage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sql'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check if data has been saved successfully")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * from data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);