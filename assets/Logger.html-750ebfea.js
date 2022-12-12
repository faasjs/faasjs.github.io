import{_ as d,M as o,p as r,q as i,R as e,N as s,V as l,t,a1 as n}from"./framework-7e1a102e.js";const c={},h=n(`<h1 id="class-logger" tabindex="-1"><a class="header-anchor" href="#class-logger" aria-hidden="true">#</a> Class: Logger</h1><p>Logger Class</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;debug message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;info message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;warn message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;error message&#39;</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;message +1ms&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,5),g=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),u=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),p=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new Logger</strong>(<code>label?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>label?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} Prefix label</td></tr></tbody></table><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="colorfyoutput" tabindex="-1"><a class="header-anchor" href="#colorfyoutput" aria-hidden="true">#</a> colorfyOutput</h3><p>• <strong>colorfyOutput</strong>: <code>boolean</code> = <code>true</code></p><hr><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>• <code>Optional</code> <strong>label</strong>: <code>string</code></p><hr><h3 id="level" tabindex="-1"><a class="header-anchor" href="#level" aria-hidden="true">#</a> level</h3><p>• <strong>level</strong>: <code>number</code></p><hr><h3 id="silent" tabindex="-1"><a class="header-anchor" href="#silent" aria-hidden="true">#</a> silent</h3><p>• <strong>silent</strong>: <code>boolean</code></p><hr><h3 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h3><p>• <code>Optional</code> <strong>size</strong>: <code>number</code></p><hr><h3 id="stderr" tabindex="-1"><a class="header-anchor" href="#stderr" aria-hidden="true">#</a> stderr</h3><p>• <strong>stderr</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>text</code>): <code>void</code></p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><hr><h3 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> stdout</h3><p>• <strong>stdout</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><p>▸ (<code>text</code>): <code>void</code></p><h5 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="colorfy" tabindex="-1"><a class="header-anchor" href="#colorfy" aria-hidden="true">#</a> colorfy</h3><p>▸ <strong>colorfy</strong>(<code>color</code>, <code>message</code>): <code>string</code></p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">{number} color code</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>',47),f=e("strong",null,"debug",-1),_=e("code",null,"message",-1),y=e("code",null,"...args",-1),m=e("code",null,"Logger",-1),x=n('<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>',3),b=e("code",null,"Logger",-1),L=e("hr",null,null,-1),k=e("h3",{id:"error",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error","aria-hidden":"true"},"#"),t(" error")],-1),v=e("strong",null,"error",-1),w=e("code",null,"message",-1),N=e("code",null,"...args",-1),T=e("code",null,"Logger",-1),P=n('<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code> | <code>Error</code></td><td style="text-align:left;">{any} message or Error object</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>',3),R=e("code",null,"Logger",-1),D=e("hr",null,null,-1),E=e("h3",{id:"info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),t(" info")],-1),z=e("strong",null,"info",-1),C=e("code",null,"message",-1),O=e("code",null,"...args",-1),V=e("code",null,"Logger",-1),B=n('<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>',3),M=e("code",null,"Logger",-1),j=e("hr",null,null,-1),q=e("h3",{id:"raw",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#raw","aria-hidden":"true"},"#"),t(" raw")],-1),S=e("strong",null,"raw",-1),A=e("code",null,"message",-1),F=e("code",null,"...args",-1),G=e("code",null,"Logger",-1),H=n('<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>',3),I=e("code",null,"Logger",-1),J=e("hr",null,null,-1),K=e("h3",{id:"time",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#time","aria-hidden":"true"},"#"),t(" time")],-1),Q=e("strong",null,"time",-1),U=e("code",null,"key",-1),W=e("code",null,"level?",-1),X=e("code",null,"Logger",-1),Y=e("h4",{id:"parameters-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters-8","aria-hidden":"true"},"#"),t(" Parameters")],-1),Z=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Default value"),e("th",{style:{"text-align":"left"}},"Description")])],-1),$=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"key")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},[e("code",null,"undefined")]),e("td",{style:{"text-align":"left"}},"{string} timer's label")],-1),ee=e("td",{style:{"text-align":"left"}},[e("code",null,"level")],-1),te={style:{"text-align":"left"}},ae=e("code",null,"Level",-1),se=e("td",{style:{"text-align":"left"}},[e("code",null,"'debug'")],-1),le=e("td",{style:{"text-align":"left"}},"[string=debug] 日志级别，支持 debug、info、warn、error",-1),ne=e("h4",{id:"returns-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-7","aria-hidden":"true"},"#"),t(" Returns")],-1),de=e("code",null,"Logger",-1),oe=e("hr",null,null,-1),re=e("h3",{id:"timeend",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#timeend","aria-hidden":"true"},"#"),t(" timeEnd")],-1),ie=e("strong",null,"timeEnd",-1),ce=e("code",null,"key",-1),he=e("code",null,"message",-1),ge=e("code",null,"...args",-1),ue=e("code",null,"Logger",-1),pe=n('<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} timer&#39;s label</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4>',3),fe=e("code",null,"Logger",-1),_e=e("hr",null,null,-1),ye=e("h3",{id:"warn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#warn","aria-hidden":"true"},"#"),t(" warn")],-1),me=e("strong",null,"warn",-1),xe=e("code",null,"message",-1),be=e("code",null,"...args",-1),Le=e("code",null,"Logger",-1),ke=n('<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} message</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} arguments</td></tr></tbody></table><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4>',3),ve=e("code",null,"Logger",-1);function we(Ne,Te){const a=o("RouterLink");return r(),i("div",null,[h,e("ul",null,[e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#constructor"},{default:l(()=>[t("constructor")]),_:1})])]),g,e("ul",null,[e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#colorfyoutput"},{default:l(()=>[t("colorfyOutput")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#label"},{default:l(()=>[t("label")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#level"},{default:l(()=>[t("level")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#silent"},{default:l(()=>[t("silent")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#size"},{default:l(()=>[t("size")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#stderr"},{default:l(()=>[t("stderr")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#stdout"},{default:l(()=>[t("stdout")]),_:1})])]),u,e("ul",null,[e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#colorfy"},{default:l(()=>[t("colorfy")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#debug"},{default:l(()=>[t("debug")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#error"},{default:l(()=>[t("error")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#info"},{default:l(()=>[t("info")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#raw"},{default:l(()=>[t("raw")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#time"},{default:l(()=>[t("time")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#timeend"},{default:l(()=>[t("timeEnd")]),_:1})]),e("li",null,[s(a,{to:"/doc/logger/classes/Logger.html#warn"},{default:l(()=>[t("warn")]),_:1})])]),p,e("p",null,[t("▸ "),f,t("("),_,t(", "),y,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[m]),_:1})]),x,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[b]),_:1})]),L,k,e("p",null,[t("▸ "),v,t("("),w,t(", "),N,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[T]),_:1})]),P,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[R]),_:1})]),D,E,e("p",null,[t("▸ "),z,t("("),C,t(", "),O,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[V]),_:1})]),B,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[M]),_:1})]),j,q,e("p",null,[t("▸ "),S,t("("),A,t(", "),F,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[G]),_:1})]),H,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[I]),_:1})]),J,K,e("p",null,[t("▸ "),Q,t("("),U,t(", "),W,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[X]),_:1})]),Y,e("table",null,[Z,e("tbody",null,[$,e("tr",null,[ee,e("td",te,[s(a,{to:"/doc/logger/#level"},{default:l(()=>[ae]),_:1})]),se,le])])]),ne,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[de]),_:1})]),oe,re,e("p",null,[t("▸ "),ie,t("("),ce,t(", "),he,t(", "),ge,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[ue]),_:1})]),pe,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[fe]),_:1})]),_e,ye,e("p",null,[t("▸ "),me,t("("),xe,t(", "),be,t("): "),s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[Le]),_:1})]),ke,e("p",null,[s(a,{to:"/doc/logger/classes/Logger.html"},{default:l(()=>[ve]),_:1})])])}const Re=d(c,[["render",we],["__file","Logger.html.vue"]]);export{Re as default};
