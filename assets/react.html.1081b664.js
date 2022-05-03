import{_ as n,c as s}from"./app.94778bae.js";const a={},p=s(`<h1 id="\u5728-react-\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728-react-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728 React \u4E2D\u4F7F\u7528</h1><p>FaasJS \u63D0\u4F9B\u4E86 <code>@faasjs/react</code> \u4F7F\u5F97\u4F60\u53EF\u4EE5\u5728 React \u4E2D\u8F7B\u677E\u8C03\u7528\u4E91\u51FD\u6570\u3002</p><h2 id="\u96C6\u6210\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210\u6B65\u9AA4" aria-hidden="true">#</a> \u96C6\u6210\u6B65\u9AA4</h2><ol><li>\u5B89\u88C5\u63D2\u4EF6 <code>npm install @faasjs/react@beta --save</code></li><li>\u5F15\u5165\u63D2\u4EF6</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// faas.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FaasClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">FaasClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  domain<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u8FD9\u91CC\u586B\u5199\u4E91\u51FD\u6570\u7684\u670D\u52A1\u5730\u5740</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> faas <span class="token operator">=</span> client<span class="token punctuation">.</span>faas<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useFaas <span class="token operator">=</span> client<span class="token punctuation">.</span>useFaas<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token comment">// demo.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFaas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./faas&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Demo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useFaas</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;user/current&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u8F7D\u5165\u4E2D</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">ID: </span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>data<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,7);function t(e,c){return p}var l=n(a,[["render",t],["__file","react.html.vue"]]);export{l as default};