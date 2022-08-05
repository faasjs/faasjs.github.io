import{_ as l,o as d,c as r,b as t,d as a,w as o,a as n,e,r as i}from"./app.fb8d590e.js";const c={},h=n(`<h1 id="class-logger" tabindex="-1"><a class="header-anchor" href="#class-logger" aria-hidden="true">#</a> Class: Logger</h1><p>Logger Class</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;debug message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;info message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;warn message&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;error message&#39;</span><span class="token punctuation">)</span>

logger<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">)</span>
logger<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;timer name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;message +1ms&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,5),g=e("constructor"),u=t("h3",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),_=e("colorfyOutput"),p=e("label"),f=e("level"),y=e("silent"),x=e("stderr"),m=e("stdout"),b=t("h3",{id:"methods",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),e(" Methods")],-1),L=e("colorfy"),k=e("debug"),v=e("error"),w=e("info"),N=e("raw"),T=e("time"),P=e("timeEnd"),R=e("warn"),D=n('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new Logger</strong>(<code>label?</code>)</p><p>\u521D\u59CB\u5316\u65E5\u5FD7</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>label?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u65E5\u5FD7\u524D\u7F00</td></tr></tbody></table><h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="colorfyoutput" tabindex="-1"><a class="header-anchor" href="#colorfyoutput" aria-hidden="true">#</a> colorfyOutput</h3><p>\u2022 <strong>colorfyOutput</strong>: <code>boolean</code> = <code>true</code></p><hr><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p>\u2022 <code>Optional</code> <strong>label</strong>: <code>string</code></p><hr><h3 id="level" tabindex="-1"><a class="header-anchor" href="#level" aria-hidden="true">#</a> level</h3><p>\u2022 <strong>level</strong>: <code>number</code></p><hr><h3 id="silent" tabindex="-1"><a class="header-anchor" href="#silent" aria-hidden="true">#</a> silent</h3><p>\u2022 <strong>silent</strong>: <code>boolean</code></p><hr><h3 id="stderr" tabindex="-1"><a class="header-anchor" href="#stderr" aria-hidden="true">#</a> stderr</h3><p>\u2022 <strong>stderr</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><p>\u25B8 (<code>text</code>): <code>void</code></p><h5 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><hr><h3 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> stdout</h3><p>\u2022 <strong>stdout</strong>: (<code>text</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1"><a class="header-anchor" href="#type-declaration-1" aria-hidden="true">#</a> Type declaration</h4><p>\u25B8 (<code>text</code>): <code>void</code></p><h5 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h5><p><code>void</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="colorfy" tabindex="-1"><a class="header-anchor" href="#colorfy" aria-hidden="true">#</a> colorfy</h3><p>\u25B8 <strong>colorfy</strong>(<code>color</code>, <code>message</code>): <code>string</code></p><p>\u6587\u672C\u67D3\u8272</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">{number} \u989C\u8272\u4EE3\u7801</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u6587\u672C\u5185\u5BB9</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>string</code></p><hr><h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug" aria-hidden="true">#</a> debug</h3>',46),E=e("\u25B8 "),C=t("strong",null,"debug",-1),O=e("("),V=t("code",null,"message",-1),B=e(", ..."),M=t("code",null,"args",-1),S=e("): "),j=t("code",null,"Logger",-1),q=n('<p>\u8C03\u8BD5\u7EA7\u522B\u65E5\u5FD7</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u65E5\u5FD7\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} \u5185\u5BB9\u53C2\u6570</td></tr></tbody></table><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4>',4),z=t("code",null,"Logger",-1),A=t("hr",null,null,-1),F=t("h3",{id:"error",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#error","aria-hidden":"true"},"#"),e(" error")],-1),G=e("\u25B8 "),H=t("strong",null,"error",-1),I=e("("),J=t("code",null,"message",-1),K=e(", ..."),Q=t("code",null,"args",-1),U=e("): "),W=t("code",null,"Logger",-1),X=n('<p>\u9519\u8BEF\u7EA7\u522B\u65E5\u5FD7</p><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code> | <code>Error</code></td><td style="text-align:left;">{any} \u65E5\u5FD7\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4E3A Error \u5BF9\u8C61</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} \u5185\u5BB9\u53C2\u6570</td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4>',4),Y=t("code",null,"Logger",-1),Z=t("hr",null,null,-1),$=t("h3",{id:"info",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),e(" info")],-1),tt=e("\u25B8 "),et=t("strong",null,"info",-1),st=e("("),at=t("code",null,"message",-1),ot=e(", ..."),nt=t("code",null,"args",-1),lt=e("): "),dt=t("code",null,"Logger",-1),rt=n('<p>\u4FE1\u606F\u7EA7\u522B\u65E5\u5FD7</p><h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u65E5\u5FD7\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} \u5185\u5BB9\u53C2\u6570</td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4>',4),it=t("code",null,"Logger",-1),ct=t("hr",null,null,-1),ht=t("h3",{id:"raw",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#raw","aria-hidden":"true"},"#"),e(" raw")],-1),gt=e("\u25B8 "),ut=t("strong",null,"raw",-1),_t=e("("),pt=t("code",null,"message",-1),ft=e(", ..."),yt=t("code",null,"args",-1),xt=e("): "),mt=t("code",null,"Logger",-1),bt=n('<p>\u7EAF\u8F93\u51FA\u65E5\u5FD7</p><h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u65E5\u5FD7\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} \u5185\u5BB9\u53C2\u6570</td></tr></tbody></table><h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6" aria-hidden="true">#</a> Returns</h4>',4),Lt=t("code",null,"Logger",-1),kt=t("hr",null,null,-1),vt=t("h3",{id:"time",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#time","aria-hidden":"true"},"#"),e(" time")],-1),wt=e("\u25B8 "),Nt=t("strong",null,"time",-1),Tt=e("("),Pt=t("code",null,"key",-1),Rt=e(", "),Dt=t("code",null,"level?",-1),Et=e("): "),Ct=t("code",null,"Logger",-1),Ot=t("p",null,"\u8BBE\u7F6E\u4E00\u4E2A\u8BA1\u65F6\u5668",-1),Vt=t("h4",{id:"parameters-8",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#parameters-8","aria-hidden":"true"},"#"),e(" Parameters")],-1),Bt=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Default value"),t("th",{style:{"text-align":"left"}},"Description")])],-1),Mt=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"key")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string")]),t("td",{style:{"text-align":"left"}},[t("code",null,"undefined")]),t("td",{style:{"text-align":"left"}},"{string} \u8BA1\u65F6\u5668\u6807\u8BC6")],-1),St=t("td",{style:{"text-align":"left"}},[t("code",null,"level")],-1),jt={style:{"text-align":"left"}},qt=t("code",null,"Level",-1),zt=t("td",{style:{"text-align":"left"}},[t("code",null,"'debug'")],-1),At=t("td",{style:{"text-align":"left"}},"[string=debug] \u65E5\u5FD7\u7EA7\u522B\uFF0C\u652F\u6301 debug\u3001info\u3001warn\u3001error",-1),Ft=t("h4",{id:"returns-7",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#returns-7","aria-hidden":"true"},"#"),e(" Returns")],-1),Gt=t("code",null,"Logger",-1),Ht=t("hr",null,null,-1),It=t("h3",{id:"timeend",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#timeend","aria-hidden":"true"},"#"),e(" timeEnd")],-1),Jt=e("\u25B8 "),Kt=t("strong",null,"timeEnd",-1),Qt=e("("),Ut=t("code",null,"key",-1),Wt=e(", "),Xt=t("code",null,"message",-1),Yt=e(", ..."),Zt=t("code",null,"args",-1),$t=e("): "),te=t("code",null,"Logger",-1),ee=n('<p>\u7ED3\u675F\u8BA1\u65F6\u5E76\u663E\u793A\u65E5\u5FD7</p><h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u8BA1\u65F6\u5668\u6807\u8BC6</td></tr><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u65E5\u5FD7\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} \u5185\u5BB9\u53C2\u6570</td></tr></tbody></table><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4>',4),se=t("code",null,"Logger",-1),ae=t("hr",null,null,-1),oe=t("h3",{id:"warn",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#warn","aria-hidden":"true"},"#"),e(" warn")],-1),ne=e("\u25B8 "),le=t("strong",null,"warn",-1),de=e("("),re=t("code",null,"message",-1),ie=e(", ..."),ce=t("code",null,"args",-1),he=e("): "),ge=t("code",null,"Logger",-1),ue=n('<p>\u8B66\u544A\u7EA7\u522B\u65E5\u5FD7</p><h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">{string} \u65E5\u5FD7\u5185\u5BB9</td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">{...any=} \u5185\u5BB9\u53C2\u6570</td></tr></tbody></table><h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9" aria-hidden="true">#</a> Returns</h4>',4),_e=t("code",null,"Logger",-1);function pe(fe,ye){const s=i("RouterLink");return d(),r("div",null,[h,t("ul",null,[t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#constructor"},{default:o(()=>[g]),_:1})])]),u,t("ul",null,[t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#colorfyoutput"},{default:o(()=>[_]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#label"},{default:o(()=>[p]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#level"},{default:o(()=>[f]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#silent"},{default:o(()=>[y]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#stderr"},{default:o(()=>[x]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#stdout"},{default:o(()=>[m]),_:1})])]),b,t("ul",null,[t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#colorfy"},{default:o(()=>[L]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#debug"},{default:o(()=>[k]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#error"},{default:o(()=>[v]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#info"},{default:o(()=>[w]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#raw"},{default:o(()=>[N]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#time"},{default:o(()=>[T]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#timeend"},{default:o(()=>[P]),_:1})]),t("li",null,[a(s,{to:"/doc/logger/classes/Logger.html#warn"},{default:o(()=>[R]),_:1})])]),D,t("p",null,[E,C,O,V,B,M,S,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[j]),_:1})]),q,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[z]),_:1})]),A,F,t("p",null,[G,H,I,J,K,Q,U,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[W]),_:1})]),X,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Y]),_:1})]),Z,$,t("p",null,[tt,et,st,at,ot,nt,lt,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[dt]),_:1})]),rt,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[it]),_:1})]),ct,ht,t("p",null,[gt,ut,_t,pt,ft,yt,xt,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[mt]),_:1})]),bt,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Lt]),_:1})]),kt,vt,t("p",null,[wt,Nt,Tt,Pt,Rt,Dt,Et,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Ct]),_:1})]),Ot,Vt,t("table",null,[Bt,t("tbody",null,[Mt,t("tr",null,[St,t("td",jt,[a(s,{to:"/doc/logger/#level"},{default:o(()=>[qt]),_:1})]),zt,At])])]),Ft,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[Gt]),_:1})]),Ht,It,t("p",null,[Jt,Kt,Qt,Ut,Wt,Xt,Yt,Zt,$t,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[te]),_:1})]),ee,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[se]),_:1})]),ae,oe,t("p",null,[ne,le,de,re,ie,ce,he,a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[ge]),_:1})]),ue,t("p",null,[a(s,{to:"/doc/logger/classes/Logger.html"},{default:o(()=>[_e]),_:1})])])}var me=l(c,[["render",pe],["__file","Logger.html.vue"]]);export{me as default};
