"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1249],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8663:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={title:"Container Installer"},s=void 0,p={unversionedId:"getting-started/container-installer",id:"getting-started/container-installer",isDocsHomePage:!1,title:"Container Installer",description:"* Downloading and Installing Containers",source:"@site/docs/getting-started/container-installer.md",sourceDirName:"getting-started",slug:"/getting-started/container-installer",permalink:"/docs/next/getting-started/container-installer",editUrl:"https://github.com/apiato/documentation/tree/master/docs/getting-started/container-installer.md",tags:[],version:"current",lastUpdatedBy:"Mahmoud Zalt",lastUpdatedAt:1619042088,formattedLastUpdatedAt:"4/21/2021",frontMatter:{title:"Container Installer"},sidebar:"docs",previous:{title:"Conventions",permalink:"/docs/next/getting-started/conventions-and-principles"},next:{title:"Code Generator",permalink:"/docs/next/core-features/code-generator"}},c=[{value:"Downloading and Installing Containers",id:"downloading-and-installing-containers",children:[]},{value:"Modifying Containers",id:"modifying-containers",children:[]},{value:"Developing a Container",id:"developing-a-container",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#downloading-and-installing-containers"},"Downloading and Installing Containers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#developing-a-container"},"Developing a Container"))))),(0,i.kt)("h3",{id:"downloading-and-installing-containers"},"Downloading and Installing Containers"),(0,i.kt)("p",null,"Apiato provides an easy-to-use solution for downloading, installing and continuously updating containers from 3rd party developers."),(0,i.kt)("p",null,"As an application developer, you simply need to include the respective ",(0,i.kt)("inlineCode",{parentName:"p"},"vendor/project")," to the",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json"),"."),(0,i.kt)("p",null,"For example, your ",(0,i.kt)("inlineCode",{parentName:"p"},"/composer.json")," file may look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "apiato/settings-container": "^2.0.6"\n  }\n}\n')),(0,i.kt)("p",null,"You just need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"composer update")," in order to install the respective packages. The package (e.g., the container)\n",(0,i.kt)("inlineCode",{parentName:"p"},"apiato/settings-container")," is then installed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/VendorSection")," folder. However, the developer of the package\nneeds to follow some basic guidelines listed below."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Do not")," modify content within a downloaded container, as it will be overwritten if you call ",(0,i.kt)("inlineCode",{parentName:"p"},"composer update"),"."))),(0,i.kt)("h3",{id:"modifying-containers"},"Modifying Containers"),(0,i.kt)("p",null,"To modify the code of this container usually you just need to copy the container to ",(0,i.kt)("inlineCode",{parentName:"p"},"AppSection"),"\n(or any of your custom sections) and update the namespaces. (See each container documentation for more details)"),(0,i.kt)("h3",{id:"developing-a-container"},"Developing a Container"),(0,i.kt)("p",null,"Developing a container that can be used by others is quite easy. Basically, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"extract")," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",(0,i.kt)("inlineCode",{parentName:"p"},"GitHub")," and then release\nit on ",(0,i.kt)("inlineCode",{parentName:"p"},"Packagist")," in order for it to be available via ",(0,i.kt)("inlineCode",{parentName:"p"},"Composer"),". Please see a respective tutorial how to submit a package\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"GitHub")," and release it via ",(0,i.kt)("inlineCode",{parentName:"p"},"Packagist"),"."),(0,i.kt)("p",null,"In particular, the only thing that needs to be done, when developing a container is to provide a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json"),"\nfile within the main folder of the container."),(0,i.kt)("p",null,"An example of such a ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json")," file is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here.\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container within the /app/Containers/VendorSection folder\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important Information:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You ",(0,i.kt)("strong",{parentName:"li"},"must")," add the respective ",(0,i.kt)("inlineCode",{parentName:"li"},"type : apiato-container")," to the composer file. This way, the custom installer is used\nthat allows installing/updating containers."),(0,i.kt)("li",{parentName:"ul"},"You ",(0,i.kt)("strong",{parentName:"li"},"must")," provide the key ",(0,i.kt)("inlineCode",{parentName:"li"},"extra.apiato.container.name"),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",(0,i.kt)("inlineCode",{parentName:"li"},"/app/ContainersVendorSection")," folder. In the shown example, the container would be installed to\n",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/VendorSection/Foo"),".")))}u.isMDXComponent=!0}}]);