import{_ as n,c as s,o as a,a as e}from"./app-CRwacYaH.js";const t={},o=e(`<h1 id="faasjs-cloud-function" tabindex="-1"><a class="header-anchor" href="#faasjs-cloud-function"><span>@faasjs/cloud_function</span></a></h1><p>FaasJS 内置插件，无需额外安装。</p><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2><ul><li><strong>name</strong> <code>string</code> 云函数名字，默认为文件夹+文件名</li><li><strong>memorySize</strong> <code>number</code> 内存，单位为 MB，默认为 128</li><li><strong>timeout</strong> <code>number</code> 最大执行时长，单位为秒，默认为 30</li><li><strong>triggers</strong> <code>object</code> 触发器配置 <ul><li><strong>type</strong> <code>string</code> 触发器类型</li><li><strong>name</strong> <code>string</code> 触发器名字</li><li><strong>value</strong> <code>string</code> 触发器设置</li></ul></li></ul><h3 id="校验配置" tabindex="-1"><a class="header-anchor" href="#校验配置"><span>校验配置</span></a></h3><ul><li><strong>whitelist</strong> <code>&#39;error&#39; | &#39;ignore&#39;</code> 是否只允许 <code>rules</code> 中声明的入参，当遇到未声明的入参，<code>error</code> 会直接抛异常，<code>ignore</code> 不会报错，但会删除未声明的入参</li><li><strong>rules</strong> <code>object</code> 参数校验规则 <ul><li><strong>required</strong> <code>boolean</code> 是否必填，设置为 <code>true</code> 时，将不允许值为 <code>undefined</code> 或 <code>null</code></li><li><strong>type</strong> <code>string</code> 支持 <code>string</code>、<code>number</code>、<code>boolean</code>、<code>array</code> 和 <code>object</code></li><li><strong>in</strong> <code>array</code> 判断值是否在列表中</li><li><strong>default</strong> <code>any</code> 若值为 <code>undefined</code>，则会将默认值赋上，若这里配置为函数，则会将整个请求作为入参传入，将函数的返回值赋上</li><li><strong>config</strong> <code>object</code> 内嵌对象的校验规则，配置项同上</li></ul></li></ul><h4 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h4><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CloudFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/cloud_function&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> cf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  validator<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    event<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        key<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性"><span>实例属性</span></a></h2><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event"><span>event</span></a></h3><p>云函数的事件对象</p><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h3><p>云函数的环境对象</p><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h2><h3 id="invoke-action-string-params-any-promise-any" tabindex="-1"><a class="header-anchor" href="#invoke-action-string-params-any-promise-any"><span>invoke(action: string, params?: any): Promise&lt;any&gt;</span></a></h3><p>异步触发其它云函数</p><ul><li><strong>action</strong> 云函数的名字，如 <code>user/create</code></li><li><strong>params</strong> 传递的参数</li></ul><h3 id="invokesync-action-string-params-any-promise-any" tabindex="-1"><a class="header-anchor" href="#invokesync-action-string-params-any-promise-any"><span>invokeSync(action: string, params?: any): Promise&lt;any&gt;</span></a></h3><p>同步调用其它云函数</p><ul><li><strong>action</strong> 云函数的名字，如 <code>user/create</code></li><li><strong>params</strong> 传递的参数</li></ul><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CloudFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/cloud_function&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建一个云函数插件实例</span></span>
<span class="line"><span class="token keyword">const</span> cf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    timeout<span class="token operator">:</span> <span class="token number">100</span> <span class="token comment">// 将云函数的最大执行时间设为 100 秒</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>cf<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 显示入参</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cf<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 触发另外一个云函数</span></span>
<span class="line">    <span class="token keyword">await</span> cf<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;another/function_name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址"><span>Github 地址</span></a></h2><p><a href="https://github.com/faasjs/faasjs/tree/main/packages/cloud_function" target="_blank" rel="noopener noreferrer">https://github.com/faasjs/faasjs/tree/main/packages/cloud_function</a></p>`,24),p=[o];function c(l,i){return a(),s("div",null,p)}const u=n(t,[["render",c],["__file","cloud_function.html.vue"]]),d=JSON.parse('{"path":"/zh/doc/cloud_function.html","title":"@faasjs/cloud_function","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[{"level":3,"title":"校验配置","slug":"校验配置","link":"#校验配置","children":[]}]},{"level":2,"title":"实例属性","slug":"实例属性","link":"#实例属性","children":[{"level":3,"title":"event","slug":"event","link":"#event","children":[]},{"level":3,"title":"context","slug":"context","link":"#context","children":[]}]},{"level":2,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[{"level":3,"title":"invoke(action: string, params?: any): Promise<any>","slug":"invoke-action-string-params-any-promise-any","link":"#invoke-action-string-params-any-promise-any","children":[]},{"level":3,"title":"invokeSync(action: string, params?: any): Promise<any>","slug":"invokesync-action-string-params-any-promise-any","link":"#invokesync-action-string-params-any-promise-any","children":[]}]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"Github 地址","slug":"github-地址","link":"#github-地址","children":[]}],"git":{"updatedTime":1716945821000},"filePathRelative":"zh/doc/cloud_function.md"}');export{u as comp,d as data};
