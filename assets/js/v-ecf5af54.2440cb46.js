"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[33],{7774:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-ecf5af54",path:"/zh/doc/func.html",title:"@faasjs/func",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用方法",slug:"使用方法",children:[]}],git:{updatedTime:16488597e5},filePathRelative:"zh/doc/func.md"}},1870:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});const e=(0,a(6252).uE)('<h1 id="faasjs-func" tabindex="-1"><a class="header-anchor" href="#faasjs-func" aria-hidden="true">#</a> @faasjs/func</h1><p>FaasJS 的主体模块，用于初始化云函数。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 引入 useFunc 方法</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span>\n\n<span class="token doc-comment comment">/**\n * 生成云函数主体，有以下注意点：\n * 1. 必须是 export default\n * 2. 入参为一个函数，函数需要返回一个业务函数，且须为 Promise 函数\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 若有需要初始化的插件，可以在这里初始化</span>\n\n  <span class="token comment">// 返回业务函数</span>\n  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 业务函数</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>',4),p={},c=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);