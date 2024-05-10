import{_ as l,r,o as c,c as i,a as s,d as n,w as t,b as e,e as o}from"./app-ONbVOpV-.js";const d={},p=o(`<h1 id="class-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#class-faasbrowserclient"><span>Class: FaasBrowserClient</span></a></h1><p>FaasJS browser client</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#new-faasbrowserclient"><span>new FaasBrowserClient()</span></a></h3>`,5),u=s("strong",null,"new FaasBrowserClient",-1),h=s("code",null,"baseUrl",-1),_=s("code",null,"options",-1),k=s("code",null,"FaasBrowserClient",-1),m=s("h4",{id:"parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#parameters"},[s("span",null,"Parameters")])],-1),f=s("p",null,[e("• "),s("strong",null,"baseUrl"),e(": "),s("code",null,"string")],-1),b=s("strong",null,"options?",-1),w=s("code",null,"Options",-1),g=s("h4",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},[s("span",null,"Returns")])],-1),v=s("code",null,"FaasBrowserClient",-1),x=s("h2",{id:"properties",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#properties"},[s("span",null,"Properties")])],-1),C=s("h3",{id:"defaultoptions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#defaultoptions"},[s("span",null,"defaultOptions")])],-1),F=s("strong",null,"defaultOptions",-1),B=s("code",null,"Options",-1),y=o('<h3 id="host" tabindex="-1"><a class="header-anchor" href="#host"><span>host</span></a></h3><blockquote><p><strong>host</strong>: <code>string</code></p></blockquote><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><blockquote><p><code>readonly</code> <strong>id</strong>: <code>string</code></p></blockquote><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action"><span>action()</span></a></h3>',6),O=s("strong",null,"action",-1),P=s("code",null,"PathOrData",-1),R=s("code",null,"action",-1),q=s("code",null,"params",-1),D=s("code",null,"options",-1),N=s("code",null,"Promise",-1),S=s("code",null,"Response",-1),V=s("code",null,"FaasData",-1),J=s("code",null,"PathOrData",-1),T=o('<p>Request a FaasJS function</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h4><p>• <strong>PathOrData</strong> <em>extends</em> <code>FaasAction</code></p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>action</strong>: <code>string</code> | <code>PathOrData</code></p><p>function path</p><p>• <strong>params?</strong>: <code>FaasParams</code>&lt;<code>PathOrData</code>&gt;</p><p>function params</p>',8),L=s("strong",null,"options?",-1),M=s("code",null,"Options",-1),U=o(`<p>request options</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4>`,3),j=s("code",null,"Promise",-1),A=s("code",null,"Response",-1),E=s("code",null,"FaasData",-1),z=s("code",null,"PathOrData",-1);function G(H,I){const a=r("RouteLink");return c(),i("div",null,[s("p",null,[n(a,{to:"/doc/browser/"},{default:t(()=>[e("Documents")]),_:1}),e(" / "),n(a,{to:"/doc/browser/"},{default:t(()=>[e("@faasjs/browser")]),_:1}),e(" / FaasBrowserClient")]),p,s("blockquote",null,[s("p",null,[u,e("("),h,e(", "),_,e("?): "),n(a,{to:"/doc/browser/classes/FaasBrowserClient.html"},{default:t(()=>[k]),_:1})])]),m,f,s("p",null,[e("• "),b,e(": "),n(a,{to:"/doc/browser/type-aliases/Options.html"},{default:t(()=>[w]),_:1})]),g,s("p",null,[n(a,{to:"/doc/browser/classes/FaasBrowserClient.html"},{default:t(()=>[v]),_:1})]),x,C,s("blockquote",null,[s("p",null,[F,e(": "),n(a,{to:"/doc/browser/type-aliases/Options.html"},{default:t(()=>[B]),_:1})])]),y,s("blockquote",null,[s("p",null,[O,e("<"),P,e(">("),R,e(", "),q,e("?, "),D,e("?): "),N,e("<"),n(a,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[S]),_:1}),e("<"),V,e("<"),J,e(">>>")])]),T,s("p",null,[e("• "),L,e(": "),n(a,{to:"/doc/browser/type-aliases/Options.html"},{default:t(()=>[M]),_:1})]),U,s("p",null,[j,e("<"),n(a,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[A]),_:1}),e("<"),E,e("<"),z,e(">>>")])])}const Q=l(d,[["render",G],["__file","FaasBrowserClient.html.vue"]]),W=JSON.parse('{"path":"/doc/browser/classes/FaasBrowserClient.html","title":"Class: FaasBrowserClient","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new FaasBrowserClient()","slug":"new-faasbrowserclient","link":"#new-faasbrowserclient","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"defaultOptions","slug":"defaultoptions","link":"#defaultoptions","children":[]},{"level":3,"title":"host","slug":"host","link":"#host","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"action()","slug":"action","link":"#action","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/browser/classes/FaasBrowserClient.md"}');export{Q as comp,W as data};
