import{_ as o,r as c,c as r,b as t,d as a,w as n,e,a as l,o as i}from"./app-CRwacYaH.js";const d={},h=l(`<h1 id="class-faasbrowserclient" tabindex="-1"><a class="header-anchor" href="#class-faasbrowserclient"><span>Class: FaasBrowserClient</span></a></h1><p>FaasJS browser client</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FaasBrowserClient</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents"><span>Table of contents</span></a></h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h3>`,5),p=t("h3",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties"},[t("span",null,"Properties")])],-1),u=t("h3",{id:"methods",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#methods"},[t("span",null,"Methods")])],-1),_=l('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1"><span>Constructors</span></a></h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor"><span>constructor</span></a></h3><p>• <strong>new FaasBrowserClient</strong>(<code>baseUrl</code>, <code>options?</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>',4),f=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type")])],-1),m=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"baseUrl")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string")])],-1),g=t("td",{style:{"text-align":"left"}},[t("code",null,"options?")],-1),x={style:{"text-align":"left"}},b=t("code",null,"Options",-1),y=t("h2",{id:"properties-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties-1"},[t("span",null,"Properties")])],-1),k=t("h3",{id:"defaultoptions",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#defaultoptions"},[t("span",null,"defaultOptions")])],-1),v=t("strong",null,"defaultOptions",-1),w=t("code",null,"Options",-1),C=l('<hr><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host"><span>host</span></a></h3><p>• <strong>host</strong>: <code>string</code></p><h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1"><span>Methods</span></a></h2><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action"><span>action</span></a></h3>',5),F=t("strong",null,"action",-1),B=t("code",null,"PathOrData",-1),P=t("code",null,"action",-1),O=t("code",null,"params?",-1),D=t("code",null,"options?",-1),R=t("code",null,"Promise",-1),N=t("code",null,"Response",-1),T=t("code",null,"FaasData",-1),M=t("code",null,"PathOrData",-1),S=l('<p>Request a FaasJS function</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type parameters</span></a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>PathOrData</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>',4),V=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type"),t("th",{style:{"text-align":"left"}},"Description")])],-1),J=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"action")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string"),e(" | "),t("code",null,"PathOrData")]),t("td",{style:{"text-align":"left"}},"function path")],-1),q=t("td",{style:{"text-align":"left"}},[t("code",null,"params?")],-1),L={style:{"text-align":"left"}},U=t("code",null,"FaasParams",-1),E=t("code",null,"PathOrData",-1),j=t("td",{style:{"text-align":"left"}},"function params",-1),z=t("td",{style:{"text-align":"left"}},[t("code",null,"options?")],-1),A={style:{"text-align":"left"}},G=t("code",null,"Options",-1),H=t("td",{style:{"text-align":"left"}},[e("request options "),t("code",null,"ts await client.action('func', { key: 'value' }) ")],-1),I=t("h4",{id:"returns",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#returns"},[t("span",null,"Returns")])],-1),K=t("code",null,"Promise",-1),Q=t("code",null,"Response",-1),W=t("code",null,"FaasData",-1),X=t("code",null,"PathOrData",-1);function Y(Z,$){const s=c("RouteLink");return i(),r("div",null,[t("p",null,[a(s,{to:"/doc/react/"},{default:n(()=>[e("Documents")]),_:1}),e(" / Class: FaasBrowserClient")]),h,t("ul",null,[t("li",null,[a(s,{to:"/doc/react/classes/FaasBrowserClient.html#constructor"},{default:n(()=>[e("constructor")]),_:1})])]),p,t("ul",null,[t("li",null,[a(s,{to:"/doc/react/classes/FaasBrowserClient.html#defaultoptions"},{default:n(()=>[e("defaultOptions")]),_:1})]),t("li",null,[a(s,{to:"/doc/react/classes/FaasBrowserClient.html#host"},{default:n(()=>[e("host")]),_:1})])]),u,t("ul",null,[t("li",null,[a(s,{to:"/doc/react/classes/FaasBrowserClient.html#action"},{default:n(()=>[e("action")]),_:1})])]),_,t("table",null,[f,t("tbody",null,[m,t("tr",null,[g,t("td",x,[a(s,{to:"/doc/react/#options"},{default:n(()=>[b]),_:1})])])])]),y,k,t("p",null,[e("• "),v,e(": "),a(s,{to:"/doc/react/#options"},{default:n(()=>[w]),_:1})]),C,t("p",null,[e("▸ "),F,e("<"),B,e(">("),P,e(", "),O,e(", "),D,e("): "),R,e("<"),a(s,{to:"/doc/react/classes/Response.html"},{default:n(()=>[N]),_:1}),e("<"),a(s,{to:"/doc/react/#faasdata"},{default:n(()=>[T]),_:1}),e("<"),M,e(">>>")]),S,t("table",null,[V,t("tbody",null,[J,t("tr",null,[q,t("td",L,[a(s,{to:"/doc/react/#faasparams"},{default:n(()=>[U]),_:1}),e("<"),E,e(">")]),j]),t("tr",null,[z,t("td",A,[a(s,{to:"/doc/react/#options"},{default:n(()=>[G]),_:1})]),H])])]),I,t("p",null,[K,e("<"),a(s,{to:"/doc/react/classes/Response.html"},{default:n(()=>[Q]),_:1}),e("<"),a(s,{to:"/doc/react/#faasdata"},{default:n(()=>[W]),_:1}),e("<"),X,e(">>>")])])}const et=o(d,[["render",Y],["__file","FaasBrowserClient.html.vue"]]),st=JSON.parse('{"path":"/doc/react/classes/FaasBrowserClient.html","title":"Class: FaasBrowserClient","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"defaultOptions","slug":"defaultoptions","link":"#defaultoptions","children":[]},{"level":3,"title":"host","slug":"host","link":"#host","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"action","slug":"action","link":"#action","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/react/classes/FaasBrowserClient.md"}');export{et as comp,st as data};
