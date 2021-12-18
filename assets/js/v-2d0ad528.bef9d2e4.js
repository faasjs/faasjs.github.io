"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[3737],{7607:(s,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-2d0ad528",path:"/zh/",title:"",lang:"zh-CN",frontmatter:{home:!0,heroImage:"/logo.jpg",heroText:"FaasJS",tagline:null,footer:"一个基于 Typescript 的原子化应用框架 | MIT Licensed | Copyright © 2019-2022 Zhu Feng"},excerpt:"",headers:[{level:2,title:"为什么要使用 FaasJS ？",slug:"为什么要使用-faasjs",children:[{level:3,title:"开发效率高",slug:"开发效率高",children:[]},{level:3,title:"可维护性高",slug:"可维护性高",children:[]},{level:3,title:"可扩展性高",slug:"可扩展性高",children:[]}]},{level:2,title:"代码示例",slug:"代码示例",children:[{level:3,title:"云函数文件",slug:"云函数文件",children:[]}]},{level:2,title:"单元测试文件",slug:"单元测试文件",children:[]},{level:2,title:"立即开始",slug:"立即开始",children:[]}],filePathRelative:"zh/README.md",git:{updatedTime:1639804373e3}}},5718:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const t=(0,n(6252).uE)('<div style="width:100%;text-align:center;font-size:1.6rem;line-height:2;color:#6a8bad;margin-bottom:2em;">一个基于 Typescript 的原子化应用框架</div><h2 id="为什么要使用-faasjs" tabindex="-1"><a class="header-anchor" href="#为什么要使用-faasjs" aria-hidden="true">#</a> 为什么要使用 FaasJS ？</h2><h3 id="开发效率高" tabindex="-1"><a class="header-anchor" href="#开发效率高" aria-hidden="true">#</a> 开发效率高</h3><p>原子化的开发模式，可以让开发和迭代降低到羽量级的程度，对团队开发也更友好。</p><p>FaasJS 官方提供了诸如 HTTP、Knex 等插件，使开发者可以立刻上手开发业务。</p><h3 id="可维护性高" tabindex="-1"><a class="header-anchor" href="#可维护性高" aria-hidden="true">#</a> 可维护性高</h3><p>FaaS 架构保证了云函数之间的独立性，避免单一错误导致整个系统的故障。</p><p>FaasJS 内置自动化测试工具，方便开发者对云函数进行自动化测试。</p><h3 id="可扩展性高" tabindex="-1"><a class="header-anchor" href="#可扩展性高" aria-hidden="true">#</a> 可扩展性高</h3><p>FaasJS 拥有简单易用的插件机制，可以让开发者可以自由扩展功能和插件。</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><h3 id="云函数文件" tabindex="-1"><a class="header-anchor" href="#云函数文件" aria-hidden="true">#</a> 云函数文件</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// index.func.ts 文件，云函数文件名都以 .func.ts 结尾</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">useHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 引入 http 插件</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Hello, world&#39;</span> <span class="token comment">// 返回的内容</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="单元测试文件" tabindex="-1"><a class="header-anchor" href="#单元测试文件" aria-hidden="true">#</a> 单元测试文件</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// __tests__/index.test.ts 文件，单元测试文件名都以 .test.ts 结尾</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span>\n<span class="token keyword">import</span> Func <span class="token keyword">from</span> <span class="token string">&#39;../index.func&#39;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should work&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 引用云函数文件</span>\n    <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarper</span><span class="token punctuation">(</span>Func<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 模拟调用</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> statusCode<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">JSONhandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 返回 200 状态</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>\n    <span class="token comment">// 返回的 data 内容为 &#39;Hello, world&#39;</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="立即开始" tabindex="-1"><a class="header-anchor" href="#立即开始" aria-hidden="true">#</a> 立即开始</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx create-faas-app --name faasjs --example --noprovider\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div style="padding:0 2.5rem;text-align:center;"><div class="features"><div style="flex-grow:1;flex-basis:100%;line-height:1.6;"><a href="https://github.com/faasjs/faasjs"><img src="https://badgen.net/github/last-commit/faasjs/faasjs"></a><br><a href="https://github.com/faasjs/faasjs/blob/main/packages/faasjs/LICENSE"><img src="https://img.shields.io/npm/l/faasjs.svg"></a><a href="https://www.npmjs.com/package/faasjs"><img src="https://img.shields.io/npm/v/faasjs/beta.svg"></a><br><a href="https://github.com/faasjs/faasjs/actions/workflows/unit.yml"><img src="https://github.com/faasjs/faasjs/actions/workflows/unit.yml/badge.svg"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/lint.yml"><img src="https://github.com/faasjs/faasjs/actions/workflows/lint.yml/badge.svg"></a><br><a href="https://codecov.io/gh/faasjs/faasjs"><img src="https://img.shields.io/codecov/c/github/faasjs/faasjs.svg"></a><a href="https://github.com/faasjs/faasjs"><img src="https://badgen.net/lgtm/lines/g/faasjs/faasjs"></a><a href="https://github.com/faasjs/faasjs"><img src="https://badgen.net/github/commits/faasjs/faasjs"></a></div><div style="margin:1em auto;"><div>欢迎关注 FaasJS 作者的公众号（寂静小站）与我交流：</div><img src="https://user-images.githubusercontent.com/215433/59484397-31098900-8ea4-11e9-9971-0fa0c7aafccb.jpg" alt="公众号 寂静小站"></div></div><hr style="clear:both;"><div style="margin-bottom:2em;"><h3>感谢</h3><p>代码贡献者（按字母排序）</p><a href="https://github.com/luckyporo" target="_blank">luckyporo</a>, <a href="https://github.com/onichandame" target="_blank">onichandame</a>, <a href="https://github.com/Vibutnum" target="_blank">Vibutnum</a>, <a href="https://github.com/victoryifei" target="_blank">victoryifei</a>, <a href="https://github.com/zfben" target="_blank">zfben</a><p>FaasJS 基于以下开源项目（按字母排序）</p><a href="https://www.apollographql.com/" target="_blank">Apollo</a>, <a href="https://babeljs.io/" target="_blank">Babel</a>, <a href="https://eslint.org/" target="_blank">ESLint</a>, <a href="https://jestjs.io/" target="_blank">Jest</a>, <a href="https://knexjs.org/" target="_blank">Knex</a>, <a href="https://nodejs.org/" target="_blank">Node.js</a>, <a href="https://rollupjs.org/" target="_blank">Rollup.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a></div></div>',18),e={},p=(0,n(3744).Z)(e,[["render",function(s,a){return t}]])},3744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,t]of a)n[s]=t;return n}}}]);