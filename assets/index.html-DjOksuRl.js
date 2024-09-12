import{_ as t,r as l,c as d,b as e,d as n,w as r,a as i,o as g,e as o}from"./app-DJ8vVzfT.js";const c={},f={id:"faasjs-nginx",tabindex:"-1"},m={class:"header-anchor",href:"#faasjs-nginx"},p={id:"faasjs-vscode",tabindex:"-1"},h={class:"header-anchor",href:"#faasjs-vscode"},u={id:"faasjs-node",tabindex:"-1"},b={class:"header-anchor",href:"#faasjs-node"},j={id:"faasjs-bun",tabindex:"-1"},k={class:"header-anchor",href:"#faasjs-bun"};function v(x,s){const a=l("RouteLink");return g(),d("div",null,[s[4]||(s[4]=e("h1",{id:"faasjs-s-docker-images",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faasjs-s-docker-images"},[e("span",null,"FaasJS's Docker Images")])],-1)),s[5]||(s[5]=e("h2",{id:"images",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#images"},[e("span",null,"Images")])],-1)),e("h3",f,[e("a",m,[e("span",null,[n(a,{to:"/doc/images/nginx/"},{default:r(()=>s[0]||(s[0]=[o("faasjs/nginx")])),_:1})])])]),s[6]||(s[6]=i('<p>A Nginx Image for FaasJS projects.</p><p><a href="https://hub.docker.com/r/faasjs/nginx" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue" alt="faasjs/nginx"></a><a href="https://hub.docker.com/r/faasjs/nginx" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/faasjs/nginx/latest" alt="Image size"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg" alt="Build faasjs/nginx"></a></p>',2)),e("h3",p,[e("a",h,[e("span",null,[n(a,{to:"/doc/images/vscode/"},{default:r(()=>s[1]||(s[1]=[o("faasjs/vscode")])),_:1})])])]),s[7]||(s[7]=i('<p>VSCode Container Image for FaasJS projects.</p><p><a href="https://hub.docker.com/r/faasjs/vscode" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-faasjs%2Fvscode-blue" alt="faasjs/vscode"></a><a href="https://hub.docker.com/r/faasjs/vscode" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/faasjs/vscode/latest" alt="Image size"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/build-vscode-image.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/faasjs/faasjs/actions/workflows/build-vscode-image.yml/badge.svg" alt="Build faasjs/vscode"></a></p>',2)),e("h3",u,[e("a",b,[e("span",null,[n(a,{to:"/doc/images/node/"},{default:r(()=>s[2]||(s[2]=[o("faasjs/node")])),_:1})])])]),s[8]||(s[8]=i('<p>Node Image for FaasJS projects.</p><p><a href="https://hub.docker.com/r/faasjs/node" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-faasjs%2Fnode-blue" alt="faasjs/node"></a><a href="https://hub.docker.com/r/faasjs/node" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/faasjs/node/latest" alt="Image size"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/build-node-image.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/faasjs/faasjs/actions/workflows/build-node-image.yml/badge.svg" alt="Build faasjs/node"></a></p>',2)),e("h3",j,[e("a",k,[e("span",null,[n(a,{to:"/doc/images/bun/"},{default:r(()=>s[3]||(s[3]=[o("faasjs/bun")])),_:1})])])]),s[9]||(s[9]=i(`<p>Bun Image for FaasJS projects.</p><p><a href="https://hub.docker.com/r/faasjs/bun" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-faasjs%2Fbun-blue" alt="faasjs/bun"></a><a href="https://hub.docker.com/r/faasjs/bun" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/faasjs/bun/latest" alt="Image size"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/build-bun-image.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/faasjs/faasjs/actions/workflows/build-bun-image.yml/badge.svg" alt="Build faasjs/bun"></a></p><h2 id="tips-for-using-in-china" tabindex="-1"><a class="header-anchor" href="#tips-for-using-in-china"><span>Tips for using in China</span></a></h2><h3 id="use-aliyun-mirror" tabindex="-1"><a class="header-anchor" href="#use-aliyun-mirror"><span>Use Aliyun mirror</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># For alpine</span>
<span class="line">RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g&#39; /etc/apk/repositories</span>
<span class="line"></span>
<span class="line"># For npm</span>
<span class="line">RUN npm config set registry https://registry.npmmirror.com/</span>
<span class="line"># Or using .npmrc</span>
<span class="line">RUN echo &quot;registry=https://registry.npmmirror.com/</span>
<span class="line">&quot; &gt; .npmrc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5))])}const y=t(c,[["render",v],["__file","index.html.vue"]]),w=JSON.parse(`{"path":"/doc/images/","title":"FaasJS's Docker Images","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Images","slug":"images","link":"#images","children":[{"level":3,"title":"faasjs/nginx","slug":"faasjs-nginx","link":"#faasjs-nginx","children":[]},{"level":3,"title":"faasjs/vscode","slug":"faasjs-vscode","link":"#faasjs-vscode","children":[]},{"level":3,"title":"faasjs/node","slug":"faasjs-node","link":"#faasjs-node","children":[]},{"level":3,"title":"faasjs/bun","slug":"faasjs-bun","link":"#faasjs-bun","children":[]}]},{"level":2,"title":"Tips for using in China","slug":"tips-for-using-in-china","link":"#tips-for-using-in-china","children":[{"level":3,"title":"Use Aliyun mirror","slug":"use-aliyun-mirror","link":"#use-aliyun-mirror","children":[]}]}],"git":{"updatedTime":null},"filePathRelative":"doc/images/README.md"}`);export{y as comp,w as data};
