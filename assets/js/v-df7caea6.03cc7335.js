"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[8583],{6259:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-df7caea6",path:"/zh/guide/excel/request-spec.html",title:"HTTP 请求规范",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"请求",slug:"请求",children:[{level:3,title:"Headers",slug:"headers",children:[]},{level:3,title:"Method",slug:"method",children:[]},{level:3,title:"Path",slug:"path",children:[]},{level:3,title:"Query",slug:"query",children:[]},{level:3,title:"Body",slug:"body",children:[]}]},{level:2,title:"响应",slug:"响应",children:[{level:3,title:"Headers",slug:"headers-1",children:[]},{level:3,title:"Body",slug:"body-1",children:[]},{level:3,title:"201 状态",slug:"_201-状态",children:[]},{level:3,title:"500 状态",slug:"_500-状态",children:[]}]},{level:2,title:"常见问题",slug:"常见问题",children:[{level:3,title:"为什么不使用表单形式提交数据？",slug:"为什么不使用表单形式提交数据",children:[]},{level:3,title:"为什么不使用 Restful 或者 GraphQL？",slug:"为什么不使用-restful-或者-graphql",children:[]}]}],git:{updatedTime:164406486e4},filePathRelative:"zh/guide/excel/request-spec.md"}},410:(e,a,s)=>{s.r(a),s.d(a,{default:()=>t});const n=(0,s(6252).uE)('<h1 id="http-请求规范" tabindex="-1"><a class="header-anchor" href="#http-请求规范" aria-hidden="true">#</a> HTTP 请求规范</h1><p>为了统一团队协作时请求规范不一致的情况，FaasJS 提供了内置的请求规范和配套的浏览器插件。</p><h2 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h2><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h3><ul><li><strong>Content-Type</strong>: application/json; charset=UTF-8</li></ul><h3 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> Method</h3><p>统一为 <code>POST</code>。</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3><p>请求路径默认与项目中的目录名和文件名一致。</p><h3 id="query" tabindex="-1"><a class="header-anchor" href="#query" aria-hidden="true">#</a> Query</h3><p>不建议使用，入参请通过 Body 传值。</p><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3><p>为空或 JSON 格式。</p><h2 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h2><h3 id="headers-1" tabindex="-1"><a class="header-anchor" href="#headers-1" aria-hidden="true">#</a> Headers</h3><ul><li><strong>Content-Type</strong>: application/json; charset=UTF-8</li></ul><h4 id="statuscode" tabindex="-1"><a class="header-anchor" href="#statuscode" aria-hidden="true">#</a> StatusCode</h4><ul><li><strong>200</strong> 请求成功且有返回信息</li><li><strong>201</strong> 请求成功但没有返回信息</li><li><strong>500</strong> 请求失败</li></ul><p>其它状态可根据具体业务情况添加。</p><h3 id="body-1" tabindex="-1"><a class="header-anchor" href="#body-1" aria-hidden="true">#</a> Body</h3><h4 id="_200-状态" tabindex="-1"><a class="header-anchor" href="#_200-状态" aria-hidden="true">#</a> 200 状态</h4><ul><li><strong>data</strong> 必有，业务信息</li></ul><p>例：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_201-状态" tabindex="-1"><a class="header-anchor" href="#_201-状态" aria-hidden="true">#</a> 201 状态</h3><p>无 body 内容。</p><h3 id="_500-状态" tabindex="-1"><a class="header-anchor" href="#_500-状态" aria-hidden="true">#</a> 500 状态</h3><ul><li><strong>error</strong> 必有，Error 对象 <ul><li><strong>message</strong> 必有，错误信息内容</li></ul></li></ul><p>例：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;出错啦&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="为什么不使用表单形式提交数据" tabindex="-1"><a class="header-anchor" href="#为什么不使用表单形式提交数据" aria-hidden="true">#</a> 为什么不使用表单形式提交数据？</h3><p>因为表单提交数据有两个比较大的问题：一是格式只能为字符串，二是层级数据嵌套时，会导致提交的字数过多。</p><h3 id="为什么不使用-restful-或者-graphql" tabindex="-1"><a class="header-anchor" href="#为什么不使用-restful-或者-graphql" aria-hidden="true">#</a> 为什么不使用 Restful 或者 GraphQL？</h3><p>Restful 的问题在于需要开发者对动词和名词有较深的理解，GraphQL 的问题在于解析和权限验证较复杂，在 FaaS 的环境中使用 Apollo 之类的框架会显得更重。</p><p>因此 FaasJS 综合了 Restful 和 GraphQL 中易于理解的部分，将请求标准设计为仅 <code>action</code> 和 <code>params</code> 的形式。</p>',37),r={},t=(0,s(3744).Z)(r,[["render",function(e,a){return n}]])},3744:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}}}]);