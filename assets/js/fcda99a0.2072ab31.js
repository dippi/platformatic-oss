"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[72723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),h=a,d=f["".concat(c,".").concat(h)]||f[h]||l[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i="Configure JWT with Auth0",s={unversionedId:"guides/jwt-auth0",id:"version-0.5.1/guides/jwt-auth0",title:"Configure JWT with Auth0",description:"Auth0 is a powerful authentication and authorization service provider that can be integrated with Platformatic DB through JSON Web Tokens (JWT) tokens.",source:"@site/versioned_docs/version-0.5.1/guides/jwt-auth0.md",sourceDirName:"guides",slug:"/guides/jwt-auth0",permalink:"/docs/0.5.1/guides/jwt-auth0",draft:!1,tags:[],version:"0.5.1",frontMatter:{},sidebar:"docs",previous:{title:"Extend REST API",permalink:"/docs/0.5.1/guides/add-custom-functionality/extend-rest"},next:{title:"Monitoring with Prometheus and Grafana",permalink:"/docs/0.5.1/guides/monitoring"}},c={},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-jwt-with-auth0"},"Configure JWT with Auth0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0")," is a powerful authentication and authorization service provider that can be integrated with Platformatic DB through ",(0,a.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Tokens")," (JWT) tokens.\nWhen a user is authenticated, Auth0 creates a JWT token with all necessary security informations and custom claims (like the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE"),", see ",(0,a.kt)("a",{parentName:"p",href:"../reference/db-authorization/introduction#user-metadata"},"User Metadata"),") and signs the token. "),(0,a.kt)("p",null,"Platformatic DB needs the correct public key to verify the JWT signature.\nThe fastest way is to leverage ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS"),", since Auth0 exposes a ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS")," endpoint for each tenant.\nGiven a Auth0 tenant's ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer")," URL, the (public) keys are accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"${issuer}/.well-known/jwks.json"),".\nFor instance, if ",(0,a.kt)("inlineCode",{parentName:"p"},"issuer")," is: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dev-xxx.us.auth0.com/"),", the public keys are accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dev-xxx.us.auth0.com/.well-known/jwks.json")),(0,a.kt)("p",null,"To configure Platformatic DB authorization to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS")," with Auth0, set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n...\n"authorization": {\n    "jwt": {\n      "jwks": {\n        "allowedDomains": [\n          "https://dev-xxx.us.auth0.com/"\n        ]\n      }\n    },\n  }\n...\n\n')),(0,a.kt)("p",null,"Note that specify ",(0,a.kt)("inlineCode",{parentName:"p"},"allowedDomains")," is critical to correctly restrict the JWT that MUST be issued from one of the allowed domains."))}l.isMDXComponent=!0}}]);