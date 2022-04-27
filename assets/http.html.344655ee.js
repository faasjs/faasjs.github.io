import{_ as e,r as o,o as c,a as l,b as n,d as p,w as t,F as u,e as s,c as i}from"./app.28925b94.js";const r={},k=n("h1",{id:"http\u3001cookie-\u548C-session",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http\u3001cookie-\u548C-session","aria-hidden":"true"},"#"),s(" Http\u3001Cookie \u548C Session")],-1),b=n("p",null,[n("code",null,"@faasjs/http"),s(" \u63D0\u4F9B\u4E86\u4EE5\u4E0B\u529F\u80FD\uFF1A")],-1),d=n("li",null,"\u7F51\u7EDC\u8BF7\u6C42\u7684\u5165\u53C2\u6821\u9A8C",-1),m=s("\u89C4\u8303\u5316\u7F51\u7EDC\u54CD\u5E94\uFF08\u57FA\u4E8E "),h=s("HTTP \u8BF7\u6C42\u89C4\u8303"),_=s("\uFF09"),f=n("li",null,"Cookie \u7684\u6821\u9A8C\u548C\u8BFB\u5199",-1),w=n("li",null,"Session \u7684\u6821\u9A8C\u548C\u8BFB\u5199\uFF08Session \u88AB\u52A0\u5BC6\u50A8\u5B58\u5728 Cookie \u4E2D\uFF09",-1),y=i(`<h2 id="\u6821\u9A8C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u793A\u4F8B" aria-hidden="true">#</a> \u6821\u9A8C\u793A\u4F8B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5165\u53C2\u767D\u540D\u5355\u6821\u9A8C\uFF0C\u82E5\u53D1\u73B0\u672A\u914D\u7F6E\u7684\u5165\u53C2\u4F1A\u62A5\u9519\uFF0C\u907F\u514D\u653B\u51FB</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span>
        status<span class="token operator">:</span> <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E id \u4E3A\u5FC5\u586B\u9879</span>
          type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E id \u5FC5\u987B\u4E3A\u6570\u5B57\u7C7B\u578B</span>
          <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// status \u7684\u503C\u5FC5\u987B\u4E3A 0, 1, 2 \u4E2D\u7684\u4E00\u79CD</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u4F20\u5165\u7684 id</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="cookie-\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#cookie-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> Cookie \u4F7F\u7528\u793A\u4F8B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    cookie<span class="token operator">:</span> <span class="token punctuation">{</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span>
        distinct_id<span class="token operator">:</span> <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u82E5 cookie \u4E2D\u6CA1\u6709 distinct_id \u5219\u62A5\u9519</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;distinct_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06 cookie \u4E2D\u7684 distinct_id \u5199\u5165\u4E3A user_id</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="session-\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#session-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> Session \u4F7F\u7528\u793A\u4F8B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span>
    session<span class="token operator">:</span> <span class="token punctuation">{</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span>
        distinct_id<span class="token operator">:</span> <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u82E5 session \u4E2D\u6CA1\u6709 distinct_id \u5219\u62A5\u9519</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;distinct_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06 session \u4E2D\u7684 distinct_id \u5199\u5165\u4E3A user_id</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="http-\u63D2\u4EF6\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#http-\u63D2\u4EF6\u6587\u6863" aria-hidden="true">#</a> Http \u63D2\u4EF6\u6587\u6863</h2>`,7),g=s("\u8BE6\u7EC6\u6587\u6863\u89C1 "),v=s("Http \u63D2\u4EF6"),x=s("\u3002");function H(F,j){const a=o("RouterLink");return c(),l(u,null,[k,b,n("ul",null,[d,n("li",null,[m,p(a,{to:"/guide/excel/request-spec.html"},{default:t(()=>[h]),_:1}),_]),f,w]),y,n("p",null,[g,p(a,{to:"/doc/http.html"},{default:t(()=>[v]),_:1}),x])],64)}var S=e(r,[["render",H],["__file","http.html.vue"]]);export{S as default};
