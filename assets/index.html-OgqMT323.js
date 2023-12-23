import{_ as o,r as s,o as r,c as i,a as t,b as e,w as c,d,e as l}from"./app-eMaYiWw7.js";const h={},p=t("h1",{id:"faasjs-request",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#faasjs-request","aria-hidden":"true"},"#"),d(" @faasjs/request")],-1),f={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/request/LICENSE",target:"_blank",rel:"noopener noreferrer"},g=t("img",{src:"https://img.shields.io/npm/l/@faasjs/request.svg",alt:"License: MIT"},null,-1),u={href:"https://www.npmjs.com/package/@faasjs/request",target:"_blank",rel:"noopener noreferrer"},y=t("img",{src:"https://img.shields.io/npm/v/@faasjs/request/stable.svg",alt:"NPM Stable Version"},null,-1),x={href:"https://www.npmjs.com/package/@faasjs/request",target:"_blank",rel:"noopener noreferrer"},m=t("img",{src:"https://img.shields.io/npm/v/@faasjs/request/beta.svg",alt:"NPM Beta Version"},null,-1),b=l(`<p>FaasJS&#39;s request module.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/request
</code></pre><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>`,5),k=l(`<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li><a href="#request">Request</a></li><li><a href="#requestoptions">RequestOptions</a></li><li><a href="#response">Response</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#querystringify">querystringify</a></li><li><a href="#request-1">request</a></li><li><a href="#setmock">setMock</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h3><p>Ƭ <strong>Request</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>any</code>; }</td></tr><tr><td style="text-align:left;"><code>headers?</code></td><td style="text-align:left;"><code>http.OutgoingHttpHeaders</code></td></tr><tr><td style="text-align:left;"><code>host?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>method?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>path?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>query?</code></td><td style="text-align:left;"><code>http.OutgoingHttpHeaders</code></td></tr></tbody></table><hr><h3 id="requestoptions" tabindex="-1"><a class="header-anchor" href="#requestoptions" aria-hidden="true">#</a> RequestOptions</h3><p>Ƭ <strong>RequestOptions</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>agent?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>auth?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The authentication credentials to use for the request. Format: <code>username:password</code></td></tr><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>any</code>; } | <code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>downloadFile?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Path of downloading a file from the server. <code>ts await request(&#39;https://example.com&#39;, { downloadFile: &#39;filepath&#39; }) </code></td></tr><tr><td style="text-align:left;"><code>downloadStream?</code></td><td style="text-align:left;"><code>NodeJS.WritableStream</code></td><td style="text-align:left;">Create a write stream to download a file. <code>ts import { createWriteStream } from &#39;fs&#39; const stream = createWriteStream(&#39;filepath&#39;) await request(&#39;https://example.com&#39;, { downloadStream: stream }) </code></td></tr><tr><td style="text-align:left;"><code>file?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Path of uploading a file to the server. <code>ts await request(&#39;https://example.com&#39;, { file: &#39;filepath&#39; }) </code></td></tr><tr><td style="text-align:left;"><code>headers?</code></td><td style="text-align:left;"><code>http.OutgoingHttpHeaders</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>logger?</code></td><td style="text-align:left;"><code>Logger</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>method?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">The HTTP method to use when making the request. Defaults to GET.</td></tr><tr><td style="text-align:left;"><code>parse?</code></td><td style="text-align:left;">(<code>body</code>: <code>string</code>) =&gt; <code>any</code></td><td style="text-align:left;">Body parser. Defaults to <code>JSON.parse</code>.</td></tr><tr><td style="text-align:left;"><code>passphrase?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>pfx?</code></td><td style="text-align:left;"><code>Buffer</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>query?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>any</code>; }</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>timeout?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr></tbody></table><hr><h3 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h3><p>Ƭ <strong>Response</strong>&lt;<code>T</code>&gt;: <code>Object</code></p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>body</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>headers</code></td><td style="text-align:left;"><code>http.OutgoingHttpHeaders</code></td></tr><tr><td style="text-align:left;"><code>request?</code></td><td style="text-align:left;"><a href="#request"><code>Request</code></a></td></tr><tr><td style="text-align:left;"><code>statusCode?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>statusMessage?</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="querystringify" tabindex="-1"><a class="header-anchor" href="#querystringify" aria-hidden="true">#</a> querystringify</h3><p>▸ <strong>querystringify</strong>(<code>obj</code>): <code>string</code></p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>obj</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="request-1" tabindex="-1"><a class="header-anchor" href="#request-1" aria-hidden="true">#</a> request</h3><p>▸ <strong>request</strong>&lt;<code>T</code>&gt;(<code>url</code>, <code>options?</code>): <code>Promise</code>&lt;<a href="#response"><code>Response</code></a>&lt;<code>T</code>&gt;&gt;</p><p>Request</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Url</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><a href="#requestoptions"><code>RequestOptions</code></a></td><td style="text-align:left;">Options</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<a href="#response"><code>Response</code></a>&lt;<code>T</code>&gt;&gt;</p><p><strong><code>Url</code></strong></p><p>https://faasjs.com/doc/request.html</p><hr><h3 id="setmock" tabindex="-1"><a class="header-anchor" href="#setmock" aria-hidden="true">#</a> setMock</h3><p>▸ <strong>setMock</strong>(<code>handler</code>): <code>void</code></p><p>Mock requests</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;"><code>Mock</code></td><td style="text-align:left;">{function | null} null to disable mock</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">setMock</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> headers<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> statusCode<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> body<span class="token operator">:</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,50);function q(_,T){const a=s("ExternalLinkIcon"),n=s("RouterLink");return r(),i("div",null,[p,t("p",null,[t("a",f,[g,e(a)]),t("a",u,[y,e(a)]),t("a",x,[m,e(a)])]),b,t("ul",null,[t("li",null,[e(n,{to:"/doc/request/classes/ResponseError.html"},{default:c(()=>[d("ResponseError")]),_:1})])]),k])}const R=o(h,[["render",q],["__file","index.html.vue"]]);export{R as default};