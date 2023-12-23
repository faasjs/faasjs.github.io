import{_ as r,r as l,o as i,c as d,a as s,d as n,b as a,w as t,e as c}from"./app-eMaYiWw7.js";const p={},u=s("h1",{id:"faasjs-browser",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#faasjs-browser","aria-hidden":"true"},"#"),n(" @faasjs/browser")],-1),h=s("p",null,"FaasJS browser client.",-1),k={href:"https://faasjs.com/doc/react",target:"_blank",rel:"noopener noreferrer"},_={href:"https://faasjs.com/doc/vue-plugin",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/browser/LICENSE",target:"_blank",rel:"noopener noreferrer"},f=s("img",{src:"https://img.shields.io/npm/l/@faasjs/browser.svg",alt:"License: MIT"},null,-1),b={href:"https://www.npmjs.com/package/@faasjs/browser",target:"_blank",rel:"noopener noreferrer"},y=s("img",{src:"https://img.shields.io/npm/v/@faasjs/browser/stable.svg",alt:"NPM Stable Version"},null,-1),g={href:"https://www.npmjs.com/package/@faasjs/browser",target:"_blank",rel:"noopener noreferrer"},v=s("img",{src:"https://img.shields.io/npm/v/@faasjs/browser/beta.svg",alt:"NPM Beta Version"},null,-1),w=c(`<p>Browser plugin for FaasJS.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/browser
</code></pre><h2 id="use-directly" tabindex="-1"><a class="header-anchor" href="#use-directly" aria-hidden="true">#</a> Use directly</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-with-swr" tabindex="-1"><a class="header-anchor" href="#use-with-swr" aria-hidden="true">#</a> Use with SWR</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>
<span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">&#39;swr&#39;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> client<span class="token punctuation">.</span>action<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),x={href:"https://swr.vercel.app/docs/data-fetching",target:"_blank",rel:"noopener noreferrer"},R=c(`<h2 id="use-with-react-query" tabindex="-1"><a class="header-anchor" href="#use-with-react-query" aria-hidden="true">#</a> Use with React Query</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-query&#39;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  defaultOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    queries<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">queryFn</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> queryKey <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> client
        <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span>queryKey<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">,</span> queryKey<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>YourApp <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P={href:"https://tanstack.com/query/v4/docs/guides/default-query-function",target:"_blank",rel:"noopener noreferrer"},F=s("h2",{id:"modules",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#modules","aria-hidden":"true"},"#"),n(" Modules")],-1),j=s("h3",{id:"classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),n(" Classes")],-1),O=c('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li><a href="#faasbrowserclientaction">FaasBrowserClientAction</a></li><li><a href="#mockhandler">MockHandler</a></li><li><a href="#options">Options</a></li><li><a href="#responseheaders">ResponseHeaders</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#generateid">generateId</a></li><li><a href="#setmock">setMock</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="faasbrowserclientaction" tabindex="-1"><a class="header-anchor" href="#faasbrowserclientaction" aria-hidden="true">#</a> FaasBrowserClientAction</h3>',6),C=s("strong",null,"FaasBrowserClientAction",-1),D=s("code",null,"action",-1),B=s("code",null,"PathOrData",-1),q=s("code",null,"string",-1),M=s("code",null,"params?",-1),S=s("code",null,"FaasParams",-1),T=s("code",null,"PathOrData",-1),N=s("code",null,"options?",-1),I=s("a",{href:"#options"},[s("code",null,"Options")],-1),A=s("code",null,"Promise",-1),E=s("code",null,"Response",-1),H=s("code",null,"FaasData",-1),Q=s("code",null,"PathOrData",-1),V=s("h4",{id:"type-declaration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type-declaration","aria-hidden":"true"},"#"),n(" Type declaration")],-1),L=s("code",null,"PathOrData",-1),J=s("code",null,"action",-1),W=s("code",null,"params?",-1),K=s("code",null,"options?",-1),U=s("code",null,"Promise",-1),G=s("code",null,"Response",-1),Y=s("code",null,"FaasData",-1),z=s("code",null,"PathOrData",-1),X=c('<h5 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>PathOrData</code></td><td style="text-align:left;">extends <code>FaasAction</code></td></tr></tbody></table><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>action</code></td><td style="text-align:left;"><code>PathOrData</code> | <code>string</code></td></tr><tr><td style="text-align:left;"><code>params?</code></td><td style="text-align:left;"><code>FaasParams</code>&lt;<code>PathOrData</code>&gt;</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><a href="#options"><code>Options</code></a></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5>',5),Z=s("code",null,"Promise",-1),$=s("code",null,"Response",-1),ss=s("code",null,"FaasData",-1),ns=s("code",null,"PathOrData",-1),as=s("hr",null,null,-1),es=s("h3",{id:"mockhandler",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mockhandler","aria-hidden":"true"},"#"),n(" MockHandler")],-1),ts=s("strong",null,"MockHandler",-1),os=s("code",null,"action",-1),cs=s("code",null,"string",-1),ls=s("code",null,"params",-1),rs=s("code",null,"Record",-1),is=s("code",null,"string",-1),ds=s("code",null,"any",-1),ps=s("code",null,"options",-1),us=s("a",{href:"#options"},[s("code",null,"Options")],-1),hs=s("code",null,"Promise",-1),ks=s("code",null,"Response",-1),_s=s("code",null,"any",-1),ms=s("h4",{id:"type-declaration-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type-declaration-1","aria-hidden":"true"},"#"),n(" Type declaration")],-1),fs=s("code",null,"action",-1),bs=s("code",null,"params",-1),ys=s("code",null,"options",-1),gs=s("code",null,"Promise",-1),vs=s("code",null,"Response",-1),ws=s("code",null,"any",-1),xs=c('<h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>action</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>params</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="#options"><code>Options</code></a></td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5>',3),Rs=s("code",null,"Promise",-1),Ps=s("code",null,"Response",-1),Fs=s("code",null,"any",-1),js=s("hr",null,null,-1),Os=s("h3",{id:"options",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),n(" Options")],-1),Cs=s("strong",null,"Options",-1),Ds=s("code",null,"RequestInit",-1),Bs=s("code",null,"beforeRequest?",-1),qs=s("code",null,"{ action, params, options, }",-1),Ms=s("code",null,"action",-1),Ss=s("code",null,"string",-1),Ts=s("code",null,"options",-1),Ns=s("a",{href:"#options"},[s("code",null,"Options")],-1),Is=s("code",null,"params",-1),As=s("code",null,"Record",-1),Es=s("code",null,"string",-1),Hs=s("code",null,"any",-1),Qs=s("code",null,"Promise",-1),Vs=s("code",null,"void",-1),Ls=s("code",null,"headers?",-1),Js=s("code",null,"[key: string]",-1),Ws=s("code",null,"string",-1),Ks=s("code",null,"request?",-1),Us=s("code",null,"url",-1),Gs=s("code",null,"string",-1),Ys=s("code",null,"options",-1),zs=s("a",{href:"#options"},[s("code",null,"Options")],-1),Xs=s("code",null,"Promise",-1),Zs=s("code",null,"Response",-1),$s=s("code",null,"FaasData",-1),sn=s("code",null,"PathOrData",-1),nn=c(`<hr><h3 id="responseheaders" tabindex="-1"><a class="header-anchor" href="#responseheaders" aria-hidden="true">#</a> ResponseHeaders</h3><p>Ƭ <strong>ResponseHeaders</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>string</code></p><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="generateid" tabindex="-1"><a class="header-anchor" href="#generateid" aria-hidden="true">#</a> generateId</h3><p>▸ <strong>generateId</strong>(<code>prefix?</code>): <code>string</code></p><p>Generate random id</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>prefix?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">prefix of id</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="setmock" tabindex="-1"><a class="header-anchor" href="#setmock" aria-hidden="true">#</a> setMock</h3><p>▸ <strong>setMock</strong>(<code>handler</code>): <code>void</code></p><p>Set mock handler for testing</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;"><a href="#mockhandler"><code>MockHandler</code></a></td><td style="text-align:left;">mock handler, set <code>undefined</code> to clear mock</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setMock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>

<span class="token function">setMock</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> action<span class="token punctuation">,</span> params<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;FaasJS&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span> <span class="token comment">// response.data.name === &#39;FaasJS&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function an(en,tn){const o=l("ExternalLinkIcon"),e=l("RouterLink");return i(),d("div",null,[u,h,s("p",null,[s("strong",null,[n("If you use React or Vue, please use "),s("a",k,[n("@faasjs/react"),a(o)]),n(" or "),s("a",_,[n("@faasjs/vue-plugin"),a(o)]),n(".")])]),s("p",null,[s("a",m,[f,a(o)]),s("a",b,[y,a(o)]),s("a",g,[v,a(o)])]),w,s("p",null,[n("Reference: "),s("a",x,[n("Data Fetching - SWR"),a(o)])]),R,s("p",null,[n("Reference: "),s("a",P,[n("Default Query Function | TanStack Query"),a(o)])]),F,j,s("ul",null,[s("li",null,[a(e,{to:"/doc/browser/classes/FaasBrowserClient.html"},{default:t(()=>[n("FaasBrowserClient")]),_:1})]),s("li",null,[a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[n("Response")]),_:1})]),s("li",null,[a(e,{to:"/doc/browser/classes/ResponseError.html"},{default:t(()=>[n("ResponseError")]),_:1})])]),O,s("p",null,[n("Ƭ "),C,n(": <PathOrData>("),D,n(": "),B,n(" | "),q,n(", "),M,n(": "),S,n("<"),T,n(">, "),N,n(": "),I,n(") => "),A,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[E]),_:1}),n("<"),H,n("<"),Q,n(">>>")]),V,s("p",null,[n("▸ <"),L,n(">("),J,n(", "),W,n(", "),K,n("): "),U,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[G]),_:1}),n("<"),Y,n("<"),z,n(">>>")]),X,s("p",null,[Z,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[$]),_:1}),n("<"),ss,n("<"),ns,n(">>>")]),as,es,s("p",null,[n("Ƭ "),ts,n(": ("),os,n(": "),cs,n(", "),ls,n(": "),rs,n("<"),is,n(", "),ds,n(">, "),ps,n(": "),us,n(") => "),hs,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[ks]),_:1}),n("<"),_s,n(">>")]),ms,s("p",null,[n("▸ ("),fs,n(", "),bs,n(", "),ys,n("): "),gs,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[vs]),_:1}),n("<"),ws,n(">>")]),xs,s("p",null,[Rs,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[Ps]),_:1}),n("<"),Fs,n(">>")]),js,Os,s("p",null,[n("Ƭ "),Cs,n(": "),Ds,n(" & { "),Bs,n(": ("),qs,n(": { "),Ms,n(": "),Ss,n(" ; "),Ts,n(": "),Ns,n(" ; "),Is,n(": "),As,n("<"),Es,n(", "),Hs,n("> }) => "),Qs,n("<"),Vs,n("> ; "),Ls,n(": { "),Js,n(": "),Ws,n("; } ; "),Ks,n(": <PathOrData>("),Us,n(": "),Gs,n(", "),Ys,n(": "),zs,n(") => "),Xs,n("<"),a(e,{to:"/doc/browser/classes/Response.html"},{default:t(()=>[Zs]),_:1}),n("<"),$s,n("<"),sn,n(">>> }")]),nn])}const cn=r(p,[["render",an],["__file","index.html.vue"]]);export{cn as default};