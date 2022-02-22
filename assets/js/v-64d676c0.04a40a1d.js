"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[6702],{15:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-64d676c0",path:"/zh/doc/vue-plugin.html",title:"@faasjs/vue-plugin",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装方法",slug:"安装方法",children:[{level:3,title:"npm",slug:"npm",children:[]},{level:3,title:"Webpack 和 CDN",slug:"webpack-和-cdn",children:[]}]},{level:2,title:"在 Vue 中使用",slug:"在-vue-中使用",children:[]}],git:{updatedTime:164553283e4},filePathRelative:"zh/doc/vue-plugin.md"}},6776:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="faasjs-vue-plugin" tabindex="-1"><a class="header-anchor" href="#faasjs-vue-plugin" aria-hidden="true">#</a> @faasjs/vue-plugin</h1><p>Vue 插件。</p><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h2><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3><pre><code>npm install @faasjs/vue-plugin --save\n</code></pre><h3 id="webpack-和-cdn" tabindex="-1"><a class="header-anchor" href="#webpack-和-cdn" aria-hidden="true">#</a> Webpack 和 CDN</h3><p>在 html 中添加如下代码：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@faasjs/vue-plugin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 webpack.config.js 中添加如下代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;@faasjs/vue-plugin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;FaasVuePlugin&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="在-vue-中使用" tabindex="-1"><a class="header-anchor" href="#在-vue-中使用" aria-hidden="true">#</a> 在 Vue 中使用</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// faas.ts</span>\n<span class="token keyword">import</span> FaasVuePlugin <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/vue-plugin&#39;</span><span class="token punctuation">;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FaasVuePlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span> domain<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FAAS</span> <span class="token keyword">as</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// app.vue</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$faas</span><span class="token punctuation">(</span><span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',12),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);