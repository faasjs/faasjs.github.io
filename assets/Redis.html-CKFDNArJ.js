import{_ as r,r as d,c,b as e,d as s,w as n,e as a,a as t,o as l}from"./app-Co8XoY5v.js";const p={},i=t('<h1 id="class-redis" tabindex="-1"><a class="header-anchor" href="#class-redis"><span>Class: Redis</span></a></h1><p>Redis Plugin</p><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements"><span>Implements</span></a></h2><ul><li><code>Plugin</code></li></ul><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-redis" tabindex="-1"><a class="header-anchor" href="#new-redis"><span>new Redis()</span></a></h3>',6),h=e("strong",null,"new Redis",-1),g=e("code",null,"config",-1),u=e("code",null,"Redis",-1),m=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1),b=e("strong",null,"config?",-1),k=e("code",null,"RedisConfig",-1),f=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1),x=e("code",null,"Redis",-1),y=t('<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="adapter" tabindex="-1"><a class="header-anchor" href="#adapter"><span>adapter</span></a></h3><blockquote><p><strong>adapter</strong>: <code>Redis</code></p></blockquote><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3><blockquote><p><strong>config</strong>: <code>RedisOptions</code></p></blockquote><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>logger</span></a></h3><blockquote><p><strong>logger</strong>: <code>Logger</code></p></blockquote><h3 id="multi" tabindex="-1"><a class="header-anchor" href="#multi"><span>multi()</span></a></h3><blockquote><p><strong>multi</strong>: (<code>options</code>?) =&gt; <code>ChainableCommander</code></p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>options?</strong>: <code>object</code> | <code>any</code>[][]</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>ChainableCommander</code></p><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><blockquote><p><code>readonly</code> <strong>name</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of" tabindex="-1"><a class="header-anchor" href="#implementation-of"><span>Implementation of</span></a></h4><p><code>Plugin.name</code></p><h3 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline"><span>pipeline()</span></a></h3><blockquote><p><strong>pipeline</strong>: (<code>commands</code>?) =&gt; <code>ChainableCommander</code></p></blockquote><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>commands?</strong>: <code>any</code>[][]</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>ChainableCommander</code></p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><blockquote><p><code>readonly</code> <strong>type</strong>: <code>string</code> = <code>Name</code></p></blockquote><h4 id="implementation-of-1" tabindex="-1"><a class="header-anchor" href="#implementation-of-1"><span>Implementation of</span></a></h4><p><code>Plugin.type</code></p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>get()</span></a></h3><blockquote><p><strong>get</strong>&lt;<code>TData</code>&gt;(<code>key</code>): <code>Promise</code>&lt;<code>TData</code>&gt;</p></blockquote><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h4><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TData</code>&gt;</p><h3 id="getjson" tabindex="-1"><a class="header-anchor" href="#getjson"><span>getJSON()</span></a></h3><blockquote><p><strong>getJSON</strong>&lt;<code>TData</code>&gt;(<code>key</code>): <code>Promise</code>&lt;<code>TData</code>&gt;</p></blockquote><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type parameters</span></a></h4><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TData</code>&gt;</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock"><span>lock()</span></a></h3><blockquote><p><strong>lock</strong>(<code>key</code>, <code>EX</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Lock by key</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><p>• <strong>EX</strong>: <code>number</code>= <code>10</code></p><p>expire in seconds, default 10</p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="ondeploy" tabindex="-1"><a class="header-anchor" href="#ondeploy"><span>onDeploy()</span></a></h3><blockquote><p><strong>onDeploy</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>DeployData</code></p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-2" tabindex="-1"><a class="header-anchor" href="#implementation-of-2"><span>Implementation of</span></a></h4><p><code>Plugin.onDeploy</code></p><h3 id="oninvoke" tabindex="-1"><a class="header-anchor" href="#oninvoke"><span>onInvoke()</span></a></h3><blockquote><p><strong>onInvoke</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>InvokeData</code>&lt;<code>any</code>, <code>any</code>, <code>any</code>&gt;</p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-3" tabindex="-1"><a class="header-anchor" href="#implementation-of-3"><span>Implementation of</span></a></h4><p><code>Plugin.onInvoke</code></p><h3 id="onmount" tabindex="-1"><a class="header-anchor" href="#onmount"><span>onMount()</span></a></h3><blockquote><p><strong>onMount</strong>(<code>data</code>, <code>next</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8"><span>Parameters</span></a></h4><p>• <strong>data</strong>: <code>MountData</code></p><p>• <strong>next</strong>: <code>Next</code></p><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="implementation-of-4" tabindex="-1"><a class="header-anchor" href="#implementation-of-4"><span>Implementation of</span></a></h4><p><code>Plugin.onMount</code></p><h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish"><span>publish()</span></a></h3><blockquote><p><strong>publish</strong>(<code>channel</code>, <code>message</code>): <code>Promise</code>&lt;<code>number</code>&gt;</p></blockquote><p>Publish message</p><h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9"><span>Parameters</span></a></h4><p>• <strong>channel</strong>: <code>string</code></p><p>• <strong>message</strong>: <code>any</code></p><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>number</code>&gt;</p><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>query()</span></a></h3><blockquote><p><strong>query</strong>&lt;<code>TResult</code>&gt;(<code>command</code>, <code>args</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10"><span>Parameters</span></a></h4><p>• <strong>command</strong>: <code>string</code></p><p>• <strong>args</strong>: <code>any</code>[]</p><h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="quit" tabindex="-1"><a class="header-anchor" href="#quit"><span>quit()</span></a></h3><blockquote><p><strong>quit</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="returns-11" tabindex="-1"><a class="header-anchor" href="#returns-11"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>set()</span></a></h3><blockquote><p><strong>set</strong>&lt;<code>TResult</code>&gt;(<code>key</code>, <code>value</code>, <code>options</code>?): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>void</code></p><h4 id="parameters-11" tabindex="-1"><a class="header-anchor" href="#parameters-11"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><p>• <strong>value</strong>: <code>any</code></p><p>• <strong>options?</strong>: <code>SET</code></p><h4 id="returns-12" tabindex="-1"><a class="header-anchor" href="#returns-12"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="setjson" tabindex="-1"><a class="header-anchor" href="#setjson"><span>setJSON()</span></a></h3><blockquote><p><strong>setJSON</strong>&lt;<code>TResult</code>&gt;(<code>key</code>, <code>value</code>, <code>options</code>?): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>void</code></p><h4 id="parameters-12" tabindex="-1"><a class="header-anchor" href="#parameters-12"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><p>• <strong>value</strong>: <code>any</code></p><p>• <strong>options?</strong>: <code>SET</code></p><h4 id="returns-13" tabindex="-1"><a class="header-anchor" href="#returns-13"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="unlock" tabindex="-1"><a class="header-anchor" href="#unlock"><span>unlock()</span></a></h3><blockquote><p><strong>unlock</strong>(<code>key</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><p>Unlock by key</p><h4 id="parameters-13" tabindex="-1"><a class="header-anchor" href="#parameters-13"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><h4 id="returns-14" tabindex="-1"><a class="header-anchor" href="#returns-14"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p>',128);function v(q,P){const o=d("RouteLink");return l(),c("div",null,[e("p",null,[s(o,{to:"/doc/redis/"},{default:n(()=>[a("Documents")]),_:1}),a(" / "),s(o,{to:"/doc/redis/"},{default:n(()=>[a("@faasjs/redis")]),_:1}),a(" / Redis")]),i,e("blockquote",null,[e("p",null,[h,a("("),g,a("?): "),s(o,{to:"/doc/redis/classes/Redis.html"},{default:n(()=>[u]),_:1})])]),m,e("p",null,[a("• "),b,a(": "),s(o,{to:"/doc/redis/type-aliases/RedisConfig.html"},{default:n(()=>[k]),_:1})]),f,e("p",null,[s(o,{to:"/doc/redis/classes/Redis.html"},{default:n(()=>[x]),_:1})]),y])}const _=r(p,[["render",v],["__file","Redis.html.vue"]]),T=JSON.parse('{"path":"/doc/redis/classes/Redis.html","title":"Class: Redis","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Implements","slug":"implements","link":"#implements","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new Redis()","slug":"new-redis","link":"#new-redis","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"adapter","slug":"adapter","link":"#adapter","children":[]},{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"multi()","slug":"multi","link":"#multi","children":[]},{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"pipeline()","slug":"pipeline","link":"#pipeline","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"get()","slug":"get","link":"#get","children":[]},{"level":3,"title":"getJSON()","slug":"getjson","link":"#getjson","children":[]},{"level":3,"title":"lock()","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"onDeploy()","slug":"ondeploy","link":"#ondeploy","children":[]},{"level":3,"title":"onInvoke()","slug":"oninvoke","link":"#oninvoke","children":[]},{"level":3,"title":"onMount()","slug":"onmount","link":"#onmount","children":[]},{"level":3,"title":"publish()","slug":"publish","link":"#publish","children":[]},{"level":3,"title":"query()","slug":"query","link":"#query","children":[]},{"level":3,"title":"quit()","slug":"quit","link":"#quit","children":[]},{"level":3,"title":"set()","slug":"set","link":"#set","children":[]},{"level":3,"title":"setJSON()","slug":"setjson","link":"#setjson","children":[]},{"level":3,"title":"unlock()","slug":"unlock","link":"#unlock","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/redis/classes/Redis.md"}');export{_ as comp,T as data};
