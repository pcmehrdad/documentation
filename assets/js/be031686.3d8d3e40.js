"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9929],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,f=d["".concat(m,".").concat(u)]||d[u]||p[u]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},235:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={title:"Commands"},m=void 0,s={unversionedId:"optional-components/commands",id:"optional-components/commands",isDocsHomePage:!1,title:"Commands",description:"* Definition",source:"@site/docs/optional-components/commands.md",sourceDirName:"optional-components",slug:"/optional-components/commands",permalink:"/docs/next/optional-components/commands",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/commands.md",tags:[],version:"current",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1633007293,formattedLastUpdatedAt:"9/30/2021",frontMatter:{title:"Commands"},sidebar:"docs",previous:{title:"Helpers",permalink:"/docs/next/optional-components/helpers"},next:{title:"Jobs",permalink:"/docs/next/optional-components/jobs"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Schedule Commands Execution",id:"Schedule-Commands-Execution",children:[]},{value:"Define Consoles Closure Commands",id:"define-consoles-closure-commands",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Schedule-Commands-Execution"},"Schedule Commands Execution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#define-consoles-closure-commands"},"Define Consoles Closure Commands"))),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commands are a Laravel artisan command. Laravel has its own default commands, and you can create your own as well."),(0,r.kt)("li",{parentName:"ul"},"Commands provide a way to interact with the Laravel app."),(0,r.kt)("li",{parentName:"ul"},'A Command can be scheduled by a Task scheduler, like Cron Job or by the Laravel built-in wrapper of the Cron Job "laravel scheduler".'),(0,r.kt)("li",{parentName:"ul"},"Commands could be Closure based or Classes."),(0,r.kt)("li",{parentName:"ul"},'"dispatch" is the term that is usually used to call a Command.')),(0,r.kt)("h3",{id:"principles"},"Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Commands.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Every Command SHOULD call an Action to perform its job, and should not contain any business logic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ship may contain Application general Commands."))),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Commands MUST extend from ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Commands\\ConsoleCommand"),".")),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - UI\n          - CLI\n            - Commands\n              - SayHelloCommand.php\n              - ...\n  - Ship\n    - Commands\n      - GeneralCommand.php\n      - ...\n")),(0,r.kt)("h3",{id:"code-samples"},"Code Samples"),(0,r.kt)("h4",{id:"a-simple-command"},"A Simple Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class HelloWorldCommand extends ConsoleCommand\n{\n    protected $signature = 'hello:world';\n    protected $description = 'Hello World!';\n\n    public function handle()\n    {\n        echo \"Hello World :)\\n\";\n    }\n}\n")),(0,r.kt)("h4",{id:"usage-from-cli-terminal"},"Usage from CLI (Terminal)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan hello:world\n")),(0,r.kt)("h3",{id:"Schedule-Commands-Execution"},"Schedule Commands Execution"),(0,r.kt)("p",null,"To Schedule the execution of a Command checkout the ",(0,r.kt)("a",{parentName:"p",href:"../miscellaneous/tasks-scheduling"},"Tasks Scheduling")," page."),(0,r.kt)("h3",{id:"define-consoles-closure-commands"},"Define Consoles Closure Commands"),(0,r.kt)("p",null,"To define Console closure commands go to ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Commands/closures.php"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"More info at ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/artisan#writing-commands"},"Laravel Docs"),"."))))}d.isMDXComponent=!0}}]);