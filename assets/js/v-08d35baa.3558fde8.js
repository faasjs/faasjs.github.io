"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[657],{8692:(a,s,p)=>{p.r(s),p.d(s,{data:()=>e});const e={key:"v-08d35baa",path:"/zh/blog/2019-10-24.html",title:"FaasJS vs MVC",lang:"zh",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1640827047e3},filePathRelative:"zh/blog/2019-10-24.md"}},9827:(a,s,p)=>{p.r(s),p.d(s,{default:()=>i});const e=(0,p(6252).uE)('<h1 id="faasjs-vs-mvc" tabindex="-1"><a class="header-anchor" href="#faasjs-vs-mvc" aria-hidden="true">#</a> FaasJS vs MVC</h1><p><em>发布于 2019-10-24</em></p><p>今天是 10.24，首先祝大家节日快乐，没有 BUG，早早下班图片</p><p>今天想跟大家讲一下 FaasJS 背后的设计理念：</p><p><strong>使用 Function + Folder 来高效构建和迭代复杂的业务应用。</strong></p><p>作为开发人员，需要面对两种复杂性：业务复杂性和规模复杂性。</p><p>而解决复杂性，最好的办法就是拆分。</p><p>MVC 框架的做法是将一个单体应用拆分为多个单体应用，然后通过容器集群来提供服务，以此来拆分和解耦业务和规模，提升吞吐量和稳定性。</p><p>但这种方式有三个缺点：</p><ol><li>规划单体应用的拆分需要对业务架构和技术架构都有较深的理解，且工作量和工作难度都不低；</li><li>单体应用的高内聚特性，会导致随着业务增长，再次面临需要拆分的情况；</li><li>随着应用数量的增多，开发环境和测试环境所需的依赖关系变得越发错综复杂，部署和运维的难度也越来越大。</li></ol><p>简单来说，以拆分应用的方式来解决复杂性问题，其实是把复杂性转移到了运维层面，并且会导致运维层面的复杂性指数上升。</p><p>那 FaasJS 是如何降低这种复杂性指数上升的情况的呢？</p><p>首先在运维层面，FaasJS 的部署对象是 FaaS 集群，其基本单位是函数，这会带来以下好处：</p><ul><li>原子化部署：按需部署，快速部署。</li><li>原子化隔离：每个函数锁定部署时的依赖关系，不会被动升级。</li><li>原子化监控：细粒度的了解每个函数的运行状态和并进行调控。</li></ul><p>接下来在开发层面，FaasJS 主要使用以下方式来降低复杂性：</p><ol><li>面向业务流程编程，用函数替代类；</li><li>以文件夹形式直观的隔离业务领域；</li><li>以函数为单位进行拆分，使得复杂性可以以较平滑的线性来增长。</li></ol><p>MVC 为了实现高内聚，使用了分层架构和面向对象编程，但随着层级越来越多，类的继承关系越来越复杂，复杂度呈指数上升的趋势。</p><p>FaasJS 采用面对业务流程的函数式编程，彻底将每个业务流程控制为可预测的输入/输出函数，以此来控制开发和测试的复杂性。</p><p>同时，使用文件夹形式来划分云函数，不仅可以让整体架构更直观，而且使得拆分和重构更为灵活。</p><p>在 FaasJS 中，每个文件夹都可以进行独立配置，子文件夹可以继承父系文件夹的配置，云函数代码中的配置可以覆盖文件夹配置。</p><p>从而在配置层面提供了直观的继承和隔离，并且随着云函数部署到线上，配置文件会锁定在部署时的状态，不用担心被篡改。</p><p>综上所述，FaasJS 基于 Serverless 技术，使用 Function + Folder 来大幅简化代码的迭代和重构成本，使得业务可以快速更新，所以 F 也同时代表了 Fast（虽然在性能层面，Serverless 语境下，Node.js 的性能优势相对不那么突出）。</p>',22),l={},i=(0,p(3744).Z)(l,[["render",function(a,s){return e}]])},3744:(a,s)=>{s.Z=(a,s)=>{const p=a.__vccOpts||a;for(const[a,e]of s)p[a]=e;return p}}}]);