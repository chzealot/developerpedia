"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[5706],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(u,i(i({ref:e},s),{},{components:n})):a.createElement(u,i({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},325:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1",o={unversionedId:"develop/permission/token/browser/get_app_only_token_browser",id:"develop/permission/token/browser/get_app_only_token_browser",title:"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1",description:"\u5e94\u7528\u4ee5\u5e94\u7528\u7684\u8eab\u4efd\u8bbf\u95ee\u8d44\u6e90\u65f6\uff08\u5e94\u7528\u8bbf\u95ee\uff09\uff0c\u53ef\u53c2\u8003\u672c\u6587\u6d41\u7a0b\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1\u3002\u5728\u9489\u9489\u5f00\u653e\u5e73\u53f0\u4e0a\uff0c\u5e94\u7528\u60f3\u8981\u83b7\u53d6\u5e94\u7528\u8bbf\u95ee\u7684\u6743\u9650\uff0c\u5fc5\u987b\u7ecf\u8fc7\u7ec4\u7ec7\u7ba1\u7406\u5458\u7684\u540c\u610f\u3002",source:"@site/docs/develop/permission/token/browser/get_app_only_token_browser.md",sourceDirName:"develop/permission/token/browser",slug:"/develop/permission/token/browser/get_app_only_token_browser",permalink:"/developerpedia/docs/develop/permission/token/browser/get_app_only_token_browser",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/permission/token/browser/get_app_only_token_browser.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1",permalink:"/developerpedia/docs/develop/permission/token/browser/get_user_app_token_browser"},next:{title:"\u9489\u9489\u7aef\u5185",permalink:"/developerpedia/docs/category/\u9489\u9489\u7aef\u5185"}},p={},d=[{value:"\u6b65\u9aa4\u4e00\uff1a\u5e94\u7528\u914d\u7f6e",id:"\u6b65\u9aa4\u4e00\u5e94\u7528\u914d\u7f6e",level:2},{value:"\u6b65\u9aa4\u4e8c\uff1a\u83b7\u53d6 Access Token",id:"\u6b65\u9aa4\u4e8c\u83b7\u53d6-access-token",level:2},{value:"\u5efa\u8bae\uff1a\u9996\u5148\u8ba9\u7528\u6237\u767b\u5f55\u5e94\u7528",id:"\u5efa\u8bae\u9996\u5148\u8ba9\u7528\u6237\u767b\u5f55\u5e94\u7528",level:3},{value:"\u6b65\u9aa4 2-1\uff1a\u83b7\u53d6\u7ba1\u7406\u5458\u6388\u6743",id:"\u6b65\u9aa4-2-1\u83b7\u53d6\u7ba1\u7406\u5458\u6388\u6743",level:3},{value:"\u6b65\u9aa4 2-2\uff1a\u7528 ClientId \u548c ClientSecret \u83b7\u53d6 Access Token",id:"\u6b65\u9aa4-2-2\u7528-clientid-\u548c-clientsecret-\u83b7\u53d6-access-token",level:3},{value:"\u6b65\u9aa4\u4e09\uff1a\u4f7f\u7528 Access Token \u8c03\u7528 OpenAPI",id:"\u6b65\u9aa4\u4e09\u4f7f\u7528-access-token-\u8c03\u7528-openapi",level:2},{value:"\u9519\u8bef\u7801",id:"\u9519\u8bef\u7801",level:2}],s={toc:d},c="wrapper";function m(t){let{components:e,...l}=t;return(0,r.kt)(c,(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1"},"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1"),(0,r.kt)("p",null,"\u5e94\u7528\u4ee5\u5e94\u7528\u7684\u8eab\u4efd\u8bbf\u95ee\u8d44\u6e90\u65f6\uff08",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/permission/intro/application_permission"},"\u5e94\u7528\u8bbf\u95ee"),"\uff09\uff0c\u53ef\u53c2\u8003\u672c\u6587\u6d41\u7a0b\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1\u3002\u5728\u9489\u9489\u5f00\u653e\u5e73\u53f0\u4e0a\uff0c\u5e94\u7528\u60f3\u8981\u83b7\u53d6\u5e94\u7528\u8bbf\u95ee\u7684\u6743\u9650\uff0c\u5fc5\u987b\u7ecf\u8fc7\u7ec4\u7ec7\u7ba1\u7406\u5458\u7684\u540c\u610f\u3002"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u4e2d\u63cf\u8ff0\u7684\u6d41\u7a0b\uff0c\u76ee\u524d\u53ea\u9002\u7528\u4e8e\u4f01\u4e1a\u4e09\u65b9\u5e94\u7528\u3002")),(0,r.kt)("h2",{id:"\u6b65\u9aa4\u4e00\u5e94\u7528\u914d\u7f6e"},"\u6b65\u9aa4\u4e00\uff1a\u5e94\u7528\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u767b\u5f55\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0"),(0,r.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5df2\u521b\u5efa\u7684\u5e94\u7528\uff0c\u5728\u201c\u51ed\u8bc1\u4e0e\u57fa\u7840\u4fe1\u606f\u201d\u91cc\u53ef\u4ee5\u770b\u5230\u5e94\u7528\u7684 ClientId \u548c ClientSecret \u3002\n",(0,r.kt)("img",{alt:"\u5e94\u7528\u7684ClientId\u548cClientSecret",src:n(1978).Z,width:"1431",height:"394"})),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201c\u5b89\u5168\u8bbe\u7f6e\u201d\u7684\u201c\u91cd\u5b9a\u5411URL\u201d\u4e2d\u914d\u7f6e\u91cd\u5b9a\u5411\u5730\u5740\u3002\u4e3a\u4fbf\u4e8e\u8c03\u8bd5\uff0c\u6d4b\u8bd5\u9636\u6bb5\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000")," \uff0c\u6d4b\u8bd5\u901a\u8fc7\u540e\u6362\u6210\u516c\u7f51\u53ef\u8bbf\u95ee\u5730\u5740\u5373\u53ef\u3002\n",(0,r.kt)("img",{alt:"\u914d\u7f6e\u56de\u8c03\u5730\u5740",src:n(5575).Z,width:"1451",height:"724"})),(0,r.kt)("li",{parentName:"ol"},"\u7ed9\u4f60\u7684\u5e94\u7528\u52fe\u9009\u9700\u8981\u8c03\u7528\u7684 OpenAPI \u5bf9\u5e94\u7684\u6743\u9650\u70b9\u3002\u6bd4\u5982\u52fe\u9009\u5b9c\u642d\u8868\u5355\u6570\u636e\u8bfb\u6743\u9650 ",(0,r.kt)("inlineCode",{parentName:"li"},"Yida.Form.Read")," \u3002\n",(0,r.kt)("img",{alt:"\u914d\u7f6e\u5f00\u53d1\u6001\u6743\u9650\u70b9",src:n(5170).Z,width:"1449",height:"614"}))),(0,r.kt)("admonition",{title:"Note ",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'\u76ee\u524d\uff0c\u6743\u9650\u7ba1\u7406\u4e2d\u7684\u201c\u4e2a\u4eba\u6743\u9650"\u7c7b\u76ee\u4e0b\u7684\u6743\u9650\u70b9\u662f',(0,r.kt)("strong",{parentName:"li"},"\u59d4\u6258\u6743\u9650\u70b9"),"\uff0c\u9700\u8981\u4f7f\u7528\u59d4\u6258\u6388\u6743\uff0c\u8bf7\u79fb\u6b65",(0,r.kt)("a",{parentName:"li",href:"/docs/learn/permission/token/user_app_token"},"\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7c7b\u76ee\u4e0b\u7684\u6743\u9650\u70b9\u5747\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u5e94\u7528\u6743\u9650\u70b9"),"\uff0c\u8bf7\u7ee7\u7eed\u53c2\u8003\u672c\u6587\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6743\u9650\u70b9\u7684\u7c7b\u522b\uff0c\u5373\u6743\u9650\u70b9\u662f\u59d4\u6258\u6743\u9650\u70b9\u8fd8\u662f\u5e94\u7528\u6743\u9650\u70b9\uff0c\u5c06\u5728\u5f00\u53d1\u8005\u540e\u53f0\u7684\u6743\u9650\u7ba1\u7406\u4e2d\u900f\u51fa\uff0c\u656c\u8bf7\u671f\u5f85\u3002"))),(0,r.kt)("h2",{id:"\u6b65\u9aa4\u4e8c\u83b7\u53d6-access-token"},"\u6b65\u9aa4\u4e8c\uff1a\u83b7\u53d6 Access Token"),(0,r.kt)("p",null,"\u9489\u9489\u5f00\u653e\u5e73\u53f0\u63d0\u4f9b\u7684\u5e94\u7528\u8bbf\u95ee\u6388\u6743\uff0c\u9075\u5faaOAuth2.0\u6807\u51c6\u7684\u51ed\u8bc1\u6a21\u5f0f ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.4"},"RFC 6749 Client Credentials Grant"),"\u3002\n",(0,r.kt)("img",{alt:"\u51ed\u8bc1\u6a21\u5f0f\u65f6\u5e8f\u56fe",src:n(73).Z,width:"1414",height:"944"})),(0,r.kt)("h3",{id:"\u5efa\u8bae\u9996\u5148\u8ba9\u7528\u6237\u767b\u5f55\u5e94\u7528"},"\u5efa\u8bae\uff1a\u9996\u5148\u8ba9\u7528\u6237\u767b\u5f55\u5e94\u7528"),(0,r.kt)("p",null,"\u5982\u679c\u8ba9\u7528\u6237\u5148\u767b\u5f55\u5e94\u7528\uff0c\u53ef\u4ee5\u63d0\u524d\u8ba9\u4f60\u7684\u5e94\u7528\u77e5\u9053\u7528\u6237\u767b\u5f55\u7684\u662f\u4ec0\u4e48\u7ec4\u7ec7\uff0c\u4ee5\u4fbf\u4e8e\u540e\u7eed\u83b7\u53d6\u8fd9\u4e2a\u7ec4\u7ec7\u7684\u6388\u6743\u3002\u800c\u4e14\u7528\u6237\u5148\u767b\u5f55\u65f6\uff0c\u53ef\u4ee5\u5148\u8ba9\u7528\u6237\u5b8c\u6210\u59d4\u6258\u6743\u9650\u7684\u6388\u6743\uff0c\u4fbf\u4e8e\u5c55\u793a\u7528\u6237\u5934\u50cf\u3001\u6635\u79f0\u7b49\u57fa\u672c\u4fe1\u606f\uff0c\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u57fa\u7840\u7684\u7528\u6237\u4f7f\u7528\u4f53\u9a8c\uff1b\u540e\u7eed\u5982\u679c\u7528\u5230\u5fc5\u987b\u7531\u7ba1\u7406\u5458\u6388\u6743\u7684\u529f\u80fd\u65f6\uff0c\u5e94\u7528\u518d\u5411\u7ba1\u7406\u5458\u83b7\u53d6\u6388\u6743\u3002\n\u201c\u9996\u5148\u8ba9\u7528\u6237\u767b\u5f55\u5e94\u7528\u201d\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u53ea\u662f\u4e00\u4e2a\u5efa\u8bae\uff0c\u4f46\u5b83\u53ef\u4ee5\u8ba9\u5e94\u7528\u6709\u66f4\u597d\u7684\u7528\u6237\u4f7f\u7528\u4f53\u9a8c\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4-2-1\u83b7\u53d6\u7ba1\u7406\u5458\u6388\u6743"},"\u6b65\u9aa4 2-1\uff1a\u83b7\u53d6\u7ba1\u7406\u5458\u6388\u6743"),(0,r.kt)("p",null,"\u6309\u7167\u4e0b\u65b9\u6559\u7a0b\u6784\u5efa\u6388\u6743\u94fe\u63a5\u3002"),(0,r.kt)("admonition",{title:"\u5f00\u53d1\u8005Tip",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u628a\u62fc\u63a5\u597d\u7684\u94fe\u63a5\u8d34\u5230\u6d4f\u89c8\u5668\u91cc\uff0c\u5373\u53ef\u9884\u89c8\u9489\u9489\u63d0\u4f9b\u7684\u6388\u6743\u670d\u52a1\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"https://account.dingtalk.com/{corpId}/adminConsent?\nclient_id={your_client_id}\n&redirect_uri={your_redirect_uri}\n&state={your_string}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"corpId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7ID\uff0c\u5e94\u7528\u5411\u6b64\u7ec4\u7ec7\u7684\u7ba1\u7406\u5458\u7533\u8bf7\u6743\u9650\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684 ClientID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9489\u9489\u5904\u7406\u5b8c\u8bf7\u6c42\u540e\u4f1a\u628a\u54cd\u5e94\u53d1\u9001\u5230\u6b64\u91cd\u5b9a\u5411\u5730\u5740\u3002\u6b64\u91cd\u5b9a\u5411\u5730\u5740\u5fc5\u987b\u6ce8\u518c\u5728\u5bf9\u5e94\u7684\u5e94\u7528\u91cc\u3002\u8bf7\u6c42\u4e2d\u7684\u5730\u5740\u5fc5\u987b\u662fURL\u7f16\u7801\u7684\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"state"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63a8\u8350\u4f7f\u7528"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u503c\u4f1a\u5728\u54cd\u5e94\u4e2d\u539f\u6837\u8fd4\u56de\uff0c\u5b83\u53ef\u4ee5\u662f\u60a8\u60f3\u8981\u7684\u4efb\u4f55\u5185\u5bb9\u7684\u5b57\u7b26\u4e32\u3002")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5458\u4f1a\u7ecf\u5386\u767b\u5f55\u548c\u6388\u6743\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5458\u70b9\u51fb\u201c\u5141\u8bb8\u201d\u540e\uff0c\u9489\u9489\u6388\u6743\u670d\u52a1\u5668\u4f1a\u628a\u4fe1\u606f\u56de\u8c03\u7ed9\u5e94\u7528\u914d\u7f6e\u7684\u91cd\u5b9a\u5411URL\u5730\u5740\u3002 "),(0,r.kt)("li",{parentName:"ul"},"\u6388\u6743\u9875\u4e0a\u5c55\u793a\u7684\u662f\u4f60\u5728\u5f00\u53d1\u8005\u540e\u53f0\u7ed9\u5e94\u7528\u52fe\u9009\u7684\u6240\u6709\u5e94\u7528\u6743\u9650\u70b9\uff0c\u8be6\u89c1\u6b65\u9aa4\u4e00\u7684\u7b2c4\u70b9\u3002 "),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6240\u6709\u7684\u6743\u9650\u70b9\u5747\u5df2\u88ab\u6388\uff0c\u5373\u5e94\u7528\u6ca1\u6709\u5f85\u6388\u6743\u7684\u6743\u9650\u70b9\uff0c\u6388\u6743\u670d\u52a1\u5668\u4f1a\u76f4\u63a5\u56de\u8c03\u6210\u529f\u3002")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6d4f\u89c8\u5668\u5185\u7ba1\u7406\u5458\u6388\u6743UI",src:n(6402).Z,width:"1330",height:"509"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="\u6210\u529f\u7684\u54cd\u5e94"',title:'"\u6210\u529f\u7684\u54cd\u5e94"'},"GET http://127.0.0.1:8000?corp_id=ding123&admin_consent=True&state={your_string}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"corp_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ec4\u7ec7ID\uff0c\u6b64\u7ec4\u7ec7\u540c\u610f\u6388\u4e88\u6743\u9650\u7ed9\u5f53\u524d\u5e94\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"admin_consent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6388\u6743\u6210\u529f\uff0c\u8fd4\u56deTrue\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"state"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u503c\u4f1a\u5728\u54cd\u5e94\u4e2d\u539f\u6837\u8fd4\u56de\uff0c\u5b83\u53ef\u4ee5\u662f\u60a8\u60f3\u8981\u7684\u4efb\u4f55\u5185\u5bb9\u7684\u5b57\u7b26\u4e32\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="\u5931\u8d25\u7684\u54cd\u5e94"',title:'"\u5931\u8d25\u7684\u54cd\u5e94"'},"GET http://127.0.0.1:8000?corp_id=ding123&admin_consent=True&state={your_string}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u4ee3\u7801\u5b57\u7b26\u4e32\uff0c\u53ef\u7528\u4e8e\u5bf9\u9519\u8bef\u7c7b\u578b\u8fdb\u884c\u5206\u7c7b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error_description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8be6\u7ec6\u7684\u9519\u8bef\u539f\u56e0\u63cf\u8ff0\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u786e\u5b9a\u9519\u8bef\u7684\u6839\u672c\u539f\u56e0\u3002")))),(0,r.kt)("h3",{id:"\u6b65\u9aa4-2-2\u7528-clientid-\u548c-clientsecret-\u83b7\u53d6-access-token"},"\u6b65\u9aa4 2-2\uff1a\u7528 ClientId \u548c ClientSecret \u83b7\u53d6 Access Token"),(0,r.kt)("p",null,"\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/isvapp/obtain-the-access_token-of-the-authorized-enterprise"},"\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1 Access Token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'POST /v1.0/oauth2/corpAccessToken HTTP/1.1\nHost:api.dingtalk.com\nContent-Type:application/json\n\n{\n  "suiteKey" : "suite123",\n  "suiteSecret" : "*******",\n  "authCorpId" : "ding123",\n  "suiteTicket" : "*******"\n}\n')),(0,r.kt)("h2",{id:"\u6b65\u9aa4\u4e09\u4f7f\u7528-access-token-\u8c03\u7528-openapi"},"\u6b65\u9aa4\u4e09\uff1a\u4f7f\u7528 Access Token \u8c03\u7528 OpenAPI"),(0,r.kt)("p",null,"\u606d\u559c\u4f60\u6210\u529f\u83b7\u5f97\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u8bf7\u6c42\u5bf9\u5e94\u7684 OpenAPI \u3002\u5982\u679c Refresh Token \u8fc7\u671f\uff0c\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\u3002"),(0,r.kt)("h2",{id:"\u9519\u8bef\u7801"},"\u9519\u8bef\u7801"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u7801"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9519\u8bef\u539f\u56e0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400009"),(0,r.kt)("td",{parentName:"tr",align:null},"corpId \u53c2\u6570\u9519\u8bef\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500101"),(0,r.kt)("td",{parentName:"tr",align:null},"client_id \u53c2\u6570\u9519\u8bef\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400010"),(0,r.kt)("td",{parentName:"tr",align:null},"redirect_uri \u53c2\u6570\u9519\u8bef\uff0c\u548c\u5f00\u53d1\u8005\u540e\u53f0\u914d\u7f6e\u7684\u91cd\u5b9a\u5411URL\u8981\u5339\u914d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500407"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237\u4e0d\u662f\u7ba1\u7406\u5458\uff0c\u8981\u8054\u7cfb\u7ba1\u7406\u5458\u8fdb\u884c\u6388\u6743\u7ba1\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u7528\u6237\u4e0d\u662f\u8be5\u7ec4\u7ec7\u7684\u6210\u5458\uff0c\u65e0\u6cd5\u8fdb\u884c\u6388\u6743\u7ba1\u7406\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"70003"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7ec4\u7ec7\u6ca1\u6709\u5f00\u901a\u8fc7\u6b64\u5e94\u7528\uff0c\u9700\u8981\u901a\u8fc7\u5e94\u7528\u5e02\u573a\u67e5\u627e\u5e76\u5f00\u901a\u5e94\u7528\u3002\u8be6\u89c1",(0,r.kt)("a",{parentName:"td",href:"/docs/learn/permission/manage/app-store-consent"},"\u5e94\u7528\u5e02\u573a\u5f00\u901a\u6388\u6743"),"\u3002")))))}m.isMDXComponent=!0},1978:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/client_id_secret-8b0e82c3f41722b13eed05412cc58242.png"},5170:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dev_scope_config-d297981536eb9ac5755ca251bd5b5d62.png"},5575:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/redirect_uri_config-2c8afa8e71c59697833c5ec57f7a34b1.png"},6402:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/client_credential_flow_browser_ui-652ea7d120b98269cc99a0b12cbbceca.png"},73:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/client_credential_flow_sequence-473c69974bca33614f7b6ce85292d191.png"}}]);