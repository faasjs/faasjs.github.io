import{_ as r,r as p,c,b as e,d as s,w as n,e as a,a as o,o as l}from"./app-B2FJcZlh.js";const d={},i=o('<h1 id="function-withfaasdata" tabindex="-1"><a class="header-anchor" href="#function-withfaasdata"><span>Function: withFaasData()</span></a></h1><blockquote><p><strong>withFaasData</strong>&lt;<code>TComponent</code>, <code>PathOrData</code>&gt;(<code>Component</code>, <code>faasProps</code>): (<code>props</code>) =&gt; <code>Element</code></p></blockquote><p>HOC to wrap a component with FaasDataWrapper</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>TComponent</strong> <em>extends</em> <code>FC</code>&lt;<code>any</code>&gt;</p><p>• <strong>PathOrData</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>Component</strong>: <code>TComponent</code></p>',8),h=e("strong",null,"faasProps",-1),u=e("code",null,"FaasDataWrapperProps",-1),m=e("code",null,"PathOrData",-1),g=o(`<h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>Function</code></p><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h3><p>• <strong>props</strong>: <code>Omit</code>&lt;<code>ComponentProps</code>&lt;<code>TComponent</code>&gt;, <code>&quot;data&quot;</code>&gt;</p><h3 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h3><p><code>Element</code></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">withFaasData</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> action<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8);function k(f,_){const t=p("RouteLink");return l(),c("div",null,[e("p",null,[s(t,{to:"/doc/react/"},{default:n(()=>[a("Documents")]),_:1}),a(" / "),s(t,{to:"/doc/react/"},{default:n(()=>[a("@faasjs/react")]),_:1}),a(" / withFaasData")]),i,e("p",null,[a("• "),h,a(": "),s(t,{to:"/doc/react/type-aliases/FaasDataWrapperProps.html"},{default:n(()=>[u]),_:1}),a("<"),m,a(">")]),g])}const v=r(d,[["render",k],["__file","withFaasData.html.vue"]]),w=JSON.parse('{"path":"/doc/react/functions/withFaasData.html","title":"Function: withFaasData()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[{"level":3,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]},{"level":3,"title":"Returns","slug":"returns-1","link":"#returns-1","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/react/functions/withFaasData.md"}');export{v as comp,w as data};
