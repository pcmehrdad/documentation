"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9995:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Views"},c=void 0,s={unversionedId:"main-components/views",id:"main-components/views",isDocsHomePage:!1,title:"Views",description:"* Definition & Principles",source:"@site/docs/main-components/views.md",sourceDirName:"main-components",slug:"/main-components/views",permalink:"/docs/next/main-components/views",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/views.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1619281847,formattedLastUpdatedAt:"4/24/2021",frontMatter:{title:"Views"},sidebar:"docs",previous:{title:"Models",permalink:"/docs/next/main-components/models"},next:{title:"Transformers",permalink:"/docs/next/main-components/transformers"}},p=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-samples",children:[]},{value:"Namespaces",id:"namespaces",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#namespaces"},"Namespaces"))),(0,i.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Views"},(0,i.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Views)")),"."),(0,i.kt)("h3",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers.")),(0,i.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - WEB\n                        - Views\n                            - welcome.php\n                            - profile.php\n                            - ...\n")),(0,i.kt)("h3",{id:"code-samples"},"Code Sample"),(0,i.kt)("h4",{id:"welcome-page-view"},"Welcome page View"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n    <div class="container">\n        <div class="content">\n            <div class="title">Welcome</div>\n        </div>\n    </div>\n</body>\n</html>\n')),(0,i.kt)("h4",{id:"usage-from-controller"},"Usage From Controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('just-welcome');\n    }\n}\n")),(0,i.kt)("h2",{id:"namespaces"},"Namespaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, all Views are namespaced as the camelCase of its Section name + ",(0,i.kt)("inlineCode",{parentName:"li"},"@")," + camelCase of its Container name.")),(0,i.kt)("p",null,"For example, a view named ",(0,i.kt)("inlineCode",{parentName:"p"},"welcome-page")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"MySection")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"MyContainer")," can be accessed like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"view(mySection@myContainer::welcome-page)")),(0,i.kt)("p",null,"If you try to access it without the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"view('just-welcome')"),", it will not find your View."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"View files in ",(0,i.kt)("strong",{parentName:"p"},"Ship"),' folder are exception to this and will be namespaced with the word "',(0,i.kt)("strong",{parentName:"p"},"ship"),'" instead of section name, e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},"view(ship::welcome-page)")))))}d.isMDXComponent=!0}}]);