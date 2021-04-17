(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),i=(t(0),t(219)),o={title:"Tasks"},s={unversionedId:"main-components/tasks",id:"main-components/tasks",isDocsHomePage:!1,title:"Tasks",description:"- Definition & Principles",source:"@site/docs/main-components/tasks.md",sourceDirName:"main-components",slug:"/main-components/tasks",permalink:"/docs/next/main-components/tasks",editUrl:"https://github.com/apiato/documentation/tree/master/docs/main-components/tasks.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618494215,formattedLastUpdatedAt:"4/15/2021",frontMatter:{title:"Tasks"},sidebar:"docs",previous:{title:"Actions",permalink:"/docs/next/main-components/actions"},next:{title:"Models",permalink:"/docs/next/main-components/models"}},c=[{value:"Definition &amp; Principles",id:"definition-principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(i.b)("h3",{id:"definition-principles"},"Definition & Principles"),Object(i.b)("p",null,"Read from the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Tasks"},Object(i.b)("strong",{parentName:"a"},"Porto SAP Documentation (#Tasks)")),"."),Object(i.b)("h3",{id:"rules"},"Rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All Tasks MUST extend from ",Object(i.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tasks\\Task"),".")),Object(i.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Tasks\n                - ConfirmUserEmailTask.php\n                - GenerateEmailConfirmationUrlTask.php\n                - SendConfirmationEmailTask.php\n                - ValidateConfirmationCodeTask.php\n                - SetUserEmailTask.php\n                - ...\n")),Object(i.b)("h3",{id:"code-sample"},"Code Sample"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Find User Task by ID:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\AppSection\\User\\Tasks;\n\nuse App\\Containers\\AppSection\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Ship\\Parents\\Tasks\\Task;\nuse Exception;\n\nclass FindUserByIdTask extends Task\n{\n    private $userRepository;\n\n    public function __construct(UserRepositoryInterface $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run($id)\n    {\n        try {\n            $user = $this->userRepository->find($id);\n        } catch (Exception $e) {\n            throw new UserNotFoundException();\n        }\n\n        return $user;\n    }\n\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tasks usage from an Action:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\Email\\Actions;\n\nuse App\\Containers\\Email\\Tasks\\ConfirmUserEmailTask;\nuse App\\Containers\\Email\\Tasks\\ValidateConfirmationCodeTask;\nuse App\\Containers\\AppSection\\User\\Tasks\\FindUserByIdTask;\nuse App\\Ship\\Parents\\Actions\\Action;\n\nclass ValidateUserEmailByConfirmationCodeAction extends Action\n{\n    private $validateConfirmationCodeTask;\n\n    private $findUserByIdTask;\n\n    private $confirmUserEmailTask;\n\n    public function __construct(\n        ValidateConfirmationCodeTask $validateConfirmationCodeTask,\n        FindUserByIdTask $findUserByIdTask,\n        ConfirmUserEmailTask $confirmUserEmailTask\n    ) {\n        $this->validateConfirmationCodeTask = $validateConfirmationCodeTask;\n        $this->findUserByIdTask = $findUserByIdTask;\n        $this->confirmUserEmailTask = $confirmUserEmailTask;\n    }\n\n    public function run($userId, $code)\n    {\n        $this->validateConfirmationCodeTask->run($userId, $code);\n        $user = $this->findUserByIdTask->run($userId);\n        $this->confirmUserEmailTask->run($user);\n        ...\n    }\n}\n\n")))}l.isMDXComponent=!0},219:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?a.a.createElement(f,s(s({ref:n},p),{},{components:t})):a.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);