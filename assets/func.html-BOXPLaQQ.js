import{_ as n,c as s,o as a,a as e}from"./app-DUyT5HGb.js";const c={},l=e(`<h1 id="faasjs-func" tabindex="-1"><a class="header-anchor" href="#faasjs-func"><span>@faasjs/func</span></a></h1><p>FaasJS 的主体模块，用于初始化云函数。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// 引入 useFunc 方法</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 生成云函数主体，有以下注意点：</span>
<span class="line"> * 1. 必须是 export default</span>
<span class="line"> * 2. 入参为一个函数，函数需要返回一个业务函数，且须为 Promise 函数</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 若有需要初始化的插件，可以在这里初始化</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 返回业务函数</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 业务函数</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[l];function t(i,o){return a(),s("div",null,p)}const u=n(c,[["render",t],["__file","func.html.vue"]]),r=JSON.parse('{"path":"/zh/doc/func.html","title":"@faasjs/func","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"updatedTime":1721945603000},"filePathRelative":"zh/doc/func.md"}');export{u as comp,r as data};
