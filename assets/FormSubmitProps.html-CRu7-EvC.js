import{_ as t,r as o,o as c,c as i,a as l,d as e,w as s,b as a,e as r}from"./app-ONbVOpV-.js";const p={},d=r(`<h1 id="type-alias-formsubmitprops" tabindex="-1"><a class="header-anchor" href="#type-alias-formsubmitprops"><span>Type alias: FormSubmitProps</span></a></h1><blockquote><p><strong>FormSubmitProps</strong>: <code>object</code></p></blockquote><h2 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration"><span>Type declaration</span></a></h2><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>text?</span></a></h3><blockquote><p><code>optional</code> <strong>text</strong>: <code>string</code></p></blockquote><p>Default: Submit</p><h3 id="to" tabindex="-1"><a class="header-anchor" href="#to"><span>to?</span></a></h3><blockquote><p><code>optional</code> <strong>to</strong>: <code>object</code></p></blockquote><p>Submit to FaasJS server.</p><p>If use onFinish, you should call submit manually.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  submit<span class="token operator">:</span> <span class="token punctuation">{</span>
    to<span class="token operator">:</span> <span class="token punctuation">{</span>
      action<span class="token operator">:</span> <span class="token string">&#39;action_name&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onFinish</span><span class="token operator">:</span> <span class="token punctuation">(</span>values<span class="token punctuation">,</span> submit<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something before submit</span>

    <span class="token comment">// submit</span>
    <span class="token keyword">await</span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token operator">...</span>values<span class="token punctuation">,</span>
     extraProps<span class="token operator">:</span> <span class="token string">&#39;some extra props&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// do something after submit</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-action" tabindex="-1"><a class="header-anchor" href="#to-action"><span>to.action</span></a></h3><blockquote><p><strong>action</strong>: <code>string</code></p></blockquote><h3 id="to-catch" tabindex="-1"><a class="header-anchor" href="#to-catch"><span>to.catch()?</span></a></h3><blockquote><p><code>optional</code> <strong>catch</strong>: (<code>error</code>) =&gt; <code>void</code></p></blockquote><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><p>• <strong>error</strong>: <code>any</code></p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4><p><code>void</code></p><h3 id="to-finally" tabindex="-1"><a class="header-anchor" href="#to-finally"><span>to.finally()?</span></a></h3><blockquote><p><code>optional</code> <strong>finally</strong>: () =&gt; <code>void</code></p></blockquote><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>void</code></p><h3 id="to-params" tabindex="-1"><a class="header-anchor" href="#to-params"><span>to.params?</span></a></h3><blockquote><p><code>optional</code> <strong>params</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p></blockquote><p>params will overwrite form values before submit</p><h3 id="to-then" tabindex="-1"><a class="header-anchor" href="#to-then"><span>to.then()?</span></a></h3><blockquote><p><code>optional</code> <strong>then</strong>: (<code>result</code>) =&gt; <code>void</code></p></blockquote><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>result</strong>: <code>any</code></p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>void</code></p>`,32);function u(h,m){const n=o("RouteLink");return c(),i("div",null,[l("p",null,[e(n,{to:"/doc/ant-design/"},{default:s(()=>[a("Documents")]),_:1}),a(" / "),e(n,{to:"/doc/ant-design/"},{default:s(()=>[a("@faasjs/ant-design")]),_:1}),a(" / FormSubmitProps")]),d])}const v=t(p,[["render",u],["__file","FormSubmitProps.html.vue"]]),k=JSON.parse('{"path":"/doc/ant-design/type-aliases/FormSubmitProps.html","title":"Type alias: FormSubmitProps","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type declaration","slug":"type-declaration","link":"#type-declaration","children":[{"level":3,"title":"text?","slug":"text","link":"#text","children":[]},{"level":3,"title":"to?","slug":"to","link":"#to","children":[]},{"level":3,"title":"to.action","slug":"to-action","link":"#to-action","children":[]},{"level":3,"title":"to.catch()?","slug":"to-catch","link":"#to-catch","children":[]},{"level":3,"title":"to.finally()?","slug":"to-finally","link":"#to-finally","children":[]},{"level":3,"title":"to.params?","slug":"to-params","link":"#to-params","children":[]},{"level":3,"title":"to.then()?","slug":"to-then","link":"#to-then","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/ant-design/type-aliases/FormSubmitProps.md"}');export{v as comp,k as data};
