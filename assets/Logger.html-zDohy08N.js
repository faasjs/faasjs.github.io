import{_ as o,r as d,o as r,c as i,a as e,b as s,w as l,d as t,e as n}from"./app-FkIzAiS7.js";const c={},h=n(`<h1 id="class-logger" tabindex="-1"><a class="header-anchor" href="#class-logger" aria-hidden="true">#</a> Class: Logger</h1><p>Logger Class</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;debug message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;info message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;warn message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;error message&#39;</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;message +1ms&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,5),g=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),u=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),p=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1","aria-hidden":"true"},"#"),t(" Constructors")],-1),f=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor","aria-hidden":"true"},"#"),t(" constructor")],-1),_=e("strong",null,"new Logger",-1),y=e("code",null,"label?",-1),m=e("code",null,"Logger",-1),x=n('<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>label?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} Prefix label</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>',3),b=e("code",null,"Logger",-1),L=n('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="colorfyoutput" tabindex="-1"><a class="header-anchor" href="#colorfyoutput" aria-hidden="true">#</a> colorfyOutput</h3><p>• <strong>colorfyOutput</strong>: <code>boolean</code> = <code>true</code></p><hr><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>• <code>Optional</code> <strong>label</strong>: <code>string</code></p><hr><h3 id="level" tabindex="-1"><a class="header-anchor" href="#level" aria-hidden="true">#</a> level</h3><p>• <strong>level</strong>: <code>number</code></p><hr><h3 id="silent" tabindex="-1"><a class="header-anchor" href="#silent" aria-hidden="true">#</a> silent</h3><p>• <strong>silent</strong>: <code>boolean</code></p><hr><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3><p>• <code>Optional</code> <strong>size</strong>: <code>number</code></p><p>size of log message, default 1000, set 0 to disable</p><p>env: FaasLogSize</p><hr><h3 id="stderr" tabindex="-1"><a class="header-anchor" href="#stderr" aria-hidden="true">#</a> stderr</h3><p>• <strong>stderr</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>text</code>): <code>void</code></p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><hr><h3 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> stdout</h3><p>• <strong>stdout</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>text</code>): <code>void</code></p><h5 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="colorfy" tabindex="-1"><a class="header-anchor" href="#colorfy" aria-hidden="true">#</a> colorfy</h3><p>▸ <strong>colorfy</strong>(<code>color</code>, <code>message</code>): <code>string</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">{number} color code</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>',44),k=e("strong",null,"debug",-1),v=e("code",null,"message",-1),w=e("code",null,"...args",-1),N=e("code",null,"Logger",-1),T=n('<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>',3),P=e("code",null,"Logger",-1),R=e("hr",null,null,-1),D=e("h3",{id:"error",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error","aria-hidden":"true"},"#"),t(" error")],-1),z=e("strong",null,"error",-1),E=e("code",null,"message",-1),C=e("code",null,"...args",-1),O=e("code",null,"Logger",-1),V=n('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code> | <code>Error</code></td><td style="text-align:left;">{any} message or Error object</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>',3),B=e("code",null,"Logger",-1),M=e("hr",null,null,-1),S=e("h3",{id:"info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),t(" info")],-1),j=e("strong",null,"info",-1),F=e("code",null,"message",-1),q=e("code",null,"...args",-1),A=e("code",null,"Logger",-1),G=n('<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>',3),H=e("code",null,"Logger",-1),I=e("hr",null,null,-1),J=e("h3",{id:"raw",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#raw","aria-hidden":"true"},"#"),t(" raw")],-1),K=e("strong",null,"raw",-1),Q=e("code",null,"message",-1),U=e("code",null,"...args",-1),W=e("code",null,"Logger",-1),X=n('<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7" aria-hidden="true">#</a> Returns</h4>',3),Y=e("code",null,"Logger",-1),Z=e("hr",null,null,-1),$=e("h3",{id:"time",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#time","aria-hidden":"true"},"#"),t(" time")],-1),ee=e("strong",null,"time",-1),te=e("code",null,"key",-1),ae=e("code",null,"level?",-1),se=e("code",null,"Logger",-1),le=e("h4",{id:"parameters-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-8","aria-hidden":"true"},"#"),t(" Parameters")],-1),ne=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Default value"),e("th",{style:{"text-align":"left"}},"Description")])],-1),oe=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"key")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},[e("code",null,"undefined")]),e("td",{style:{"text-align":"left"}},"{string} timer's label")],-1),de=e("td",{style:{"text-align":"left"}},[e("code",null,"level")],-1),re={style:{"text-align":"left"}},ie=e("code",null,"Level",-1),ce=e("td",{style:{"text-align":"left"}},[e("code",null,"'debug'")],-1),he=e("td",{style:{"text-align":"left"}},"[string=debug] 日志级别，支持 debug、info、warn、error",-1),ge=e("h4",{id:"returns-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-8","aria-hidden":"true"},"#"),t(" Returns")],-1),ue=e("code",null,"Logger",-1),pe=e("hr",null,null,-1),fe=e("h3",{id:"timeend",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#timeend","aria-hidden":"true"},"#"),t(" timeEnd")],-1),_e=e("strong",null,"timeEnd",-1),ye=e("code",null,"key",-1),me=e("code",null,"message",-1),xe=e("code",null,"...args",-1),be=e("code",null,"Logger",-1),Le=n('<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} timer&#39;s label</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4>',3),ke=e("code",null,"Logger",-1),ve=e("hr",null,null,-1),we=e("h3",{id:"warn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#warn","aria-hidden":"true"},"#"),t(" warn")],-1),Ne=e("strong",null,"warn",-1),Te=e("code",null,"message",-1),Pe=e("code",null,"...args",-1),Re=e("code",null,"Logger",-1),De=n('<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10" aria-hidden="true">#</a> Returns</h4>',3),ze=e("code",null,"Logger",-1);function Ee(Ce,Oe){const a=d("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#constructor"},{default:l(()=>[t("constructor")]),_:1})])]),g,e("ul",null,[e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#colorfyoutput"},{default:l(()=>[t("colorfyOutput")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#label"},{default:l(()=>[t("label")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#level"},{default:l(()=>[t("level")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#silent"},{default:l(()=>[t("silent")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#size"},{default:l(()=>[t("size")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#stderr"},{default:l(()=>[t("stderr")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#stdout"},{default:l(()=>[t("stdout")]),_:1})])]),u,e("ul",null,[e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#colorfy"},{default:l(()=>[t("colorfy")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#debug"},{default:l(()=>[t("debug")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#error"},{default:l(()=>[t("error")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#info"},{default:l(()=>[t("info")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#raw"},{default:l(()=>[t("raw")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#time"},{default:l(()=>[t("time")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#timeend"},{default:l(()=>[t("timeEnd")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#warn"},{default:l(()=>[t("warn")]),_:1})])]),p,f,e("p",null,[t("• "),_,t("("),y,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[m]),_:1})]),x,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[b]),_:1})]),L,e("p",null,[t("▸ "),k,t("("),v,t(", "),w,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[N]),_:1})]),T,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[P]),_:1})]),R,D,e("p",null,[t("▸ "),z,t("("),E,t(", "),C,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[O]),_:1})]),V,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[B]),_:1})]),M,S,e("p",null,[t("▸ "),j,t("("),F,t(", "),q,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[A]),_:1})]),G,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[H]),_:1})]),I,J,e("p",null,[t("▸ "),K,t("("),Q,t(", "),U,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[W]),_:1})]),X,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[Y]),_:1})]),Z,$,e("p",null,[t("▸ "),ee,t("("),te,t(", "),ae,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[se]),_:1})]),le,e("table",null,[ne,e("tbody",null,[oe,e("tr",null,[de,e("td",re,[s(a,{to:"/doc/logger/#level"},{default:l(()=>[ie]),_:1})]),ce,he])])]),ge,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[ue]),_:1})]),pe,fe,e("p",null,[t("▸ "),_e,t("("),ye,t(", "),me,t(", "),xe,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[be]),_:1})]),Le,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[ke]),_:1})]),ve,we,e("p",null,[t("▸ "),Ne,t("("),Te,t(", "),Pe,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[Re]),_:1})]),De,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[ze]),_:1})])])}const Be=o(c,[["render",Ee],["__file","Logger.html.vue"]]);export{Be as default};
