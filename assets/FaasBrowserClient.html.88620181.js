import{_ as l,r as d,o as r,c as i,b as t,d as a,w as n,e,a as o}from"./app.1ee529a4.js";const c={},h=o(`<h1 id="class-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#class-faasbrowserclient" aria-hidden="true">#</a> Class: FaasBrowserClient</h1><p>FaasJS browser client</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>`,5),u=t("h3",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),p=t("h3",{id:"methods",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),e(" Methods")],-1),_=o('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new FaasBrowserClient</strong>(<code>baseUrl</code>, <code>options?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),f=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type")])],-1),g=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"baseUrl")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string")])],-1),x=t("td",{style:{"text-align":"left"}},[t("code",null,"options?")],-1),m={style:{"text-align":"left"}},y=t("code",null,"Options",-1),b=t("h2",{id:"properties-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),e(" Properties")],-1),k=t("h3",{id:"defaultoptions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#defaultoptions","aria-hidden":"true"},"#"),e(" defaultOptions")],-1),v=t("strong",null,"defaultOptions",-1),w=t("code",null,"Options",-1),C=o('<hr><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> host</h3><p>• <strong>host</strong>: <code>string</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> action</h3>',5),F=t("strong",null,"action",-1),P=t("code",null,"PathOrData",-1),B=t("code",null,"action",-1),O=t("code",null,"params?",-1),D=t("code",null,"options?",-1),R=t("code",null,"Promise",-1),N=t("code",null,"Response",-1),T=t("code",null,"FaasData",-1),V=t("code",null,"PathOrData",-1),S=o('<p>Request a FaasJS function</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>PathOrData</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',4),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Description")])],-1),J=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"action")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string"),e(" | "),t("code",null,"PathOrData")]),t("td",{style:{"text-align":"left"}},"function path")],-1),L=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"params?")]),t("td",{style:{"text-align":"left"}},[t("code",null,"FaasParams"),e("<"),t("code",null,"PathOrData"),e(">")]),t("td",{style:{"text-align":"left"}},"function params")],-1),M=t("td",{style:{"text-align":"left"}},[t("code",null,"options?")],-1),U={style:{"text-align":"left"}},E=t("code",null,"Options",-1),j=t("td",{style:{"text-align":"left"}},"request options",-1),z=t("h4",{id:"returns",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),e(" Returns")],-1),A=t("code",null,"Promise",-1),G=t("code",null,"Response",-1),H=t("code",null,"FaasData",-1),I=t("code",null,"PathOrData",-1);function K(Q,W){const s=d("RouterLink");return r(),i("div",null,[h,t("ul",null,[t("li",null,[a(s,{to:"/doc/vue-plugin/classes/FaasBrowserClient.html#constructor"},{default:n(()=>[e("constructor")]),_:1})])]),u,t("ul",null,[t("li",null,[a(s,{to:"/doc/vue-plugin/classes/FaasBrowserClient.html#defaultoptions"},{default:n(()=>[e("defaultOptions")]),_:1})]),t("li",null,[a(s,{to:"/doc/vue-plugin/classes/FaasBrowserClient.html#host"},{default:n(()=>[e("host")]),_:1})])]),p,t("ul",null,[t("li",null,[a(s,{to:"/doc/vue-plugin/classes/FaasBrowserClient.html#action"},{default:n(()=>[e("action")]),_:1})])]),_,t("table",null,[f,t("tbody",null,[g,t("tr",null,[x,t("td",m,[a(s,{to:"/doc/vue-plugin/#options"},{default:n(()=>[y]),_:1})])])])]),b,k,t("p",null,[e("• "),v,e(": "),a(s,{to:"/doc/vue-plugin/#options"},{default:n(()=>[w]),_:1})]),C,t("p",null,[e("▸ "),F,e("<"),P,e(">("),B,e(", "),O,e(", "),D,e("): "),R,e("<"),a(s,{to:"/doc/vue-plugin/classes/Response.html"},{default:n(()=>[N]),_:1}),e("<"),T,e("<"),V,e(">>>")]),S,t("table",null,[q,t("tbody",null,[J,L,t("tr",null,[M,t("td",U,[a(s,{to:"/doc/vue-plugin/#options"},{default:n(()=>[E]),_:1})]),j])])]),z,t("p",null,[A,e("<"),a(s,{to:"/doc/vue-plugin/classes/Response.html"},{default:n(()=>[G]),_:1}),e("<"),H,e("<"),I,e(">>>")])])}const Y=l(c,[["render",K],["__file","FaasBrowserClient.html.vue"]]);export{Y as default};
