import{_ as r,r as i,c as d,b as e,d as o,w as t,e as s,a as l,o as p}from"./app-DJ8vVzfT.js";const u={};function c(m,n){const a=i("RouteLink");return p(),d("div",null,[e("p",null,[o(a,{to:"/doc/ant-design/"},{default:t(()=>n[0]||(n[0]=[s("Documents")])),_:1}),n[2]||(n[2]=s(" / ")),o(a,{to:"/doc/ant-design/"},{default:t(()=>n[1]||(n[1]=[s("@faasjs/ant-design")])),_:1}),n[3]||(n[3]=s(" / ExtendFormItemProps"))]),n[61]||(n[61]=l(`<h1 id="interface-extendformitemprops" tabindex="-1"><a class="header-anchor" href="#interface-extendformitemprops"><span>Interface: ExtendFormItemProps</span></a></h1><p>Extend custom form item types.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ExtendFormItemProps<span class="token punctuation">,</span> FormProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/ant-design&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// define custom type</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">interface</span></span> ExtendTypes <span class="token keyword">extends</span> <span class="token class-name">ExtendFormItemProps</span> <span class="token punctuation">{</span></span>
<span class="line">  type<span class="token operator">:</span> <span class="token string">&#39;password&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// extend form</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ExtendForm</span><span class="token punctuation">(</span>props<span class="token operator">:</span> FormProps<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> ExtendTypes<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>Form</span>
<span class="line">      <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span>
<span class="line">      extendTypes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> password<span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> <span class="token operator">&lt;</span>Input<span class="token punctuation">.</span>Password <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// use custom type</span></span>
<span class="line"><span class="token operator">&lt;</span>ExtendForm</span>
<span class="line">  items<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      id<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>Extends</span></a></h2>`,5)),e("ul",null,[e("li",null,[n[5]||(n[5]=e("code",null,"Omit",-1)),n[6]||(n[6]=s("<")),o(a,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:t(()=>n[4]||(n[4]=[e("code",null,"FormItemProps",-1)])),_:1}),n[7]||(n[7]=s(", ")),n[8]||(n[8]=e("code",null,'"type"',-1)),n[9]||(n[9]=s(">"))])]),n[62]||(n[62]=e("h2",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties"},[e("span",null,"Properties")])],-1)),n[63]||(n[63]=e("h3",{id:"children",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#children"},[e("span",null,"children?")])],-1)),e("blockquote",null,[e("p",null,[n[11]||(n[11]=e("code",null,"optional",-1)),n[12]||(n[12]=s()),n[13]||(n[13]=e("strong",null,"children",-1)),n[14]||(n[14]=s(": ")),o(a,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:t(()=>n[10]||(n[10]=[e("code",null,"UnionFaasItemElement",-1)])),_:1}),n[15]||(n[15]=s("<")),n[16]||(n[16]=e("code",null,"any",-1)),n[17]||(n[17]=s(">"))])]),n[64]||(n[64]=l('<h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from"><span>Inherited from</span></a></h4><p><code>Omit.children</code></p><h3 id="col" tabindex="-1"><a class="header-anchor" href="#col"><span>col?</span></a></h3><blockquote><p><code>optional</code> <strong>col</strong>: <code>number</code></p></blockquote><h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1"><span>Inherited from</span></a></h4><p><code>Omit.col</code></p><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled?</span></a></h3><blockquote><p><code>optional</code> <strong>disabled</strong>: <code>boolean</code></p></blockquote><h4 id="inherited-from-2" tabindex="-1"><a class="header-anchor" href="#inherited-from-2"><span>Inherited from</span></a></h4><p><code>Omit.disabled</code></p><h3 id="extendtypes" tabindex="-1"><a class="header-anchor" href="#extendtypes"><span>extendTypes?</span></a></h3>',11)),e("blockquote",null,[e("p",null,[n[19]||(n[19]=e("code",null,"optional",-1)),n[20]||(n[20]=s()),n[21]||(n[21]=e("strong",null,"extendTypes",-1)),n[22]||(n[22]=s(": ")),o(a,{to:"/doc/ant-design/type-aliases/ExtendTypes.html"},{default:t(()=>n[18]||(n[18]=[e("code",null,"ExtendTypes",-1)])),_:1})])]),n[65]||(n[65]=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3"},[e("span",null,"Inherited from")])],-1)),n[66]||(n[66]=e("p",null,[e("code",null,"Omit.extendTypes")],-1)),n[67]||(n[67]=e("h3",{id:"formchildren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#formchildren"},[e("span",null,"formChildren?")])],-1)),e("blockquote",null,[e("p",null,[n[24]||(n[24]=e("code",null,"optional",-1)),n[25]||(n[25]=s()),n[26]||(n[26]=e("strong",null,"formChildren",-1)),n[27]||(n[27]=s(": ")),o(a,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:t(()=>n[23]||(n[23]=[e("code",null,"UnionFaasItemElement",-1)])),_:1}),n[28]||(n[28]=s("<")),n[29]||(n[29]=e("code",null,"any",-1)),n[30]||(n[30]=s(">"))])]),n[68]||(n[68]=e("h4",{id:"inherited-from-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-4"},[e("span",null,"Inherited from")])],-1)),n[69]||(n[69]=e("p",null,[e("code",null,"Omit.formChildren")],-1)),n[70]||(n[70]=e("h3",{id:"formrender",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#formrender"},[e("span",null,"formRender?")])],-1)),e("blockquote",null,[e("p",null,[n[32]||(n[32]=e("code",null,"optional",-1)),n[33]||(n[33]=s()),n[34]||(n[34]=e("strong",null,"formRender",-1)),n[35]||(n[35]=s(": ")),o(a,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:t(()=>n[31]||(n[31]=[e("code",null,"UnionFaasItemRender",-1)])),_:1}),n[36]||(n[36]=s("<")),n[37]||(n[37]=e("code",null,"any",-1)),n[38]||(n[38]=s(">"))])]),n[71]||(n[71]=l('<h4 id="inherited-from-5" tabindex="-1"><a class="header-anchor" href="#inherited-from-5"><span>Inherited from</span></a></h4><p><code>Omit.formRender</code></p><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><blockquote><p><strong>id</strong>: <code>string</code></p></blockquote><h4 id="inherited-from-6" tabindex="-1"><a class="header-anchor" href="#inherited-from-6"><span>Inherited from</span></a></h4><p><code>Omit.id</code></p><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if()?</span></a></h3><blockquote><p><code>optional</code> <strong>if</strong>: (<code>values</code>) =&gt; <code>boolean</code></p></blockquote><p>trigger when any item&#39;s value changed</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><p>• <strong>values</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4><p><code>boolean</code></p><h4 id="inherited-from-7" tabindex="-1"><a class="header-anchor" href="#inherited-from-7"><span>Inherited from</span></a></h4><p><code>Omit.if</code></p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input?</span></a></h3><blockquote><p><code>optional</code> <strong>input</strong>: <code>SelectProps</code>&lt;<code>any</code>, <code>DefaultOptionType</code>&gt; | <code>InputProps</code> | <code>RadioProps</code> | <code>InputNumberProps</code>&lt;<code>ValueType</code>&gt; | <code>SwitchProps</code> | <code>DatePickerProps</code></p></blockquote><h4 id="inherited-from-8" tabindex="-1"><a class="header-anchor" href="#inherited-from-8"><span>Inherited from</span></a></h4><p><code>Omit.input</code></p><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label?</span></a></h3><blockquote><p><code>optional</code> <strong>label</strong>: <code>string</code> | <code>false</code></p></blockquote><h4 id="inherited-from-9" tabindex="-1"><a class="header-anchor" href="#inherited-from-9"><span>Inherited from</span></a></h4><p><code>Omit.label</code></p><h3 id="maxcount" tabindex="-1"><a class="header-anchor" href="#maxcount"><span>maxCount?</span></a></h3><blockquote><p><code>optional</code> <strong>maxCount</strong>: <code>number</code></p></blockquote><h4 id="inherited-from-10" tabindex="-1"><a class="header-anchor" href="#inherited-from-10"><span>Inherited from</span></a></h4><p><code>Omit.maxCount</code></p><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span>object?</span></a></h3>',28)),e("blockquote",null,[e("p",null,[n[40]||(n[40]=e("code",null,"optional",-1)),n[41]||(n[41]=s()),n[42]||(n[42]=e("strong",null,"object",-1)),n[43]||(n[43]=s(": ")),o(a,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:t(()=>n[39]||(n[39]=[e("code",null,"FormItemProps",-1)])),_:1}),n[44]||(n[44]=s("<")),n[45]||(n[45]=e("code",null,"any",-1)),n[46]||(n[46]=s(">[]"))])]),n[72]||(n[72]=l('<h4 id="inherited-from-11" tabindex="-1"><a class="header-anchor" href="#inherited-from-11"><span>Inherited from</span></a></h4><p><code>Omit.object</code></p><h3 id="onvaluechange" tabindex="-1"><a class="header-anchor" href="#onvaluechange"><span>onValueChange()?</span></a></h3><blockquote><p><code>optional</code> <strong>onValueChange</strong>: (<code>value</code>, <code>values</code>, <code>form</code>) =&gt; <code>void</code></p></blockquote><p>trigger when current item&#39;s value changed</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><p>• <strong>value</strong>: <code>any</code></p><p>• <strong>values</strong>: <code>any</code></p><p>• <strong>form</strong>: <code>FormInstance</code>&lt;<code>any</code>&gt;</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>void</code></p><h4 id="inherited-from-12" tabindex="-1"><a class="header-anchor" href="#inherited-from-12"><span>Inherited from</span></a></h4><p><code>Omit.onValueChange</code></p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options?</span></a></h3>',14)),e("blockquote",null,[e("p",null,[n[48]||(n[48]=e("code",null,"optional",-1)),n[49]||(n[49]=s()),n[50]||(n[50]=e("strong",null,"options",-1)),n[51]||(n[51]=s(": ")),o(a,{to:"/doc/ant-design/type-aliases/BaseOption.html"},{default:t(()=>n[47]||(n[47]=[e("code",null,"BaseOption",-1)])),_:1}),n[52]||(n[52]=s("[]"))])]),n[73]||(n[73]=e("h4",{id:"inherited-from-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-13"},[e("span",null,"Inherited from")])],-1)),n[74]||(n[74]=e("p",null,[e("code",null,"Omit.options")],-1)),n[75]||(n[75]=e("h3",{id:"render",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#render"},[e("span",null,"render?")])],-1)),e("blockquote",null,[e("p",null,[n[54]||(n[54]=e("code",null,"optional",-1)),n[55]||(n[55]=s()),n[56]||(n[56]=e("strong",null,"render",-1)),n[57]||(n[57]=s(": ")),o(a,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:t(()=>n[53]||(n[53]=[e("code",null,"UnionFaasItemRender",-1)])),_:1}),n[58]||(n[58]=s("<")),n[59]||(n[59]=e("code",null,"any",-1)),n[60]||(n[60]=s(">"))])]),n[76]||(n[76]=l('<h4 id="inherited-from-14" tabindex="-1"><a class="header-anchor" href="#inherited-from-14"><span>Inherited from</span></a></h4><p><code>Omit.render</code></p><h3 id="required" tabindex="-1"><a class="header-anchor" href="#required"><span>required?</span></a></h3><blockquote><p><code>optional</code> <strong>required</strong>: <code>boolean</code></p></blockquote><h4 id="inherited-from-15" tabindex="-1"><a class="header-anchor" href="#inherited-from-15"><span>Inherited from</span></a></h4><p><code>Omit.required</code></p><h3 id="rules" tabindex="-1"><a class="header-anchor" href="#rules"><span>rules?</span></a></h3><blockquote><p><code>optional</code> <strong>rules</strong>: <code>RuleObject</code>[]</p></blockquote><h4 id="inherited-from-16" tabindex="-1"><a class="header-anchor" href="#inherited-from-16"><span>Inherited from</span></a></h4><p><code>Omit.rules</code></p><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title?</span></a></h3><blockquote><p><code>optional</code> <strong>title</strong>: <code>string</code></p></blockquote><h4 id="inherited-from-17" tabindex="-1"><a class="header-anchor" href="#inherited-from-17"><span>Inherited from</span></a></h4><p><code>Omit.title</code></p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type?</span></a></h3><blockquote><p><code>optional</code> <strong>type</strong>: <code>string</code></p></blockquote>',16))])}const f=r(u,[["render",c],["__file","ExtendFormItemProps.html.vue"]]),b=JSON.parse('{"path":"/doc/ant-design/interfaces/ExtendFormItemProps.html","title":"Interface: ExtendFormItemProps","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Extends","slug":"extends","link":"#extends","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"children?","slug":"children","link":"#children","children":[]},{"level":3,"title":"col?","slug":"col","link":"#col","children":[]},{"level":3,"title":"disabled?","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"extendTypes?","slug":"extendtypes","link":"#extendtypes","children":[]},{"level":3,"title":"formChildren?","slug":"formchildren","link":"#formchildren","children":[]},{"level":3,"title":"formRender?","slug":"formrender","link":"#formrender","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"if()?","slug":"if","link":"#if","children":[]},{"level":3,"title":"input?","slug":"input","link":"#input","children":[]},{"level":3,"title":"label?","slug":"label","link":"#label","children":[]},{"level":3,"title":"maxCount?","slug":"maxcount","link":"#maxcount","children":[]},{"level":3,"title":"object?","slug":"object","link":"#object","children":[]},{"level":3,"title":"onValueChange()?","slug":"onvaluechange","link":"#onvaluechange","children":[]},{"level":3,"title":"options?","slug":"options","link":"#options","children":[]},{"level":3,"title":"render?","slug":"render","link":"#render","children":[]},{"level":3,"title":"required?","slug":"required","link":"#required","children":[]},{"level":3,"title":"rules?","slug":"rules","link":"#rules","children":[]},{"level":3,"title":"title?","slug":"title","link":"#title","children":[]},{"level":3,"title":"type?","slug":"type","link":"#type","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/ant-design/interfaces/ExtendFormItemProps.md"}');export{f as comp,b as data};
