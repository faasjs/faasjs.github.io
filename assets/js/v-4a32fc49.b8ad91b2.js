"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[929],{9953:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4a32fc49",path:"/zh/doc/request.html",title:"@faasjs/request",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"入参",slug:"入参",children:[]},{level:2,title:"出参",slug:"出参",children:[]},{level:2,title:"代码示例",slug:"代码示例",children:[]},{level:2,title:"模拟模式",slug:"模拟模式",children:[]},{level:2,title:"Github 地址",slug:"github-地址",children:[]}],git:{updatedTime:16488597e5},filePathRelative:"zh/doc/request.md"}},7640:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(6252);const e=(0,t.uE)('<h1 id="faasjs-request" tabindex="-1"><a class="header-anchor" href="#faasjs-request" aria-hidden="true">#</a> @faasjs/request</h1><p>FaasJS 内置插件，无需额外安装。</p><p>简化版网络请求插件，主要用于请求接口。</p><h2 id="入参" tabindex="-1"><a class="header-anchor" href="#入参" aria-hidden="true">#</a> 入参</h2><ul><li><strong>url</strong> <code>string</code> 请求网址</li><li><strong>options</strong> <code>object</code> 请求配置项 <ul><li><strong>method</strong> <code>string</code> 请求方法，默认为 <code>GET</code></li><li><strong>query</strong> <code>object</code> 请求参数</li><li><strong>headers</strong> <code>object</code> 请求头</li><li><strong>body</strong> <code>any</code> 请求体</li></ul></li></ul><h2 id="出参" tabindex="-1"><a class="header-anchor" href="#出参" aria-hidden="true">#</a> 出参</h2><p>注意：出参为 Promise 对象。</p><ul><li><strong>request</strong> <code>object</code> 请求对象</li><li><strong>statusCode</strong> <code>number</code> 状态码</li><li><strong>statusMessage</strong> <code>string</code> 状态信息</li><li><strong>headers</strong> <code>object</code> 响应头</li><li><strong>body</strong> <code>any</code> 响应内容</li></ul><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;https://google.com&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  query<span class="token operator">:</span> <span class="token punctuation">{</span>\n    q<span class="token operator">:</span> <span class="token string">&#39;key&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="模拟模式" tabindex="-1"><a class="header-anchor" href="#模拟模式" aria-hidden="true">#</a> 模拟模式</h2><p>为了便于单元测试，Request 插件也支持模拟模式，可以拦截请求并返回配置的响应。</p><p>代码示例如下：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> request<span class="token punctuation">,</span> setMock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token function">setMock</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      statusCode<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n      headers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      body<span class="token operator">:</span> <span class="token string">&#39;world&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;https://hello.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 必定会返回 body 为 world</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址" aria-hidden="true">#</a> Github 地址</h2>',15),p={href:"https://github.com/faasjs/faasjs/tree/main/packages/request",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("https://github.com/faasjs/faasjs/tree/main/packages/request"),c={},l=(0,a(3744).Z)(c,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[(0,t._)("a",p,[o,(0,t.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);