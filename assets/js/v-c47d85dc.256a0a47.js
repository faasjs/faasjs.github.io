"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[330],{288:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-c47d85dc",path:"/zh/doc/http.html",title:"@faasjs/http",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置参数",slug:"配置参数",children:[]},{level:2,title:"入参校验",slug:"入参校验",children:[{level:3,title:"配置项",slug:"配置项",children:[]},{level:3,title:"代码示例",slug:"代码示例",children:[]}]},{level:2,title:"云函数 handler 返回值的处理",slug:"云函数-handler-返回值的处理",children:[{level:3,title:"自动添加 headers 和 statusCode",slug:"自动添加-headers-和-statuscode",children:[]},{level:3,title:"正常返回的值会被自动包裹在 data 字段中",slug:"正常返回的值会被自动包裹在-data-字段中",children:[]},{level:3,title:"抛异常时会自动返回 error 字段",slug:"抛异常时会自动返回-error-字段",children:[]}]},{level:2,title:"实例属性",slug:"实例属性",children:[{level:3,title:"headers",slug:"headers",children:[]},{level:3,title:"params",slug:"params",children:[]},{level:3,title:"cookie",slug:"cookie",children:[]},{level:3,title:"session",slug:"session",children:[]}]},{level:2,title:"实例方法",slug:"实例方法",children:[{level:3,title:"setHeader (key: string, value: any): Http",slug:"setheader-key-string-value-any-http",children:[]},{level:3,title:"setContentType (type: string, charset: string = 'utf-8'): Http",slug:"setcontenttype-type-string-charset-string-utf-8-http",children:[]},{level:3,title:"setStatusCode (code: number): Http",slug:"setstatuscode-code-number-http",children:[]},{level:3,title:"setBody (body: string): Http",slug:"setbody-body-string-http",children:[]}]},{level:2,title:"Cookie 实例方法",slug:"cookie-实例方法",children:[{level:3,title:"read(key: string): string?",slug:"read-key-string-string",children:[]},{level:3,title:"write(key: string, value: any, opts?: {domain?: string; path?: string; expires?: number | string; secure?: boolean; httpOnly?: boolean;}): Cookie",slug:"write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie",children:[]}]},{level:2,title:"Session 实例方法",slug:"session-实例方法",children:[{level:3,title:"read(key: string): any",slug:"read-key-string-any",children:[]},{level:3,title:"write(key: string, value?: any): Session",slug:"write-key-string-value-any-session",children:[]},{level:3,title:"encode(text: any): string",slug:"encode-text-any-string",children:[]},{level:3,title:"decode(text: string): object",slug:"decode-text-string-object",children:[]}]},{level:2,title:"示例代码",slug:"示例代码",children:[]},{level:2,title:"常见问题",slug:"常见问题",children:[{level:3,title:"Path 自动生成的规则是什么？",slug:"path-自动生成的规则是什么",children:[]},{level:3,title:"为什么不允许配置 path？",slug:"为什么不允许配置-path",children:[]},{level:3,title:"多个网关如何配置？",slug:"多个网关如何配置",children:[]}]},{level:2,title:"Github 地址",slug:"github-地址",children:[]}],git:{updatedTime:1640393026e3},filePathRelative:"zh/doc/http.md"}},2823:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var e=a(6252);const t=(0,e._)("h1",{id:"faasjs-http",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#faasjs-http","aria-hidden":"true"},"#"),(0,e.Uk)(" @faasjs/http")],-1),p=(0,e._)("p",null,"FaasJS 内置插件，无需额外安装。",-1),o=(0,e._)("p",null,"Http 插件可以使云函数能够接收和处理网络请求。",-1),c=(0,e._)("p",null,"同时还提供 cookie 和基于 cookie 的 seesion 功能。",-1),r=(0,e.Uk)("此外，强烈建议按 "),l=(0,e.Uk)("FaasJS 请求规范"),i=(0,e.Uk)(" 进行网络通讯。"),u=(0,e.uE)('<h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h2><ul><li><strong>method</strong> <code>string</code> 英文大写的方法名，默认为 <code>POST</code></li><li><strong>timeout</strong> <code>number</code> 超时时间，单位为秒，默认为 <code>30</code></li><li><strong>cookie</strong> <code>object</code> cookie 配置项 <ul><li><strong>domain</strong> <code>string</code> 域名</li><li><strong>path</strong> <code>string</code> 路径，默认为 <code>/</code></li><li><strong>expires</strong> <code>number</code> 过期时间，默认为 <code>31536000</code>（365天）</li><li><strong>secure</strong> <code>boolean</code> 是否为 secure，默认为 <code>true</code></li><li><strong>httpOnly</strong> <code>boolean</code> 是否为 httpOnly，默认为 <code>true</code></li><li><strong>sameSite</strong> <code>string</code> 支持 <code>Strict</code>、<code>Lax</code> 和 <code>None</code></li><li><strong>session</strong> <code>object</code> session 配置项，必须配置 <code>key</code> 和 <code>secret</code> 才能启用session 功能 <ul><li><strong>key</strong> <code>string</code> cookie 中保存 session 信息的 key</li><li><strong>secret</strong> <code>string</code> 加密 session 信息的密钥</li><li><strong>salt</strong> <code>string</code> 加密用的 salt，默认为 <code>salt</code></li><li><strong>signedSalt</strong> <code>string</code> 加密用的 signedSalt，默认为 <code>signedSalt</code></li><li><strong>keylen</strong> <code>number</code> 加密用的 keylen，默认为 <code>64</code></li><li><strong>iterations</strong> <code>number</code> 加密用的 iterations，默认为 <code>100</code></li><li><strong>digest</strong> <code>string</code> 加密用的 digest，默认为 <code>sha256</code></li><li><strong>cipherName</strong> <code>string</code> 加密用的 cipherName，默认为 <code>aes-256-cbc</code></li></ul></li></ul></li></ul><h2 id="入参校验" tabindex="-1"><a class="header-anchor" href="#入参校验" aria-hidden="true">#</a> 入参校验</h2><p>除了标准的配置参数外，Http 插件还支持入参校验功能。</p><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h3><ul><li><strong>params</strong> <code>object</code> body 校验配置</li><li><strong>cookie</strong> <code>object</code> cookie 校验配置</li><li><strong>session</strong> <code>object</code> session 校验配置</li></ul><h4 id="校验配置" tabindex="-1"><a class="header-anchor" href="#校验配置" aria-hidden="true">#</a> 校验配置</h4><ul><li><strong>whitelist</strong> <code>&#39;error&#39; | &#39;ignore&#39;</code> 是否只允许 <code>rules</code> 中声明的入参，当遇到未声明的入参，<code>error</code> 会直接抛异常，<code>ignore</code> 不会报错，但会删除未声明的入参</li><li><strong>onError</strong> <code>function</code> 自定义报错信息，函数入参为 <code>type: string, key: string | string[], value?: any</code></li><li><strong>rules</strong> <code>object</code> 参数校验规则 <ul><li><strong>required</strong> <code>boolean</code> 是否必填，设置为 <code>true</code> 时，将不允许值为 <code>undefined</code> 或 <code>null</code></li><li><strong>type</strong> <code>string</code> 支持 <code>string</code>、<code>number</code>、<code>boolean</code>、<code>array</code> 和 <code>object</code>，<strong>cookie 不支持此规则</strong></li><li><strong>in</strong> <code>array</code> 判断值是否在列表中</li><li><strong>default</strong> <code>any</code> 若值为 <code>undefined</code>，则会将默认值赋上，若这里配置为函数，则会将整个 <code>params</code> 作为入参传入，将函数的返回值赋上，<strong>cookie 和 session 不支持此规则</strong></li><li><strong>config</strong> <code>object</code> 内嵌对象的校验规则，配置项同上</li></ul></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><h4 id="简单校验" tabindex="-1"><a class="header-anchor" href="#简单校验" aria-hidden="true">#</a> 简单校验</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        key<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>\n          <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="多层校验" tabindex="-1"><a class="header-anchor" href="#多层校验" aria-hidden="true">#</a> 多层校验</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        key<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span>\n          config<span class="token operator">:</span> <span class="token punctuation">{</span>\n            whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>\n            rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n              subKey<span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="自定义报错" tabindex="-1"><a class="header-anchor" href="#自定义报错" aria-hidden="true">#</a> 自定义报错</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    session<span class="token operator">:</span> <span class="token punctuation">{</span>\n      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        user_id<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">onError</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;session.rule.required&#39;</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">===</span> <span class="token string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            statusCode<span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span>\n            message<span class="token operator">:</span> <span class="token string">&#39;请先登录&#39;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="云函数-handler-返回值的处理" tabindex="-1"><a class="header-anchor" href="#云函数-handler-返回值的处理" aria-hidden="true">#</a> 云函数 handler 返回值的处理</h2>',16),d=(0,e.Uk)("为了符合 "),k=(0,e.Uk)("FaasJS 请求规范"),h=(0,e.Uk)("，Http 插件会对 handler 的返回值进行特殊处理。规则为："),b=(0,e.uE)('<h3 id="自动添加-headers-和-statuscode" tabindex="-1"><a class="header-anchor" href="#自动添加-headers-和-statuscode" aria-hidden="true">#</a> 自动添加 headers 和 statusCode</h3><p>自动在 <code>headers</code> 中添加 <code>Content-Type</code> 和 <code>X-Request-Id</code>。</p><p>当 handler 直接 <code>return</code> 没有返回内容时，<code>statusCode</code> 自动设为 <code>201</code>；有返回内容时，<code>statusCode</code> 自动设为 <code>200</code>。</p><p>当 handler 中抛异常时，<code>statusCode</code> 自动设为 <code>500</code>。</p><h3 id="正常返回的值会被自动包裹在-data-字段中" tabindex="-1"><a class="header-anchor" href="#正常返回的值会被自动包裹在-data-字段中" aria-hidden="true">#</a> 正常返回的值会被自动包裹在 data 字段中</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将返回 {&quot;data&quot;:true}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="抛异常时会自动返回-error-字段" tabindex="-1"><a class="header-anchor" href="#抛异常时会自动返回-error-字段" aria-hidden="true">#</a> 抛异常时会自动返回 error 字段</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将返回 {&quot;error&quot;:{&quot;message&quot;:&quot;wrong&quot;}}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性" aria-hidden="true">#</a> 实例属性</h2><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3><p>请求头</p><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><p>请求参数，默认取 body 中的内容，且当 headers 中声明类型为 json 时，会自动解析为 object。</p><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><p>cookie 实例</p><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3><p>session 实例</p><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><h3 id="setheader-key-string-value-any-http" tabindex="-1"><a class="header-anchor" href="#setheader-key-string-value-any-http" aria-hidden="true">#</a> setHeader (key: string, value: any): Http</h3><p>设置响应的请求头，可以覆盖默认的请求头</p><h3 id="setcontenttype-type-string-charset-string-utf-8-http" tabindex="-1"><a class="header-anchor" href="#setcontenttype-type-string-charset-string-utf-8-http" aria-hidden="true">#</a> setContentType (type: string, charset: string = &#39;utf-8&#39;): Http</h3><p>设置响应类型，支持常见类型的简写，如 <code>plain</code>、<code>html</code>、<code>css</code>、<code>javascript</code> 等。</p><h3 id="setstatuscode-code-number-http" tabindex="-1"><a class="header-anchor" href="#setstatuscode-code-number-http" aria-hidden="true">#</a> setStatusCode (code: number): Http</h3><p>设置响应状态码，可以覆盖默认的状态码</p><h3 id="setbody-body-string-http" tabindex="-1"><a class="header-anchor" href="#setbody-body-string-http" aria-hidden="true">#</a> setBody (body: string): Http</h3><p>设置 Body，可以覆盖默认的 Body 且不会被包裹在 data 字段中也不会被 JSON 序列化</p><h2 id="cookie-实例方法" tabindex="-1"><a class="header-anchor" href="#cookie-实例方法" aria-hidden="true">#</a> Cookie 实例方法</h2><h3 id="read-key-string-string" tabindex="-1"><a class="header-anchor" href="#read-key-string-string" aria-hidden="true">#</a> read(key: string): string?</h3><p>读取 cookie 信息</p><h3 id="write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie" tabindex="-1"><a class="header-anchor" href="#write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie" aria-hidden="true">#</a> write(key: string, value: any, opts?: {domain?: string; path?: string; expires?: number | string; secure?: boolean; httpOnly?: boolean;}): Cookie</h3><p>写入 cookie 信息</p><h2 id="session-实例方法" tabindex="-1"><a class="header-anchor" href="#session-实例方法" aria-hidden="true">#</a> Session 实例方法</h2><h3 id="read-key-string-any" tabindex="-1"><a class="header-anchor" href="#read-key-string-any" aria-hidden="true">#</a> read(key: string): any</h3><p>读取 session 信息</p><h3 id="write-key-string-value-any-session" tabindex="-1"><a class="header-anchor" href="#write-key-string-value-any-session" aria-hidden="true">#</a> write(key: string, value?: any): Session</h3><p>写入 session 信息</p><h3 id="encode-text-any-string" tabindex="-1"><a class="header-anchor" href="#encode-text-any-string" aria-hidden="true">#</a> encode(text: any): string</h3><p>加密信息</p><h3 id="decode-text-string-object" tabindex="-1"><a class="header-anchor" href="#decode-text-string-object" aria-hidden="true">#</a> decode(text: string): object</h3><p>解密信息</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  config<span class="token operator">:</span> <span class="token punctuation">{</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span> <span class="token comment">// 设置请求方法为 GET，默认为 POST</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印请求入参</span>\n    <span class="token keyword">return</span> http<span class="token punctuation">.</span>cookie<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取 cookie 中的值</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="path-自动生成的规则是什么" tabindex="-1"><a class="header-anchor" href="#path-自动生成的规则是什么" aria-hidden="true">#</a> Path 自动生成的规则是什么？</h3><p>Path 会按照文件夹和文件名自动生成，并会去掉 Path 的第一级文件夹的名字和最后的 <code>/index</code>。</p><p>如：</p><p><code>funcs/product/show.func.ts</code> =&gt; <code>/product/show</code></p><p><code>funcs/product/index.func.ts</code> =&gt; <code>/product</code></p><h3 id="为什么不允许配置-path" tabindex="-1"><a class="header-anchor" href="#为什么不允许配置-path" aria-hidden="true">#</a> 为什么不允许配置 path？</h3><p>不允许配置 Path 是为了保证所有云函数文件的目录位置与网关的 Path 完全对应，便于后期维护迭代。</p><h3 id="多个网关如何配置" tabindex="-1"><a class="header-anchor" href="#多个网关如何配置" aria-hidden="true">#</a> 多个网关如何配置？</h3><p>在 faas.yaml 中，可以配置不同的网关，在云函数中初始化插件时，将配置名传入即可。</p><p>若一个云函数需要接收多个网关的请求，可以创建多个插件实例，部署时会逐一部署。</p><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址" aria-hidden="true">#</a> Github 地址</h2>',54),g={href:"https://github.com/faasjs/faasjs/tree/main/packages/http",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("https://github.com/faasjs/faasjs/tree/main/packages/http"),y={},f=(0,a(3744).Z)(y,[["render",function(n,s){const a=(0,e.up)("RouterLink"),y=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,o,c,(0,e._)("p",null,[r,(0,e.Wm)(a,{to:"/guide/request-spec.html"},{default:(0,e.w5)((()=>[l])),_:1}),i]),u,(0,e._)("p",null,[d,(0,e.Wm)(a,{to:"/guide/request-spec.html"},{default:(0,e.w5)((()=>[k])),_:1}),h]),b,(0,e._)("p",null,[(0,e._)("a",g,[m,(0,e.Wm)(y)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);