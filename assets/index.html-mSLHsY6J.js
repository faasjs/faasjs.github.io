import{_ as l,r as s,o as c,c as i,a as e,d as a,b as t,w as n,e as r}from"./app-ri1pvbFH.js";const h={},g=e("h1",{id:"faasjs-knex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faasjs-knex","aria-hidden":"true"},"#"),t(" @faasjs/knex")],-1),x={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/knex/LICENSE",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://img.shields.io/npm/l/@faasjs/knex.svg",alt:"License: MIT"},null,-1),u={href:"https://www.npmjs.com/package/@faasjs/knex",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://img.shields.io/npm/v/@faasjs/knex/stable.svg",alt:"NPM Stable Version"},null,-1),p={href:"https://www.npmjs.com/package/@faasjs/knex",target:"_blank",rel:"noopener noreferrer"},b=e("img",{src:"https://img.shields.io/npm/v/@faasjs/knex/beta.svg",alt:"NPM Beta Version"},null,-1),m={href:"https://knexjs.org/",target:"_blank",rel:"noopener noreferrer"},_=r(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @faasjs/knex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="namespaces" tabindex="-1"><a class="header-anchor" href="#namespaces" aria-hidden="true">#</a> Namespaces</h3>`,4),T=e("h3",{id:"classes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),t(" Classes")],-1),k=r('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li><a href="#knexconfig">KnexConfig</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#originknex">originKnex</a></li><li><a href="#query">query</a></li><li><a href="#raw">raw</a></li><li><a href="#transaction">transaction</a></li><li><a href="#useknex">useKnex</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="knexconfig" tabindex="-1"><a class="header-anchor" href="#knexconfig" aria-hidden="true">#</a> KnexConfig</h3><p>Ƭ <strong>KnexConfig</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>OriginKnex.Config</code></td></tr><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="originknex" tabindex="-1"><a class="header-anchor" href="#originknex" aria-hidden="true">#</a> originKnex</h3><p>▸ <strong>originKnex</strong>&lt;<code>TRecord</code>, <code>TResult</code>&gt;(<code>config</code>): <code>Knex</code>&lt;<code>TRecord</code>, <code>TResult</code>&gt;</p>',12),K={href:"https://knexjs.org/",target:"_blank",rel:"noopener noreferrer"},R=r('<h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TRecord</code></td><td style="text-align:left;">extends <code>Object</code> = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>unknown</code>[]</td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>string</code> | <code>Config</code>&lt;<code>any</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Knex</code>&lt;<code>TRecord</code>, <code>TResult</code>&gt;</p><hr><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> query</h3><p>▸ <strong>query</strong>&lt;<code>TName</code>&gt;(<code>table</code>): <code>OriginKnex.QueryBuilder</code>&lt;<code>OriginKnex.TableType</code>&lt;<code>TName</code>&gt;, { <code>_aliases</code>: {} ; <code>_base</code>: <code>OriginKnex.ResolveTableType</code>&lt;<code>OriginKnex.TableType</code>&lt;<code>TName</code>&gt;, <code>&quot;base&quot;</code>&gt; ; <code>_hasSelection</code>: <code>false</code> ; <code>_intersectProps</code>: {} ; <code>_keys</code>: <code>never</code> ; <code>_single</code>: <code>false</code> ; <code>_unionProps</code>: <code>never</code> }[]&gt;</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TName</code></td><td style="text-align:left;">extends <code>&quot;test&quot;</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>table</code></td><td style="text-align:left;"><code>TName</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>OriginKnex.QueryBuilder</code>&lt;<code>OriginKnex.TableType</code>&lt;<code>TName</code>&gt;, { <code>_aliases</code>: {} ; <code>_base</code>: <code>OriginKnex.ResolveTableType</code>&lt;<code>OriginKnex.TableType</code>&lt;<code>TName</code>&gt;, <code>&quot;base&quot;</code>&gt; ; <code>_hasSelection</code>: <code>false</code> ; <code>_intersectProps</code>: {} ; <code>_keys</code>: <code>never</code> ; <code>_single</code>: <code>false</code> ; <code>_unionProps</code>: <code>never</code> }[]&gt;</p><p>▸ <strong>query</strong>&lt;<code>TName</code>, <code>TResult</code>&gt;(<code>table</code>): <code>OriginKnex.QueryBuilder</code>&lt;<code>TName</code>, <code>TResult</code>&gt;</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TName</code></td><td style="text-align:left;">extends <code>Object</code> = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>table</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>OriginKnex.QueryBuilder</code>&lt;<code>TName</code>, <code>TResult</code>&gt;</p><hr><h3 id="raw" tabindex="-1"><a class="header-anchor" href="#raw" aria-hidden="true">#</a> raw</h3><p>▸ <strong>raw</strong>&lt;<code>TResult</code>&gt;(<code>sql</code>, <code>bindings?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sql</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>bindings</code></td><td style="text-align:left;"><code>ValueDict</code> | <code>RawBinding</code>[]</td><td style="text-align:left;"><code>[]</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction" aria-hidden="true">#</a> transaction</h3><p>▸ <strong>transaction</strong>&lt;<code>TResult</code>&gt;(<code>scope</code>, <code>config?</code>, <code>options?</code>): <code>Promise</code>&lt;<code>TResult</code> | <code>void</code>&gt;</p><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>scope</code></td><td style="text-align:left;">(<code>trx</code>: <code>Transaction</code>&lt;<code>any</code>, <code>any</code>&gt;) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>TResult</code>&gt;</td></tr><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>TransactionConfig</code></td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.trx?</code></td><td style="text-align:left;"><code>Transaction</code>&lt;<code>any</code>, <code>any</code>[]&gt;</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code> | <code>void</code>&gt;</p><hr><h3 id="useknex" tabindex="-1"><a class="header-anchor" href="#useknex" aria-hidden="true">#</a> useKnex</h3>',42),N=e("strong",null,"useKnex",-1),v=e("code",null,"config?",-1),j=e("code",null,"UseifyPlugin",-1),P=e("code",null,"Knex",-1),q=r('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><a href="#knexconfig"><code>KnexConfig</code></a></td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>',3),w=e("code",null,"UseifyPlugin",-1),O=e("code",null,"Knex",-1);function C(B,V){const d=s("ExternalLinkIcon"),o=s("RouterLink");return c(),i("div",null,[g,e("p",null,[e("a",x,[f,a(d)]),e("a",u,[y,a(d)]),e("a",p,[b,a(d)])]),e("p",null,[t("FaasJS's sql plugin, base on "),e("a",m,[t("Knex"),a(d)]),t(".")]),_,e("ul",null,[e("li",null,[a(o,{to:"/doc/knex/modules/originKnex.html"},{default:n(()=>[t("originKnex")]),_:1})])]),T,e("ul",null,[e("li",null,[a(o,{to:"/doc/knex/classes/Knex.html"},{default:n(()=>[t("Knex")]),_:1})])]),k,e("p",null,[t("Origin "),e("a",K,[t("knex"),a(d)]),t(" instance.")]),R,e("p",null,[t("▸ "),N,t("("),v,t("): "),j,t("<"),a(o,{to:"/doc/knex/classes/Knex.html"},{default:n(()=>[P]),_:1}),t(">")]),q,e("p",null,[w,t("<"),a(o,{to:"/doc/knex/classes/Knex.html"},{default:n(()=>[O]),_:1}),t(">")])])}const S=l(h,[["render",C],["__file","index.html.vue"]]);export{S as default};
