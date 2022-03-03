"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[7990],{3888:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0e9c6ff4",path:"/zh/guide/excel/vue.html",title:"在 Vue 中使用",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"集成步骤",slug:"集成步骤",children:[]},{level:2,title:"使用方法",slug:"使用方法",children:[]}],git:{updatedTime:1646279657e3},filePathRelative:"zh/guide/excel/vue.md"}},8368:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="在-vue-中使用" tabindex="-1"><a class="header-anchor" href="#在-vue-中使用" aria-hidden="true">#</a> 在 Vue 中使用</h1><p>FaasJS 提供了 <code>@faasjs/vue-plugin</code> 使得你可以在 Vue 组件中轻松调用云函数。</p><h2 id="集成步骤" tabindex="-1"><a class="header-anchor" href="#集成步骤" aria-hidden="true">#</a> 集成步骤</h2><ol><li>安装插件 <code>npm install @faasjs/vue-plugin@beta --save</code></li><li>引入插件</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> Faas <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/vue-plugin&#39;</span><span class="token punctuation">;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Faas<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  domain<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 这里填写云函数的服务地址</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// any.vue</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$faas</span><span class="token punctuation">(</span><span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token function">alert</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',7),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);