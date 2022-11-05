import{_ as l,r,o as d,c,b as t,d as a,w as n,e,a as o}from"./app.996a5c94.js";const i={},h=o(`<h1 id="class-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#class-faasbrowserclient" aria-hidden="true">#</a> Class: FaasBrowserClient</h1><p>FaasJS browser client</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,5),u=t("h3",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),p=t("h3",{id:"methods",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),e(" Methods")],-1),_=o('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new FaasBrowserClient</strong>(<code>baseUrl</code>, <code>options?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),f=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type")])],-1),b=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"baseUrl")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string")])],-1),x=t("td",{style:{"text-align":"left"}},[t("code",null,"options?")],-1),m={style:{"text-align":"left"}},y=t("code",null,"Options",-1),g=t("h2",{id:"properties-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),e(" Properties")],-1),w=t("h3",{id:"defaultoptions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#defaultoptions","aria-hidden":"true"},"#"),e(" defaultOptions")],-1),k=t("strong",null,"defaultOptions",-1),v=t("code",null,"Options",-1),F=o('<hr><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> host</h3><p>• <strong>host</strong>: <code>string</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h3>',5),C=t("strong",null,"action",-1),P=t("code",null,"PathOrData",-1),B=t("code",null,"action",-1),O=t("code",null,"params?",-1),D=t("code",null,"options?",-1),R=t("code",null,"Promise",-1),N=t("code",null,"Response",-1),T=t("code",null,"FaasData",-1),V=t("code",null,"PathOrData",-1),S=o('<p>Request a FaasJS function</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>PathOrData</code></td><td style="text-align:left;">extends <code>FaasAction</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',4),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Description")])],-1),J=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"action")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string"),e(" | "),t("code",null,"PathOrData")]),t("td",{style:{"text-align":"left"}},"function path")],-1),L=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"params?")]),t("td",{style:{"text-align":"left"}},[t("code",null,"FaasParams"),e("<"),t("code",null,"PathOrData"),e(">")]),t("td",{style:{"text-align":"left"}},"function params")],-1),M=t("td",{style:{"text-align":"left"}},[t("code",null,"options?")],-1),U={style:{"text-align":"left"}},A=t("code",null,"Options",-1),E=t("td",{style:{"text-align":"left"}},[e("request options "),t("code",null,"ts await client.action('func', { key: 'value' }) ")],-1),j=t("h4",{id:"returns",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),e(" Returns")],-1),z=t("code",null,"Promise",-1),G=t("code",null,"Response",-1),H=t("code",null,"FaasData",-1),I=t("code",null,"PathOrData",-1);function K(Q,W){const s=r("RouterLink");return d(),c("div",null,[h,t("ul",null,[t("li",null,[a(s,{to:"/doc/browser/classes/FaasBrowserClient.html#constructor"},{default:n(()=>[e("constructor")]),_:1})])]),u,t("ul",null,[t("li",null,[a(s,{to:"/doc/browser/classes/FaasBrowserClient.html#defaultoptions"},{default:n(()=>[e("defaultOptions")]),_:1})]),t("li",null,[a(s,{to:"/doc/browser/classes/FaasBrowserClient.html#host"},{default:n(()=>[e("host")]),_:1})])]),p,t("ul",null,[t("li",null,[a(s,{to:"/doc/browser/classes/FaasBrowserClient.html#action"},{default:n(()=>[e("action")]),_:1})])]),_,t("table",null,[f,t("tbody",null,[b,t("tr",null,[x,t("td",m,[a(s,{to:"/doc/browser/#options"},{default:n(()=>[y]),_:1})])])])]),g,w,t("p",null,[e("• "),k,e(": "),a(s,{to:"/doc/browser/#options"},{default:n(()=>[v]),_:1})]),F,t("p",null,[e("▸ "),C,e("<"),P,e(">("),B,e(", "),O,e(", "),D,e("): "),R,e("<"),a(s,{to:"/doc/browser/classes/Response.html"},{default:n(()=>[N]),_:1}),e("<"),T,e("<"),V,e(">>>")]),S,t("table",null,[q,t("tbody",null,[J,L,t("tr",null,[M,t("td",U,[a(s,{to:"/doc/browser/#options"},{default:n(()=>[A]),_:1})]),E])])]),j,t("p",null,[z,e("<"),a(s,{to:"/doc/browser/classes/Response.html"},{default:n(()=>[G]),_:1}),e("<"),H,e("<"),I,e(">>>")])])}const Y=l(i,[["render",K],["__file","FaasBrowserClient.html.vue"]]);export{Y as default};