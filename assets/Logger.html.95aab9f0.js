import{_ as l,r as d,o as r,c as i,b as e,d as a,w as o,a as n,e as t}from"./app.2218cd7f.js";const c={},h=n(`<h1 id="class-logger" tabindex="-1"><a class="header-anchor" href="#class-logger" aria-hidden="true">#</a> Class: Logger</h1><p>Logger Class</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;debug message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;info message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;warn message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;error message&#39;</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;message +1ms&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,5),g=t("constructor"),u=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),_=t("colorfyOutput"),p=t("label"),f=t("level"),y=t("silent"),m=t("stderr"),x=t("stdout"),b=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),L=t("colorfy"),k=t("debug"),v=t("error"),w=t("info"),N=t("raw"),T=t("time"),P=t("timeEnd"),R=t("warn"),D=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new Logger</strong>(<code>label?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>label?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} Prefix label</td></tr></tbody></table><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="colorfyoutput" tabindex="-1"><a class="header-anchor" href="#colorfyoutput" aria-hidden="true">#</a> colorfyOutput</h3><p>\u2022 <strong>colorfyOutput</strong>: <code>boolean</code> = <code>true</code></p><hr><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>\u2022 <code>Optional</code> <strong>label</strong>: <code>string</code></p><hr><h3 id="level" tabindex="-1"><a class="header-anchor" href="#level" aria-hidden="true">#</a> level</h3><p>\u2022 <strong>level</strong>: <code>number</code></p><hr><h3 id="silent" tabindex="-1"><a class="header-anchor" href="#silent" aria-hidden="true">#</a> silent</h3><p>\u2022 <strong>silent</strong>: <code>boolean</code></p><hr><h3 id="stderr" tabindex="-1"><a class="header-anchor" href="#stderr" aria-hidden="true">#</a> stderr</h3><p>\u2022 <strong>stderr</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>\u25B8 (<code>text</code>): <code>void</code></p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><hr><h3 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> stdout</h3><p>\u2022 <strong>stdout</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><p>\u25B8 (<code>text</code>): <code>void</code></p><h5 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="colorfy" tabindex="-1"><a class="header-anchor" href="#colorfy" aria-hidden="true">#</a> colorfy</h3><p>\u25B8 <strong>colorfy</strong>(<code>color</code>, <code>message</code>): <code>string</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">{number} color code</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>',44),E=t("\u25B8 "),C=e("strong",null,"debug",-1),O=t("("),V=e("code",null,"message",-1),B=t(", ..."),M=e("code",null,"args",-1),j=t("): "),S=e("code",null,"Logger",-1),q=n('<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>',3),z=e("code",null,"Logger",-1),A=e("hr",null,null,-1),F=e("h3",{id:"error",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error","aria-hidden":"true"},"#"),t(" error")],-1),G=t("\u25B8 "),H=e("strong",null,"error",-1),I=t("("),J=e("code",null,"message",-1),K=t(", ..."),Q=e("code",null,"args",-1),U=t("): "),W=e("code",null,"Logger",-1),X=n('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code> | <code>Error</code></td><td style="text-align:left;">{any} message or Error object</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>',3),Y=e("code",null,"Logger",-1),Z=e("hr",null,null,-1),$=e("h3",{id:"info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),t(" info")],-1),ee=t("\u25B8 "),te=e("strong",null,"info",-1),se=t("("),ae=e("code",null,"message",-1),oe=t(", ..."),ne=e("code",null,"args",-1),le=t("): "),de=e("code",null,"Logger",-1),re=n('<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>',3),ie=e("code",null,"Logger",-1),ce=e("hr",null,null,-1),he=e("h3",{id:"raw",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#raw","aria-hidden":"true"},"#"),t(" raw")],-1),ge=t("\u25B8 "),ue=e("strong",null,"raw",-1),_e=t("("),pe=e("code",null,"message",-1),fe=t(", ..."),ye=e("code",null,"args",-1),me=t("): "),xe=e("code",null,"Logger",-1),be=n('<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>',3),Le=e("code",null,"Logger",-1),ke=e("hr",null,null,-1),ve=e("h3",{id:"time",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#time","aria-hidden":"true"},"#"),t(" time")],-1),we=t("\u25B8 "),Ne=e("strong",null,"time",-1),Te=t("("),Pe=e("code",null,"key",-1),Re=t(", "),De=e("code",null,"level?",-1),Ee=t("): "),Ce=e("code",null,"Logger",-1),Oe=e("h4",{id:"parameters-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-8","aria-hidden":"true"},"#"),t(" Parameters")],-1),Ve=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Default value"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Be=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"key")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},[e("code",null,"undefined")]),e("td",{style:{"text-align":"left"}},"{string} timer's label")],-1),Me=e("td",{style:{"text-align":"left"}},[e("code",null,"level")],-1),je={style:{"text-align":"left"}},Se=e("code",null,"Level",-1),qe=e("td",{style:{"text-align":"left"}},[e("code",null,"'debug'")],-1),ze=e("td",{style:{"text-align":"left"}},"[string=debug] \u65E5\u5FD7\u7EA7\u522B\uFF0C\u652F\u6301 debug\u3001info\u3001warn\u3001error",-1),Ae=e("h4",{id:"returns-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-7","aria-hidden":"true"},"#"),t(" Returns")],-1),Fe=e("code",null,"Logger",-1),Ge=e("hr",null,null,-1),He=e("h3",{id:"timeend",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#timeend","aria-hidden":"true"},"#"),t(" timeEnd")],-1),Ie=t("\u25B8 "),Je=e("strong",null,"timeEnd",-1),Ke=t("("),Qe=e("code",null,"key",-1),Ue=t(", "),We=e("code",null,"message",-1),Xe=t(", ..."),Ye=e("code",null,"args",-1),Ze=t("): "),$e=e("code",null,"Logger",-1),et=n('<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} timer&#39;s label</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4>',3),tt=e("code",null,"Logger",-1),st=e("hr",null,null,-1),at=e("h3",{id:"warn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#warn","aria-hidden":"true"},"#"),t(" warn")],-1),ot=t("\u25B8 "),nt=e("strong",null,"warn",-1),lt=t("("),dt=e("code",null,"message",-1),rt=t(", ..."),it=e("code",null,"args",-1),ct=t("): "),ht=e("code",null,"Logger",-1),gt=n('<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4>',3),ut=e("code",null,"Logger",-1);function _t(pt,ft){const s=d("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#constructor"},{default:o(()=>[g]),_:1})])]),u,e("ul",null,[e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#colorfyoutput"},{default:o(()=>[_]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#label"},{default:o(()=>[p]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#level"},{default:o(()=>[f]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#silent"},{default:o(()=>[y]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#stderr"},{default:o(()=>[m]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#stdout"},{default:o(()=>[x]),_:1})])]),b,e("ul",null,[e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#colorfy"},{default:o(()=>[L]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#debug"},{default:o(()=>[k]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#error"},{default:o(()=>[v]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#info"},{default:o(()=>[w]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#raw"},{default:o(()=>[N]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#time"},{default:o(()=>[T]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#timeend"},{default:o(()=>[P]),_:1})]),e("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#warn"},{default:o(()=>[R]),_:1})])]),D,e("p",null,[E,C,O,V,B,M,j,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[S]),_:1})]),q,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[z]),_:1})]),A,F,e("p",null,[G,H,I,J,K,Q,U,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[W]),_:1})]),X,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Y]),_:1})]),Z,$,e("p",null,[ee,te,se,ae,oe,ne,le,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[de]),_:1})]),re,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[ie]),_:1})]),ce,he,e("p",null,[ge,ue,_e,pe,fe,ye,me,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[xe]),_:1})]),be,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Le]),_:1})]),ke,ve,e("p",null,[we,Ne,Te,Pe,Re,De,Ee,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Ce]),_:1})]),Oe,e("table",null,[Ve,e("tbody",null,[Be,e("tr",null,[Me,e("td",je,[a(s,{to:"/doc/logger/#level"},{default:o(()=>[Se]),_:1})]),qe,ze])])]),Ae,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Fe]),_:1})]),Ge,He,e("p",null,[Ie,Je,Ke,Qe,Ue,We,Xe,Ye,Ze,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[$e]),_:1})]),et,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[tt]),_:1})]),st,at,e("p",null,[ot,nt,lt,dt,rt,it,ct,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[ht]),_:1})]),gt,e("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[ut]),_:1})])])}const mt=l(c,[["render",_t],["__file","Logger.html.vue"]]);export{mt as default};