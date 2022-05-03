import{_ as e,r as t,o as p,a as o,b as s,d as a,F as r,e as c,c as l}from"./app.94778bae.js";const u={},i=s("h1",{id:"faasjs-jest",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#faasjs-jest","aria-hidden":"true"},"#"),c(" @faasjs/jest")],-1),m={href:"https://github.com/faasjs/faasjs/blob/main/packages/faasjs/jest/LICENSE",target:"_blank",rel:"noopener noreferrer"},d=s("img",{src:"https://img.shields.io/npm/l/@faasjs/jest.svg",alt:"License: MIT"},null,-1),b={href:"https://www.npmjs.com/package/@faasjs/jest",target:"_blank",rel:"noopener noreferrer"},k=s("img",{src:"https://img.shields.io/npm/v/@faasjs/jest/stable.svg",alt:"NPM Stable Version"},null,-1),g={href:"https://www.npmjs.com/package/@faasjs/jest",target:"_blank",rel:"noopener noreferrer"},j=s("img",{src:"https://img.shields.io/npm/v/@faasjs/jest/beta.svg",alt:"NPM Beta Version"},null,-1),f=l(`<p>A jest plugin for faasjs projects.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><pre><code>npm install -d @faasjs/jest
</code></pre><p>Add <code>jest</code> to your <code>package.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;jest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;transform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;.(jsx|tsx?)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./packages/jest&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;testRegex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*\\\\.test\\\\.tsx?$&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;coveragePathIgnorePatterns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;/lib/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/dist/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/tmp/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/__tests__/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/examples/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;!*.d.ts&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleNameMapper&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;\\\\.(css|less|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@faasjs/jest&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,5);function h(_,q){const n=t("ExternalLinkIcon");return p(),o(r,null,[i,s("p",null,[s("a",m,[d,a(n)]),s("a",b,[k,a(n)]),s("a",g,[j,a(n)])]),f],64)}var v=e(u,[["render",h],["__file","index.html.vue"]]);export{v as default};