import{_ as a,o,c as l,b as e,d,e as s,a as n,r}from"./app.fb8d590e.js";const c={},i=e("h1",{id:"faasjs-load",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faasjs-load","aria-hidden":"true"},"#"),s(" @faasjs/load")],-1),h={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/load/LICENSE",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://img.shields.io/npm/l/@faasjs/load.svg",alt:"License: MIT"},null,-1),g={href:"https://www.npmjs.com/package/@faasjs/load",target:"_blank",rel:"noopener noreferrer"},p=e("img",{src:"https://img.shields.io/npm/v/@faasjs/load/stable.svg",alt:"NPM Stable Version"},null,-1),x={href:"https://www.npmjs.com/package/@faasjs/load",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://img.shields.io/npm/v/@faasjs/load/beta.svg",alt:"NPM Beta Version"},null,-1),m=n(`<p>FaasJS&#39;s load module.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/load
</code></pre><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#loadconfig">loadConfig</a></li><li><a href="#loadts">loadTs</a></li></ul><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="loadconfig" tabindex="-1"><a class="header-anchor" href="#loadconfig" aria-hidden="true">#</a> loadConfig</h3><p>\u25B8 <strong>loadConfig</strong>(<code>root</code>, <code>filename</code>): <code>Config</code></p><p>\u52A0\u8F7D\u914D\u7F6E</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>root</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u6839\u76EE\u5F55</td></tr><tr><td style="text-align:left;"><code>filename</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{filename} \u76EE\u6807\u6587\u4EF6\uFF0C\u7528\u4E8E\u8BFB\u53D6\u76EE\u5F55\u5C42\u7EA7</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Config</code></p><hr><h3 id="loadts" tabindex="-1"><a class="header-anchor" href="#loadts" aria-hidden="true">#</a> loadTs</h3><p>\u25B8 <strong>loadTs</strong>(<code>filename</code>, <code>options?</code>): <code>Promise</code>&lt;{ <code>dependencies</code>: { <code>[key: string]</code>: <code>string</code>; } ; <code>module?</code>: <code>Func</code> ; <code>modules?</code>: { <code>[key: string]</code>: <code>string</code>; } }&gt;</p><p>\u52A0\u8F7D ts \u6587\u4EF6</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>filename</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u5B8C\u6574\u6E90\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{object} \u914D\u7F6E\u9879</td></tr><tr><td style="text-align:left;"><code>options.input?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{object} \u8BFB\u53D6\u914D\u7F6E</td></tr><tr><td style="text-align:left;"><code>options.modules?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{object} \u751F\u6210 modules \u7684\u914D\u7F6E</td></tr><tr><td style="text-align:left;"><code>options.modules.additions?</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>options.modules.excludes?</code></td><td style="text-align:left;"><code>string</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>options.output?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">{object} \u5199\u5165\u914D\u7F6E</td></tr><tr><td style="text-align:left;"><code>options.tmp?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">{boolean} \u662F\u5426\u4E3A\u4E34\u65F6\u6587\u4EF6\uFF0Ctrue \u5219\u751F\u6210\u7684\u6587\u4EF6\u4F1A\u88AB\u5220\u9664\uFF0C\u9ED8\u8BA4\u4E3A false</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;{ <code>dependencies</code>: { <code>[key: string]</code>: <code>string</code>; } ; <code>module?</code>: <code>Func</code> ; <code>modules?</code>: { <code>[key: string]</code>: <code>string</code>; } }&gt;</p>`,22);function y(b,_){const t=r("ExternalLinkIcon");return o(),l("div",null,[i,e("p",null,[e("a",h,[f,d(t)]),e("a",g,[p,d(t)]),e("a",x,[u,d(t)])]),m])}var k=a(c,[["render",y],["__file","index.html.vue"]]);export{k as default};
