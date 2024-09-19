import{_ as r,c as d,b as e,d as a,w as t,e as s,a as l,r as p,o as i}from"./app-CvkWzLZl.js";const u={};function c(g,n){const o=p("RouteLink");return i(),d("div",null,[e("p",null,[a(o,{to:"/doc/test/"},{default:t(()=>n[0]||(n[0]=[s("Documents")])),_:1}),n[2]||(n[2]=s(" / ")),a(o,{to:"/doc/test/"},{default:t(()=>n[1]||(n[1]=[s("@faasjs/test")])),_:1}),n[3]||(n[3]=s(" / FuncWarper"))]),n[50]||(n[50]=l(`<h1 id="class-funcwarper" tabindex="-1"><a class="header-anchor" href="#class-funcwarper"><span>Class: FuncWarper</span></a></h1><p>Test Wrapper for a func</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarper</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../demo.func.ts&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="indexable" tabindex="-1"><a class="header-anchor" href="#indexable"><span>Indexable</span></a></h2><p>[<code>key</code>: <code>string</code>]: <code>any</code></p><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-funcwarper" tabindex="-1"><a class="header-anchor" href="#new-funcwarper"><span>new FuncWarper()</span></a></h3>`,7)),e("blockquote",null,[e("p",null,[n[5]||(n[5]=e("strong",null,"new FuncWarper",-1)),n[6]||(n[6]=s("(")),n[7]||(n[7]=e("code",null,"initBy",-1)),n[8]||(n[8]=s("): ")),a(o,{to:"/doc/test/classes/FuncWarper.html"},{default:t(()=>n[4]||(n[4]=[e("code",null,"FuncWarper",-1)])),_:1})])]),n[51]||(n[51]=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1)),e("p",null,[n[10]||(n[10]=s("• ")),n[11]||(n[11]=e("strong",null,"initBy",-1)),n[12]||(n[12]=s(": ")),a(o,{to:"/doc/test/classes/Func.html"},{default:t(()=>n[9]||(n[9]=[e("code",null,"Func",-1)])),_:1}),n[13]||(n[13]=s("<")),n[14]||(n[14]=e("code",null,"any",-1)),n[15]||(n[15]=s(", ")),n[16]||(n[16]=e("code",null,"any",-1)),n[17]||(n[17]=s(", ")),n[18]||(n[18]=e("code",null,"any",-1)),n[19]||(n[19]=s(">"))]),n[52]||(n[52]=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1)),e("p",null,[a(o,{to:"/doc/test/classes/FuncWarper.html"},{default:t(()=>n[20]||(n[20]=[e("code",null,"FuncWarper",-1)])),_:1})]),n[53]||(n[53]=e("h3",{id:"new-funcwarper-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-funcwarper-1"},[e("span",null,"new FuncWarper()")])],-1)),e("blockquote",null,[e("p",null,[n[22]||(n[22]=e("strong",null,"new FuncWarper",-1)),n[23]||(n[23]=s("(")),n[24]||(n[24]=e("code",null,"initBy",-1)),n[25]||(n[25]=s("): ")),a(o,{to:"/doc/test/classes/FuncWarper.html"},{default:t(()=>n[21]||(n[21]=[e("code",null,"FuncWarper",-1)])),_:1})])]),n[54]||(n[54]=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1"},[e("span",null,"Parameters")])],-1)),n[55]||(n[55]=e("p",null,[s("• "),e("strong",null,"initBy"),s(": "),e("code",null,"string")],-1)),n[56]||(n[56]=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1"},[e("span",null,"Returns")])],-1)),e("p",null,[a(o,{to:"/doc/test/classes/FuncWarper.html"},{default:t(()=>n[26]||(n[26]=[e("code",null,"FuncWarper",-1)])),_:1})]),n[57]||(n[57]=l('<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler"><span>handler()</span></a></h3><blockquote><p><strong>handler</strong>&lt;<code>TResult</code>&gt;(<code>event</code>, <code>context</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>event</strong>: <code>any</code> = <code>...</code></p><p>• <strong>context</strong>: <code>any</code> = <code>...</code></p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="jsonhandler" tabindex="-1"><a class="header-anchor" href="#jsonhandler"><span>JSONhandler()</span></a></h3><blockquote><p><strong>JSONhandler</strong>&lt;<code>TData</code>&gt;(<code>body</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>object</code>&gt;</p></blockquote><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>body?</strong></p><p>• <strong>options?</strong> = <code>...</code></p><p>• <strong>options.cookie?</strong></p><p>• <strong>options.headers?</strong></p><p>• <strong>options.session?</strong></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>object</code>&gt;</p><h5 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>body</span></a></h5><blockquote><p><strong>body</strong>: <code>any</code></p></blockquote><h5 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie?</span></a></h5><blockquote><p><code>optional</code> <strong>cookie</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p></blockquote><h5 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data?</span></a></h5><blockquote><p><code>optional</code> <strong>data</strong>: <code>TData</code></p></blockquote><h5 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error?</span></a></h5><blockquote><p><code>optional</code> <strong>error</strong>: <code>object</code></p></blockquote><h5 id="error-message" tabindex="-1"><a class="header-anchor" href="#error-message"><span>error.message</span></a></h5><blockquote><p><strong>message</strong>: <code>string</code></p></blockquote><h5 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span>headers</span></a></h5><blockquote><p><strong>headers</strong>: <code>object</code></p></blockquote><h6 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature"><span>Index Signature</span></a></h6><p>[<code>key</code>: <code>string</code>]: <code>string</code></p><h5 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span>session?</span></a></h5><blockquote><p><code>optional</code> <strong>session</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p></blockquote><h5 id="statuscode" tabindex="-1"><a class="header-anchor" href="#statuscode"><span>statusCode</span></a></h5><blockquote><p><strong>statusCode</strong>: <code>number</code></p></blockquote><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount"><span>mount()</span></a></h3><blockquote><p><strong>mount</strong>(<code>handler</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><p>• <strong>handler?</strong></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3>',48)),e("blockquote",null,[e("p",null,[n[28]||(n[28]=e("code",null,"readonly",-1)),n[29]||(n[29]=s()),n[30]||(n[30]=e("strong",null,"config",-1)),n[31]||(n[31]=s(": ")),a(o,{to:"/doc/test/type-aliases/Config.html"},{default:t(()=>n[27]||(n[27]=[e("code",null,"Config",-1)])),_:1})])]),n[58]||(n[58]=e("h3",{id:"file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#file"},[e("span",null,"file")])],-1)),n[59]||(n[59]=e("blockquote",null,[e("p",null,[e("code",null,"readonly"),s(),e("strong",null,"file"),s(": "),e("code",null,"string")])],-1)),n[60]||(n[60]=e("h3",{id:"func",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#func"},[e("span",null,"func")])],-1)),e("blockquote",null,[e("p",null,[n[33]||(n[33]=e("code",null,"readonly",-1)),n[34]||(n[34]=s()),n[35]||(n[35]=e("strong",null,"func",-1)),n[36]||(n[36]=s(": ")),a(o,{to:"/doc/test/classes/Func.html"},{default:t(()=>n[32]||(n[32]=[e("code",null,"Func",-1)])),_:1}),n[37]||(n[37]=s("<")),n[38]||(n[38]=e("code",null,"any",-1)),n[39]||(n[39]=s(", ")),n[40]||(n[40]=e("code",null,"any",-1)),n[41]||(n[41]=s(", ")),n[42]||(n[42]=e("code",null,"any",-1)),n[43]||(n[43]=s(">"))])]),n[61]||(n[61]=e("h3",{id:"logger",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#logger"},[e("span",null,"logger")])],-1)),n[62]||(n[62]=e("blockquote",null,[e("p",null,[e("code",null,"readonly"),s(),e("strong",null,"logger"),s(": "),e("code",null,"Logger")])],-1)),n[63]||(n[63]=e("h3",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins"},[e("span",null,"plugins")])],-1)),e("blockquote",null,[e("p",null,[n[45]||(n[45]=e("code",null,"readonly",-1)),n[46]||(n[46]=s()),n[47]||(n[47]=e("strong",null,"plugins",-1)),n[48]||(n[48]=s(": ")),a(o,{to:"/doc/test/type-aliases/Plugin.html"},{default:t(()=>n[44]||(n[44]=[e("code",null,"Plugin",-1)])),_:1}),n[49]||(n[49]=s("[]"))])]),n[64]||(n[64]=e("h3",{id:"staging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#staging"},[e("span",null,"staging")])],-1)),n[65]||(n[65]=e("blockquote",null,[e("p",null,[e("code",null,"readonly"),s(),e("strong",null,"staging"),s(": "),e("code",null,"string")])],-1))])}const f=r(u,[["render",c],["__file","FuncWarper.html.vue"]]),b=JSON.parse('{"path":"/doc/test/classes/FuncWarper.html","title":"Class: FuncWarper","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Indexable","slug":"indexable","link":"#indexable","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new FuncWarper()","slug":"new-funcwarper","link":"#new-funcwarper","children":[]},{"level":3,"title":"new FuncWarper()","slug":"new-funcwarper-1","link":"#new-funcwarper-1","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"handler()","slug":"handler","link":"#handler","children":[]},{"level":3,"title":"JSONhandler()","slug":"jsonhandler","link":"#jsonhandler","children":[]},{"level":3,"title":"mount()","slug":"mount","link":"#mount","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]},{"level":3,"title":"func","slug":"func","link":"#func","children":[]},{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"staging","slug":"staging","link":"#staging","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/test/classes/FuncWarper.md"}');export{f as comp,b as data};