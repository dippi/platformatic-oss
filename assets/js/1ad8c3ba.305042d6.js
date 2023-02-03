"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[91522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Transactions",s={unversionedId:"reference/sql-mapper/entities/transactions",id:"version-0.9.2/reference/sql-mapper/entities/transactions",title:"Transactions",description:"Platformatic DB entites support transaction through the tx optional parameter.",source:"@site/versioned_docs/version-0.9.2/reference/sql-mapper/entities/transactions.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/transactions",permalink:"/docs/0.9.2/reference/sql-mapper/entities/transactions",draft:!1,tags:[],version:"0.9.2",frontMatter:{},sidebar:"docs",previous:{title:"Relations",permalink:"/docs/0.9.2/reference/sql-mapper/entities/relations"},next:{title:"Introduction to the sql-events module",permalink:"/docs/0.9.2/reference/sql-events/introduction"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"Platformatic DB entites support transaction through the ",(0,a.kt)("inlineCode",{parentName:"p"},"tx")," optional parameter.\nIf the ",(0,a.kt)("inlineCode",{parentName:"p"},"tx")," parameter is provided, the entity will join the transaction, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nconst { connect } = require('@platformatic/sql-mapper')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const { db, entities} = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n\n  const result = await db.tx(async tx => {\n    // these two operations will be executed in the same transaction\n   const authorResult = await entities.author.save({\n      fields: ['id', 'name'],\n      input: { name: 'test'},\n      tx\n    })\n    const res = await entities.page.save({\n      fields: ['title', 'authorId'],\n      input: { title: 'page title', authorId: authorResult.id },\n      tx\n    })\n    return res\n  })\n\n}\n")),(0,a.kt)("p",null,"Throwing an Error triggers a transaction rollback:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    try {\n      await db.tx(async tx => {\n        await entities.page.save({\n          input: { title: 'new page' },\n          fields: ['title'],\n          tx\n        })\n\n        // here we have `new page` \n        const findResult = await entities.page.find({ fields: ['title'], tx })\n        \n        // (...)\n\n        // We force the rollback\n        throw new Error('rollback')\n      })\n    } catch (e) {\n      // rollback\n    }\n    \n    // no 'new page' here...\n    const afterRollback = await entities.page.find({ fields: ['title'] })\n\n")))}u.isMDXComponent=!0}}]);