"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[757],{8104:(l,e,n)=>{n.r(e),n.d(e,{data:()=>o});const o={key:"v-16d69b64",path:"/zh/guide/tencentcloud.html",title:"2 分钟部署到腾讯云",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备工作",slug:"准备工作",children:[]},{level:2,title:"开通服务",slug:"开通服务",children:[]},{level:2,title:"获取腾讯云配置信息",slug:"获取腾讯云配置信息",children:[]},{level:2,title:"发布到腾讯云",slug:"发布到腾讯云",children:[]},{level:2,title:"附录",slug:"附录",children:[{level:3,title:"云函数发布流程",slug:"云函数发布流程",children:[]}]}],git:{updatedTime:16488597e5},filePathRelative:"zh/guide/tencentcloud.md"}},6956:(l,e,n)=>{n.r(e),n.d(e,{default:()=>B});var o=n(6252);const i=(0,o.uE)('<h1 id="_2-分钟部署到腾讯云" tabindex="-1"><a class="header-anchor" href="#_2-分钟部署到腾讯云" aria-hidden="true">#</a> 2 分钟部署到腾讯云</h1><p>注：欢迎加入 QQ 群（772109193）与大家一起交流学习。</p><p>在学习本教程前，建议先学习 <a href="/guide">1 分钟上手</a>。</p><p>通过本教程，你将学到：</p><ul><li>使用 FaasJS 需要开通哪些云服务？</li><li>如何将云函数部署到腾讯云上？</li></ul><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>',6),t=(0,o.Uk)("注册 "),r={href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"},a=(0,o.Uk)("腾讯云"),c=(0,o.Uk)(" 并完成实名验证。"),s=(0,o._)("h2",{id:"开通服务",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#开通服务","aria-hidden":"true"},"#"),(0,o.Uk)(" 开通服务")],-1),d=(0,o._)("p",null,"FaasJS 需要开通以下三个服务，依次点开即可开通：",-1),u=(0,o._)("strong",null,"云函数",-1),h=(0,o.Uk)(),p={href:"https://console.qcloud.com/scf",target:"_blank",rel:"noopener noreferrer"},g=(0,o.Uk)("https://console.qcloud.com/scf"),_=(0,o._)("strong",null,"API网关",-1),f=(0,o.Uk)(),k={href:"https://console.qcloud.com/apigateway/index",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("https://console.qcloud.com/apigateway/index"),U=(0,o._)("strong",null,"对象存储",-1),b=(0,o.Uk)(),x={href:"https://console.qcloud.com/cos5",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("https://console.qcloud.com/cos5"),y=(0,o._)("h2",{id:"获取腾讯云配置信息",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#获取腾讯云配置信息","aria-hidden":"true"},"#"),(0,o.Uk)(" 获取腾讯云配置信息")],-1),F=(0,o._)("p",null,[(0,o.Uk)("FaasJS 需要将以下 4 个配置信息填写到 "),(0,o._)("code",null,"faas.yaml"),(0,o.Uk)("：")],-1),C=(0,o._)("strong",null,"appId",-1),I=(0,o.Uk)(" 腾讯云的 APPID，在 "),S={href:"https://console.cloud.tencent.com/developer",target:"_blank",rel:"noopener noreferrer"},W=(0,o.Uk)("https://console.cloud.tencent.com/developer"),q=(0,o.Uk)(" 获取"),A=(0,o.uE)("<li><strong>region</strong> 可用区，目前腾讯云仅下面 4 个可用区可以完整支持 FaasJS： <ul><li><strong>ap-beijing</strong> 华北地区(北京)</li><li><strong>ap-shanghai</strong> 华东地区(上海)</li><li><strong>ap-guangzhou</strong> 华南地区(广州)</li><li><strong>ap-hongkong</strong> 港澳台地区(中国香港)</li></ul></li><li><strong>secretId</strong> 和 <strong>secretKey</strong> 腾讯云接口密钥信息，获取方式如下：</li>",2),j=(0,o.Uk)("打开 "),w={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},J=(0,o.Uk)("https://console.cloud.tencent.com/cam/capi"),P=(0,o._)("li",null,"创建一个子账号，并给与三个权限：",-1),Q=(0,o.uE)('<ul><li><strong>QcloudSCFFullAccess</strong></li><li><strong>QcloudCOSFullAccess</strong></li><li><strong>QcloudAPIGWFullAccess</strong></li></ul><ol start="3"><li>获取子账号的 secretId 和 secretKey</li></ol><p>完成了 <code>faas.yaml</code> 中配置后，就可以发布到腾讯云了。</p><h2 id="发布到腾讯云" tabindex="-1"><a class="header-anchor" href="#发布到腾讯云" aria-hidden="true">#</a> 发布到腾讯云</h2><p>FaasJS 的发布指令格式为 <code>npm exec faas deploy &lt;env&gt; &lt;file&gt;</code>，示例如下：</p><pre><code>npm exec faas deploy production hello.func.ts\n</code></pre><p>其中 <code>production</code> 即环境名，<code>hello.func.ts</code> 即要发布的云函数文件名。</p><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h2><h3 id="云函数发布流程" tabindex="-1"><a class="header-anchor" href="#云函数发布流程" aria-hidden="true">#</a> 云函数发布流程</h3><ol><li>生成配置项</li><li>生成代码包</li><li>生成 index.js</li><li>生成 package.json</li><li>生成 node_modules</li><li>打包代码包</li><li>创建 Cos Bucket</li><li>检查 Cos Bucket 状态</li><li>创建 Cos Bucket 或跳过</li><li>上传代码包</li><li>创建命名空间</li><li>检查命名空间状态</li><li>创建命名空间或跳过</li><li>创建/更新云函数</li><li>检查云函数状态</li><li>创建/更新云函数</li><li>等待云函数创建/更新完成</li><li>发布版本</li><li>创建/更新触发器</li><li>删除旧触发器</li><li>创建触发器</li><li>清理文件</li><li>清理 Cos Bucket</li><li>清理本地文件</li><li>完成发布</li></ol>',10),z={},B=(0,n(3744).Z)(z,[["render",function(l,e){const n=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[t,(0,o._)("a",r,[a,(0,o.Wm)(n)]),c]),s,d,(0,o._)("ol",null,[(0,o._)("li",null,[u,h,(0,o._)("a",p,[g,(0,o.Wm)(n)])]),(0,o._)("li",null,[_,f,(0,o._)("a",k,[m,(0,o.Wm)(n)])]),(0,o._)("li",null,[U,b,(0,o._)("a",x,[v,(0,o.Wm)(n)])])]),y,F,(0,o._)("ul",null,[(0,o._)("li",null,[C,I,(0,o._)("a",S,[W,(0,o.Wm)(n)]),q]),A]),(0,o._)("ol",null,[(0,o._)("li",null,[j,(0,o._)("a",w,[J,(0,o.Wm)(n)])]),P]),Q],64)}]])},3744:(l,e)=>{e.Z=(l,e)=>{const n=l.__vccOpts||l;for(const[l,o]of e)n[l]=o;return n}}}]);