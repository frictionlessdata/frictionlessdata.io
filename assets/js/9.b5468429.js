(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{325:function(t,a,e){var s=e(1),i=e(326),o=e(103);s({target:"Array",proto:!0},{fill:i}),o("fill")},326:function(t,a,e){"use strict";var s=e(10),i=e(104),o=e(15);t.exports=function(t){for(var a=s(this),e=o(a.length),n=arguments.length,l=i(n>1?arguments[1]:void 0,e),r=n>2?arguments[2]:void 0,c=void 0===r?e:i(r,e);c>l;)a[l++]=t;return a}},351:function(t,a,e){},352:function(t,a,e){},395:function(t,a,e){"use strict";e(351)},396:function(t,a,e){"use strict";e(352)},546:function(t,a,e){"use strict";e.r(a);var s=e(12),i=e(21),o=(e(325),e(50),e(175),e(176),e(177),[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]]),n=function(){function t(a){Object(s.a)(this,t),this.shape=[8,3],this.domNode=a}return Object(i.a)(t,[{key:"configure",value:function(){var t=this,a=Honeycomb.extendHex({size:75,orientation:"flat",currentIndex:function(){var a=this.toPoint(),e=t.gridType.pointToHex([a.x,a.y]);return e.x+1+(e.y+1)*t.shape[0]},render:function(a){var e=this.toPoint(),s=e.x,i=e.y,n=this.toPoint(),l=this.center().add(n),r=(t.gridType.pointToHex([n.x,n.y]),this.corners()),c=this.currentIndex(),d={width:1,color:"#999"};""===o[c][0]&&(d={}),this.draw=a.polygon(r.map((function(t){var a=t.x,e=t.y;return"".concat(a,",").concat(e)}))).fill("none").stroke(d).translate(s,i);var v=o[c][0],f=v.includes("\n")?l.y-26:l.y-13;a.text(v).font({size:13,anchor:"middle",leading:1.4,fill:"#e077ff"}).translate(l.x,f)},openAnchor:function(){var t=this.currentIndex();""!==o[t][0]&&window.open(o[t][1])},highlight:function(){var t=this.currentIndex();""!==o[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#e077ff"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(a)}},{key:"setup",value:function(){var t=this.shape;this.configure();var a=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(a)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(a){var e=a.offsetX,s=a.offsetY,i=t.gridType.pointToHex([e,s]),o=t.gridInstance.get(i);o&&o.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(a){var e=a.offsetX,s=a.offsetY,i=t.gridType.pointToHex([e,s]),o=t.gridInstance.get(i);o&&o.openAnchor()}))}}]),t}(),l={mounted:function(){var t=new n(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},r=(e(395),e(29)),c={components:{JobsDiagram:Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"6fc3c561",null).exports}},d=(e(396),Object(r.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"main-section black-text py-8"},[e("h1",{staticClass:"text-center text-5xl px-12",attrs:{id:"more"}},[t._v("For Anyone Who Works With Data"),e("br"),e("small",{staticClass:"font-light text-xl"},[t._v("Especially complex data or across tools or teams."),e("hr")])]),t._v(" "),e("div",{staticClass:"features flex flex-row flex-wrap lg:px-40"},[e("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[e("div",{staticClass:"py-12 px-8 text-center"},[e("img",{attrs:{src:"/img/home/researchers-color.svg",height:"175"}}),t._v(" "),e("h3",{staticClass:"font-normal"},[t._v("Researchers")]),t._v(" "),e("p",[t._v("Make your research data more reproducible")])])]),t._v(" "),e("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[e("div",{staticClass:"py-12 px-8 text-center"},[e("img",{attrs:{src:"/img/home/dscientists-color.svg",height:"175"}}),t._v(" "),e("h3",{staticClass:"font-normal"},[t._v("Data Scientists")]),t._v(" "),e("p",[t._v("Easily create data processing pipelines")])])]),t._v(" "),e("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[e("div",{staticClass:"py-12 px-8 text-center"},[e("img",{attrs:{src:"/img/home/dengineers-color.svg",height:"175"}}),t._v(" "),e("h3",{staticClass:"font-normal"},[t._v("Data Engineers")]),t._v(" "),e("p",[t._v("Standardize complex data platforms")])])])])]),t._v(" "),e("div",{staticClass:"main-section py-10 black-text bg-circle-right"},[e("div",{staticClass:"mx-auto lg:w-3/5 text-center font-normal"},[e("h1",{staticClass:"text-5xl lg:px-40",attrs:{id:"more"}},[t._v("Frictionless Data Integration and Management")]),e("br"),e("small",{staticClass:"font-light text-xl"},[t._v("Data integration is the job of bringing complex data together, cleaning it up, knitting it together and pushing it into downstream applications, analytics or warehouses – and you can do this reliably, repeatedly and automatedly with Frictionless.")]),e("hr",{staticClass:"mt-4"})]),t._v(" "),e("div",{staticClass:"flex flex-row flex-wrap w-3/4 mx-auto"},[e("div",{staticClass:"lg:flex-1 flex-col pt-10"},[e("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[e("div",{staticClass:"w-1/5 px-8"},[e("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/sourcing-data.svg"}})]),t._v(" "),e("div",{},[e("h3",{staticClass:"font-normal"},[t._v(" Packaging Data ")]),t._v(" "),e("p",{staticClass:"xxl:w-2/3"},[t._v(" Package data with its metadata and schema for increased usability and clarity. ")])])]),t._v(" "),e("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[e("div",{staticClass:"w-1/5 px-8"},[e("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/transforming-data.svg"}})]),t._v(" "),e("div",{},[e("h3",{staticClass:"font-normal"},[t._v(" Transforming Data ")]),t._v(" "),e("p",{staticClass:"xxl:w-2/3"},[t._v(" Data often requires some transformations, like cleaning or conversions from one format to another. ")])])]),t._v(" "),e("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[e("div",{staticClass:"w-1/5 px-8"},[e("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/pushing-data.svg"}})]),t._v(" "),e("div",{},[e("h3",{staticClass:"font-normal"},[t._v(" Pushing and Storing Data ")]),t._v(" "),e("p",{staticClass:"xxl:w-2/3"},[t._v(" Frictionless has several plugins for accessing and storing data, for example in a SQL database. ")])])])]),t._v(" "),e("div",{staticClass:"container lg:flex-1 md:pt-12 pt-8"},[e("img",{staticClass:"shadow-lg",attrs:{src:"/img/home/snippet.png"}})])])]),t._v(" "),e("div",{staticClass:"banner p-8 black-text bg-circle-left",attrs:{id:"video-section"}},[e("div",{staticClass:"inner-container"},[e("div",{staticClass:"mx-auto lg:w-3/5 text-center mb-8"},[e("h1",{staticClass:"text-5xl"},[t._v("Why Frictionless?")]),t._v(" "),e("small",{staticClass:"font-light text-xl"},[t._v("Rufus Pollock, Frictionless Data co-creator, explains the problem Frictionless addresses through simple specifications and software.")]),t._v(" "),e("hr",{staticClass:"mt-4"}),t._v(" "),e("div",{staticClass:"video my-10"},[e("iframe",{staticClass:"w-full h-full",attrs:{src:"https://www.youtube.com/embed/lWHKVXxuci0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])]),t._v(" "),e("div",{staticClass:"main-section py-10 black-text text-center font-normal"},[e("div",{staticClass:"mb-5 mx-auto flex flex-col"},[e("h1",{staticClass:"text-5xl lg:px-40",attrs:{id:"more"}},[t._v("User Testimonials")]),t._v(" "),e("small",{staticClass:"font-light text-xl"},[t._v("Frictionless Data project has been adopted by many organizations and individuals.")]),t._v(" "),e("hr",{staticClass:"mt-4"}),t._v(" "),e("div",{staticClass:"features flex flex-row flex-wrap lg:px-40"},[e("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[e("div",{staticClass:"py-12 px-8 text-center"},[e("img",{staticClass:"rounded-full",attrs:{src:"/img/home/francisco-alvez.png",height:"100"}}),t._v(" "),e("p",{staticClass:"font-light text-lg"},[t._v('"The Frictionless Data stack is proving itself to be a solid foundation on which to build the next wave of open data. It promotes FAIR data from inception in order to build modern Open Data Portals!"')]),t._v(" "),e("p",[t._v("- Francisco Alves, Frictionless Contributor")])])]),t._v(" "),e("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[e("div",{staticClass:"py-12 px-8 text-center"},[e("img",{staticClass:"rounded-full",attrs:{src:"/img/home/simon-tyrrell.jpg",height:"100"}}),t._v(" "),e("p",{staticClass:"font-light text-lg"},[t._v("\"Frictionless is the happy mix of being easy to understand and use along with being extensible and open, it's pretty much the perfect way of bundling data and metadata together. Don't leave home without it :-)\"")]),t._v(" "),e("p",[t._v("- Simon Tyrrell, Frictionless Tool Fund Grantee")])])]),t._v(" "),e("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[e("div",{staticClass:"py-12 px-8 text-center"},[e("img",{staticClass:"rounded-full",attrs:{src:"/img/home/oleg-lavrovsky.png",height:"100"}}),t._v(" "),e("p",{staticClass:"font-light text-lg"},[t._v('"Data standards are a powerful instrument to support the next generation of users, develop compelling use cases and define new ecosystems that create jobs. Frictionless Data has helped us to achieve all of the above."')]),t._v(" "),e("p",[t._v(" - Oleg Lavrovsky, Frictionless Tool Fund Grantee ")])])])])])])])}),[],!1,null,null,null));a.default=d.exports}}]);