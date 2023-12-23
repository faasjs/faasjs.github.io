import{_ as s,r as c,o as r,c as l,a as e,b as n,w as d,d as t,e as o}from"./app-eMaYiWw7.js";const i={},h=o(`<h1 id="class-funcwarper" tabindex="-1"><a class="header-anchor" href="#class-funcwarper" aria-hidden="true">#</a> Class: FuncWarper</h1><p>Test Wrapper for a func</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span>

<span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarper</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../demo.func.ts&#39;</span><span class="token punctuation">)</span>

<span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="indexable" tabindex="-1"><a class="header-anchor" href="#indexable" aria-hidden="true">#</a> Indexable</h2><p>▪ [key: <code>string</code>]: <code>any</code></p><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,7),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),p=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),_=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1","aria-hidden":"true"},"#"),t(" Constructors")],-1),f=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor","aria-hidden":"true"},"#"),t(" constructor")],-1),g=e("strong",null,"new FuncWarper",-1),y=e("code",null,"initBy",-1),m=e("code",null,"FuncWarper",-1),x=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),k=e("td",{style:{"text-align":"left"}},[e("code",null,"initBy")],-1),F={style:{"text-align":"left"}},W=e("code",null,"Func",-1),v=e("code",null,"any",-1),R=e("code",null,"any",-1),T=e("code",null,"any",-1),P=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),w=e("code",null,"FuncWarper",-1),N=e("strong",null,"new FuncWarper",-1),j=e("code",null,"initBy",-1),C=e("code",null,"FuncWarper",-1),O=o('<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>initBy</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4>',3),B=e("code",null,"FuncWarper",-1),D=e("h2",{id:"properties-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),t(" Properties")],-1),S=e("h3",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),t(" config")],-1),V=e("code",null,"Readonly",-1),J=e("strong",null,"config",-1),L=e("code",null,"Config",-1),E=o('<hr><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h3><p>• <code>Readonly</code> <strong>file</strong>: <code>string</code></p><hr><h3 id="func" tabindex="-1"><a class="header-anchor" href="#func" aria-hidden="true">#</a> func</h3>',5),M=e("code",null,"Readonly",-1),q=e("strong",null,"func",-1),H=e("code",null,"Func",-1),I=e("code",null,"any",-1),z=e("code",null,"any",-1),A=e("code",null,"any",-1),G=o('<hr><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3><p>• <code>Readonly</code> <strong>logger</strong>: <code>Logger</code></p><hr><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>',5),K=e("code",null,"Readonly",-1),Q=e("strong",null,"plugins",-1),U=e("code",null,"Plugin",-1),X=o('<hr><h3 id="staging" tabindex="-1"><a class="header-anchor" href="#staging" aria-hidden="true">#</a> staging</h3><p>• <code>Readonly</code> <strong>staging</strong>: <code>string</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="jsonhandler" tabindex="-1"><a class="header-anchor" href="#jsonhandler" aria-hidden="true">#</a> JSONhandler</h3><p>▸ <strong>JSONhandler</strong>&lt;<code>TData</code>&gt;(<code>body?</code>, <code>options?</code>): <code>Promise</code>&lt;{ <code>body</code>: <code>any</code> ; <code>cookie?</code>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; ; <code>data?</code>: <code>TData</code> ; <code>error?</code>: { <code>message</code>: <code>string</code> } ; <code>headers</code>: { <code>[key: string]</code>: <code>string</code>; } ; <code>session?</code>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; ; <code>statusCode</code>: <code>number</code> }&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.cookie?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.headers?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.session?</code></td><td style="text-align:left;"><code>Object</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;{ <code>body</code>: <code>any</code> ; <code>cookie?</code>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; ; <code>data?</code>: <code>TData</code> ; <code>error?</code>: { <code>message</code>: <code>string</code> } ; <code>headers</code>: { <code>[key: string]</code>: <code>string</code>; } ; <code>session?</code>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; ; <code>statusCode</code>: <code>number</code> }&gt;</p><hr><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler" aria-hidden="true">#</a> handler</h3><p>▸ <strong>handler</strong>&lt;<code>TResult</code>&gt;(<code>event?</code>, <code>context?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>context</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3><p>▸ <strong>mount</strong>(<code>handler?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>',25),Y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Z=e("td",{style:{"text-align":"left"}},[e("code",null,"handler?")],-1),$={style:{"text-align":"left"}},ee=e("code",null,"func",-1),te=e("code",null,"FuncWarper",-1),ae=e("code",null,"void",-1),ne=e("code",null,"Promise",-1),de=e("code",null,"void",-1),oe=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),t(" Returns")],-1),se=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1);function ce(re,le){const a=c("RouterLink");return r(),l("div",null,[h,e("ul",null,[e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#constructor"},{default:d(()=>[t("constructor")]),_:1})])]),u,e("ul",null,[e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#config"},{default:d(()=>[t("config")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#file"},{default:d(()=>[t("file")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#func"},{default:d(()=>[t("func")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#logger"},{default:d(()=>[t("logger")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#plugins"},{default:d(()=>[t("plugins")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#staging"},{default:d(()=>[t("staging")]),_:1})])]),p,e("ul",null,[e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#jsonhandler"},{default:d(()=>[t("JSONhandler")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#handler"},{default:d(()=>[t("handler")]),_:1})]),e("li",null,[n(a,{to:"/doc/test/classes/FuncWarper.html#mount"},{default:d(()=>[t("mount")]),_:1})])]),_,f,e("p",null,[t("• "),g,t("("),y,t("): "),n(a,{to:"/doc/test/classes/FuncWarper.html"},{default:d(()=>[m]),_:1})]),x,e("table",null,[b,e("tbody",null,[e("tr",null,[k,e("td",F,[n(a,{to:"/doc/test/classes/Func.html"},{default:d(()=>[W]),_:1}),t("<"),v,t(", "),R,t(", "),T,t(">")])])])]),P,e("p",null,[n(a,{to:"/doc/test/classes/FuncWarper.html"},{default:d(()=>[w]),_:1})]),e("p",null,[t("• "),N,t("("),j,t("): "),n(a,{to:"/doc/test/classes/FuncWarper.html"},{default:d(()=>[C]),_:1})]),O,e("p",null,[n(a,{to:"/doc/test/classes/FuncWarper.html"},{default:d(()=>[B]),_:1})]),D,S,e("p",null,[t("• "),V,t(),J,t(": "),n(a,{to:"/doc/test/#config"},{default:d(()=>[L]),_:1})]),E,e("p",null,[t("• "),M,t(),q,t(": "),n(a,{to:"/doc/test/classes/Func.html"},{default:d(()=>[H]),_:1}),t("<"),I,t(", "),z,t(", "),A,t(">")]),G,e("p",null,[t("• "),K,t(),Q,t(": "),n(a,{to:"/doc/test/#plugin"},{default:d(()=>[U]),_:1}),t("[]")]),X,e("table",null,[Y,e("tbody",null,[e("tr",null,[Z,e("td",$,[t("("),ee,t(": "),n(a,{to:"/doc/test/classes/FuncWarper.html"},{default:d(()=>[te]),_:1}),t(") => "),ae,t(" | "),ne,t("<"),de,t(">")])])])]),oe,se])}const he=s(i,[["render",ce],["__file","FuncWarper.html.vue"]]);export{he as default};