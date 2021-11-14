"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5289],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5295:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={title:"Helpers"},p=void 0,c={unversionedId:"optional-components/helpers",id:"optional-components/helpers",isDocsHomePage:!1,title:"Helpers",description:"- Definition",source:"@site/docs/optional-components/helpers.md",sourceDirName:"optional-components",slug:"/optional-components/helpers",permalink:"/docs/next/optional-components/helpers",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/helpers.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618838814,formattedLastUpdatedAt:"4/19/2021",frontMatter:{title:"Helpers"},sidebar:"docs",previous:{title:"Configs",permalink:"/docs/next/optional-components/configs"},next:{title:"Commands",permalink:"/docs/next/optional-components/commands"}},u=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage"))),(0,o.kt)("h3",{id:"definition"},"Definition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Helpers are global PHP functions that you can call from anywhere in your application."),(0,o.kt)("li",{parentName:"ul"},"Helper files are simple PHP files that hold functions.")),(0,o.kt)("h3",{id:"principles"},"Principles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Helpers SHOULD be created inside the Containers. However, general Helpers CAN be created in the Ship layer."),(0,o.kt)("li",{parentName:"ul"},"You can create as many helper files as you need, per container."),(0,o.kt)("li",{parentName:"ul"},"You can implement as many helper functions as you need, per helper file."),(0,o.kt)("li",{parentName:"ul"},"All Helper files will be autoloaded by the framework.")),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Helpers CAN be placed inside the Containers in Helpers folder or on the Ship for the general Helpers.")),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Helpers\n          - helpers.php\n          - mix.php\n          - ...\n\n  - Ship\n    - Helpers\n      - helpers.php\n      - mix.php\n      - ...\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('add')) {\n    function add(int $firstNumber, int $secondNumber): int\n    {\n        return $firstNumber + $secondNumber;\n    }\n}\n")))}m.isMDXComponent=!0}}]);