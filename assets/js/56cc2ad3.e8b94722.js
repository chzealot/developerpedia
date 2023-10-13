"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[4461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="1. \u4ecb\u7ecd",l={unversionedId:"explore/tutorials/stream/event/nodejs/intro",id:"explore/tutorials/stream/event/nodejs/intro",title:"1. \u4ecb\u7ecd",description:"\u672c\u6587\u4ee5\u53ca\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u6307\u5f15\uff0c\u4ecb\u7ecd\u5982\u4f55\u8ba2\u9605\u9489\u9489\u5e73\u53f0\u7684\u4e8b\u4ef6\u53d8\u66f4\u901a\u77e5\u3002",source:"@site/docs/explore/tutorials/stream/event/nodejs/intro.md",sourceDirName:"explore/tutorials/stream/event/nodejs",slug:"/explore/tutorials/stream/event/nodejs/intro",permalink:"/developerpedia/docs/explore/tutorials/stream/event/nodejs/intro",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/event/nodejs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node.js",permalink:"/developerpedia/docs/explore/tutorials/stream/event/nodejs"},next:{title:"2. \u521b\u5efa\u5e94\u7528",permalink:"/developerpedia/docs/explore/tutorials/stream/event/nodejs/create-app"}},p={},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,o.kt)("p",null,"\u672c\u6587\u4ee5\u53ca\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u6307\u5f15\uff0c\u4ecb\u7ecd\u5982\u4f55\u8ba2\u9605\u9489\u9489\u5e73\u53f0\u7684\u4e8b\u4ef6\u53d8\u66f4\u901a\u77e5\u3002"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u6559\u7a0b\uff0c\u4f60\u53ef\u4ee5\u5b66\u4f1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u9489\u9489\u5e94\u7528\uff0c\u914d\u7f6e Stream \u6a21\u5f0f\u7684\u4e8b\u4ef6\u8ba2\u9605"),(0,o.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u7684\u5904\u7406\u4ee3\u7801\uff0c\u63a5\u6536\u9489\u9489\u5e73\u53f0\u63a8\u9001\u7684\u4e8b\u4ef6\u63a8\u9001\u6d88\u606f")),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9489\u9489\u8d26\u53f7\uff0c\u83b7\u5f97\u5f00\u53d1\u8005\u6743\u9650\u3002\u5173\u4e8e\u5f00\u53d1\u8005\u6743\u9650\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"/docs/explore/portal/grant-admin"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u83b7\u5f97\u76f8\u5173\u64cd\u4f5c\u6307\u5357"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/npm"},"npm")," \u5f00\u53d1\u73af\u5883")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u4ee3\u7801\u5728 Node.js 18.12.1 \u7248\u672c\u4e2d\u901a\u8fc7\u4e86\u6d4b\u8bd5\u3002\u5728\u65e7\u7248\u672c\u4e2d\u901a\u5e38\u4e5f\u662f\u53ef\u4ee5\u5de5\u4f5c\u7684\uff0c\u4f46\u662f\u672a\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u63a8\u8350\u91c7\u7528\u6700\u65b0\u7a33\u5b9a\u7248\u672c\u3002")),(0,o.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/stream"},"\u5b98\u65b9\u6587\u6863\uff1a\u4e8b\u4ef6\u8ba2\u9605 - \u914d\u7f6e Stream \u63a8\u9001"))))}u.isMDXComponent=!0}}]);