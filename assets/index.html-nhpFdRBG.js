import{_ as a,r as i,o as l,c as r,a as e,d as s,e as o}from"./app-Ph9XU2oP.js";const t={},d=e("h1",{id:"a-nginx-image-for-faasjs-projects",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-nginx-image-for-faasjs-projects"},[e("span",null,"A Nginx Image for FaasJS projects")])],-1),c={href:"https://hub.docker.com/repository/docker/faasjs/nginx",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue",alt:"faasjs/nginx"},null,-1),m={href:"https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml",target:"_blank",rel:"noopener noreferrer"},g=e("img",{src:"https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg",alt:"Build Status"},null,-1),h={href:"https://hub.docker.com/repository/docker/faasjs/nginx",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://img.shields.io/docker/image-size/faasjs/nginx/latest",alt:"Image size"},null,-1),f=o(`<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>Base on <code>alpine</code> with tiny image size.</li><li>Support brotli compression.</li><li>Output log to stdout.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile" data-title="Dockerfile"><pre class="language-Dockerfile"><code>FROM faasjs/node AS builder

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

RUN npm run build

FROM faasjs/nginx

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function p(b,_){const n=i("ExternalLinkIcon");return l(),r("div",null,[d,e("p",null,[e("a",c,[u,s(n)]),e("a",m,[g,s(n)]),e("a",h,[v,s(n)])]),f])}const x=a(t,[["render",p],["__file","index.html.vue"]]);export{x as default};
