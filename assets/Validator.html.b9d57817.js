import{_ as n,o as l,c,b as t,d,w as s,a,e,r as i}from"../app.5c5560f9.mjs";const r={},h=a('<h1 id="class-validator-tparams-tcookie-tsession" tabindex="-1"><a class="header-anchor" href="#class-validator-tparams-tcookie-tsession" aria-hidden="true">#</a> Class: Validator&lt;TParams, TCookie, TSession&gt;</h1><h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3>',5),_=e("constructor"),u=t("h3",{id:"properties",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),e(" Properties")],-1),f=e("before"),g=e("cookieConfig"),p=e("paramsConfig"),x=e("sessionConfig"),y=t("h3",{id:"methods",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),e(" Methods")],-1),m=e("valid"),b=e("validContent"),T=a('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new Validator</strong>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;(<code>config</code>)</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>TParams</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TCookie</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr><tr><td style="text-align:left;"><code>TSession</code></td><td style="text-align:left;">extends <code>Record</code>&lt;<code>string</code>, <code>string</code>&gt; = <code>any</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',6),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type")])],-1),C=t("td",{style:{"text-align":"left"}},[t("code",null,"config")],-1),k={style:{"text-align":"left"}},V=t("code",null,"ValidatorConfig",-1),P=e("<"),R=t("code",null,"TParams",-1),O=e(", "),N=t("code",null,"TCookie",-1),S=e(", "),B=t("code",null,"TSession",-1),L=e(">"),q=a('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h3><p>\u2022 <code>Optional</code> <strong>before</strong>: <code>BeforeOption</code>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;</p><hr><h3 id="cookieconfig" tabindex="-1"><a class="header-anchor" href="#cookieconfig" aria-hidden="true">#</a> cookieConfig</h3>',5),w=e("\u2022 "),K=t("code",null,"Optional",-1),M=e(),j=t("strong",null,"cookieConfig",-1),E=e(": "),z=t("code",null,"ValidatorOptions",-1),A=e("<"),D=t("code",null,"TCookie",-1),F=e(">"),G=t("hr",null,null,-1),H=t("h3",{id:"paramsconfig",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#paramsconfig","aria-hidden":"true"},"#"),e(" paramsConfig")],-1),I=e("\u2022 "),J=t("code",null,"Optional",-1),Q=e(),U=t("strong",null,"paramsConfig",-1),W=e(": "),X=t("code",null,"ValidatorOptions",-1),Y=e("<"),Z=t("code",null,"TParams",-1),$=e(">"),tt=t("hr",null,null,-1),et=t("h3",{id:"sessionconfig",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#sessionconfig","aria-hidden":"true"},"#"),e(" sessionConfig")],-1),ot=e("\u2022 "),dt=t("code",null,"Optional",-1),st=e(),at=t("strong",null,"sessionConfig",-1),nt=e(": "),lt=t("code",null,"ValidatorOptions",-1),ct=e("<"),it=t("code",null,"TSession",-1),rt=e(">"),ht=a('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="valid" tabindex="-1"><a class="header-anchor" href="#valid" aria-hidden="true">#</a> valid</h3><p>\u25B8 <strong>valid</strong>(<code>request</code>, <code>logger</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>request</code></td><td style="text-align:left;"><code>Request</code>&lt;<code>TParams</code>, <code>TCookie</code>, <code>TSession</code>&gt;</td></tr><tr><td style="text-align:left;"><code>logger</code></td><td style="text-align:left;"><code>Logger</code></td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="validcontent" tabindex="-1"><a class="header-anchor" href="#validcontent" aria-hidden="true">#</a> validContent</h3><p>\u25B8 <strong>validContent</strong>(<code>type</code>, <code>params</code>, <code>baseKey</code>, <code>config</code>, <code>logger</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',11),_t=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"Name"),t("th",{style:{"text-align":"left"}},"Type")])],-1),ut=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"type")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string")])],-1),ft=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"params")]),t("td",{style:{"text-align":"left"}},[t("code",null,"Object")])],-1),gt=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"baseKey")]),t("td",{style:{"text-align":"left"}},[t("code",null,"string")])],-1),pt=t("td",{style:{"text-align":"left"}},[t("code",null,"config")],-1),xt={style:{"text-align":"left"}},yt=t("code",null,"ValidatorOptions",-1),mt=e("<"),bt=t("code",null,"Record",-1),Tt=e("<"),vt=t("code",null,"string",-1),Ct=e(", "),kt=t("code",null,"any",-1),Vt=e(">>"),Pt=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("code",null,"logger")]),t("td",{style:{"text-align":"left"}},[t("code",null,"Logger")])],-1),Rt=t("h4",{id:"returns-1",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),e(" Returns")],-1),Ot=t("p",null,[t("code",null,"void")],-1);function Nt(St,Bt){const o=i("RouterLink");return l(),c("div",null,[h,t("ul",null,[t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#constructor"},{default:s(()=>[_]),_:1})])]),u,t("ul",null,[t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#before"},{default:s(()=>[f]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#cookieconfig"},{default:s(()=>[g]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#paramsconfig"},{default:s(()=>[p]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#sessionconfig"},{default:s(()=>[x]),_:1})])]),y,t("ul",null,[t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#valid"},{default:s(()=>[m]),_:1})]),t("li",null,[d(o,{to:"/doc/http/classes/Validator.html#validcontent"},{default:s(()=>[b]),_:1})])]),T,t("table",null,[v,t("tbody",null,[t("tr",null,[C,t("td",k,[d(o,{to:"/doc/http/#validatorconfig"},{default:s(()=>[V]),_:1}),P,R,O,N,S,B,L])])])]),q,t("p",null,[w,K,M,j,E,d(o,{to:"/doc/http/#validatoroptions"},{default:s(()=>[z]),_:1}),A,D,F]),G,H,t("p",null,[I,J,Q,U,W,d(o,{to:"/doc/http/#validatoroptions"},{default:s(()=>[X]),_:1}),Y,Z,$]),tt,et,t("p",null,[ot,dt,st,at,nt,d(o,{to:"/doc/http/#validatoroptions"},{default:s(()=>[lt]),_:1}),ct,it,rt]),ht,t("table",null,[_t,t("tbody",null,[ut,ft,gt,t("tr",null,[pt,t("td",xt,[d(o,{to:"/doc/http/#validatoroptions"},{default:s(()=>[yt]),_:1}),mt,bt,Tt,vt,Ct,kt,Vt])]),Pt])]),Rt,Ot])}const qt=n(r,[["render",Nt],["__file","Validator.html.vue"]]);export{qt as default};
