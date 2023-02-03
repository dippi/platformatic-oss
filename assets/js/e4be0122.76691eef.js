"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[95136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Platformatic DB Programmatic API",c={unversionedId:"reference/db/programmatic",id:"version-0.14.0/reference/db/programmatic",title:"Platformatic DB Programmatic API",description:"In many cases it's useful to start Platformatic DB using an API instead of",source:"@site/versioned_docs/version-0.14.0/reference/db/programmatic.md",sourceDirName:"reference/db",slug:"/reference/db/programmatic",permalink:"/docs/reference/db/programmatic",draft:!1,tags:[],version:"0.14.0",frontMatter:{}},s={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platformatic-db-programmatic-api"},"Platformatic DB Programmatic API"),(0,a.kt)("p",null,"In many cases it's useful to start Platformatic DB using an API instead of\ncommand line, e.g. in tests we want to start and stop our server."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"buildServer")," function allows that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst db = await buildServer('path/to/platformatic.db.json')\n\nawait db.listen()\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait db.stop()\n")),(0,a.kt)("p",null,"It is also possible to customize the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst db = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  },\n  core: {\n    // Use an in-memory database for testing purposes\n    connectionString: 'sqlite://:memory:'\n  },\n  dashboard: true,\n  authorization: {\n    adminSecret: 'secret'\n  }\n})\n\nawait db.listen()\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait db.stop()\n")),(0,a.kt)("p",null,"For more details on how this is implemented, read ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/service/programmatic"},"Platformatic Service Programmatic API"),"."))}m.isMDXComponent=!0}}]);