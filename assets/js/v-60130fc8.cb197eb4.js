"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[427],{2161:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-60130fc8",path:"/zh/blog/2019-11-17.html",title:"Serverless 最佳实践之网络请求（中）",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何在云函数中便捷得读写 Cookie？",slug:"如何在云函数中便捷得读写-cookie",children:[]},{level:2,title:"在 Serverless 中如何存储和使用 Session？",slug:"在-serverless-中如何存储和使用-session",children:[]},{level:2,title:"入参校验",slug:"入参校验",children:[]}],git:{updatedTime:164406486e4},filePathRelative:"zh/blog/2019-11-17.md"}},3905:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="serverless-最佳实践之网络请求-中" tabindex="-1"><a class="header-anchor" href="#serverless-最佳实践之网络请求-中" aria-hidden="true">#</a> Serverless 最佳实践之网络请求（中）</h1><p><em>发布于 2019-11-17</em></p><p>本篇将提供以下问题的解决方案：</p><ul><li>如何在云函数中便捷得读写 Cookie？</li><li>在 Serverless 中如何存储和使用 Session？</li><li>如何使用入参校验来避免恶意攻击？</li></ul><h2 id="如何在云函数中便捷得读写-cookie" tabindex="-1"><a class="header-anchor" href="#如何在云函数中便捷得读写-cookie" aria-hidden="true">#</a> 如何在云函数中便捷得读写 Cookie？</h2><p>原生云函数是通过 Context 中的 headers 来传入 cookie 信息，通过返回 headers 的 set-cookie 来写入 cookie，这种方式显然对于开发者来说不够友好，所以 FaasJS 将其读写操作封装到了 @faasjs/http 插件中，可以通过如下方式来读写 cookie：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建 http 插件实例</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将 http 插件实例放到云函数的插件中</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取 cookie</span>\n    http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 写入 cookie</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="在-serverless-中如何存储和使用-session" tabindex="-1"><a class="header-anchor" href="#在-serverless-中如何存储和使用-session" aria-hidden="true">#</a> 在 Serverless 中如何存储和使用 Session？</h2><p>在 Serverless 场景下，每个云函数都是相互独立的，若统一处理 Session 会造成较大的性能损耗。</p><p>因此为了使各个云函数能独自处理 Session 信息，推荐将 Session 加密存储于 Cookie 中，并且为了避免 Cookie 信息过多，建议仅存储必须的信息，如 user_id 之类。</p><p>Session 使用示例如下：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 将 session 中的 distinct_id 写入为 user_id</span>\n    http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;distinct_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="入参校验" tabindex="-1"><a class="header-anchor" href="#入参校验" aria-hidden="true">#</a> 入参校验</h2><p>随着网络安全变得越来越重要，FaasJS 中也内置了入参校验来避免一些攻击行为。入参校验主要支持以下功能：</p><ul><li>支持校验请求参数、Cookie 和 Session；</li><li>支持入参白名单配置，当遇到非白名单中的入参时，可以报错或删除；</li><li>校验规则包括：必填校验、类型校验、枚举值校验、设定默认值；</li><li>校验规则支持多层校验，用于校验 object 和 array 类型。</li></ul><p>代码示例如下：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 配置入参校验</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 校验请求参数</span>\n      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 若发现非白名单入参就报错</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 每个参数的校验规则</span>\n        key<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 参数名</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 必填</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 参数类型</span>\n          config<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 多层校验</span>\n            whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>\n            rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n              subKey<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 参数名</span>\n                <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 枚举值校验</span>\n                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// 设定默认值</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>由于入参校验功能支持 Session，因此可以以此来进行简单的鉴权。比如对 Session 中的 user_id 进行必填校验，来判断用户是否已登录。</p>',18),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);