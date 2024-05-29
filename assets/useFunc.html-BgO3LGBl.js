import{_ as p,r as o,c,b as n,d as e,w as t,e as s,a as l,o as u}from"./app-CRwacYaH.js";const i={},r=n("h1",{id:"function-usefunc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#function-usefunc"},[n("span",null,"Function: useFunc()")])],-1),d=n("strong",null,"useFunc",-1),k=n("code",null,"TEvent",-1),m=n("code",null,"TContext",-1),h=n("code",null,"TResult",-1),v=n("code",null,"handler",-1),_=n("code",null,"Func",-1),f=n("code",null,"TEvent",-1),g=n("code",null,"TContext",-1),b=n("code",null,"TResult",-1),y=l(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// pure function</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// with http</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useHttp</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>http<span class="token punctuation">.</span>params<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h2><p>• <strong>TEvent</strong> = <code>any</code></p><p>• <strong>TContext</strong> = <code>any</code></p><p>• <strong>TResult</strong> = <code>any</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>handler</strong></p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>`,8),x=n("code",null,"Func",-1),F=n("code",null,"TEvent",-1),T=n("code",null,"TContext",-1),w=n("code",null,"TResult",-1);function R(C,E){const a=o("RouteLink");return u(),c("div",null,[n("p",null,[e(a,{to:"/doc/func/"},{default:t(()=>[s("Documents")]),_:1}),s(" / "),e(a,{to:"/doc/func/"},{default:t(()=>[s("@faasjs/func")]),_:1}),s(" / useFunc")]),r,n("blockquote",null,[n("p",null,[d,s("<"),k,s(", "),m,s(", "),h,s(">("),v,s("): "),e(a,{to:"/doc/func/classes/Func.html"},{default:t(()=>[_]),_:1}),s("<"),f,s(", "),g,s(", "),b,s(">")])]),y,n("p",null,[e(a,{to:"/doc/func/classes/Func.html"},{default:t(()=>[x]),_:1}),s("<"),F,s(", "),T,s(", "),w,s(">")])])}const H=p(i,[["render",R],["__file","useFunc.html.vue"]]),V=JSON.parse('{"path":"/doc/func/functions/useFunc.html","title":"Function: useFunc()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/func/functions/useFunc.md"}');export{H as comp,V as data};
