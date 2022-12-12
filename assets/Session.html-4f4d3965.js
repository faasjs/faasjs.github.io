import{_ as r,M as n,p as l,q as c,R as e,N as a,V as o,t,a1 as s}from"./framework-7e1a102e.js";const i={},h=s('<h1 id="class-session-s-c" tabindex="-1"><a class="header-anchor" href="#class-session-s-c" aria-hidden="true">#</a> Class: Session&lt;S, C&gt;</h1><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),f=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),g=s('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new Session</strong>&lt;<code>S</code>, <code>C</code>&gt;(<code>cookie</code>, <code>config</code>)</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>S</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>C</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',6),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),p=e("td",{style:{"text-align":"left"}},[e("code",null,"cookie")],-1),x={style:{"text-align":"left"}},_=e("code",null,"Cookie",-1),b=e("code",null,"C",-1),m=e("code",null,"S",-1),S=e("td",{style:{"text-align":"left"}},[e("code",null,"config")],-1),k={style:{"text-align":"left"}},T=e("code",null,"SessionOptions",-1),C=s('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>• <code>Readonly</code> <strong>config</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cipherName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>digest</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>iterations</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>keylen</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>salt</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>secret</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>signedSalt</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><hr><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> content</h3><p>• <strong>content</strong>: <code>Record</code>&lt;<code>string</code>, <code>string</code> | <code>number</code>&gt;</p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="decode" tabindex="-1"><a class="header-anchor" href="#decode" aria-hidden="true">#</a> decode</h3><p>▸ <strong>decode</strong>&lt;<code>TData</code>&gt;(<code>text</code>): <code>SessionContent</code> | <code>TData</code></p><h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>SessionContent</code> | <code>TData</code></p><hr><h3 id="encode" tabindex="-1"><a class="header-anchor" href="#encode" aria-hidden="true">#</a> encode</h3><p>▸ <strong>encode</strong>(<code>text</code>): <code>string</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>SessionContent</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>▸ <strong>invoke</strong>(<code>cookie?</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cookie?</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><hr><h3 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h3><p>▸ <strong>read</strong>(<code>key</code>): <code>string</code> | <code>number</code></p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>string</code> | <code>number</code></p><hr><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h3>',40),N=e("strong",null,"update",-1),R=e("code",null,"Session",-1),v=e("code",null,"S",-1),w=e("code",null,"C",-1),P=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),t(" Returns")],-1),V=e("code",null,"Session",-1),D=e("code",null,"S",-1),B=e("code",null,"C",-1),M=e("hr",null,null,-1),L=e("h3",{id:"write",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#write","aria-hidden":"true"},"#"),t(" write")],-1),O=e("strong",null,"write",-1),j=e("code",null,"key",-1),q=e("code",null,"value?",-1),E=e("code",null,"Session",-1),z=e("code",null,"S",-1),A=e("code",null,"C",-1),F=s('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>value?</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>',3),G=e("code",null,"Session",-1),H=e("code",null,"S",-1),I=e("code",null,"C",-1);function J(K,Q){const d=n("RouterLink");return l(),c("div",null,[h,e("ul",null,[e("li",null,[a(d,{to:"/doc/http/classes/Session.html#constructor"},{default:o(()=>[t("constructor")]),_:1})])]),u,e("ul",null,[e("li",null,[a(d,{to:"/doc/http/classes/Session.html#config"},{default:o(()=>[t("config")]),_:1})]),e("li",null,[a(d,{to:"/doc/http/classes/Session.html#content"},{default:o(()=>[t("content")]),_:1})])]),f,e("ul",null,[e("li",null,[a(d,{to:"/doc/http/classes/Session.html#decode"},{default:o(()=>[t("decode")]),_:1})]),e("li",null,[a(d,{to:"/doc/http/classes/Session.html#encode"},{default:o(()=>[t("encode")]),_:1})]),e("li",null,[a(d,{to:"/doc/http/classes/Session.html#invoke"},{default:o(()=>[t("invoke")]),_:1})]),e("li",null,[a(d,{to:"/doc/http/classes/Session.html#read"},{default:o(()=>[t("read")]),_:1})]),e("li",null,[a(d,{to:"/doc/http/classes/Session.html#update"},{default:o(()=>[t("update")]),_:1})]),e("li",null,[a(d,{to:"/doc/http/classes/Session.html#write"},{default:o(()=>[t("write")]),_:1})])]),g,e("table",null,[y,e("tbody",null,[e("tr",null,[p,e("td",x,[a(d,{to:"/doc/http/classes/Cookie.html"},{default:o(()=>[_]),_:1}),t("<"),b,t(", "),m,t(">")])]),e("tr",null,[S,e("td",k,[a(d,{to:"/doc/http/#sessionoptions"},{default:o(()=>[T]),_:1})])])])]),C,e("p",null,[t("▸ "),N,t("(): "),a(d,{to:"/doc/http/classes/Session.html"},{default:o(()=>[R]),_:1}),t("<"),v,t(", "),w,t(">")]),P,e("p",null,[a(d,{to:"/doc/http/classes/Session.html"},{default:o(()=>[V]),_:1}),t("<"),D,t(", "),B,t(">")]),M,L,e("p",null,[t("▸ "),O,t("("),j,t(", "),q,t("): "),a(d,{to:"/doc/http/classes/Session.html"},{default:o(()=>[E]),_:1}),t("<"),z,t(", "),A,t(">")]),F,e("p",null,[a(d,{to:"/doc/http/classes/Session.html"},{default:o(()=>[G]),_:1}),t("<"),H,t(", "),I,t(">")])])}const W=r(i,[["render",J],["__file","Session.html.vue"]]);export{W as default};
