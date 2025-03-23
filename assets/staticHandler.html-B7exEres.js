import{_ as r,c as o,b as e,a as i,d as a,e as s,w as l,r as p,o as d}from"./app-DE2SDUy3.js";const u={};function c(m,n){const t=p("RouteLink");return d(),o("div",null,[e("p",null,[a(t,{to:"/doc/server/"},{default:l(()=>n[0]||(n[0]=[s("Documents")])),_:1}),n[2]||(n[2]=s(" / ")),a(t,{to:"/doc/server/"},{default:l(()=>n[1]||(n[1]=[s("@faasjs/server")])),_:1}),n[3]||(n[3]=s(" / staticHandler"))]),n[11]||(n[11]=e("h1",{id:"function-statichandler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#function-statichandler"},[e("span",null,"Function: staticHandler()")])],-1)),e("blockquote",null,[e("p",null,[n[5]||(n[5]=e("strong",null,"staticHandler",-1)),n[6]||(n[6]=s("(")),n[7]||(n[7]=e("code",null,"options",-1)),n[8]||(n[8]=s("): ")),a(t,{to:"/doc/server/type-aliases/Middleware.html"},{default:l(()=>n[4]||(n[4]=[e("code",null,"Middleware",-1)])),_:1})])]),n[12]||(n[12]=e("p",null,"Middleware to handle static file requests.",-1)),n[13]||(n[13]=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters"},[e("span",null,"Parameters")])],-1)),n[14]||(n[14]=e("h3",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options"},[e("span",null,"options")])],-1)),e("p",null,[a(t,{to:"/doc/server/type-aliases/StaticHandlerOptions.html"},{default:l(()=>n[9]||(n[9]=[e("code",null,"StaticHandlerOptions",-1)])),_:1})]),n[15]||(n[15]=e("p",null,"Options for the static handler.",-1)),n[16]||(n[16]=e("h2",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns"},[e("span",null,"Returns")])],-1)),e("p",null,[a(t,{to:"/doc/server/type-aliases/Middleware.html"},{default:l(()=>n[10]||(n[10]=[e("code",null,"Middleware",-1)])),_:1})]),n[17]||(n[17]=i(`<p>The middleware function.</p><p>The middleware resolves the requested URL to a file path within the specified root directory. If the file exists, it reads the file content and sends it in the response. If the file does not exist, it does nothing.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMiddleware<span class="token punctuation">,</span> staticHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@faasjs/server&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token function">useMiddleware</span><span class="token punctuation">(</span><span class="token function">staticHandler</span><span class="token punctuation">(</span><span class="token punctuation">{</span> root<span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">&#39;/public&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const k=r(u,[["render",c]]),v=JSON.parse('{"path":"/doc/server/functions/staticHandler.html","title":"Function: staticHandler()","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{},"filePathRelative":"doc/server/functions/staticHandler.md"}');export{k as comp,v as data};
