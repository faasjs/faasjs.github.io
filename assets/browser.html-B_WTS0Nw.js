import{_ as s,c as a,o as e,a as n}from"./app-CRwacYaH.js";const t={},r=n(`<h1 id="faasjs-browser" tabindex="-1"><a class="header-anchor" href="#faasjs-browser"><span>@faasjs/browser</span></a></h1><p>浏览器插件，用于在浏览器中请求云函数。</p><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>npm</span></a></h3><pre><code>npm install @faasjs/browser --save
</code></pre><h3 id="webpack-和-cdn" tabindex="-1"><a class="header-anchor" href="#webpack-和-cdn"><span>Webpack 和 CDN</span></a></h3><p>在 html 中添加如下代码：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@faasjs/browser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 webpack.config.js 中添加如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;@faasjs/browser&#39;</span><span class="token operator">:</span> <span class="token string">&#39;FaasBrowserClient&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="faasbrowserclient-实例方法" tabindex="-1"><a class="header-anchor" href="#faasbrowserclient-实例方法"><span>FaasBrowserClient 实例方法</span></a></h2><h3 id="constructor-baseurl-string-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#constructor-baseurl-string-faasbrowserclient"><span>constructor (baseUrl?: string): FaasBrowserClient</span></a></h3><p>构建插件实例，<code>baseUrl</code> 为云函数网关的网址，若不传值则视为开发环境，会在当前域名下请求 <code>/_faas/</code> 路径下的接口。</p><h3 id="action-action-string-params-any-promise-response" tabindex="-1"><a class="header-anchor" href="#action-action-string-params-any-promise-response"><span>action (action: string, params?: any): Promise&lt;Response&gt;</span></a></h3><p>请求云函数，<code>action</code> 为云函数的路径，<code>params</code> 为传递的参数</p><h2 id="response-实例属性" tabindex="-1"><a class="header-anchor" href="#response-实例属性"><span>Response 实例属性</span></a></h2><ul><li><strong>status</strong> <code>number</code> 响应状态</li><li><strong>headers</strong> <code>object</code> 响应头</li><li><strong>data</strong> <code>any</code> 响应数据</li></ul><h2 id="responseerror-实例属性" tabindex="-1"><a class="header-anchor" href="#responseerror-实例属性"><span>ResponseError 实例属性</span></a></h2><ul><li><strong>message</strong> <code>string</code> 错误提示</li><li><strong>status</strong> <code>number</code> 响应状态</li><li><strong>headers</strong> <code>object</code> 响应头</li><li><strong>body</strong> <code>any</code> 响应体</li></ul><h2 id="在-react-或-vue-中使用" tabindex="-1"><a class="header-anchor" href="#在-react-或-vue-中使用"><span>在 React 或 Vue 中使用</span></a></h2><ul><li><a href="https://faasjs.com/doc/react.html" target="_blank" rel="noopener noreferrer">@faasjs/react</a></li><li><a href="https://faasjs.com/doc/vue-plugin.html" target="_blank" rel="noopener noreferrer">@faasjs/vue-plugin</a></li></ul>`,21),o=[r];function l(c,p){return e(),a("div",null,o)}const d=s(t,[["render",l],["__file","browser.html.vue"]]),u=JSON.parse('{"path":"/zh/doc/browser.html","title":"@faasjs/browser","lang":"zh","frontmatter":{},"headers":[{"level":2,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[{"level":3,"title":"npm","slug":"npm","link":"#npm","children":[]},{"level":3,"title":"Webpack 和 CDN","slug":"webpack-和-cdn","link":"#webpack-和-cdn","children":[]}]},{"level":2,"title":"FaasBrowserClient 实例方法","slug":"faasbrowserclient-实例方法","link":"#faasbrowserclient-实例方法","children":[{"level":3,"title":"constructor (baseUrl?: string): FaasBrowserClient","slug":"constructor-baseurl-string-faasbrowserclient","link":"#constructor-baseurl-string-faasbrowserclient","children":[]},{"level":3,"title":"action (action: string, params?: any): Promise<Response>","slug":"action-action-string-params-any-promise-response","link":"#action-action-string-params-any-promise-response","children":[]}]},{"level":2,"title":"Response 实例属性","slug":"response-实例属性","link":"#response-实例属性","children":[]},{"level":2,"title":"ResponseError 实例属性","slug":"responseerror-实例属性","link":"#responseerror-实例属性","children":[]},{"level":2,"title":"在 React 或 Vue 中使用","slug":"在-react-或-vue-中使用","link":"#在-react-或-vue-中使用","children":[]}],"git":{"updatedTime":1716945821000},"filePathRelative":"zh/doc/browser.md"}');export{d as comp,u as data};
