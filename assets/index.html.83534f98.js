import{_ as n,r as o,o as d,a as h,b as a,d as t,F as c,c as r,e}from"./app.28925b94.js";const i={},l=r('<h1 id="_1-\u5206\u949F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#_1-\u5206\u949F\u4E0A\u624B" aria-hidden="true">#</a> 1 \u5206\u949F\u4E0A\u624B</h1><p>\u901A\u8FC7\u672C\u6559\u7A0B\uFF0C\u4F60\u5C06\u5B66\u5230\uFF1A</p><ul><li>\u5982\u4F55\u642D\u5EFA\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF1F</li><li>FaasJS \u9879\u76EE\u7684\u57FA\u672C\u7ED3\u6784\u662F\u4EC0\u4E48\uFF1F</li></ul><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h2><p>FaasJS \u57FA\u4E8E Node.js \u6784\u5EFA\uFF0C\u56E0\u6B64\u9700\u8981\u672C\u5730\u73AF\u5883\u652F\u6301\u81F3\u5C11 Node.js 12.x\u3002</p><p>\u82E5\u4F7F\u7528\u7684\u662F OS X\uFF0C\u53EF\u4EE5\u4F7F\u7528 brew \u6765\u5B89\u88C5\uFF1A<code>brew install node</code>\u3002</p>',6),p=e("\u7531\u4E8E FaasJS \u57FA\u4E8E TypeScript\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u4F7F\u7528 "),f={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},_=e("Visual Studio Code"),u=e(" \u4F5C\u4E3A\u7F16\u8F91\u5668\u3002"),x=r(`<h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><p>\u4F60\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 npx \u4E00\u952E\u521B\u5EFA\u65B0\u9879\u76EE\uFF0C\u521D\u6B21\u521B\u5EFA\u53EF\u4EE5\u5148\u8DF3\u8FC7 Provider \u914D\u7F6E\uFF1A</p><pre><code>npx create-faas-app --example --noprovider
</code></pre><h2 id="\u542F\u52A8\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u9879\u76EE" aria-hidden="true">#</a> \u542F\u52A8\u9879\u76EE</h2><p>\u6267\u884C <code>npm exec faas server</code>\uFF0C\u7528\u6D4F\u89C8\u5668\u6253\u5F00 <code>http://localhost:3000/hello</code> \u5373\u53EF\u770B\u5230 hello.func.ts \u7684\u6267\u884C\u7ED3\u679C\u3002</p><h2 id="\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> \u6587\u4EF6\u7ED3\u6784</h2><h3 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h3><p>\u8FD9\u662F Node.js \u7684\u9879\u76EE\u914D\u7F6E\uFF0C\u4E3B\u8981\u5305\u542B\u4E86\u4F9D\u8D56\u9879\u3001EsLint \u914D\u7F6E\u548C Jest \u914D\u7F6E\u3002</p><h3 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h3><p>\u8FD9\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u4EC5\u4EC5\u4E3A <code>{}</code>\uFF0C\u56E0\u4E3A FaasJS \u672C\u8EAB\u5BF9 Typescript \u6CA1\u6709\u7279\u6B8A\u7684\u914D\u7F6E\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u5B9A\u5236\u5316\u914D\u7F6E\u3002</p><h3 id="faas-yaml" tabindex="-1"><a class="header-anchor" href="#faas-yaml" aria-hidden="true">#</a> faas.yaml</h3><p>\u8FD9\u662F FaasJS \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BB0\u5F55\u4E86\u4E91\u670D\u52A1\u5546\u7684\u914D\u7F6E\u9879\u548C\u63D2\u4EF6\u7684\u914D\u7F6E\u9879\u3002</p><h3 id="func-ts" tabindex="-1"><a class="header-anchor" href="#func-ts" aria-hidden="true">#</a> *.func.ts</h3><p>\u8FD9\u662F\u4E91\u51FD\u6570\u6587\u4EF6\uFF0C\u5728 FaasJS \u4E2D\uFF0C\u6240\u6709\u4E91\u51FD\u6570\u6587\u4EF6\u90FD\u5FC5\u987B\u4EE5 <code>.func.ts</code> \u7ED3\u5C3E\u3002</p><h3 id="test-ts" tabindex="-1"><a class="header-anchor" href="#test-ts" aria-hidden="true">#</a> *.test.ts</h3><p>\u8FD9\u662F\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6\uFF0C\u5728 FaasJS \u4E2D\uFF0C\u6240\u6709\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6\u90FD\u5FC5\u987B\u4EE5 <code>.test.ts</code> \u7ED3\u5C3E\u3002</p><h2 id="\u5B8C\u6574\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u793A\u4F8B" aria-hidden="true">#</a> \u5B8C\u6574\u793A\u4F8B</h2>`,17),m=e("\u5728 "),b={href:"https://github.com/faasjs/faasjs/tree/main/examples/simple",target:"_blank",rel:"noopener noreferrer"},j=e("https://github.com/faasjs/faasjs/tree/main/examples/simple"),g=e(" \u53EF\u4EE5\u770B\u5230\u4E00\u4E2A\u5305\u542B\u4E86\u4EE3\u7801\u68C0\u67E5\u3001\u81EA\u52A8\u5316\u6D4B\u8BD5\u7684\u7B80\u5355\u4F8B\u5B50\u3002");function S(k,F){const s=o("ExternalLinkIcon");return d(),h(c,null,[l,a("p",null,[p,a("a",f,[_,t(s)]),u]),x,a("p",null,[m,a("a",b,[j,t(s)]),g])],64)}var v=n(i,[["render",S],["__file","index.html.vue"]]);export{v as default};
