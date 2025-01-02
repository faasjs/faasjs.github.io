import{_ as c,c as o,b as p,d as t,e,f as s,a as l,r as i,o as u}from"./app-BWE44JdZ.js";const r={};function d(k,n){const a=i("RouteLink");return u(),o("div",null,[p("p",null,[t(a,{to:"/doc/react/"},{default:e(()=>n[0]||(n[0]=[s("Documents")])),_:1}),n[2]||(n[2]=s(" / ")),t(a,{to:"/doc/react/"},{default:e(()=>n[1]||(n[1]=[s("@faasjs/react")])),_:1}),n[3]||(n[3]=s(" / createSplittingContext"))]),n[7]||(n[7]=l(`<h1 id="function-createsplittingcontext" tabindex="-1"><a class="header-anchor" href="#function-createsplittingcontext"><span>Function: createSplittingContext()</span></a></h1><blockquote><p><strong>createSplittingContext</strong>&lt;<code>T</code>&gt;(<code>defaultValue</code>): <code>object</code></p></blockquote><p>Creates a splitting context with the given default value.</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>T</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><h3 id="defaultvalue" tabindex="-1"><a class="header-anchor" href="#defaultvalue"><span>defaultValue</span></a></h3><p>The default value of the splitting context.</p><p>{ [K in string | number | symbol]: Partial&lt;T[K]&gt; } | keyof <code>T</code>[]</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>object</code></p><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>use()</span></a></h3><blockquote><p><strong>use</strong>: &lt;<code>NewT</code>&gt;() =&gt; <code>Readonly</code>&lt;<code>NewT</code>&gt;</p></blockquote><p>The hook to use the splitting context.</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4><p>• <strong>NewT</strong> <em>extends</em> <code>T</code> = <code>T</code></p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>Readonly</code>&lt;<code>NewT</code>&gt;</p><h4 id="see" tabindex="-1"><a class="header-anchor" href="#see"><span>See</span></a></h4><p>https://faasjs.com/doc/react/functions/createSplittingContext.html#use</p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">change value</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider"><span>Provider()</span></a></h3><p>The provider component of the splitting context.</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2"><span>Type Parameters</span></a></h4><p>• <strong>NewT</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>T</code></p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><h5 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>props</span></a></h5><h6 id="children" tabindex="-1"><a class="header-anchor" href="#children"><span>children</span></a></h6><p><code>ReactNode</code></p><h6 id="initializestates" tabindex="-1"><a class="header-anchor" href="#initializestates"><span>initializeStates</span></a></h6><p><code>Partial</code>&lt;<code>NewT</code>&gt;</p>`,32)),p("p",null,[n[5]||(n[5]=s("An object containing initial values that will be automatically converted into state variables using ")),t(a,{to:"/doc/react/functions/useSplittingState.html"},{default:e(()=>n[4]||(n[4]=[s("useSplittingState")])),_:1}),n[6]||(n[6]=s(" hook. Each property will create both a state value and its setter following the pattern: value/setValue."))]),n[8]||(n[8]=l(`<p><strong>Example</strong></p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span></span>
<span class="line"> <span class="token attr-name">initializeStates</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span></span>
<span class="line">   value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"> <span class="token punctuation">}</span><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">  // Children will have access to: value, setValue</span>
<span class="line"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">###### memo</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span> \\<span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">any</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">Whether to use memoization <span class="token keyword">for</span> the children<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">**</span>Default<span class="token operator">**</span></span>
<span class="line"></span>
<span class="line"><span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span><span class="token operator">:</span> memoize the children without dependencies<span class="token punctuation">.</span></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">any[]</span><span class="token template-punctuation string">\`</span></span><span class="token operator">:</span> memoize the children <span class="token keyword">with</span> specific dependencies<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line">###### value</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Partial</span><span class="token template-punctuation string">\`</span></span>\\<span class="token operator">&lt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">NewT</span><span class="token template-punctuation string">\`</span></span>\\<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">#### Returns</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ReactNode</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">#### See</span>
<span class="line"></span>
<span class="line">https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>faasjs<span class="token punctuation">.</span>com<span class="token operator">/</span>doc<span class="token operator">/</span>react<span class="token operator">/</span>functions<span class="token operator">/</span>createSplittingContext<span class="token punctuation">.</span>html#provider</span>
<span class="line"></span>
<span class="line">#### Example</span>
<span class="line"></span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`tsx</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReaderComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WriterComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> Provider<span class="token punctuation">,</span> use <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createSplittingContext</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span></span>
<span class="line">  value<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  setValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Dispatch<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>SetStateAction<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;&gt;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  setValue<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ReaderComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">WriterComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> setValue <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>button<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">      Change</span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> setValue <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ReaderComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WriterComponent</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const m=c(r,[["render",d],["__file","createSplittingContext.html.vue"]]),g=JSON.parse('{"path":"/doc/react/functions/createSplittingContext.html","title":"Function: createSplittingContext()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"defaultValue","slug":"defaultvalue","link":"#defaultvalue","children":[]}]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[{"level":3,"title":"use()","slug":"use","link":"#use","children":[]},{"level":3,"title":"Provider()","slug":"provider","link":"#provider","children":[]}]},{"level":2,"title":"Example","slug":"example-1","link":"#example-1","children":[]}],"git":{},"filePathRelative":"doc/react/functions/createSplittingContext.md"}');export{m as comp,g as data};