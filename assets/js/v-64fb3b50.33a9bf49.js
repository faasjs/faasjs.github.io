"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[6004],{6490:(a,s,e)=>{e.r(s),e.d(s,{data:()=>n});const n={key:"v-64fb3b50",path:"/zh/doc/browser.html",title:"@faasjs/browser",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装方法",slug:"安装方法",children:[{level:3,title:"npm",slug:"npm",children:[]},{level:3,title:"Webpack 和 CDN",slug:"webpack-和-cdn",children:[]}]},{level:2,title:"FaasBrowserClient 实例方法",slug:"faasbrowserclient-实例方法",children:[{level:3,title:"constructor (baseUrl?: string): FaasBrowserClient",slug:"constructor-baseurl-string-faasbrowserclient",children:[]},{level:3,title:"action (action: string, params?: any): Promise<Response>",slug:"action-action-string-params-any-promise-response",children:[]}]},{level:2,title:"Response 实例属性",slug:"response-实例属性",children:[]},{level:2,title:"ResponseError 实例属性",slug:"responseerror-实例属性",children:[]},{level:2,title:"在 React 或 Vue 中使用",slug:"在-react-或-vue-中使用",children:[]}],git:{updatedTime:1645923174e3},filePathRelative:"zh/doc/browser.md"}},7410:(a,s,e)=>{e.r(s),e.d(s,{default:()=>i});var n=e(6252);const r=(0,n.uE)('<h1 id="faasjs-browser" tabindex="-1"><a class="header-anchor" href="#faasjs-browser" aria-hidden="true">#</a> @faasjs/browser</h1><p>浏览器插件，用于在浏览器中请求云函数。</p><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h2><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3><pre><code>npm install @faasjs/browser --save\n</code></pre><h3 id="webpack-和-cdn" tabindex="-1"><a class="header-anchor" href="#webpack-和-cdn" aria-hidden="true">#</a> Webpack 和 CDN</h3><p>在 html 中添加如下代码：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@faasjs/browser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 webpack.config.js 中添加如下代码：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&#39;@faasjs/browser&#39;</span><span class="token operator">:</span> <span class="token string">&#39;FaasBrowserClient&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="faasbrowserclient-实例方法" tabindex="-1"><a class="header-anchor" href="#faasbrowserclient-实例方法" aria-hidden="true">#</a> FaasBrowserClient 实例方法</h2><h3 id="constructor-baseurl-string-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#constructor-baseurl-string-faasbrowserclient" aria-hidden="true">#</a> constructor (baseUrl?: string): FaasBrowserClient</h3><p>构建插件实例，<code>baseUrl</code> 为云函数网关的网址，若不传值则视为开发环境，会在当前域名下请求 <code>/_faas/</code> 路径下的接口。</p><h3 id="action-action-string-params-any-promise-response" tabindex="-1"><a class="header-anchor" href="#action-action-string-params-any-promise-response" aria-hidden="true">#</a> action (action: string, params?: any): Promise&lt;Response&gt;</h3><p>请求云函数，<code>action</code> 为云函数的路径，<code>params</code> 为传递的参数</p><h2 id="response-实例属性" tabindex="-1"><a class="header-anchor" href="#response-实例属性" aria-hidden="true">#</a> Response 实例属性</h2><ul><li><strong>status</strong> <code>number</code> 响应状态</li><li><strong>headers</strong> <code>object</code> 响应头</li><li><strong>data</strong> <code>any</code> 响应数据</li></ul><h2 id="responseerror-实例属性" tabindex="-1"><a class="header-anchor" href="#responseerror-实例属性" aria-hidden="true">#</a> ResponseError 实例属性</h2><ul><li><strong>message</strong> <code>string</code> 错误提示</li><li><strong>status</strong> <code>number</code> 响应状态</li><li><strong>headers</strong> <code>object</code> 响应头</li><li><strong>body</strong> <code>any</code> 响应体</li></ul><h2 id="在-react-或-vue-中使用" tabindex="-1"><a class="header-anchor" href="#在-react-或-vue-中使用" aria-hidden="true">#</a> 在 React 或 Vue 中使用</h2>',20),t={href:"https://faasjs.com/doc/react.html",target:"_blank",rel:"noopener noreferrer"},o=(0,n.Uk)("@faasjs/react"),l={href:"https://faasjs.com/doc/vue-plugin.html",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("@faasjs/vue-plugin"),p={},i=(0,e(3744).Z)(p,[["render",function(a,s){const e=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[r,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",t,[o,(0,n.Wm)(e)])]),(0,n._)("li",null,[(0,n._)("a",l,[c,(0,n.Wm)(e)])])])],64)}]])},3744:(a,s)=>{s.Z=(a,s)=>{const e=a.__vccOpts||a;for(const[a,n]of s)e[a]=n;return e}}}]);