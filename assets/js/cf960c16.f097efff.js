"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[34898],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?t.createElement(d,s(s({ref:r},l),{},{components:n})):t.createElement(d,s({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62988:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const a={},s="Programmatic Rules",i={unversionedId:"reference/db/authorization/programmatic-rules",id:"version-0.7.0/reference/db/authorization/programmatic-rules",title:"Programmatic Rules",description:"If it's necessary to have more control over the authorizations, it's possible to specify the rules programmatically, e.g.:",source:"@site/versioned_docs/version-0.7.0/reference/db/authorization/programmatic-rules.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/programmatic-rules",permalink:"/docs/0.7.0/reference/db/authorization/programmatic-rules",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to Authentication & Authorization",permalink:"/docs/0.7.0/reference/db/authorization/introduction"},next:{title:"Plugin",permalink:"/docs/0.7.0/reference/db/plugin"}},c={},u=[],l={toc:u};function p(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"programmatic-rules"},"Programmatic Rules"),(0,o.kt)("p",null,"If it's necessary to have more control over the authorizations, it's possible to specify the rules programmatically, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n  app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      async find ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      defaults: {\n        userId: async function ({ user, ctx, input }) {\n          match(user, {\n            'X-PLATFORMATIC-USER-ID': generated.shift(),\n            'X-PLATFORMATIC-ROLE': 'user'\n          })\n          return user['X-PLATFORMATIC-USER-ID']\n        }\n\n      },\n      async save ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      }\n    }]\n  })\n\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," role can delete all the posts edited before yesterday:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      find: true,\n      save: true,\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          editedAt: {\n            lt: yesterday\n          }\n        }\n      },\n      defaults: {\n        userId: 'X-PLATFORMATIC-USER-ID'\n      }\n    }]\n  })\n")))}p.isMDXComponent=!0}}]);