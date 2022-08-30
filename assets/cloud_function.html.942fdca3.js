import{_ as a,r as e,o as t,c as o,b as n,d as c,a as i,e as p}from"./app.9d73d697.js";const l={},r=i(`<h1 id="faasjs-cloud-function" tabindex="-1"><a class="header-anchor" href="#faasjs-cloud-function" aria-hidden="true">#</a> @faasjs/cloud_function</h1><p>FaasJS \u5185\u7F6E\u63D2\u4EF6\uFF0C\u65E0\u9700\u989D\u5916\u5B89\u88C5\u3002</p><h2 id="\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u914D\u7F6E\u53C2\u6570</h2><ul><li><strong>name</strong> <code>string</code> \u4E91\u51FD\u6570\u540D\u5B57\uFF0C\u9ED8\u8BA4\u4E3A\u6587\u4EF6\u5939+\u6587\u4EF6\u540D</li><li><strong>memorySize</strong> <code>number</code> \u5185\u5B58\uFF0C\u5355\u4F4D\u4E3A MB\uFF0C\u9ED8\u8BA4\u4E3A 128</li><li><strong>timeout</strong> <code>number</code> \u6700\u5927\u6267\u884C\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3A 30</li><li><strong>triggers</strong> <code>object</code> \u89E6\u53D1\u5668\u914D\u7F6E <ul><li><strong>type</strong> <code>string</code> \u89E6\u53D1\u5668\u7C7B\u578B</li><li><strong>name</strong> <code>string</code> \u89E6\u53D1\u5668\u540D\u5B57</li><li><strong>value</strong> <code>string</code> \u89E6\u53D1\u5668\u8BBE\u7F6E</li></ul></li></ul><h3 id="\u6821\u9A8C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u914D\u7F6E" aria-hidden="true">#</a> \u6821\u9A8C\u914D\u7F6E</h3><ul><li><strong>whitelist</strong> <code>&#39;error&#39; | &#39;ignore&#39;</code> \u662F\u5426\u53EA\u5141\u8BB8 <code>rules</code> \u4E2D\u58F0\u660E\u7684\u5165\u53C2\uFF0C\u5F53\u9047\u5230\u672A\u58F0\u660E\u7684\u5165\u53C2\uFF0C<code>error</code> \u4F1A\u76F4\u63A5\u629B\u5F02\u5E38\uFF0C<code>ignore</code> \u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u4F1A\u5220\u9664\u672A\u58F0\u660E\u7684\u5165\u53C2</li><li><strong>rules</strong> <code>object</code> \u53C2\u6570\u6821\u9A8C\u89C4\u5219 <ul><li><strong>required</strong> <code>boolean</code> \u662F\u5426\u5FC5\u586B\uFF0C\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u5C06\u4E0D\u5141\u8BB8\u503C\u4E3A <code>undefined</code> \u6216 <code>null</code></li><li><strong>type</strong> <code>string</code> \u652F\u6301 <code>string</code>\u3001<code>number</code>\u3001<code>boolean</code>\u3001<code>array</code> \u548C <code>object</code></li><li><strong>in</strong> <code>array</code> \u5224\u65AD\u503C\u662F\u5426\u5728\u5217\u8868\u4E2D</li><li><strong>default</strong> <code>any</code> \u82E5\u503C\u4E3A <code>undefined</code>\uFF0C\u5219\u4F1A\u5C06\u9ED8\u8BA4\u503C\u8D4B\u4E0A\uFF0C\u82E5\u8FD9\u91CC\u914D\u7F6E\u4E3A\u51FD\u6570\uFF0C\u5219\u4F1A\u5C06\u6574\u4E2A\u8BF7\u6C42\u4F5C\u4E3A\u5165\u53C2\u4F20\u5165\uFF0C\u5C06\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8D4B\u4E0A</li><li><strong>config</strong> <code>object</code> \u5185\u5D4C\u5BF9\u8C61\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u914D\u7F6E\u9879\u540C\u4E0A</li></ul></li></ul><h4 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CloudFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/cloud_function&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    event<span class="token operator">:</span> <span class="token punctuation">{</span>
      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
          <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9E\u4F8B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027</h2><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3><p>\u4E91\u51FD\u6570\u7684\u4E8B\u4EF6\u5BF9\u8C61</p><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><p>\u4E91\u51FD\u6570\u7684\u73AF\u5883\u5BF9\u8C61</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="invoke-action-string-params-any-promise-any" tabindex="-1"><a class="header-anchor" href="#invoke-action-string-params-any-promise-any" aria-hidden="true">#</a> invoke(action: string, params?: any): Promise&lt;any&gt;</h3><p>\u5F02\u6B65\u89E6\u53D1\u5176\u5B83\u4E91\u51FD\u6570</p><ul><li><strong>action</strong> \u4E91\u51FD\u6570\u7684\u540D\u5B57\uFF0C\u5982 <code>user/create</code></li><li><strong>params</strong> \u4F20\u9012\u7684\u53C2\u6570</li></ul><h3 id="invokesync-action-string-params-any-promise-any" tabindex="-1"><a class="header-anchor" href="#invokesync-action-string-params-any-promise-any" aria-hidden="true">#</a> invokeSync(action: string, params?: any): Promise&lt;any&gt;</h3><p>\u540C\u6B65\u8C03\u7528\u5176\u5B83\u4E91\u51FD\u6570</p><ul><li><strong>action</strong> \u4E91\u51FD\u6570\u7684\u540D\u5B57\uFF0C\u5982 <code>user/create</code></li><li><strong>params</strong> \u4F20\u9012\u7684\u53C2\u6570</li></ul><h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CloudFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/cloud_function&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4E91\u51FD\u6570\u63D2\u4EF6\u5B9E\u4F8B</span>
<span class="token keyword">const</span> cf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloudFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    timeout<span class="token operator">:</span> <span class="token number">100</span> <span class="token comment">// \u5C06\u4E91\u51FD\u6570\u7684\u6700\u5927\u6267\u884C\u65F6\u95F4\u8BBE\u4E3A 100 \u79D2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>cf<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06\u5B9E\u4F8B\u653E\u5230\u4E91\u51FD\u6570\u7684\u63D2\u4EF6\u4E2D</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u663E\u793A\u5165\u53C2</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cf<span class="token punctuation">.</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u89E6\u53D1\u53E6\u5916\u4E00\u4E2A\u4E91\u51FD\u6570</span>
    <span class="token keyword">await</span> cf<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;another/function_name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#github-\u5730\u5740" aria-hidden="true">#</a> Github \u5730\u5740</h2>`,23),u={href:"https://github.com/faasjs/faasjs/tree/main/packages/cloud_function",target:"_blank",rel:"noopener noreferrer"},d=p("https://github.com/faasjs/faasjs/tree/main/packages/cloud_function");function k(m,v){const s=e("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[n("a",u,[d,c(s)])])])}const g=a(l,[["render",k],["__file","cloud_function.html.vue"]]);export{g as default};