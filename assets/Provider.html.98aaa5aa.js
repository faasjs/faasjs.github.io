import{_ as r,r as c,o as l,c as i,b as e,d as o,w as a,a as n,e as t}from"./app.9d73d697.js";const s={},h=n('<h1 id="class-provider" tabindex="-1"><a class="header-anchor" href="#class-provider" aria-hidden="true">#</a> Class: Provider</h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> Implements</h2><ul><li><code>CloudFunctionAdapter</code></li></ul><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),u=t("constructor"),f=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),g=t("config"),p=t("logger"),y=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),x=t("deploy"),m=t("invokeCloudFunction"),_=t("invokeSyncCloudFunction"),b=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new Provider</strong>(<code>config</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),P=e("td",{style:{"text-align":"left"}},[e("code",null,"config")],-1),k={style:{"text-align":"left"}},C=e("code",null,"TencentcloudConfig",-1),T=e("h2",{id:"properties-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),t(" Properties")],-1),F=e("h3",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),t(" config")],-1),N=t("\u2022 "),R=e("strong",null,"config",-1),j=t(": "),O=e("code",null,"TencentcloudConfig",-1),S=n('<hr><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3><p>\u2022 <strong>logger</strong>: <code>Logger</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> deploy</h3><p>\u25B8 <strong>deploy</strong>(<code>type</code>, <code>data</code>, <code>config</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>\u90E8\u7F72</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>&quot;cloud_function&quot;</code> | <code>&quot;http&quot;</code></td><td style="text-align:left;">{string} \u53D1\u5E03\u7C7B\u578B</td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>DeployData</code></td><td style="text-align:left;">{object} \u90E8\u7F72\u73AF\u5883\u914D\u7F6E</td></tr><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{Logger} \u90E8\u7F72\u5BF9\u8C61\u914D\u7F6E</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="invokecloudfunction" tabindex="-1"><a class="header-anchor" href="#invokecloudfunction" aria-hidden="true">#</a> invokeCloudFunction</h3><p>\u25B8 <strong>invokeCloudFunction</strong>(<code>name</code>, <code>data</code>, <code>options?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>data.context</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>data.event</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of" aria-hidden="true">#</a> Implementation of</h4><p>CloudFunctionAdapter.invokeCloudFunction</p><hr><h3 id="invokesynccloudfunction" tabindex="-1"><a class="header-anchor" href="#invokesynccloudfunction" aria-hidden="true">#</a> invokeSyncCloudFunction</h3><p>\u25B8 <strong>invokeSyncCloudFunction</strong>&lt;<code>TResult</code>&gt;(<code>name</code>, <code>data</code>, <code>options?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>data.context</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>data.event</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1" aria-hidden="true">#</a> Implementation of</h4><p>CloudFunctionAdapter.invokeSyncCloudFunction</p>',31);function q(L,V){const d=c("RouterLink");return l(),i("div",null,[h,e("ul",null,[e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#constructor"},{default:a(()=>[u]),_:1})])]),f,e("ul",null,[e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#config"},{default:a(()=>[g]),_:1})]),e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#logger"},{default:a(()=>[p]),_:1})])]),y,e("ul",null,[e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#deploy"},{default:a(()=>[x]),_:1})]),e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#invokecloudfunction"},{default:a(()=>[m]),_:1})]),e("li",null,[o(d,{to:"/doc/tencentcloud/classes/Provider.html#invokesynccloudfunction"},{default:a(()=>[_]),_:1})])]),b,e("table",null,[v,e("tbody",null,[e("tr",null,[P,e("td",k,[o(d,{to:"/doc/tencentcloud/#tencentcloudconfig"},{default:a(()=>[C]),_:1})])])])]),T,F,e("p",null,[N,R,j,o(d,{to:"/doc/tencentcloud/#tencentcloudconfig"},{default:a(()=>[O]),_:1})]),S])}const A=r(s,[["render",q],["__file","Provider.html.vue"]]);export{A as default};
