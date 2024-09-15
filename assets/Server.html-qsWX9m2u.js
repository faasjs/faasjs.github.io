import{_ as l,r as p,c,b as s,d as r,w as a,e as o,a as t,o as d}from"./app-BzQO7YJ-.js";const i={};function u(h,e){const n=p("RouteLink");return d(),c("div",null,[s("p",null,[r(n,{to:"/doc/server/"},{default:a(()=>e[0]||(e[0]=[o("Documents")])),_:1}),e[2]||(e[2]=o(" / ")),r(n,{to:"/doc/server/"},{default:a(()=>e[1]||(e[1]=[o("@faasjs/server")])),_:1}),e[3]||(e[3]=o(" / Server"))]),e[12]||(e[12]=t(`<h1 id="class-server" tabindex="-1"><a class="header-anchor" href="#class-server"><span>Class: Server</span></a></h1><p>FaasJS Server.</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"> port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line"> cache<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-server" tabindex="-1"><a class="header-anchor" href="#new-server"><span>new Server()</span></a></h3>`,5)),s("blockquote",null,[s("p",null,[e[5]||(e[5]=s("strong",null,"new Server",-1)),e[6]||(e[6]=o("(")),e[7]||(e[7]=s("code",null,"root",-1)),e[8]||(e[8]=o(", ")),e[9]||(e[9]=s("code",null,"opts",-1)),e[10]||(e[10]=o("?): ")),r(n,{to:"/doc/server/classes/Server.html"},{default:a(()=>e[4]||(e[4]=[s("code",null,"Server",-1)])),_:1})])]),e[13]||(e[13]=t('<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><p>• <strong>root</strong>: <code>string</code></p><p>Project path</p><p>• <strong>opts?</strong></p><p>Options</p><p>• <strong>opts.cache?</strong>: <code>boolean</code></p><p>Enable cache, default is false</p><p>• <strong>opts.onError?</strong></p><p>• <strong>opts.port?</strong>: <code>number</code></p><p>Port, default is 3000</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>',11)),s("p",null,[r(n,{to:"/doc/server/classes/Server.html"},{default:a(()=>e[11]||(e[11]=[s("code",null,"Server",-1)])),_:1})]),e[14]||(e[14]=t('<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close"><span>close()</span></a></h3><blockquote><p><strong>close</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen"><span>listen()</span></a></h3><blockquote><p><strong>listen</strong>(): <code>Server</code>&lt;<em>typeof</em> <code>IncomingMessage</code>, <em>typeof</em> <code>ServerResponse</code>&gt;</p></blockquote><p>Start server.</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Server</code>&lt;<em>typeof</em> <code>IncomingMessage</code>, <em>typeof</em> <code>ServerResponse</code>&gt;</p><h3 id="processrequest" tabindex="-1"><a class="header-anchor" href="#processrequest"><span>processRequest()</span></a></h3><blockquote><p><strong>processRequest</strong>(<code>path</code>, <code>req</code>, <code>res</code>, <code>requestedAt</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>path</strong>: <code>string</code></p><p>• <strong>req</strong>: <code>IncomingMessage</code></p><p>• <strong>res</strong>: <code>ServerResponse</code>&lt;<code>IncomingMessage</code>&gt; &amp; <code>object</code></p><p>• <strong>requestedAt</strong>: <code>number</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>logger</span></a></h3><blockquote><p><code>readonly</code> <strong>logger</strong>: <code>Logger</code></p></blockquote><h3 id="onerror" tabindex="-1"><a class="header-anchor" href="#onerror"><span>onError()?</span></a></h3><blockquote><p><code>optional</code> <strong>onError</strong>: (<code>error</code>) =&gt; <code>void</code></p></blockquote><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>error</strong>: <code>Error</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>void</code></p><h3 id="opts" tabindex="-1"><a class="header-anchor" href="#opts"><span>opts</span></a></h3><blockquote><p><code>readonly</code> <strong>opts</strong>: <code>object</code></p></blockquote><h4 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h4><blockquote><p><strong>cache</strong>: <code>boolean</code></p></blockquote><h4 id="port" tabindex="-1"><a class="header-anchor" href="#port"><span>port</span></a></h4><blockquote><p><strong>port</strong>: <code>number</code></p></blockquote><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root"><span>root</span></a></h3><blockquote><p><code>readonly</code> <strong>root</strong>: <code>string</code></p></blockquote>',36))])}const v=l(i,[["render",u],["__file","Server.html.vue"]]),m=JSON.parse('{"path":"/doc/server/classes/Server.html","title":"Class: Server","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new Server()","slug":"new-server","link":"#new-server","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"close()","slug":"close","link":"#close","children":[]},{"level":3,"title":"listen()","slug":"listen","link":"#listen","children":[]},{"level":3,"title":"processRequest()","slug":"processrequest","link":"#processrequest","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"onError()?","slug":"onerror","link":"#onerror","children":[]},{"level":3,"title":"opts","slug":"opts","link":"#opts","children":[]},{"level":3,"title":"root","slug":"root","link":"#root","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/server/classes/Server.md"}');export{v as comp,m as data};
