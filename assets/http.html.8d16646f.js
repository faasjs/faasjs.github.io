import{_ as r,r as t,o as l,a as i,b as n,d as a,w as p,F as u,e as s,c as o}from"./app.28925b94.js";const d={},k=n("h1",{id:"faasjs-http",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#faasjs-http","aria-hidden":"true"},"#"),s(" @faasjs/http")],-1),h=n("p",null,"FaasJS \u5185\u7F6E\u63D2\u4EF6\uFF0C\u65E0\u9700\u989D\u5916\u5B89\u88C5\u3002",-1),b=n("p",null,"Http \u63D2\u4EF6\u53EF\u4EE5\u4F7F\u4E91\u51FD\u6570\u80FD\u591F\u63A5\u6536\u548C\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\u3002",-1),m=n("p",null,"\u540C\u65F6\u8FD8\u63D0\u4F9B cookie \u548C\u57FA\u4E8E cookie \u7684 seesion \u529F\u80FD\u3002",-1),g=s("\u6B64\u5916\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6309 "),y=s("FaasJS \u8BF7\u6C42\u89C4\u8303"),f=s(" \u8FDB\u884C\u7F51\u7EDC\u901A\u8BAF\u3002"),w=o(`<h2 id="\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u914D\u7F6E\u53C2\u6570</h2><ul><li><strong>method</strong> <code>string</code> \u82F1\u6587\u5927\u5199\u7684\u65B9\u6CD5\u540D\uFF0C\u9ED8\u8BA4\u4E3A <code>POST</code></li><li><strong>timeout</strong> <code>number</code> \u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3A <code>30</code></li><li><strong>cookie</strong> <code>object</code> cookie \u914D\u7F6E\u9879 <ul><li><strong>domain</strong> <code>string</code> \u57DF\u540D</li><li><strong>path</strong> <code>string</code> \u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A <code>/</code></li><li><strong>expires</strong> <code>number</code> \u8FC7\u671F\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A <code>31536000</code>\uFF08365\u5929\uFF09</li><li><strong>secure</strong> <code>boolean</code> \u662F\u5426\u4E3A secure\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code></li><li><strong>httpOnly</strong> <code>boolean</code> \u662F\u5426\u4E3A httpOnly\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code></li><li><strong>sameSite</strong> <code>string</code> \u652F\u6301 <code>Strict</code>\u3001<code>Lax</code> \u548C <code>None</code></li><li><strong>session</strong> <code>object</code> session \u914D\u7F6E\u9879\uFF0C\u5FC5\u987B\u914D\u7F6E <code>key</code> \u548C <code>secret</code> \u624D\u80FD\u542F\u7528session \u529F\u80FD <ul><li><strong>key</strong> <code>string</code> cookie \u4E2D\u4FDD\u5B58 session \u4FE1\u606F\u7684 key</li><li><strong>secret</strong> <code>string</code> \u52A0\u5BC6 session \u4FE1\u606F\u7684\u5BC6\u94A5</li><li><strong>salt</strong> <code>string</code> \u52A0\u5BC6\u7528\u7684 salt\uFF0C\u9ED8\u8BA4\u4E3A <code>salt</code></li><li><strong>signedSalt</strong> <code>string</code> \u52A0\u5BC6\u7528\u7684 signedSalt\uFF0C\u9ED8\u8BA4\u4E3A <code>signedSalt</code></li><li><strong>keylen</strong> <code>number</code> \u52A0\u5BC6\u7528\u7684 keylen\uFF0C\u9ED8\u8BA4\u4E3A <code>64</code></li><li><strong>iterations</strong> <code>number</code> \u52A0\u5BC6\u7528\u7684 iterations\uFF0C\u9ED8\u8BA4\u4E3A <code>100</code></li><li><strong>digest</strong> <code>string</code> \u52A0\u5BC6\u7528\u7684 digest\uFF0C\u9ED8\u8BA4\u4E3A <code>sha256</code></li><li><strong>cipherName</strong> <code>string</code> \u52A0\u5BC6\u7528\u7684 cipherName\uFF0C\u9ED8\u8BA4\u4E3A <code>aes-256-cbc</code></li></ul></li></ul></li></ul><h2 id="\u5165\u53C2\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5165\u53C2\u6821\u9A8C" aria-hidden="true">#</a> \u5165\u53C2\u6821\u9A8C</h2><p>\u9664\u4E86\u6807\u51C6\u7684\u914D\u7F6E\u53C2\u6570\u5916\uFF0CHttp \u63D2\u4EF6\u8FD8\u652F\u6301\u5165\u53C2\u6821\u9A8C\u529F\u80FD\u3002</p><h3 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h3><ul><li><strong>params</strong> <code>object</code> body \u6821\u9A8C\u914D\u7F6E</li><li><strong>cookie</strong> <code>object</code> cookie \u6821\u9A8C\u914D\u7F6E</li><li><strong>session</strong> <code>object</code> session \u6821\u9A8C\u914D\u7F6E</li></ul><h4 id="\u6821\u9A8C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u914D\u7F6E" aria-hidden="true">#</a> \u6821\u9A8C\u914D\u7F6E</h4><ul><li><strong>whitelist</strong> <code>&#39;error&#39; | &#39;ignore&#39;</code> \u662F\u5426\u53EA\u5141\u8BB8 <code>rules</code> \u4E2D\u58F0\u660E\u7684\u5165\u53C2\uFF0C\u5F53\u9047\u5230\u672A\u58F0\u660E\u7684\u5165\u53C2\uFF0C<code>error</code> \u4F1A\u76F4\u63A5\u629B\u5F02\u5E38\uFF0C<code>ignore</code> \u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u4F1A\u5220\u9664\u672A\u58F0\u660E\u7684\u5165\u53C2</li><li><strong>onError</strong> <code>function</code> \u81EA\u5B9A\u4E49\u62A5\u9519\u4FE1\u606F\uFF0C\u51FD\u6570\u5165\u53C2\u4E3A <code>type: string, key: string | string[], value?: any</code></li><li><strong>rules</strong> <code>object</code> \u53C2\u6570\u6821\u9A8C\u89C4\u5219 <ul><li><strong>required</strong> <code>boolean</code> \u662F\u5426\u5FC5\u586B\uFF0C\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u5C06\u4E0D\u5141\u8BB8\u503C\u4E3A <code>undefined</code> \u6216 <code>null</code></li><li><strong>type</strong> <code>string</code> \u652F\u6301 <code>string</code>\u3001<code>number</code>\u3001<code>boolean</code>\u3001<code>array</code> \u548C <code>object</code>\uFF0C<strong>cookie \u4E0D\u652F\u6301\u6B64\u89C4\u5219</strong></li><li><strong>in</strong> <code>array</code> \u5224\u65AD\u503C\u662F\u5426\u5728\u5217\u8868\u4E2D</li><li><strong>default</strong> <code>any</code> \u82E5\u503C\u4E3A <code>undefined</code>\uFF0C\u5219\u4F1A\u5C06\u9ED8\u8BA4\u503C\u8D4B\u4E0A\uFF0C\u82E5\u8FD9\u91CC\u914D\u7F6E\u4E3A\u51FD\u6570\uFF0C\u5219\u4F1A\u5C06\u6574\u4E2A <code>params</code> \u4F5C\u4E3A\u5165\u53C2\u4F20\u5165\uFF0C\u5C06\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8D4B\u4E0A\uFF0C<strong>cookie \u548C session \u4E0D\u652F\u6301\u6B64\u89C4\u5219</strong></li><li><strong>config</strong> <code>object</code> \u5185\u5D4C\u5BF9\u8C61\u7684\u6821\u9A8C\u89C4\u5219\uFF0C\u914D\u7F6E\u9879\u540C\u4E0A</li></ul></li></ul><h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h3><h4 id="\u7B80\u5355\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u6821\u9A8C" aria-hidden="true">#</a> \u7B80\u5355\u6821\u9A8C</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="\u591A\u5C42\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u591A\u5C42\u6821\u9A8C" aria-hidden="true">#</a> \u591A\u5C42\u6821\u9A8C</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span>
          config<span class="token operator">:</span> <span class="token punctuation">{</span>
            whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
            rules<span class="token operator">:</span> <span class="token punctuation">{</span>
              subKey<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="\u81EA\u5B9A\u4E49\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u62A5\u9519" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u62A5\u9519</h4><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    session<span class="token operator">:</span> <span class="token punctuation">{</span>
      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span>
        user_id<span class="token operator">:</span> <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">onError</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;session.rule.required&#39;</span> <span class="token operator">&amp;&amp;</span> key <span class="token operator">===</span> <span class="token string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            statusCode<span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u5148\u767B\u5F55&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u4E91\u51FD\u6570-handler-\u8FD4\u56DE\u503C\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E91\u51FD\u6570-handler-\u8FD4\u56DE\u503C\u7684\u5904\u7406" aria-hidden="true">#</a> \u4E91\u51FD\u6570 handler \u8FD4\u56DE\u503C\u7684\u5904\u7406</h2>`,16),x=s("\u4E3A\u4E86\u7B26\u5408 "),_=s("FaasJS \u8BF7\u6C42\u89C4\u8303"),v=s("\uFF0CHttp \u63D2\u4EF6\u4F1A\u5BF9 handler \u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u7279\u6B8A\u5904\u7406\u3002\u89C4\u5219\u4E3A\uFF1A"),j=o(`<h3 id="\u81EA\u52A8\u6DFB\u52A0-headers-\u548C-statuscode" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6DFB\u52A0-headers-\u548C-statuscode" aria-hidden="true">#</a> \u81EA\u52A8\u6DFB\u52A0 headers \u548C statusCode</h3><p>\u81EA\u52A8\u5728 <code>headers</code> \u4E2D\u6DFB\u52A0 <code>Content-Type</code> \u548C <code>X-Request-Id</code>\u3002</p><p>\u5F53 handler \u76F4\u63A5 <code>return</code> \u6CA1\u6709\u8FD4\u56DE\u5185\u5BB9\u65F6\uFF0C<code>statusCode</code> \u81EA\u52A8\u8BBE\u4E3A <code>201</code>\uFF1B\u6709\u8FD4\u56DE\u5185\u5BB9\u65F6\uFF0C<code>statusCode</code> \u81EA\u52A8\u8BBE\u4E3A <code>200</code>\u3002</p><p>\u5F53 handler \u4E2D\u629B\u5F02\u5E38\u65F6\uFF0C<code>statusCode</code> \u81EA\u52A8\u8BBE\u4E3A <code>500</code>\u3002</p><h3 id="\u6B63\u5E38\u8FD4\u56DE\u7684\u503C\u4F1A\u88AB\u81EA\u52A8\u5305\u88F9\u5728-data-\u5B57\u6BB5\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5E38\u8FD4\u56DE\u7684\u503C\u4F1A\u88AB\u81EA\u52A8\u5305\u88F9\u5728-data-\u5B57\u6BB5\u4E2D" aria-hidden="true">#</a> \u6B63\u5E38\u8FD4\u56DE\u7684\u503C\u4F1A\u88AB\u81EA\u52A8\u5305\u88F9\u5728 data \u5B57\u6BB5\u4E2D</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8FD4\u56DE {&quot;data&quot;:true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u629B\u5F02\u5E38\u65F6\u4F1A\u81EA\u52A8\u8FD4\u56DE-error-\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u629B\u5F02\u5E38\u65F6\u4F1A\u81EA\u52A8\u8FD4\u56DE-error-\u5B57\u6BB5" aria-hidden="true">#</a> \u629B\u5F02\u5E38\u65F6\u4F1A\u81EA\u52A8\u8FD4\u56DE error \u5B57\u6BB5</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8FD4\u56DE {&quot;error&quot;:{&quot;message&quot;:&quot;wrong&quot;}}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u5B9E\u4F8B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027</h2><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3><p>\u8BF7\u6C42\u5934</p><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><p>\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u53D6 body \u4E2D\u7684\u5185\u5BB9\uFF0C\u4E14\u5F53 headers \u4E2D\u58F0\u660E\u7C7B\u578B\u4E3A json \u65F6\uFF0C\u4F1A\u81EA\u52A8\u89E3\u6790\u4E3A object\u3002</p><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><p>cookie \u5B9E\u4F8B</p><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3><p>session \u5B9E\u4F8B</p><h2 id="\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="setheader-key-string-value-any-http" tabindex="-1"><a class="header-anchor" href="#setheader-key-string-value-any-http" aria-hidden="true">#</a> setHeader (key: string, value: any): Http</h3><p>\u8BBE\u7F6E\u54CD\u5E94\u7684\u8BF7\u6C42\u5934\uFF0C\u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5934</p><h3 id="setcontenttype-type-string-charset-string-utf-8-http" tabindex="-1"><a class="header-anchor" href="#setcontenttype-type-string-charset-string-utf-8-http" aria-hidden="true">#</a> setContentType (type: string, charset: string = &#39;utf-8&#39;): Http</h3><p>\u8BBE\u7F6E\u54CD\u5E94\u7C7B\u578B\uFF0C\u652F\u6301\u5E38\u89C1\u7C7B\u578B\u7684\u7B80\u5199\uFF0C\u5982 <code>plain</code>\u3001<code>html</code>\u3001<code>css</code>\u3001<code>javascript</code> \u7B49\u3002</p><h3 id="setstatuscode-code-number-http" tabindex="-1"><a class="header-anchor" href="#setstatuscode-code-number-http" aria-hidden="true">#</a> setStatusCode (code: number): Http</h3><p>\u8BBE\u7F6E\u54CD\u5E94\u72B6\u6001\u7801\uFF0C\u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4\u7684\u72B6\u6001\u7801</p><h3 id="setbody-body-string-http" tabindex="-1"><a class="header-anchor" href="#setbody-body-string-http" aria-hidden="true">#</a> setBody (body: string): Http</h3><p>\u8BBE\u7F6E Body\uFF0C\u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4\u7684 Body \u4E14\u4E0D\u4F1A\u88AB\u5305\u88F9\u5728 data \u5B57\u6BB5\u4E2D\u4E5F\u4E0D\u4F1A\u88AB JSON \u5E8F\u5217\u5316</p><h2 id="cookie-\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#cookie-\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> Cookie \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="read-key-string-string" tabindex="-1"><a class="header-anchor" href="#read-key-string-string" aria-hidden="true">#</a> read(key: string): string?</h3><p>\u8BFB\u53D6 cookie \u4FE1\u606F</p><h3 id="write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie" tabindex="-1"><a class="header-anchor" href="#write-key-string-value-any-opts-domain-string-path-string-expires-number-string-secure-boolean-httponly-boolean-cookie" aria-hidden="true">#</a> write(key: string, value: any, opts?: {domain?: string; path?: string; expires?: number | string; secure?: boolean; httpOnly?: boolean;}): Cookie</h3><p>\u5199\u5165 cookie \u4FE1\u606F</p><h2 id="session-\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#session-\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> Session \u5B9E\u4F8B\u65B9\u6CD5</h2><h3 id="read-key-string-any" tabindex="-1"><a class="header-anchor" href="#read-key-string-any" aria-hidden="true">#</a> read(key: string): any</h3><p>\u8BFB\u53D6 session \u4FE1\u606F</p><h3 id="write-key-string-value-any-session" tabindex="-1"><a class="header-anchor" href="#write-key-string-value-any-session" aria-hidden="true">#</a> write(key: string, value?: any): Session</h3><p>\u5199\u5165 session \u4FE1\u606F</p><h3 id="encode-text-any-string" tabindex="-1"><a class="header-anchor" href="#encode-text-any-string" aria-hidden="true">#</a> encode(text: any): string</h3><p>\u52A0\u5BC6\u4FE1\u606F</p><h3 id="decode-text-string-object" tabindex="-1"><a class="header-anchor" href="#decode-text-string-object" aria-hidden="true">#</a> decode(text: string): object</h3><p>\u89E3\u5BC6\u4FE1\u606F</p><h2 id="\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u793A\u4F8B\u4EE3\u7801</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  config<span class="token operator">:</span> <span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span> <span class="token comment">// \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u6CD5\u4E3A GET\uFF0C\u9ED8\u8BA4\u4E3A POST</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06\u5B9E\u4F8B\u653E\u5230\u4E91\u51FD\u6570\u7684\u63D2\u4EF6\u4E2D</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6253\u5370\u8BF7\u6C42\u5165\u53C2</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>cookie<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BFB\u53D6 cookie \u4E2D\u7684\u503C</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="path-\u81EA\u52A8\u751F\u6210\u7684\u89C4\u5219\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#path-\u81EA\u52A8\u751F\u6210\u7684\u89C4\u5219\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Path \u81EA\u52A8\u751F\u6210\u7684\u89C4\u5219\u662F\u4EC0\u4E48\uFF1F</h3><p>Path \u4F1A\u6309\u7167\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u540D\u81EA\u52A8\u751F\u6210\uFF0C\u5E76\u4F1A\u53BB\u6389 Path \u7684\u7B2C\u4E00\u7EA7\u6587\u4EF6\u5939\u7684\u540D\u5B57\u548C\u6700\u540E\u7684 <code>/index</code>\u3002</p><p>\u5982\uFF1A</p><p><code>funcs/product/show.func.ts</code> =&gt; <code>/product/show</code></p><p><code>funcs/product/index.func.ts</code> =&gt; <code>/product</code></p><h3 id="\u4E3A\u4EC0\u4E48\u4E0D\u5141\u8BB8\u914D\u7F6E-path" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u5141\u8BB8\u914D\u7F6E-path" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u5141\u8BB8\u914D\u7F6E path\uFF1F</h3><p>\u4E0D\u5141\u8BB8\u914D\u7F6E Path \u662F\u4E3A\u4E86\u4FDD\u8BC1\u6240\u6709\u4E91\u51FD\u6570\u6587\u4EF6\u7684\u76EE\u5F55\u4F4D\u7F6E\u4E0E\u7F51\u5173\u7684 Path \u5B8C\u5168\u5BF9\u5E94\uFF0C\u4FBF\u4E8E\u540E\u671F\u7EF4\u62A4\u8FED\u4EE3\u3002</p><h3 id="\u591A\u4E2A\u7F51\u5173\u5982\u4F55\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u7F51\u5173\u5982\u4F55\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u4E2A\u7F51\u5173\u5982\u4F55\u914D\u7F6E\uFF1F</h3><p>\u5728 faas.yaml \u4E2D\uFF0C\u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u7F51\u5173\uFF0C\u5728\u4E91\u51FD\u6570\u4E2D\u521D\u59CB\u5316\u63D2\u4EF6\u65F6\uFF0C\u5C06\u914D\u7F6E\u540D\u4F20\u5165\u5373\u53EF\u3002</p><p>\u82E5\u4E00\u4E2A\u4E91\u51FD\u6570\u9700\u8981\u63A5\u6536\u591A\u4E2A\u7F51\u5173\u7684\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u63D2\u4EF6\u5B9E\u4F8B\uFF0C\u90E8\u7F72\u65F6\u4F1A\u9010\u4E00\u90E8\u7F72\u3002</p><h2 id="github-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#github-\u5730\u5740" aria-hidden="true">#</a> Github \u5730\u5740</h2>`,54),H={href:"https://github.com/faasjs/faasjs/tree/main/packages/http",target:"_blank",rel:"noopener noreferrer"},q=s("https://github.com/faasjs/faasjs/tree/main/packages/http");function S(C,F){const e=t("RouterLink"),c=t("ExternalLinkIcon");return l(),i(u,null,[k,h,b,m,n("p",null,[g,a(e,{to:"/guide/request-spec.html"},{default:p(()=>[y]),_:1}),f]),w,n("p",null,[x,a(e,{to:"/guide/request-spec.html"},{default:p(()=>[_]),_:1}),v]),j,n("p",null,[n("a",H,[q,a(c)])])],64)}var N=r(d,[["render",S],["__file","http.html.vue"]]);export{N as default};
