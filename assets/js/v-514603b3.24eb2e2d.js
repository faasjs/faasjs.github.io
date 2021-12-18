"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[8108],{3762:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-514603b3",path:"/zh/guide/excel/plugin.html",title:"使用插件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"创建插件实例",slug:"创建插件实例",children:[{level:3,title:"使用默认配置",slug:"使用默认配置",children:[]},{level:3,title:"使用指定配置",slug:"使用指定配置",children:[]},{level:3,title:"自定义配置",slug:"自定义配置",children:[]}]},{level:2,title:"配置的优先级",slug:"配置的优先级",children:[{level:3,title:"最佳实践",slug:"最佳实践",children:[]}]}],filePathRelative:"zh/guide/excel/plugin.md",git:{updatedTime:1639801683e3}}},5490:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="使用插件" tabindex="-1"><a class="header-anchor" href="#使用插件" aria-hidden="true">#</a> 使用插件</h1><p>FaasJS 中插件分两类，一类是云函数插件，须在创建云函数时注入才能正常使用，另外一类是非云函数插件，使用方法同普通的 npm 库。</p><h2 id="创建插件实例" tabindex="-1"><a class="header-anchor" href="#创建插件实例" aria-hidden="true">#</a> 创建插件实例</h2><h3 id="使用默认配置" tabindex="-1"><a class="header-anchor" href="#使用默认配置" aria-hidden="true">#</a> 使用默认配置</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># faas.yaml</span>\n<span class="token key atrule">defaults</span><span class="token punctuation">:</span>\n  <span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n    <span class="token key atrule">fake_plugin</span><span class="token punctuation">:</span>\n      <span class="token key atrule">config</span><span class="token punctuation">:</span>\n        <span class="token key atrule">key</span><span class="token punctuation">:</span> value\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo.func.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fakePlugin&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="使用指定配置" tabindex="-1"><a class="header-anchor" href="#使用指定配置" aria-hidden="true">#</a> 使用指定配置</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># faas.yaml</span>\n<span class="token key atrule">defaults</span><span class="token punctuation">:</span>\n  <span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n    <span class="token key atrule">special</span><span class="token punctuation">:</span>\n      <span class="token key atrule">config</span><span class="token punctuation">:</span>\n        <span class="token key atrule">key</span><span class="token punctuation">:</span> value\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo.func.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fakePlugin&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;special&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置" aria-hidden="true">#</a> 自定义配置</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// demo.func.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fakePlugin&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  config<span class="token operator">:</span> <span class="token punctuation">{</span>\n    key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>plugin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>自定义配置也可以跟指定配置混合使用，覆盖指定配置中部分配置项。</p><h2 id="配置的优先级" tabindex="-1"><a class="header-anchor" href="#配置的优先级" aria-hidden="true">#</a> 配置的优先级</h2><p>插件的配置可以在引用插件时在代码中直接配置，也可以在 <strong>faas.yaml</strong> 中配置。</p><p>配置的优先级为：云函数代码中的配置 &gt; 云函数文件所在文件夹的 <code>faas.yaml</code> &gt; 父文件夹的 <code>faas.yaml</code> &gt; 更浅层级文件夹中的 <code>faas.yaml</code>。</p><h3 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h3><p>对于共用和常用的配置，建议都配置在 <code>faas.yaml</code> 中。</p><p>仅某个云函数用到的特殊配置，可以直接在云函数的代码中配置。</p>',18),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);