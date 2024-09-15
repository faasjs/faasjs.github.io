import{_ as p,r as o,c as l,b as r,d as e,w as t,e as n,a as c,o as i}from"./app-WuT8Qlz-.js";const u={};function d(k,s){const a=o("RouteLink");return i(),l("div",null,[r("p",null,[e(a,{to:"/doc/nextjs/"},{default:t(()=>s[0]||(s[0]=[n("Documents")])),_:1}),s[2]||(s[2]=n(" / ")),e(a,{to:"/doc/nextjs/"},{default:t(()=>s[1]||(s[1]=[n("@faasjs/nextjs")])),_:1}),s[3]||(s[3]=n(" / useFuncWithNextJsPlugin"))]),s[4]||(s[4]=c(`<h1 id="function-usefuncwithnextjsplugin" tabindex="-1"><a class="header-anchor" href="#function-usefuncwithnextjsplugin"><span>Function: useFuncWithNextJsPlugin()</span></a></h1><blockquote><p><strong>useFuncWithNextJsPlugin</strong>&lt;<code>TParams</code>, <code>TResult</code>&gt;(<code>handler</code>, <code>plugins</code>?): (<code>params</code>?) =&gt; <code>Promise</code>&lt;<code>any</code>&gt;</p></blockquote><p>Generate a function with NextJsPlugin.</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>TParams</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></p><p>• <strong>TResult</strong> = <code>any</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>handler</strong></p><p>• <strong>plugins?</strong>: <code>Plugin</code>[]</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>Function</code></p><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h3><p>• <strong>params?</strong>: <code>TParams</code></p><h3 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h3><p><code>Promise</code>&lt;<code>any</code>&gt;</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// create a function in server</span></span>
<span class="line"><span class="token string">&#39;use server&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useFuncWithNextJsPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/nextjs&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> serverAction <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useFuncWithNextJsPlugin</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  a<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  b<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> params<span class="token punctuation">.</span>a <span class="token operator">+</span> params<span class="token punctuation">.</span>b <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// using in client</span></span>
<span class="line"><span class="token string">&#39;use client&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> serverAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./server&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token punctuation">{</span>serverAction<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">&quot;a&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">   <span class="token operator">&lt;</span>input name<span class="token operator">=</span><span class="token string">&quot;b&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;number&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>Button<span class="token operator">&gt;</span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17))])}const g=p(u,[["render",d],["__file","useFuncWithNextJsPlugin.html.vue"]]),v=JSON.parse('{"path":"/doc/nextjs/functions/useFuncWithNextJsPlugin.html","title":"Function: useFuncWithNextJsPlugin()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[{"level":3,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]},{"level":3,"title":"Returns","slug":"returns-1","link":"#returns-1","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/nextjs/functions/useFuncWithNextJsPlugin.md"}');export{g as comp,v as data};
