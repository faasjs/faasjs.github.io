"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[3857],{6893:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-18959b51",path:"/zh/blog/2019-07-26.html",title:"Serverless 最佳实践之云函数的生命周期",lang:"zh",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1645923174e3},filePathRelative:"zh/blog/2019-07-26.md"}},233:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="serverless-最佳实践之云函数的生命周期" tabindex="-1"><a class="header-anchor" href="#serverless-最佳实践之云函数的生命周期" aria-hidden="true">#</a> Serverless 最佳实践之云函数的生命周期</h1><p><em>发布于 2019-07-26</em></p><blockquote><p>这是 Serverless 最佳实践系列文章的第一篇，希望通过这系列文章帮助大家更深入的了解 Serverless 背后的机制并掌握相关的最佳实践。</p></blockquote><p>Serverless 架构是一个分布式、事件驱动型的架构，在这个架构中，核心节点为一个个函数，为了有别于通常的函数，我们称之为<strong>云函数</strong>。</p><p>云函数是按需运行的，所以在未被事件触发时处于关闭状态。</p><p>只有当事件触发时，云函数才会被启动和运行。</p><p>此外，由于频繁的启动不利于资源的有效利用，大部分云服务商会在云函数启动后，保留云函数的实例两分钟，以便当有同类事件触发时可以被快速处理而不必再次耗费时间和资源启动实例，若两分钟后依然没有同类型的事件触发，再关闭实例。</p><p>因此云函数被触发的完整过程是：</p><ol><li>事件触发</li><li>创建和启动云函数实例</li><li>输入事件信息</li><li>执行云函数触发代码并返回结果</li><li>若有后续同类事件 a. 输入下一个事件 b. 执行云函数触发代码并返回结果 c. 重复第5步</li><li>等待两分钟没有新事件，销毁云函数实例</li></ol><p>转化为云函数的生命周期，则分为三步：</p><ul><li>Mount 启动</li><li>Invoke 触发</li><li>Destroy 关闭</li></ul><p>由于云函数的关闭是由服务商直接控制的，所以无法进行捕获和定制。</p><p>在 FaasJS 中，生命周期在云函数中的体现为：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// onMount 云函数实例启动</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// onInvoke 云函数的触发代码在 handler 中</span>\n    <span class="token keyword">return</span> count<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>上面的云函数示例，触发时返回的是当前云函数实例启动后被触发的次数。</p><p>那么对于云函数的生命周期，有哪些最佳实践可供参考呢？目前的建议有以下两点：</p><ol><li>将常量的定义和创建放在 Mount 阶段</li><li>将数据库连接放在 Mount 阶段</li><li>仅把与输入事件强相关的代码放在 Invoke 阶段</li></ol><p>示例如下：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 初始化数据库对象和连接</span>\n<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 定义常量</span>\n<span class="token keyword">const</span> types <span class="token operator">=</span> <span class="token punctuation">{</span>\n  user<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  admin<span class="token operator">:</span> <span class="token number">1</span>\n <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>sql<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">await</span> sql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;SELECT count(*) FROM users WHERE type = ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>types<span class="token punctuation">.</span>user<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在示例代码中，数据库连接会在云函数实例启动时被创建，并随着实例的关闭而销毁。在云函数实例存在的情况下，每次事件触发都会使用同一个数据库连接，而不必每次等待额外的时间去连接数据库。此外这种方式也可以有效控制数据库的连接数量，不会因为云函数的触发次数过多而产生大量的数据库连接。</p><p>在启动阶段就声明好的常量，一方面有助于提升的代码可读性，另外一方面也可以避免在事件触发时重复创建常量的问题（虽然通常情况下这对性能影响很小）。</p>',21),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);