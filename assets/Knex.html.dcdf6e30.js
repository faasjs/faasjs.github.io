import{_ as n,r as l,o as c,c as s,b as e,d,w as o,e as t,a as r}from"./app.1ee529a4.js";const i={},h=r('<h1 id="class-knex" tabindex="-1"><a class="header-anchor" href="#class-knex" aria-hidden="true">#</a> Class: Knex</h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> Implements</h2><ul><li><code>Plugin</code></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),f=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),p=r('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new Knex</strong>(<code>config?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),m=e("td",{style:{"text-align":"left"}},[e("code",null,"config?")],-1),g={style:{"text-align":"left"}},y=e("code",null,"KnexConfig",-1),b=r('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="adapter" tabindex="-1"><a class="header-anchor" href="#adapter" aria-hidden="true">#</a> adapter</h3><p>• <strong>adapter</strong>: <code>Knex</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p><hr><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>• <strong>config</strong>: <code>Config</code>&lt;<code>any</code>&gt;</p><hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>• <code>Readonly</code> <strong>name</strong>: <code>string</code> = <code>Name</code></p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.name</p><hr><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h3><p>• <strong>query</strong>: <code>Knex</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p><hr><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><p>• <code>Readonly</code> <strong>type</strong>: <code>string</code> = <code>Name</code></p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.type</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="ondeploy" tabindex="-1"><a class="header-anchor" href="#ondeploy" aria-hidden="true">#</a> onDeploy</h3><p>▸ <strong>onDeploy</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>DeployData</code></td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onDeploy</p><hr><h3 id="oninvoke" tabindex="-1"><a class="header-anchor" href="#oninvoke" aria-hidden="true">#</a> onInvoke</h3><p>▸ <strong>onInvoke</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>InvokeData</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onInvoke</p><hr><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount" aria-hidden="true">#</a> onMount</h3><p>▸ <strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>MountData</code></td></tr><tr><td style="text-align:left;"><code>next</code></td><td style="text-align:left;"><code>Next</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-4" tabindex="-1"><a class="header-anchor" href="#implementation-of-4" aria-hidden="true">#</a> Implementation of</h4><p>Plugin.onMount</p><hr><h3 id="quit" tabindex="-1"><a class="header-anchor" href="#quit" aria-hidden="true">#</a> quit</h3><p>▸ <strong>quit</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="raw" tabindex="-1"><a class="header-anchor" href="#raw" aria-hidden="true">#</a> raw</h3><p>▸ <strong>raw</strong>&lt;<code>TResult</code>&gt;(<code>sql</code>, <code>bindings?</code>): <code>Promise</code>&lt;<code>Raw</code>&lt;<code>TResult</code>&gt;&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sql</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bindings</code></td><td style="text-align:left;"><code>ValueDict</code> | <code>RawBinding</code>[]</td><td style="text-align:left;"><code>[]</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>Raw</code>&lt;<code>TResult</code>&gt;&gt;</p><hr><h3 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> schema</h3><p>▸ <strong>schema</strong>(): <code>SchemaBuilder</code></p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>SchemaBuilder</code></p><hr><h3 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction" aria-hidden="true">#</a> transaction</h3><p>▸ <strong>transaction</strong>&lt;<code>TResult</code>&gt;(<code>scope</code>, <code>config?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scope</code></td><td style="text-align:left;">(<code>trx</code>: <code>Transaction</code>&lt;<code>any</code>, <code>any</code>&gt;) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>TResult</code>&gt;</td></tr><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p>',74);function _(k,P){const a=l("RouterLink");return c(),s("div",null,[h,e("ul",null,[e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#constructor"},{default:o(()=>[t("constructor")]),_:1})])]),u,e("ul",null,[e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#adapter"},{default:o(()=>[t("adapter")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#config"},{default:o(()=>[t("config")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#name"},{default:o(()=>[t("name")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#query"},{default:o(()=>[t("query")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#type"},{default:o(()=>[t("type")]),_:1})])]),f,e("ul",null,[e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#ondeploy"},{default:o(()=>[t("onDeploy")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#oninvoke"},{default:o(()=>[t("onInvoke")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#onmount"},{default:o(()=>[t("onMount")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#quit"},{default:o(()=>[t("quit")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#raw"},{default:o(()=>[t("raw")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#schema"},{default:o(()=>[t("schema")]),_:1})]),e("li",null,[d(a,{to:"/doc/knex/classes/Knex.html#transaction"},{default:o(()=>[t("transaction")]),_:1})])]),p,e("table",null,[x,e("tbody",null,[e("tr",null,[m,e("td",g,[d(a,{to:"/doc/knex/#knexconfig"},{default:o(()=>[y]),_:1})])])])]),b])}const T=n(i,[["render",_],["__file","Knex.html.vue"]]);export{T as default};
