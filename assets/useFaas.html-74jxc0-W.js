import{_ as e,r as o,o as c,c as p,a as r,d as n,w as t,b as a,e as d}from"./app-Ph9XU2oP.js";const i={},l=d(`<h1 id="function-usefaas" tabindex="-1"><a class="header-anchor" href="#function-usefaas"><span>Function: useFaas()</span></a></h1><blockquote><p><strong>useFaas</strong>&lt;<code>PathOrData</code>&gt;(<code>action</code>, <code>defaultParams</code>, <code>options</code>?): <code>FaasDataInjection</code>&lt;<code>FaasData</code>&lt;<code>PathOrData</code>&gt;&gt;</p></blockquote><p>Request faas server with React hook</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h2><p>• <strong>PathOrData</strong> extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>action</strong>: <code>string</code> | <code>PathOrData</code></p><p>{string} action name</p><p>• <strong>defaultParams</strong>: <code>FaasParams</code>&lt;<code>PathOrData</code>&gt;</p><p>{object} initial action params</p><p>• <strong>options?</strong>: <code>useFaasOptions</code>&lt;<code>PathOrData</code>&gt;</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>FaasDataInjection</code>&lt;<code>FaasData</code>&lt;<code>PathOrData</code>&gt;&gt;</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">Post</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useFaas</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;post/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function u(k,h){const s=o("RouterLink");return c(),p("div",null,[r("p",null,[n(s,{to:"/doc/ant-design/"},{default:t(()=>[a("Documents")]),_:1}),a(" / "),n(s,{to:"/doc/ant-design/"},{default:t(()=>[a("@faasjs/ant-design")]),_:1}),a(" / useFaas")]),l])}const m=e(i,[["render",u],["__file","useFaas.html.vue"]]);export{m as default};
