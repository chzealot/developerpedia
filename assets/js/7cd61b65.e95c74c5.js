"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7332],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(b,o(o({ref:t},s),{},{components:a})):r.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:n,o[1]=u;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),u=a(6550),i=a(1980),p=a(7392),s=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,p]=b({queryString:a,groupId:r}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),r=p[a].value;r!==u&&(c(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},3165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const u={sidebar_position:999},i="\u6280\u672f\u652f\u6301",p={unversionedId:"explore/support",id:"explore/support",title:"\u6280\u672f\u652f\u6301",description:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9014\u5f84\u83b7\u5f97\u6280\u672f\u652f\u6301",source:"@site/docs/explore/support.md",sourceDirName:"explore",slug:"/explore/support",permalink:"/developerpedia/docs/explore/support",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/support.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999},sidebar:"tutorialSidebar",previous:{title:"9. \u603b\u7ed3",permalink:"/developerpedia/docs/explore/tutorials/stream/aiplugin/java/summary"},next:{title:"\u5b66\u4e60",permalink:"/developerpedia/docs/category/\u5b66\u4e60"}},s={},c=[],d={toc:c},m="wrapper";function b(e){let{components:t,...u}=e;return(0,n.kt)(m,(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6280\u672f\u652f\u6301"},"\u6280\u672f\u652f\u6301"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9014\u5f84\u83b7\u5f97\u6280\u672f\u652f\u6301"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u7b54\u7591"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u9489\u9489\u5de5\u5355"),(0,n.kt)("li",{parentName:"ul"},"\u5171\u521b\u7fa4\u4e2d\u4ea4\u6d41"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4ea4 GitHub issue")),(0,n.kt)(l.Z,{queryString:"via",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"online",label:"\u5728\u7ebf\u7b54\u7591",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"https://open-dev.dingtalk.com"},"\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0"),"\u7684\u53f3\u4e0b\u89d2\u4e2d\uff0c\u70b9\u51fb\u5f00\u53d1\u5c0f\u52a9\u624b\u60ac\u6d6e\u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6d6e\u5c42\u4e2d\uff0c\u70b9\u51fb\u201c\u5728\u7ebf\u7b54\u7591\u201d\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ticket.png",src:a(4321).Z,width:"1072",height:"1056"}))),(0,n.kt)(o.Z,{value:"ticket",label:"\u63d0\u4ea4\u5de5\u5355",mdxType:"TabItem"},(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"https://open-dev.dingtalk.com"},"\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0"),"\u7684\u53f3\u4e0b\u89d2\u4e2d\uff0c\u70b9\u51fb\u5f00\u53d1\u5c0f\u52a9\u624b\u60ac\u6d6e\u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6d6e\u5c42\u4e2d\uff0c\u70b9\u51fb\u201c\u5de5\u5355\u4e2d\u5fc3\u201d\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ticket.png",src:a(4321).Z,width:"1072",height:"1056"}))),(0,n.kt)(o.Z,{value:"planet-group",label:"\u5f00\u53d1\u8005\u7b54\u7591\u7fa4\uff08\u5927\u7fa4\uff09",mdxType:"TabItem"},(0,n.kt)("p",null,"\u5728",(0,n.kt)("a",{parentName:"p",href:"https://open-dev.dingtalk.com"},"\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0"),"\u7684\u53f3\u4e0b\u89d2\u4e2d\uff0c\u70b9\u51fb\u5f00\u53d1\u5c0f\u52a9\u624b\u60ac\u6d6e\u6309\u94ae\uff0c\u5728\u5f39\u51fa\u7684\u6d6e\u5c42\u4e2d\uff0c\u70b9\u51fb\u201c\u5f00\u53d1\u8005\u7b54\u7591\u7fa4\u201d\u3002"),(0,n.kt)("p",null,"\u5f00\u53d1\u8005\u540e\u53f0\u8fdb\u5165\u7b54\u7591\u7fa4\u7684\u64cd\u4f5c\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ticket.png",src:a(4321).Z,width:"1072",height:"1056"}))),(0,n.kt)(o.Z,{value:"moon-group",label:"\u5404\u9886\u57df\u5171\u521b\u7fa4\uff08\u5c0f\u7fa4\uff09",mdxType:"TabItem"},(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u641c\u7d22\u7fa4\u53f7\uff08\u641c\u7d22\u4e2d\u9009\u62e9\u516c\u5f00\u7fa4\u7ec4\uff09\uff0c\u4e5f\u53ef\u4ee5\u70b9\u51fb\u4e8c\u7ef4\u7801\u540e\uff0c\u4f7f\u7528\u624b\u673a\u626b\u63cf\u4e8c\u7ef4\u7801\u52a0\u5165\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9886\u57df"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7fa4\u53f7"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7fa4\u4e8c\u7ef4\u7801"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7acb\u6625-Stream\u6a21\u5f0f\u5171\u521b\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u201c\u51bb\u7ed3\u5ba1\u6279\u72b6\u6001\u201d\uff0c\u8be6\u89c1\u672c\u6587\u540e\u9762\u7684\u201c\u5171\u521b\u7fa4\u7ba1\u7406\u89c4\u5219\u201d")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u96e8\u6c34-Stream\u6a21\u5f0f\u5171\u521b\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"28170036326"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:a(4759).Z},"\u70b9\u51fb\u94fe\u63a5\u67e5\u770b\u5165\u7fa4\u4e8c\u7ef4\u7801")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e92\u52a8\u5361\u7247\u5f00\u53d1\u8005\u4ea4\u6d41\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"32815007951"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:a(8325).Z},"\u70b9\u51fb\u94fe\u63a5\u67e5\u770b\u5165\u7fa4\u4e8c\u7ef4\u7801")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9489\u9489\u8fde\u63a5\u5668\u670d\u52a1\u5546\u8054\u8c0a\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"35259459"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:a(4670).Z},"\u70b9\u51fb\u94fe\u63a5\u67e5\u770b\u5165\u7fa4\u4e8c\u7ef4\u7801")),(0,n.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u52a0\u5165\u201c\u9489\u9489ISV\u6c9f\u901a\u7ec4\u201d\u7ec4\u7ec7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u667a\u80fd\u4eba\u4e8b\u5f00\u653e\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"23128045"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u7edf\u4e00\u6388\u6743\u5957\u4ef6\u4ea4\u6d41\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"27520024199"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:a(935).Z},"\u70b9\u51fb\u94fe\u63a5\u67e5\u770b\u5165\u7fa4\u4e8c\u7ef4\u7801")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/personalapp/overview-2"},"\u70b9\u6b64"),"\u4e86\u89e3\u9489\u9489\u7edf\u4e00\u6388\u6743\u5957\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mac \u9489\u9489\u53cd\u9988\u7fa4"),(0,n.kt)("td",{parentName:"tr",align:null},"21947662"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"\u9489\u9489 Mac \u7248\u672c\u4f7f\u7528\u95ee\u9898\u4ea4\u6d41")))),(0,n.kt)("p",null,"\u5907\u6ce8\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u51fa\u73b0\u7fa4\u4e8c\u7ef4\u7801\u8fc7\u671f\uff0c\u6b22\u8fce\u901a\u8fc7\u5176\u4ed6\u6280\u672f\u652f\u6301\u6e20\u9053\u53cd\u9988\u8fc7\u671f\u95ee\u9898\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u6b22\u8fce",(0,n.kt)("a",{parentName:"li",href:"/docs/contrib/overview"},"\u63d0\u4ea4\u8d21\u732e"),"\uff0c\u8865\u5145\u66f4\u591a\u76f8\u5173\u7684\u6280\u672f\u4ea4\u6d41\u7fa4\u7ec4\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u7533\u8bf7\u539f\u56e0\u4e2d\u5907\u6ce8\uff1a\u201c\u672c\u4eba\u6240\u5c5e\u516c\u53f8\u540d\u79f0-\u672c\u4eba\u5173\u5fc3\u7684\u4e1a\u52a1-\u672c\u4eba\u540d\u79f0\u201d\uff0c\u4f8b\u5982\uff1a\u7f51\u9489\u79d1\u6280-\u8003\u52e4\u6392\u73ed-\u5f20\u4e09")),(0,n.kt)("p",null,"\u5171\u521b\u7fa4\u7ba1\u7406\u89c4\u5219\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u53d7\u9650\u4e8e\u5355\u4e2a\u7fa4\u4eba\u6570\u4e0a\u9650\uff0c\u540c\u65f6\u8003\u8651\u7fa4\u6210\u5458\u8fc7\u591a\u5e26\u6765\u7684\u6d88\u606f\u8fc7\u8f7d\uff0c\u6bcf\u4e2a\u7fa4\u5c3d\u91cf\u63a7\u5236\u5728500\u4eba\u4ee5\u5185\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u9886\u57df\u7684\u7fa4\u4eba\u6570\u8d85\u8fc760%\u65f6\u5019\uff0c\u5219\u5efa\u7acb\u65b0\u7684\u7fa4\u5206\u6d41\uff0c\u907f\u514d\u7fa4\u6ee1\u4e4b\u540e\u65e0\u6cd5\u52a0\u5165\u5e26\u6765\u7684\u4f53\u9a8c\u95ee\u9898\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u9886\u57df\u7684\u7fa4\u4eba\u6570\u8d85\u8fc780%\u65f6\u5019\uff0c\u5219\u8fdb\u5165\u201c\u51bb\u7ed3\u5ba1\u6279\u201d\u72b6\u6001\uff0c\u505c\u6b62\u5ba1\u6279\u5165\u7fa4\uff0c\u9884\u7559 buffer \u7559\u4f5c\u5e94\u6025\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u65b0\u7684\u7fa4\u5206\u6d41\u7684\u8bdd\uff0c\u7f16\u53f7\u4e0d\u91c7\u7528\u6570\u5b57\uff0c\u800c\u662f\u4e8c\u5341\u56db\u8282\u6c14\uff0c\u4ece\u201c\u7acb\u6625\u201d\u5f00\u59cb\uff0c\u7136\u540e\u4f9d\u6b21\u662f\u201d\u96e8\u6c34\u201d\u3001\u201d\u60ca\u86f0\u201c\u7b49\uff1b"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/contrib/how-to"},"\u53c2\u4e0e\u8d21\u732e"),"\u7684\u793e\u533a\u5f00\u53d1\u8005\uff0c\u5982\u679c\u6709\u9700\u6c42\uff0c\u53ef\u4ee5\u51ed pull request \u94fe\u63a5\uff0c\u8054\u7cfb\u7fa4\u4e3b\u52a0\u5165\u5176\u4ed6\u5df2\u7ecf\u201c\u51bb\u7ed3\u5ba1\u6279\u201d\u7684\u7fa4\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u7fa4\u91cc\u65e0\u6cd5\u83b7\u5f97\u6240\u9700\u8981\u7684\u5e2e\u52a9\u7684\u8bdd\uff0c\u6216\u8005\u7fa4\u5185\u6d88\u606f\u8fc7\u591a\u88ab\u7fa4\u7ba1\u7406\u5458\u9057\u6f0f\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5728\u7fa4\u91cc\u52a0\u91d1\u559c\uff08\u9489\u9489\u5f00\u653e\u5e95\u5ea7\u8d1f\u8d23\u4eba\uff09\u597d\u53cb\uff0c\u5728\u5355\u804a\u91cc\u8054\u7cfb\u91d1\u559c\u83b7\u5f97\u5e2e\u52a9\uff1b"))),(0,n.kt)(o.Z,{value:"github-issue",label:"\u63d0\u4ea4 GitHub issue",mdxType:"TabItem"},(0,n.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u5728 GitHub \u4e2d\u5f00\u6e90\u7684\u9879\u76ee\uff0c\u53ef\u4ee5\u901a\u8fc7 GitHub issue \u63d0\u4ea4\u95ee\u9898\u53cd\u9988\u3002"))))}b.isMDXComponent=!0},8325:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/interactive-card-group-1a35b1ccb64685b30ffed1976fab28a6.png"},4670:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/ipaas-group-e2432df5b6b761b001070e0ebf624ea7.png"},935:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/permission-9096af37baa384c16a8b59dee24c05f2.png"},4759:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/stream-mode-group-88432c645626d5b9530978288b58c5ed.png"},4321:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ticket-44e21f2b357be79c6e1b317bbbd9b34d.jpg"}}]);