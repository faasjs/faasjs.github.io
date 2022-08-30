import{_ as i,r,o as p,c as l,b as s,d as a,w as o,e as n,a as c}from"./app.9d73d697.js";const d={},u=s("h1",{id:"faasjs-browser",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#faasjs-browser","aria-hidden":"true"},"#"),n(" @faasjs/browser")],-1),h=s("p",null,"FaasJS browser client.",-1),k=n("If you use React or Vue, please use "),_={href:"https://faasjs.com/doc/react",target:"_blank",rel:"noopener noreferrer"},m=n("@faasjs/react"),f=n(" or "),b={href:"https://faasjs.com/doc/vue-plugin",target:"_blank",rel:"noopener noreferrer"},v=n("@faasjs/vue-plugin"),g=n("."),y={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/browser/LICENSE",target:"_blank",rel:"noopener noreferrer"},w=s("img",{src:"https://img.shields.io/npm/l/@faasjs/browser.svg",alt:"License: MIT"},null,-1),x={href:"https://www.npmjs.com/package/@faasjs/browser",target:"_blank",rel:"noopener noreferrer"},R=s("img",{src:"https://img.shields.io/npm/v/@faasjs/browser/stable.svg",alt:"NPM Stable Version"},null,-1),j={href:"https://www.npmjs.com/package/@faasjs/browser",target:"_blank",rel:"noopener noreferrer"},F=s("img",{src:"https://img.shields.io/npm/v/@faasjs/browser/beta.svg",alt:"NPM Beta Version"},null,-1),C=c(`<p>Browser plugin for FaasJS.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/browser
</code></pre><h2 id="use-directly" tabindex="-1"><a class="header-anchor" href="#use-directly" aria-hidden="true">#</a> Use directly</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-with-swr" tabindex="-1"><a class="header-anchor" href="#use-with-swr" aria-hidden="true">#</a> Use with SWR</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>
<span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">&#39;swr&#39;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> client<span class="token punctuation">.</span>action<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),P=n("Reference: "),O={href:"https://swr.vercel.app/docs/data-fetching",target:"_blank",rel:"noopener noreferrer"},B=n("Data Fetching - SWR"),D=c(`<h2 id="use-with-react-query" tabindex="-1"><a class="header-anchor" href="#use-with-react-query" aria-hidden="true">#</a> Use with React Query</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasBrowserClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/browser&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q=n("Reference: "),S={href:"https://tanstack.com/query/v4/docs/guides/default-query-function",target:"_blank",rel:"noopener noreferrer"},N=n("Default Query Function | TanStack Query"),T=s("h2",{id:"modules",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#modules","aria-hidden":"true"},"#"),n(" Modules")],-1),A=s("h3",{id:"classes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#classes","aria-hidden":"true"},"#"),n(" Classes")],-1),I=n("FaasBrowserClient"),E=n("Response"),Q=n("ResponseError"),V=c('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li><a href="#faasbrowserclientaction">FaasBrowserClientAction</a></li><li><a href="#options">Options</a></li><li><a href="#responseheaders">ResponseHeaders</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="faasbrowserclientaction" tabindex="-1"><a class="header-anchor" href="#faasbrowserclientaction" aria-hidden="true">#</a> FaasBrowserClientAction</h3>',4),L=c('\u01AC <strong>FaasBrowserClientAction</strong>: &lt;PathOrData&gt;(<code>action</code>: <code>PathOrData</code> | <code>string</code>, <code>params?</code>: <code>FaasParams</code>&lt;<code>PathOrData</code>&gt;, <code>options?</code>: <a href="#options"><code>Options</code></a>) =&gt; <code>Promise</code>&lt;',21),M=s("code",null,"Response",-1),W=n("<"),H=s("code",null,"FaasData",-1),K=n("<"),U=s("code",null,"PathOrData",-1),J=n(">>>"),Y=s("h4",{id:"type-declaration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type-declaration","aria-hidden":"true"},"#"),n(" Type declaration")],-1),z=n("\u25B8 <"),G=s("code",null,"PathOrData",-1),X=n(">("),Z=s("code",null,"action",-1),$=n(", "),ss=s("code",null,"params?",-1),ns=n(", "),as=s("code",null,"options?",-1),es=n("): "),ts=s("code",null,"Promise",-1),os=n("<"),cs=s("code",null,"Response",-1),rs=n("<"),is=s("code",null,"FaasData",-1),ps=n("<"),ls=s("code",null,"PathOrData",-1),ds=n(">>>"),us=c('<h5 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>PathOrData</code></td><td style="text-align:left;">extends <code>FaasAction</code></td></tr></tbody></table><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>action</code></td><td style="text-align:left;"><code>PathOrData</code> | <code>string</code></td></tr><tr><td style="text-align:left;"><code>params?</code></td><td style="text-align:left;"><code>FaasParams</code>&lt;<code>PathOrData</code>&gt;</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><a href="#options"><code>Options</code></a></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5>',5),hs=s("code",null,"Promise",-1),ks=n("<"),_s=s("code",null,"Response",-1),ms=n("<"),fs=s("code",null,"FaasData",-1),bs=n("<"),vs=s("code",null,"PathOrData",-1),gs=n(">>>"),ys=c('<hr><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><p>\u01AC <strong>Options</strong>: <code>RequestInit</code> &amp; { <code>beforeRequest?</code>: (<code>{ action, params, options }</code>: { <code>action</code>: <code>string</code> ; <code>options</code>: <a href="#options"><code>Options</code></a> ; <code>params</code>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; }) =&gt; <code>Promise</code>&lt;<code>void</code>&gt; | <code>void</code> ; <code>headers?</code>: { <code>[key: string]</code>: <code>string</code>; } }</p><hr><h3 id="responseheaders" tabindex="-1"><a class="header-anchor" href="#responseheaders" aria-hidden="true">#</a> ResponseHeaders</h3><p>\u01AC <strong>ResponseHeaders</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>\u25AA [key: <code>string</code>]: <code>string</code></p>',8);function ws(xs,Rs){const e=r("ExternalLinkIcon"),t=r("RouterLink");return p(),l("div",null,[u,h,s("p",null,[s("strong",null,[k,s("a",_,[m,a(e)]),f,s("a",b,[v,a(e)]),g])]),s("p",null,[s("a",y,[w,a(e)]),s("a",x,[R,a(e)]),s("a",j,[F,a(e)])]),C,s("p",null,[P,s("a",O,[B,a(e)])]),D,s("p",null,[q,s("a",S,[N,a(e)])]),T,A,s("ul",null,[s("li",null,[a(t,{to:"/doc/browser/classes/FaasBrowserClient.html"},{default:o(()=>[I]),_:1})]),s("li",null,[a(t,{to:"/doc/browser/classes/Response.html"},{default:o(()=>[E]),_:1})]),s("li",null,[a(t,{to:"/doc/browser/classes/ResponseError.html"},{default:o(()=>[Q]),_:1})])]),V,s("p",null,[L,a(t,{to:"/doc/browser/classes/Response.html"},{default:o(()=>[M]),_:1}),W,H,K,U,J]),Y,s("p",null,[z,G,X,Z,$,ss,ns,as,es,ts,os,a(t,{to:"/doc/browser/classes/Response.html"},{default:o(()=>[cs]),_:1}),rs,is,ps,ls,ds]),us,s("p",null,[hs,ks,a(t,{to:"/doc/browser/classes/Response.html"},{default:o(()=>[_s]),_:1}),ms,fs,bs,vs,gs]),ys])}const Fs=i(d,[["render",ws],["__file","index.html.vue"]]);export{Fs as default};