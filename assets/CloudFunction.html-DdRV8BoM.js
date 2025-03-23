import{_ as c,c as r,b as o,a as s,d as t,e as a,w as d,r as i,o as p}from"./app-DE2SDUy3.js";const l={};function h(u,e){const n=i("RouteLink");return p(),r("div",null,[o("p",null,[t(n,{to:"/doc/cloud_function/"},{default:d(()=>e[0]||(e[0]=[a("Documents")])),_:1}),e[2]||(e[2]=a(" / ")),t(n,{to:"/doc/cloud_function/"},{default:d(()=>e[1]||(e[1]=[a("@faasjs/cloud_function")])),_:1}),e[3]||(e[3]=a(" / CloudFunction"))]),e[5]||(e[5]=s('<h1 id="class-cloudfunction" tabindex="-1"><a class="header-anchor" href="#class-cloudfunction"><span>Class: CloudFunction</span></a></h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements"><span>Implements</span></a></h2><ul><li><code>Plugin</code></li></ul><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-cloudfunction" tabindex="-1"><a class="header-anchor" href="#new-cloudfunction"><span>new CloudFunction()</span></a></h3><blockquote><p><strong>new CloudFunction</strong>(<code>config</code>?): <code>CloudFunction</code></p></blockquote><p>创建云函数配置</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><h5 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config?</span></a></h5>',9)),o("p",null,[t(n,{to:"/doc/cloud_function/type-aliases/CloudFunctionConfig.html"},{default:d(()=>e[4]||(e[4]=[o("code",null,"CloudFunctionConfig",-1)])),_:1})]),e[6]||(e[6]=s('<p>{object} 配置项，这些配置将强制覆盖默认配置</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4><p><code>CloudFunction</code></p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke"><span>invoke()</span></a></h3><blockquote><p><strong>invoke</strong>&lt;<code>TData</code>&gt;(<code>name</code>, <code>data</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>异步触发云函数</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h4><h5 id="tdata" tabindex="-1"><a class="header-anchor" href="#tdata"><span>TData</span></a></h5><p><code>TData</code> = <code>any</code></p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><h5 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h5><p><code>string</code></p><p>{string} 云函数文件名或云函数名</p><h5 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data?</span></a></h5><p><code>TData</code></p><p>{any} 参数</p><h5 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options?</span></a></h5><p><code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>{object} 额外配置项</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="invokesync" tabindex="-1"><a class="header-anchor" href="#invokesync"><span>invokeSync()</span></a></h3><blockquote><p><strong>invokeSync</strong>&lt;<code>TResult</code>, <code>TData</code>&gt;(<code>name</code>, <code>data</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><p>同步调用云函数</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4><h5 id="tresult" tabindex="-1"><a class="header-anchor" href="#tresult"><span>TResult</span></a></h5><p><code>TResult</code> = <code>any</code></p><h5 id="tdata-1" tabindex="-1"><a class="header-anchor" href="#tdata-1"><span>TData</span></a></h5><p><code>TData</code> = <code>any</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><h5 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1"><span>name</span></a></h5><p><code>string</code></p><p>{string} 云函数文件名或云函数名</p><h5 id="data-1" tabindex="-1"><a class="header-anchor" href="#data-1"><span>data?</span></a></h5><p><code>TData</code></p><p>{any} 参数</p><h5 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>options?</span></a></h5><p><code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>{object} 额外配置项</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="oninvoke" tabindex="-1"><a class="header-anchor" href="#oninvoke"><span>onInvoke()</span></a></h3><blockquote><p><strong>onInvoke</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><h5 id="data-2" tabindex="-1"><a class="header-anchor" href="#data-2"><span>data</span></a></h5><p><code>InvokeData</code></p><h5 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h5><p><code>Next</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of"><span>Implementation of</span></a></h4><p><code>Plugin.onInvoke</code></p><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount"><span>onMount()</span></a></h3><blockquote><p><strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><h5 id="data-3" tabindex="-1"><a class="header-anchor" href="#data-3"><span>data</span></a></h5><p><code>MountData</code></p><h5 id="next-1" tabindex="-1"><a class="header-anchor" href="#next-1"><span>next</span></a></h5><p><code>Next</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1"><span>Implementation of</span></a></h4><p><code>Plugin.onMount</code></p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="config-1" tabindex="-1"><a class="header-anchor" href="#config-1"><span>config</span></a></h3><blockquote><p><strong>config</strong>: <code>object</code></p></blockquote><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature"><span>Index Signature</span></a></h4><p>[<code>key</code>: <code>string</code>]: <code>any</code></p><h4 id="memorysize" tabindex="-1"><a class="header-anchor" href="#memorysize"><span>memorySize?</span></a></h4><blockquote><p><code>optional</code> <strong>memorySize</strong>: <code>number</code></p></blockquote><h4 id="name-2" tabindex="-1"><a class="header-anchor" href="#name-2"><span>name?</span></a></h4><blockquote><p><code>optional</code> <strong>name</strong>: <code>string</code></p></blockquote><h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout"><span>timeout?</span></a></h4><blockquote><p><code>optional</code> <strong>timeout</strong>: <code>number</code></p></blockquote><h4 id="triggers" tabindex="-1"><a class="header-anchor" href="#triggers"><span>triggers?</span></a></h4><blockquote><p><code>optional</code> <strong>triggers</strong>: <code>object</code>[]</p></blockquote><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h3><blockquote><p><strong>context</strong>: <code>any</code></p></blockquote><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event"><span>event</span></a></h3><blockquote><p><strong>event</strong>: <code>any</code></p></blockquote><h3 id="name-3" tabindex="-1"><a class="header-anchor" href="#name-3"><span>name</span></a></h3><blockquote><p><code>readonly</code> <strong>name</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2"><span>Implementation of</span></a></h4><p><code>Plugin.name</code></p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><blockquote><p><code>readonly</code> <strong>type</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3"><span>Implementation of</span></a></h4><p><code>Plugin.type</code></p>',89))])}const f=c(l,[["render",h]]),g=JSON.parse('{"path":"/doc/cloud_function/classes/CloudFunction.html","title":"Class: CloudFunction","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Implements","slug":"implements","link":"#implements","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new CloudFunction()","slug":"new-cloudfunction","link":"#new-cloudfunction","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"invoke()","slug":"invoke","link":"#invoke","children":[]},{"level":3,"title":"invokeSync()","slug":"invokesync","link":"#invokesync","children":[]},{"level":3,"title":"onInvoke()","slug":"oninvoke","link":"#oninvoke","children":[]},{"level":3,"title":"onMount()","slug":"onmount","link":"#onmount","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"config","slug":"config-1","link":"#config-1","children":[]},{"level":3,"title":"context","slug":"context","link":"#context","children":[]},{"level":3,"title":"event","slug":"event","link":"#event","children":[]},{"level":3,"title":"name","slug":"name-3","link":"#name-3","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]}]}],"git":{},"filePathRelative":"doc/cloud_function/classes/CloudFunction.md"}');export{f as comp,g as data};
