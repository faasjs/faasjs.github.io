import{_ as n,c as s}from"./app.44bc8180.js";const a={},e=s(`<h1 id="faasjs-func" tabindex="-1"><a class="header-anchor" href="#faasjs-func" aria-hidden="true">#</a> @faasjs/func</h1><p>FaasJS \u7684\u4E3B\u4F53\u6A21\u5757\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u4E91\u51FD\u6570\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5F15\u5165 useFunc \u65B9\u6CD5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span>

<span class="token doc-comment comment">/**
 * \u751F\u6210\u4E91\u51FD\u6570\u4E3B\u4F53\uFF0C\u6709\u4EE5\u4E0B\u6CE8\u610F\u70B9\uFF1A
 * 1. \u5FC5\u987B\u662F export default
 * 2. \u5165\u53C2\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u4E1A\u52A1\u51FD\u6570\uFF0C\u4E14\u987B\u4E3A Promise \u51FD\u6570
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u82E5\u6709\u9700\u8981\u521D\u59CB\u5316\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u521D\u59CB\u5316</span>

  <span class="token comment">// \u8FD4\u56DE\u4E1A\u52A1\u51FD\u6570</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E1A\u52A1\u51FD\u6570</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,4);function p(c,t){return e}var o=n(a,[["render",p],["__file","func.html.vue"]]);export{o as default};
