import{_ as l,r,c as i,b as a,d as t,w as n,e,a as o,o as c}from"./app-T58oPeKp.js";const p={},d=o(`<h1 id="faasjs-react" tabindex="-1"><a class="header-anchor" href="#faasjs-react"><span>@faasjs/react</span></a></h1><p>React plugin for FaasJS.</p><p><a href="https://github.com/faasjs/faasjs/blob/main/packages/faasjs/react/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/@faasjs/react.svg" alt="License: MIT"></a><a href="https://www.npmjs.com/package/@faasjs/react" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@faasjs/react.svg" alt="NPM Version"></a></p><p><strong>If you use <a href="https://swr.vercel.app" target="_blank" rel="noopener noreferrer">SWR</a> or <a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer">React Query / TanStack Query</a>, please use <a href="https://faasjs.com/doc/browser" target="_blank" rel="noopener noreferrer"><code>@faasjs/browser</code></a> directly.</strong></p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>Support <a href="https://faasjs.com/guide/request-spec.html" target="_blank" rel="noopener noreferrer">FaasJS Request Specifications</a>.</li><li>Support global and per-request configurations.</li><li>Capiable with <a href="https://github.com/welldone-software/why-did-you-render" target="_blank" rel="noopener noreferrer">why-did-you-render</a>.</li><li>Additional functions for React.</li></ul><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @faasjs/react</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><ol><li>Initialize <a href="#faasreactclient">FaasReactClient</a></li></ol><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasReactClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/react&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">FaasReactClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  domain<span class="token operator">:</span> <span class="token string">&#39;localhost:8080/api&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Use <a href="#faas">faas</a>, <a href="#usefaas">useFaas</a> or <a href="#faasdatawrapper">FaasDataWrapper</a>.</li></ol><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes"><span>Classes</span></a></h2>`,13),u=a("h2",{id:"interfaces",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#interfaces"},[a("span",null,"Interfaces")])],-1),h=a("h2",{id:"type-aliases",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#type-aliases"},[a("span",null,"Type Aliases")])],-1),f=a("h2",{id:"functions",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#functions"},[a("span",null,"Functions")])],-1);function m(g,_){const s=r("RouteLink");return c(),i("div",null,[a("p",null,[t(s,{to:"/doc/"},{default:n(()=>[e("Documents")]),_:1}),e(" / @faasjs/react")]),d,a("ul",null,[a("li",null,[t(s,{to:"/doc/react/classes/ErrorBoundary.html"},{default:n(()=>[e("ErrorBoundary")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/classes/Response.html"},{default:n(()=>[e("Response")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/classes/ResponseError.html"},{default:n(()=>[e("ResponseError")]),_:1})])]),u,a("ul",null,[a("li",null,[t(s,{to:"/doc/react/interfaces/ErrorBoundaryProps.html"},{default:n(()=>[e("ErrorBoundaryProps")]),_:1})])]),h,a("ul",null,[a("li",null,[t(s,{to:"/doc/react/type-aliases/ErrorChildrenProps.html"},{default:n(()=>[e("ErrorChildrenProps")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasAction.html"},{default:n(()=>[e("FaasAction")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasData.html"},{default:n(()=>[e("FaasData")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasDataInjection.html"},{default:n(()=>[e("FaasDataInjection")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasDataWrapperProps.html"},{default:n(()=>[e("FaasDataWrapperProps")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasParams.html"},{default:n(()=>[e("FaasParams")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasReactClientInstance.html"},{default:n(()=>[e("FaasReactClientInstance")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/FaasReactClientOptions.html"},{default:n(()=>[e("FaasReactClientOptions")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/Options.html"},{default:n(()=>[e("Options")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/ResponseHeaders.html"},{default:n(()=>[e("ResponseHeaders")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/type-aliases/useFaasOptions.html"},{default:n(()=>[e("useFaasOptions")]),_:1})])]),f,a("ul",null,[a("li",null,[t(s,{to:"/doc/react/functions/FaasDataWrapper.html"},{default:n(()=>[e("FaasDataWrapper")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/functions/FaasReactClient.html"},{default:n(()=>[e("FaasReactClient")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/functions/createSplitedContext.html"},{default:n(()=>[e("createSplitedContext")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/functions/faas.html"},{default:n(()=>[e("faas")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/functions/getClient.html"},{default:n(()=>[e("getClient")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/functions/useConstant.html"},{default:n(()=>[e("useConstant")]),_:1})]),a("li",null,[t(s,{to:"/doc/react/functions/useFaas.html"},{default:n(()=>[e("useFaas")]),_:1})])])])}const b=l(p,[["render",m],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/doc/react/","title":"@faasjs/react","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Classes","slug":"classes","link":"#classes","children":[]},{"level":2,"title":"Interfaces","slug":"interfaces","link":"#interfaces","children":[]},{"level":2,"title":"Type Aliases","slug":"type-aliases","link":"#type-aliases","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/react/README.md"}');export{b as comp,y as data};
