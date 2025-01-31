import{_ as i,c as r,b as e,d as t,e as o,f as s,a,r as d,o as p}from"./app-CiUxjviM.js";const u={};function m(f,n){const l=d("RouteLink");return p(),r("div",null,[e("p",null,[t(l,{to:"/doc/ant-design/"},{default:o(()=>n[0]||(n[0]=[s("Documents")])),_:1}),n[2]||(n[2]=s(" / ")),t(l,{to:"/doc/ant-design/"},{default:o(()=>n[1]||(n[1]=[s("@faasjs/ant-design")])),_:1}),n[3]||(n[3]=s(" / UnionFaasItemProps"))]),n[179]||(n[179]=a(`<h1 id="interface-unionfaasitemprops-value-values" tabindex="-1"><a class="header-anchor" href="#interface-unionfaasitemprops-value-values"><span>Interface: UnionFaasItemProps&lt;Value, Values&gt;</span></a></h1><p>Interface representing the properties of a UnionFaas item.</p><p>The UnionFaas item can be used in a form, description, or table.</p><h3 id="render-priority-order" tabindex="-1"><a class="header-anchor" href="#render-priority-order"><span>Render Priority Order</span></a></h3><ol><li><strong>Null Rendering</strong><ol><li>Returns <code>null</code> if specific children props are null: <ul><li><code>formChildren</code> / <code>descriptionChildren</code> / <code>tableChildren</code></li></ul></li><li>Returns <code>null</code> if <code>children</code> prop is null</li></ol></li><li><strong>Children Rendering</strong><ol><li>First priority: Component-specific children <ul><li><code>formChildren</code> for Form</li><li><code>descriptionChildren</code> for Description</li><li><code>tableChildren</code> for Table</li></ul></li><li>Second priority: Generic <code>children</code> prop</li></ol></li><li><strong>Custom Render Functions</strong><ol><li>First priority: Component-specific render functions <ul><li><code>formRender</code> for Form</li><li><code>descriptionRender</code> for Description</li><li><code>tableRender</code> for Table</li></ul></li><li>Second priority: Generic <code>render</code> prop</li></ol></li><li><strong>Extended Types</strong><ul><li>Renders based on registered extended type handlers</li></ul></li><li><strong>Default Rendering</strong><ul><li>Renders primitive types (string, number, etc.)</li><li>Uses default formatting based on data type</li></ul></li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">UnionFaasItemProps</span><span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Table<span class="token punctuation">,</span> Description <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/ant-design&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> item<span class="token operator">:</span> UnionFaasItemProps<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    formChildren<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// Don&#39;t show in form, only in description and table</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Required in form</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">:</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    type<span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Number type in form, description and table</span></span>
<span class="line">    options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt; 18&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&gt;= 18&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Options in form and table</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token string">&#39;&gt;= 18&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"> // Use in form</span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Description</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"> // Use in description</span>
<span class="line">    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span> data <span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"> // Use in table</span>
<span class="line">  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>Extends</span></a></h2>`,8)),e("ul",null,[e("li",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[4]||(n[4]=[e("code",null,"FormItemProps",-1)])),_:1}),n[7]||(n[7]=s(".")),t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html"},{default:o(()=>n[5]||(n[5]=[e("code",null,"DescriptionItemProps",-1)])),_:1}),n[8]||(n[8]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[6]||(n[6]=[e("code",null,"TableItemProps",-1)])),_:1})])]),n[180]||(n[180]=a('<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2><p>• <strong>Value</strong> = <code>any</code></p><p>• <strong>Values</strong> = <code>any</code></p><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2><h3 id="children" tabindex="-1"><a class="header-anchor" href="#children"><span>children?</span></a></h3>',5)),e("blockquote",null,[e("p",null,[n[11]||(n[11]=e("code",null,"optional",-1)),n[12]||(n[12]=s()),n[13]||(n[13]=e("strong",null,"children",-1)),n[14]||(n[14]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:o(()=>n[9]||(n[9]=[e("code",null,"UnionFaasItemElement",-1)])),_:1}),n[15]||(n[15]=s("<")),t(l,{to:"/doc/ant-design/interfaces/UnionFaasItemProps.html"},{default:o(()=>n[10]||(n[10]=[e("code",null,"UnionFaasItemProps",-1)])),_:1}),n[16]||(n[16]=s("<")),n[17]||(n[17]=e("code",null,"Value",-1)),n[18]||(n[18]=s(", ")),n[19]||(n[19]=e("code",null,"Values",-1)),n[20]||(n[20]=s(">, ")),n[21]||(n[21]=e("code",null,"any",-1)),n[22]||(n[22]=s(">"))])]),n[181]||(n[181]=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides"},[e("span",null,"Overrides")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[23]||(n[23]=[e("code",null,"TableItemProps",-1)])),_:1}),n[25]||(n[25]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#children"},{default:o(()=>n[24]||(n[24]=[e("code",null,"children",-1)])),_:1})]),n[182]||(n[182]=e("h3",{id:"col",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#col"},[e("span",null,"col?")])],-1)),n[183]||(n[183]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"col"),s(": "),e("code",null,"number")])],-1)),n[184]||(n[184]=e("h4",{id:"inherited-from",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[26]||(n[26]=[e("code",null,"FormItemProps",-1)])),_:1}),n[28]||(n[28]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#col"},{default:o(()=>n[27]||(n[27]=[e("code",null,"col",-1)])),_:1})]),n[185]||(n[185]=e("h3",{id:"descriptionchildren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#descriptionchildren"},[e("span",null,"descriptionChildren?")])],-1)),e("blockquote",null,[e("p",null,[n[30]||(n[30]=e("code",null,"optional",-1)),n[31]||(n[31]=s()),n[32]||(n[32]=e("strong",null,"descriptionChildren",-1)),n[33]||(n[33]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:o(()=>n[29]||(n[29]=[e("code",null,"UnionFaasItemElement",-1)])),_:1}),n[34]||(n[34]=s("<")),n[35]||(n[35]=e("code",null,"any",-1)),n[36]||(n[36]=s(">"))])]),n[186]||(n[186]=e("h4",{id:"inherited-from-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-1"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html"},{default:o(()=>n[37]||(n[37]=[e("code",null,"DescriptionItemProps",-1)])),_:1}),n[39]||(n[39]=s(".")),t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html#descriptionchildren"},{default:o(()=>n[38]||(n[38]=[e("code",null,"descriptionChildren",-1)])),_:1})]),n[187]||(n[187]=e("h3",{id:"descriptionrender",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#descriptionrender"},[e("span",null,"descriptionRender?")])],-1)),e("blockquote",null,[e("p",null,[n[41]||(n[41]=e("code",null,"optional",-1)),n[42]||(n[42]=s()),n[43]||(n[43]=e("strong",null,"descriptionRender",-1)),n[44]||(n[44]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:o(()=>n[40]||(n[40]=[e("code",null,"UnionFaasItemRender",-1)])),_:1}),n[45]||(n[45]=s("<")),n[46]||(n[46]=e("code",null,"any",-1)),n[47]||(n[47]=s(">"))])]),n[188]||(n[188]=e("h4",{id:"inherited-from-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-2"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html"},{default:o(()=>n[48]||(n[48]=[e("code",null,"DescriptionItemProps",-1)])),_:1}),n[50]||(n[50]=s(".")),t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html#descriptionrender"},{default:o(()=>n[49]||(n[49]=[e("code",null,"descriptionRender",-1)])),_:1})]),n[189]||(n[189]=e("h3",{id:"disabled",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#disabled"},[e("span",null,"disabled?")])],-1)),n[190]||(n[190]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"disabled"),s(": "),e("code",null,"boolean")])],-1)),n[191]||(n[191]=e("h4",{id:"inherited-from-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-3"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[51]||(n[51]=[e("code",null,"FormItemProps",-1)])),_:1}),n[53]||(n[53]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#disabled"},{default:o(()=>n[52]||(n[52]=[e("code",null,"disabled",-1)])),_:1})]),n[192]||(n[192]=e("h3",{id:"extendtypes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extendtypes"},[e("span",null,"extendTypes?")])],-1)),e("blockquote",null,[e("p",null,[n[55]||(n[55]=e("code",null,"optional",-1)),n[56]||(n[56]=s()),n[57]||(n[57]=e("strong",null,"extendTypes",-1)),n[58]||(n[58]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/ExtendTypes.html"},{default:o(()=>n[54]||(n[54]=[e("code",null,"ExtendTypes",-1)])),_:1})])]),n[193]||(n[193]=e("h4",{id:"inherited-from-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-4"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[59]||(n[59]=[e("code",null,"FormItemProps",-1)])),_:1}),n[61]||(n[61]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#extendtypes"},{default:o(()=>n[60]||(n[60]=[e("code",null,"extendTypes",-1)])),_:1})]),n[194]||(n[194]=e("h3",{id:"formchildren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#formchildren"},[e("span",null,"formChildren?")])],-1)),e("blockquote",null,[e("p",null,[n[63]||(n[63]=e("code",null,"optional",-1)),n[64]||(n[64]=s()),n[65]||(n[65]=e("strong",null,"formChildren",-1)),n[66]||(n[66]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:o(()=>n[62]||(n[62]=[e("code",null,"UnionFaasItemElement",-1)])),_:1}),n[67]||(n[67]=s("<")),n[68]||(n[68]=e("code",null,"any",-1)),n[69]||(n[69]=s(">"))])]),n[195]||(n[195]=e("h4",{id:"inherited-from-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-5"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[70]||(n[70]=[e("code",null,"FormItemProps",-1)])),_:1}),n[72]||(n[72]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#formchildren"},{default:o(()=>n[71]||(n[71]=[e("code",null,"formChildren",-1)])),_:1})]),n[196]||(n[196]=e("h3",{id:"formrender",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#formrender"},[e("span",null,"formRender?")])],-1)),e("blockquote",null,[e("p",null,[n[74]||(n[74]=e("code",null,"optional",-1)),n[75]||(n[75]=s()),n[76]||(n[76]=e("strong",null,"formRender",-1)),n[77]||(n[77]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:o(()=>n[73]||(n[73]=[e("code",null,"UnionFaasItemRender",-1)])),_:1}),n[78]||(n[78]=s("<")),n[79]||(n[79]=e("code",null,"any",-1)),n[80]||(n[80]=s(">"))])]),n[197]||(n[197]=e("h4",{id:"inherited-from-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-6"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[81]||(n[81]=[e("code",null,"FormItemProps",-1)])),_:1}),n[83]||(n[83]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#formrender"},{default:o(()=>n[82]||(n[82]=[e("code",null,"formRender",-1)])),_:1})]),n[198]||(n[198]=e("h3",{id:"id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#id"},[e("span",null,"id")])],-1)),n[199]||(n[199]=e("blockquote",null,[e("p",null,[e("strong",null,"id"),s(": "),e("code",null,"string")])],-1)),n[200]||(n[200]=e("h4",{id:"inherited-from-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-7"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[84]||(n[84]=[e("code",null,"TableItemProps",-1)])),_:1}),n[86]||(n[86]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#id"},{default:o(()=>n[85]||(n[85]=[e("code",null,"id",-1)])),_:1})]),n[201]||(n[201]=a('<h3 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if()?</span></a></h3><blockquote><p><code>optional</code> <strong>if</strong>: (<code>values</code>) =&gt; <code>boolean</code></p></blockquote><p>trigger when any item&#39;s value changed</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><h5 id="values" tabindex="-1"><a class="header-anchor" href="#values"><span>values</span></a></h5><p><code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4><p><code>boolean</code></p><h4 id="inherited-from-8" tabindex="-1"><a class="header-anchor" href="#inherited-from-8"><span>Inherited from</span></a></h4>',9)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html"},{default:o(()=>n[87]||(n[87]=[e("code",null,"DescriptionItemProps",-1)])),_:1}),n[89]||(n[89]=s(".")),t(l,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html#if"},{default:o(()=>n[88]||(n[88]=[e("code",null,"if",-1)])),_:1})]),n[202]||(n[202]=a('<h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input?</span></a></h3><blockquote><p><code>optional</code> <strong>input</strong>: <code>SelectProps</code> | <code>InputProps</code> | <code>RadioProps</code> | <code>InputNumberProps</code> | <code>SwitchProps</code> | <code>DatePickerProps</code></p></blockquote><h4 id="inherited-from-9" tabindex="-1"><a class="header-anchor" href="#inherited-from-9"><span>Inherited from</span></a></h4>',3)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[90]||(n[90]=[e("code",null,"FormItemProps",-1)])),_:1}),n[92]||(n[92]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#input"},{default:o(()=>n[91]||(n[91]=[e("code",null,"input",-1)])),_:1})]),n[203]||(n[203]=a('<h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label?</span></a></h3><blockquote><p><code>optional</code> <strong>label</strong>: <code>string</code> | <code>false</code></p></blockquote><h4 id="inherited-from-10" tabindex="-1"><a class="header-anchor" href="#inherited-from-10"><span>Inherited from</span></a></h4>',3)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[93]||(n[93]=[e("code",null,"FormItemProps",-1)])),_:1}),n[95]||(n[95]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#label"},{default:o(()=>n[94]||(n[94]=[e("code",null,"label",-1)])),_:1})]),n[204]||(n[204]=e("h3",{id:"maxcount",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#maxcount"},[e("span",null,"maxCount?")])],-1)),n[205]||(n[205]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"maxCount"),s(": "),e("code",null,"number")])],-1)),n[206]||(n[206]=e("h4",{id:"inherited-from-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-11"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[96]||(n[96]=[e("code",null,"FormItemProps",-1)])),_:1}),n[98]||(n[98]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#maxcount"},{default:o(()=>n[97]||(n[97]=[e("code",null,"maxCount",-1)])),_:1})]),n[207]||(n[207]=e("h3",{id:"object",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#object"},[e("span",null,"object?")])],-1)),e("blockquote",null,[e("p",null,[n[100]||(n[100]=e("code",null,"optional",-1)),n[101]||(n[101]=s()),n[102]||(n[102]=e("strong",null,"object",-1)),n[103]||(n[103]=s(": ")),t(l,{to:"/doc/ant-design/interfaces/UnionFaasItemProps.html"},{default:o(()=>n[99]||(n[99]=[e("code",null,"UnionFaasItemProps",-1)])),_:1}),n[104]||(n[104]=s("<")),n[105]||(n[105]=e("code",null,"Value",-1)),n[106]||(n[106]=s(", ")),n[107]||(n[107]=e("code",null,"Values",-1)),n[108]||(n[108]=s(">[]"))])]),n[208]||(n[208]=e("h4",{id:"overrides-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-1"},[e("span",null,"Overrides")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[109]||(n[109]=[e("code",null,"TableItemProps",-1)])),_:1}),n[111]||(n[111]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#object"},{default:o(()=>n[110]||(n[110]=[e("code",null,"object",-1)])),_:1})]),n[209]||(n[209]=a('<h3 id="onvaluechange" tabindex="-1"><a class="header-anchor" href="#onvaluechange"><span>onValueChange()?</span></a></h3><blockquote><p><code>optional</code> <strong>onValueChange</strong>: (<code>value</code>, <code>values</code>, <code>form</code>) =&gt; <code>void</code></p></blockquote><p>trigger when current item&#39;s value changed</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4><h5 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value</span></a></h5><p><code>any</code></p><h5 id="values-1" tabindex="-1"><a class="header-anchor" href="#values-1"><span>values</span></a></h5><p><code>any</code></p><h5 id="form" tabindex="-1"><a class="header-anchor" href="#form"><span>form</span></a></h5><p><code>FormInstance</code></p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4><p><code>void</code></p><h4 id="inherited-from-12" tabindex="-1"><a class="header-anchor" href="#inherited-from-12"><span>Inherited from</span></a></h4>',13)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[112]||(n[112]=[e("code",null,"FormItemProps",-1)])),_:1}),n[114]||(n[114]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#onvaluechange"},{default:o(()=>n[113]||(n[113]=[e("code",null,"onValueChange",-1)])),_:1})]),n[210]||(n[210]=e("h3",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options"},[e("span",null,"options?")])],-1)),e("blockquote",null,[e("p",null,[n[116]||(n[116]=e("code",null,"optional",-1)),n[117]||(n[117]=s()),n[118]||(n[118]=e("strong",null,"options",-1)),n[119]||(n[119]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/BaseOption.html"},{default:o(()=>n[115]||(n[115]=[e("code",null,"BaseOption",-1)])),_:1}),n[120]||(n[120]=s("[]"))])]),n[211]||(n[211]=e("h4",{id:"inherited-from-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-13"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[121]||(n[121]=[e("code",null,"TableItemProps",-1)])),_:1}),n[123]||(n[123]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#options"},{default:o(()=>n[122]||(n[122]=[e("code",null,"options",-1)])),_:1})]),n[212]||(n[212]=e("h3",{id:"optionstype",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#optionstype"},[e("span",null,"optionsType?")])],-1)),n[213]||(n[213]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"optionsType"),s(": "),e("code",null,'"auto"')])],-1)),n[214]||(n[214]=e("h4",{id:"inherited-from-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-14"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[124]||(n[124]=[e("code",null,"TableItemProps",-1)])),_:1}),n[126]||(n[126]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#optionstype"},{default:o(()=>n[125]||(n[125]=[e("code",null,"optionsType",-1)])),_:1})]),n[215]||(n[215]=e("h3",{id:"render",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#render"},[e("span",null,"render?")])],-1)),e("blockquote",null,[e("p",null,[n[128]||(n[128]=e("code",null,"optional",-1)),n[129]||(n[129]=s()),n[130]||(n[130]=e("strong",null,"render",-1)),n[131]||(n[131]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:o(()=>n[127]||(n[127]=[e("code",null,"UnionFaasItemRender",-1)])),_:1}),n[132]||(n[132]=s("<")),n[133]||(n[133]=e("code",null,"Value",-1)),n[134]||(n[134]=s(", ")),n[135]||(n[135]=e("code",null,"Values",-1)),n[136]||(n[136]=s(">"))])]),n[216]||(n[216]=e("h4",{id:"overrides-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-2"},[e("span",null,"Overrides")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[137]||(n[137]=[e("code",null,"TableItemProps",-1)])),_:1}),n[139]||(n[139]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#render"},{default:o(()=>n[138]||(n[138]=[e("code",null,"render",-1)])),_:1})]),n[217]||(n[217]=e("h3",{id:"required",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#required"},[e("span",null,"required?")])],-1)),n[218]||(n[218]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"required"),s(": "),e("code",null,"boolean")])],-1)),n[219]||(n[219]=e("h4",{id:"inherited-from-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-15"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[140]||(n[140]=[e("code",null,"FormItemProps",-1)])),_:1}),n[142]||(n[142]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#required"},{default:o(()=>n[141]||(n[141]=[e("code",null,"required",-1)])),_:1})]),n[220]||(n[220]=e("h3",{id:"rules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rules"},[e("span",null,"rules?")])],-1)),n[221]||(n[221]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"rules"),s(": "),e("code",null,"RuleObject"),s("[]")])],-1)),n[222]||(n[222]=e("h4",{id:"inherited-from-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-16"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:o(()=>n[143]||(n[143]=[e("code",null,"FormItemProps",-1)])),_:1}),n[145]||(n[145]=s(".")),t(l,{to:"/doc/ant-design/interfaces/FormItemProps.html#rules"},{default:o(()=>n[144]||(n[144]=[e("code",null,"rules",-1)])),_:1})]),n[223]||(n[223]=e("h3",{id:"tablechildren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tablechildren"},[e("span",null,"tableChildren?")])],-1)),e("blockquote",null,[e("p",null,[n[147]||(n[147]=e("code",null,"optional",-1)),n[148]||(n[148]=s()),n[149]||(n[149]=e("strong",null,"tableChildren",-1)),n[150]||(n[150]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:o(()=>n[146]||(n[146]=[e("code",null,"UnionFaasItemElement",-1)])),_:1}),n[151]||(n[151]=s("<")),n[152]||(n[152]=e("code",null,"any",-1)),n[153]||(n[153]=s(">"))])]),n[224]||(n[224]=e("h4",{id:"inherited-from-17",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-17"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[154]||(n[154]=[e("code",null,"TableItemProps",-1)])),_:1}),n[156]||(n[156]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#tablechildren"},{default:o(()=>n[155]||(n[155]=[e("code",null,"tableChildren",-1)])),_:1})]),n[225]||(n[225]=e("h3",{id:"tablerender",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tablerender"},[e("span",null,"tableRender?")])],-1)),e("blockquote",null,[e("p",null,[n[158]||(n[158]=e("code",null,"optional",-1)),n[159]||(n[159]=s()),n[160]||(n[160]=e("strong",null,"tableRender",-1)),n[161]||(n[161]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:o(()=>n[157]||(n[157]=[e("code",null,"UnionFaasItemRender",-1)])),_:1}),n[162]||(n[162]=s("<")),n[163]||(n[163]=e("code",null,"any",-1)),n[164]||(n[164]=s(">"))])]),n[226]||(n[226]=e("h4",{id:"inherited-from-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-18"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[165]||(n[165]=[e("code",null,"TableItemProps",-1)])),_:1}),n[167]||(n[167]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#tablerender"},{default:o(()=>n[166]||(n[166]=[e("code",null,"tableRender",-1)])),_:1})]),n[227]||(n[227]=e("h3",{id:"title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#title"},[e("span",null,"title?")])],-1)),n[228]||(n[228]=e("blockquote",null,[e("p",null,[e("code",null,"optional"),s(),e("strong",null,"title"),s(": "),e("code",null,"string")])],-1)),n[229]||(n[229]=e("h4",{id:"inherited-from-19",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from-19"},[e("span",null,"Inherited from")])],-1)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[168]||(n[168]=[e("code",null,"TableItemProps",-1)])),_:1}),n[170]||(n[170]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#title"},{default:o(()=>n[169]||(n[169]=[e("code",null,"title",-1)])),_:1})]),n[230]||(n[230]=e("h3",{id:"type",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#type"},[e("span",null,"type?")])],-1)),e("blockquote",null,[e("p",null,[n[172]||(n[172]=e("code",null,"optional",-1)),n[173]||(n[173]=s()),n[174]||(n[174]=e("strong",null,"type",-1)),n[175]||(n[175]=s(": ")),t(l,{to:"/doc/ant-design/type-aliases/FaasItemType.html"},{default:o(()=>n[171]||(n[171]=[e("code",null,"FaasItemType",-1)])),_:1})])]),n[231]||(n[231]=a(`<p>Support string, string[], number, number[], boolean, date, time, object, object[]</p><h4 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>Default</span></a></h4><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token string">&#39;string&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="inherited-from-20" tabindex="-1"><a class="header-anchor" href="#inherited-from-20"><span>Inherited from</span></a></h4>`,4)),e("p",null,[t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:o(()=>n[176]||(n[176]=[e("code",null,"TableItemProps",-1)])),_:1}),n[178]||(n[178]=s(".")),t(l,{to:"/doc/ant-design/interfaces/TableItemProps.html#type"},{default:o(()=>n[177]||(n[177]=[e("code",null,"type",-1)])),_:1})])])}const g=i(u,[["render",m],["__file","UnionFaasItemProps.html.vue"]]),k=JSON.parse('{"path":"/doc/ant-design/interfaces/UnionFaasItemProps.html","title":"Interface: UnionFaasItemProps<Value, Values>","lang":"en","frontmatter":{},"headers":[{"level":3,"title":"Render Priority Order","slug":"render-priority-order","link":"#render-priority-order","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Extends","slug":"extends","link":"#extends","children":[]},{"level":2,"title":"Type Parameters","slug":"type-parameters","link":"#type-parameters","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"children?","slug":"children","link":"#children","children":[]},{"level":3,"title":"col?","slug":"col","link":"#col","children":[]},{"level":3,"title":"descriptionChildren?","slug":"descriptionchildren","link":"#descriptionchildren","children":[]},{"level":3,"title":"descriptionRender?","slug":"descriptionrender","link":"#descriptionrender","children":[]},{"level":3,"title":"disabled?","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"extendTypes?","slug":"extendtypes","link":"#extendtypes","children":[]},{"level":3,"title":"formChildren?","slug":"formchildren","link":"#formchildren","children":[]},{"level":3,"title":"formRender?","slug":"formrender","link":"#formrender","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"if()?","slug":"if","link":"#if","children":[]},{"level":3,"title":"input?","slug":"input","link":"#input","children":[]},{"level":3,"title":"label?","slug":"label","link":"#label","children":[]},{"level":3,"title":"maxCount?","slug":"maxcount","link":"#maxcount","children":[]},{"level":3,"title":"object?","slug":"object","link":"#object","children":[]},{"level":3,"title":"onValueChange()?","slug":"onvaluechange","link":"#onvaluechange","children":[]},{"level":3,"title":"options?","slug":"options","link":"#options","children":[]},{"level":3,"title":"optionsType?","slug":"optionstype","link":"#optionstype","children":[]},{"level":3,"title":"render?","slug":"render","link":"#render","children":[]},{"level":3,"title":"required?","slug":"required","link":"#required","children":[]},{"level":3,"title":"rules?","slug":"rules","link":"#rules","children":[]},{"level":3,"title":"tableChildren?","slug":"tablechildren","link":"#tablechildren","children":[]},{"level":3,"title":"tableRender?","slug":"tablerender","link":"#tablerender","children":[]},{"level":3,"title":"title?","slug":"title","link":"#title","children":[]},{"level":3,"title":"type?","slug":"type","link":"#type","children":[]}]}],"git":{},"filePathRelative":"doc/ant-design/interfaces/UnionFaasItemProps.md"}');export{g as comp,k as data};
