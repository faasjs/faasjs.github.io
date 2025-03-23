import{_ as l,c as p,b as s,a as t,d as r,e as a,w as o,r as d,o as c}from"./app-DE2SDUy3.js";const i={};function h(u,e){const n=d("RouteLink");return c(),p("div",null,[s("p",null,[r(n,{to:"/doc/server/"},{default:o(()=>e[0]||(e[0]=[a("Documents")])),_:1}),e[2]||(e[2]=a(" / ")),r(n,{to:"/doc/server/"},{default:o(()=>e[1]||(e[1]=[a("@faasjs/server")])),_:1}),e[3]||(e[3]=a(" / Server"))]),e[10]||(e[10]=t(`<h1 id="class-server" tabindex="-1"><a class="header-anchor" href="#class-server"><span>Class: Server</span></a></h1><p>FaasJS Server.</p><h2 id="param" tabindex="-1"><a class="header-anchor" href="#param"><span>Param</span></a></h2><p>The root path of the server.</p><h2 id="param-1" tabindex="-1"><a class="header-anchor" href="#param-1"><span>Param</span></a></h2><p>The options of the server.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Server <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/server&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-server" tabindex="-1"><a class="header-anchor" href="#new-server"><span>new Server()</span></a></h3><blockquote><p><strong>new Server</strong>(<code>root</code>, <code>opts</code>?): <code>Server</code></p></blockquote><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><h5 id="root" tabindex="-1"><a class="header-anchor" href="#root"><span>root</span></a></h5><p><code>string</code></p><h5 id="opts" tabindex="-1"><a class="header-anchor" href="#opts"><span>opts?</span></a></h5>`,15)),s("p",null,[r(n,{to:"/doc/server/type-aliases/ServerOptions.html"},{default:o(()=>e[4]||(e[4]=[s("code",null,"ServerOptions",-1)])),_:1})]),e[11]||(e[11]=t('<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4><p><code>Server</code></p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close"><span>close()</span></a></h3><blockquote><p><strong>close</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen"><span>listen()</span></a></h3><blockquote><p><strong>listen</strong>(): <code>Server</code></p></blockquote><p>Start server.</p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Server</code></p><h3 id="processrequest" tabindex="-1"><a class="header-anchor" href="#processrequest"><span>processRequest()</span></a></h3><blockquote><p><strong>processRequest</strong>(<code>path</code>, <code>req</code>, <code>res</code>, <code>requestedAt</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><h5 id="path" tabindex="-1"><a class="header-anchor" href="#path"><span>path</span></a></h5><p><code>string</code></p><h5 id="req" tabindex="-1"><a class="header-anchor" href="#req"><span>req</span></a></h5><p><code>IncomingMessage</code></p><h5 id="res" tabindex="-1"><a class="header-anchor" href="#res"><span>res</span></a></h5><p><code>ServerResponse</code>&lt;<code>IncomingMessage</code>&gt; &amp; <code>object</code></p><h5 id="requestedat" tabindex="-1"><a class="header-anchor" href="#requestedat"><span>requestedAt</span></a></h5><p><code>number</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="closed" tabindex="-1"><a class="header-anchor" href="#closed"><span>closed</span></a></h3><blockquote><p><code>protected</code> <strong>closed</strong>: <code>boolean</code> = <code>false</code></p></blockquote><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger"><span>logger</span></a></h3><blockquote><p><code>readonly</code> <strong>logger</strong>: <code>Logger</code></p></blockquote><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3>',31)),s("blockquote",null,[s("p",null,[e[6]||(e[6]=s("code",null,"readonly",-1)),e[7]||(e[7]=a()),e[8]||(e[8]=s("strong",null,"options",-1)),e[9]||(e[9]=a(": ")),r(n,{to:"/doc/server/type-aliases/ServerOptions.html"},{default:o(()=>e[5]||(e[5]=[s("code",null,"ServerOptions",-1)])),_:1})])]),e[12]||(e[12]=s("h3",{id:"root-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#root-1"},[s("span",null,"root")])],-1)),e[13]||(e[13]=s("blockquote",null,[s("p",null,[s("code",null,"readonly"),a(),s("strong",null,"root"),a(": "),s("code",null,"string")])],-1))])}const m=l(i,[["render",h]]),g=JSON.parse('{"path":"/doc/server/classes/Server.html","title":"Class: Server","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Param","slug":"param","link":"#param","children":[]},{"level":2,"title":"Param","slug":"param-1","link":"#param-1","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new Server()","slug":"new-server","link":"#new-server","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"close()","slug":"close","link":"#close","children":[]},{"level":3,"title":"listen()","slug":"listen","link":"#listen","children":[]},{"level":3,"title":"processRequest()","slug":"processrequest","link":"#processrequest","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"closed","slug":"closed","link":"#closed","children":[]},{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"options","slug":"options","link":"#options","children":[]},{"level":3,"title":"root","slug":"root-1","link":"#root-1","children":[]}]}],"git":{},"filePathRelative":"doc/server/classes/Server.md"}');export{m as comp,g as data};
