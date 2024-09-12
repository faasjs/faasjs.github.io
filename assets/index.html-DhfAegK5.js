import{_ as n,r as e,c as t,b as p,d as l,w as o,e as s,a as i,o as c}from"./app-jjiIXugZ.js";const r={},u=i(`<h1 id="faasjs-jest" tabindex="-1"><a class="header-anchor" href="#faasjs-jest"><span>@faasjs/jest</span></a></h1><p><a href="https://github.com/faasjs/faasjs/blob/main/packages/faasjs/jest/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/@faasjs/jest.svg" alt="License: MIT"></a><a href="https://www.npmjs.com/package/@faasjs/jest" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@faasjs/jest.svg" alt="NPM Version"></a></p><p>A jest plugin for faasjs projects.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-d</span> @faasjs/jest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Add <code>jest</code> to your <code>package.json</code>:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;.(jsx|tsx?)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@faasjs/jest&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;testRegex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*\\\\.test\\\\.tsx?$&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;coveragePathIgnorePatterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;/lib/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;/dist/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;/tmp/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;/__tests__/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;/examples/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;!*.d.ts&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;moduleNameMapper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;\\\\.(css|less|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@faasjs/jest&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function d(m,v){const a=e("RouteLink");return c(),t("div",null,[p("p",null,[l(a,{to:"/doc/"},{default:o(()=>[s("Documents")]),_:1}),s(" / @faasjs/jest")]),u])}const g=n(r,[["render",d],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/doc/jest/","title":"@faasjs/jest","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"updatedTime":null},"filePathRelative":"doc/jest/README.md"}');export{g as comp,h as data};