"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[2404],{4245:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-76bd27ba",path:"/zh/guide/excel/lint.html",title:"代码规范检查",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"后端模式",slug:"后端模式",children:[{level:3,title:"包含规范",slug:"包含规范",children:[]},{level:3,title:"配置方法",slug:"配置方法",children:[]},{level:3,title:"命令",slug:"命令",children:[]}]},{level:2,title:"全栈模式",slug:"全栈模式",children:[{level:3,title:"包含规范",slug:"包含规范-1",children:[]},{level:3,title:"配置方法",slug:"配置方法-1",children:[]},{level:3,title:"命令",slug:"命令-1",children:[]}]}],git:{updatedTime:16408239e5},filePathRelative:"zh/guide/excel/lint.md"}},8964:(e,n,s)=>{s.r(n),s.d(n,{default:()=>w});var a=s(6252);const t=(0,a._)("h1",{id:"代码规范检查",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#代码规范检查","aria-hidden":"true"},"#"),(0,a.Uk)(" 代码规范检查")],-1),l=(0,a.Uk)("FaasJS 使用 "),r={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("ESLint"),o=(0,a.Uk)(" 来提供代码格式规范检查能力。"),p=(0,a._)("p",null,"同时为了支持全栈模式，也提供了包含 Vue.js 的全栈模式检查规范。",-1),c=(0,a._)("h2",{id:"后端模式",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#后端模式","aria-hidden":"true"},"#"),(0,a.Uk)(" 后端模式")],-1),u=(0,a._)("h3",{id:"包含规范",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#包含规范","aria-hidden":"true"},"#"),(0,a.Uk)(" 包含规范")],-1),d={href:"https://eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("eslint:recommended"),b={href:"https://github.com/nodesecurity/eslint-plugin-security",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("security/recommended"),g={href:"https://github.com/typescript-eslint/typescript-eslint",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("@typescript-eslint/recommended"),f=(0,a.uE)('<h3 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法" aria-hidden="true">#</a> 配置方法</h3><ol><li>通过 <code>npm install -D @faasjs/eslint-config-recommended@beta</code> 安装依赖库</li><li>在 <strong>package.json</strong> 中添加配置项：</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;@faasjs/recommended&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;eslintIgnore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">&quot;tmp&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm exec eslint --ext .ts .\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="全栈模式" tabindex="-1"><a class="header-anchor" href="#全栈模式" aria-hidden="true">#</a> 全栈模式</h2><h3 id="包含规范-1" tabindex="-1"><a class="header-anchor" href="#包含规范-1" aria-hidden="true">#</a> 包含规范</h3>',7),_={href:"https://eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("eslint:recommended"),x={href:"https://github.com/nodesecurity/eslint-plugin-security",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("security:recommended"),y={href:"https://github.com/typescript-eslint/typescript-eslint",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("@typescript-eslint:recommended"),U={href:"https://eslint.vuejs.org/rules/",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("vue:essential"),C=(0,a.uE)('<h3 id="配置方法-1" tabindex="-1"><a class="header-anchor" href="#配置方法-1" aria-hidden="true">#</a> 配置方法</h3><ol><li>通过 <code>npm install -D @faasjs/eslint-config-vue@beta</code> 安装依赖库</li><li>在 <strong>package.json</strong> 中添加配置项：</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;@faasjs/vue&quot;</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token property">&quot;eslintIgnore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">&quot;tmp&quot;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm exec eslint --ext .ts,.vue .\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),E={},w=(0,s(3744).Z)(E,[["render",function(e,n){const s=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[l,(0,a._)("a",r,[i,(0,a.Wm)(s)]),o]),p,c,u,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",d,[h,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",b,[m,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",g,[k,(0,a.Wm)(s)])])]),f,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",_,[v,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",x,[q,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",y,[j,(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",U,[W,(0,a.Wm)(s)])])]),C],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);