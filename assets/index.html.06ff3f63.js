import{_ as s,r as c,o as r,c as i,b as e,d as a,w as l,e as t,a as d}from"./app.1ee529a4.js";const h={},p=e("h1",{id:"faasjs-func",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faasjs-func","aria-hidden":"true"},"#"),t(" @faasjs/func")],-1),u={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/func/LICENSE",target:"_blank",rel:"noopener noreferrer"},g=e("img",{src:"https://img.shields.io/npm/l/@faasjs/func.svg",alt:"License: MIT"},null,-1),f={href:"https://www.npmjs.com/package/@faasjs/func",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://img.shields.io/npm/v/@faasjs/func/stable.svg",alt:"NPM Stable Version"},null,-1),x={href:"https://www.npmjs.com/package/@faasjs/func",target:"_blank",rel:"noopener noreferrer"},b=e("img",{src:"https://img.shields.io/npm/v/@faasjs/func/beta.svg",alt:"NPM Beta Version"},null,-1),m=d(`<p>FaasJS&#39;s function module.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/func
</code></pre><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>`,5),k=d('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li><a href="#config">Config</a></li><li><a href="#deploydata">DeployData</a></li><li><a href="#exportedhandler">ExportedHandler</a></li><li><a href="#funcconfig">FuncConfig</a></li><li><a href="#handler">Handler</a></li><li><a href="#invokedata">InvokeData</a></li><li><a href="#lifecyclekey">LifeCycleKey</a></li><li><a href="#mountdata">MountData</a></li><li><a href="#next">Next</a></li><li><a href="#plugin">Plugin</a></li><li><a href="#providerconfig">ProviderConfig</a></li><li><a href="#useifyplugin">UseifyPlugin</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#usefunc">useFunc</a></li><li><a href="#useplugin">usePlugin</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h3><p>Ƭ <strong>Config</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>plugins?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: { <code>[key: string]</code>: <code>any</code>; <code>config?</code>: { <code>[key: string]</code>: <code>any</code>; } ; <code>provider?</code>: <code>string</code> | <a href="#providerconfig"><code>ProviderConfig</code></a> ; <code>type</code>: <code>string</code> }; }</td></tr><tr><td style="text-align:left;"><code>providers?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <a href="#providerconfig"><code>ProviderConfig</code></a>; }</td></tr></tbody></table><hr><h3 id="deploydata" tabindex="-1"><a class="header-anchor" href="#deploydata" aria-hidden="true">#</a> DeployData</h3><p>Ƭ <strong>DeployData</strong>: <code>Object</code></p><h4 id="index-signature-1" tabindex="-1"><a class="header-anchor" href="#index-signature-1" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><a href="#config"><code>Config</code></a></td></tr><tr><td style="text-align:left;"><code>dependencies</code></td><td style="text-align:left;">{ <code>[name: string]</code>: <code>string</code>; }</td></tr><tr><td style="text-align:left;"><code>env?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>filename</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>logger?</code></td><td style="text-align:left;"><code>Logger</code></td></tr><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>plugins?</code></td><td style="text-align:left;">{ <code>[name: string]</code>: { <code>[key: string]</code>: <code>any</code>; <code>config</code>: { <code>[key: string]</code>: <code>any</code>; } ; <code>name?</code>: <code>string</code> ; <code>plugin</code>: <a href="#plugin"><code>Plugin</code></a> ; <code>provider?</code>: <code>string</code> ; <code>type</code>: <code>string</code> }; }</td></tr><tr><td style="text-align:left;"><code>root</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>version?</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="exportedhandler" tabindex="-1"><a class="header-anchor" href="#exportedhandler" aria-hidden="true">#</a> ExportedHandler</h3><p>Ƭ <strong>ExportedHandler</strong>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;: (<code>event</code>: <code>TEvent</code>, <code>context?</code>: <code>TContext</code>, <code>callback?</code>: (...<code>args</code>: <code>any</code>) =&gt; <code>any</code>) =&gt; <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TEvent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TContext</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>event</code>, <code>context?</code>, <code>callback?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h5 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>TEvent</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>TContext</code></td></tr><tr><td style="text-align:left;"><code>callback?</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>) =&gt; <code>any</code></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="funcconfig" tabindex="-1"><a class="header-anchor" href="#funcconfig" aria-hidden="true">#</a> FuncConfig</h3><p>Ƭ <strong>FuncConfig</strong>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;: <code>Object</code></p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TEvent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TContext</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="type-declaration-3" tabindex="-1"><a class="header-anchor" href="#type-declaration-3" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>handler?</code></td><td style="text-align:left;"><a href="#handler"><code>Handler</code></a>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;</td></tr><tr><td style="text-align:left;"><code>plugins?</code></td><td style="text-align:left;"><a href="#plugin"><code>Plugin</code></a>[]</td></tr></tbody></table><hr><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler" aria-hidden="true">#</a> Handler</h3><p>Ƭ <strong>Handler</strong>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;: (<code>data</code>: <a href="#invokedata"><code>InvokeData</code></a>&lt;<code>TEvent</code>, <code>TContext</code>&gt;) =&gt; <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TEvent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TContext</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="type-declaration-4" tabindex="-1"><a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>data</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><a href="#invokedata"><code>InvokeData</code></a>&lt;<code>TEvent</code>, <code>TContext</code>&gt;</td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="invokedata" tabindex="-1"><a class="header-anchor" href="#invokedata" aria-hidden="true">#</a> InvokeData</h3><p>Ƭ <strong>InvokeData</strong>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;: <code>Object</code></p><h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TEvent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TContext</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="index-signature-2" tabindex="-1"><a class="header-anchor" href="#index-signature-2" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-5" tabindex="-1"><a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><a href="#config"><code>Config</code></a></td></tr><tr><td style="text-align:left;"><code>context</code></td><td style="text-align:left;"><code>TContext</code></td></tr><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>TEvent</code></td></tr><tr><td style="text-align:left;"><code>handler?</code></td><td style="text-align:left;"><a href="#handler"><code>Handler</code></a>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;</td></tr><tr><td style="text-align:left;"><code>logger</code></td><td style="text-align:left;"><code>Logger</code></td></tr><tr><td style="text-align:left;"><code>response</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><hr><h3 id="lifecyclekey" tabindex="-1"><a class="header-anchor" href="#lifecyclekey" aria-hidden="true">#</a> LifeCycleKey</h3><p>Ƭ <strong>LifeCycleKey</strong>: <code>&quot;onDeploy&quot;</code> | <code>&quot;onMount&quot;</code> | <code>&quot;onInvoke&quot;</code></p><hr><h3 id="mountdata" tabindex="-1"><a class="header-anchor" href="#mountdata" aria-hidden="true">#</a> MountData</h3><p>Ƭ <strong>MountData</strong>: <code>Object</code></p><h4 id="index-signature-3" tabindex="-1"><a class="header-anchor" href="#index-signature-3" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-6" tabindex="-1"><a class="header-anchor" href="#type-declaration-6" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><a href="#config"><code>Config</code></a></td></tr><tr><td style="text-align:left;"><code>context</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><hr><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> Next</h3><p>Ƭ <strong>Next</strong>: () =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="type-declaration-7" tabindex="-1"><a class="header-anchor" href="#type-declaration-7" aria-hidden="true">#</a> Type declaration</h4><p>▸ (): <code>Promise</code>&lt;<code>void</code>&gt;</p><h5 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h5><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin" aria-hidden="true">#</a> Plugin</h3><p>Ƭ <strong>Plugin</strong>: <code>Object</code></p><h4 id="index-signature-4" tabindex="-1"><a class="header-anchor" href="#index-signature-4" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-8" tabindex="-1"><a class="header-anchor" href="#type-declaration-8" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>onDeploy?</code></td><td style="text-align:left;">(<code>data</code>: <a href="#deploydata"><code>DeployData</code></a>, <code>next</code>: <a href="#next"><code>Next</code></a>) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>onInvoke?</code></td><td style="text-align:left;">(<code>data</code>: <a href="#invokedata"><code>InvokeData</code></a>, <code>next</code>: <a href="#next"><code>Next</code></a>) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>onMount?</code></td><td style="text-align:left;">(<code>data</code>: <a href="#mountdata"><code>MountData</code></a>, <code>next</code>: <a href="#next"><code>Next</code></a>) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="providerconfig" tabindex="-1"><a class="header-anchor" href="#providerconfig" aria-hidden="true">#</a> ProviderConfig</h3><p>Ƭ <strong>ProviderConfig</strong>: <code>Object</code></p><h4 id="type-declaration-9" tabindex="-1"><a class="header-anchor" href="#type-declaration-9" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>any</code>; }</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="useifyplugin" tabindex="-1"><a class="header-anchor" href="#useifyplugin" aria-hidden="true">#</a> UseifyPlugin</h3><p>Ƭ <strong>UseifyPlugin</strong>: <code>Object</code></p><h4 id="type-declaration-10" tabindex="-1"><a class="header-anchor" href="#type-declaration-10" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>mount?</code></td><td style="text-align:left;">(<code>data</code>: { <code>config</code>: <a href="#config"><code>Config</code></a> }) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr></tbody></table><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="usefunc" tabindex="-1"><a class="header-anchor" href="#usefunc" aria-hidden="true">#</a> useFunc</h3>',92),v=e("strong",null,"useFunc",-1),T=e("code",null,"TEvent",-1),_=e("code",null,"TContext",-1),C=e("code",null,"TResult",-1),P=e("code",null,"handler",-1),N=e("code",null,"Func",-1),E=e("code",null,"TEvent",-1),R=e("code",null,"TContext",-1),j=e("code",null,"TResult",-1),w=d(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// pure function</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// with http</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useHttp</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>http<span class="token punctuation">.</span>params<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TEvent</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TContext</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;">() =&gt; <a href="#handler"><code>Handler</code></a>&lt;<code>TEvent</code>, <code>TContext</code>, <code>TResult</code>&gt;</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>`,6),D=e("code",null,"Func",-1),I=e("code",null,"TEvent",-1),F=e("code",null,"TContext",-1),H=e("code",null,"TResult",-1),L=d('<hr><h3 id="useplugin" tabindex="-1"><a class="header-anchor" href="#useplugin" aria-hidden="true">#</a> usePlugin</h3><p>▸ <strong>usePlugin</strong>&lt;<code>T</code>&gt;(<code>plugin</code>): <code>T</code> &amp; <a href="#useifyplugin"><code>UseifyPlugin</code></a></p><h4 id="type-parameters-5" tabindex="-1"><a class="header-anchor" href="#type-parameters-5" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="#plugin"><code>Plugin</code></a></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>plugin</code></td><td style="text-align:left;"><code>T</code> &amp; <a href="#useifyplugin"><code>UseifyPlugin</code></a></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>T</code> &amp; <a href="#useifyplugin"><code>UseifyPlugin</code></a></p>',9);function M(O,q){const n=c("ExternalLinkIcon"),o=c("RouterLink");return r(),i("div",null,[p,e("p",null,[e("a",u,[g,a(n)]),e("a",f,[y,a(n)]),e("a",x,[b,a(n)])]),m,e("ul",null,[e("li",null,[a(o,{to:"/doc/func/classes/Func.html"},{default:l(()=>[t("Func")]),_:1})])]),k,e("p",null,[t("▸ "),v,t("<"),T,t(", "),_,t(", "),C,t(">("),P,t("): "),a(o,{to:"/doc/func/classes/Func.html"},{default:l(()=>[N]),_:1}),t("<"),E,t(", "),R,t(", "),j,t(">")]),w,e("p",null,[a(o,{to:"/doc/func/classes/Func.html"},{default:l(()=>[D]),_:1}),t("<"),I,t(", "),F,t(", "),H,t(">")]),L])}const V=s(h,[["render",M],["__file","index.html.vue"]]);export{V as default};
