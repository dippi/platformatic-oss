"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[1201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="Plugin",l={unversionedId:"reference/service/plugin",id:"version-0.6.0/reference/service/plugin",title:"Plugin",description:"If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-0.6.0/reference/service/plugin.md",sourceDirName:"reference/service",slug:"/reference/service/plugin",permalink:"/docs/0.6.0/reference/service/plugin",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/0.6.0/reference/service/configuration"},next:{title:"Packages",permalink:"/docs/0.6.0/category/packages"}},p={},s=[{value:"Hot Reload",id:"hot-reload",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard ",(0,i.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin."),(0,i.kt)("p",null,"The config file will specify where the plugin file is located as the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugin": {\n    "path": "./plugin/index.js"\n  }\n}\n')),(0,i.kt)("p",null,"The path is relative to the config file path."),(0,i.kt)("p",null,"Since it uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcollina/fastify-sandbox"},"fastify-sandbox")," under the hood, all other options of that package may be specified under the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," property."),(0,i.kt)("p",null,"You should export an async ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," which receives a parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app")," (",(0,i.kt)("inlineCode",{parentName:"li"},"FastifyInstance"),") that is the main fastify ",(0,i.kt)("a",{parentName:"li",href:"https://www.fastify.io/docs/latest/Reference/Server/#instance"},"instance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"opts")," all the options specified in the config file after ",(0,i.kt)("inlineCode",{parentName:"li"},"path"))),(0,i.kt)("h2",{id:"hot-reload"},"Hot Reload"),(0,i.kt)("p",null,"Plugin file is being watched by ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options"},(0,i.kt)("inlineCode",{parentName:"a"},"fs.watch"))," function."),(0,i.kt)("p",null,"You don't need to reload Platformatic Service server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html#caveats"},"here"),").")))}u.isMDXComponent=!0}}]);