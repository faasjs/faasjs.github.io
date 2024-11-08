import{_ as p,c as o,b as i,d as t,e,f as a,a as l,r as c,o as r}from"./app-CVgkr8FV.js";const u={};function d(k,n){const s=c("RouteLink");return r(),o("div",null,[i("p",null,[t(s,{to:"/doc/react/"},{default:e(()=>n[0]||(n[0]=[a("Documents")])),_:1}),n[2]||(n[2]=a(" / ")),t(s,{to:"/doc/react/"},{default:e(()=>n[1]||(n[1]=[a("@faasjs/react")])),_:1}),n[3]||(n[3]=a(" / useSplittingState"))]),n[4]||(n[4]=l(`<h1 id="function-usesplittingstate" tabindex="-1"><a class="header-anchor" href="#function-usesplittingstate"><span>Function: useSplittingState()</span></a></h1><blockquote><p><strong>useSplittingState</strong>&lt;<code>T</code>&gt;(<code>initialStates</code>): <code>StatesWithSetters</code>&lt;<code>T</code>&gt;</p></blockquote><p>A hook that initializes and splits state variables and their corresponding setters.</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>T</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p><p>A generic type that extends a record with string keys and any values.</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>initialStates</strong>: <code>T</code></p><p>An object containing the initial states.</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>StatesWithSetters</code>&lt;<code>T</code>&gt;</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> setCount<span class="token punctuation">,</span> name<span class="token punctuation">,</span> setName <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSplittingState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token plain-text">: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13))])}const g=p(u,[["render",d],["__file","useSplittingState.html.vue"]]),h=JSON.parse('{"path":"/doc/react/functions/useSplittingState.html","title":"Function: useSplittingState()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{},"filePathRelative":"doc/react/functions/useSplittingState.md"}');export{g as comp,h as data};