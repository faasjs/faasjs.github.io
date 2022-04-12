"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[9060],{6549:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4cb1f748",path:"/zh/doc/test.html",title:"@faasjs/test",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"package.json 配置",slug:"package-json-配置",children:[]},{level:2,title:"命令行",slug:"命令行",children:[]},{level:2,title:"编写测试用例",slug:"编写测试用例",children:[]},{level:2,title:"相关文档",slug:"相关文档",children:[]}],git:{updatedTime:1649725267e3},filePathRelative:"zh/doc/test.md"}},9767:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(6252);const p=(0,e.uE)('<h1 id="faasjs-test" tabindex="-1"><a class="header-anchor" href="#faasjs-test" aria-hidden="true">#</a> @faasjs/test</h1><p>FaasJS 内置插件，无需额外安装。</p><p>此组件用于构建自动化测试。</p><h2 id="package-json-配置" tabindex="-1"><a class="header-anchor" href="#package-json-配置" aria-hidden="true">#</a> package.json 配置</h2><p>可以在 package.json 中添加如下配置：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;verbose&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;.(jsx|tsx?)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@faasjs/jest&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;collectCoverageFrom&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;**/*.ts&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;testRegex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*\\\\.test\\\\.ts$&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;modulePathIgnorePatterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;/tmp/&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;setupFilesAfterEnv&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;@faasjs/test/lib/jest.setup.js&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><p>在完成 <code>package.json</code> 配置后，可以使用以下命令进行自动化测试：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">npm</span> <span class="token builtin class-name">exec</span> jest\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="编写测试用例" tabindex="-1"><a class="header-anchor" href="#编写测试用例" aria-hidden="true">#</a> 编写测试用例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 引入 FaasJS 的测试函数封装类</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FuncWarper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/test&#39;</span>\n<span class="token comment">// 引入云函数文件，假设云函数文件在 `../index.func`</span>\n<span class="token keyword">import</span> Func <span class="token keyword">from</span> <span class="token string">&#39;../index.func&#39;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;should work&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 读取目标云函数文件</span>\n    <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FuncWarper</span><span class="token punctuation">(</span>Func<span class="token punctuation">)</span>\n\n    <span class="token comment">// 触发云函数</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> func<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 校验响应结果</span>\n    <span class="token function">expect</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;data&quot;:&quot;Hello, world&quot;}&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>',12),t={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Jest"),c={href:"https://jestjs.io/docs/en/expect",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Jest Expect"),r={},u=(0,a(3744).Z)(r,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",t,[o,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",c,[l,(0,e.Wm)(a)])])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);