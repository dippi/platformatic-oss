"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[25029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Platformatic Service Programmatic API",c={unversionedId:"reference/service/programmatic",id:"reference/service/programmatic",title:"Platformatic Service Programmatic API",description:"In many cases it's useful to start Platformatic Service using an API instead of",source:"@site/docs/reference/service/programmatic.md",sourceDirName:"reference/service",slug:"/reference/service/programmatic",permalink:"/docs/next/reference/service/programmatic",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Creating a reusable application on top of Platformatic Service",id:"creating-a-reusable-application-on-top-of-platformatic-service",level:2}],p={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platformatic-service-programmatic-api"},"Platformatic Service Programmatic API"),(0,a.kt)("p",null,"In many cases it's useful to start Platformatic Service using an API instead of\ncommand line, e.g. in tests we want to start and stop our server."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"buildServer")," function allows that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/service'\n\nconst service = await buildServer('path/to/platformatic.service.json')\n\nawait service.listen()\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait service.stop()\n")),(0,a.kt)("p",null,"It is also possible to customize the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer } from '@platformatic/db'\n\nconst service = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  }\n})\n\nawait service.listen()\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait service.stop()\n")),(0,a.kt)("h2",{id:"creating-a-reusable-application-on-top-of-platformatic-service"},"Creating a reusable application on top of Platformatic Service"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/reference/db/introduction"},"Platformatic DB")," is built on top of Platformatic Serivce.\nIf you want to build a similar kind of tool, follow this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { buildServer, ConfigManager, platformaticService } from '@platformatic/service'\n\nclass MyConfigManager {\n  _transformConfig () {\n    // Edit this.current at will, it's the current configuration\n    console.log(this.current)\n  }\n}\n\nasync function myPlugin (app, opts) {\n  // app.platformatic.configManager contains an instance of the ConfigManager\n  console.log(app.platformatic.configManager.current)\n\n  await platformaticService(app, opts)\n}\n\n// break Fastify encapsulation\nmyPlugin[Symbol.for('skip-override')] = true\n\nconst service = await buildServer('path/to/config.json', myPlugin, MyConfigManager)\n\nawait service.listen()\n\nconst res = await fetch(server.url)\nconsole.log(await res.json())\n\n// do something\n\nawait service.stop()\n")))}f.isMDXComponent=!0}}]);