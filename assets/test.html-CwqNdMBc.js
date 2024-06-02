import{_ as o,r as l,c,b as s,d as a,w as e,e as n,a as p,o as i}from"./app-T58oPeKp.js";const r={},u=s("h1",{id:"function-test",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#function-test"},[s("span",null,"Function: test()")])],-1),d=s("strong",null,"test",-1),_=s("code",null,"initBy",-1),h=s("code",null,"FuncWarper",-1),m=s("p",null,"A simple way to warp a FaasJS function.",-1),k=s("h2",{id:"parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#parameters"},[s("span",null,"Parameters")])],-1),f=s("strong",null,"initBy",-1),v=s("code",null,"string",-1),g=s("code",null,"Func",-1),b=s("code",null,"any",-1),y=s("code",null,"any",-1),F=s("code",null,"any",-1),w=p(`<p>{string | Func} Full file path or a FaasJs function</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../demo.func.ts&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>`,3),x=s("code",null,"FuncWarper",-1);function B(N,R){const t=l("RouteLink");return i(),c("div",null,[s("p",null,[a(t,{to:"/doc/test/"},{default:e(()=>[n("Documents")]),_:1}),n(" / "),a(t,{to:"/doc/test/"},{default:e(()=>[n("@faasjs/test")]),_:1}),n(" / test")]),u,s("blockquote",null,[s("p",null,[d,n("("),_,n("): "),a(t,{to:"/doc/test/classes/FuncWarper.html"},{default:e(()=>[h]),_:1})])]),m,k,s("p",null,[n("• "),f,n(": "),v,n(" | "),a(t,{to:"/doc/test/classes/Func.html"},{default:e(()=>[g]),_:1}),n("<"),b,n(", "),y,n(", "),F,n(">")]),w,s("p",null,[a(t,{to:"/doc/test/classes/FuncWarper.html"},{default:e(()=>[x]),_:1})])])}const W=o(r,[["render",B],["__file","test.html.vue"]]),j=JSON.parse('{"path":"/doc/test/functions/test.html","title":"Function: test()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/test/functions/test.md"}');export{W as comp,j as data};
