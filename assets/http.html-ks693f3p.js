import{_ as l,c as i,b as n,f as a,d as t,e as p,a as o,r as c,o as r}from"./app-BARGm1Fu.js";const d={};function u(k,s){const e=c("RouteLink");return r(),i("div",null,[s[6]||(s[6]=n("h1",{id:"faasjs-http",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#faasjs-http"},[n("span",null,"@faasjs/http")])],-1)),s[7]||(s[7]=n("p",null,"FaasJS 内置插件，无需额外安装。",-1)),s[8]||(s[8]=n("p",null,"Http 插件可以使云函数能够接收和处理网络请求。",-1)),s[9]||(s[9]=n("p",null,"同时还提供 cookie 和基于 cookie 的 seesion 功能。",-1)),n("p",null,[s[1]||(s[1]=a("此外，强烈建议按 ")),t(e,{to:"/zh/guide/excel/request-spec.html"},{default:p(()=>s[0]||(s[0]=[a("FaasJS 请求规范")])),_:1}),s[2]||(s[2]=a(" 进行网络通讯。"))]),s[10]||(s[10]=o(`<h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2><ul><li><strong>method</strong> <code>string</code> 英文大写的方法名，默认为 <code>POST</code></li><li><strong>timeout</strong> <code>number</code> 超时时间，单位为秒，默认为 <code>30</code></li><li><strong>cookie</strong> <code>object</code> cookie 配置项 <ul><li><strong>domain</strong> <code>string</code> 域名</li><li><strong>path</strong> <code>string</code> 路径，默认为 <code>/</code></li><li><strong>expires</strong> <code>number</code> 过期时间，默认为 <code>31536000</code>（365天）</li><li><strong>secure</strong> <code>boolean</code> 是否为 secure，默认为 <code>true</code></li><li><strong>httpOnly</strong> <code>boolean</code> 是否为 httpOnly，默认为 <code>true</code></li><li><strong>sameSite</strong> <code>string</code> 支持 <code>Strict</code>、<code>Lax</code> 和 <code>None</code></li><li><strong>session</strong> <code>object</code> session 配置项，必须配置 <code>key</code> 和 <code>secret</code> 才能启用session 功能 <ul><li><strong>key</strong> <code>string</code> cookie 中保存 session 信息的 key</li><li><strong>secret</strong> <code>string</code> 加密 session 信息的密钥</li><li><strong>salt</strong> <code>string</code> 加密用的 salt，默认为 <code>salt</code></li><li><strong>signedSalt</strong> <code>string</code> 加密用的 signedSalt，默认为 <code>signedSalt</code></li><li><strong>keylen</strong> <code>number</code> 加密用的 keylen，默认为 <code>64</code></li><li><strong>iterations</strong> <code>number</code> 加密用的 iterations，默认为 <code>100</code></li><li><strong>digest</strong> <code>string</code> 加密用的 digest，默认为 <code>sha256</code></li><li><strong>cipherName</strong> <code>string</code> 加密用的 cipherName，默认为 <code>aes-256-cbc</code></li></ul></li></ul></li></ul><h2 id="入参校验" tabindex="-1"><a class="header-anchor" href="#入参校验"><span>入参校验</span></a></h2><p>除了标准的配置参数外，Http 插件还支持入参校验功能。</p><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h3><ul><li><strong>params</strong> <code>object</code> body 校验配置</li><li><strong>cookie</strong> <code>object</code> cookie 校验配置</li><li><strong>session</strong> <code>object</code> session 校验配置</li></ul><h4 id="校验配置" tabindex="-1"><a class="header-anchor" href="#校验配置"><span>校验配置</span></a></h4><ul><li><strong>whitelist</strong> <code>&#39;error&#39; | &#39;ignore&#39;</code> 是否只允许 <code>rules</code> 中声明的入参，当遇到未声明的入参，<code>error</code> 会直接抛异常，<code>ignore</code> 不会报错，但会删除未声明的入参</li><li><strong>onError</strong> <code>function</code> 自定义报错信息，函数入参为 <code>type: string, key: string | string[], value?: any</code></li><li><strong>rules</strong> <code>object</code> 参数校验规则 <ul><li><strong>required</strong> <code>boolean</code> 是否必填，设置为 <code>true</code> 时，将不允许值为 <code>undefined</code> 或 <code>null</code></li><li><strong>type</strong> <code>string</code> 支持 <code>string</code>、<code>number</code>、<code>boolean</code>、<code>array</code> 和 <code>object</code>，<strong>cookie 不支持此规则</strong></li><li><strong>in</strong> <code>array</code> 判断值是否在列表中</li><li><strong>default</strong> <code>any</code> 若值为 <code>undefined</code>，则会将默认值赋上，若这里配置为函数，则会将整个 <code>params</code> 作为入参传入，将函数的返回值赋上，<strong>cookie 和 session 不支持此规则</strong></li><li><strong>config</strong> <code>object</code> 内嵌对象的校验规则，配置项同上</li></ul></li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3><h4 id="简单校验" tabindex="-1"><a class="header-anchor" href="#简单校验"><span>简单校验</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  validator<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    params<span class="token operator">:</span> <span class="token punctuation">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多层校验" tabindex="-1"><a class="header-anchor" href="#多层校验"><span>多层校验</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  validator<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    params<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        key<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              subKey<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义报错" tabindex="-1"><a class="header-anchor" href="#自定义报错"><span>自定义报错</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  validator<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    session<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      rules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        user_id<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">onError</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;session.rule.required&#39;</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">===</span> <span class="token string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            statusCode<span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span></span>
<span class="line">            message<span class="token operator">:</span> <span class="token string">&#39;请先登录&#39;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="云函数-handler-返回值的处理" tabindex="-1"><a class="header-anchor" href="#云函数-handler-返回值的处理"><span>云函数 handler 返回值的处理</span></a></h2>`,16)),n("p",null,[s[4]||(s[4]=a("为了符合 ")),t(e,{to:"/zh/guide/excel/request-spec.html"},{default:p(()=>s[3]||(s[3]=[a("FaasJS 请求规范")])),_:1}),s[5]||(s[5]=a("，Http 插件会对 handler 的返回值进行特殊处理。规则为："))]),s[11]||(s[11]=o(`<h3 id="自动添加-headers-和-statuscode" tabindex="-1"><a class="header-anchor" href="#自动添加-headers-和-statuscode"><span>自动添加 headers 和 statusCode</span></a></h3><p>自动在 <code>headers</code> 中添加 <code>Content-Type</code> 和 <code>X-Request-Id</code>。</p><p>当 handler 直接 <code>return</code> 没有返回内容时，<code>statusCode</code> 自动设为 <code>201</code>；有返回内容时，<code>statusCode</code> 自动设为 <code>200</code>。</p><p>当 handler 中抛异常时，<code>statusCode</code> 自动设为 <code>500</code>。</p><h3 id="正常返回的值会被自动包裹在-data-字段中" tabindex="-1"><a class="header-anchor" href="#正常返回的值会被自动包裹在-data-字段中"><span>正常返回的值会被自动包裹在 data 字段中</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将返回 {&quot;data&quot;:true}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抛异常时会自动返回-error-字段" tabindex="-1"><a class="header-anchor" href="#抛异常时会自动返回-error-字段"><span>抛异常时会自动返回 error 字段</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将返回 {&quot;error&quot;:{&quot;message&quot;:&quot;wrong&quot;}}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性"><span>实例属性</span></a></h2><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span>headers</span></a></h3><p>请求头</p><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span>params</span></a></h3><p>请求参数，默认取 body 中的内容，且当 headers 中声明类型为 json 时，会自动解析为 object。</p><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie</span></a></h3><p>cookie 实例</p><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span>session</span></a></h3><p>session 实例</p><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h2><h3 id="setheader-key-string-value-any-http" tabindex="-1"><a class="header-anchor" href="#setheader-key-string-value-any-http"><span>setHeader (key: string, value: any): Http</span></a></h3><p>设置响应的请求头，可以覆盖默认的请求头</p><h3 id="setcontenttype-type-string-charset-string-utf-8-http" tabindex="-1"><a class="header-anchor" href="#setcontenttype-type-string-charset-string-utf-8-http"><span>setContentType (type: string, charset: string = &#39;utf-8&#39;): Http</span></a></h3><p>设置响应类型，支持常见类型的简写，如 <code>plain</code>、<code>html</code>、<code>css</code>、<code>javascript</code> 等。</p><h3 id="setstatuscode-code-number-http" tabindex="-1"><a class="header-anchor" href="#setstatuscode-code-number-http"><span>setStatusCode (code: number): Http</span></a></h3><p>设置响应状态码，可以覆盖默认的状态码</p><h3 id="setbody-body-string-http" tabindex="-1"><a class="header-anchor" href="#setbody-body-string-http"><span>setBody (body: string): Http</span></a></h3><p>设置 Body，可以覆盖默认的 Body 且不会被包裹在 data 字段中也不会被 JSON 序列化</p><h2 id="cookie-实例方法" tabindex="-1"><a class="header-anchor" href="#cookie-实例方法"><span>Cookie 实例方法</span></a></h2><h3 id="read-key-string-string" tabindex="-1"><a class="header-anchor" href="#read-key-string-string"><span>read(key: string): string?</span></a></h3><p>读取 cookie 信息</p><h3 id="write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie" tabindex="-1"><a class="header-anchor" href="#write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie"><span>write(key: string, value: any, opts?: {domain?: string; path?: string; expires?: number | string; secure?: boolean; httpOnly?: boolean;}): Cookie</span></a></h3><p>写入 cookie 信息</p><h2 id="session-实例方法" tabindex="-1"><a class="header-anchor" href="#session-实例方法"><span>Session 实例方法</span></a></h2><h3 id="read-key-string-any" tabindex="-1"><a class="header-anchor" href="#read-key-string-any"><span>read(key: string): any</span></a></h3><p>读取 session 信息</p><h3 id="write-key-string-value-any-session" tabindex="-1"><a class="header-anchor" href="#write-key-string-value-any-session"><span>write(key: string, value?: any): Session</span></a></h3><p>写入 session 信息</p><h3 id="encode-text-any-string" tabindex="-1"><a class="header-anchor" href="#encode-text-any-string"><span>encode(text: any): string</span></a></h3><p>加密信息</p><h3 id="decode-text-string-object" tabindex="-1"><a class="header-anchor" href="#decode-text-string-object"><span>decode(text: string): object</span></a></h3><p>解密信息</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span> <span class="token comment">// 设置请求方法为 GET，默认为 POST</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印请求入参</span></span>
<span class="line">    <span class="token keyword">return</span> http<span class="token punctuation">.</span>cookie<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取 cookie 中的值</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="path-自动生成的规则是什么" tabindex="-1"><a class="header-anchor" href="#path-自动生成的规则是什么"><span>Path 自动生成的规则是什么？</span></a></h3><p>Path 会按照文件夹和文件名自动生成，并会去掉 Path 的第一级文件夹的名字和最后的 <code>/index</code>。</p><p>如：</p><p><code>funcs/product/show.func.ts</code> =&gt; <code>/product/show</code></p><p><code>funcs/product/index.func.ts</code> =&gt; <code>/product</code></p><h3 id="为什么不允许配置-path" tabindex="-1"><a class="header-anchor" href="#为什么不允许配置-path"><span>为什么不允许配置 path？</span></a></h3><p>不允许配置 Path 是为了保证所有云函数文件的目录位置与网关的 Path 完全对应，便于后期维护迭代。</p><h3 id="多个网关如何配置" tabindex="-1"><a class="header-anchor" href="#多个网关如何配置"><span>多个网关如何配置？</span></a></h3><p>在 faas.yaml 中，可以配置不同的网关，在云函数中初始化插件时，将配置名传入即可。</p><p>若一个云函数需要接收多个网关的请求，可以创建多个插件实例，部署时会逐一部署。</p><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址"><span>Github 地址</span></a></h2><p><a href="https://github.com/faasjs/faasjs/tree/main/packages/http" target="_blank" rel="noopener noreferrer">https://github.com/faasjs/faasjs/tree/main/packages/http</a></p>`,55))])}const v=l(d,[["render",u],["__file","http.html.vue"]]),g=JSON.parse(`{"path":"/zh/doc/http.html","title":"@faasjs/http","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]},{"level":2,"title":"入参校验","slug":"入参校验","link":"#入参校验","children":[{"level":3,"title":"配置项","slug":"配置项","link":"#配置项","children":[]},{"level":3,"title":"代码示例","slug":"代码示例","link":"#代码示例","children":[]}]},{"level":2,"title":"云函数 handler 返回值的处理","slug":"云函数-handler-返回值的处理","link":"#云函数-handler-返回值的处理","children":[{"level":3,"title":"自动添加 headers 和 statusCode","slug":"自动添加-headers-和-statuscode","link":"#自动添加-headers-和-statuscode","children":[]},{"level":3,"title":"正常返回的值会被自动包裹在 data 字段中","slug":"正常返回的值会被自动包裹在-data-字段中","link":"#正常返回的值会被自动包裹在-data-字段中","children":[]},{"level":3,"title":"抛异常时会自动返回 error 字段","slug":"抛异常时会自动返回-error-字段","link":"#抛异常时会自动返回-error-字段","children":[]}]},{"level":2,"title":"实例属性","slug":"实例属性","link":"#实例属性","children":[{"level":3,"title":"headers","slug":"headers","link":"#headers","children":[]},{"level":3,"title":"params","slug":"params","link":"#params","children":[]},{"level":3,"title":"cookie","slug":"cookie","link":"#cookie","children":[]},{"level":3,"title":"session","slug":"session","link":"#session","children":[]}]},{"level":2,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[{"level":3,"title":"setHeader (key: string, value: any): Http","slug":"setheader-key-string-value-any-http","link":"#setheader-key-string-value-any-http","children":[]},{"level":3,"title":"setContentType (type: string, charset: string = 'utf-8'): Http","slug":"setcontenttype-type-string-charset-string-utf-8-http","link":"#setcontenttype-type-string-charset-string-utf-8-http","children":[]},{"level":3,"title":"setStatusCode (code: number): Http","slug":"setstatuscode-code-number-http","link":"#setstatuscode-code-number-http","children":[]},{"level":3,"title":"setBody (body: string): Http","slug":"setbody-body-string-http","link":"#setbody-body-string-http","children":[]}]},{"level":2,"title":"Cookie 实例方法","slug":"cookie-实例方法","link":"#cookie-实例方法","children":[{"level":3,"title":"read(key: string): string?","slug":"read-key-string-string","link":"#read-key-string-string","children":[]},{"level":3,"title":"write(key: string, value: any, opts?: {domain?: string; path?: string; expires?: number | string; secure?: boolean; httpOnly?: boolean;}): Cookie","slug":"write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie","link":"#write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie","children":[]}]},{"level":2,"title":"Session 实例方法","slug":"session-实例方法","link":"#session-实例方法","children":[{"level":3,"title":"read(key: string): any","slug":"read-key-string-any","link":"#read-key-string-any","children":[]},{"level":3,"title":"write(key: string, value?: any): Session","slug":"write-key-string-value-any-session","link":"#write-key-string-value-any-session","children":[]},{"level":3,"title":"encode(text: any): string","slug":"encode-text-any-string","link":"#encode-text-any-string","children":[]},{"level":3,"title":"decode(text: string): object","slug":"decode-text-string-object","link":"#decode-text-string-object","children":[]}]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"Path 自动生成的规则是什么？","slug":"path-自动生成的规则是什么","link":"#path-自动生成的规则是什么","children":[]},{"level":3,"title":"为什么不允许配置 path？","slug":"为什么不允许配置-path","link":"#为什么不允许配置-path","children":[]},{"level":3,"title":"多个网关如何配置？","slug":"多个网关如何配置","link":"#多个网关如何配置","children":[]}]},{"level":2,"title":"Github 地址","slug":"github-地址","link":"#github-地址","children":[]}],"git":{"updatedTime":1731209006000},"filePathRelative":"zh/doc/http.md"}`);export{v as comp,g as data};