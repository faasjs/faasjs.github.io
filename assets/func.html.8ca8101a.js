import{_ as n,o as s,c as a,a as e}from"./app.261fa876.js";const c={},t=e(`<h1 id="faasjs-func" tabindex="-1"><a class="header-anchor" href="#faasjs-func" aria-hidden="true">#</a> @faasjs/func</h1><p>FaasJS 的主体模块，用于初始化云函数。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 引入 useFunc 方法</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span>

<span class="token doc-comment comment">/**
 * 生成云函数主体，有以下注意点：
 * 1. 必须是 export default
 * 2. 入参为一个函数，函数需要返回一个业务函数，且须为 Promise 函数
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 若有需要初始化的插件，可以在这里初始化</span>

  <span class="token comment">// 返回业务函数</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 业务函数</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[t];function o(p,l){return s(),a("div",null,i)}const u=n(c,[["render",o],["__file","func.html.vue"]]);export{u as default};
