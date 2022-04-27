import{_ as n,r,o as c,a as l,b as e,d as o,w as a,F as h,c as s,e as t}from"./app.44bc8180.js";const i={},u=s('<h1 id="class-funcwarper" tabindex="-1"><a class="header-anchor" href="#class-funcwarper" aria-hidden="true">#</a> Class: FuncWarper</h1><p>\u81EA\u52A8\u5316\u6D4B\u8BD5\u7528\u7684\u4E91\u51FD\u6570\u5B9E\u4F8B</p><h2 id="indexable" tabindex="-1"><a class="header-anchor" href="#indexable" aria-hidden="true">#</a> Indexable</h2><p>\u25AA [key: <code>string</code>]: <code>any</code></p><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',6),_=t("constructor"),g=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),f=t("config"),p=t("file"),y=t("func"),x=t("logger"),m=t("plugins"),b=t("staging"),F=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),T=t("JSONhandler"),W=t("handler"),P=t("mount"),R=s('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new FuncWarper</strong>(<code>initBy</code>)</p><p>\u521B\u5EFA\u6D4B\u8BD5\u5B9E\u4F8B</p><p><strong><code>example</code></strong> new TestCase(require.resolve(&#39;../demo.flow.ts&#39;))</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',6),N=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),v=e("td",{style:{"text-align":"left"}},[e("code",null,"initBy")],-1),C={style:{"text-align":"left"}},j=e("code",null,"Func",-1),k=t("<"),w=e("code",null,"any",-1),O=t(", "),B=e("code",null,"any",-1),D=t(", "),S=e("code",null,"any",-1),V=t(">"),J=s('<p>\u2022 <strong>new FuncWarper</strong>(<code>initBy</code>)</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>initBy</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3>',5),L=t("\u2022 "),M=e("code",null,"Readonly",-1),q=t(),E=e("strong",null,"config",-1),I=t(": "),z=e("code",null,"Config",-1),A=s('<hr><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h3><p>\u2022 <code>Readonly</code> <strong>file</strong>: <code>string</code></p><hr><h3 id="func" tabindex="-1"><a class="header-anchor" href="#func" aria-hidden="true">#</a> func</h3>',5),G=t("\u2022 "),H=e("code",null,"Readonly",-1),K=t(),Q=e("strong",null,"func",-1),U=t(": "),X=e("code",null,"Func",-1),Y=t("<"),Z=e("code",null,"any",-1),$=t(", "),ee=e("code",null,"any",-1),te=t(", "),de=e("code",null,"any",-1),oe=t(">"),ae=s('<hr><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3><p>\u2022 <code>Readonly</code> <strong>logger</strong>: <code>Logger</code></p><hr><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>',5),se=t("\u2022 "),ne=e("code",null,"Readonly",-1),re=t(),ce=e("strong",null,"plugins",-1),le=t(": "),he=e("code",null,"Plugin",-1),ie=t("[]"),ue=s('<hr><h3 id="staging" tabindex="-1"><a class="header-anchor" href="#staging" aria-hidden="true">#</a> staging</h3><p>\u2022 <code>Readonly</code> <strong>staging</strong>: <code>string</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="jsonhandler" tabindex="-1"><a class="header-anchor" href="#jsonhandler" aria-hidden="true">#</a> JSONhandler</h3><p>\u25B8 <strong>JSONhandler</strong>&lt;<code>TData</code>&gt;(<code>body?</code>, <code>options?</code>): <code>Promise</code>&lt;{ <code>body</code>: <code>any</code> ; <code>data?</code>: <code>TData</code> ; <code>error?</code>: { <code>message</code>: <code>string</code> } ; <code>headers</code>: { <code>[key: string]</code>: <code>string</code>; } ; <code>statusCode</code>: <code>number</code> }&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TData</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>body?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.cookie?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.headers?</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.session?</code></td><td style="text-align:left;"><code>Object</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;{ <code>body</code>: <code>any</code> ; <code>data?</code>: <code>TData</code> ; <code>error?</code>: { <code>message</code>: <code>string</code> } ; <code>headers</code>: { <code>[key: string]</code>: <code>string</code>; } ; <code>statusCode</code>: <code>number</code> }&gt;</p><hr><h3 id="handler" tabindex="-1"><a class="header-anchor" href="#handler" aria-hidden="true">#</a> handler</h3><p>\u25B8 <strong>handler</strong>&lt;<code>TResult</code>&gt;(<code>event?</code>, <code>context?</code>): <code>Promise</code>&lt;<code>TResult</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TResult</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>context</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>TResult</code>&gt;</p><hr><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3><p>\u25B8 <strong>mount</strong>(<code>handler?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>',25),_e=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),ge=e("td",{style:{"text-align":"left"}},[e("code",null,"handler?")],-1),fe={style:{"text-align":"left"}},pe=t("("),ye=e("code",null,"func",-1),xe=t(": "),me=e("code",null,"FuncWarper",-1),be=t(") => "),Fe=e("code",null,"void",-1),Te=t(" | "),We=e("code",null,"Promise",-1),Pe=t("<"),Re=e("code",null,"void",-1),Ne=t(">"),ve=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),t(" Returns")],-1),Ce=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1);function je(ke,we){const d=r("RouterLink");return c(),l(h,null,[u,e("ul",null,[e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#constructor"},{default:a(()=>[_]),_:1})])]),g,e("ul",null,[e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#config"},{default:a(()=>[f]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#file"},{default:a(()=>[p]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#func"},{default:a(()=>[y]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#logger"},{default:a(()=>[x]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#plugins"},{default:a(()=>[m]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#staging"},{default:a(()=>[b]),_:1})])]),F,e("ul",null,[e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#jsonhandler"},{default:a(()=>[T]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#handler"},{default:a(()=>[W]),_:1})]),e("li",null,[o(d,{to:"/doc/test/classes/FuncWarper.html#mount"},{default:a(()=>[P]),_:1})])]),R,e("table",null,[N,e("tbody",null,[e("tr",null,[v,e("td",C,[o(d,{to:"/doc/test/classes/Func.html"},{default:a(()=>[j]),_:1}),k,w,O,B,D,S,V])])])]),J,e("p",null,[L,M,q,E,I,o(d,{to:"/doc/test/#config"},{default:a(()=>[z]),_:1})]),A,e("p",null,[G,H,K,Q,U,o(d,{to:"/doc/test/classes/Func.html"},{default:a(()=>[X]),_:1}),Y,Z,$,ee,te,de,oe]),ae,e("p",null,[se,ne,re,ce,le,o(d,{to:"/doc/test/#plugin"},{default:a(()=>[he]),_:1}),ie]),ue,e("table",null,[_e,e("tbody",null,[e("tr",null,[ge,e("td",fe,[pe,ye,xe,o(d,{to:"/doc/test/classes/FuncWarper.html"},{default:a(()=>[me]),_:1}),be,Fe,Te,We,Pe,Re,Ne])])])]),ve,Ce],64)}var Be=n(i,[["render",je],["__file","FuncWarper.html.vue"]]);export{Be as default};
