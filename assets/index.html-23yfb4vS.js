import{_ as a,r as i,o as r,c as o,a as e,d as s,b as l,e as t}from"./app-YOtnh9m8.js";const d={},c=e("h1",{id:"a-nginx-image-for-faasjs-projects",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#a-nginx-image-for-faasjs-projects","aria-hidden":"true"},"#"),l(" A Nginx Image for FaasJS projects")],-1),u={href:"https://hub.docker.com/repository/docker/faasjs/nginx",target:"_blank",rel:"noopener noreferrer"},m=e("img",{src:"https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue",alt:"faasjs/nginx"},null,-1),g={href:"https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml",target:"_blank",rel:"noopener noreferrer"},h=e("img",{src:"https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg",alt:"Build Status"},null,-1),v={href:"https://hub.docker.com/repository/docker/faasjs/nginx",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:"https://img.shields.io/docker/image-size/faasjs/nginx/latest",alt:"Image size"},null,-1),b=t(`<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>Base on <code>alpine</code> with tiny image size.</li><li>Support brotli compression.</li><li>Output log to stdout.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile"><pre class="language-Dockerfile"><code>FROM faasjs/node AS builder

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function p(_,x){const n=i("ExternalLinkIcon");return r(),o("div",null,[c,e("p",null,[e("a",u,[m,s(n)]),e("a",g,[h,s(n)]),e("a",v,[f,s(n)])]),b])}const j=a(d,[["render",p],["__file","index.html.vue"]]);export{j as default};
