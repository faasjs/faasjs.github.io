import{_ as c,r as d,o as r,c as l,a as e,d as t,w as a,b as o,e as s}from"./app-ONbVOpV-.js";const i={},p=s('<h1 id="class-provider" tabindex="-1"><a class="header-anchor" href="#class-provider"><span>Class: Provider</span></a></h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements"><span>Implements</span></a></h2><ul><li><code>CloudFunctionAdapter</code></li></ul><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-provider" tabindex="-1"><a class="header-anchor" href="#new-provider"><span>new Provider()</span></a></h3>',5),h=e("strong",null,"new Provider",-1),u=e("code",null,"config",-1),g=e("code",null,"Provider",-1),m=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1),f=e("strong",null,"config",-1),v=e("code",null,"TencentcloudConfig",-1),_=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1),k=e("code",null,"Provider",-1),b=e("h2",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties"},[e("span",null,"Properties")])],-1),x=e("h3",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config"},[e("span",null,"config")])],-1),y=e("strong",null,"config",-1),P=e("code",null,"TencentcloudConfig",-1),C=s('<h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>logger</span></a></h3><blockquote><p><strong>logger</strong>: <code>Logger</code></p></blockquote><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy"><span>deploy()</span></a></h3><blockquote><p><strong>deploy</strong>(<code>type</code>, <code>data</code>, <code>config</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>部署</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>type</strong>: <code>&quot;cloud_function&quot;</code> | <code>&quot;http&quot;</code></p><p>{string} 发布类型</p><p>• <strong>data</strong>: <code>DeployData</code></p><p>{object} 部署环境配置</p><p>• <strong>config</strong></p><p>{Logger} 部署对象配置</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="invokecloudfunction" tabindex="-1"><a class="header-anchor" href="#invokecloudfunction"><span>invokeCloudFunction()</span></a></h3><blockquote><p><strong>invokeCloudFunction</strong>(<code>name</code>, <code>data</code>, <code>options</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>name</strong>: <code>string</code></p><p>• <strong>data</strong></p><p>• <strong>data.context</strong>: <code>any</code></p><p>• <strong>data.event?</strong>: <code>any</code></p><p>• <strong>options?</strong></p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of"><span>Implementation of</span></a></h4><p><code>CloudFunctionAdapter.invokeCloudFunction</code></p><h3 id="invokesynccloudfunction" tabindex="-1"><a class="header-anchor" href="#invokesynccloudfunction"><span>invokeSyncCloudFunction()</span></a></h3><blockquote><p><strong>invokeSyncCloudFunction</strong>&lt;<code>TResult</code>&gt;(<code>name</code>, <code>data</code>, <code>options</code>?): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>name</strong>: <code>string</code></p><p>• <strong>data</strong></p><p>• <strong>data.context</strong>: <code>any</code></p><p>• <strong>data.event?</strong>: <code>any</code></p><p>• <strong>options?</strong></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1"><span>Implementation of</span></a></h4><p><code>CloudFunctionAdapter.invokeSyncCloudFunction</code></p>',41);function q(F,R){const n=d("RouteLink");return r(),l("div",null,[e("p",null,[t(n,{to:"/doc/tencentcloud/"},{default:a(()=>[o("Documents")]),_:1}),o(" / "),t(n,{to:"/doc/tencentcloud/"},{default:a(()=>[o("@faasjs/tencentcloud")]),_:1}),o(" / Provider")]),p,e("blockquote",null,[e("p",null,[h,o("("),u,o("): "),t(n,{to:"/doc/tencentcloud/classes/Provider.html"},{default:a(()=>[g]),_:1})])]),m,e("p",null,[o("• "),f,o(": "),t(n,{to:"/doc/tencentcloud/type-aliases/TencentcloudConfig.html"},{default:a(()=>[v]),_:1})]),_,e("p",null,[t(n,{to:"/doc/tencentcloud/classes/Provider.html"},{default:a(()=>[k]),_:1})]),b,x,e("blockquote",null,[e("p",null,[y,o(": "),t(n,{to:"/doc/tencentcloud/type-aliases/TencentcloudConfig.html"},{default:a(()=>[P]),_:1})])]),C])}const w=c(i,[["render",q],["__file","Provider.html.vue"]]),S=JSON.parse('{"path":"/doc/tencentcloud/classes/Provider.html","title":"Class: Provider","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Implements","slug":"implements","link":"#implements","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new Provider()","slug":"new-provider","link":"#new-provider","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"deploy()","slug":"deploy","link":"#deploy","children":[]},{"level":3,"title":"invokeCloudFunction()","slug":"invokecloudfunction","link":"#invokecloudfunction","children":[]},{"level":3,"title":"invokeSyncCloudFunction()","slug":"invokesynccloudfunction","link":"#invokesynccloudfunction","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/tencentcloud/classes/Provider.md"}');export{w as comp,S as data};
