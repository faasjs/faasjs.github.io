import{_ as n,r as s,o as l,a as c,b as e,d,w as o,F as h,c as r,e as t}from"./app.44bc8180.js";const i={},u=r('<h1 id="class-knex" tabindex="-1"><a class="header-anchor" href="#class-knex" aria-hidden="true">#</a> Class: Knex</h1><p>Knex \u63D2\u4EF6</p><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> Implements</h2><ul><li><code>Plugin</code></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',6),p=t("constructor"),f=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),x=t("adapter"),g=t("config"),m=t("logger"),y=t("name"),_=t("query"),b=t("type"),P=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),R=t("onDeploy"),k=t("onMount"),K=t("quit"),T=t("raw"),N=t("schema"),q=t("transaction"),w=r('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new Knex</strong>(<code>config?</code>)</p><p>\u521B\u5EFA\u63D2\u4EF6\u5B9E\u4F8B</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',5),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),D=e("td",{style:{"text-align":"left"}},[e("code",null,"config?")],-1),C={style:{"text-align":"left"}},M=e("code",null,"KnexConfig",-1),B=e("td",{style:{"text-align":"left"}},"\u914D\u7F6E",-1),I=r('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="adapter" tabindex="-1"><a class="header-anchor" href="#adapter" aria-hidden="true">#</a> adapter</h3><p>\u2022 <strong>adapter</strong>: <code>Knex</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p><hr><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>\u2022 <strong>config</strong>: <code>Config</code>&lt;<code>any</code>&gt;</p><hr><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3><p>\u2022 <strong>logger</strong>: <code>Logger</code></p><hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>\u2022 <code>Readonly</code> <strong>name</strong>: <code>string</code> = <code>Name</code></p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.name</p><hr><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h3><p>\u2022 <strong>query</strong>: <code>Knex</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p><hr><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><p>\u2022 <code>Readonly</code> <strong>type</strong>: <code>string</code> = <code>Name</code></p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.type</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="ondeploy" tabindex="-1"><a class="header-anchor" href="#ondeploy" aria-hidden="true">#</a> onDeploy</h3><p>\u25B8 <strong>onDeploy</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>DeployData</code></td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onDeploy</p><hr><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount" aria-hidden="true">#</a> onMount</h3><p>\u25B8 <strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>MountData</code></td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onMount</p><hr><h3 id="quit" tabindex="-1"><a class="header-anchor" href="#quit" aria-hidden="true">#</a> quit</h3><p>\u25B8 <strong>quit</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="raw" tabindex="-1"><a class="header-anchor" href="#raw" aria-hidden="true">#</a> raw</h3><p>\u25B8 <strong>raw</strong>&lt;<code>TResult</code>&gt;(<code>sql</code>, <code>bindings?</code>): <code>Promise</code>&lt;<code>Raw</code>&lt;<code>TResult</code>&gt;&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sql</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bindings</code></td><td style="text-align:left;"><code>RawBinding</code>[] | <code>ValueDict</code></td><td style="text-align:left;"><code>[]</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>Raw</code>&lt;<code>TResult</code>&gt;&gt;</p><hr><h3 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> schema</h3><p>\u25B8 <strong>schema</strong>(): <code>SchemaBuilder</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>SchemaBuilder</code></p><hr><h3 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction" aria-hidden="true">#</a> transaction</h3><p>\u25B8 <strong>transaction</strong>&lt;<code>TResult</code>&gt;(<code>scope</code>, <code>config?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scope</code></td><td style="text-align:left;">(<code>trx</code>: <code>Transaction</code>&lt;<code>any</code>, <code>any</code>&gt;) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>TResult</code>&gt;</td></tr><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p>',68);function V(L,S){const a=s("RouterLink");return l(),c(h,null,[u,e("ul",null,[e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#constructor"},{default:o(()=>[p]),_:1})])]),f,e("ul",null,[e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#adapter"},{default:o(()=>[x]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#config"},{default:o(()=>[g]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#logger"},{default:o(()=>[m]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#name"},{default:o(()=>[y]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#query"},{default:o(()=>[_]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#type"},{default:o(()=>[b]),_:1})])]),P,e("ul",null,[e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#ondeploy"},{default:o(()=>[R]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#onmount"},{default:o(()=>[k]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#quit"},{default:o(()=>[K]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#raw"},{default:o(()=>[T]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#schema"},{default:o(()=>[N]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#transaction"},{default:o(()=>[q]),_:1})])]),w,e("table",null,[v,e("tbody",null,[e("tr",null,[D,e("td",C,[d(a,{to:"/doc/knex/#knexconfig"},{default:o(()=>[M]),_:1})]),B])])]),I],64)}var E=n(i,[["render",V],["__file","Knex.html.vue"]]);export{E as default};
