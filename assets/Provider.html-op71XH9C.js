import{_ as l,r,o as c,c as i,a as e,b as o,w as a,d as t,e as n}from"./app-FkIzAiS7.js";const s={},h=n('<h1 id="class-provider" tabindex="-1"><a class="header-anchor" href="#class-provider" aria-hidden="true">#</a> Class: Provider</h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> Implements</h2><ul><li><code>CloudFunctionAdapter</code></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),f=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),g=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1","aria-hidden":"true"},"#"),t(" Constructors")],-1),p=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor","aria-hidden":"true"},"#"),t(" constructor")],-1),y=e("strong",null,"new Provider",-1),x=e("code",null,"config",-1),m=e("code",null,"Provider",-1),_=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),v=e("td",{style:{"text-align":"left"}},[e("code",null,"config")],-1),P={style:{"text-align":"left"}},k=e("code",null,"TencentcloudConfig",-1),C=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),T=e("code",null,"Provider",-1),F=e("h2",{id:"properties-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),t(" Properties")],-1),R=e("h3",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),t(" config")],-1),N=e("strong",null,"config",-1),j=e("code",null,"TencentcloudConfig",-1),O=n('<hr><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3><p>• <strong>logger</strong>: <code>Logger</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> deploy</h3><p>▸ <strong>deploy</strong>(<code>type</code>, <code>data</code>, <code>config</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>部署</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>&quot;cloud_function&quot;</code> | <code>&quot;http&quot;</code></td><td style="text-align:left;">{string} 发布类型</td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>DeployData</code></td><td style="text-align:left;">{object} 部署环境配置</td></tr><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{Logger} 部署对象配置</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="invokecloudfunction" tabindex="-1"><a class="header-anchor" href="#invokecloudfunction" aria-hidden="true">#</a> invokeCloudFunction</h3><p>▸ <strong>invokeCloudFunction</strong>(<code>name</code>, <code>data</code>, <code>options?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>data.context</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>data.event</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of" aria-hidden="true">#</a> Implementation of</h4><p>CloudFunctionAdapter.invokeCloudFunction</p><hr><h3 id="invokesynccloudfunction" tabindex="-1"><a class="header-anchor" href="#invokesynccloudfunction" aria-hidden="true">#</a> invokeSyncCloudFunction</h3><p>▸ <strong>invokeSyncCloudFunction</strong>&lt;<code>TResult</code>&gt;(<code>name</code>, <code>data</code>, <code>options?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>data.context</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>data.event</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1" aria-hidden="true">#</a> Implementation of</h4><p>CloudFunctionAdapter.invokeSyncCloudFunction</p>',31);function S(q,L){const d=r("RouterLink");return c(),i("div",null,[h,e("ul",null,[e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#constructor"},{default:a(()=>[t("constructor")]),_:1})])]),u,e("ul",null,[e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#config"},{default:a(()=>[t("config")]),_:1})]),e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#logger"},{default:a(()=>[t("logger")]),_:1})])]),f,e("ul",null,[e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#deploy"},{default:a(()=>[t("deploy")]),_:1})]),e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#invokecloudfunction"},{default:a(()=>[t("invokeCloudFunction")]),_:1})]),e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#invokesynccloudfunction"},{default:a(()=>[t("invokeSyncCloudFunction")]),_:1})])]),g,p,e("p",null,[t("• "),y,t("("),x,t("): "),o(d,{to:"/doc/tencentcloud/classes/Provider.html"},{default:a(()=>[m]),_:1})]),_,e("table",null,[b,e("tbody",null,[e("tr",null,[v,e("td",P,[o(d,{to:"/doc/tencentcloud/#tencentcloudconfig"},{default:a(()=>[k]),_:1})])])])]),C,e("p",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html"},{default:a(()=>[T]),_:1})]),F,R,e("p",null,[t("• "),N,t(": "),o(d,{to:"/doc/tencentcloud/#tencentcloudconfig"},{default:a(()=>[j]),_:1})]),O])}const w=l(s,[["render",S],["__file","Provider.html.vue"]]);export{w as default};
