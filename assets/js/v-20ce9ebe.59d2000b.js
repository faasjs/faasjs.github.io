"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[6791],{195:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-20ce9ebe",path:"/zh/guide/excel/http.html",title:"Http、Cookie 和 Session",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"校验示例",slug:"校验示例",children:[]},{level:2,title:"Cookie 使用示例",slug:"cookie-使用示例",children:[]},{level:2,title:"Session 使用示例",slug:"session-使用示例",children:[]},{level:2,title:"Http 插件文档",slug:"http-插件文档",children:[]}],git:{updatedTime:164577489e4},filePathRelative:"zh/guide/excel/http.md"}},4170:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var p=a(6252);const t=(0,p._)("h1",{id:"http、cookie-和-session",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#http、cookie-和-session","aria-hidden":"true"},"#"),(0,p.Uk)(" Http、Cookie 和 Session")],-1),e=(0,p._)("p",null,[(0,p._)("code",null,"@faasjs/http"),(0,p.Uk)(" 提供了以下功能：")],-1),o=(0,p._)("li",null,"网络请求的入参校验",-1),c=(0,p.Uk)("规范化网络响应（基于 "),l=(0,p.Uk)("HTTP 请求规范"),u=(0,p.Uk)("）"),i=(0,p._)("li",null,"Cookie 的校验和读写",-1),r=(0,p._)("li",null,"Session 的校验和读写（Session 被加密储存在 Cookie 中）",-1),k=(0,p.uE)('<h2 id="校验示例" tabindex="-1"><a class="header-anchor" href="#校验示例" aria-hidden="true">#</a> 校验示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 入参白名单校验，若发现未配置的入参会报错，避免攻击</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        status<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 配置 id 为必填项</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 配置 id 必须为数字类型</span>\n          <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// status 的值必须为 0, 1, 2 中的一种</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> http<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// 返回传入的 id</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="cookie-使用示例" tabindex="-1"><a class="header-anchor" href="#cookie-使用示例" aria-hidden="true">#</a> Cookie 使用示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    cookie<span class="token operator">:</span> <span class="token punctuation">{</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        distinct_id<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 若 cookie 中没有 distinct_id 则报错</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;distinct_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 cookie 中的 distinct_id 写入为 user_id</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="session-使用示例" tabindex="-1"><a class="header-anchor" href="#session-使用示例" aria-hidden="true">#</a> Session 使用示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    session<span class="token operator">:</span> <span class="token punctuation">{</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        distinct_id<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 若 session 中没有 distinct_id 则报错</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;distinct_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 session 中的 distinct_id 写入为 user_id</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="http-插件文档" tabindex="-1"><a class="header-anchor" href="#http-插件文档" aria-hidden="true">#</a> Http 插件文档</h2>',7),b=(0,p.Uk)("详细文档见 "),d=(0,p.Uk)("Http 插件"),m=(0,p.Uk)("。"),h={},f=(0,a(3744).Z)(h,[["render",function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,(0,p._)("ul",null,[o,(0,p._)("li",null,[c,(0,p.Wm)(a,{to:"/guide/excel/request-spec.html"},{default:(0,p.w5)((()=>[l])),_:1}),u]),i,r]),k,(0,p._)("p",null,[b,(0,p.Wm)(a,{to:"/doc/http.html"},{default:(0,p.w5)((()=>[d])),_:1}),m])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);