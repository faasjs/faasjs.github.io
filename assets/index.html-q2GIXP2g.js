import{_ as e,c as a,o as s,a as i}from"./app-C_naGdBF.js";const n={},r=i(`<h1 id="a-nginx-image-for-faasjs-projects" tabindex="-1"><a class="header-anchor" href="#a-nginx-image-for-faasjs-projects"><span>A Nginx Image for FaasJS projects</span></a></h1><p><a href="https://hub.docker.com/repository/docker/faasjs/nginx" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue" alt="faasjs/nginx"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg" alt="Build Status"></a><a href="https://hub.docker.com/repository/docker/faasjs/nginx" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/faasjs/nginx/latest" alt="Image size"></a></p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>Base on <code>alpine</code> with tiny image size.</li><li>Support brotli compression.</li><li>Output log to stdout.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-Dockerfile line-numbers-mode" data-ext="Dockerfile" data-title="Dockerfile"><pre class="language-Dockerfile"><code>FROM faasjs/node AS builder

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[r];function t(o,d){return s(),a("div",null,l)}const u=e(n,[["render",t],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/doc/images/nginx/","title":"A Nginx Image for FaasJS projects","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/images/nginx/README.md"}');export{u as comp,g as data};
