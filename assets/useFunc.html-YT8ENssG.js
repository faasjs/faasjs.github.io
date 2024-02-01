import{_ as o,r as c,o as p,c as l,a as n,d as t,w as e,b as s,e as u}from"./app-VWZqI_uP.js";const i={},r=n("h1",{id:"function-usefunc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#function-usefunc"},[n("span",null,"Function: useFunc()")])],-1),d=n("strong",null,"useFunc",-1),k=n("code",null,"TEvent",-1),_=n("code",null,"TContext",-1),h=n("code",null,"TResult",-1),m=n("code",null,"handler",-1),v=n("code",null,"Func",-1),f=n("code",null,"TEvent",-1),b=n("code",null,"TContext",-1),g=n("code",null,"TResult",-1),y=u(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// pure function</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// with http</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useHttp</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>http<span class="token punctuation">.</span>params<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h2><p>• <strong>TEvent</strong> = <code>any</code></p><p>• <strong>TContext</strong> = <code>any</code></p><p>• <strong>TResult</strong> = <code>any</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2>`,6),x=n("strong",null,"handler",-1),T=n("code",null,"Handler",-1),w=n("code",null,"TEvent",-1),F=n("code",null,"TContext",-1),R=n("code",null,"TResult",-1),C=n("h2",{id:"returns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#returns"},[n("span",null,"Returns")])],-1),E=n("code",null,"Func",-1),H=n("code",null,"TEvent",-1),N=n("code",null,"TContext",-1),V=n("code",null,"TResult",-1);function B(j,L){const a=c("RouterLink");return p(),l("div",null,[n("p",null,[t(a,{to:"/doc/test/"},{default:e(()=>[s("Documents")]),_:1}),s(" / "),t(a,{to:"/doc/test/"},{default:e(()=>[s("@faasjs/test")]),_:1}),s(" / useFunc")]),r,n("blockquote",null,[n("p",null,[d,s("<"),k,s(", "),_,s(", "),h,s(">("),m,s("): "),t(a,{to:"/doc/test/classes/Func.html"},{default:e(()=>[v]),_:1}),s("<"),f,s(", "),b,s(", "),g,s(">")])]),y,n("p",null,[s("• "),x,s(": () => "),t(a,{to:"/doc/test/type-aliases/Handler.html"},{default:e(()=>[T]),_:1}),s("<"),w,s(", "),F,s(", "),R,s(">")]),C,n("p",null,[t(a,{to:"/doc/test/classes/Func.html"},{default:e(()=>[E]),_:1}),s("<"),H,s(", "),N,s(", "),V,s(">")])])}const D=o(i,[["render",B],["__file","useFunc.html.vue"]]);export{D as default};