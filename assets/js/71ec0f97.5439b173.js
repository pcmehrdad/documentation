"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[979],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7689:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"Criterias"},p=void 0,l={unversionedId:"optional-components/criterias",id:"optional-components/criterias",isDocsHomePage:!1,title:"Criterias",description:"* Definition",source:"@site/docs/optional-components/criterias.md",sourceDirName:"optional-components",slug:"/optional-components/criterias",permalink:"/docs/next/optional-components/criterias",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/criterias.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618738326,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Criterias"},sidebar:"docs",previous:{title:"Repositories",permalink:"/docs/next/optional-components/repositories"},next:{title:"Tests",permalink:"/docs/next/optional-components/tests"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,i.kt)("h3",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Criterias are classes that hold and apply query condition when retrieving data from the database through a Repository."),(0,i.kt)("p",null,"Without using a Criteria class, you can add your query conditions to a Repository or to a Model as scope, but with Criterias, your query conditions can be shared across multiple Models and Repositories. It allows you to define the query condition once and use it anywhere in the App."),(0,i.kt)("h3",{id:"principles"},"Principles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Every Container MAY have its own Criterias. However, shared Criterias SHOULD be created in the Ship layer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Criteria MUST not contain any extra code, if it needs data, the data SHOULD be passed to it from the Actions or the Task. It SHOULD not call any ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," for data."))),(0,i.kt)("h3",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All Criterias MUST extend from ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Criterias\\Criteria"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Every Criteria SHOULD have an ",(0,i.kt)("inlineCode",{parentName:"p"},"apply()")," function."))),(0,i.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Data\n                    - Criterias\n                      - ColourRedCriteria.php\n                      - RaceCarsCriteria.php\n                      - ...\n    - Ship\n        - Criterias\n            - CreatedTodayCriteria.php\n            - NotNullCriteria.php\n            - ...\n")),(0,i.kt)("h3",{id:"code-samples"},"Code Samples"),(0,i.kt)("h4",{id:"a-shared-criteria"},"A Shared Criteria"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class OrderByCreationDateDescendingCriteria extends Criteria\n{\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->orderBy('created_at', 'desc');\n    }\n}\n")),(0,i.kt)("h4",{id:"usage-from-task"},"Usage from Task"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function run()\n{\n    $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria());\n    return  $this->userRepository->paginate();\n}\n")),(0,i.kt)("h4",{id:"criteria-accepting-data-input"},"Criteria Accepting Data Input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ThisUserCriteria extends Criteria\n{\n    private $userId;\n\n    public function __construct($userId)\n    {\n        $this->userId = $userId;\n    }\n\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->where('user_id', '=', $this->userId);\n    }\n}\n")),(0,i.kt)("h4",{id:"passing-data-from-task-to-criteria"},"Passing Data from Task to Criteria"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"public function run($user)\n{\n    $this->accountRepository->pushCriteria(new ThisUserCriteria($user->id));\n    return $this->accountRepository->paginate();\n}\n\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Further reading")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"More info at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#create-a-criteria"},"Laravel Docs"),"."))))}d.isMDXComponent=!0}}]);