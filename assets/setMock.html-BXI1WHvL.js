import{_ as t,r as o,c,b as p,d as a,w as e,e as s,a as l,o as r}from"./app-T58oPeKp.js";const i={},u=l(`<h1 id="function-setmock" tabindex="-1"><a class="header-anchor" href="#function-setmock"><span>Function: setMock()</span></a></h1><blockquote><p><strong>setMock</strong>(<code>handler</code>): <code>void</code></p></blockquote><p>Mock requests</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>handler</strong>: <code>Mock</code></p><p>{function | null} null to disable mock</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>void</code></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token function">setMock</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> headers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> statusCode<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> body<span class="token operator">:</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,10);function d(k,h){const n=o("RouteLink");return r(),c("div",null,[p("p",null,[a(n,{to:"/doc/request/"},{default:e(()=>[s("Documents")]),_:1}),s(" / "),a(n,{to:"/doc/request/"},{default:e(()=>[s("@faasjs/request")]),_:1}),s(" / setMock")]),u])}const f=t(i,[["render",d],["__file","setMock.html.vue"]]),_=JSON.parse('{"path":"/doc/request/functions/setMock.html","title":"Function: setMock()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/request/functions/setMock.md"}');export{f as comp,_ as data};
