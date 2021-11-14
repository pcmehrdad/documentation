"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8710],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Rate Limiting"},p=void 0,c={unversionedId:"core-features/rate-limiting",id:"version-10.x/core-features/rate-limiting",isDocsHomePage:!1,title:"Rate Limiting",description:"Apiato uses the default Laravel middleware for rate limiting (throttling).",source:"@site/versioned_docs/version-10.x/core-features/rate-limiting.md",sourceDirName:"core-features",slug:"/core-features/rate-limiting",permalink:"/docs/core-features/rate-limiting",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/rate-limiting.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Rate Limiting"},sidebar:"version-10.x/docs",previous:{title:"Hash ID",permalink:"/docs/core-features/hash-id"},next:{title:"Data Caching",permalink:"/docs/core-features/data-caching"}},u=[{value:"Enable/Disable Rate Limiting:",id:"enable-disable-rate-limiting",children:[]}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apiato uses the default Laravel middleware for rate limiting (throttling)."),(0,i.kt)("p",null,"All REST API requests are throttled to prevent abuse and ensure stability.\nThe exact number of calls that your application can make per day varies based on the type of request you are making."),(0,i.kt)("p",null,"The rate limit window is ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," minute per endpoint, with most individual calls allowing for ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," requests in each window."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In other words, each user is allowed to make ",(0,i.kt)("inlineCode",{parentName:"em"},"30")," calls per endpoint every ",(0,i.kt)("inlineCode",{parentName:"em"},"1")," minute. (For each unique access token).")),(0,i.kt)("p",null,"To update these values go to ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," config file, or to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ENV")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"'throttle' => [\n    'enabled' => env('API_RATE_LIMIT_ENABLED', true),\n    'attempts' => env('API_RATE_LIMIT_ATTEMPTS', '30'),\n    'expires' => env('API_RATE_LIMIT_EXPIRES', '1'),\n]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"API_RATE_LIMIT_ENABLED=true\nAPI_RATE_LIMIT_ATTEMPTS=30\nAPI_RATE_LIMIT_EXPIRES=1\n")),(0,i.kt)("p",null,"For how many hits you can preform on an endpoint, you can always check the header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"X-RateLimit-Limit \u219230\nX-RateLimit-Remaining \u219229\n")),(0,i.kt)("h2",{id:"enable-disable-rate-limiting"},"Enable/Disable Rate Limiting:"),(0,i.kt)("p",null,"The API rate limiting middleware is enabled and applied to all the Container Endpoints by default."),(0,i.kt)("p",null,"To disable it set ",(0,i.kt)("inlineCode",{parentName:"p"},"API_RATE_LIMIT_ENABLED")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."))}m.isMDXComponent=!0}}]);