"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[35398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},s="Schema support",i={unversionedId:"reference/db/schema-support",id:"version-0.8.0/reference/db/schema-support",title:"Schema support",description:"It's possible to specify the schemas where the tables are located (if the database supports schemas).",source:"@site/versioned_docs/version-0.8.0/reference/db/schema-support.md",sourceDirName:"reference/db",slug:"/reference/db/schema-support",permalink:"/docs/0.8.0/reference/db/schema-support",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic DB Dashboard",permalink:"/docs/0.8.0/reference/db/dashboard"},next:{title:"Platformatic Service",permalink:"/docs/0.8.0/reference/service/introduction"}},c={},p=[],l={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schema-support"},"Schema support"),(0,a.kt)("p",null,"It's possible to specify the schemas where the tables are located (if the database supports schemas)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'\n_Example_\n\n```sql\nCREATE SCHEMA IF NOT EXISTS "test1";\nCREATE TABLE IF NOT EXISTS test1.movies (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n\nCREATE SCHEMA IF NOT EXISTS "test2";\nCREATE TABLE IF NOT EXISTS test2.users (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n')),(0,a.kt)("p",null,"Schemas must be specified in configuration. These are then automatically set in the postgres ",(0,a.kt)("inlineCode",{parentName:"p"},"search path")," for the connection (see ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/ddl-schemas.html#DDL-SCHEMAS-PATH"},"here")," for more info).\nNote that if we use schemas and migrations, we must specify the schema in the migrations table as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  ...\n  "core": {\n    "connectionString": "(...)",\n    "schema": [\n      "test1", "test2"\n    ],\n    "ignore": {\n      "versions": true\n    }\n  },\n  "migrations": {\n    "dir": "migrations",\n    "table": "test1.versions"\n  },\n\n  ...\n')),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If two tables with the same name are present in different schemas, an error is thrown.\nTables with the same name in different schema are not supported.")))}m.isMDXComponent=!0}}]);