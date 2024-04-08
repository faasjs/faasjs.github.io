import{_ as r,r as c,o as l,c as d,a as e,d as a,w as o,b as n,e as t}from"./app-DVsSBjM1.js";const i={},p=t(`<h1 id="class-funcwarper" tabindex="-1"><a class="header-anchor" href="#class-funcwarper"><span>Class: FuncWarper</span></a></h1><p>Test Wrapper for a func</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span>

<span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarper</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../demo.func.ts&#39;</span><span class="token punctuation">)</span>

<span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="indexable" tabindex="-1"><a class="header-anchor" href="#indexable"><span>Indexable</span></a></h2><p>[<code>key</code>: <code>string</code>]: <code>any</code></p><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-funcwarper-initby" tabindex="-1"><a class="header-anchor" href="#new-funcwarper-initby"><span>new FuncWarper(initBy)</span></a></h3>`,7),h=e("strong",null,"new FuncWarper",-1),u=e("code",null,"initBy",-1),g=e("code",null,"FuncWarper",-1),_=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1),b=e("strong",null,"initBy",-1),f=e("code",null,"Func",-1),k=e("code",null,"any",-1),m=e("code",null,"any",-1),y=e("code",null,"any",-1),x=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1),v=e("code",null,"FuncWarper",-1),q=e("h3",{id:"new-funcwarper-initby-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-funcwarper-initby-1"},[e("span",null,"new FuncWarper(initBy)")])],-1),w=e("strong",null,"new FuncWarper",-1),F=e("code",null,"initBy",-1),W=e("code",null,"FuncWarper",-1),P=e("h4",{id:"parameters-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-1"},[e("span",null,"Parameters")])],-1),R=e("p",null,[n("• "),e("strong",null,"initBy"),n(": "),e("code",null,"string")],-1),T=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1"},[e("span",null,"Returns")])],-1),B=e("code",null,"FuncWarper",-1),j=e("h2",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties"},[e("span",null,"Properties")])],-1),C=e("h3",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config"},[e("span",null,"config")])],-1),N=e("strong",null,[e("code",null,"readonly")],-1),O=e("strong",null,"config",-1),S=e("code",null,"Config",-1),D=e("h3",{id:"file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#file"},[e("span",null,"file")])],-1),J=e("blockquote",null,[e("p",null,[e("strong",null,[e("code",null,"readonly")]),n(),e("strong",null,"file"),n(": "),e("code",null,"string")])],-1),V=e("h3",{id:"func",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#func"},[e("span",null,"func")])],-1),I=e("strong",null,[e("code",null,"readonly")],-1),L=e("strong",null,"func",-1),E=e("code",null,"Func",-1),M=e("code",null,"any",-1),H=e("code",null,"any",-1),z=e("code",null,"any",-1),A=e("h3",{id:"logger",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#logger"},[e("span",null,"logger")])],-1),G=e("blockquote",null,[e("p",null,[e("strong",null,[e("code",null,"readonly")]),n(),e("strong",null,"logger"),n(": "),e("code",null,"Logger")])],-1),K=e("h3",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins"},[e("span",null,"plugins")])],-1),Q=e("strong",null,[e("code",null,"readonly")],-1),U=e("strong",null,"plugins",-1),X=e("code",null,"Plugin",-1),Y=t('<h3 id="staging" tabindex="-1"><a class="header-anchor" href="#staging"><span>staging</span></a></h3><blockquote><p><strong><code>readonly</code></strong> <strong>staging</strong>: <code>string</code></p></blockquote><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="jsonhandler" tabindex="-1"><a class="header-anchor" href="#jsonhandler"><span>JSONhandler()</span></a></h3><blockquote><p><strong>JSONhandler</strong>&lt;<code>TData</code>&gt;(<code>body</code>?, <code>options</code>?): <code>Promise</code>&lt;<code>Object</code>&gt;</p></blockquote><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h4><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>body?</strong></p><p>• <strong>options?</strong>= <code>undefined</code></p><p>• <strong>options.cookie?</strong></p><p>• <strong>options.headers?</strong></p><p>• <strong>options.session?</strong></p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>Object</code>&gt;</p><blockquote><h5 id="body" tabindex="-1"><a class="header-anchor" href="#body"><span>body</span></a></h5><blockquote><p><strong>body</strong>: <code>any</code></p></blockquote><h5 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie?</span></a></h5><blockquote><p><strong><code>optional</code></strong> <strong>cookie</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p></blockquote><h5 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data?</span></a></h5><blockquote><p><strong><code>optional</code></strong> <strong>data</strong>: <code>TData</code></p></blockquote><h5 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error?</span></a></h5><blockquote><p><strong><code>optional</code></strong> <strong>error</strong>: <code>Object</code></p></blockquote><h5 id="error-message" tabindex="-1"><a class="header-anchor" href="#error-message"><span>error.message</span></a></h5><blockquote><p><strong>message</strong>: <code>string</code></p></blockquote><h5 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span>headers</span></a></h5><blockquote><p><strong>headers</strong>: <code>Object</code></p></blockquote><h6 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature"><span>Index signature</span></a></h6><p>[<code>key</code>: <code>string</code>]: <code>string</code></p><h5 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span>session?</span></a></h5><blockquote><p><strong><code>optional</code></strong> <strong>session</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p></blockquote><h5 id="statuscode" tabindex="-1"><a class="header-anchor" href="#statuscode"><span>statusCode</span></a></h5><blockquote><p><strong>statusCode</strong>: <code>number</code></p></blockquote></blockquote><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler"><span>handler()</span></a></h3><blockquote><p><strong>handler</strong>&lt;<code>TResult</code>&gt;(<code>event</code>, <code>context</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p></blockquote><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type parameters</span></a></h4><p>• <strong>TResult</strong> = <code>any</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>event</strong>: <code>any</code>= <code>undefined</code></p><p>• <strong>context</strong>: <code>any</code>= <code>undefined</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount"><span>mount()</span></a></h3><blockquote><p><strong>mount</strong>(<code>handler</code>?): <code>Promise</code>&lt;<code>void</code>&gt;</p></blockquote><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><p>• <strong>handler?</strong></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p>',31);function Z($,ee){const s=c("RouteLink");return l(),d("div",null,[e("p",null,[a(s,{to:"/doc/test/"},{default:o(()=>[n("Documents")]),_:1}),n(" / "),a(s,{to:"/doc/test/"},{default:o(()=>[n("@faasjs/test")]),_:1}),n(" / FuncWarper")]),p,e("blockquote",null,[e("p",null,[h,n("("),u,n("): "),a(s,{to:"/doc/test/classes/FuncWarper.html"},{default:o(()=>[g]),_:1})])]),_,e("p",null,[n("• "),b,n(": "),a(s,{to:"/doc/test/classes/Func.html"},{default:o(()=>[f]),_:1}),n("<"),k,n(", "),m,n(", "),y,n(">")]),x,e("p",null,[a(s,{to:"/doc/test/classes/FuncWarper.html"},{default:o(()=>[v]),_:1})]),q,e("blockquote",null,[e("p",null,[w,n("("),F,n("): "),a(s,{to:"/doc/test/classes/FuncWarper.html"},{default:o(()=>[W]),_:1})])]),P,R,T,e("p",null,[a(s,{to:"/doc/test/classes/FuncWarper.html"},{default:o(()=>[B]),_:1})]),j,C,e("blockquote",null,[e("p",null,[N,n(),O,n(": "),a(s,{to:"/doc/test/type-aliases/Config.html"},{default:o(()=>[S]),_:1})])]),D,J,V,e("blockquote",null,[e("p",null,[I,n(),L,n(": "),a(s,{to:"/doc/test/classes/Func.html"},{default:o(()=>[E]),_:1}),n("<"),M,n(", "),H,n(", "),z,n(">")])]),A,G,K,e("blockquote",null,[e("p",null,[Q,n(),U,n(": "),a(s,{to:"/doc/test/type-aliases/Plugin.html"},{default:o(()=>[X]),_:1}),n("[]")])]),Y])}const se=r(i,[["render",Z],["__file","FuncWarper.html.vue"]]),ae=JSON.parse('{"path":"/doc/test/classes/FuncWarper.html","title":"Class: FuncWarper","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Indexable","slug":"indexable","link":"#indexable","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new FuncWarper(initBy)","slug":"new-funcwarper-initby","link":"#new-funcwarper-initby","children":[]},{"level":3,"title":"new FuncWarper(initBy)","slug":"new-funcwarper-initby-1","link":"#new-funcwarper-initby-1","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"file","slug":"file","link":"#file","children":[]},{"level":3,"title":"func","slug":"func","link":"#func","children":[]},{"level":3,"title":"logger","slug":"logger","link":"#logger","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"staging","slug":"staging","link":"#staging","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"JSONhandler()","slug":"jsonhandler","link":"#jsonhandler","children":[]},{"level":3,"title":"handler()","slug":"handler","link":"#handler","children":[]},{"level":3,"title":"mount()","slug":"mount","link":"#mount","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/test/classes/FuncWarper.md"}');export{se as comp,ae as data};