import{_ as n,c as a,a as e,o as i}from"./app-BRUPUmbl.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="dockerize-faasjs-application" tabindex="-1"><a class="header-anchor" href="#dockerize-faasjs-application"><span>Dockerize FaasJS Application</span></a></h1><p>This document describes how to dockerize a FaasJS application.</p><h2 id="file-structure" tabindex="-1"><a class="header-anchor" href="#file-structure"><span>File Structure</span></a></h2><p>The file structure of a FaasJS application is as follows:</p><div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre><code><span class="line">.</span>
<span class="line">├── index.func.ts</span>
<span class="line">├── faas.yaml</span>
<span class="line">├── server.ts</span>
<span class="line">├── Dockerfile</span>
<span class="line">|── tsconfig.json</span>
<span class="line">|── package.json</span>
<span class="line">|── package-lock.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>*.func.ts</code>: The cloud function file. In FaasJS, all cloud function files must end with <code>.func.ts</code>.</li><li><code>faas.yaml</code>: The configuration file for FaasJS, which records the configuration items of cloud service providers and plugins.</li><li><code>server.ts</code>: The entry file of the FaasJS application.</li><li><code>Dockerfile</code>: The Dockerfile for building the FaasJS application.</li></ul><h2 id="server-entry-server-ts" tabindex="-1"><a class="header-anchor" href="#server-entry-server-ts"><span>Server Entry (<code>server.ts</code>)</span></a></h2><p>The following is an example of a <code>server.ts</code> file for a FaasJS application:</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Server <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/server&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:url&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> dirname <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;node:path&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> __filename <span class="token operator">=</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">dirname</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>FaasRoot <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Server</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>FaasRoot<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  port<span class="token operator">:</span> <span class="token number">3000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile"><span>Dockerfile</span></a></h2><p>The following is an example of a <code>Dockerfile</code> for a FaasJS application:</p><div class="language-Dockerfile line-numbers-mode" data-highlighter="prismjs" data-ext="Dockerfile" data-title="Dockerfile"><pre><code><span class="line">FROM faasjs/node</span>
<span class="line"></span>
<span class="line">WORKDIR /app</span>
<span class="line"></span>
<span class="line">COPY package.json package-lock.json ./</span>
<span class="line"></span>
<span class="line">RUN npm install --production</span>
<span class="line"></span>
<span class="line">COPY . .</span>
<span class="line"></span>
<span class="line">ENV FaasEnv=production</span>
<span class="line">ENV FaasMode=mono</span>
<span class="line">ENV FaasLogMode=plain</span>
<span class="line">ENV FaasLog=debug</span>
<span class="line"></span>
<span class="line">EXPOSE 3000</span>
<span class="line"></span>
<span class="line">CMD [&quot;tsx&quot;, &quot;server.ts&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const o=n(l,[["render",p],["__file","Dockerize.html.vue"]]),r=JSON.parse('{"path":"/guide/Dockerize.html","title":"Dockerize FaasJS Application","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"File Structure","slug":"file-structure","link":"#file-structure","children":[]},{"level":2,"title":"Server Entry (server.ts)","slug":"server-entry-server-ts","link":"#server-entry-server-ts","children":[]},{"level":2,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]}],"git":{"updatedTime":1736565931000},"filePathRelative":"guide/Dockerize.md"}');export{o as comp,r as data};
