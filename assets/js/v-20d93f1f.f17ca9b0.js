"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[6291],{8555:(e,a,s)=>{s.r(a),s.d(a,{data:()=>r});const r={key:"v-20d93f1f",path:"/zh/guide/story.html",title:"背景故事",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么要创建 FaasJS？",slug:"为什么要创建-faasjs",children:[{level:3,title:"FaasJS 要解决什么问题？",slug:"faasjs-要解决什么问题",children:[]},{level:3,title:"FaasJS 将如何解决问题？",slug:"faasjs-将如何解决问题",children:[]},{level:3,title:"为什么面向业务流程？",slug:"为什么面向业务流程",children:[]}]},{level:2,title:"为什么选择 Serverless？",slug:"为什么选择-serverless",children:[{level:3,title:"什么是 Serverless？",slug:"什么是-serverless",children:[]},{level:3,title:"Serverless 的优势",slug:"serverless-的优势",children:[]},{level:3,title:"为什么选择 FaaS 而不是 PaaS ?",slug:"为什么选择-faas-而不是-paas",children:[]}]},{level:2,title:"为什么选择 Node.js ?",slug:"为什么选择-node-js",children:[{level:3,title:"什么是 Node.js ?",slug:"什么是-node-js",children:[]},{level:3,title:"Node.js 的优势",slug:"node-js-的优势",children:[]}]},{level:2,title:"为什么选择 TypeScript ?",slug:"为什么选择-typescript",children:[{level:3,title:"什么是 TypeScript ?",slug:"什么是-typescript",children:[]},{level:3,title:"Typescript 的优势",slug:"typescript-的优势",children:[]}]}],git:{updatedTime:1649210171e3},filePathRelative:"zh/guide/story.md"}},8236:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});const r=(0,s(6252).uE)('<h1 id="背景故事" tabindex="-1"><a class="header-anchor" href="#背景故事" aria-hidden="true">#</a> 背景故事</h1><h2 id="为什么要创建-faasjs" tabindex="-1"><a class="header-anchor" href="#为什么要创建-faasjs" aria-hidden="true">#</a> 为什么要创建 FaasJS？</h2><h3 id="faasjs-要解决什么问题" tabindex="-1"><a class="header-anchor" href="#faasjs-要解决什么问题" aria-hidden="true">#</a> FaasJS 要解决什么问题？</h3><p>自从 AWS Lambda 带来了 Serverless 热潮后，不少公司和个人都尝试了 FaaS 服务，并欣喜于其轻量和易于上手的特点。</p><p>但当使用 FaaS 服务来开发企业级应用时，却遇到了缺乏框架、工具和实践指导的问题。</p><p>所以我打算将我在简单心理实践 FasS 的经验总结和优化，做成一套简单易上手的 FasS 的框架。</p><h3 id="faasjs-将如何解决问题" tabindex="-1"><a class="header-anchor" href="#faasjs-将如何解决问题" aria-hidden="true">#</a> FaasJS 将如何解决问题？</h3><p>以下是我在实践过程中遇到的主要问题及解决办法：</p><p><strong>函数随着数量增多而越来越难以管理</strong></p><p>通过对函数名设定命名规则，以多个层级的命名空间来管理函数，并明确每个函数的作用。</p><p><strong>函数之间互相调用导致出故障时难以追查</strong></p><ol><li>在业务流程的起始点设置追踪 ID，并继承和贯穿整个业务流程，以这种方式来查找日志并追查故障；</li><li>使用框架来自动分析所有函数之间的调用关系，直观展示调用流程。</li></ol><p><strong>碎片化的函数难以开发和扩展</strong></p><p>通过使用框架来提供单体应用式的开发体验。</p><h3 id="为什么面向业务流程" tabindex="-1"><a class="header-anchor" href="#为什么面向业务流程" aria-hidden="true">#</a> 为什么面向业务流程？</h3><p>大部分情况下，业务人员的沟通用的是面向过程的表达方式，比如第一步做什么，第二步做什么等等。</p><p>而传统的技术框架，特别是 MVC 框架，用的是面向对象的表达方式。当翻译业务语言时，需要先构建抽象的对象，然后再构建该对象的行为。当流程复杂时，需要创建一系列的对象和行为。在一个高内聚的复杂应用内，这种抽象形式的确可以大幅简化开发和管理的难度。</p><p>但 FaaS 提供了完全解耦和独立的函数，使得我们可以以更贴近真实业务和人员结构的表达形式来组织代码。</p><h2 id="为什么选择-serverless" tabindex="-1"><a class="header-anchor" href="#为什么选择-serverless" aria-hidden="true">#</a> 为什么选择 Serverless？</h2><h3 id="什么是-serverless" tabindex="-1"><a class="header-anchor" href="#什么是-serverless" aria-hidden="true">#</a> 什么是 Serverless？</h3><p><img src="https://user-images.githubusercontent.com/215433/56105409-a8876e80-5f6e-11e9-9f37-363db9434a56.jpg" alt="FasS 示意图"></p><p>如上图所示，Serverless 是指由服务商来完全托管服务底层的服务，托管对象可以是函数或者应用。</p><p>FaaS(Function as a Service)是专指 Serverless 服务中的函数服务，开发者上传函数后，由服务商来负责按需执行和横向扩容等事情。</p><p>当托管对象为应用时，我们一般称为 PaaS（Platform as a Service）。</p><h3 id="serverless-的优势" tabindex="-1"><a class="header-anchor" href="#serverless-的优势" aria-hidden="true">#</a> Serverless 的优势</h3><ul><li>专注业务逻辑，由服务商全权托管底层和运维</li><li>自动伸缩，按使用量计费，节约成本</li></ul><h3 id="为什么选择-faas-而不是-paas" tabindex="-1"><a class="header-anchor" href="#为什么选择-faas-而不是-paas" aria-hidden="true">#</a> 为什么选择 FaaS 而不是 PaaS ?</h3><ul><li>PaaS 的应用通常基于各类 MVC 框架，有一定的学习成本和使用门槛</li><li>PaaS 无法避开随着应用复杂度的提升，导致扩展成本急剧升高的问题</li><li>FaaS 由于粒度细化到 Function 层级，重构时可以轻易找到最小切入点，进行低成本重构</li><li>FaaS 的函数互相之间独立运行，极大的降低了单点故障的影响范围</li><li>FaaS 可以提供更细粒度的自动伸缩和成本优化，并直观体现业务的使用频率等运营数据</li><li>FaaS 可以极大降低多人同时开发一个应用时导致的代码冲突</li></ul><h2 id="为什么选择-node-js" tabindex="-1"><a class="header-anchor" href="#为什么选择-node-js" aria-hidden="true">#</a> 为什么选择 Node.js ?</h2><h3 id="什么是-node-js" tabindex="-1"><a class="header-anchor" href="#什么是-node-js" aria-hidden="true">#</a> 什么是 Node.js ?</h3><p>Node.js 是一个能够在服务器端运行 JavaScript 的开放源代码、跨平台 JavaScript 运行环境。</p><h3 id="node-js-的优势" tabindex="-1"><a class="header-anchor" href="#node-js-的优势" aria-hidden="true">#</a> Node.js 的优势</h3><ul><li>JavaScript 是一个通行于前后端的编程语言，且易于上手</li><li>Node.js 的插件管理工具 npm 已有近百万插件，易于使用和开发</li></ul><h2 id="为什么选择-typescript" tabindex="-1"><a class="header-anchor" href="#为什么选择-typescript" aria-hidden="true">#</a> 为什么选择 TypeScript ?</h2><h3 id="什么是-typescript" tabindex="-1"><a class="header-anchor" href="#什么是-typescript" aria-hidden="true">#</a> 什么是 TypeScript ?</h3><p>TypeScript 是 JavaScript 的一个严格超集，并添加了可选的静态类型和基于类的面向对象编程。</p><h3 id="typescript-的优势" tabindex="-1"><a class="header-anchor" href="#typescript-的优势" aria-hidden="true">#</a> Typescript 的优势</h3><ul><li>弥补 JavaScript 的缺陷</li><li>提升代码质量</li><li>开发时可以享有更好的代码提示及类型检查</li></ul>',38),i={},l=(0,s(3744).Z)(i,[["render",function(e,a){return r}]])},3744:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,r]of a)s[e]=r;return s}}}]);