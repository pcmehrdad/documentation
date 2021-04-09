(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(153)),l={title:"Languages"},i={unversionedId:"optional-components/languages",id:"optional-components/languages",isDocsHomePage:!1,title:"Languages",description:"- Definition",source:"@site/docs/optional-components/languages.md",slug:"/optional-components/languages",permalink:"/docs/optional-components/languages",editUrl:"https://github.com/moslem-deris/docs/edit/main/docs/optional-components/languages.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618012240,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Jobs",permalink:"/docs/optional-components/jobs"},next:{title:"Events",permalink:"/docs/optional-components/events"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#usage"},"Usage"))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Languages are not real Components, they are just files that holds translations."),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Languages CAN be placed inside the Containers. However, the default laravel ",Object(o.b)("inlineCode",{parentName:"p"},"resources/lang")," languages files are still loaded and can be used as well.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All Translations are namespaced as the lower case of the Container name."))),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Resources\n                - Languages\n                   - en\n                      - messages.php\n                      - users.php\n                   - ar\n                      - messages.php\n                      - users.php\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Nothing much to show here, here's how you use translated strings:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n__('messages.welcome');\n\necho __('messages.welcome');\n\ndd(__('messages.welcome'));\n")),Object(o.b)("p",null,"For more info about the localization checkout the ",Object(o.b)("a",{parentName:"p",href:".././features/localization"},"Localization")," page."))}u.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);