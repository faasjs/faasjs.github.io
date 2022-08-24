import{_ as l,o as r,c,b as e,d as a,w as o,a as n,e as t,r as i}from"../app.5c5560f9.mjs";const s={},h=n('<h1 id="class-cloudfunction" tabindex="-1"><a class="header-anchor" href="#class-cloudfunction" aria-hidden="true">#</a> Class: CloudFunction</h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> Implements</h2><ul><li><code>Plugin</code></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),u=t("constructor"),f=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),p=t("config"),y=t("context"),g=t("event"),x=t("name"),m=t("type"),b=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),_=t("invoke"),v=t("invokeSync"),k=t("onDeploy"),P=t("onInvoke"),T=t("onMount"),C=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new CloudFunction</strong>(<code>config?</code>)</p><p>\u521B\u5EFA\u4E91\u51FD\u6570\u914D\u7F6E</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',5),N=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),D=e("td",{style:{"text-align":"left"}},[e("code",null,"config?")],-1),F={style:{"text-align":"left"}},R=e("code",null,"CloudFunctionConfig",-1),I=e("td",{style:{"text-align":"left"}},"{object} \u914D\u7F6E\u9879\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u5C06\u5F3A\u5236\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E",-1),M=n('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>\u2022 <strong>config</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>\u25AA [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>memorySize?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>timeout?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>triggers?</code></td><td style="text-align:left;">{ <code>name</code>: <code>string</code> ; <code>type</code>: <code>string</code> ; <code>value</code>: <code>string</code> }[]</td></tr></tbody></table><hr><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><p>\u2022 <strong>context</strong>: <code>any</code></p><hr><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3><p>\u2022 <strong>event</strong>: <code>any</code></p><hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>\u2022 <code>Readonly</code> <strong>name</strong>: <code>string</code> = <code>Name</code></p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.name</p><hr><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><p>\u2022 <code>Readonly</code> <strong>type</strong>: <code>string</code> = <code>Name</code></p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.type</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>\u25B8 <strong>invoke</strong>&lt;<code>TData</code>&gt;(<code>name</code>, <code>data?</code>, <code>options?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>\u5F02\u6B65\u89E6\u53D1\u4E91\u51FD\u6570</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u4E91\u51FD\u6570\u6587\u4EF6\u540D\u6216\u4E91\u51FD\u6570\u540D</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;">{any} \u53C2\u6570</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{object} \u989D\u5916\u914D\u7F6E\u9879</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="invokesync" tabindex="-1"><a class="header-anchor" href="#invokesync" aria-hidden="true">#</a> invokeSync</h3><p>\u25B8 <strong>invokeSync</strong>&lt;<code>TResult</code>, <code>TData</code>&gt;(<code>name</code>, <code>data?</code>, <code>options?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><p>\u540C\u6B65\u8C03\u7528\u4E91\u51FD\u6570</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u4E91\u51FD\u6570\u6587\u4EF6\u540D\u6216\u4E91\u51FD\u6570\u540D</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;">{any} \u53C2\u6570</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{object} \u989D\u5916\u914D\u7F6E\u9879</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="ondeploy" tabindex="-1"><a class="header-anchor" href="#ondeploy" aria-hidden="true">#</a> onDeploy</h3><p>\u25B8 <strong>onDeploy</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>DeployData</code></td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onDeploy</p><hr><h3 id="oninvoke" tabindex="-1"><a class="header-anchor" href="#oninvoke" aria-hidden="true">#</a> onInvoke</h3><p>\u25B8 <strong>onInvoke</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>InvokeData</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onInvoke</p><hr><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount" aria-hidden="true">#</a> onMount</h3><p>\u25B8 <strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>MountData</code></td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-4" tabindex="-1"><a class="header-anchor" href="#implementation-of-4" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onMount</p>',70);function j(S,V){const d=i("RouterLink");return r(),c("div",null,[h,e("ul",null,[e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#constructor"},{default:o(()=>[u]),_:1})])]),f,e("ul",null,[e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#config"},{default:o(()=>[p]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#context"},{default:o(()=>[y]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#event"},{default:o(()=>[g]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#name"},{default:o(()=>[x]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#type"},{default:o(()=>[m]),_:1})])]),b,e("ul",null,[e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#invoke"},{default:o(()=>[_]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#invokesync"},{default:o(()=>[v]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#ondeploy"},{default:o(()=>[k]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#oninvoke"},{default:o(()=>[P]),_:1})]),e("li",null,[a(d,{to:"/doc/cloud_function/classes/CloudFunction.html#onmount"},{default:o(()=>[T]),_:1})])]),C,e("table",null,[N,e("tbody",null,[e("tr",null,[D,e("td",F,[a(d,{to:"/doc/cloud_function/#cloudfunctionconfig"},{default:o(()=>[R]),_:1})]),I])])]),M])}const B=l(s,[["render",j],["__file","CloudFunction.html.vue"]]);export{B as default};
