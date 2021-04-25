(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(284)),o={title:"Events"},c={unversionedId:"optional-components/events",id:"optional-components/events",isDocsHomePage:!1,title:"Events",description:"- Definition",source:"@site/docs/optional-components/events.md",sourceDirName:"optional-components",slug:"/optional-components/events",permalink:"/docs/next/optional-components/events",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/events.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618739545,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Events"},sidebar:"docs",previous:{title:"Languages",permalink:"/docs/next/optional-components/languages"},next:{title:"Mails",permalink:"/docs/next/optional-components/mails"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Broadcasting",id:"broadcasting",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#usage"},"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#broadcasting"},"Broadcasting"))),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application."),Object(i.b)("li",{parentName:"ul"},"Events are classes that can be fired from anywhere in your application."),Object(i.b)("li",{parentName:"ul"},"An event class will usually be bound to one, or many Events Listeners Classes or has those Listeners registered to listen to it."),Object(i.b)("li",{parentName:"ul"},'"fire" is the term that is usually used to call an Event.')),Object(i.b)("h3",{id:"principles"},"Principles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended)."),Object(i.b)("li",{parentName:"ul"},"Events SHOULD be created inside the Containers. However, general Events CAN be created in the Ship layer.")),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Event classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events."),Object(i.b)("li",{parentName:"ul"},"All Events MUST extend from ",Object(i.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Events\\Event"),".")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Events\n          - SomethingHappenedEvent.php\n          - ...\n        - Listeners\n          - ListenToMusicListener.php\n          - ...\n\n  - Ship\n    - Events\n      - GlobalStateChanged.php\n      - SomethingBiiigHappenedEvent.php\n      - ...\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"In Laravel, you can create and register events in multiple way. Read ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel documentation")," to learn more about Events. "),Object(i.b)("p",null,"Your custom ",Object(i.b)("inlineCode",{parentName:"p"},"EventServiceProvider")," needs to be registered in the containers ",Object(i.b)("inlineCode",{parentName:"p"},"MainServiceProvider")," as well."),Object(i.b)("h2",{id:"broadcasting"},"Broadcasting"),Object(i.b)("p",null,"To define Broadcasting route go to ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Boardcasts/Routes.php"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"More info at ",Object(i.b)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel Docs"),"."))))}p.isMDXComponent=!0},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);