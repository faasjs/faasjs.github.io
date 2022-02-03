"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[4427],{3033:(t,e,d)=>{d.r(e),d.d(e,{data:()=>a});const a={key:"v-82024392",path:"/doc/http/",title:"@faasjs/http",lang:"en",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[]},{level:2,title:"Modules",slug:"modules",children:[{level:3,title:"Classes",slug:"classes",children:[]},{level:3,title:"Type aliases",slug:"type-aliases",children:[]},{level:3,title:"Variables",slug:"variables",children:[]},{level:3,title:"Functions",slug:"functions",children:[]}]},{level:2,title:"Type aliases",slug:"type-aliases-1",children:[{level:3,title:"CookieOptions",slug:"cookieoptions",children:[]},{level:3,title:"HttpConfig",slug:"httpconfig",children:[]},{level:3,title:"Response",slug:"response",children:[]},{level:3,title:"SessionOptions",slug:"sessionoptions",children:[]},{level:3,title:"ValidatorConfig",slug:"validatorconfig",children:[]},{level:3,title:"ValidatorOptions",slug:"validatoroptions",children:[]},{level:3,title:"ValidatorRuleOptions",slug:"validatorruleoptions",children:[]}]},{level:2,title:"Variables",slug:"variables-1",children:[{level:3,title:"ContentType",slug:"contenttype",children:[]}]},{level:2,title:"Functions",slug:"functions-1",children:[{level:3,title:"useHttp",slug:"usehttp",children:[]}]}],git:{updatedTime:null},filePathRelative:"doc/http/README.md"}},4706:(t,e,d)=>{d.r(e),d.d(e,{default:()=>z});var a=d(6252);const o=(0,a._)("h1",{id:"faasjs-http",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#faasjs-http","aria-hidden":"true"},"#"),(0,a.Uk)(" @faasjs/http")],-1),l={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/http/LICENSE",target:"_blank",rel:"noopener noreferrer"},i=(0,a._)("img",{src:"https://img.shields.io/npm/l/@faasjs/http.svg",alt:"License: MIT"},null,-1),n={href:"https://www.npmjs.com/package/@faasjs/http",target:"_blank",rel:"noopener noreferrer"},r=(0,a._)("img",{src:"https://img.shields.io/npm/v/@faasjs/http/stable.svg",alt:"NPM Stable Version"},null,-1),s={href:"https://www.npmjs.com/package/@faasjs/http",target:"_blank",rel:"noopener noreferrer"},c=(0,a._)("img",{src:"https://img.shields.io/npm/v/@faasjs/http/beta.svg",alt:"NPM Beta Version"},null,-1),h=(0,a.uE)('<p>FaasJS&#39;s http plugin.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/http\n</code></pre><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>',5),g=(0,a.Uk)("Cookie"),f=(0,a.Uk)("Http"),y=(0,a.Uk)("HttpError"),p=(0,a.Uk)("Session"),u=(0,a.Uk)("Validator"),x=(0,a.uE)('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type aliases</h3><ul><li><a href="#cookieoptions">CookieOptions</a></li><li><a href="#httpconfig">HttpConfig</a></li><li><a href="#response">Response</a></li><li><a href="#sessionoptions">SessionOptions</a></li><li><a href="#validatorconfig">ValidatorConfig</a></li><li><a href="#validatoroptions">ValidatorOptions</a></li><li><a href="#validatorruleoptions">ValidatorRuleOptions</a></li></ul><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><ul><li><a href="#contenttype">ContentType</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#usehttp">useHttp</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type aliases</h2><h3 id="cookieoptions" tabindex="-1"><a class="header-anchor" href="#cookieoptions" aria-hidden="true">#</a> CookieOptions</h3><p>Ƭ <strong>CookieOptions</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>domain?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>expires?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>httpOnly?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>path?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>sameSite?</code></td><td style="text-align:left;"><code>&quot;Strict&quot;</code> | <code>&quot;Lax&quot;</code> | <code>&quot;None&quot;</code></td></tr><tr><td style="text-align:left;"><code>secure?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>session?</code></td><td style="text-align:left;"><a href="#sessionoptions"><code>SessionOptions</code></a></td></tr></tbody></table><hr><h3 id="httpconfig" tabindex="-1"><a class="header-anchor" href="#httpconfig" aria-hidden="true">#</a> HttpConfig</h3><p>Ƭ <strong>HttpConfig</strong>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;: <code>Object</code></p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="index-signature-1" tabindex="-1"><a class="header-anchor" href="#index-signature-1" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>config.cookie?</code></td><td style="text-align:left;"><a href="#cookieoptions"><code>CookieOptions</code></a></td></tr><tr><td style="text-align:left;"><code>config.functionName?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>config.ignorePathPrefix?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>config.method?</code></td><td style="text-align:left;"><code>&quot;BEGIN&quot;</code> | <code>&quot;GET&quot;</code> | <code>&quot;POST&quot;</code> | <code>&quot;DELETE&quot;</code> | <code>&quot;HEAD&quot;</code> | <code>&quot;PUT&quot;</code> | <code>&quot;OPTIONS&quot;</code> | <code>&quot;TRACE&quot;</code> | <code>&quot;PATCH&quot;</code> | <code>&quot;ANY&quot;</code></td></tr><tr><td style="text-align:left;"><code>config.path?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>config.timeout?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>validator?</code></td><td style="text-align:left;"><a href="#validatorconfig"><code>ValidatorConfig</code></a>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;</td></tr></tbody></table><hr><h3 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h3><p>Ƭ <strong>Response</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>headers?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>message?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>statusCode?</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><hr><h3 id="sessionoptions" tabindex="-1"><a class="header-anchor" href="#sessionoptions" aria-hidden="true">#</a> SessionOptions</h3><p>Ƭ <strong>SessionOptions</strong>: <code>Object</code></p><h4 id="type-declaration-3" tabindex="-1"><a class="header-anchor" href="#type-declaration-3" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cipherName?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>digest?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>iterations?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>keylen?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>salt?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>secret</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>signedSalt?</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="validatorconfig" tabindex="-1"><a class="header-anchor" href="#validatorconfig" aria-hidden="true">#</a> ValidatorConfig</h3><p>Ƭ <strong>ValidatorConfig</strong>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;: <code>Object</code></p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="type-declaration-4" tabindex="-1"><a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>before?</code></td><td style="text-align:left;"><code>BeforeOption</code></td></tr><tr><td style="text-align:left;"><code>cookie?</code></td><td style="text-align:left;"><a href="#validatoroptions"><code>ValidatorOptions</code></a>&lt;<code>TCookie</code>&gt;</td></tr><tr><td style="text-align:left;"><code>params?</code></td><td style="text-align:left;"><a href="#validatoroptions"><code>ValidatorOptions</code></a>&lt;<code>TParams</code>&gt;</td></tr><tr><td style="text-align:left;"><code>session?</code></td><td style="text-align:left;"><a href="#validatoroptions"><code>ValidatorOptions</code></a>&lt;<code>TSession</code>&gt;</td></tr></tbody></table><hr><h3 id="validatoroptions" tabindex="-1"><a class="header-anchor" href="#validatoroptions" aria-hidden="true">#</a> ValidatorOptions</h3><p>Ƭ <strong>ValidatorOptions</strong>&lt;<code>Content</code>&gt;: <code>Object</code></p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Content</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</td></tr></tbody></table><h4 id="type-declaration-5" tabindex="-1"><a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>rules</code></td><td style="text-align:left;">{ [k in keyof Content]?: ValidatorRuleOptions }</td></tr><tr><td style="text-align:left;"><code>whitelist?</code></td><td style="text-align:left;"><code>&quot;error&quot;</code> | <code>&quot;ignore&quot;</code></td></tr><tr><td style="text-align:left;"><code>onError?</code></td><td style="text-align:left;">(<code>type</code>: <code>string</code>, <code>key</code>: <code>string</code> | <code>string</code>[], <code>value?</code>: <code>any</code>) =&gt; <code>void</code> | { <code>message</code>: <code>any</code> ; <code>statusCode?</code>: <code>number</code> }</td></tr></tbody></table><hr><h3 id="validatorruleoptions" tabindex="-1"><a class="header-anchor" href="#validatorruleoptions" aria-hidden="true">#</a> ValidatorRuleOptions</h3><p>Ƭ <strong>ValidatorRuleOptions</strong>: <code>Object</code></p><h4 id="type-declaration-6" tabindex="-1"><a class="header-anchor" href="#type-declaration-6" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="#validatoroptions"><code>ValidatorOptions</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>default?</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>in?</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>regexp?</code></td><td style="text-align:left;"><code>RegExp</code></td></tr><tr><td style="text-align:left;"><code>required?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>type?</code></td><td style="text-align:left;"><code>ValidatorRuleOptionsType</code></td></tr></tbody></table><h2 id="variables-1" tabindex="-1"><a class="header-anchor" href="#variables-1" aria-hidden="true">#</a> Variables</h2><h3 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> ContentType</h3><p>• <strong>ContentType</strong>: <code>Object</code></p><h4 id="index-signature-2" tabindex="-1"><a class="header-anchor" href="#index-signature-2" aria-hidden="true">#</a> Index signature</h4><p>▪ [key: <code>string</code>]: <code>string</code></p><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="usehttp" tabindex="-1"><a class="header-anchor" href="#usehttp" aria-hidden="true">#</a> useHttp</h3>',58),b=(0,a.Uk)("▸ "),m=(0,a._)("strong",null,"useHttp",-1),T=(0,a.Uk)("<"),k=(0,a._)("code",null,"TParams",-1),v=(0,a.Uk)(", "),_=(0,a._)("code",null,"TCookie",-1),C=(0,a.Uk)(", "),O=(0,a._)("code",null,"TSession",-1),q=(0,a.Uk)(">("),j=(0,a._)("code",null,"config?",-1),V=(0,a.Uk)("): "),R=(0,a._)("code",null,"Http",-1),S=(0,a.Uk)("<"),P=(0,a._)("code",null,"TParams",-1),U=(0,a.Uk)(", "),N=(0,a._)("code",null,"TCookie",-1),H=(0,a.Uk)(", "),E=(0,a._)("code",null,"TSession",-1),w=(0,a.Uk)("> & "),I=(0,a._)("code",null,"UseifyPlugin",-1),W=(0,a.uE)('<h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><a href="#httpconfig"><code>HttpConfig</code></a>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>',5),L=(0,a._)("code",null,"Http",-1),M=(0,a.Uk)("<"),A=(0,a._)("code",null,"TParams",-1),F=(0,a.Uk)(", "),D=(0,a._)("code",null,"TCookie",-1),B=(0,a.Uk)(", "),G=(0,a._)("code",null,"TSession",-1),Y=(0,a.Uk)("> & "),Z=(0,a._)("code",null,"UseifyPlugin",-1),J={},z=(0,d(3744).Z)(J,[["render",function(t,e){const d=(0,a.up)("ExternalLinkIcon"),J=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[(0,a._)("a",l,[i,(0,a.Wm)(d)]),(0,a._)("a",n,[r,(0,a.Wm)(d)]),(0,a._)("a",s,[c,(0,a.Wm)(d)])]),h,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(J,{to:"/doc/http/classes/Cookie.html"},{default:(0,a.w5)((()=>[g])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(J,{to:"/doc/http/classes/Http.html"},{default:(0,a.w5)((()=>[f])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(J,{to:"/doc/http/classes/HttpError.html"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(J,{to:"/doc/http/classes/Session.html"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(J,{to:"/doc/http/classes/Validator.html"},{default:(0,a.w5)((()=>[u])),_:1})])]),x,(0,a._)("p",null,[b,m,T,k,v,_,C,O,q,j,V,(0,a.Wm)(J,{to:"/doc/http/classes/Http.html"},{default:(0,a.w5)((()=>[R])),_:1}),S,P,U,N,H,E,w,I]),W,(0,a._)("p",null,[(0,a.Wm)(J,{to:"/doc/http/classes/Http.html"},{default:(0,a.w5)((()=>[L])),_:1}),M,A,F,D,B,G,Y,Z])],64)}]])},3744:(t,e)=>{e.Z=(t,e)=>{const d=t.__vccOpts||t;for(const[t,a]of e)d[t]=a;return d}}}]);