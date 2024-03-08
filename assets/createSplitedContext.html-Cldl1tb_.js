import{_ as t,r as p,o,c,a as l,d as a,w as e,b as n,e as i}from"./app-IoiK6R4P.js";const u={},r=i(`<h1 id="function-createsplitedcontext" tabindex="-1"><a class="header-anchor" href="#function-createsplitedcontext"><span>Function: createSplitedContext()</span></a></h1><blockquote><p><strong>createSplitedContext</strong>&lt;<code>T</code>&gt;(<code>defaultValue</code>): <code>Object</code></p></blockquote><p>Creates a splited context with the given default value.</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h2><p>• <strong>T</strong> extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>The type of the default value.</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>defaultValue</strong>: <code>T</code></p><p>The default value for the split context.</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>Object</code></p><ul><li>An object containing the Provider and use functions.</li></ul><h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider"><span>Provider</span></a></h3><blockquote><p><strong>Provider</strong>: (<code>props</code>) =&gt; <code>Element</code></p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>props</strong></p><p>• <strong>props.children</strong>: <code>ReactNode</code></p><p>• <strong>props.value</strong>: <code>T</code></p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Element</code></p><h3 id="provider-whydidyourender" tabindex="-1"><a class="header-anchor" href="#provider-whydidyourender"><span>Provider.whyDidYouRender</span></a></h3><blockquote><p><strong>whyDidYouRender</strong>: <code>boolean</code></p></blockquote><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>use</span></a></h3><blockquote><p><strong>use</strong>: () =&gt; <code>Readonly</code>&lt;<code>T</code>&gt;</p></blockquote><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>Readonly</code>&lt;<code>T</code>&gt;</p><h3 id="use-whydidyourender" tabindex="-1"><a class="header-anchor" href="#use-whydidyourender"><span>use.whyDidYouRender</span></a></h3><blockquote><p><strong>whyDidYouRender</strong>: <code>boolean</code></p></blockquote><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Provider<span class="token punctuation">,</span> use <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createSplitedContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setValue</span><span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">ReaderComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">WriterComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> setValue <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>button<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Change
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReaderComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WriterComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function d(k,v){const s=p("RouteLink");return o(),c("div",null,[l("p",null,[a(s,{to:"/doc/react/"},{default:e(()=>[n("Documents")]),_:1}),n(" / "),a(s,{to:"/doc/react/"},{default:e(()=>[n("@faasjs/react")]),_:1}),n(" / createSplitedContext")]),r])}const m=t(u,[["render",d],["__file","createSplitedContext.html.vue"]]),g=JSON.parse('{"path":"/doc/react/functions/createSplitedContext.html","title":"Function: createSplitedContext()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[{"level":3,"title":"Provider","slug":"provider","link":"#provider","children":[]},{"level":3,"title":"Provider.whyDidYouRender","slug":"provider-whydidyourender","link":"#provider-whydidyourender","children":[]},{"level":3,"title":"use","slug":"use","link":"#use","children":[]},{"level":3,"title":"use.whyDidYouRender","slug":"use-whydidyourender","link":"#use-whydidyourender","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/react/functions/createSplitedContext.md"}');export{m as comp,g as data};
