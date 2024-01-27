import{_ as a,o as e,c as s,e as p}from"./app-Ph9XU2oP.js";const o={},t=p('<h1 id="faasjs-近期更新速览" tabindex="-1"><a class="header-anchor" href="#faasjs-近期更新速览"><span>FaasJS 近期更新速览</span></a></h1><p><em>发布于 2020-03-01</em></p><p>今天把 FaasJS 的文档更新了下，补充了近期更新的不少内容。</p><p>虽然因为我忙于工作导致公众号很少更新，但大家如果关注 FaasJS 官网的 Changelog 或在 Github 上 watch faasjs/faasjs 项目的话，会发现更新还是较频繁的。</p><p>所以建议大家 watch 本项目(＾Ｕ＾)ノ~ＹＯ</p><p>先挑几个重点更新简单说明一下：</p><ol><li>新增 @faasjs/graphql-server，基于 Apollo Federation 构建，支持 Apollo Gateway。</li><li>新增 @faasjs/typeorm，现在可以在 FaasJS 中使用 TypeORM 啦！</li><li>新增 @faasjs/cos-secrets，一个基于对象存储实现的密钥管理方案，相当于简化版的 k8s ConfigMap &amp; Secrets。</li></ol><p>聪明的同学应该从 1 和 2 看出我最近在干什么了，没错，我在基于 FaasJS 构建一个 Typed Services，Services 之间使用 GraphQL 来通讯。之所以选择 GraphQL 是因为它的强类型和易用性非常适合作为服务间的通讯规范，而且像 Apollo 之类的框架，也提供了丰富易用的工具和良好的生态。</p><p>该方案目前还有不少不完善的地方，随着完善度的增加，我会同步与大家分享具体方案。</p>',9),c=[t];function l(r,i){return e(),s("div",null,c)}const h=a(o,[["render",l],["__file","2020-03-01.html.vue"]]);export{h as default};
