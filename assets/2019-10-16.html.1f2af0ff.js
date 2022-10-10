import{_ as n,o as s,c as a,a as p}from"./app.2218cd7f.js";const t={},e=p(`<h1 id="serverless-\u6700\u4F73\u5B9E\u8DF5\u4E4B\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u548C\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#serverless-\u6700\u4F73\u5B9E\u8DF5\u4E4B\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u548C\u67E5\u8BE2" aria-hidden="true">#</a> Serverless \u6700\u4F73\u5B9E\u8DF5\u4E4B\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u548C\u67E5\u8BE2</h1><p><em>\u53D1\u5E03\u4E8E 2019-10-16</em></p><p>Serverless \u6700\u4F73\u5B9E\u8DF5\u7684\u7B2C\u4E8C\u8BB2\u6765\u4E86\uFF0C\u672C\u8BB2\u5C06\u5E2E\u4F60 Get \u4EE5\u4E0B\u6280\u5DE7\uFF1A</p><ul><li>\u5229\u7528\u4E91\u51FD\u6570\u7684\u751F\u547D\u5468\u671F\u6765\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u964D\u4F4E\u8FDE\u63A5\u6570\u5E76\u63D0\u5347\u6027\u80FD</li><li>\u4F7F\u7528 Knex \u7B80\u5316 Sql \u62FC\u63A5\uFF0C\u5E76\u4E0E TypeScript \u7ED3\u5408\u63D0\u5347\u4EE3\u7801\u8D28\u91CF</li><li>\u9002\u65F6\u5206\u5E93\u63D0\u5347\u6570\u636E\u5E93\u6027\u80FD\u3001\u964D\u4F4E\u8026\u5408\u548C\u907F\u514D\u8FC7\u9AD8\u7684\u8FDE\u63A5\u6570</li></ul><h2 id="_1-\u5229\u7528\u4E91\u51FD\u6570\u7684\u751F\u547D\u5468\u671F\u6765\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_1-\u5229\u7528\u4E91\u51FD\u6570\u7684\u751F\u547D\u5468\u671F\u6765\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5" aria-hidden="true">#</a> 1. \u5229\u7528\u4E91\u51FD\u6570\u7684\u751F\u547D\u5468\u671F\u6765\u7BA1\u7406\u6570\u636E\u5E93\u8FDE\u63A5</h2><p>\u5728\u7B2C\u4E00\u8BB2\u4E91\u51FD\u6570\u7684\u751F\u547D\u5468\u671F\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u63D0\u5230\u4E86\u5728\u4E91\u51FD\u6570 Mount \u9636\u6BB5\u521B\u5EFA\u6570\u636E\u5E93\u8FDE\u63A5\u5E26\u6765\u7684\u4E24\u65B9\u9762\u597D\u5904\uFF1A</p><ol><li>\u6709\u6548\u964D\u4F4E\u6570\u636E\u5E93\u8FDE\u63A5\u6570\uFF08\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5 -&gt; \u6BCF\u4E2A\u5B9E\u4F8B\u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5\uFF09</li><li>\u6027\u80FD\u4F18\u5316\uFF08\u6BCF\u4E2A\u8BF7\u6C42\u521B\u5EFA\u4E00\u4E2A\u8FDE\u63A5 -&gt; \u591A\u4E2A\u8BF7\u6C42\u590D\u7528\u5B9E\u4F8B\u7684\u8FDE\u63A5\uFF09</li></ol><p>\u6211\u4EEC\u518D\u56DE\u987E\u4E00\u4E0B\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS \u7684\u4E91\u51FD\u6570\u7C7B</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS \u7684 Sql \u63D2\u4EF6</span>

<span class="token comment">// \u521D\u59CB\u5316\u6570\u636E\u5E93\u5BF9\u8C61</span>
<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD4\u56DE\u4E91\u51FD\u6570\u5B9E\u4F8B</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>sql<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u4EF6\u7BA1\u7406\uFF0CFaasJS \u5C06\u81EA\u52A8\u7BA1\u7406\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> sql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;SELECT * FROM users WHERE id = ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FaasJS \u7684 Sql \u63D2\u4EF6\u652F\u6301 Mysql\u3001PostgreSql \u548C Sqlite \u53CA\u652F\u6301\u8FD9\u4E09\u7C7B\u6570\u636E\u5E93\u534F\u8BAE\u7684\u6570\u636E\u5E93\uFF0C\u4E14\u5DF2\u7ECF\u5185\u90E8\u5C01\u88C5\u4E86\u57FA\u4E8E\u4E91\u51FD\u6570\u751F\u547D\u5468\u671F\u673A\u5236\u7684\u6700\u4F73\u5B9E\u8DF5\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u76F4\u63A5\u4F7F\u7528\u5373\u53EF\u3002</p><h2 id="_2-\u4F7F\u7528-knex\u3001typescript-\u7ED3\u5408\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u8D28\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-knex\u3001typescript-\u7ED3\u5408\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u8D28\u91CF" aria-hidden="true">#</a> 2. \u4F7F\u7528 Knex\u3001TypeScript \u7ED3\u5408\u63D0\u5347\u5F00\u53D1\u6548\u7387\u548C\u8D28\u91CF</h2><p>Knex \u662F\u4E00\u4E2A SQL \u8BED\u53E5\u751F\u6210\u63D2\u4EF6\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E0E TypeScript \u7ED3\u5408\uFF0C\u5927\u5E45\u7B80\u5316\u5F00\u53D1\u8005\u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u3002</p><p>\u6211\u4EEC\u76F4\u63A5\u770B\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// user.func.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS \u7684\u4E91\u51FD\u6570\u7C7B</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS \u7684 Sql \u63D2\u4EF6</span>
<span class="token keyword">import</span> knex <span class="token keyword">from</span> <span class="token string">&#39;knex&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528 TypeScript \u6765\u5B9A\u4E49\u7528\u6237\u8868\u7684\u7ED3\u6784</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521D\u59CB\u5316\u6570\u636E\u5E93\u5BF9\u8C61</span>
<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD4\u56DE\u4E91\u51FD\u6570\u5B9E\u4F8B</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>sql<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u63D2\u4EF6\u7BA1\u7406\uFF0CFaasJS \u5C06\u81EA\u52A8\u7BA1\u7406\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F</span>
  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \u4E1A\u52A1\u4EE3\u7801</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token generic-function"><span class="token function">knex</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        client<span class="token operator">:</span> sql<span class="token punctuation">.</span>adapterType
      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u544A\u8BC9 Knex \u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u5E93\u7684\u7C7B\u578B</span>
      <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u544A\u8BC9 Knex \u8868\u540D</span>
      <span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span>sql<span class="token punctuation">.</span>adapter<span class="token operator">!</span><span class="token punctuation">.</span>pool<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u590D\u7528 sql \u63D2\u4EF6\u81EA\u52A8\u7EF4\u62A4\u7684\u6570\u636E\u5E93\u8FDE\u63A5</span>

    <span class="token keyword">return</span> <span class="token keyword">await</span> users<span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Knex \u5F62\u5F0F\u7684\u6570\u636E\u5E93\u67E5\u8BE2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\u6709\u4E24\u4E2A\u8981\u70B9\uFF1A</p><ol><li>Knex \u652F\u6301\u4F7F\u7528 TypeScript \u7684 interface \u4F5C\u4E3A\u8FD4\u56DE\u6570\u636E\u7C7B\u578B</li><li>sql \u63D2\u4EF6\u9700\u8981\u628A\u8FDE\u63A5\u6C60\u6CE8\u5165\u5230 Knex \u4E2D\u4EE5\u5229\u7528\u4E91\u51FD\u6570\u7684\u751F\u547D\u5468\u671F\u6765\u7BA1\u7406\u8FDE\u63A5</li></ol><p>\u6309\u4E0A\u9762\u7684\u5199\u6CD5\uFF0C\u4E91\u51FD\u6570\u672C\u8EAB\u7684\u4E1A\u52A1\u4EE3\u7801\u662F\u6CA1\u95EE\u9898\u4E86\uFF0C\u4F46 Knex \u8FD8\u652F\u6301\u5EFA\u8868\u4E4B\u7C7B\u7684\u64CD\u4F5C\uFF0C\u5BF9\u4E8E\u81EA\u52A8\u5316\u6D4B\u8BD5\u662F\u975E\u5E38\u6709\u7528\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u518D\u6DF1\u5165\u770B\u4E00\u4E0B\u81EA\u52A8\u5316\u6D4B\u8BD5\u811A\u672C\u600E\u4E48\u5199\u66F4\u597D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// __tests__/user.test.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarpper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS \u5BF9\u4E91\u51FD\u6570\u7684\u6D4B\u8BD5\u7528\u5C01\u88C5</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5F15\u5165 Sql \u63D2\u4EF6</span>
<span class="token keyword">import</span> knex <span class="token keyword">from</span> <span class="token string">&#39;knex&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5F15\u5165 knex \u63D2\u4EF6</span>

<span class="token comment">// FaasJS \u4F7F\u7528 Jest \u4F5C\u4E3A\u6D4B\u8BD5\u6846\u67B6</span>
<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> func<span class="token operator">:</span> FuncWarpper<span class="token punctuation">;</span>

  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u751F\u6210\u4E91\u51FD\u6570</span>
    func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarpper</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;../user.func&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4E3A\u4E86\u4FBF\u4E8E\u6D4B\u8BD5\u811A\u672C\u4E2D\u5BF9\u6570\u636E\u5E93\u5404\u79CD\u64CD\u4F5C\uFF0C\u6211\u4EEC\u628A sql \u63D2\u4EF6\u5B9E\u4F8B\u653E\u4E2A\u5FEB\u6377\u65B9\u5F0F\u5728 func \u5BF9\u8C61\u4E0A</span>
    func<span class="token punctuation">.</span>sql <span class="token operator">=</span> func<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> Sql<span class="token punctuation">;</span>

    <span class="token comment">// \u7531\u4E8E\u6570\u636E\u5E93\u8FDE\u63A5\u662F\u5728 mount \u9636\u6BB5\u751F\u6210\u7684\uFF0C\u56E0\u6B64\u8FD9\u91CC\u5148 mount \u4E00\u4E0B</span>
    <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">mountedHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5EFA\u8868</span>
    <span class="token keyword">await</span> <span class="token function">knex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      client<span class="token operator">:</span> func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapterType
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>schema
      <span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapter<span class="token operator">!</span><span class="token punctuation">.</span>pool<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">dropTableIfExists</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">notNullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        t<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">notNullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should work&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u63D2\u5165\u5047\u6570\u636E</span>
    <span class="token keyword">await</span> <span class="token function">knex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        client<span class="token operator">:</span> func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapterType
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapter<span class="token operator">!</span><span class="token punctuation">.</span>pool<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528\u4E91\u51FD\u6570</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u68C0\u67E5\u8FD4\u56DE\u7ED3\u679C\u662F\u5426\u7B26\u5408\u9884\u671F</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7559\u4E00\u4E2A\u5C0F\u95EE\u9898\uFF1A\u5F53\u591A\u4E2A\u4E91\u51FD\u6570\u90FD\u9700\u8981\u8C03\u7528\u8FD9\u4E2A\u6570\u636E\u8868\u65F6\uFF0C\u5982\u4F55\u5C01\u88C5\u6BD4\u8F83\u597D\u5462\uFF1F\uFF08\u7B54\u6848\u89C1\u540E\u6587\uFF09</p><h2 id="_3-\u9002\u65F6\u5206\u5E93-\u964D\u4F4E\u8026\u5408" tabindex="-1"><a class="header-anchor" href="#_3-\u9002\u65F6\u5206\u5E93-\u964D\u4F4E\u8026\u5408" aria-hidden="true">#</a> 3. \u9002\u65F6\u5206\u5E93\uFF0C\u964D\u4F4E\u8026\u5408</h2><p>\u968F\u7740\u4E1A\u52A1\u589E\u957F\uFF0C\u5FC5\u7136\u4F1A\u9047\u5230\u6570\u636E\u79CD\u7C7B\u548C\u6570\u91CF\u8D8A\u6765\u8D8A\u591A\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u5927\u91CF\u7684\u4E91\u51FD\u6570\u90FD\u8FDE\u63A5\u5230\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u5FC5\u7136\u4F1A\u5BF9\u8BE5\u6570\u636E\u5E93\u9020\u6210\u8F83\u5927\u7684\u538B\u529B\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u5728\u5F00\u53D1\u5230\u4E00\u5B9A\u7A0B\u5EA6\u65F6\uFF0C\u63D0\u524D\u8FDB\u884C\u5206\u5E93\u64CD\u4F5C\uFF0C\u5BF9\u6570\u636E\u548C\u4EE3\u7801\u8FDB\u884C\u89E3\u8026\u3002</p><p>FaasJS \u7684\u6587\u4EF6\u5939\u7ED3\u6784\u5929\u7136\u652F\u6301\u5206\u5E93\uFF0C\u5047\u8BBE\u6211\u4EEC\u628A users \u8868\u548C orders \u5206\u62C6\u4E3A\u4E24\u4E2A\u6570\u636E\u5E93\uFF0C\u5219\u53EA\u9700\u5C06\u5B83\u4EEC\u5206\u522B\u653E\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u6587\u4EF6\u5939\u91CC\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u5939\u91CC\u72EC\u81EA\u914D\u7F6E\u5404\u81EA\u7684 faas.yaml \u5373\u53EF\u3002</p><p>\u5177\u4F53\u793A\u4F8B\u53EF\u4EE5\u70B9\u51FB\u4E0B\u65B9\u7684\u201C\u9605\u8BFB\u539F\u6587\u201D\uFF0C\u67E5\u770B\u6211\u5728 Github \u4E0A\u5199\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u793A\u4F8B\u4EE3\u7801\u4E2D\u5305\u62EC\u4E86\u4EE5\u4E0B\u6700\u4F73\u5B9E\u8DF5\u793A\u4F8B\uFF1A</p><ul><li>\u57FA\u4E8E Knex \u548C TypeScript \u5B9A\u4E49\u5171\u7528\u6570\u636E\u8868</li><li>\u57FA\u4E8E\u6587\u4EF6\u5939\u6765\u5206\u5E93\u5206\u4E1A\u52A1</li></ul>`,24),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","2019-10-16.html.vue"]]);export{k as default};