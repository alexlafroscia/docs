(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{316:function(e,a,s){"use strict";s.r(a);var t=s(39),r=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v("There are many different ways to install and use Handlebars, the following are some of the more popular. Please send\n"),s("a",{attrs:{href:"https://github.com/wycats/handlebars-site/blob/master/src/pages/installation.haml",target:"_blank",rel:"noopener noreferrer"}},[e._v("pull requests"),s("OutboundLink")],1),e._v(" if we are missing\none!")]),e._v(" "),s("p",[e._v("The fastest route is to manually download the package and copy into your project but a number of other systems are\navailable.")]),e._v(" "),s("DownloadHandlebars",{attrs:{type:"full"}},[e._v("Download Handlebars "+e._s(e.$handlebarsVersions.latest))]),e._v(" "),s("br"),e._v(" "),s("DownloadHandlebars",{attrs:{type:"runtime"}},[e._v("Download Handlebars runtime "+e._s(e.$handlebarsVersions.latest))]),e._v(" "),s("h2",{attrs:{id:"npm-yarn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-yarn","aria-hidden":"true"}},[e._v("#")]),e._v(" npm / yarn")]),e._v(" "),s("p",[e._v("Handlebar's npm package includes both libraries suitable for CommonJS aware systems and built browser libraries that can\nbe consumed direct browser mechanisms.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save handlebars\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" handlebars\n")])])]),s("p",[e._v("Require-aware systems such as Node and Webpack can then load via:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Handlebars "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"handlebars"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("or for the runtime only:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" runtime "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"handlebars/runtime"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"bower-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bower-deprecated","aria-hidden":"true"}},[e._v("#")]),e._v(" Bower (deprecated)")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[s("a",{attrs:{href:"https://bower.io/blog/2017/how-to-migrate-away-from-bower/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bower is deprecated"),s("OutboundLink")],1),e._v(". You should use the npm-version along\nwith a bundler like webpack, browserify or parceljs if you want to use Handlebars in the browser.")]),e._v(" "),s("p",[e._v("Bower versions of Handlebars are still created (at the moment) for backwards compatibility. But if you are setting up a\nnew project, you should not use it anymore.")])]),e._v(" "),s("h2",{attrs:{id:"manual-download-deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-download-deprecated","aria-hidden":"true"}},[e._v("#")]),e._v(" Manual Download (deprecated)")]),e._v(" "),s("p",[e._v("All of Handlebar's released versions and CI builds are available for download on S3 in our\n"),s("a",{attrs:{href:"http://builds.handlebarsjs.com.s3.amazonaws.com/bucket-listing.html?sort=lastmod&sortdir=desc",target:"_blank",rel:"noopener noreferrer"}},[e._v("builds page"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("The latest passing master build is named "),s("code",[e._v("handlebars-latest.js")]),e._v(" and each passing SHA on master will create a\n"),s("code",[e._v("handlebars-gitSHA.js")]),e._v(" file. While these all pass the CI, it's preferrable to use one of the tagged releases.")]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": The S3 builds page is provided as a convenience for the community, but you should not use it for hosting\nHandlebars in production.")]),e._v(" "),s("h2",{attrs:{id:"cdns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdns","aria-hidden":"true"}},[e._v("#")]),e._v(" CDNs")]),e._v(" "),s("p",[e._v("Handlebars is hosted on a number of free CDNs as well.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdnjs.com/libraries/handlebars.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("cdnjs"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.jsdelivr.com/#!handlebarsjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsDelivr"),s("OutboundLink")],1),e._v(". Advanced usage, such as\n"),s("a",{attrs:{href:"https://github.com/jsdelivr/jsdelivr#usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("version aliasing & concocting"),s("OutboundLink")],1),e._v(", is available.")])]),e._v(" "),s("h2",{attrs:{id:"browser-builds-in-the-npm-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser-builds-in-the-npm-package","aria-hidden":"true"}},[e._v("#")]),e._v(" Browser builds in the npm-package")]),e._v(" "),s("p",[e._v("The browser builds are located in the "),s("code",[e._v("node_modules/handlebars/dist/")]),e._v(" directory. Making these accessible to the browser\nwill depend on what build system you are using but this may be as simple as copying the files to an acessible place.")]),e._v(" "),s("p",[e._v("This is the preferred method of installation when using the precompiler as it ensures that your precompiled templates\nalways run against the same version of the runtime.")])],1)},[],!1,null,null,null);a.default=r.exports}}]);