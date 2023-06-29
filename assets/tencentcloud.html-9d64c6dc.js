import{_ as i,r as s,o as r,c,b as e,e as l,d as n,a as t}from"./app-46b838d7.js";const a={},d=t('<h1 id="_2-分钟部署到腾讯云" tabindex="-1"><a class="header-anchor" href="#_2-分钟部署到腾讯云" aria-hidden="true">#</a> 2 分钟部署到腾讯云</h1><p>注：欢迎加入 QQ 群（772109193）与大家一起交流学习。</p><p>在学习本教程前，建议先学习 <a href="/guide">1 分钟上手</a>。</p><p>通过本教程，你将学到：</p><ul><li>使用 FaasJS 需要开通哪些云服务？</li><li>如何将云函数部署到腾讯云上？</li></ul><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>',6),h={href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"开通服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开通服务","aria-hidden":"true"},"#"),l(" 开通服务")],-1),p=e("p",null,"FaasJS 需要开通以下三个服务，依次点开即可开通：",-1),_=e("strong",null,"云函数",-1),g={href:"https://console.qcloud.com/scf",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"API网关",-1),m={href:"https://console.qcloud.com/apigateway/index",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"对象存储",-1),k={href:"https://console.qcloud.com/cos5",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"获取腾讯云配置信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取腾讯云配置信息","aria-hidden":"true"},"#"),l(" 获取腾讯云配置信息")],-1),F=e("p",null,[l("FaasJS 需要将以下 4 个配置信息填写到 "),e("code",null,"faas.yaml"),l("：")],-1),y=e("strong",null,"appId",-1),I={href:"https://console.cloud.tencent.com/developer",target:"_blank",rel:"noopener noreferrer"},S=t("<li><strong>region</strong> 可用区，目前腾讯云仅下面 4 个可用区可以完整支持 FaasJS： <ul><li><strong>ap-beijing</strong> 华北地区(北京)</li><li><strong>ap-shanghai</strong> 华东地区(上海)</li><li><strong>ap-guangzhou</strong> 华南地区(广州)</li><li><strong>ap-hongkong</strong> 港澳台地区(中国香港)</li></ul></li><li><strong>secretId</strong> 和 <strong>secretKey</strong> 腾讯云接口密钥信息，获取方式如下：</li>",2),B={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},C=e("li",null,"创建一个子账号，并给与三个权限：",-1),q=t(`<ul><li><strong>QcloudSCFFullAccess</strong></li><li><strong>QcloudCOSFullAccess</strong></li><li><strong>QcloudAPIGWFullAccess</strong></li></ul><ol start="3"><li>获取子账号的 secretId 和 secretKey</li></ol><p>完成了 <code>faas.yaml</code> 中配置后，就可以发布到腾讯云了。</p><h2 id="发布到腾讯云" tabindex="-1"><a class="header-anchor" href="#发布到腾讯云" aria-hidden="true">#</a> 发布到腾讯云</h2><p>FaasJS 的发布指令格式为 <code>npm exec faas deploy &lt;env&gt; &lt;file&gt;</code>，示例如下：</p><pre><code>npm exec faas deploy production hello.func.ts
</code></pre><p>其中 <code>production</code> 即环境名，<code>hello.func.ts</code> 即要发布的云函数文件名。</p><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h2><h3 id="云函数发布流程" tabindex="-1"><a class="header-anchor" href="#云函数发布流程" aria-hidden="true">#</a> 云函数发布流程</h3><ol><li>生成配置项</li><li>生成代码包</li><li>生成 index.js</li><li>生成 package.json</li><li>生成 node_modules</li><li>打包代码包</li><li>创建 Cos Bucket</li><li>检查 Cos Bucket 状态</li><li>创建 Cos Bucket 或跳过</li><li>上传代码包</li><li>创建命名空间</li><li>检查命名空间状态</li><li>创建命名空间或跳过</li><li>创建/更新云函数</li><li>检查云函数状态</li><li>创建/更新云函数</li><li>等待云函数创建/更新完成</li><li>发布版本</li><li>创建/更新触发器</li><li>删除旧触发器</li><li>创建触发器</li><li>清理文件</li><li>清理 Cos Bucket</li><li>清理本地文件</li><li>完成发布</li></ol>`,10);function v(A,J){const o=s("ExternalLinkIcon");return r(),c("div",null,[d,e("p",null,[l("注册 "),e("a",h,[l("腾讯云"),n(o)]),l(" 并完成实名验证。")]),u,p,e("ol",null,[e("li",null,[_,l(),e("a",g,[l("https://console.qcloud.com/scf"),n(o)])]),e("li",null,[f,l(),e("a",m,[l("https://console.qcloud.com/apigateway/index"),n(o)])]),e("li",null,[x,l(),e("a",k,[l("https://console.qcloud.com/cos5"),n(o)])])]),b,F,e("ul",null,[e("li",null,[y,l(" 腾讯云的 APPID，在 "),e("a",I,[l("https://console.cloud.tencent.com/developer"),n(o)]),l(" 获取")]),S]),e("ol",null,[e("li",null,[l("打开 "),e("a",B,[l("https://console.cloud.tencent.com/cam/capi"),n(o)])]),C]),q])}const N=i(a,[["render",v],["__file","tencentcloud.html.vue"]]);export{N as default};
