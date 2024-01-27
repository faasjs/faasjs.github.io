import{_ as o,r as c,o as l,c as p,a as n,d as a,w as e,b as s,e as i}from"./app-Ph9XU2oP.js";const u={},r=n("h1",{id:"function-test",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#function-test"},[n("span",null,"Function: test()")])],-1),d=n("strong",null,"test",-1),_=n("code",null,"initBy",-1),h=n("code",null,"FuncWarper",-1),k=n("p",null,"A simple way to warp a FaasJS function.",-1),f=n("h2",{id:"parameters",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#parameters"},[n("span",null,"Parameters")])],-1),m=n("strong",null,"initBy",-1),v=n("code",null,"string",-1),b=n("code",null,"Func",-1),y=n("code",null,"any",-1),g=n("code",null,"any",-1),F=n("code",null,"any",-1),w=i(`<p>{string | Func} Full file path or a FaasJs function</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span>

<span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/../demo.func.ts&#39;</span><span class="token punctuation">)</span>

<span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>`,3),x=n("code",null,"FuncWarper",-1);function B(N,V){const t=c("RouterLink");return l(),p("div",null,[n("p",null,[a(t,{to:"/doc/test/"},{default:e(()=>[s("Documents")]),_:1}),s(" / "),a(t,{to:"/doc/test/"},{default:e(()=>[s("@faasjs/test")]),_:1}),s(" / test")]),r,n("blockquote",null,[n("p",null,[d,s("("),_,s("): "),a(t,{to:"/doc/test/classes/FuncWarper.html"},{default:e(()=>[h]),_:1})])]),k,f,n("p",null,[s("• "),m,s(": "),v,s(" | "),a(t,{to:"/doc/test/classes/Func.html"},{default:e(()=>[b]),_:1}),s("<"),y,s(", "),g,s(", "),F,s(">")]),w,n("p",null,[a(t,{to:"/doc/test/classes/FuncWarper.html"},{default:e(()=>[x]),_:1})])])}const R=o(u,[["render",B],["__file","test.html.vue"]]);export{R as default};
