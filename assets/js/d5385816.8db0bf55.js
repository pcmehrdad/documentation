"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7693],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Useful Commands"},p=void 0,s={unversionedId:"core-features/useful-commands",id:"core-features/useful-commands",isDocsHomePage:!1,title:"Useful Commands",description:"- Available Commands",source:"@site/docs/core-features/useful-commands.md",sourceDirName:"core-features",slug:"/core-features/useful-commands",permalink:"/docs/next/core-features/useful-commands",editUrl:"https://github.com/apiato/documentation/tree/master/docs/core-features/useful-commands.md",tags:[],version:"current",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1632148794,formattedLastUpdatedAt:"9/20/2021",frontMatter:{title:"Useful Commands"},sidebar:"docs",previous:{title:"ETag",permalink:"/docs/next/core-features/etag"},next:{title:"Profiler",permalink:"/docs/next/core-features/profiler"}},c=[{value:"Available Commands",id:"available-commands",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#available-commands"},"Available Commands"))),(0,o.kt)("p",null,"Apiato is loaded with many useful commands to help you speed up the development process.\nYou can see list of all commands, by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan")," and look for ",(0,o.kt)("strong",{parentName:"p"},"Apiato")," section."),(0,o.kt)("h3",{id:"available-commands"},"Available Commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato"),"                           Display the current Apiato version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:apidoc"),"                    Generate API Documentations with apidoc from your routes Docblock. ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/additional-features/documentation"},"More details"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:create:admin "),"             Create a new User with the ADMIN role"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:generate:{component}"),"      Generate a specific component for the framework (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"Action"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Task"),", ...). For more details on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Code Generator")," ",(0,o.kt)("a",{parentName:"li",href:"../core-features/code-generator"},"click here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:list:actions"),"              List all Actions in the Application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:list:tasks"),"                List all Tasks in the Application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:permissions:toRole"),"        Give all system Permissions to a specific Role."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:seed-deploy"),"               Seeds your custom deployment data from ",(0,o.kt)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedDeploymentData.php"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:seed-test"),"                 Seeds your custom testing data from ",(0,o.kt)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedTestingData.php"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"php artisan apiato:welcome"),"                   Just saying welcome from a container.")))}u.isMDXComponent=!0}}]);