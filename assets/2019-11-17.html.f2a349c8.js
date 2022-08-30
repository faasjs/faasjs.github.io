import{_ as n,o as s,c as a,a as p}from"./app.9d73d697.js";const t={},e=p(`<h1 id="serverless-\u6700\u4F73\u5B9E\u8DF5\u4E4B\u7F51\u7EDC\u8BF7\u6C42-\u4E2D" tabindex="-1"><a class="header-anchor" href="#serverless-\u6700\u4F73\u5B9E\u8DF5\u4E4B\u7F51\u7EDC\u8BF7\u6C42-\u4E2D" aria-hidden="true">#</a> Serverless \u6700\u4F73\u5B9E\u8DF5\u4E4B\u7F51\u7EDC\u8BF7\u6C42\uFF08\u4E2D\uFF09</h1><p><em>\u53D1\u5E03\u4E8E 2019-11-17</em></p><p>\u672C\u7BC7\u5C06\u63D0\u4F9B\u4EE5\u4E0B\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li>\u5982\u4F55\u5728\u4E91\u51FD\u6570\u4E2D\u4FBF\u6377\u5F97\u8BFB\u5199 Cookie\uFF1F</li><li>\u5728 Serverless \u4E2D\u5982\u4F55\u5B58\u50A8\u548C\u4F7F\u7528 Session\uFF1F</li><li>\u5982\u4F55\u4F7F\u7528\u5165\u53C2\u6821\u9A8C\u6765\u907F\u514D\u6076\u610F\u653B\u51FB\uFF1F</li></ul><h2 id="\u5982\u4F55\u5728\u4E91\u51FD\u6570\u4E2D\u4FBF\u6377\u5F97\u8BFB\u5199-cookie" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728\u4E91\u51FD\u6570\u4E2D\u4FBF\u6377\u5F97\u8BFB\u5199-cookie" aria-hidden="true">#</a> \u5982\u4F55\u5728\u4E91\u51FD\u6570\u4E2D\u4FBF\u6377\u5F97\u8BFB\u5199 Cookie\uFF1F</h2><p>\u539F\u751F\u4E91\u51FD\u6570\u662F\u901A\u8FC7 Context \u4E2D\u7684 headers \u6765\u4F20\u5165 cookie \u4FE1\u606F\uFF0C\u901A\u8FC7\u8FD4\u56DE headers \u7684 set-cookie \u6765\u5199\u5165 cookie\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u663E\u7136\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\u4E0D\u591F\u53CB\u597D\uFF0C\u6240\u4EE5 FaasJS \u5C06\u5176\u8BFB\u5199\u64CD\u4F5C\u5C01\u88C5\u5230\u4E86 @faasjs/http \u63D2\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6765\u8BFB\u5199 cookie\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u521B\u5EFA http \u63D2\u4EF6\u5B9E\u4F8B</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5C06 http \u63D2\u4EF6\u5B9E\u4F8B\u653E\u5230\u4E91\u51FD\u6570\u7684\u63D2\u4EF6\u4E2D</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BFB\u53D6 cookie</span>
    http<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5199\u5165 cookie</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5728-serverless-\u4E2D\u5982\u4F55\u5B58\u50A8\u548C\u4F7F\u7528-session" tabindex="-1"><a class="header-anchor" href="#\u5728-serverless-\u4E2D\u5982\u4F55\u5B58\u50A8\u548C\u4F7F\u7528-session" aria-hidden="true">#</a> \u5728 Serverless \u4E2D\u5982\u4F55\u5B58\u50A8\u548C\u4F7F\u7528 Session\uFF1F</h2><p>\u5728 Serverless \u573A\u666F\u4E0B\uFF0C\u6BCF\u4E2A\u4E91\u51FD\u6570\u90FD\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\uFF0C\u82E5\u7EDF\u4E00\u5904\u7406 Session \u4F1A\u9020\u6210\u8F83\u5927\u7684\u6027\u80FD\u635F\u8017\u3002</p><p>\u56E0\u6B64\u4E3A\u4E86\u4F7F\u5404\u4E2A\u4E91\u51FD\u6570\u80FD\u72EC\u81EA\u5904\u7406 Session \u4FE1\u606F\uFF0C\u63A8\u8350\u5C06 Session \u52A0\u5BC6\u5B58\u50A8\u4E8E Cookie \u4E2D\uFF0C\u5E76\u4E14\u4E3A\u4E86\u907F\u514D Cookie \u4FE1\u606F\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u4EC5\u5B58\u50A8\u5FC5\u987B\u7684\u4FE1\u606F\uFF0C\u5982 user_id \u4E4B\u7C7B\u3002</p><p>Session \u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>http<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5C06 session \u4E2D\u7684 distinct_id \u5199\u5165\u4E3A user_id</span>
    http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;user_id&#39;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&#39;distinct_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5165\u53C2\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5165\u53C2\u6821\u9A8C" aria-hidden="true">#</a> \u5165\u53C2\u6821\u9A8C</h2><p>\u968F\u7740\u7F51\u7EDC\u5B89\u5168\u53D8\u5F97\u8D8A\u6765\u8D8A\u91CD\u8981\uFF0CFaasJS \u4E2D\u4E5F\u5185\u7F6E\u4E86\u5165\u53C2\u6821\u9A8C\u6765\u907F\u514D\u4E00\u4E9B\u653B\u51FB\u884C\u4E3A\u3002\u5165\u53C2\u6821\u9A8C\u4E3B\u8981\u652F\u6301\u4EE5\u4E0B\u529F\u80FD\uFF1A</p><ul><li>\u652F\u6301\u6821\u9A8C\u8BF7\u6C42\u53C2\u6570\u3001Cookie \u548C Session\uFF1B</li><li>\u652F\u6301\u5165\u53C2\u767D\u540D\u5355\u914D\u7F6E\uFF0C\u5F53\u9047\u5230\u975E\u767D\u540D\u5355\u4E2D\u7684\u5165\u53C2\u65F6\uFF0C\u53EF\u4EE5\u62A5\u9519\u6216\u5220\u9664\uFF1B</li><li>\u6821\u9A8C\u89C4\u5219\u5305\u62EC\uFF1A\u5FC5\u586B\u6821\u9A8C\u3001\u7C7B\u578B\u6821\u9A8C\u3001\u679A\u4E3E\u503C\u6821\u9A8C\u3001\u8BBE\u5B9A\u9ED8\u8BA4\u503C\uFF1B</li><li>\u6821\u9A8C\u89C4\u5219\u652F\u6301\u591A\u5C42\u6821\u9A8C\uFF0C\u7528\u4E8E\u6821\u9A8C object \u548C array \u7C7B\u578B\u3002</li></ul><p>\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  validator<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u914D\u7F6E\u5165\u53C2\u6821\u9A8C</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6821\u9A8C\u8BF7\u6C42\u53C2\u6570</span>
      whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u82E5\u53D1\u73B0\u975E\u767D\u540D\u5355\u5165\u53C2\u5C31\u62A5\u9519</span>
      rules<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u6BCF\u4E2A\u53C2\u6570\u7684\u6821\u9A8C\u89C4\u5219</span>
        key<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u53C2\u6570\u540D</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B</span>
          type<span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u53C2\u6570\u7C7B\u578B</span>
          config<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u591A\u5C42\u6821\u9A8C</span>
            whitelist<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
            rules<span class="token operator">:</span> <span class="token punctuation">{</span>
              subKey<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u53C2\u6570\u540D</span>
                <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u679A\u4E3E\u503C\u6821\u9A8C</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// \u8BBE\u5B9A\u9ED8\u8BA4\u503C</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u5165\u53C2\u6821\u9A8C\u529F\u80FD\u652F\u6301 Session\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4EE5\u6B64\u6765\u8FDB\u884C\u7B80\u5355\u7684\u9274\u6743\u3002\u6BD4\u5982\u5BF9 Session \u4E2D\u7684 user_id \u8FDB\u884C\u5FC5\u586B\u6821\u9A8C\uFF0C\u6765\u5224\u65AD\u7528\u6237\u662F\u5426\u5DF2\u767B\u5F55\u3002</p>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","2019-11-17.html.vue"]]);export{r as default};