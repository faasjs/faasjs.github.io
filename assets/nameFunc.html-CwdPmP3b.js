import{_ as l,c as p,b as o,d as s,e as t,f as e,a as r,r as c,o as i}from"./app-DeYOYs9P.js";const d={};function u(m,n){const a=c("RouteLink");return i(),p("div",null,[o("p",null,[s(a,{to:"/doc/test/"},{default:t(()=>n[0]||(n[0]=[e("Documents")])),_:1}),n[2]||(n[2]=e(" / ")),s(a,{to:"/doc/test/"},{default:t(()=>n[1]||(n[1]=[e("@faasjs/test")])),_:1}),n[3]||(n[3]=e(" / nameFunc"))]),n[4]||(n[4]=r(`<h1 id="function-namefunc" tabindex="-1"><a class="header-anchor" href="#function-namefunc"><span>Function: nameFunc()</span></a></h1><blockquote><p><strong>nameFunc</strong>&lt;<code>T</code>&gt;(<code>name</code>, <code>handler</code>): <code>T</code></p></blockquote><p>Assigns a name to a given function handler, which will be displayed in logs and error messages.</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>T</strong> <em>extends</em> (...<code>args</code>) =&gt; <code>any</code></p><p>The type of the function handler.</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><p><code>string</code></p><p>The name to assign to the function handler.</p><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler"><span>handler</span></a></h3><p><code>T</code></p><p>The function handler to which the name will be assigned.</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>T</code></p><ul><li>The original function handler with the assigned name.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> nameFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">nameFunc</span><span class="token punctuation">(</span><span class="token string">&#39;myHandler&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>handler<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;myHandler&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18))])}const k=l(d,[["render",u],["__file","nameFunc.html.vue"]]),f=JSON.parse('{"path":"/doc/test/functions/nameFunc.html","title":"Function: nameFunc()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"handler","slug":"handler","link":"#handler","children":[]}]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{},"filePathRelative":"doc/test/functions/nameFunc.md"}');export{k as comp,f as data};
