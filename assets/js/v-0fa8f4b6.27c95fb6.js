"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[9343],{9022:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-0fa8f4b6",path:"/zh/guide/excel/faas-yaml.html",title:"faas.yaml",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"文件名",slug:"文件名",children:[]},{level:2,title:"读取顺序",slug:"读取顺序",children:[]},{level:2,title:"节点说明",slug:"节点说明",children:[{level:3,title:"一级节点：环境节点",slug:"一级节点-环境节点",children:[]},{level:3,title:"二级节点：服务商、插件 & 部署节点",slug:"二级节点-服务商、插件-部署节点",children:[]},{level:3,title:"三级节点：具体配置",slug:"三级节点-具体配置",children:[]}]}],git:{updatedTime:16460235e5},filePathRelative:"zh/guide/excel/faas-yaml.md"}},3792:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="faas-yaml" tabindex="-1"><a class="header-anchor" href="#faas-yaml" aria-hidden="true">#</a> faas.yaml</h1><p>为了灵活高效的处理简单应用和复杂应用的配置，FaasJS 采用了递归式的配置方式。</p><h2 id="文件名" tabindex="-1"><a class="header-anchor" href="#文件名" aria-hidden="true">#</a> 文件名</h2><p>配置文件的名字统一为 <strong>faas.yaml</strong>。</p><h2 id="读取顺序" tabindex="-1"><a class="header-anchor" href="#读取顺序" aria-hidden="true">#</a> 读取顺序</h2><p>当编译云函数文件时，会从云函数所在在文件夹开始，逐级向外寻找配置文件并合并配置，合并配置的优先级也以云函数所在文件夹的配置文件为最高优先级。</p><p>比如下面的文件结构：<code>| 表示文件夹，- 表示文件</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>| root\n  - faas.yaml\n  | user\n    - faas.yaml\n    | account\n      - faas.yaml\n      - create.func.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>当编译 <code>create.func.ts</code> 时，会依次读取：</p><ol><li><code>account/faas.yaml</code></li><li><code>user/faas.yaml</code></li><li><code>root/faas.yaml</code></li></ol><p>然后按以下顺序进行配置项的合并和覆盖（后面的覆盖前面的）：</p><ol><li><code>root/faas.yaml</code></li><li><code>user/faas.yaml</code></li><li><code>account/faas.yaml</code></li></ol><h2 id="节点说明" tabindex="-1"><a class="header-anchor" href="#节点说明" aria-hidden="true">#</a> 节点说明</h2><h3 id="一级节点-环境节点" tabindex="-1"><a class="header-anchor" href="#一级节点-环境节点" aria-hidden="true">#</a> 一级节点：环境节点</h3><ul><li><strong>defaults</strong> 默认环境，必须存在，用于设置全局默认配置</li><li><strong>local</strong> 默认本地开发环境</li><li><strong>testing</strong> 默认线上测试环境</li><li><strong>production</strong> 默认线上正式环境</li></ul><h3 id="二级节点-服务商、插件-部署节点" tabindex="-1"><a class="header-anchor" href="#二级节点-服务商、插件-部署节点" aria-hidden="true">#</a> 二级节点：服务商、插件 &amp; 部署节点</h3><ul><li><strong>providers</strong> 服务商节点，用于配置服务商的 Token 等全局信息。</li><li><strong>plugins</strong> 插件节点，各个插件会读取此处的配置作为默认配置。</li><li><strong>deploy</strong> 部署节点</li></ul><h3 id="三级节点-具体配置" tabindex="-1"><a class="header-anchor" href="#三级节点-具体配置" aria-hidden="true">#</a> 三级节点：具体配置</h3><h4 id="服务商节点" tabindex="-1"><a class="header-anchor" href="#服务商节点" aria-hidden="true">#</a> 服务商节点</h4><p>服务商名字可以自行设定，若在一个服务商里有多个账户，或者多个可用区时，建议分开设为多个服务商节点。</p><ul><li><strong>type</strong> 服务商类型，与 npm 的名字保持一致</li><li><strong>config</strong> 具体配置项，不同的服务商类型有不同的可配置项</li></ul><p>例：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">providers</span><span class="token punctuation">:</span>\n  <span class="token key atrule">first</span><span class="token punctuation">:</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> @faasjs/tencentcloud\n    <span class="token key atrule">config</span><span class="token punctuation">:</span>\n      <span class="token key atrule">app_id</span><span class="token punctuation">:</span> <span class="token number">1</span>\n  <span class="token key atrule">second</span><span class="token punctuation">:</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> @faasjs/tencentcloud\n    <span class="token key atrule">config</span><span class="token punctuation">:</span>\n      <span class="token key atrule">app_id</span><span class="token punctuation">:</span> <span class="token number">2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="插件节点" tabindex="-1"><a class="header-anchor" href="#插件节点" aria-hidden="true">#</a> 插件节点</h4><p>节点名可自行设定，多个同类插件可以设定为多个插件配置。</p><p>若节点名为插件的名字，则视为该插件的默认节点。</p><ul><li><strong>type</strong> 插件类型</li><li><strong>provider</strong> 服务商名字，即 providers 中设置的 key；对于非服务商云资源（如数据库），此项不填写</li><li><strong>config</strong> 具体配置项，不同类型有不同的可配置项</li></ul><p>例：</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n  <span class="token key atrule">function</span><span class="token punctuation">:</span>\n    <span class="token key atrule">provider</span><span class="token punctuation">:</span> first\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> faas\n    <span class="token key atrule">config</span><span class="token punctuation">:</span>\n      <span class="token key atrule">MemorySize</span><span class="token punctuation">:</span> <span class="token number">128</span>\n  <span class="token key atrule">second_faas</span><span class="token punctuation">:</span>\n    <span class="token key atrule">provider</span><span class="token punctuation">:</span> second\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> faas\n    <span class="token key atrule">config</span><span class="token punctuation">:</span>\n      <span class="token key atrule">MemorySize</span><span class="token punctuation">:</span> <span class="token number">256</span>\n  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> mysql\n    <span class="token key atrule">config</span><span class="token punctuation">:</span>\n      <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',29),l={},p=(0,s(3744).Z)(l,[["render",function(a,n){return e}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,e]of n)s[a]=e;return s}}}]);