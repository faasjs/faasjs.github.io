import{_ as l,c as r,b as t,d as o,w as e,e as a,a as p,r as d,o as i}from"./app-B6o2ZpF_.js";const u={};function m(g,n){const s=d("RouteLink");return i(),r("div",null,[t("p",null,[o(s,{to:"/doc/ant-design/"},{default:e(()=>n[0]||(n[0]=[a("Documents")])),_:1}),n[2]||(n[2]=a(" / ")),o(s,{to:"/doc/ant-design/"},{default:e(()=>n[1]||(n[1]=[a("@faasjs/ant-design")])),_:1}),n[3]||(n[3]=a(" / withFaasData"))]),n[38]||(n[38]=t("h1",{id:"function-withfaasdata",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#function-withfaasdata"},[t("span",null,"Function: withFaasData()")])],-1)),t("blockquote",null,[t("p",null,[n[5]||(n[5]=p("<strong>withFaasData</strong>&lt;<code>PathOrData</code>, <code>TComponentProps</code>&gt;(<code>Component</code>, <code>faasProps</code>): <code>React.FC</code>&lt;<code>Omit</code>&lt;<code>TComponentProps</code>, keyof ",16)),o(s,{to:"/doc/ant-design/type-aliases/FaasDataInjection.html"},{default:e(()=>n[4]||(n[4]=[t("code",null,"FaasDataInjection",-1)])),_:1}),n[6]||(n[6]=a("<")),n[7]||(n[7]=t("code",null,"PathOrData",-1)),n[8]||(n[8]=a(">> & ")),n[9]||(n[9]=t("code",null,"Record",-1)),n[10]||(n[10]=a("<")),n[11]||(n[11]=t("code",null,"string",-1)),n[12]||(n[12]=a(", ")),n[13]||(n[13]=t("code",null,"any",-1)),n[14]||(n[14]=a(">>"))])]),n[39]||(n[39]=p('<p>HOC to wrap a component with FaasDataWrapper and Loading</p><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>PathOrData</strong> <em>extends</em> <code>FaasAction</code></p><p>• <strong>TComponentProps</strong> <em>extends</em> <code>Required</code>&lt;<code>Partial</code>&lt;<code>FaasDataInjection</code>&lt;<code>PathOrData</code>&gt;&gt;&gt; = <code>Required</code>&lt;<code>Partial</code>&lt;<code>FaasDataInjection</code>&lt;<code>PathOrData</code>&gt;&gt;&gt;</p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2><p>• <strong>Component</strong>: <code>FC</code>&lt;<code>TComponentProps</code> &amp; <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;&gt;</p>',6)),t("p",null,[n[16]||(n[16]=a("• ")),n[17]||(n[17]=t("strong",null,"faasProps",-1)),n[18]||(n[18]=a(": ")),o(s,{to:"/doc/ant-design/interfaces/FaasDataWrapperProps.html"},{default:e(()=>n[15]||(n[15]=[t("code",null,"FaasDataWrapperProps",-1)])),_:1}),n[19]||(n[19]=a("<")),n[20]||(n[20]=t("code",null,"PathOrData",-1)),n[21]||(n[21]=a(">"))]),n[40]||(n[40]=t("h2",{id:"returns",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#returns"},[t("span",null,"Returns")])],-1)),t("p",null,[n[23]||(n[23]=t("code",null,"React.FC",-1)),n[24]||(n[24]=a("<")),n[25]||(n[25]=t("code",null,"Omit",-1)),n[26]||(n[26]=a("<")),n[27]||(n[27]=t("code",null,"TComponentProps",-1)),n[28]||(n[28]=a(", keyof ")),o(s,{to:"/doc/ant-design/type-aliases/FaasDataInjection.html"},{default:e(()=>n[22]||(n[22]=[t("code",null,"FaasDataInjection",-1)])),_:1}),n[29]||(n[29]=a("<")),n[30]||(n[30]=t("code",null,"PathOrData",-1)),n[31]||(n[31]=a(">> & ")),n[32]||(n[32]=t("code",null,"Record",-1)),n[33]||(n[33]=a("<")),n[34]||(n[34]=t("code",null,"string",-1)),n[35]||(n[35]=a(", ")),n[36]||(n[36]=t("code",null,"any",-1)),n[37]||(n[37]=a(">>"))]),n[41]||(n[41]=p(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">withFaasData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> action<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,2))])}const f=l(u,[["render",m],["__file","withFaasData.html.vue"]]),D=JSON.parse('{"path":"/doc/ant-design/functions/withFaasData.html","title":"Function: withFaasData()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/ant-design/functions/withFaasData.md"}');export{f as comp,D as data};
