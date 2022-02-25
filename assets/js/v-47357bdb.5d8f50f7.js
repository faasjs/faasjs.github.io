"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[9892],{1044:(e,a,t)=>{t.r(a),t.d(a,{data:()=>s});const s={key:"v-47357bdb",path:"/zh/guide/",title:"1 分钟上手",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备工作",slug:"准备工作",children:[]},{level:2,title:"创建项目",slug:"创建项目",children:[]},{level:2,title:"启动项目",slug:"启动项目",children:[]},{level:2,title:"文件结构",slug:"文件结构",children:[{level:3,title:"package.json",slug:"package-json",children:[]},{level:3,title:"tsconfig.json",slug:"tsconfig-json",children:[]},{level:3,title:"faas.yaml",slug:"faas-yaml",children:[]},{level:3,title:"*.func.ts",slug:"func-ts",children:[]},{level:3,title:"*.test.ts",slug:"test-ts",children:[]}]},{level:2,title:"完整示例",slug:"完整示例",children:[]}],git:{updatedTime:164577489e4},filePathRelative:"zh/guide/README.md"}},4353:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var s=t(6252);const r=(0,s.uE)('<h1 id="_1-分钟上手" tabindex="-1"><a class="header-anchor" href="#_1-分钟上手" aria-hidden="true">#</a> 1 分钟上手</h1><p>通过本教程，你将学到：</p><ul><li>如何搭建本地开发环境？</li><li>FaasJS 项目的基本结构是什么？</li></ul><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>FaasJS 基于 Node.js 构建，因此需要本地环境支持至少 Node.js 12.x。</p><p>若使用的是 OS X，可以使用 brew 来安装：<code>brew install node</code>。</p>',6),l=(0,s.Uk)("由于 FaasJS 基于 TypeScript，因此建议使用 "),d={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},n=(0,s.Uk)("Visual Studio Code"),i=(0,s.Uk)(" 作为编辑器。"),h=(0,s.uE)('<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>你可以直接使用 npx 一键创建新项目，初次创建可以先跳过 Provider 配置：</p><pre><code>npx create-faas-app --example --noprovider\n</code></pre><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2><p>执行 <code>npm exec faas server</code>，用浏览器打开 <code>http://localhost:3000/hello</code> 即可看到 hello.func.ts 的执行结果。</p><h2 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h2><h3 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h3><p>这是 Node.js 的项目配置，主要包含了依赖项、EsLint 配置和 Jest 配置。</p><h3 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h3><p>这个文件的内容仅仅为 <code>{}</code>，因为 FaasJS 本身对 Typescript 没有特殊的配置需求，你可以根据实际情况进行定制化配置。</p><h3 id="faas-yaml" tabindex="-1"><a class="header-anchor" href="#faas-yaml" aria-hidden="true">#</a> faas.yaml</h3><p>这是 FaasJS 的配置文件，记录了云服务商的配置项和插件的配置项。</p><h3 id="func-ts" tabindex="-1"><a class="header-anchor" href="#func-ts" aria-hidden="true">#</a> *.func.ts</h3><p>这是云函数文件，在 FaasJS 中，所有云函数文件都必须以 <code>.func.ts</code> 结尾。</p><h3 id="test-ts" tabindex="-1"><a class="header-anchor" href="#test-ts" aria-hidden="true">#</a> *.test.ts</h3><p>这是单元测试文件，在 FaasJS 中，所有单元测试文件都必须以 <code>.test.ts</code> 结尾。</p><h2 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例" aria-hidden="true">#</a> 完整示例</h2>',17),c=(0,s.Uk)("在 "),o={href:"https://github.com/faasjs/examples/tree/main/simple",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("https://github.com/faasjs/examples/tree/main/simple"),u=(0,s.Uk)(" 可以看到一个包含了代码检查、自动化测试的简单例子。"),f={},g=(0,t(3744).Z)(f,[["render",function(e,a){const t=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("p",null,[l,(0,s._)("a",d,[n,(0,s.Wm)(t)]),i]),h,(0,s._)("p",null,[c,(0,s._)("a",o,[p,(0,s.Wm)(t)]),u])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,s]of a)t[e]=s;return t}}}]);