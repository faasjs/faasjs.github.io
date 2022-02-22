"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[9437],{264:(a,s,n)=>{n.r(s),n.d(s,{data:()=>e});const e={key:"v-04178719",path:"/zh/doc/react.html",title:"@faasjs/react",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装方法",slug:"安装方法",children:[{level:3,title:"npm",slug:"npm",children:[]},{level:3,title:"Webpack 和 CDN",slug:"webpack-和-cdn",children:[]}]},{level:2,title:"初始化",slug:"初始化",children:[]}],git:{updatedTime:164553283e4},filePathRelative:"zh/doc/react.md"}},2818:(a,s,n)=>{n.r(s),n.d(s,{default:()=>p});const e=(0,n(6252).uE)('<h1 id="faasjs-react" tabindex="-1"><a class="header-anchor" href="#faasjs-react" aria-hidden="true">#</a> @faasjs/react</h1><p>React 插件。</p><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h2><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3><pre><code>npm install @faasjs/react --save\n</code></pre><h3 id="webpack-和-cdn" tabindex="-1"><a class="header-anchor" href="#webpack-和-cdn" aria-hidden="true">#</a> Webpack 和 CDN</h3><p>在 html 中添加如下代码：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@faasjs/react<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 webpack.config.js 中添加如下代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;@faasjs/react&#39;</span><span class="token operator">:</span> <span class="token string">&#39;FaasReactClient&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FaasReactClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/react&#39;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">FaasReactClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  domain<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FAAS</span> <span class="token keyword">as</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> faas <span class="token operator">=</span> client<span class="token punctuation">.</span>faas\n<span class="token keyword">export</span> <span class="token keyword">const</span> useFaas <span class="token operator">=</span> client<span class="token punctuation">.</span>useFaas\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',12),t={},p=(0,n(3744).Z)(t,[["render",function(a,s){return e}]])},3744:(a,s)=>{s.Z=(a,s)=>{const n=a.__vccOpts||a;for(const[a,e]of s)n[a]=e;return n}}}]);