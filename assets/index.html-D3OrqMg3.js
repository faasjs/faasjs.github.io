import{_ as s,c as a,o as e,a as n}from"./app-SNyWjU5n.js";const i={},l=n(`<h1 id="a-nginx-image-for-faasjs-projects" tabindex="-1"><a class="header-anchor" href="#a-nginx-image-for-faasjs-projects"><span>A Nginx Image for FaasJS projects</span></a></h1><p><a href="https://hub.docker.com/repository/docker/faasjs/nginx" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-faasjs%2Fnginx-blue" alt="faasjs/nginx"></a><a href="https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/faasjs/faasjs/actions/workflows/build-nginx-image.yml/badge.svg" alt="Build Status"></a><a href="https://hub.docker.com/repository/docker/faasjs/nginx" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/docker/image-size/faasjs/nginx/latest" alt="Image size"></a></p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>Base on <code>alpine</code> with tiny image size.</li><li>Support brotli compression.</li><li>Output log to stdout.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-Dockerfile line-numbers-mode" data-highlighter="prismjs" data-ext="Dockerfile" data-title="Dockerfile"><pre><code><span class="line">FROM faasjs/node AS builder</span>
<span class="line"></span>
<span class="line">WORKDIR /app</span>
<span class="line">COPY package.json package.json</span>
<span class="line">COPY package-lock.json package-lock.json</span>
<span class="line">RUN npm install</span>
<span class="line"></span>
<span class="line">COPY . .</span>
<span class="line"></span>
<span class="line">RUN npm run build</span>
<span class="line"></span>
<span class="line">FROM faasjs/nginx</span>
<span class="line"></span>
<span class="line">COPY --from=builder /app/dist /usr/share/nginx/html</span>
<span class="line"></span>
<span class="line">EXPOSE 80</span>
<span class="line"></span>
<span class="line">CMD [&quot;nginx&quot;, &quot;-g&quot;, &quot;daemon off;&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[l];function t(c,o){return e(),a("div",null,r)}const p=s(i,[["render",t],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/doc/images/nginx/","title":"A Nginx Image for FaasJS projects","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/images/nginx/README.md"}');export{p as comp,u as data};
