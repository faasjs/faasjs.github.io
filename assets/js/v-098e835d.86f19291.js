"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[4155],{7611:(e,t,d)=>{d.r(t),d.d(t,{data:()=>o});const o={key:"v-098e835d",path:"/doc/cloud_function/",title:"@faasjs/cloud_function",lang:"en",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Modules",slug:"modules",children:[{level:3,title:"Classes",slug:"classes",children:[]},{level:3,title:"Type aliases",slug:"type-aliases",children:[]},{level:3,title:"Functions",slug:"functions",children:[]}]},{level:2,title:"Type aliases",slug:"type-aliases-1",children:[{level:3,title:"CloudFunctionAdapter",slug:"cloudfunctionadapter",children:[]},{level:3,title:"CloudFunctionConfig",slug:"cloudfunctionconfig",children:[]}]},{level:2,title:"Functions",slug:"functions-1",children:[{level:3,title:"invoke",slug:"invoke",children:[]},{level:3,title:"invokeSync",slug:"invokesync",children:[]},{level:3,title:"useCloudFunction",slug:"usecloudfunction",children:[]}]}],git:{updatedTime:null},filePathRelative:"doc/cloud_function/README.md"}},8497:(e,t,d)=>{d.r(t),d.d(t,{default:()=>P});var o=d(6252);const a=(0,o._)("h1",{id:"faasjs-cloud-function",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#faasjs-cloud-function","aria-hidden":"true"},"#"),(0,o.Uk)(" @faasjs/cloud_function")],-1),l={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/cloud_function/LICENSE",target:"_blank",rel:"noopener noreferrer"},n=(0,o._)("img",{src:"https://img.shields.io/npm/l/@faasjs/cloud_function.svg",alt:"License: MIT"},null,-1),c={href:"https://www.npmjs.com/package/@faasjs/cloud_function",target:"_blank",rel:"noopener noreferrer"},i=(0,o._)("img",{src:"https://img.shields.io/npm/v/@faasjs/cloud_function/stable.svg",alt:"NPM Stable Version"},null,-1),r={href:"https://www.npmjs.com/package/@faasjs/cloud_function",target:"_blank",rel:"noopener noreferrer"},s=(0,o._)("img",{src:"https://img.shields.io/npm/v/@faasjs/cloud_function/beta.svg",alt:"NPM Beta Version"},null,-1),u=(0,o.uE)('<p>A FaasJS plugin, let function could create, config and invoke CloudFunction.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/cloud_function\n</code></pre><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>',5),h=(0,o.Uk)("CloudFunction"),f=(0,o.uE)('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type aliases</h3><ul><li><a href="#cloudfunctionadapter">CloudFunctionAdapter</a></li><li><a href="#cloudfunctionconfig">CloudFunctionConfig</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#invoke">invoke</a></li><li><a href="#invokesync">invokeSync</a></li><li><a href="#usecloudfunction">useCloudFunction</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type aliases</h2><h3 id="cloudfunctionadapter" tabindex="-1"><a class="header-anchor" href="#cloudfunctionadapter" aria-hidden="true">#</a> CloudFunctionAdapter</h3><p>Ƭ <strong>CloudFunctionAdapter</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>invokeCloudFunction</code></td><td style="text-align:left;">(<code>name</code>: <code>string</code>, <code>data</code>: <code>any</code>, <code>options?</code>: <code>any</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>invokeSyncCloudFunction</code></td><td style="text-align:left;">&lt;TResult&gt;(<code>name</code>: <code>string</code>, <code>data</code>: <code>any</code>, <code>options?</code>: <code>any</code>) =&gt; <code>Promise</code>&lt;<code>TResult</code>&gt;</td></tr></tbody></table><hr><h3 id="cloudfunctionconfig" tabindex="-1"><a class="header-anchor" href="#cloudfunctionconfig" aria-hidden="true">#</a> CloudFunctionConfig</h3><p>Ƭ <strong>CloudFunctionConfig</strong>: <code>Object</code></p><p>云函数配置项</p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;">{ [key: string]: <code>any</code>; <code>memorySize?</code>: <code>64</code> | <code>128</code> | <code>256</code> | <code>384</code> | <code>512</code> | <code>640</code> | <code>768</code> | <code>896</code> | <code>1024</code> | <code>number</code> ; <code>name?</code>: <code>string</code> ; <code>provisionedConcurrent?</code>: { <code>executions</code>: <code>number</code> } ; <code>timeout?</code>: <code>number</code> ; <code>triggers?</code>: { <code>name?</code>: <code>string</code> ; <code>type</code>: <code>&quot;timer&quot;</code> | <code>string</code> ; <code>value</code>: <code>string</code> }[] }</td><td style="text-align:left;">配置项</td></tr><tr><td style="text-align:left;"><code>config.memorySize?</code></td><td style="text-align:left;"><code>64</code> | <code>128</code> | <code>256</code> | <code>384</code> | <code>512</code> | <code>640</code> | <code>768</code> | <code>896</code> | <code>1024</code> | <code>number</code></td><td style="text-align:left;">内存大小，单位为MB，默认 64</td></tr><tr><td style="text-align:left;"><code>config.name?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">配置名称</td></tr><tr><td style="text-align:left;"><code>config.provisionedConcurrent?</code></td><td style="text-align:left;">{ <code>executions</code>: <code>number</code> }</td><td style="text-align:left;">预制并发配置</td></tr><tr><td style="text-align:left;"><code>config.provisionedConcurrent.executions</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">预制并发数量</td></tr><tr><td style="text-align:left;"><code>config.timeout?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">执行超时时间，单位为秒，默认 30</td></tr><tr><td style="text-align:left;"><code>config.triggers?</code></td><td style="text-align:left;">{ <code>name?</code>: <code>string</code> ; <code>type</code>: <code>&quot;timer&quot;</code> | <code>string</code> ; <code>value</code>: <code>string</code> }[]</td><td style="text-align:left;">触发器配置</td></tr><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">插件名称</td></tr><tr><td style="text-align:left;"><code>validator?</code></td><td style="text-align:left;">{ <code>event?</code>: <code>ValidatorConfig</code> }</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>validator.event?</code></td><td style="text-align:left;"><code>ValidatorConfig</code></td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>▸ <strong>invoke</strong>&lt;<code>TData</code>&gt;(<code>name</code>, <code>data?</code>, <code>options?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>异步触发云函数</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">云函数文件名或云函数名</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;">参数</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">额外配置项</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="invokesync" tabindex="-1"><a class="header-anchor" href="#invokesync" aria-hidden="true">#</a> invokeSync</h3><p>▸ <strong>invokeSync</strong>&lt;<code>TResult</code>, <code>TData</code>&gt;(<code>name</code>, <code>data?</code>, <code>options?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><p>同步触发云函数</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">云函数文件名或云函数名</td></tr><tr><td style="text-align:left;"><code>data?</code></td><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;">参数</td></tr><tr><td style="text-align:left;"><code>options?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">额外配置项</td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="usecloudfunction" tabindex="-1"><a class="header-anchor" href="#usecloudfunction" aria-hidden="true">#</a> useCloudFunction</h3>',39),g=(0,o.Uk)("▸ "),y=(0,o._)("strong",null,"useCloudFunction",-1),p=(0,o.Uk)("("),x=(0,o._)("code",null,"config?",-1),m=(0,o.Uk)("): "),b=(0,o._)("code",null,"CloudFunction",-1),v=(0,o.Uk)(" & "),_=(0,o._)("code",null,"UseifyPlugin",-1),k=(0,o.uE)('<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><a href="#cloudfunctionconfig"><code>CloudFunctionConfig</code></a> | () =&gt; <a href="#cloudfunctionconfig"><code>CloudFunctionConfig</code></a></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4>',3),C=(0,o._)("code",null,"CloudFunction",-1),T=(0,o.Uk)(" & "),F=(0,o._)("code",null,"UseifyPlugin",-1),j={},P=(0,d(3744).Z)(j,[["render",function(e,t){const d=(0,o.up)("ExternalLinkIcon"),j=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o._)("a",l,[n,(0,o.Wm)(d)]),(0,o._)("a",c,[i,(0,o.Wm)(d)]),(0,o._)("a",r,[s,(0,o.Wm)(d)])]),u,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(j,{to:"/doc/cloud_function/classes/CloudFunction.html"},{default:(0,o.w5)((()=>[h])),_:1})])]),f,(0,o._)("p",null,[g,y,p,x,m,(0,o.Wm)(j,{to:"/doc/cloud_function/classes/CloudFunction.html"},{default:(0,o.w5)((()=>[b])),_:1}),v,_]),k,(0,o._)("p",null,[(0,o.Wm)(j,{to:"/doc/cloud_function/classes/CloudFunction.html"},{default:(0,o.w5)((()=>[C])),_:1}),T,F])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const d=e.__vccOpts||e;for(const[e,o]of t)d[e]=o;return d}}}]);