(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{325:function(t,a,s){var e=s(1),i=s(326),r=s(103);e({target:"Array",proto:!0},{fill:i}),r("fill")},326:function(t,a,s){"use strict";var e=s(10),i=s(104),r=s(15);t.exports=function(t){for(var a=e(this),s=r(a.length),o=arguments.length,n=i(o>1?arguments[1]:void 0,s),l=o>2?arguments[2]:void 0,c=void 0===l?s:i(l,s);c>n;)a[n++]=t;return a}},351:function(t,a,s){},352:function(t,a,s){},395:function(t,a,s){"use strict";s(351)},396:function(t,a,s){"use strict";s(352)},531:function(t,a,s){"use strict";s.r(a);var e=s(12),i=s(21),r=(s(325),s(50),s(175),s(176),s(177),[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]]),o=function(){function t(a){Object(e.a)(this,t),this.shape=[8,3],this.domNode=a}return Object(i.a)(t,[{key:"configure",value:function(){var t=this,a=Honeycomb.extendHex({size:75,orientation:"flat",currentIndex:function(){var a=this.toPoint(),s=t.gridType.pointToHex([a.x,a.y]);return s.x+1+(s.y+1)*t.shape[0]},render:function(a){var s=this.toPoint(),e=s.x,i=s.y,o=this.toPoint(),n=this.center().add(o),l=(t.gridType.pointToHex([o.x,o.y]),this.corners()),c=this.currentIndex(),d={width:1,color:"#999"};""===r[c][0]&&(d={}),this.draw=a.polygon(l.map((function(t){var a=t.x,s=t.y;return"".concat(a,",").concat(s)}))).fill("none").stroke(d).translate(e,i);var v=r[c][0],p=v.includes("\n")?n.y-26:n.y-13;a.text(v).font({size:13,anchor:"middle",leading:1.4,fill:"#EA6D4C"}).translate(n.x,p)},openAnchor:function(){var t=this.currentIndex();""!==r[t][0]&&window.open(r[t][1])},highlight:function(){var t=this.currentIndex();""!==r[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#EA6D4C"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(a)}},{key:"setup",value:function(){var t=this.shape;this.configure();var a=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(a)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(a){var s=a.offsetX,e=a.offsetY,i=t.gridType.pointToHex([s,e]),r=t.gridInstance.get(i);r&&r.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(a){var s=a.offsetX,e=a.offsetY,i=t.gridType.pointToHex([s,e]),r=t.gridInstance.get(i);r&&r.openAnchor()}))}}]),t}(),n={mounted:function(){var t=new o(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},l=(s(395),s(29)),c={components:{JobsDiagram:Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"1a770786",null).exports}},d=(s(396),Object(l.a)(c,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"banner p-8 text-black"},[s("div",{staticClass:"inner-container"},[s("h1",{staticClass:"text-center text-3xl font-normal"},[t._v("Frictionless Projects"),s("br"),s("small",{staticClass:"font-light text-xl"},[t._v("Open Source projects for working with data."),s("hr")])]),t._v(" "),s("div",{staticClass:"main-section black-text"},[s("div",{staticClass:"features flex flex-row flex-wrap py-4"},[s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center",staticStyle:{opacity:"0.5"}},[s("div",{staticClass:"px-8 text-center"},[s("a",{attrs:{href:"https://frictionlessdata.io/",target:"_blank"}},[s("img",{staticStyle:{width:"200px",border:"dashed 1px #555",padding:"10px","border-radius":"10px"},attrs:{src:"/img/software/components.png"}}),t._v(" "),s("h3",[t._v("Frictionless Application (soon)")])]),t._v(" "),s("p",[t._v("Data management application for Browser and Desktop for working with tabular data.")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"px-8 text-center"},[s("a",{attrs:{href:"https://framework.frictionlessdata.io",target:"_blank"}},[s("img",{staticStyle:{width:"200px",border:"dashed 1px #555",padding:"10px","border-radius":"10px"},attrs:{src:"/img/software/framework.png"}}),t._v(" "),s("h3",[t._v("Frictionless Framework")])]),t._v(" "),s("p",[t._v("Python framework to describe, extract, validate, and transform tabular data.")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"px-8 text-center"},[s("a",{attrs:{href:"https://livemark.frictionlessdata.io",target:"_blank"}},[s("img",{staticStyle:{width:"200px",border:"dashed 1px #555",padding:"10px","border-radius":"10px"},attrs:{src:"/img/software/livemark.png"}}),t._v(" "),s("h3",[t._v("Livemark")])]),t._v(" "),s("p",[t._v("Static site generator that extends Markdown with charts, tables, scripts, and more.")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"px-8 text-center"},[s("a",{attrs:{href:"https://repository.frictionlessdata.io",target:"_blank"}},[s("img",{staticStyle:{width:"200px",border:"dashed 1px #555",padding:"10px","border-radius":"10px"},attrs:{src:"/img/software/repository.png"}}),t._v(" "),s("h3",[t._v("Frictionless Repository")])]),t._v(" "),s("p",[t._v("Github Action allowing you to validate tabular data on every commit to your repository.")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"px-8 text-center"},[s("a",{attrs:{href:"https://specs.frictionlessdata.io",target:"_blank"}},[s("img",{staticStyle:{width:"200px",border:"dashed 1px #555",padding:"10px","border-radius":"10px"},attrs:{src:"/img/software/libraries.png"}}),t._v(" "),s("h3",[t._v("Frictionless Standards")])]),t._v(" "),s("p",[t._v("Lightweight yet comprehensive data standards as Data Package and Table Schema.")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"px-8 text-center"},[s("a",{attrs:{href:"https://datahub.io/",target:"_blank"}},[s("img",{staticStyle:{width:"200px",border:"dashed 1px #555",padding:"10px","border-radius":"10px"},attrs:{src:"/img/software/datahub.png"}}),t._v(" "),s("h3",[t._v("Datahub")])]),t._v(" "),s("p",[t._v("A web platform built on Frictionless Data that allows discovering, publishing, and sharing data.")])])])])])])]),t._v(" "),s("div",{staticClass:"main-section black-text py-8 bg-secondary"},[s("h1",{staticClass:"text-center font-normal text-3xl px-12",attrs:{id:"more"}},[t._v("For anyone who works with data"),s("br"),s("small",{staticClass:"font-light text-xl"},[t._v("Especially complex data or across tools or teams."),s("hr")])]),t._v(" "),s("div",{staticClass:"features flex flex-row flex-wrap lg:px-40"},[s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"py-12 px-8 text-center"},[s("img",{attrs:{src:"/img/home/researchers-color.svg",height:"175"}}),t._v(" "),s("h3",{staticClass:"font-normal"},[t._v("Researchers")]),t._v(" "),s("p",[t._v("Make your research data more reproducible")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"py-12 px-8 text-center"},[s("img",{attrs:{src:"/img/home/dscientists-color.svg",height:"175"}}),t._v(" "),s("h3",{staticClass:"font-normal"},[t._v("Data Scientists")]),t._v(" "),s("p",[t._v("Easily create data processing pipelines")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"py-12 px-8 text-center"},[s("img",{attrs:{src:"/img/home/dengineers-color.svg",height:"175"}}),t._v(" "),s("h3",{staticClass:"font-normal"},[t._v("Data Engineers")]),t._v(" "),s("p",[t._v("Standardize complex data platforms")])])])])]),t._v(" "),s("div",{staticClass:"main-section py-10 black-text"},[s("div",{staticClass:"mx-auto lg:w-3/5 text-center font-normal"},[s("h1",{staticClass:"text-3xl lg:px-40",attrs:{id:"more"}},[t._v("Frictionless Data Integration and Management")]),s("br"),s("small",{staticClass:"font-light text-xl"},[t._v("Data integration is the job of bringing complex data together, cleaning it up, knitting it together and pushing it into downstream applications, analytics or warehouses – and you can do this reliably, repeatedly and automatedly with Frictionless.")]),s("hr",{staticClass:"mt-4"})]),t._v(" "),s("div",{staticClass:"flex flex-row flex-wrap w-3/4 mx-auto"},[s("div",{staticClass:"lg:flex-1 flex-col pt-10"},[s("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[s("div",{staticClass:"w-1/5 px-8"},[s("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/sourcing-data.svg"}})]),t._v(" "),s("div",{},[s("h3",{staticClass:"font-normal"},[t._v(" Packaging Data ")]),t._v(" "),s("p",{staticClass:"xxl:w-2/3"},[t._v(" Package data with its metadata and schema for increased usability and clarity. ")])])]),t._v(" "),s("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[s("div",{staticClass:"w-1/5 px-8"},[s("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/transforming-data.svg"}})]),t._v(" "),s("div",{},[s("h3",{staticClass:"font-normal"},[t._v(" Transforming Data ")]),t._v(" "),s("p",{staticClass:"xxl:w-2/3"},[t._v(" Data often requires some transformations, like cleaning or conversions from one format to another. ")])])]),t._v(" "),s("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[s("div",{staticClass:"w-1/5 px-8"},[s("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/pushing-data.svg"}})]),t._v(" "),s("div",{},[s("h3",{staticClass:"font-normal"},[t._v(" Pushing and Storing Data ")]),t._v(" "),s("p",{staticClass:"xxl:w-2/3"},[t._v(" Frictionless has several plugins for accessing and storing data, for example in a SQL database. ")])])])]),t._v(" "),s("div",{staticClass:"container lg:flex-1 md:pt-12 pt-8"},[s("img",{staticClass:"shadow-lg",attrs:{src:"/img/home/snippet.png"}})])])]),t._v(" "),s("div",{staticClass:"banner p-8 black-text gray-section",attrs:{id:"video-section"}},[s("div",{staticClass:"inner-container"},[s("div",{staticClass:"mx-auto lg:w-3/5 text-center mb-8"},[s("h1",{staticClass:"font-normal text-3xl"},[t._v("Why Frictionless?")]),t._v(" "),s("small",{staticClass:"font-light text-xl"},[t._v("Rufus Pollock, Frictionless Data co-creator, explains the problem Frictionless addresses through simple specifications and software.")]),t._v(" "),s("hr",{staticClass:"mt-4"}),t._v(" "),s("div",{staticClass:"video my-10"},[s("iframe",{staticClass:"w-full h-full",attrs:{src:"https://www.youtube.com/embed/lWHKVXxuci0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])]),t._v(" "),s("div",{staticClass:"main-section py-10 black-text text-center font-normal"},[s("div",{staticClass:"mb-5 mx-auto flex flex-col"},[s("h1",{staticClass:"text-3xl lg:px-40",attrs:{id:"more"}},[t._v("User Testimonials")]),t._v(" "),s("small",{staticClass:"font-light text-xl"},[t._v("Frictionless Data project has been adopted by many organizations and individuals.")]),t._v(" "),s("hr",{staticClass:"mt-4"}),t._v(" "),s("div",{staticClass:"features flex flex-row flex-wrap lg:px-40"},[s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"py-12 px-8 text-center"},[s("img",{staticClass:"rounded-full",attrs:{src:"/img/home/francisco-alvez.png",height:"100"}}),t._v(" "),s("p",{staticClass:"font-light text-lg"},[t._v('"The Frictionless Data stack is proving itself to be a solid foundation on which to build the next wave of open data. It promotes FAIR data from inception in order to build modern Open Data Portals!"')]),t._v(" "),s("p",[t._v("- Francisco Alves, Frictionless Contributor")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"py-12 px-8 text-center"},[s("img",{staticClass:"rounded-full",attrs:{src:"/img/home/simon-tyrrell.jpg",height:"100"}}),t._v(" "),s("p",{staticClass:"font-light text-lg"},[t._v("\"Frictionless is the happy mix of being easy to understand and use along with being extensible and open, it's pretty much the perfect way of bundling data and metadata together. Don't leave home without it :-)\"")]),t._v(" "),s("p",[t._v("- Simon Tyrrell, Frictionless Tool Fund Grantee")])])]),t._v(" "),s("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[s("div",{staticClass:"py-12 px-8 text-center"},[s("img",{staticClass:"rounded-full",attrs:{src:"/img/home/oleg-lavrovsky.png",height:"100"}}),t._v(" "),s("p",{staticClass:"font-light text-lg"},[t._v('"Data standards are a powerful instrument to support the next generation of users, develop compelling use cases and define new ecosystems that create jobs. Frictionless Data has helped us to achieve all of the above."')]),t._v(" "),s("p",[t._v(" - Oleg Lavrovsky, Frictionless Tool Fund Grantee ")])])])])])])])}),[],!1,null,null,null));a.default=d.exports}}]);