import{_ as c,r as d,o as r,c as p,a as e,d as n,w as t,b as o,e as s}from"./app-VWZqI_uP.js";const h={},i=s('<h1 id="class-knex" tabindex="-1"><a class="header-anchor" href="#class-knex"><span>Class: Knex</span></a></h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements"><span>Implements</span></a></h2><ul><li><code>Plugin</code></li></ul><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-knex-config" tabindex="-1"><a class="header-anchor" href="#new-knex-config"><span>new Knex(config)</span></a></h3>',5),l=e("strong",null,"new Knex",-1),g=e("code",null,"config",-1),u=e("code",null,"Knex",-1),m=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1),f=e("strong",null,"config?",-1),x=e("code",null,"KnexConfig",-1),b=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1),k=e("code",null,"Knex",-1),_=s('<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="adapter" tabindex="-1"><a class="header-anchor" href="#adapter"><span>adapter</span></a></h3><blockquote><p><strong>adapter</strong>: <code>Knex</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p></blockquote><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3><blockquote><p><strong>config</strong>: <code>Config</code>&lt;<code>any</code>&gt;</p></blockquote><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>logger</span></a></h3><blockquote><p><strong>logger</strong>: <code>Logger</code></p></blockquote><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><blockquote><p><strong><code>readonly</code></strong> <strong>name</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of"><span>Implementation of</span></a></h4><p><code>Plugin.name</code></p><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>query</span></a></h3><blockquote><p><strong>query</strong>: <code>Knex</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p></blockquote><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><blockquote><p><strong><code>readonly</code></strong> <strong>type</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1"><span>Implementation of</span></a></h4><p><code>Plugin.type</code></p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="ondeploy" tabindex="-1"><a class="header-anchor" href="#ondeploy"><span>onDeploy()</span></a></h3><blockquote><p><strong>onDeploy</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>DeployData</code></p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2"><span>Implementation of</span></a></h4><p><code>Plugin.onDeploy</code></p><h3 id="oninvoke" tabindex="-1"><a class="header-anchor" href="#oninvoke"><span>onInvoke()</span></a></h3><blockquote><p><strong>onInvoke</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>InvokeData</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>&gt;</p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3"><span>Implementation of</span></a></h4><p><code>Plugin.onInvoke</code></p><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount"><span>onMount()</span></a></h3><blockquote><p><strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>MountData</code></p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-4" tabindex="-1"><a class="header-anchor" href="#implementation-of-4"><span>Implementation of</span></a></h4><p><code>Plugin.onMount</code></p><h3 id="quit" tabindex="-1"><a class="header-anchor" href="#quit"><span>quit()</span></a></h3><blockquote><p><strong>quit</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="raw" tabindex="-1"><a class="header-anchor" href="#raw"><span>raw()</span></a></h3><blockquote><p><strong>raw</strong>&lt;<code>TResult</code>&gt;(<code>sql</code>, <code>bindings</code>): <code>Promise</code>&lt;<code>Raw</code>&lt;<code>TResult</code>&gt;&gt;</p></blockquote><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><p>• <strong>sql</strong>: <code>string</code></p><p>• <strong>bindings</strong>: <code>ValueDict</code> | <code>RawBinding</code>[]= <code>[]</code></p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>Raw</code>&lt;<code>TResult</code>&gt;&gt;</p><h3 id="schema" tabindex="-1"><a class="header-anchor" href="#schema"><span>schema()</span></a></h3><blockquote><p><strong>schema</strong>(): <code>SchemaBuilder</code></p></blockquote><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4><p><code>SchemaBuilder</code></p><h3 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction"><span>transaction()</span></a></h3><blockquote><p><strong>transaction</strong>&lt;<code>TResult</code>&gt;(<code>scope</code>, <code>config</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><p>Wraps a transaction, returning a promise that resolves to the return value of the callback.</p><ul><li>Support &#39;commit&#39; and &#39;rollback&#39; event.</li></ul><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4><p>• <strong>scope</strong>: (<code>trx</code>) =&gt; <code>Promise</code>&lt;<code>TResult</code>&gt;</p><p>• <strong>config?</strong>: <code>TransactionConfig</code></p><p>• <strong>options?</strong>: <code>Object</code></p><p>• <strong>options.trx?</strong>: <code>Transaction</code>&lt;<code>any</code>, <code>any</code>[]&gt;</p><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p>',75);function q(y,P){const a=d("RouterLink");return r(),p("div",null,[e("p",null,[n(a,{to:"/doc/knex/"},{default:t(()=>[o("Documents")]),_:1}),o(" / "),n(a,{to:"/doc/knex/"},{default:t(()=>[o("@faasjs/knex")]),_:1}),o(" / Knex")]),i,e("blockquote",null,[e("p",null,[l,o("("),g,o("?): "),n(a,{to:"/doc/knex/classes/Knex.html"},{default:t(()=>[u]),_:1})])]),m,e("p",null,[o("• "),f,o(": "),n(a,{to:"/doc/knex/type-aliases/KnexConfig.html"},{default:t(()=>[x]),_:1})]),b,e("p",null,[n(a,{to:"/doc/knex/classes/Knex.html"},{default:t(()=>[k]),_:1})]),_])}const v=c(h,[["render",q],["__file","Knex.html.vue"]]);export{v as default};