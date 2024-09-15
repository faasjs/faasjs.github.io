import{_ as r,r as c,c as l,b as o,d as a,w as s,e as n,a as d,o as i}from"./app-BzQO7YJ-.js";const p={};function u(h,e){const t=c("RouteLink");return i(),l("div",null,[o("p",null,[a(t,{to:"/doc/cloud_function/"},{default:s(()=>e[0]||(e[0]=[n("Documents")])),_:1}),e[2]||(e[2]=n(" / ")),a(t,{to:"/doc/cloud_function/"},{default:s(()=>e[1]||(e[1]=[n("@faasjs/cloud_function")])),_:1}),e[3]||(e[3]=n(" / CloudFunction"))]),e[14]||(e[14]=d('<h1 id="class-cloudfunction" tabindex="-1"><a class="header-anchor" href="#class-cloudfunction"><span>Class: CloudFunction</span></a></h1><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements"><span>Implements</span></a></h2><ul><li><code>Plugin</code></li></ul><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-cloudfunction" tabindex="-1"><a class="header-anchor" href="#new-cloudfunction"><span>new CloudFunction()</span></a></h3>',5)),o("blockquote",null,[o("p",null,[e[5]||(e[5]=o("strong",null,"new CloudFunction",-1)),e[6]||(e[6]=n("(")),e[7]||(e[7]=o("code",null,"config",-1)),e[8]||(e[8]=n("?): ")),a(t,{to:"/doc/cloud_function/classes/CloudFunction.html"},{default:s(()=>e[4]||(e[4]=[o("code",null,"CloudFunction",-1)])),_:1})])]),e[15]||(e[15]=o("p",null,"创建云函数配置",-1)),e[16]||(e[16]=o("h4",{id:"parameters",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#parameters"},[o("span",null,"Parameters")])],-1)),o("p",null,[e[10]||(e[10]=n("• ")),e[11]||(e[11]=o("strong",null,"config?",-1)),e[12]||(e[12]=n(": ")),a(t,{to:"/doc/cloud_function/type-aliases/CloudFunctionConfig.html"},{default:s(()=>e[9]||(e[9]=[o("code",null,"CloudFunctionConfig",-1)])),_:1})]),e[17]||(e[17]=o("p",null,"{object} 配置项，这些配置将强制覆盖默认配置",-1)),e[18]||(e[18]=o("h4",{id:"returns",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#returns"},[o("span",null,"Returns")])],-1)),o("p",null,[a(t,{to:"/doc/cloud_function/classes/CloudFunction.html"},{default:s(()=>e[13]||(e[13]=[o("code",null,"CloudFunction",-1)])),_:1})]),e[19]||(e[19]=d('<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke"><span>invoke()</span></a></h3><blockquote><p><strong>invoke</strong>&lt;<code>TData</code>&gt;(<code>name</code>, <code>data</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>异步触发云函数</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h4><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>name</strong>: <code>string</code></p><p>{string} 云函数文件名或云函数名</p><p>• <strong>data?</strong>: <code>TData</code></p><p>{any} 参数</p><p>• <strong>options?</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>{object} 额外配置项</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="invokesync" tabindex="-1"><a class="header-anchor" href="#invokesync"><span>invokeSync()</span></a></h3><blockquote><p><strong>invokeSync</strong>&lt;<code>TResult</code>, <code>TData</code>&gt;(<code>name</code>, <code>data</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><p>同步调用云函数</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>name</strong>: <code>string</code></p><p>{string} 云函数文件名或云函数名</p><p>• <strong>data?</strong>: <code>TData</code></p><p>{any} 参数</p><p>• <strong>options?</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>{object} 额外配置项</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="oninvoke" tabindex="-1"><a class="header-anchor" href="#oninvoke"><span>onInvoke()</span></a></h3><blockquote><p><strong>onInvoke</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>InvokeData</code></p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of"><span>Implementation of</span></a></h4><p><code>Plugin.onInvoke</code></p><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount"><span>onMount()</span></a></h3><blockquote><p><strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>MountData</code></p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1"><span>Implementation of</span></a></h4><p><code>Plugin.onMount</code></p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3><blockquote><p><strong>config</strong>: <code>object</code></p></blockquote><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature"><span>Index Signature</span></a></h4><p>[<code>key</code>: <code>string</code>]: <code>any</code></p><h4 id="memorysize" tabindex="-1"><a class="header-anchor" href="#memorysize"><span>memorySize?</span></a></h4><blockquote><p><code>optional</code> <strong>memorySize</strong>: <code>number</code></p></blockquote><h4 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name?</span></a></h4><blockquote><p><code>optional</code> <strong>name</strong>: <code>string</code></p></blockquote><h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout"><span>timeout?</span></a></h4><blockquote><p><code>optional</code> <strong>timeout</strong>: <code>number</code></p></blockquote><h4 id="triggers" tabindex="-1"><a class="header-anchor" href="#triggers"><span>triggers?</span></a></h4><blockquote><p><code>optional</code> <strong>triggers</strong>: <code>object</code>[]</p></blockquote><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h3><blockquote><p><strong>context</strong>: <code>any</code></p></blockquote><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event"><span>event</span></a></h3><blockquote><p><strong>event</strong>: <code>any</code></p></blockquote><h3 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1"><span>name</span></a></h3><blockquote><p><code>readonly</code> <strong>name</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2"><span>Implementation of</span></a></h4><p><code>Plugin.name</code></p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><blockquote><p><code>readonly</code> <strong>type</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3"><span>Implementation of</span></a></h4><p><code>Plugin.type</code></p>',73))])}const g=r(p,[["render",u],["__file","CloudFunction.html.vue"]]),f=JSON.parse('{"path":"/doc/cloud_function/classes/CloudFunction.html","title":"Class: CloudFunction","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Implements","slug":"implements","link":"#implements","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new CloudFunction()","slug":"new-cloudfunction","link":"#new-cloudfunction","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"invoke()","slug":"invoke","link":"#invoke","children":[]},{"level":3,"title":"invokeSync()","slug":"invokesync","link":"#invokesync","children":[]},{"level":3,"title":"onInvoke()","slug":"oninvoke","link":"#oninvoke","children":[]},{"level":3,"title":"onMount()","slug":"onmount","link":"#onmount","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"context","slug":"context","link":"#context","children":[]},{"level":3,"title":"event","slug":"event","link":"#event","children":[]},{"level":3,"title":"name","slug":"name-1","link":"#name-1","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/cloud_function/classes/CloudFunction.md"}');export{g as comp,f as data};
