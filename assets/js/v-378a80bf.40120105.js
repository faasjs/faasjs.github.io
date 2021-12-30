"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[3398],{2155:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-378a80bf",path:"/zh/guide/excel/graphql-server.html",title:"GraphQL-Server",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用示例",slug:"使用示例",children:[{level:3,title:"@apollo/federation",slug:"apollo-federation",children:[]},{level:3,title:"@apollo/gateway",slug:"apollo-gateway",children:[]}]}],git:{updatedTime:16408239e5},filePathRelative:"zh/guide/excel/graphql-server.md"}},6107:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var p=a(6252);const e=(0,p._)("h1",{id:"graphql-server",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#graphql-server","aria-hidden":"true"},"#"),(0,p.Uk)(" GraphQL-Server")],-1),t=(0,p.Uk)("基于 "),o={href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("Apollo Federation"),c=(0,p.Uk)(" 构建分布式 GraphQL Serverless 服务。"),r=(0,p.uE)('<p>此插件非 <code>faasjs</code> 内置，使用前请先通过 <code>npm install @faasjs/graphql-server@beta --save</code> 安装。</p><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><h3 id="apollo-federation" tabindex="-1"><a class="header-anchor" href="#apollo-federation" aria-hidden="true">#</a> @apollo/federation</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> GraphQLServer<span class="token punctuation">,</span> gql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/graphql-server&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> gqls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GraphQLServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  config<span class="token operator">:</span> <span class="token punctuation">{</span>\n    schemas<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        typeDefs<span class="token operator">:</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  extend type Query {\n    hello(name: String): Hello\n  }\n  type Hello {\n    name: String\n  }</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n        resolvers<span class="token operator">:</span> <span class="token punctuation">{</span>\n          Query<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token function">hello</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>args<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  http<span class="token operator">:</span> <span class="token punctuation">{</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;ANY&#39;</span> <span class="token comment">// 在非 production 环境下，使用 GET 请求，将默认打开 graphql 的 playground</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>gqls<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="apollo-gateway" tabindex="-1"><a class="header-anchor" href="#apollo-gateway" aria-hidden="true">#</a> @apollo/gateway</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> GraphQLServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/graphql-server&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> gqls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GraphQLServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  config<span class="token operator">:</span> <span class="token punctuation">{</span>\n    gateways<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;products&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token string">&#39;http://gql.com/products&#39;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&#39;orders&#39;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token string">&#39;http://gql.com/orders&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  http<span class="token operator">:</span> <span class="token punctuation">{</span>\n    method<span class="token operator">:</span> <span class="token string">&#39;ANY&#39;</span> <span class="token comment">// 在非 production 环境下，使用 GET 请求，将默认打开 graphql 的 playground</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>gqls<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',6),u={},i=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,p.up)("ExternalLinkIcon");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("p",null,[t,(0,p._)("a",o,[l,(0,p.Wm)(a)]),c]),r],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);