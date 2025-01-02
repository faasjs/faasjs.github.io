import{_ as c,c as d,b as s,d as n,e as r,f as a,a as t,r as l,o as p}from"./app-BWE44JdZ.js";const i={};function h(u,e){const o=l("RouteLink");return p(),d("div",null,[s("p",null,[n(o,{to:"/doc/server/"},{default:r(()=>e[0]||(e[0]=[a("Documents")])),_:1}),e[2]||(e[2]=a(" / ")),n(o,{to:"/doc/server/"},{default:r(()=>e[1]||(e[1]=[a("@faasjs/server")])),_:1}),e[3]||(e[3]=a(" / Server"))]),e[12]||(e[12]=t(`<h1 id="class-server" tabindex="-1"><a class="header-anchor" href="#class-server"><span>Class: Server</span></a></h1><p>FaasJS Server.</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"> port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line"> cache<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-server" tabindex="-1"><a class="header-anchor" href="#new-server"><span>new Server()</span></a></h3>`,5)),s("blockquote",null,[s("p",null,[e[5]||(e[5]=s("strong",null,"new Server",-1)),e[6]||(e[6]=a("(")),e[7]||(e[7]=s("code",null,"root",-1)),e[8]||(e[8]=a(", ")),e[9]||(e[9]=s("code",null,"opts",-1)),e[10]||(e[10]=a("?): ")),n(o,{to:"/doc/server/classes/Server.html"},{default:r(()=>e[4]||(e[4]=[s("code",null,"Server",-1)])),_:1})])]),e[13]||(e[13]=t('<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><h5 id="root" tabindex="-1"><a class="header-anchor" href="#root"><span>root</span></a></h5><p><code>string</code></p><p>Project path</p><h5 id="opts" tabindex="-1"><a class="header-anchor" href="#opts"><span>opts?</span></a></h5><p>Options</p><h6 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h6><p><code>boolean</code></p><p>Enable cache, default is false</p><h6 id="onclose" tabindex="-1"><a class="header-anchor" href="#onclose"><span>onClose</span></a></h6><p>(<code>context</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</p><h6 id="onerror" tabindex="-1"><a class="header-anchor" href="#onerror"><span>onError</span></a></h6><p>(<code>error</code>, <code>context</code>) =&gt; <code>void</code></p><h6 id="port" tabindex="-1"><a class="header-anchor" href="#port"><span>port</span></a></h6><p><code>number</code></p><p>Port, default is 3000</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>',17)),s("p",null,[n(o,{to:"/doc/server/classes/Server.html"},{default:r(()=>e[11]||(e[11]=[s("code",null,"Server",-1)])),_:1})]),e[14]||(e[14]=t('<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close"><span>close()</span></a></h3><blockquote><p><strong>close</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen"><span>listen()</span></a></h3><blockquote><p><strong>listen</strong>(): <code>Server</code></p></blockquote><p>Start server.</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Server</code></p><h3 id="processrequest" tabindex="-1"><a class="header-anchor" href="#processrequest"><span>processRequest()</span></a></h3><blockquote><p><strong>processRequest</strong>(<code>path</code>, <code>req</code>, <code>res</code>, <code>requestedAt</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><h5 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>path</span></a></h5><p><code>string</code></p><h5 id="req" tabindex="-1"><a class="header-anchor" href="#req"><span>req</span></a></h5><p><code>IncomingMessage</code></p><h5 id="res" tabindex="-1"><a class="header-anchor" href="#res"><span>res</span></a></h5><p><code>ServerResponse</code> &amp; <code>object</code></p><h5 id="requestedat" tabindex="-1"><a class="header-anchor" href="#requestedat"><span>requestedAt</span></a></h5><p><code>number</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="closed" tabindex="-1"><a class="header-anchor" href="#closed"><span>closed</span></a></h3><blockquote><p><code>protected</code> <strong>closed</strong>: <code>boolean</code> = <code>false</code></p></blockquote><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>logger</span></a></h3><blockquote><p><code>readonly</code> <strong>logger</strong>: <code>Logger</code></p></blockquote><h3 id="onclose-1" tabindex="-1"><a class="header-anchor" href="#onclose-1"><span>onClose()?</span></a></h3><blockquote><p><code>readonly</code> <code>optional</code> <strong>onClose</strong>: (<code>context</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><h5 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h5><h6 id="logger-1" tabindex="-1"><a class="header-anchor" href="#logger-1"><span>logger</span></a></h6><p><code>Logger</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="onerror-1" tabindex="-1"><a class="header-anchor" href="#onerror-1"><span>onError()</span></a></h3><blockquote><p><code>readonly</code> <strong>onError</strong>: (<code>error</code>) =&gt; <code>void</code></p></blockquote><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><h5 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h5><p><code>any</code></p><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4><p><code>void</code></p><h3 id="opts-1" tabindex="-1"><a class="header-anchor" href="#opts-1"><span>opts</span></a></h3><blockquote><p><code>readonly</code> <strong>opts</strong>: <code>object</code></p></blockquote><h4 id="cache-1" tabindex="-1"><a class="header-anchor" href="#cache-1"><span>cache</span></a></h4><blockquote><p><strong>cache</strong>: <code>boolean</code></p></blockquote><h4 id="port-1" tabindex="-1"><a class="header-anchor" href="#port-1"><span>port</span></a></h4><blockquote><p><strong>port</strong>: <code>number</code></p></blockquote><h3 id="root-1" tabindex="-1"><a class="header-anchor" href="#root-1"><span>root</span></a></h3><blockquote><p><code>readonly</code> <strong>root</strong>: <code>string</code></p></blockquote><h3 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime"><span>runtime</span></a></h3><blockquote><p><code>readonly</code> <strong>runtime</strong>: <code>&quot;esm&quot;</code> | <code>&quot;cjs&quot;</code> | <code>&quot;bun&quot;</code></p></blockquote>',53))])}const g=c(i,[["render",h],["__file","Server.html.vue"]]),v=JSON.parse('{"path":"/doc/server/classes/Server.html","title":"Class: Server","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new Server()","slug":"new-server","link":"#new-server","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"close()","slug":"close","link":"#close","children":[]},{"level":3,"title":"listen()","slug":"listen","link":"#listen","children":[]},{"level":3,"title":"processRequest()","slug":"processrequest","link":"#processrequest","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"closed","slug":"closed","link":"#closed","children":[]},{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"onClose()?","slug":"onclose-1","link":"#onclose-1","children":[]},{"level":3,"title":"onError()","slug":"onerror-1","link":"#onerror-1","children":[]},{"level":3,"title":"opts","slug":"opts-1","link":"#opts-1","children":[]},{"level":3,"title":"root","slug":"root-1","link":"#root-1","children":[]},{"level":3,"title":"runtime","slug":"runtime","link":"#runtime","children":[]}]}],"git":{},"filePathRelative":"doc/server/classes/Server.md"}');export{g as comp,v as data};