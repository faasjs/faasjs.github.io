import{_ as c,r as p,o as l,c as r,a,d as t,w as e,b as s,e as o}from"./app-Ph9XU2oP.js";const i={},d=a("h1",{id:"function-faas",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#function-faas"},[a("span",null,"Function: faas()")])],-1),u=a("strong",null,"faas",-1),_=a("code",null,"PathOrData",-1),h=a("code",null,"action",-1),m=a("code",null,"params",-1),k=a("code",null,"Promise",-1),f=a("code",null,"Response",-1),g=a("code",null,"FaasData",-1),b=a("code",null,"PathOrData",-1),x=o('<p>Request faas server</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h2><p>• <strong>PathOrData</strong> extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>action</strong>: <code>string</code> | <code>PathOrData</code></p><p>{string} action name</p>',6),v=a("strong",null,"params",-1),D=a("code",null,"FaasParams",-1),P=a("code",null,"PathOrData",-1),y=a("p",null,"{object} action params",-1),R=a("h2",{id:"returns",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#returns"},[a("span",null,"Returns")])],-1),F=a("code",null,"Promise",-1),O=a("code",null,"Response",-1),N=a("code",null,"FaasData",-1),V=a("code",null,"PathOrData",-1),B=o(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token generic-function"><span class="token function">faas</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;post/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function j(q,w){const n=p("RouterLink");return l(),r("div",null,[a("p",null,[t(n,{to:"/doc/react/"},{default:e(()=>[s("Documents")]),_:1}),s(" / "),t(n,{to:"/doc/react/"},{default:e(()=>[s("@faasjs/react")]),_:1}),s(" / faas")]),d,a("blockquote",null,[a("p",null,[u,s("<"),_,s(">("),h,s(", "),m,s("): "),k,s("<"),t(n,{to:"/doc/react/classes/Response.html"},{default:e(()=>[f]),_:1}),s("<"),t(n,{to:"/doc/react/type-aliases/FaasData.html"},{default:e(()=>[g]),_:1}),s("<"),b,s(">>>")])]),x,a("p",null,[s("• "),v,s(": "),t(n,{to:"/doc/react/type-aliases/FaasParams.html"},{default:e(()=>[D]),_:1}),s("<"),P,s(">")]),y,R,a("p",null,[F,s("<"),t(n,{to:"/doc/react/classes/Response.html"},{default:e(()=>[O]),_:1}),s("<"),t(n,{to:"/doc/react/type-aliases/FaasData.html"},{default:e(()=>[N]),_:1}),s("<"),V,s(">>>")]),B])}const E=c(i,[["render",j],["__file","faas.html.vue"]]);export{E as default};
