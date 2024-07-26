import{_ as t,r as o,c,b as p,d as n,w as e,e as a,a as r,o as l}from"./app-CNwEv5AS.js";const i={},d=r(`<h1 id="function-faas" tabindex="-1"><a class="header-anchor" href="#function-faas"><span>Function: faas()</span></a></h1><blockquote><p><strong>faas</strong>&lt;<code>PathOrData</code>&gt;(<code>action</code>, <code>params</code>): <code>Promise</code>&lt;<code>Response</code>&lt;<code>FaasData</code>&lt;<code>PathOrData</code>&gt;&gt;&gt;</p></blockquote><p>Request faas server</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>PathOrData</strong> <em>extends</em> <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>action</strong>: <code>string</code> | <code>PathOrData</code></p><p>{string} action name</p><p>• <strong>params</strong>: <code>FaasParams</code>&lt;<code>PathOrData</code>&gt;</p><p>{object} action params</p><h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2><p><code>Promise</code>&lt;<code>Response</code>&lt;<code>FaasData</code>&lt;<code>PathOrData</code>&gt;&gt;&gt;</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token generic-function"><span class="token function">faas</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;post/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function u(m,h){const s=o("RouteLink");return l(),c("div",null,[p("p",null,[n(s,{to:"/doc/ant-design/"},{default:e(()=>[a("Documents")]),_:1}),a(" / "),n(s,{to:"/doc/ant-design/"},{default:e(()=>[a("@faasjs/ant-design")]),_:1}),a(" / faas")]),d])}const k=t(i,[["render",u],["__file","faas.html.vue"]]),f=JSON.parse('{"path":"/doc/ant-design/functions/faas.html","title":"Function: faas()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/ant-design/functions/faas.md"}');export{k as comp,f as data};
