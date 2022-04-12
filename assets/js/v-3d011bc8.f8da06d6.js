"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[8124],{6151:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-3d011bc8",path:"/zh/guide/excel/db.html",title:"数据库操作",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"Redis 数据库操作示例",slug:"redis-数据库操作示例",children:[]},{level:2,title:"MongoDB 操作示例",slug:"mongodb-操作示例",children:[]}],git:{updatedTime:1649725267e3},filePathRelative:"zh/guide/excel/db.md"}},9689:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.uE)('<h1 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h1><p>数据库插件没有内置在 <code>faasjs</code> 中，使用前需自行安装依赖。</p><p>FaasJS 目前提供了三个数据库插件：</p><ul><li><strong>@faasjs/knex</strong> 基于 Knex 封装的云函数插件。</li><li><strong>@faasjs/redis</strong> 支持 Redis。</li><li><strong>@faasjs/mongo</strong> 支持 MongoDB。</li></ul><h2 id="redis-数据库操作示例" tabindex="-1"><a class="header-anchor" href="#redis-数据库操作示例" aria-hidden="true">#</a> Redis 数据库操作示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Redis <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/redis&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>redis<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">await</span> redis<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查询数据库</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',6),e=(0,p.Uk)("详细文档见 "),o=(0,p.Uk)("Redis 插件"),c=(0,p.Uk)("。"),l=(0,p.uE)('<h2 id="mongodb-操作示例" tabindex="-1"><a class="header-anchor" href="#mongodb-操作示例" aria-hidden="true">#</a> MongoDB 操作示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Mongo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/mongo&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mongo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mongo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>mongo<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">await</span> mongo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查询数据库</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',2),u={},i=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[e,(0,p.Wm)(a,{to:"/doc/redis.html"},{default:(0,p.w5)((()=>[o])),_:1}),c]),l],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);