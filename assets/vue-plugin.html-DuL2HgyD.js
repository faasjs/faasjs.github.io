import{_ as n,c as s,o as a,a as p}from"./app-CRwacYaH.js";const t={},e=p(`<h1 id="faasjs-vue-plugin" tabindex="-1"><a class="header-anchor" href="#faasjs-vue-plugin"><span>@faasjs/vue-plugin</span></a></h1><p>Vue 插件。</p><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>npm</span></a></h3><pre><code>npm install @faasjs/vue-plugin --save
</code></pre><h3 id="webpack-和-cdn" tabindex="-1"><a class="header-anchor" href="#webpack-和-cdn"><span>Webpack 和 CDN</span></a></h3><p>在 html 中添加如下代码：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@faasjs/vue-plugin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 webpack.config.js 中添加如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;@faasjs/vue-plugin&#39;</span><span class="token operator">:</span> <span class="token string">&#39;FaasVuePlugin&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-vue-中使用" tabindex="-1"><a class="header-anchor" href="#在-vue-中使用"><span>在 Vue 中使用</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// faas.ts</span></span>
<span class="line"><span class="token keyword">import</span> FaasVuePlugin <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/vue-plugin&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FaasVuePlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span> domain<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">FAAS</span> <span class="token keyword">as</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// app.vue</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$faas</span><span class="token punctuation">(</span><span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[e];function l(i,o){return a(),s("div",null,c)}const r=n(t,[["render",l],["__file","vue-plugin.html.vue"]]),d=JSON.parse('{"path":"/zh/doc/vue-plugin.html","title":"@faasjs/vue-plugin","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[{"level":3,"title":"npm","slug":"npm","link":"#npm","children":[]},{"level":3,"title":"Webpack 和 CDN","slug":"webpack-和-cdn","link":"#webpack-和-cdn","children":[]}]},{"level":2,"title":"在 Vue 中使用","slug":"在-vue-中使用","link":"#在-vue-中使用","children":[]}],"git":{"updatedTime":1716945821000},"filePathRelative":"zh/doc/vue-plugin.md"}');export{r as comp,d as data};
