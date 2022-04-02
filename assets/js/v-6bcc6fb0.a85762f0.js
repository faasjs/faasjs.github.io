"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[2175],{2840:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-6bcc6fb0",path:"/zh/blog/2019-10-16.html",title:"Serverless 最佳实践之数据库的连接和查询",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 利用云函数的生命周期来管理数据库连接",slug:"_1-利用云函数的生命周期来管理数据库连接",children:[]},{level:2,title:"2. 使用 Knex、TypeScript 结合提升开发效率和质量",slug:"_2-使用-knex、typescript-结合提升开发效率和质量",children:[]},{level:2,title:"3. 适时分库，降低耦合",slug:"_3-适时分库-降低耦合",children:[]}],git:{updatedTime:16488597e5},filePathRelative:"zh/blog/2019-10-16.md"}},1506:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="serverless-最佳实践之数据库的连接和查询" tabindex="-1"><a class="header-anchor" href="#serverless-最佳实践之数据库的连接和查询" aria-hidden="true">#</a> Serverless 最佳实践之数据库的连接和查询</h1><p><em>发布于 2019-10-16</em></p><p>Serverless 最佳实践的第二讲来了，本讲将帮你 Get 以下技巧：</p><ul><li>利用云函数的生命周期来管理数据库连接，降低连接数并提升性能</li><li>使用 Knex 简化 Sql 拼接，并与 TypeScript 结合提升代码质量</li><li>适时分库提升数据库性能、降低耦合和避免过高的连接数</li></ul><h2 id="_1-利用云函数的生命周期来管理数据库连接" tabindex="-1"><a class="header-anchor" href="#_1-利用云函数的生命周期来管理数据库连接" aria-hidden="true">#</a> 1. 利用云函数的生命周期来管理数据库连接</h2><p>在第一讲云函数的生命周期中，我们已经提到了在云函数 Mount 阶段创建数据库连接带来的两方面好处：</p><ol><li>有效降低数据库连接数（每个请求创建一个连接 -&gt; 每个实例创建一个连接）</li><li>性能优化（每个请求创建一个连接 -&gt; 多个请求复用实例的连接）</li></ol><p>我们再回顾一下示例代码：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS 的云函数类</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS 的 Sql 插件</span>\n\n<span class="token comment">// 初始化数据库对象</span>\n<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 返回云函数实例</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>sql<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 插件管理，FaasJS 将自动管理插件的生命周期</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 业务代码</span>\n    <span class="token keyword">return</span> <span class="token keyword">await</span> sql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;SELECT * FROM users WHERE id = ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>FaasJS 的 Sql 插件支持 Mysql、PostgreSql 和 Sqlite 及支持这三类数据库协议的数据库，且已经内部封装了基于云函数生命周期机制的最佳实践，开发者只需直接使用即可。</p><h2 id="_2-使用-knex、typescript-结合提升开发效率和质量" tabindex="-1"><a class="header-anchor" href="#_2-使用-knex、typescript-结合提升开发效率和质量" aria-hidden="true">#</a> 2. 使用 Knex、TypeScript 结合提升开发效率和质量</h2><p>Knex 是一个 SQL 语句生成插件，并且可以与 TypeScript 结合，大幅简化开发者对数据库的操作。</p><p>我们直接看代码示例：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// user.func.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS 的云函数类</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS 的 Sql 插件</span>\n<span class="token keyword">import</span> knex <span class="token keyword">from</span> <span class="token string">&#39;knex&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 使用 TypeScript 来定义用户表的结构</span>\n<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 初始化数据库对象</span>\n<span class="token keyword">const</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 返回云函数实例</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>sql<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 插件管理，FaasJS 将自动管理插件的生命周期</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 业务代码</span>\n    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token generic-function"><span class="token function">knex</span><span class="token generic class-name"><span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        client<span class="token operator">:</span> sql<span class="token punctuation">.</span>adapterType\n      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 告诉 Knex 返回的数据类型和数据库的类型</span>\n      <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 告诉 Knex 表名</span>\n      <span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span>sql<span class="token punctuation">.</span>adapter<span class="token operator">!</span><span class="token punctuation">.</span>pool<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 复用 sql 插件自动维护的数据库连接</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">await</span> users<span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Knex 形式的数据库查询</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>上面的代码中有两个要点：</p><ol><li>Knex 支持使用 TypeScript 的 interface 作为返回数据类型</li><li>sql 插件需要把连接池注入到 Knex 中以利用云函数的生命周期来管理连接</li></ol><p>按上面的写法，云函数本身的业务代码是没问题了，但 Knex 还支持建表之类的操作，对于自动化测试是非常有用的，所以我们再深入看一下自动化测试脚本怎么写更好：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// __tests__/user.test.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarpper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span><span class="token punctuation">;</span> <span class="token comment">// FaasJS 对云函数的测试用封装</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/sql&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 引入 Sql 插件</span>\n<span class="token keyword">import</span> knex <span class="token keyword">from</span> <span class="token string">&#39;knex&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 引入 knex 插件</span>\n\n<span class="token comment">// FaasJS 使用 Jest 作为测试框架</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> func<span class="token operator">:</span> FuncWarpper<span class="token punctuation">;</span>\n\n  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 生成云函数</span>\n    func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarpper</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;../user.func&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 为了便于测试脚本中对数据库各种操作，我们把 sql 插件实例放个快捷方式在 func 对象上</span>\n    func<span class="token punctuation">.</span>sql <span class="token operator">=</span> func<span class="token punctuation">.</span>plugins<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> Sql<span class="token punctuation">;</span>\n\n    <span class="token comment">// 由于数据库连接是在 mount 阶段生成的，因此这里先 mount 一下</span>\n    <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">mountedHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 建表</span>\n    <span class="token keyword">await</span> <span class="token function">knex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      client<span class="token operator">:</span> func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapterType\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span>schema\n      <span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapter<span class="token operator">!</span><span class="token punctuation">.</span>pool<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">dropTableIfExists</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        t<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">notNullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        t<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">notNullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should work&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 插入假数据</span>\n    <span class="token keyword">await</span> <span class="token function">knex</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        client<span class="token operator">:</span> func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapterType\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>adapter<span class="token operator">!</span><span class="token punctuation">.</span>pool<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 调用云函数</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 检查返回结果是否符合预期</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>这里留一个小问题：当多个云函数都需要调用这个数据表时，如何封装比较好呢？（答案见后文）</p><h2 id="_3-适时分库-降低耦合" tabindex="-1"><a class="header-anchor" href="#_3-适时分库-降低耦合" aria-hidden="true">#</a> 3. 适时分库，降低耦合</h2><p>随着业务增长，必然会遇到数据种类和数量越来越多的情况，如果大量的云函数都连接到一个数据库，必然会对该数据库造成较大的压力，所以建议在开发到一定程度时，提前进行分库操作，对数据和代码进行解耦。</p><p>FaasJS 的文件夹结构天然支持分库，假设我们把 users 表和 orders 分拆为两个数据库，则只需将它们分别放在两个不同的文件夹里，每个文件夹里独自配置各自的 faas.yaml 即可。</p><p>具体示例可以点击下方的“阅读原文”，查看我在 Github 上写的示例代码，示例代码中包括了以下最佳实践示例：</p><ul><li>基于 Knex 和 TypeScript 定义共用数据表</li><li>基于文件夹来分库分业务</li></ul>',24),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);