"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[2895],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),c=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||r;return a?i.createElement(m,p(p({ref:t},s),{},{components:a})):i.createElement(m,p({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<r;c++)p[c]=a[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:2},p="2. \u521b\u5efa AI \u63d2\u4ef6",l={unversionedId:"explore/tutorials/stream/aiplugin/java/create-ai-plugin",id:"explore/tutorials/stream/aiplugin/java/create-ai-plugin",title:"2. \u521b\u5efa AI \u63d2\u4ef6",description:"\u5728\u672c\u7ae0\u8282\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728\u4f7f\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0\u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1\u3002",source:"@site/docs/explore/tutorials/stream/aiplugin/java/create-ai-plugin.md",sourceDirName:"explore/tutorials/stream/aiplugin/java",slug:"/explore/tutorials/stream/aiplugin/java/create-ai-plugin",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/create-ai-plugin",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/aiplugin/java/create-ai-plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \u4ecb\u7ecd",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/intro"},next:{title:"3. \u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/build-ai-plugin-server"}},o={},c=[{value:"\u6dfb\u52a0 AI \u5e94\u7528",id:"\u6dfb\u52a0-ai-\u5e94\u7528",level:2},{value:"\u5728\u6280\u80fd\u63d2\u4ef6\u4e2d\u521b\u5efa\u63d2\u4ef6",id:"\u5728\u6280\u80fd\u63d2\u4ef6\u4e2d\u521b\u5efa\u63d2\u4ef6",level:2},{value:"\u521b\u5efa\u63d2\u4ef6\u52a8\u4f5c",id:"\u521b\u5efa\u63d2\u4ef6\u52a8\u4f5c",level:2},{value:"\u63d2\u4ef6\u521b\u5efa Open API",id:"\u63d2\u4ef6\u521b\u5efa-open-api",level:2},{value:"\u7f16\u8f91 Open API\u914d\u7f6e\u4fe1\u606f",id:"\u7f16\u8f91-open-api\u914d\u7f6e\u4fe1\u606f",level:2},{value:"\u5173\u8054 Open API",id:"\u5173\u8054-open-api",level:2},{value:"\u914d\u7f6e\u63d2\u4ef6\u8bf4\u660e",id:"\u914d\u7f6e\u63d2\u4ef6\u8bf4\u660e",level:2},{value:"\u5b8c\u6210\u5e76\u53d1\u5e03",id:"\u5b8c\u6210\u5e76\u53d1\u5e03",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2-\u521b\u5efa-ai-\u63d2\u4ef6"},"2. \u521b\u5efa AI \u63d2\u4ef6"),(0,n.kt)("p",null,"\u5728\u672c\u7ae0\u8282\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728\u4f7f\u7528\u9489\u9489\u5f00\u653e\u5e73\u53f0\u642d\u5efa AI \u63d2\u4ef6\u670d\u52a1\u3002"),(0,n.kt)("h2",{id:"\u6dfb\u52a0-ai-\u5e94\u7528"},"\u6dfb\u52a0 AI \u5e94\u7528"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(5255).Z,width:"2800",height:"1526"})),(0,n.kt)("h2",{id:"\u5728\u6280\u80fd\u63d2\u4ef6\u4e2d\u521b\u5efa\u63d2\u4ef6"},"\u5728\u6280\u80fd\u63d2\u4ef6\u4e2d\u521b\u5efa\u63d2\u4ef6"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(6450).Z,width:"1656",height:"695"})),(0,n.kt)("h2",{id:"\u521b\u5efa\u63d2\u4ef6\u52a8\u4f5c"},"\u521b\u5efa\u63d2\u4ef6\u52a8\u4f5c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(4861).Z,width:"2820",height:"1414"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u52a8\u4f5c\u540d\u79f0 : AI\u53cb\u597d\u7684\u52a8\u4f5c\u540d\u79f0\u3002\u6700\u591a 20 \u4e2a\u5b57\u7b26\u3002",(0,n.kt)("br",null),"\n\u52a8\u4f5c\u552f\u4e00\u6807\u8bc6Key : \u7528\u4e8e\u4e1a\u52a1\u8def\u7531\u3002",(0,n.kt)("br",null),"\n\u52a8\u4f5c\u63cf\u8ff0 : AI\u53cb\u597d\u7684\u52a8\u4f5c\u63cf\u8ff0\u3002\uff08\u901a\u8fc7\u5173\u952e\u5b57\uff09\u5e2e\u52a9\u5927\u6a21\u578b\u66f4\u597d\u7684\u7406\u89e3\u5e76\u5b9a\u4f4d\u52a8\u4f5c\u3002\u6700\u591a 500 \u4e2a\u5b57\u7b26\u3002",(0,n.kt)("br",null))),(0,n.kt)("h2",{id:"\u63d2\u4ef6\u521b\u5efa-open-api"},"\u63d2\u4ef6\u521b\u5efa Open API"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(279).Z,width:"2832",height:"1398"})),(0,n.kt)("h2",{id:"\u7f16\u8f91-open-api\u914d\u7f6e\u4fe1\u606f"},"\u7f16\u8f91 Open API\u914d\u7f6e\u4fe1\u606f"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(1787).Z,width:"2820",height:"1490"})),(0,n.kt)("h2",{id:"\u5173\u8054-open-api"},"\u5173\u8054 Open API"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(9743).Z,width:"2762",height:"1420"})),(0,n.kt)("h2",{id:"\u914d\u7f6e\u63d2\u4ef6\u8bf4\u660e"},"\u914d\u7f6e\u63d2\u4ef6\u8bf4\u660e"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(2219).Z,width:"1312",height:"686"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u7f16\u8f91\u5b8c\u6210\u540e\u70b9\u51fb\u4fdd\u5b58")),(0,n.kt)("h2",{id:"\u5b8c\u6210\u5e76\u53d1\u5e03"},"\u5b8c\u6210\u5e76\u53d1\u5e03"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:a(4291).Z,width:"3824",height:"1870"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u53d1\u5e03 : \u53d1\u5e03\u540e\u72b6\u6001\u4ece\u201d\u8349\u7a3f\u201c\u53d8\u4e3a\u201d\u5df2\u53d1\u5e03\u201c\uff0c\u5e76\u5728\u9b54\u6cd5\u68d2\u6280\u80fd\u4e2d\u53ef\u89c1\u3002",(0,n.kt)("br",null),"\n\u65b0\u5efa\u7248\u672c: \u5df2\u53d1\u5e03\u7684\u7248\u672c\u65e0\u6cd5\u7f16\u8f91\uff0c\u9700\u8981\u901a\u8fc7\u65b0\u5efa\u7248\u672c\u8fed\u4ee3\u529f\u80fd\u3002",(0,n.kt)("br",null))))}d.isMDXComponent=!0},9743:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/bind-graph-api-with-plugin-d2cab0e2be30583eb9eebc91ffc76d38.jpg"},5255:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-AI-app-ability-46b863cf5096da001f66a2f69ca9bbbc.jpg"},6450:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-ai-plugin-2756ee0e7abea3d4c8b39f1b3c347f0b.png"},1787:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-graph-api-8c959010f593b76e6abd41e9f9fc2c5f.jpg"},4861:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-plugin-action-192f3c93d172f51cebab09706762e2e2.jpg"},2219:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/plugin-introduce-22fb71dce9ab19abf396179c40946acc.png"},4291:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/publish-plugin-b61e6a451e8579c0b917d57c6bdbef44.jpg"},279:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/trigger-create-graph-api-fea6afad7fef69f1f3c18856334b3a79.jpg"}}]);