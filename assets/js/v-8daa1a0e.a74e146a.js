"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[2509],{4958:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-8daa1a0e",path:"/",title:"",lang:"en-US",frontmatter:{home:!0,heroImage:"/logo.jpg",heroText:"FaasJS",tagline:null,footer:"An Atomic Application Framework based on Typescript | MIT Licensed | Copyright © 2019-2022 Zhu Feng"},excerpt:"",headers:[{level:2,title:"Features",slug:"features",children:[{level:3,title:"High development efficiency",slug:"high-development-efficiency",children:[]},{level:3,title:"High maintainability",slug:"high-maintainability",children:[]},{level:3,title:"High scalability",slug:"high-scalability",children:[]}]},{level:2,title:"Example",slug:"example",children:[{level:3,title:"Cloud function's file",slug:"cloud-function-s-file",children:[]}]},{level:2,title:"Unit test's file",slug:"unit-test-s-file",children:[]},{level:2,title:"Get Started",slug:"get-started",children:[]}],filePathRelative:"README.md",git:{updatedTime:1639804373e3}}},139:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const e=(0,n(6252).uE)('<div style="width:100%;text-align:center;font-size:1.6rem;line-height:2;color:#6a8bad;margin-bottom:2em;">An Atomic Application Framework based on Typescript.</div><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><h3 id="high-development-efficiency" tabindex="-1"><a class="header-anchor" href="#high-development-efficiency" aria-hidden="true">#</a> High development efficiency</h3><p>The atomized development model can reduce development and iteration to a featherweight level and is more friendly to team development.</p><p>FaasJS officially provides plugins such as HTTP, Knex, etc., so that developers can start developing business immediately.</p><h3 id="high-maintainability" tabindex="-1"><a class="header-anchor" href="#high-maintainability" aria-hidden="true">#</a> High maintainability</h3><p>The FaaS architecture guarantees the independence between cloud functions and prevents a single error from causing the failure of the entire system.</p><p>FaasJS has built-in automated testing tools to facilitate developers to automate the testing of cloud functions.</p><h3 id="high-scalability" tabindex="-1"><a class="header-anchor" href="#high-scalability" aria-hidden="true">#</a> High scalability</h3><p>FaasJS has a simple and easy-to-use plug-in mechanism that allows developers to extend functions and plugins freely.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><h3 id="cloud-function-s-file" tabindex="-1"><a class="header-anchor" href="#cloud-function-s-file" aria-hidden="true">#</a> Cloud function&#39;s file</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// index.func.ts</span>\n<span class="token comment">// all cloud function file should be ended with .func.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useFunc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useHttp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/http&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">useFunc</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">useHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// use http plugin</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;Hello, world&#39;</span> <span class="token comment">// response content</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="unit-test-s-file" tabindex="-1"><a class="header-anchor" href="#unit-test-s-file" aria-hidden="true">#</a> Unit test&#39;s file</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// __tests__/index.test.ts</span>\n<span class="token comment">// all unit test file should be ended with .test.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span>\n<span class="token keyword">import</span> Func <span class="token keyword">from</span> <span class="token string">&#39;../index.func&#39;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should work&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// wrap the cloud function</span>\n    <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarper</span><span class="token punctuation">(</span>Func<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// mock the request</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> statusCode<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">JSONhandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// expect the response with 200 status</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>\n    <span class="token comment">// expect the response content is &#39;Hello, world&#39;</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get Started</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx create-faas-app --name faasjs --example --noprovider\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div style="padding:0 2.5rem;text-align:center;"><div class="features"><div style="flex-grow:1;flex-basis:100%;line-height:1.6;"><a href="https://github.com/faasjs/faasjs"><img src="https://badgen.net/github/last-commit/faasjs/faasjs"></a><br><a href="https://github.com/faasjs/faasjs/blob/main/packages/faasjs/LICENSE"><img src="https://img.shields.io/npm/l/faasjs.svg"></a><a href="https://www.npmjs.com/package/faasjs"><img src="https://img.shields.io/npm/v/faasjs/beta.svg"></a><br><a href="https://github.com/faasjs/faasjs/actions/workflows/unit.yml"><img src="https://github.com/faasjs/faasjs/actions/workflows/unit.yml/badge.svg"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/lint.yml"><img src="https://github.com/faasjs/faasjs/actions/workflows/lint.yml/badge.svg"></a><br><a href="https://codecov.io/gh/faasjs/faasjs"><img src="https://img.shields.io/codecov/c/github/faasjs/faasjs.svg"></a><a href="https://github.com/faasjs/faasjs"><img src="https://badgen.net/lgtm/lines/g/faasjs/faasjs"></a><a href="https://github.com/faasjs/faasjs"><img src="https://badgen.net/github/commits/faasjs/faasjs"></a></div></div><hr style="clear:both;"><div style="margin-bottom:2em;"><h3>Thanks</h3><p>Code contributors (in alphabetical order):</p><a href="https://github.com/luckyporo" target="_blank">luckyporo</a>, <a href="https://github.com/onichandame" target="_blank">onichandame</a>, <a href="https://github.com/Vibutnum" target="_blank">Vibutnum</a>, <a href="https://github.com/victoryifei" target="_blank">victoryifei</a>, <a href="https://github.com/zfben" target="_blank">zfben</a><p>FaasJS is based on the following open source projects (in alphabetical order):</p><a href="https://www.apollographql.com/" target="_blank">Apollo</a>, <a href="https://babeljs.io/" target="_blank">Babel</a>, <a href="https://eslint.org/" target="_blank">ESLint</a>, <a href="https://jestjs.io/" target="_blank">Jest</a>, <a href="https://knexjs.org/" target="_blank">Knex</a>, <a href="https://nodejs.org/" target="_blank">Node.js</a>, <a href="https://rollupjs.org/" target="_blank">Rollup.js</a>, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a></div></div>',18),t={},p=(0,n(3744).Z)(t,[["render",function(s,a){return e}]])},3744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,e]of a)n[s]=e;return n}}}]);