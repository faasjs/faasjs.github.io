import{_ as n,r as l,o as r,c,a as e,d as o,w as a,b as t,e as s}from"./app-YOtnh9m8.js";const i={},h=s('<h1 id="class-session-s-c" tabindex="-1"><a class="header-anchor" href="#class-session-s-c" aria-hidden="true">#</a> Class: Session&lt;S, C&gt;</h1><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),f=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),g=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1","aria-hidden":"true"},"#"),t(" Constructors")],-1),_=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor","aria-hidden":"true"},"#"),t(" constructor")],-1),y=e("strong",null,"new Session",-1),p=e("code",null,"S",-1),x=e("code",null,"C",-1),b=e("code",null,"cookie",-1),m=e("code",null,"config",-1),S=e("code",null,"Session",-1),k=e("code",null,"S",-1),T=e("code",null,"C",-1),C=s('<h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',3),N=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),R=e("td",{style:{"text-align":"left"}},[e("code",null,"cookie")],-1),v={style:{"text-align":"left"}},w=e("code",null,"Cookie",-1),P=e("code",null,"C",-1),D=e("code",null,"S",-1),V=e("td",{style:{"text-align":"left"}},[e("code",null,"config")],-1),B={style:{"text-align":"left"}},L=e("code",null,"SessionOptions",-1),M=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),O=e("code",null,"Session",-1),j=e("code",null,"S",-1),E=e("code",null,"C",-1),q=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>• <code>Readonly</code> <strong>config</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cipherName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>digest</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>iterations</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>keylen</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>salt</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>secret</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>signedSalt</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> content</h3><p>• <strong>content</strong>: <code>Record</code>&lt;<code>string</code>, <code>string</code> | <code>number</code>&gt;</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="decode" tabindex="-1"><a class="header-anchor" href="#decode" aria-hidden="true">#</a> decode</h3><p>▸ <strong>decode</strong>&lt;<code>TData</code>&gt;(<code>text</code>): <code>string</code> | <code>number</code> | { <code>[key: string]</code>: <code>any</code>; } | <code>TData</code></p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>string</code> | <code>number</code> | { <code>[key: string]</code>: <code>any</code>; } | <code>TData</code></p><hr><h3 id="encode" tabindex="-1"><a class="header-anchor" href="#encode" aria-hidden="true">#</a> encode</h3><p>▸ <strong>encode</strong>(<code>text</code>): <code>string</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>SessionContent</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>▸ <strong>invoke</strong>(<code>cookie?</code>, <code>logger?</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cookie?</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>logger?</code></td><td style="text-align:left;"><code>Logger</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><hr><h3 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h3><p>▸ <strong>read</strong>(<code>key</code>): <code>string</code> | <code>number</code></p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>string</code> | <code>number</code></p><hr><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3>',40),z=e("strong",null,"update",-1),A=e("code",null,"Session",-1),F=e("code",null,"S",-1),G=e("code",null,"C",-1),H=e("h4",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5","aria-hidden":"true"},"#"),t(" Returns")],-1),I=e("code",null,"Session",-1),J=e("code",null,"S",-1),K=e("code",null,"C",-1),Q=e("hr",null,null,-1),U=e("h3",{id:"write",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#write","aria-hidden":"true"},"#"),t(" write")],-1),W=e("strong",null,"write",-1),X=e("code",null,"key",-1),Y=e("code",null,"value?",-1),Z=e("code",null,"Session",-1),$=e("code",null,"S",-1),ee=e("code",null,"C",-1),te=s('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>value?</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>',3),de=e("code",null,"Session",-1),oe=e("code",null,"S",-1),ae=e("code",null,"C",-1);function se(ne,le){const d=l("RouterLink");return r(),c("div",null,[h,e("ul",null,[e("li",null,[o(d,{to:"/doc/http/classes/Session.html#constructor"},{default:a(()=>[t("constructor")]),_:1})])]),u,e("ul",null,[e("li",null,[o(d,{to:"/doc/http/classes/Session.html#config"},{default:a(()=>[t("config")]),_:1})]),e("li",null,[o(d,{to:"/doc/http/classes/Session.html#content"},{default:a(()=>[t("content")]),_:1})])]),f,e("ul",null,[e("li",null,[o(d,{to:"/doc/http/classes/Session.html#decode"},{default:a(()=>[t("decode")]),_:1})]),e("li",null,[o(d,{to:"/doc/http/classes/Session.html#encode"},{default:a(()=>[t("encode")]),_:1})]),e("li",null,[o(d,{to:"/doc/http/classes/Session.html#invoke"},{default:a(()=>[t("invoke")]),_:1})]),e("li",null,[o(d,{to:"/doc/http/classes/Session.html#read"},{default:a(()=>[t("read")]),_:1})]),e("li",null,[o(d,{to:"/doc/http/classes/Session.html#update"},{default:a(()=>[t("update")]),_:1})]),e("li",null,[o(d,{to:"/doc/http/classes/Session.html#write"},{default:a(()=>[t("write")]),_:1})])]),g,_,e("p",null,[t("• "),y,t("<"),p,t(", "),x,t(">("),b,t(", "),m,t("): "),o(d,{to:"/doc/http/classes/Session.html"},{default:a(()=>[S]),_:1}),t("<"),k,t(", "),T,t(">")]),C,e("table",null,[N,e("tbody",null,[e("tr",null,[R,e("td",v,[o(d,{to:"/doc/http/classes/Cookie.html"},{default:a(()=>[w]),_:1}),t("<"),P,t(", "),D,t(">")])]),e("tr",null,[V,e("td",B,[o(d,{to:"/doc/http/#sessionoptions"},{default:a(()=>[L]),_:1})])])])]),M,e("p",null,[o(d,{to:"/doc/http/classes/Session.html"},{default:a(()=>[O]),_:1}),t("<"),j,t(", "),E,t(">")]),q,e("p",null,[t("▸ "),z,t("(): "),o(d,{to:"/doc/http/classes/Session.html"},{default:a(()=>[A]),_:1}),t("<"),F,t(", "),G,t(">")]),H,e("p",null,[o(d,{to:"/doc/http/classes/Session.html"},{default:a(()=>[I]),_:1}),t("<"),J,t(", "),K,t(">")]),Q,U,e("p",null,[t("▸ "),W,t("("),X,t(", "),Y,t("): "),o(d,{to:"/doc/http/classes/Session.html"},{default:a(()=>[Z]),_:1}),t("<"),$,t(", "),ee,t(">")]),te,e("p",null,[o(d,{to:"/doc/http/classes/Session.html"},{default:a(()=>[de]),_:1}),t("<"),oe,t(", "),ae,t(">")])])}const ce=n(i,[["render",se],["__file","Session.html.vue"]]);export{ce as default};
