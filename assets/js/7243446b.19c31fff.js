(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(222)),i={title:"Jobs"},c={unversionedId:"optional-components/jobs",id:"optional-components/jobs",isDocsHomePage:!1,title:"Jobs",description:"* Definition",source:"@site/docs/optional-components/jobs.md",slug:"/optional-components/jobs",permalink:"/docs/next/optional-components/jobs",editUrl:"https://github.com/apiato/documentation/docs/optional-components/jobs.md",version:"current",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618014201,formattedLastUpdatedAt:"4/10/2021",sidebar:"docs",previous:{title:"Commands",permalink:"/docs/next/optional-components/commands"},next:{title:"Languages",permalink:"/docs/next/optional-components/languages"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]},{value:"Execute Jobs Execution",id:"execute-jobs-execution",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#execute-jobs-execution"},"Execute Jobs Execution"))),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Jobs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"are simple classes that can do one thing or multiple related things. "),Object(o.b)("li",{parentName:"ul"},"Job is a name given to a class that is usually created to be queued (it's execution is usually deferred for later, after the execution of previous Jobs are completed)."),Object(o.b)("li",{parentName:"ul"},"Jobs can be scheduled to be executed later by a queuing mechanism (queue system like beanstalkd)."),Object(o.b)("li",{parentName:"ul"},"When a Job class is dispatched, it performs its specific job and dies."),Object(o.b)("li",{parentName:"ul"},"Laravel's queue worker will process every Job as it's pushed onto the queue.")),Object(o.b)("p",null,"More info ",Object(o.b)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"here"),"."),Object(o.b)("h3",{id:"principles"},"Principles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A Container MAY have more than one Job.")),Object(o.b)("h3",{id:"rules"},"Rules"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All Jobs MUST extend from ",Object(o.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Jobs\\Job"),".")),Object(o.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Jobs\n                - DoSomethingJob.php\n                - DoSomethingElseJob.php\n")),Object(o.b)("h3",{id:"code-samples"},"Code Samples"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CreateAndValidateAddress with third party ",Object(o.b)("inlineCode",{parentName:"strong"},"Job"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Shipment\\Jobs;\n\nuse App\\Port\\Job\\Abstracts\\Job;\n\nclass CreateAndValidateAddressJob extends Job\n{\n    private $recipients;\n\n    public function __construct(array $recipients)\n    {\n        $this->recipients = $recipients;\n    }\n\n    public function handle()\n    {\n        foreach ($this->recipients as $recipient) {\n            // do whatever you like\n        }\n    }\n}\n")),Object(o.b)("p",null,"Check the parent Job class."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Usage from ",Object(o.b)("inlineCode",{parentName:"strong"},"Action"),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// using helper function\ndispatch(new CreateAndValidateAddressJob($recipients));\n\n// manually\nApp::make(\\Illuminate\\Contracts\\Bus\\Dispatcher\\Dispatcher::class)->dispatch(New StatusChangedJob($object));\n")),Object(o.b)("h3",{id:"execute-jobs-execution"},"Execute Jobs Execution"),Object(o.b)("p",null,"For running your Jobs checkout the ",Object(o.b)("a",{parentName:"p",href:".././miscellaneous/tasks-queuing"},"Tasks Queuing")," page."))}p.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);