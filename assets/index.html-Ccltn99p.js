import{_ as l,r as o,c as i,b as n,d as a,w as t,e,a as d,o as r}from"./app-CJB7LDkX.js";const p={},c=d(`<h1 id="faasjs-ant-design" tabindex="-1"><a class="header-anchor" href="#faasjs-ant-design"><span>@faasjs/ant-design</span></a></h1><p>UI components based on <a href="https://faasjs.com" target="_blank" rel="noopener noreferrer">FaasJS</a>, <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Ant Design</a> and <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer">React Router</a>.</p><p><a href="https://github.com/faasjs/faasjs/blob/main/packages/faasjs/ant-design/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/@faasjs/ant-design.svg" alt="License: MIT"></a><a href="https://www.npmjs.com/package/@faasjs/ant-design" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@faasjs/ant-design.svg" alt="NPM Version"></a></p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @faasjs/ant-design</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>In <code>@faasjs/ant-design</code>, we use <code>FaasItemProps</code> to provide data structures for components.</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">FaasItemType</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token string">&#39;string&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;string[]&#39;</span> <span class="token operator">|</span></span>
<span class="line">  <span class="token string">&#39;number&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;number[]&#39;</span> <span class="token operator">|</span></span>
<span class="line">  <span class="token string">&#39;boolean&#39;</span> <span class="token operator">|</span></span>
<span class="line">  <span class="token string">&#39;date&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;time&#39;</span> <span class="token operator">|</span></span>
<span class="line">  <span class="token string">&#39;object&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;object[]&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">FaasItemProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  type<span class="token operator">:</span> FaasItemTypes</span>
<span class="line">  id<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces"><span>Interfaces</span></a></h2>`,9),u=n("h2",{id:"type-aliases",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-aliases"},[n("span",null,"Type Aliases")])],-1),f=n("h2",{id:"variables",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#variables"},[n("span",null,"Variables")])],-1),m=n("h2",{id:"functions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#functions"},[n("span",null,"Functions")])],-1);function g(h,_){const s=o("RouteLink");return r(),i("div",null,[n("p",null,[a(s,{to:"/doc/"},{default:t(()=>[e("Documents")]),_:1}),e(" / @faasjs/ant-design")]),c,n("ul",null,[n("li",null,[a(s,{to:"/doc/ant-design/interfaces/AppProps.html"},{default:t(()=>[e("AppProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/BaseItemProps.html"},{default:t(()=>[e("BaseItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/BlankProps.html"},{default:t(()=>[e("BlankProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/ConfigProviderProps.html"},{default:t(()=>[e("ConfigProviderProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/DescriptionItemContentProps.html"},{default:t(()=>[e("DescriptionItemContentProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/DescriptionItemProps.html"},{default:t(()=>[e("DescriptionItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/DescriptionProps.html"},{default:t(()=>[e("DescriptionProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/DrawerProps.html"},{default:t(()=>[e("DrawerProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/ErrorBoundaryProps.html"},{default:t(()=>[e("ErrorBoundaryProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/ExtendDescriptionTypeProps.html"},{default:t(()=>[e("ExtendDescriptionTypeProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/FaasDataWrapperProps.html"},{default:t(()=>[e("FaasDataWrapperProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/FaasItemProps.html"},{default:t(()=>[e("FaasItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/FormItemProps.html"},{default:t(()=>[e("FormItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/FormProps.html"},{default:t(()=>[e("FormProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/LinkProps.html"},{default:t(()=>[e("LinkProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/ModalProps.html"},{default:t(()=>[e("ModalProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/RoutesProps.html"},{default:t(()=>[e("RoutesProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/TabProps.html"},{default:t(()=>[e("TabProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/TableItemProps.html"},{default:t(()=>[e("TableItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/TabsProps.html"},{default:t(()=>[e("TabsProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/TitleProps.html"},{default:t(()=>[e("TitleProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/UnionFaasItemProps.html"},{default:t(()=>[e("UnionFaasItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/interfaces/useAppProps.html"},{default:t(()=>[e("useAppProps")]),_:1})])]),u,n("ul",null,[n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/BaseOption.html"},{default:t(()=>[e("BaseOption")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/ExtendDescriptionItemProps.html"},{default:t(()=>[e("ExtendDescriptionItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/ExtendFormItemProps.html"},{default:t(()=>[e("ExtendFormItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/ExtendFormTypeProps.html"},{default:t(()=>[e("ExtendFormTypeProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/ExtendTableItemProps.html"},{default:t(()=>[e("ExtendTableItemProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/ExtendTableTypeProps.html"},{default:t(()=>[e("ExtendTableTypeProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/ExtendTypes.html"},{default:t(()=>[e("ExtendTypes")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/FaasDataInjection.html"},{default:t(()=>[e("FaasDataInjection")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/FaasItemType.html"},{default:t(()=>[e("FaasItemType")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/FaasItemTypeValue.html"},{default:t(()=>[e("FaasItemTypeValue")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/FormSubmitProps.html"},{default:t(()=>[e("FormSubmitProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/LoadingProps.html"},{default:t(()=>[e("LoadingProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/TableProps.html"},{default:t(()=>[e("TableProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/UnionFaasItemElement.html"},{default:t(()=>[e("UnionFaasItemElement")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/UnionFaasItemInjection.html"},{default:t(()=>[e("UnionFaasItemInjection")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/UnionFaasItemRender.html"},{default:t(()=>[e("UnionFaasItemRender")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/UnionScene.html"},{default:t(()=>[e("UnionScene")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/setDrawerProps.html"},{default:t(()=>[e("setDrawerProps")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/type-aliases/setModalProps.html"},{default:t(()=>[e("setModalProps")]),_:1})])]),f,n("ul",null,[n("li",null,[a(s,{to:"/doc/ant-design/variables/ConfigContext.html"},{default:t(()=>[e("ConfigContext")]),_:1})])]),m,n("ul",null,[n("li",null,[a(s,{to:"/doc/ant-design/functions/App.html"},{default:t(()=>[e("App")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Blank.html"},{default:t(()=>[e("Blank")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/ConfigProvider.html"},{default:t(()=>[e("ConfigProvider")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Description.html"},{default:t(()=>[e("Description")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Drawer.html"},{default:t(()=>[e("Drawer")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/ErrorBoundary.html"},{default:t(()=>[e("ErrorBoundary")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/FaasDataWrapper.html"},{default:t(()=>[e("FaasDataWrapper")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Form.html"},{default:t(()=>[e("Form")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/FormItem.html"},{default:t(()=>[e("FormItem")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Link.html"},{default:t(()=>[e("Link")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Loading.html"},{default:t(()=>[e("Loading")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Modal.html"},{default:t(()=>[e("Modal")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/PageNotFound.html"},{default:t(()=>[e("PageNotFound")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Routes.html"},{default:t(()=>[e("Routes")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Table.html"},{default:t(()=>[e("Table")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Tabs.html"},{default:t(()=>[e("Tabs")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/Title.html"},{default:t(()=>[e("Title")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/faas.html"},{default:t(()=>[e("faas")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/transferOptions.html"},{default:t(()=>[e("transferOptions")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/transferValue.html"},{default:t(()=>[e("transferValue")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/useApp.html"},{default:t(()=>[e("useApp")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/useConfigContext.html"},{default:t(()=>[e("useConfigContext")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/useDrawer.html"},{default:t(()=>[e("useDrawer")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/useFaas.html"},{default:t(()=>[e("useFaas")]),_:1})]),n("li",null,[a(s,{to:"/doc/ant-design/functions/useModal.html"},{default:t(()=>[e("useModal")]),_:1})])])])}const b=l(p,[["render",g],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/doc/ant-design/","title":"@faasjs/ant-design","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Interfaces","slug":"interfaces","link":"#interfaces","children":[]},{"level":2,"title":"Type Aliases","slug":"type-aliases","link":"#type-aliases","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/ant-design/README.md"}');export{b as comp,k as data};