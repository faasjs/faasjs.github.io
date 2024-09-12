import{_ as n,c as s,o as a,a as e}from"./app-jjiIXugZ.js";const p={},l=e(`<h1 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件"><span>使用插件</span></a></h1><p>FaasJS 中插件分两类，一类是云函数插件，须在创建云函数时注入才能正常使用，另外一类是非云函数插件，使用方法同普通的 npm 库。</p><h2 id="创建插件实例" tabindex="-1"><a class="header-anchor" href="#创建插件实例"><span>创建插件实例</span></a></h2><h3 id="使用默认配置" tabindex="-1"><a class="header-anchor" href="#使用默认配置"><span>使用默认配置</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># faas.yaml</span></span>
<span class="line"><span class="token key atrule">defaults</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">plugins</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">fake_plugin</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">key</span><span class="token punctuation">:</span> value</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// demo.func.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fakePlugin&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用指定配置" tabindex="-1"><a class="header-anchor" href="#使用指定配置"><span>使用指定配置</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># faas.yaml</span></span>
<span class="line"><span class="token key atrule">defaults</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">plugins</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">special</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">config</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">key</span><span class="token punctuation">:</span> value</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// demo.func.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fakePlugin&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">&#39;special&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置"><span>自定义配置</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// demo.func.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fakePlugin&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义配置也可以跟指定配置混合使用，覆盖指定配置中部分配置项。</p><h2 id="配置的优先级" tabindex="-1"><a class="header-anchor" href="#配置的优先级"><span>配置的优先级</span></a></h2><p>插件的配置可以在引用插件时在代码中直接配置，也可以在 <strong>faas.yaml</strong> 中配置。</p><p>配置的优先级为：云函数代码中的配置 &gt; 云函数文件所在文件夹的 <code>faas.yaml</code> &gt; 父文件夹的 <code>faas.yaml</code> &gt; 更浅层级文件夹中的 <code>faas.yaml</code>。</p><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h3><p>对于共用和常用的配置，建议都配置在 <code>faas.yaml</code> 中。</p><p>仅某个云函数用到的特殊配置，可以直接在云函数的代码中配置。</p>`,18),t=[l];function c(i,o){return a(),s("div",null,t)}const d=n(p,[["render",c],["__file","plugin.html.vue"]]),r=JSON.parse('{"path":"/zh/guide/excel/plugin.html","title":"使用插件","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"创建插件实例","slug":"创建插件实例","link":"#创建插件实例","children":[{"level":3,"title":"使用默认配置","slug":"使用默认配置","link":"#使用默认配置","children":[]},{"level":3,"title":"使用指定配置","slug":"使用指定配置","link":"#使用指定配置","children":[]},{"level":3,"title":"自定义配置","slug":"自定义配置","link":"#自定义配置","children":[]}]},{"level":2,"title":"配置的优先级","slug":"配置的优先级","link":"#配置的优先级","children":[{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}]}],"git":{"updatedTime":1726124414000},"filePathRelative":"zh/guide/excel/plugin.md"}');export{d as comp,r as data};