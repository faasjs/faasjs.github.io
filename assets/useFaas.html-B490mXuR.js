import{_ as o,c as p,b as s,d as l,e,f as a,a as u,r,o as i}from"./app-zzr3-udi.js";const d={};function m(k,n){const t=r("RouteLink");return i(),p("div",null,[s("p",null,[l(t,{to:"/doc/react/"},{default:e(()=>n[0]||(n[0]=[a("Documents")])),_:1}),n[2]||(n[2]=a(" / ")),l(t,{to:"/doc/react/"},{default:e(()=>n[1]||(n[1]=[a("@faasjs/react")])),_:1}),n[3]||(n[3]=a(" / useFaas"))]),n[43]||(n[43]=s("h1",{id:"function-usefaas",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#function-usefaas"},[s("span",null,"Function: useFaas()")])],-1)),s("blockquote",null,[s("p",null,[n[5]||(n[5]=s("strong",null,"useFaas",-1)),n[6]||(n[6]=a("<")),n[7]||(n[7]=s("code",null,"PathOrData",-1)),n[8]||(n[8]=a(">(")),n[9]||(n[9]=s("code",null,"action",-1)),n[10]||(n[10]=a(", ")),n[11]||(n[11]=s("code",null,"defaultParams",-1)),n[12]||(n[12]=a(", ")),n[13]||(n[13]=s("code",null,"options",-1)),n[14]||(n[14]=a("): ")),l(t,{to:"/doc/react/type-aliases/FaasDataInjection.html"},{default:e(()=>n[4]||(n[4]=[s("code",null,"FaasDataInjection",-1)])),_:1}),n[15]||(n[15]=a("<")),n[16]||(n[16]=s("code",null,"PathOrData",-1)),n[17]||(n[17]=a(">"))])]),n[44]||(n[44]=s("p",null,"Request faas server with React hook",-1)),n[45]||(n[45]=s("h2",{id:"type-parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#type-parameters"},[s("span",null,"Type Parameters")])],-1)),s("p",null,[n[19]||(n[19]=a("• ")),n[20]||(n[20]=s("strong",null,"PathOrData",-1)),n[21]||(n[21]=a()),n[22]||(n[22]=s("em",null,"extends",-1)),n[23]||(n[23]=a()),l(t,{to:"/doc/react/type-aliases/FaasAction.html"},{default:e(()=>n[18]||(n[18]=[s("code",null,"FaasAction",-1)])),_:1})]),n[46]||(n[46]=s("h2",{id:"parameters",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#parameters"},[s("span",null,"Parameters")])],-1)),n[47]||(n[47]=s("p",null,[a("• "),s("strong",null,"action"),a(": "),s("code",null,"string"),a(" | "),s("code",null,"PathOrData")],-1)),n[48]||(n[48]=s("p",null,"{string} action name",-1)),s("p",null,[n[25]||(n[25]=a("• ")),n[26]||(n[26]=s("strong",null,"defaultParams",-1)),n[27]||(n[27]=a(": ")),l(t,{to:"/doc/react/type-aliases/FaasParams.html"},{default:e(()=>n[24]||(n[24]=[s("code",null,"FaasParams",-1)])),_:1}),n[28]||(n[28]=a("<")),n[29]||(n[29]=s("code",null,"PathOrData",-1)),n[30]||(n[30]=a(">"))]),n[49]||(n[49]=s("p",null,"{object} initial action params",-1)),s("p",null,[n[32]||(n[32]=a("• ")),n[33]||(n[33]=s("strong",null,"options",-1)),n[34]||(n[34]=a(": ")),l(t,{to:"/doc/react/type-aliases/useFaasOptions.html"},{default:e(()=>n[31]||(n[31]=[s("code",null,"useFaasOptions",-1)])),_:1}),n[35]||(n[35]=a("<")),n[36]||(n[36]=s("code",null,"PathOrData",-1)),n[37]||(n[37]=a("> = ")),n[38]||(n[38]=s("code",null,"{}",-1))]),n[50]||(n[50]=s("h2",{id:"returns",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#returns"},[s("span",null,"Returns")])],-1)),s("p",null,[l(t,{to:"/doc/react/type-aliases/FaasDataInjection.html"},{default:e(()=>n[39]||(n[39]=[s("code",null,"FaasDataInjection",-1)])),_:1}),n[40]||(n[40]=a("<")),n[41]||(n[41]=s("code",null,"PathOrData",-1)),n[42]||(n[42]=a(">"))]),n[51]||(n[51]=u(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Post</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useFaas</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;post/get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const g=o(d,[["render",m],["__file","useFaas.html.vue"]]),v=JSON.parse('{"path":"/doc/react/functions/useFaas.html","title":"Function: useFaas()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/react/functions/useFaas.md"}');export{g as comp,v as data};
