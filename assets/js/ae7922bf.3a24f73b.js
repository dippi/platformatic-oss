"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[19593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a="Authorization",c={unversionedId:"reference/db/authorization/introduction",id:"version-0.13.1/reference/db/authorization/introduction",title:"Authorization",description:"Introduction",source:"@site/versioned_docs/version-0.13.1/reference/db/authorization/introduction.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/introduction",permalink:"/docs/0.13.1/reference/db/authorization/introduction",draft:!1,tags:[],version:"0.13.1",frontMatter:{},sidebar:"docs",previous:{title:"Migrations",permalink:"/docs/0.13.1/reference/db/migrations"},next:{title:"Strategies",permalink:"/docs/0.13.1/reference/db/authorization/strategies"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Bypass authorization in development",id:"bypass-authorization-in-development",level:2}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authorization"},"Authorization"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Authorization in Platformatic DB is ",(0,o.kt)("strong",{parentName:"p"},"role-based"),". User authentication and the\nassignment of roles must be handled by an external authentication service."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Authorization strategies and rules are configured via a Platformatic DB\nconfiguration file. See the Platformatic DB ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/db/configuration#authorization"},"Configuration"),"\ndocumentation for the supported settings."),(0,o.kt)("h2",{id:"bypass-authorization-in-development"},"Bypass authorization in development"),(0,o.kt)("p",null,"To make testing and developing easier, it's possible to bypass authorization checks\nif an ",(0,o.kt)("inlineCode",{parentName:"p"},"adminSecret")," is set. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/db/authorization/strategies#http-headers-development-only"},"HTTP headers (development only)")," documentation."))}p.isMDXComponent=!0}}]);