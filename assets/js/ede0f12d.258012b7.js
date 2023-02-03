"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[60770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Introduction to Authentication & Authorization",s={unversionedId:"reference/db/authorization/introduction",id:"version-0.5.1/reference/db/authorization/introduction",title:"Introduction to Authentication & Authorization",description:"Authorization in Platformatic DB is role-based (see Roles And User Information for further details).",source:"@site/versioned_docs/version-0.5.1/reference/db/authorization/introduction.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/introduction",permalink:"/docs/0.5.1/reference/db/authorization/introduction",draft:!1,tags:[],version:"0.5.1",frontMatter:{},sidebar:"docs",previous:{title:"Migrations",permalink:"/docs/0.5.1/reference/db/migrations"},next:{title:"Programmatic Rules",permalink:"/docs/0.5.1/reference/db/authorization/programmatic-rules"}},l={},p=[{value:"JWT",id:"jwt",level:2},{value:"JWKS",id:"jwks",level:3},{value:"Webhook",id:"webhook",level:2},{value:"JWT and Webhook",id:"jwt-and-webhook",level:2},{value:"HTTP Headers",id:"http-headers",level:2},{value:"User Impersonation",id:"user-impersonation",level:3},{value:"User Metadata",id:"user-metadata",level:2},{value:"Events and Subscriptions",id:"events-and-subscriptions",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-authentication--authorization"},"Introduction to Authentication & Authorization"),(0,r.kt)("p",null,"Authorization in Platformatic DB is ",(0,r.kt)("strong",{parentName:"p"},"role-based")," (see ",(0,r.kt)("a",{parentName:"p",href:"#roles-and-user-information"},"Roles And User Information")," for further details).\nA user is supposed to have a list of roles associated.\nPlatformatic delegates authentication and assignment of the ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," to an external ",(0,r.kt)("em",{parentName:"p"},"authentication service"),".\nThe job of the authentication service is to authenticate users and assign their roles correctly.\nSupported authentication service integrations are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JWT"),(0,r.kt)("li",{parentName:"ul"},"Webhook")),(0,r.kt)("p",null,"We refer to the user roles and other informations (like ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),") as ",(0,r.kt)("a",{parentName:"p",href:"#user-metadata"},"User Metadata"),"."),(0,r.kt)("p",null,"To make testing and developing easier, it's possible to bypass these checks if a ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," is set. See ",(0,r.kt)("a",{parentName:"p",href:"#http-headers"},"HTTP Headers"),"."),(0,r.kt)("h2",{id:"jwt"},"JWT"),(0,r.kt)("p",null,"JWT is built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-jwt"},"fastify-jwt"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Platformatic DB JWT integration",src:n(38027).Z,width:"513",height:"274"})),(0,r.kt)("p",null,"To configure it, the quickest way is to pass a shared ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "authorization": {\n    ...\n\n    "jwt": {\n      "secret": "<shared-secret>"\n    },\n\n    ...\n  }\n')),(0,r.kt)("p",null,"For more complex configurations, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-jwt#options"},"fastify-jwt options"),"."),(0,r.kt)("h3",{id:"jwks"},"JWKS"),(0,r.kt)("p",null,"Platformatic DB supports ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS"),". To configure it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  ...\n  "authorization": {\n    "jwt": {\n      "jwks": {\n        "allowedDomains": [\n          "https://ISSUER_DOMAIN"\n        ]\n      }\n    },\n  }\n  ...\n')),(0,r.kt)("p",null,"More ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nearform/get-jwks#options"},"get-jwks options")," can be specified."),(0,r.kt)("p",null,"When a JWT token is received, Platformatic DB gets the correct public key from ",(0,r.kt)("inlineCode",{parentName:"p"},"https:/ISSUER_DOMAIN/.well-known/jwks.json")," and uses it to verify the JWT signature. The token carries all the informations, like the ",(0,r.kt)("inlineCode",{parentName:"p"},"kid"),", which is the key id used to sign the token itself, so no other configurations are strictly necessary."),(0,r.kt)("p",null,"It's also possible to enable ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS")," with no options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  ...\n\n  "authorization": {\n    "jwt": {\n      "jwks": true\n      }\n    },\n  }\n  ...\n')),(0,r.kt)("p",null,"In this case, the JWKS URL is calculated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"iss")," (issuer) field of JWT, so every JWT token from an issuer that exposes a valid JWKS token will pass the validation. For that reason, ",(0,r.kt)("strong",{parentName:"p"},"this configuration should be used only for development"),", while in every other case the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedDomains")," should be specified."),(0,r.kt)("h2",{id:"webhook"},"Webhook"),(0,r.kt)("p",null,"Platformatic can use a webhook to authenticate the requests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Platformatic DB Webhook integration",src:n(29346).Z,width:"606",height:"324"})),(0,r.kt)("p",null,"In this case, the URL is configured on authorization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "authorization": {\n    ...\n\n    "webhook": {\n      "url": "<webhook url>"\n    },\n\n    ...\n  }\n')),(0,r.kt)("p",null,"When a request is received, Platformatic sends a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the webhook, replicating the same body and headers, except for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection"))),(0,r.kt)("p",null,"In the Webhook case, the HTTP response contains the roles/user information as HTTP headers."),(0,r.kt)("h2",{id:"jwt-and-webhook"},"JWT and Webhook"),(0,r.kt)("p",null,"It's possible to configure the server to first try to validate a JWT token and if that is not found,\nforward the request to the webhook."),(0,r.kt)("h2",{id:"http-headers"},"HTTP Headers"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note that using admin API key on HTTP headers is highly insecure and should be used only within protected networks.")))),(0,r.kt)("p",null,"If a request has ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ADMIN-SECRET")," HTTP header set with a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.5.1/reference/db/configuration#authorization"},"configuration reference"),"]) the role is set automatically as ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic-admin"),", unless a different role is set for user impersonation (which is disabled if JWT or Webhook are set, see ",(0,r.kt)("a",{parentName:"p",href:"#user-impersonation"},"below"),"). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Platformatic DB HTTP Headers",src:n(88051).Z,width:"472",height:"310"})),(0,r.kt)("p",null,"Also, the following rule is automatically added to every entity, allowing the user that presented the ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," to perform any operation on any entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "role": "platformatic-admin",\n      "find": false,\n      "delete": false,\n      "save": false\n    }\n')),(0,r.kt)("h3",{id:"user-impersonation"},"User Impersonation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When JWT or Webhook are set, user impersonation is not enabled, and the role is always set as ",(0,r.kt)("inlineCode",{parentName:"p"},"platfomatic-admin")," automatically.")),(0,r.kt)("p",null,"If a user presents a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ADMIN-SECRET"),", can also ",(0,r.kt)("strong",{parentName:"p"},"impersonate users")," with different roles.\nThe roles to impersonate can be specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," containing a comma separated list of roles."),(0,r.kt)("h2",{id:"user-metadata"},"User Metadata"),(0,r.kt)("p",null,"In all cases, the roles/user information is passed to Platformatic from the external ",(0,r.kt)("em",{parentName:"p"},"authentication service")," as a string (JWT claims or HTTP headers).\nWe can refer to these as ",(0,r.kt)("strong",{parentName:"p"},"user metadata"),". Platformatic saves the user metadata for each request in a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," object.\nRoles can be set using ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," as list of comma-separated roles (this key is ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.5.1/reference/db/configuration#role-and-anonymous-keys"},"configurable"),")."),(0,r.kt)("p",null,'Note that roles are just strings. Some "special roles" are reserved:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformatic-admin")," : this identifies a user who has admin powers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"anonymous"),": set automatically when no roles are associated")),(0,r.kt)("h2",{id:"events-and-subscriptions"},"Events and Subscriptions"),(0,r.kt)("p",null,"Platformatic DB supports GraphQL subscriptions and therefore db-authorization must protect them.\nThe check is performed based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," permissions, the only permissions that are supported are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find: false"),", the subscription for that role is disabled"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find: { checks: { [prop]: 'X-PLATFORMATIC-PROP' } }")," validates that the given prop is equal"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"find: { checks: { [prop]: { eq: 'X-PLATFORMATIC-PROP' } } }")," validates that the given prop is equal")),(0,r.kt)("p",null,"Conflicting rules across roles for different equality checks will not be supported."))}u.isMDXComponent=!0},88051:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/http-16e850f4929a4d5c21a629cbe609b67e.png"},38027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jwt-f72781533567349fb71fc37b9768e847.png"},29346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webhook-35d01c3e23ac75c26c9d519daa16cf1b.png"}}]);