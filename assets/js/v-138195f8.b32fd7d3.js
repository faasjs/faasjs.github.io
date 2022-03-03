"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[1119],{2530:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-138195f8",path:"/zh/doc/cloud_function.html",title:"@faasjs/cloud_function",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置参数",slug:"配置参数",children:[{level:3,title:"校验配置",slug:"校验配置",children:[]}]},{level:2,title:"实例属性",slug:"实例属性",children:[{level:3,title:"event",slug:"event",children:[]},{level:3,title:"context",slug:"context",children:[]}]},{level:2,title:"实例方法",slug:"实例方法",children:[{level:3,title:"invoke(action: string, params?: any): Promise<any>",slug:"invoke-action-string-params-any-promise-any",children:[]},{level:3,title:"invokeSync(action: string, params?: any): Promise<any>",slug:"invokesync-action-string-params-any-promise-any",children:[]}]},{level:2,title:"示例代码",slug:"示例代码",children:[]},{level:2,title:"Github 地址",slug:"github-地址",children:[]}],git:{updatedTime:1646285577e3},filePathRelative:"zh/doc/cloud_function.md"}},7681:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(6252);const t=(0,e.uE)('<h1 id="faasjs-cloud-function" tabindex="-1"><a class="header-anchor" href="#faasjs-cloud-function" aria-hidden="true">#</a> @faasjs/cloud_function</h1><p>FaasJS 内置插件，无需额外安装。</p><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h2><ul><li><strong>name</strong> <code>string</code> 云函数名字，默认为文件夹+文件名</li><li><strong>memorySize</strong> <code>number</code> 内存，单位为 MB，默认为 128</li><li><strong>timeout</strong> <code>number</code> 最大执行时长，单位为秒，默认为 30</li><li><strong>triggers</strong> <code>object</code> 触发器配置 <ul><li><strong>type</strong> <code>string</code> 触发器类型</li><li><strong>name</strong> <code>string</code> 触发器名字</li><li><strong>value</strong> <code>string</code> 触发器设置</li></ul></li></ul><h3 id="校验配置" tabindex="-1"><a class="header-anchor" href="#校验配置" aria-hidden="true">#</a> 校验配置</h3><ul><li><strong>whitelist</strong> <code>&#39;error&#39; | &#39;ignore&#39;</code> 是否只允许 <code>rules</code> 中声明的入参，当遇到未声明的入参，<code>error</code> 会直接抛异常，<code>ignore</code> 不会报错，但会删除未声明的入参</li><li><strong>rules</strong> <code>object</code> 参数校验规则 <ul><li><strong>required</strong> <code>boolean</code> 是否必填，设置为 <code>true</code> 时，将不允许值为 <code>undefined</code> 或 <code>null</code></li><li><strong>type</strong> <code>string</code> 支持 <code>string</code>、<code>number</code>、<code>boolean</code>、<code>array</code> 和 <code>object</code></li><li><strong>in</strong> <code>array</code> 判断值是否在列表中</li><li><strong>default</strong> <code>any</code> 若值为 <code>undefined</code>，则会将默认值赋上，若这里配置为函数，则会将整个请求作为入参传入，将函数的返回值赋上</li><li><strong>config</strong> <code>object</code> 内嵌对象的校验规则，配置项同上</li></ul></li></ul><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CloudFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/cloud_function&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> cf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  validator<span class="token operator">:</span> <span class="token punctuation">{</span>\n    event<span class="token operator">:</span> <span class="token punctuation">{</span>\n      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>\n      rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        key<span class="token operator">:</span> <span class="token punctuation">{</span>\n          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>\n          <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性" aria-hidden="true">#</a> 实例属性</h2><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3><p>云函数的事件对象</p><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><p>云函数的环境对象</p><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><h3 id="invoke-action-string-params-any-promise-any" tabindex="-1"><a class="header-anchor" href="#invoke-action-string-params-any-promise-any" aria-hidden="true">#</a> invoke(action: string, params?: any): Promise&lt;any&gt;</h3><p>异步触发其它云函数</p><ul><li><strong>action</strong> 云函数的名字，如 <code>user/create</code></li><li><strong>params</strong> 传递的参数</li></ul><h3 id="invokesync-action-string-params-any-promise-any" tabindex="-1"><a class="header-anchor" href="#invokesync-action-string-params-any-promise-any" aria-hidden="true">#</a> invokeSync(action: string, params?: any): Promise&lt;any&gt;</h3><p>同步调用其它云函数</p><ul><li><strong>action</strong> 云函数的名字，如 <code>user/create</code></li><li><strong>params</strong> 传递的参数</li></ul><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CloudFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/cloud_function&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建一个云函数插件实例</span>\n<span class="token keyword">const</span> cf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  config<span class="token operator">:</span> <span class="token punctuation">{</span>\n    timeout<span class="token operator">:</span> <span class="token number">100</span> <span class="token comment">// 将云函数的最大执行时间设为 100 秒</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>cf<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 显示入参</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cf<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 触发另外一个云函数</span>\n    <span class="token keyword">await</span> cf<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;another/function_name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址" aria-hidden="true">#</a> Github 地址</h2>',23),o={href:"https://github.com/faasjs/faasjs/tree/main/packages/cloud_function",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("https://github.com/faasjs/faasjs/tree/main/packages/cloud_function"),c={},l=(0,a(3744).Z)(c,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[(0,e._)("a",o,[p,(0,e.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);