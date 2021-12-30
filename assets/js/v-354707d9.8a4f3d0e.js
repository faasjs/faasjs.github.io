"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[3540],{2248:(a,p,e)=>{e.r(p),e.d(p,{data:()=>t});const t={key:"v-354707d9",path:"/zh/blog/2021-06-26.html",title:"为什么 FaaS 系统的复杂性不会随着规模的增长而指数增长？",lang:"zh",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1640827047e3},filePathRelative:"zh/blog/2021-06-26.md"}},268:(a,p,e)=>{e.r(p),e.d(p,{default:()=>r});const t=(0,e(6252).uE)('<h1 id="为什么-faas-系统的复杂性不会随着规模的增长而指数增长" tabindex="-1"><a class="header-anchor" href="#为什么-faas-系统的复杂性不会随着规模的增长而指数增长" aria-hidden="true">#</a> 为什么 FaaS 系统的复杂性不会随着规模的增长而指数增长？</h1><p><em>发布于 2021-06-26</em></p><p>爆爆奢的后端完全基于 FaaS 架构，支撑了整个企业从前端到后端的业务。</p><p>接下来分几篇文章，跟大家聊聊爆爆奢从 FaaS 架构获得的收益，抛砖引玉以供探讨。</p><p>今天先说 FaaS 在系统复杂性方面的收益：为什么 FaaS 系统的复杂性不会随着规模的增长而指数增长？</p><p>大部分企业随着规模增长，需要经历从单体应用到微服务的重构历程。</p><p>通过拆分复杂的业务的模块，把一个大型复杂的系统，变成一个个相对简单易维护的小系统。但随着规模的进一步增长，这些初期的小系统，也会逐渐变成庞然大物，然后面临再一次的拆分。</p><p>而 FaaS 是以函数为单位的系统，每个函数只处理一个单一的业务流程，如果业务流程变复杂了，可以原子化的将一个函数扩展成多个函数，每个函数依然只处理一个单一的业务流程。</p><p>随着规模的增长，会沉淀下大量的云函数（即部署到云环境里的函数），但因为云函数部署时会锁定当时的依赖项等信息，因此这些云函数几乎可以永久正常工作而无需运维。</p><p>也就是说，FaaS 开发人员只需专注于增量部分的开发，无需关注存量的维护。</p><p>进一步假设，当增长量稳定时，那开发的工作量也是稳定的。</p><p>于是同样的开发投入，在 FaaS 架构下可以有持续稳定的产出，而在微服务架构下，产出会随着时间的增长而逐渐下降。</p><p>反过来说，为了得到持续稳定的产出，FaaS 架构只需要持续稳定的投入即可，而微服务则需要不断增加投入。</p><p>更何况随着开发投入的增加，技术管理、人员管理的成本和难度，都会指数级的增加。</p><p>曾经的企业不得不承担这块额外的风险，而在云时代，FaaS 成为了切实可行的基础架构，你跟不跟？</p>',15),s={},r=(0,e(3744).Z)(s,[["render",function(a,p){return t}]])},3744:(a,p)=>{p.Z=(a,p)=>{const e=a.__vccOpts||a;for(const[a,t]of p)e[a]=t;return e}}}]);