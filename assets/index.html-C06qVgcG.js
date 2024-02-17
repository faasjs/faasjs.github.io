import{_ as r,r as i,o as l,c as d,a as s,d as e,w as o,e as c,b as t}from"./app-BmVECJDN.js";const h={},g=s("h1",{id:"faasjs-s-docker-images",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#faasjs-s-docker-images"},[s("span",null,"FaasJS's Docker Images")])],-1),f=s("h2",{id:"images",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#images"},[s("span",null,"Images")])],-1),u={id:"faasjs-nginx",tabindex:"-1"},m={class:"header-anchor",href:"#faasjs-nginx"},_=s("p",null,"A Nginx Image for FaasJS projects.",-1),p={href:"https://hub.docker.com/r/faasjs/nginx",target:"_blank",rel:"noopener noreferrer"},b=s("img",{src:"https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue",alt:"faasjs/nginx"},null,-1),j={href:"https://hub.docker.com/r/faasjs/nginx",target:"_blank",rel:"noopener noreferrer"},k=s("img",{src:"https://img.shields.io/docker/image-size/faasjs/nginx/latest",alt:"Image size"},null,-1),v={href:"https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml",target:"_blank",rel:"noopener noreferrer"},x=s("img",{src:"https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg",alt:"Build faasjs/nginx"},null,-1),y={id:"faasjs-vscode",tabindex:"-1"},w={class:"header-anchor",href:"#faasjs-vscode"},I=s("p",null,"VSCode Container Image for FaasJS projects.",-1),F={href:"https://hub.docker.com/r/faasjs/vscode",target:"_blank",rel:"noopener noreferrer"},N=s("img",{src:"https://img.shields.io/badge/Docker-faasjs%2Fvscode-blue",alt:"faasjs/vscode"},null,-1),S={href:"https://hub.docker.com/r/faasjs/vscode",target:"_blank",rel:"noopener noreferrer"},z=s("img",{src:"https://img.shields.io/docker/image-size/faasjs/vscode/latest",alt:"Image size"},null,-1),B={href:"https://github.com/faasjs/faasjs/actions/workflows/build-vscode-image.yml",target:"_blank",rel:"noopener noreferrer"},D=s("img",{src:"https://github.com/faasjs/faasjs/actions/workflows/build-vscode-image.yml/badge.svg",alt:"Build faasjs/vscode"},null,-1),J={id:"faasjs-node",tabindex:"-1"},R={class:"header-anchor",href:"#faasjs-node"},C=s("p",null,"Node Image for FaasJS projects.",-1),E={href:"https://hub.docker.com/r/faasjs/node",target:"_blank",rel:"noopener noreferrer"},U=s("img",{src:"https://img.shields.io/badge/Docker-faasjs%2Fnode-blue",alt:"faasjs/node"},null,-1),V={href:"https://hub.docker.com/r/faasjs/node",target:"_blank",rel:"noopener noreferrer"},A=s("img",{src:"https://img.shields.io/docker/image-size/faasjs/node/latest",alt:"Image size"},null,-1),L={href:"https://github.com/faasjs/faasjs/actions/workflows/build-node-image.yml",target:"_blank",rel:"noopener noreferrer"},T=s("img",{src:"https://github.com/faasjs/faasjs/actions/workflows/build-node-image.yml/badge.svg",alt:"Build faasjs/node"},null,-1),q={id:"faasjs-bun",tabindex:"-1"},O={class:"header-anchor",href:"#faasjs-bun"},M=s("p",null,"Bun Image for FaasJS projects.",-1),P={href:"https://hub.docker.com/r/faasjs/bun",target:"_blank",rel:"noopener noreferrer"},G=s("img",{src:"https://img.shields.io/badge/Docker-faasjs%2Fbun-blue",alt:"faasjs/bun"},null,-1),H={href:"https://hub.docker.com/r/faasjs/bun",target:"_blank",rel:"noopener noreferrer"},K=s("img",{src:"https://img.shields.io/docker/image-size/faasjs/bun/latest",alt:"Image size"},null,-1),Q={href:"https://github.com/faasjs/faasjs/actions/workflows/build-bun-image.yml",target:"_blank",rel:"noopener noreferrer"},W=s("img",{src:"https://github.com/faasjs/faasjs/actions/workflows/build-bun-image.yml/badge.svg",alt:"Build faasjs/bun"},null,-1),X=c(`<h2 id="tips-for-using-in-china" tabindex="-1"><a class="header-anchor" href="#tips-for-using-in-china"><span>Tips for using in China</span></a></h2><h3 id="use-aliyun-mirror" tabindex="-1"><a class="header-anchor" href="#use-aliyun-mirror"><span>Use Aliyun mirror</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># For alpine
RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g&#39; /etc/apk/repositories

# For npm
RUN npm config set registry https://registry.npmmirror.com/
# Or using .npmrc
RUN echo &quot;registry=https://registry.npmmirror.com/
&quot; &gt; .npmrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function Y(Z,$){const n=i("RouteLink"),a=i("ExternalLinkIcon");return l(),d("div",null,[g,f,s("h3",u,[s("a",m,[s("span",null,[e(n,{to:"/doc/images/nginx/"},{default:o(()=>[t("faasjs/nginx")]),_:1})])])]),_,s("p",null,[s("a",p,[b,e(a)]),s("a",j,[k,e(a)]),s("a",v,[x,e(a)])]),s("h3",y,[s("a",w,[s("span",null,[e(n,{to:"/doc/images/vscode/"},{default:o(()=>[t("faasjs/vscode")]),_:1})])])]),I,s("p",null,[s("a",F,[N,e(a)]),s("a",S,[z,e(a)]),s("a",B,[D,e(a)])]),s("h3",J,[s("a",R,[s("span",null,[e(n,{to:"/doc/images/node/"},{default:o(()=>[t("faasjs/node")]),_:1})])])]),C,s("p",null,[s("a",E,[U,e(a)]),s("a",V,[A,e(a)]),s("a",L,[T,e(a)])]),s("h3",q,[s("a",O,[s("span",null,[e(n,{to:"/doc/images/bun/"},{default:o(()=>[t("faasjs/bun")]),_:1})])])]),M,s("p",null,[s("a",P,[G,e(a)]),s("a",H,[K,e(a)]),s("a",Q,[W,e(a)])]),X])}const es=r(h,[["render",Y],["__file","index.html.vue"]]),as=JSON.parse(`{"path":"/doc/images/","title":"FaasJS's Docker Images","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Images","slug":"images","link":"#images","children":[{"level":3,"title":"faasjs/nginx","slug":"faasjs-nginx","link":"#faasjs-nginx","children":[]},{"level":3,"title":"faasjs/vscode","slug":"faasjs-vscode","link":"#faasjs-vscode","children":[]},{"level":3,"title":"faasjs/node","slug":"faasjs-node","link":"#faasjs-node","children":[]},{"level":3,"title":"faasjs/bun","slug":"faasjs-bun","link":"#faasjs-bun","children":[]}]},{"level":2,"title":"Tips for using in China","slug":"tips-for-using-in-china","link":"#tips-for-using-in-china","children":[{"level":3,"title":"Use Aliyun mirror","slug":"use-aliyun-mirror","link":"#use-aliyun-mirror","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/images/README.md"}`);export{es as comp,as as data};
