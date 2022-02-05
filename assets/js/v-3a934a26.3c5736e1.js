"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[7730],{9983:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3a934a26",path:"/zh/guide/excel/react.html",title:"在 React 中使用",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"集成步骤",slug:"集成步骤",children:[]},{level:2,title:"使用方法",slug:"使用方法",children:[]}],git:{updatedTime:164406486e4},filePathRelative:"zh/guide/excel/react.md"}},9171:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="在-react-中使用" tabindex="-1"><a class="header-anchor" href="#在-react-中使用" aria-hidden="true">#</a> 在 React 中使用</h1><p>FaasJS 提供了 <code>@faasjs/react</code> 使得你可以在 React 中轻松调用云函数。</p><h2 id="集成步骤" tabindex="-1"><a class="header-anchor" href="#集成步骤" aria-hidden="true">#</a> 集成步骤</h2><ol><li>安装插件 <code>npm install @faasjs/react@beta --save</code></li><li>引入插件</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// faas.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FaasClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/react&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">FaasClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  domain<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 这里填写云函数的服务地址</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> faas <span class="token operator">=</span> client<span class="token punctuation">.</span>faas<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> useFaas <span class="token operator">=</span> client<span class="token punctuation">.</span>useFaas<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">// demo.tsx</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useFaas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./faas&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Demo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useFaas</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;user/current&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">载入中</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ID: </span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',7),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);