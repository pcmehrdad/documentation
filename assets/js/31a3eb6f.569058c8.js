(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(222)),i={title:"Languages"},l={unversionedId:"optional-components/languages",id:"version-9.x/optional-components/languages",isDocsHomePage:!1,title:"Languages",description:"- Definition",source:"@site/versioned_docs/version-9.x/optional-components/languages.md",slug:"/optional-components/languages",permalink:"/docs/optional-components/languages",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/languages.md",version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",sidebar:"version-9.x/docs",previous:{title:"Jobs",permalink:"/docs/optional-components/jobs"},next:{title:"Events",permalink:"/docs/optional-components/events"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#usage"},"Usage"))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Languages are not real Components, they are just files that holds translations."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Languages CAN be placed inside the Containers. However, the default laravel ",Object(o.b)("inlineCode",{parentName:"p"},"resources/lang")," languages files are still loaded and can be used as well.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All Translations are namespaced as the lower case of the Container name."))),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Resources\n                - Languages\n                   - en\n                      - messages.php\n                      - users.php\n                   - ar\n                      - messages.php\n                      - users.php\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Nothing much to show here, here's how you use translated strings:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n__('messages.welcome');\n\necho __('messages.welcome');\n\ndd(__('messages.welcome'));\n")),Object(o.b)("p",null,"For more info about the localization checkout the ",Object(o.b)("a",{parentName:"p",href:".././features/localization"},"Localization")," page."))}u.isMDXComponent=!0},222:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);