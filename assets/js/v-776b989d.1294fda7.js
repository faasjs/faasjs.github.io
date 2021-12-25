"use strict";(self.webpackChunkfaasjs_docs=self.webpackChunkfaasjs_docs||[]).push([[4320],{2768:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-776b989d",path:"/zh/doc/redis.html",title:"@faasjs/redis",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置参数",slug:"配置参数",children:[]},{level:2,title:"实例方法",slug:"实例方法",children:[{level:3,title:"query(command: string, args: any[]): Promise<any>",slug:"query-command-string-args-any-promise-any",children:[]}]},{level:2,title:"示例代码",slug:"示例代码",children:[]},{level:2,title:"Github 地址",slug:"github-地址",children:[]}],git:{updatedTime:1640431621e3},filePathRelative:"zh/doc/redis.md"}},5635:(s,n,a)=>{a.r(n),a.d(n,{default:()=>h});var e=a(6252);const t=(0,e._)("h1",{id:"faasjs-redis",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#faasjs-redis","aria-hidden":"true"},"#"),(0,e.Uk)(" @faasjs/redis")],-1),p=(0,e._)("p",null,"Redis 插件可以使云函数能够连接 Redis 数据库。",-1),r=(0,e.Uk)("基于 "),o={href:"https://www.npmjs.com/package/redis",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("redis"),i=(0,e.Uk)("。"),l=(0,e.uE)('<h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h2><ul><li><strong>host</strong> <code>string</code> 主机地址</li><li><strong>port</strong> <code>number</code> 端口号</li><li><strong>password</strong> <code>string</code> 登录密码</li><li><strong>prefix</strong> <code>string</code> 前缀</li></ul><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><h3 id="query-command-string-args-any-promise-any" tabindex="-1"><a class="header-anchor" href="#query-command-string-args-any-promise-any" aria-hidden="true">#</a> query(command: string, args: any[]): Promise&lt;any&gt;</h3><p>请求 Redis</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Func <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/func&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Redis <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/redis&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> redis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Redis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Func</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>redis<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将实例放到云函数的插件中</span>\n  <span class="token keyword">async</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">await</span> redis<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查询数据库</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="github-地址" tabindex="-1"><a class="header-anchor" href="#github-地址" aria-hidden="true">#</a> Github 地址</h2>',8),u={href:"https://github.com/faasjs/faasjs/tree/main/packages/redis",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("https://github.com/faasjs/faasjs/tree/main/packages/redis"),k={},h=(0,a(3744).Z)(k,[["render",function(s,n){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,(0,e._)("p",null,[r,(0,e._)("a",o,[c,(0,e.Wm)(a)]),i]),l,(0,e._)("p",null,[(0,e._)("a",u,[d,(0,e.Wm)(a)])])],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);