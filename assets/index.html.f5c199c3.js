import{_ as n,r as s,o as i,c as r,b as t,d,w as a,e,a as c}from"./app.9d73d697.js";const h={},g=t("h1",{id:"faasjs-http",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#faasjs-http","aria-hidden":"true"},"#"),e(" @faasjs/http")],-1),f={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/http/LICENSE",target:"_blank",rel:"noopener noreferrer"},y=t("img",{src:"https://img.shields.io/npm/l/@faasjs/http.svg",alt:"License: MIT"},null,-1),p={href:"https://www.npmjs.com/package/@faasjs/http",target:"_blank",rel:"noopener noreferrer"},x=t("img",{src:"https://img.shields.io/npm/v/@faasjs/http/stable.svg",alt:"NPM Stable Version"},null,-1),u={href:"https://www.npmjs.com/package/@faasjs/http",target:"_blank",rel:"noopener noreferrer"},b=t("img",{src:"https://img.shields.io/npm/v/@faasjs/http/beta.svg",alt:"NPM Beta Version"},null,-1),_=c(`<p>FaasJS&#39;s http plugin.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install @faasjs/http
</code></pre><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3>`,5),m=e("Cookie"),T=e("Http"),q=e("HttpError"),k=e("Session"),C=e("Validator"),O=c('<h3 id="type-aliases" tabindex="-1"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type Aliases</h3><ul><li><a href="#cookieoptions">CookieOptions</a></li><li><a href="#httpconfig">HttpConfig</a></li><li><a href="#response">Response</a></li><li><a href="#sessionoptions">SessionOptions</a></li><li><a href="#validatorconfig">ValidatorConfig</a></li><li><a href="#validatoroptions">ValidatorOptions</a></li><li><a href="#validatorruleoptions">ValidatorRuleOptions</a></li></ul><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><ul><li><a href="#contenttype">ContentType</a></li></ul><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><ul><li><a href="#usehttp">useHttp</a></li></ul><h2 id="type-aliases-1" tabindex="-1"><a class="header-anchor" href="#type-aliases-1" aria-hidden="true">#</a> Type Aliases</h2><h3 id="cookieoptions" tabindex="-1"><a class="header-anchor" href="#cookieoptions" aria-hidden="true">#</a> CookieOptions</h3><p>\u01AC <strong>CookieOptions</strong>: <code>Object</code></p><h4 id="index-signature" tabindex="-1"><a class="header-anchor" href="#index-signature" aria-hidden="true">#</a> Index signature</h4><p>\u25AA [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>domain?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>expires?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>httpOnly?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>path?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>sameSite?</code></td><td style="text-align:left;"><code>&quot;Strict&quot;</code> | <code>&quot;Lax&quot;</code> | <code>&quot;None&quot;</code></td></tr><tr><td style="text-align:left;"><code>secure?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>session?</code></td><td style="text-align:left;"><a href="#sessionoptions"><code>SessionOptions</code></a></td></tr></tbody></table><hr><h3 id="httpconfig" tabindex="-1"><a class="header-anchor" href="#httpconfig" aria-hidden="true">#</a> HttpConfig</h3><p>\u01AC <strong>HttpConfig</strong>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;: <code>Object</code></p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="index-signature-1" tabindex="-1"><a class="header-anchor" href="#index-signature-1" aria-hidden="true">#</a> Index signature</h4><p>\u25AA [key: <code>string</code>]: <code>any</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>any</code>; <code>cookie?</code>: <a href="#cookieoptions"><code>CookieOptions</code></a> ; <code>functionName?</code>: <code>string</code> ; <code>ignorePathPrefix?</code>: <code>string</code> ; <code>method?</code>: <code>&quot;BEGIN&quot;</code> | <code>&quot;GET&quot;</code> | <code>&quot;POST&quot;</code> | <code>&quot;DELETE&quot;</code> | <code>&quot;HEAD&quot;</code> | <code>&quot;PUT&quot;</code> | <code>&quot;OPTIONS&quot;</code> | <code>&quot;TRACE&quot;</code> | <code>&quot;PATCH&quot;</code> | <code>&quot;ANY&quot;</code> ; <code>path?</code>: <code>string</code> ; <code>timeout?</code>: <code>number</code> }</td></tr><tr><td style="text-align:left;"><code>config.cookie?</code></td><td style="text-align:left;"><a href="#cookieoptions"><code>CookieOptions</code></a></td></tr><tr><td style="text-align:left;"><code>config.functionName?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>config.ignorePathPrefix?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>config.method?</code></td><td style="text-align:left;"><code>&quot;BEGIN&quot;</code> | <code>&quot;GET&quot;</code> | <code>&quot;POST&quot;</code> | <code>&quot;DELETE&quot;</code> | <code>&quot;HEAD&quot;</code> | <code>&quot;PUT&quot;</code> | <code>&quot;OPTIONS&quot;</code> | <code>&quot;TRACE&quot;</code> | <code>&quot;PATCH&quot;</code> | <code>&quot;ANY&quot;</code></td></tr><tr><td style="text-align:left;"><code>config.path?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>config.timeout?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>name?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>validator?</code></td><td style="text-align:left;"><a href="#validatorconfig"><code>ValidatorConfig</code></a>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;</td></tr></tbody></table><hr><h3 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h3><p>\u01AC <strong>Response</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1"><a class="header-anchor" href="#type-declaration-2" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>headers?</code></td><td style="text-align:left;">{ <code>[key: string]</code>: <code>string</code>; }</td></tr><tr><td style="text-align:left;"><code>message?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>statusCode?</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><hr><h3 id="sessionoptions" tabindex="-1"><a class="header-anchor" href="#sessionoptions" aria-hidden="true">#</a> SessionOptions</h3><p>\u01AC <strong>SessionOptions</strong>: <code>Object</code></p><h4 id="type-declaration-3" tabindex="-1"><a class="header-anchor" href="#type-declaration-3" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cipherName?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>digest?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>iterations?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>keylen?</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>salt?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>secret</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>signedSalt?</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="validatorconfig" tabindex="-1"><a class="header-anchor" href="#validatorconfig" aria-hidden="true">#</a> ValidatorConfig</h3><p>\u01AC <strong>ValidatorConfig</strong>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;: <code>Object</code></p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="type-declaration-4" tabindex="-1"><a class="header-anchor" href="#type-declaration-4" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>before?</code></td><td style="text-align:left;"><code>BeforeOption</code></td></tr><tr><td style="text-align:left;"><code>cookie?</code></td><td style="text-align:left;"><a href="#validatoroptions"><code>ValidatorOptions</code></a>&lt;<code>TCookie</code>&gt;</td></tr><tr><td style="text-align:left;"><code>params?</code></td><td style="text-align:left;"><a href="#validatoroptions"><code>ValidatorOptions</code></a>&lt;<code>TParams</code>&gt;</td></tr><tr><td style="text-align:left;"><code>session?</code></td><td style="text-align:left;"><a href="#validatoroptions"><code>ValidatorOptions</code></a>&lt;<code>TSession</code>&gt;</td></tr></tbody></table><hr><h3 id="validatoroptions" tabindex="-1"><a class="header-anchor" href="#validatoroptions" aria-hidden="true">#</a> ValidatorOptions</h3><p>\u01AC <strong>ValidatorOptions</strong>&lt;<code>Content</code>&gt;: <code>Object</code></p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Content</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</td></tr></tbody></table><h4 id="type-declaration-5" tabindex="-1"><a class="header-anchor" href="#type-declaration-5" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>onError?</code></td><td style="text-align:left;">(<code>type</code>: <code>string</code>, <code>key</code>: <code>string</code> | <code>string</code>[], <code>value?</code>: <code>any</code>) =&gt; { <code>message</code>: <code>any</code> ; <code>statusCode?</code>: <code>number</code> } | <code>void</code></td></tr><tr><td style="text-align:left;"><code>rules</code></td><td style="text-align:left;">{ [k in keyof Content]?: ValidatorRuleOptions }</td></tr><tr><td style="text-align:left;"><code>whitelist?</code></td><td style="text-align:left;"><code>&quot;error&quot;</code> | <code>&quot;ignore&quot;</code></td></tr></tbody></table><hr><h3 id="validatorruleoptions" tabindex="-1"><a class="header-anchor" href="#validatorruleoptions" aria-hidden="true">#</a> ValidatorRuleOptions</h3><p>\u01AC <strong>ValidatorRuleOptions</strong>: <code>Object</code></p><h4 id="type-declaration-6" tabindex="-1"><a class="header-anchor" href="#type-declaration-6" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="#validatoroptions"><code>ValidatorOptions</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>default?</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>in?</code></td><td style="text-align:left;"><code>any</code>[]</td></tr><tr><td style="text-align:left;"><code>regexp?</code></td><td style="text-align:left;"><code>RegExp</code></td></tr><tr><td style="text-align:left;"><code>required?</code></td><td style="text-align:left;"><code>boolean</code></td></tr><tr><td style="text-align:left;"><code>type?</code></td><td style="text-align:left;"><code>ValidatorRuleOptionsType</code></td></tr></tbody></table><h2 id="variables-1" tabindex="-1"><a class="header-anchor" href="#variables-1" aria-hidden="true">#</a> Variables</h2><h3 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> ContentType</h3><p>\u2022 <code>Const</code> <strong>ContentType</strong>: <code>Object</code></p><h4 id="index-signature-2" tabindex="-1"><a class="header-anchor" href="#index-signature-2" aria-hidden="true">#</a> Index signature</h4><p>\u25AA [key: <code>string</code>]: <code>string</code></p><h2 id="functions-1" tabindex="-1"><a class="header-anchor" href="#functions-1" aria-hidden="true">#</a> Functions</h2><h3 id="usehttp" tabindex="-1"><a class="header-anchor" href="#usehttp" aria-hidden="true">#</a> useHttp</h3>',58),v=e("\u25B8 "),N=t("strong",null,"useHttp",-1),P=e("<"),S=t("code",null,"TParams",-1),V=e(", "),R=t("code",null,"TCookie",-1),E=e(", "),j=t("code",null,"TSession",-1),H=e(">("),I=t("code",null,"config?",-1),A=e("): "),w=t("code",null,"Http",-1),L=e("<"),B=t("code",null,"TParams",-1),D=e(", "),G=t("code",null,"TCookie",-1),M=e(", "),U=t("code",null,"TSession",-1),F=e("> & "),Y=t("code",null,"UseifyPlugin",-1),J=c('<h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><a href="#httpconfig"><code>HttpConfig</code></a>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>',5),z=t("code",null,"Http",-1),K=e("<"),Q=t("code",null,"TParams",-1),W=e(", "),X=t("code",null,"TCookie",-1),Z=e(", "),$=t("code",null,"TSession",-1),tt=e("> & "),et=t("code",null,"UseifyPlugin",-1);function dt(ot,at){const l=s("ExternalLinkIcon"),o=s("RouterLink");return i(),r("div",null,[g,t("p",null,[t("a",f,[y,d(l)]),t("a",p,[x,d(l)]),t("a",u,[b,d(l)])]),_,t("ul",null,[t("li",null,[d(o,{to:"/doc/http/classes/Cookie.html"},{default:a(()=>[m]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Http.html"},{default:a(()=>[T]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/HttpError.html"},{default:a(()=>[q]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Session.html"},{default:a(()=>[k]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Validator.html"},{default:a(()=>[C]),_:1})])]),O,t("p",null,[v,N,P,S,V,R,E,j,H,I,A,d(o,{to:"/doc/http/classes/Http.html"},{default:a(()=>[w]),_:1}),L,B,D,G,M,U,F,Y]),J,t("p",null,[d(o,{to:"/doc/http/classes/Http.html"},{default:a(()=>[z]),_:1}),K,Q,W,X,Z,$,tt,et])])}const ct=n(h,[["render",dt],["__file","index.html.vue"]]);export{ct as default};