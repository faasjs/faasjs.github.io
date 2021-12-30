"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[3290],{2378:(e,l,a)=>{a.r(l),a.d(l,{data:()=>r});const r={key:"v-2ce1ad26",path:"/zh/blog/2019-11-08.html",title:"Serverless 最佳实践之网络请求（上）",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么需要请求规范？",slug:"为什么需要请求规范",children:[]},{level:2,title:"为什么不直接使用 Restful / GraphQL？",slug:"为什么不直接使用-restful-graphql",children:[]},{level:2,title:"FaasJS 请求规范",slug:"faasjs-请求规范",children:[]}],git:{updatedTime:1640827047e3},filePathRelative:"zh/blog/2019-11-08.md"}},429:(e,l,a)=>{a.r(l),a.d(l,{default:()=>i});const r=(0,a(6252).uE)('<h1 id="serverless-最佳实践之网络请求-上" tabindex="-1"><a class="header-anchor" href="#serverless-最佳实践之网络请求-上" aria-hidden="true">#</a> Serverless 最佳实践之网络请求（上）</h1><p><em>发布于 2019-11-08</em></p><p>由于网络请求相关的最佳实践内容比较多，所以会拆分成三篇，分别是：</p><ul><li>上篇：请求规范</li><li>中篇：Cookie、Session 及入参校验</li><li>下篇：浏览器插件的集成和使用</li></ul><p>欢迎关注微信公众号“寂静小站”获取最新分享。</p><p>下面进入本篇正文，对于请求规范的最佳实践，将分三块来介绍：</p><ol><li>为什么需要请求规范？</li><li>为什么不直接使用 Restful / GraphQL？</li><li>FaasJS 请求规范</li></ol><h2 id="为什么需要请求规范" tabindex="-1"><a class="header-anchor" href="#为什么需要请求规范" aria-hidden="true">#</a> 为什么需要请求规范？</h2><p>网络请求有着多层的协议规范，但在最终应用层，由于业务形态等区别，并没有强制性的规范约束，这使得其有高度的灵活性，使用不当也会造成严重的混乱。</p><p>所以通常每个公司都会定制自己的内部和外部通讯的请求规范，通过规范来降低沟通成本和开发成本。</p><h2 id="为什么不直接使用-restful-graphql" tabindex="-1"><a class="header-anchor" href="#为什么不直接使用-restful-graphql" aria-hidden="true">#</a> 为什么不直接使用 Restful / GraphQL？</h2><p>我们分开来看这两个规范。</p><p>Restful 是目前广泛流行的请求规范，使用请求方法作为动词，请求路径作为名词，把业务逻辑映射为对资源的操作，与面向对象的设计思想很接近。</p><p>但它有两个缺点：</p><ol><li>HTTP 方法的种类是固定的，并不完全适用于业务逻辑。一方面是有些业务难以抽象为某个 HTTP 方法，另一方面是如 PUT、PATCH 语义容易混淆；</li><li>把业务逻辑拆分为一个个资源，在某些场景下会使得拆分过细，增加了理解难度（如把登录行为映射成 POST /sessions）。</li></ol><p>在前后端分离的背景下，GraphQL 给予了前端开发非常高的灵活性，且其 Query / Mutation 分离的方式，也很好地区分了对数据的查询和修改。我个人认为在非 Serverless 场景下，GraphQL 是目前最好的规范。</p><p>但在 Serverless 场景下，由于 Serverless 天生适合作为 BFF 层（甚至对于规模较小的业务，可以完全使用 Serverless 作为后端），前端开发也可以有足够的灵活性来自行创建和修改 API。</p><p>同时，在 Serverless 场景下，由于 GraphQL 的请求入口是单一的，这对入口云函数的稳定性要求很高，当其不可用时，可能会导致全部接口不可用。</p><h2 id="faasjs-请求规范" tabindex="-1"><a class="header-anchor" href="#faasjs-请求规范" aria-hidden="true">#</a> FaasJS 请求规范</h2><p>在 FaasJS 中，综合了 Restful、GraphQL 的优点，依照云函数的特点，形成了一套简单直观的请求规范。</p><p>其规定如下：</p><ul><li>请求方法统一为 POST 方法</li><li>请求路径为云函数在项目中的文件路径</li><li>请求参数统一以 JSON 的格式放在 Body 中</li><li>响应统一返回为 JSON</li><li>操作成功的响应内容被包裹在 data 字段中</li><li>操作失败的失败原因被包裹在 error 字段中</li></ul><p>这个请求规范的内在逻辑是：先将云函数们组织好，然后直接映射为 API 即可。</p><p>在 FaasJS 中，以文件夹作为天然的隔离方式，来区分和放置不同业务下的云函数。而在映射成 API 后，这种直观也同样传递了 API 层面。</p><p>此外，对于浏览器，虽然我们用的是 POST 方法，但可以在响应头中添加“Cache-Control”之类的缓存头来告知浏览器缓存。在某些有复杂查询条件的场景下，就不用担心查询条件过多达到浏览器 GET 请求长度限制的问题了。</p><p>最后，欢迎关注公众号“寂静小站”，与我交流讨论。</p>',26),s={},i=(0,a(3744).Z)(s,[["render",function(e,l){return r}]])},3744:(e,l)=>{l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[e,r]of l)a[e]=r;return a}}}]);