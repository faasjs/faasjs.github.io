import{_ as c,r as d,o as r,c as l,a as e,d as t,w as n,b as o,e as a}from"./app-X5q6zgnw.js";const i={},h=a('<h1 id="class-session-s-c" tabindex="-1"><a class="header-anchor" href="#class-session-s-c"><span>Class: Session&lt;S, C&gt;</span></a></h1><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h2><p>• <strong>S</strong> extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></p><p>• <strong>C</strong> extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></p><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2><h3 id="new-session-cookie-config" tabindex="-1"><a class="header-anchor" href="#new-session-cookie-config"><span>new Session(cookie, config)</span></a></h3>',6),p=e("strong",null,"new Session",-1),u=e("code",null,"S",-1),g=e("code",null,"C",-1),_=e("code",null,"cookie",-1),k=e("code",null,"config",-1),b=e("code",null,"Session",-1),f=e("code",null,"S",-1),m=e("code",null,"C",-1),x=e("h4",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1),S=e("strong",null,"cookie",-1),q=e("code",null,"Cookie",-1),v=e("code",null,"C",-1),y=e("code",null,"S",-1),C=e("strong",null,"config",-1),w=e("code",null,"SessionOptions",-1),R=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1),P=e("code",null,"Session",-1),T=e("code",null,"S",-1),N=e("code",null,"C",-1),D=a('<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>config</span></a></h3><blockquote><p><strong><code>readonly</code></strong> <strong>config</strong>: <code>Object</code></p></blockquote><h4 id="ciphername" tabindex="-1"><a class="header-anchor" href="#ciphername"><span>cipherName</span></a></h4><blockquote><p><strong>cipherName</strong>: <code>string</code></p></blockquote><h4 id="digest" tabindex="-1"><a class="header-anchor" href="#digest"><span>digest</span></a></h4><blockquote><p><strong>digest</strong>: <code>string</code></p></blockquote><h4 id="iterations" tabindex="-1"><a class="header-anchor" href="#iterations"><span>iterations</span></a></h4><blockquote><p><strong>iterations</strong>: <code>number</code></p></blockquote><h4 id="key" tabindex="-1"><a class="header-anchor" href="#key"><span>key</span></a></h4><blockquote><p><strong>key</strong>: <code>string</code></p></blockquote><h4 id="keylen" tabindex="-1"><a class="header-anchor" href="#keylen"><span>keylen</span></a></h4><blockquote><p><strong>keylen</strong>: <code>number</code></p></blockquote><h4 id="salt" tabindex="-1"><a class="header-anchor" href="#salt"><span>salt</span></a></h4><blockquote><p><strong>salt</strong>: <code>string</code></p></blockquote><h4 id="secret" tabindex="-1"><a class="header-anchor" href="#secret"><span>secret</span></a></h4><blockquote><p><strong>secret</strong>: <code>string</code></p></blockquote><h4 id="signedsalt" tabindex="-1"><a class="header-anchor" href="#signedsalt"><span>signedSalt</span></a></h4><blockquote><p><strong>signedSalt</strong>: <code>string</code></p></blockquote><h3 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>content</span></a></h3><blockquote><p><strong>content</strong>: <code>Record</code>&lt;<code>string</code>, <code>string</code> | <code>number</code>&gt;</p></blockquote><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2><h3 id="decode" tabindex="-1"><a class="header-anchor" href="#decode"><span>decode()</span></a></h3><blockquote><p><strong>decode</strong>&lt;<code>TData</code>&gt;(<code>text</code>): <code>SessionContent</code> | <code>TData</code></p></blockquote><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type parameters</span></a></h4><p>• <strong>TData</strong> = <code>any</code></p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>text</strong>: <code>string</code></p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>SessionContent</code> | <code>TData</code></p><h3 id="encode" tabindex="-1"><a class="header-anchor" href="#encode"><span>encode()</span></a></h3><blockquote><p><strong>encode</strong>(<code>text</code>): <code>string</code></p></blockquote><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4><p>• <strong>text</strong>: <code>SessionContent</code></p><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4><p><code>string</code></p><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke"><span>invoke()</span></a></h3><blockquote><p><strong>invoke</strong>(<code>cookie</code>?, <code>logger</code>?): <code>void</code></p></blockquote><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4><p>• <strong>cookie?</strong>: <code>string</code></p><p>• <strong>logger?</strong>: <code>Logger</code></p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4><p><code>void</code></p><h3 id="read" tabindex="-1"><a class="header-anchor" href="#read"><span>read()</span></a></h3><blockquote><p><strong>read</strong>(<code>key</code>): <code>string</code> | <code>number</code></p></blockquote><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4><p><code>string</code> | <code>number</code></p><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>update()</span></a></h3>',50),O=e("strong",null,"update",-1),V=e("code",null,"Session",-1),B=e("code",null,"S",-1),L=e("code",null,"C",-1),j=e("h4",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5"},[e("span",null,"Returns")])],-1),M=e("code",null,"Session",-1),E=e("code",null,"S",-1),J=e("code",null,"C",-1),z=e("h3",{id:"write",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#write"},[e("span",null,"write()")])],-1),A=e("strong",null,"write",-1),F=e("code",null,"key",-1),G=e("code",null,"value",-1),H=e("code",null,"Session",-1),I=e("code",null,"S",-1),K=e("code",null,"C",-1),Q=a('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4><p>• <strong>key</strong>: <code>string</code></p><p>• <strong>value?</strong>: <code>string</code> | <code>number</code></p><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4>',4),U=e("code",null,"Session",-1),W=e("code",null,"S",-1),X=e("code",null,"C",-1);function Y(Z,$){const s=d("RouteLink");return r(),l("div",null,[e("p",null,[t(s,{to:"/doc/http/"},{default:n(()=>[o("Documents")]),_:1}),o(" / "),t(s,{to:"/doc/http/"},{default:n(()=>[o("@faasjs/http")]),_:1}),o(" / Session")]),h,e("blockquote",null,[e("p",null,[p,o("<"),u,o(", "),g,o(">("),_,o(", "),k,o("): "),t(s,{to:"/doc/http/classes/Session.html"},{default:n(()=>[b]),_:1}),o("<"),f,o(", "),m,o(">")])]),x,e("p",null,[o("• "),S,o(": "),t(s,{to:"/doc/http/classes/Cookie.html"},{default:n(()=>[q]),_:1}),o("<"),v,o(", "),y,o(">")]),e("p",null,[o("• "),C,o(": "),t(s,{to:"/doc/http/type-aliases/SessionOptions.html"},{default:n(()=>[w]),_:1})]),R,e("p",null,[t(s,{to:"/doc/http/classes/Session.html"},{default:n(()=>[P]),_:1}),o("<"),T,o(", "),N,o(">")]),D,e("blockquote",null,[e("p",null,[O,o("(): "),t(s,{to:"/doc/http/classes/Session.html"},{default:n(()=>[V]),_:1}),o("<"),B,o(", "),L,o(">")])]),j,e("p",null,[t(s,{to:"/doc/http/classes/Session.html"},{default:n(()=>[M]),_:1}),o("<"),E,o(", "),J,o(">")]),z,e("blockquote",null,[e("p",null,[A,o("("),F,o(", "),G,o("?): "),t(s,{to:"/doc/http/classes/Session.html"},{default:n(()=>[H]),_:1}),o("<"),I,o(", "),K,o(">")])]),Q,e("p",null,[t(s,{to:"/doc/http/classes/Session.html"},{default:n(()=>[U]),_:1}),o("<"),W,o(", "),X,o(">")])])}const oe=c(i,[["render",Y],["__file","Session.html.vue"]]),se=JSON.parse('{"path":"/doc/http/classes/Session.html","title":"Class: Session<S, C>","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"new Session(cookie, config)","slug":"new-session-cookie-config","link":"#new-session-cookie-config","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"content","slug":"content","link":"#content","children":[]}]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"decode()","slug":"decode","link":"#decode","children":[]},{"level":3,"title":"encode()","slug":"encode","link":"#encode","children":[]},{"level":3,"title":"invoke()","slug":"invoke","link":"#invoke","children":[]},{"level":3,"title":"read()","slug":"read","link":"#read","children":[]},{"level":3,"title":"update()","slug":"update","link":"#update","children":[]},{"level":3,"title":"write()","slug":"write","link":"#write","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/http/classes/Session.md"}');export{oe as comp,se as data};
