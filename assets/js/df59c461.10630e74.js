"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3209],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7064:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={title:"Search Query Parameter"},c=void 0,p={unversionedId:"core-features/search-query-parameter",id:"version-9.x/core-features/search-query-parameter",isDocsHomePage:!1,title:"Search Query Parameter",description:"Below we'll see how to set up a Search Query Parameter, on a Model:",source:"@site/versioned_docs/version-9.x/core-features/search-query-parameter.md",sourceDirName:"core-features",slug:"/core-features/search-query-parameter",permalink:"/docs/9.x/core-features/search-query-parameter",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/search-query-parameter.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Search Query Parameter"},sidebar:"version-9.x/docs",previous:{title:"Validation",permalink:"/docs/9.x/core-features/validation"},next:{title:"ETag",permalink:"/docs/9.x/core-features/etag"}},l=[],u={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Below we'll see how to set up a Search Query Parameter, on a Model:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Add searchable Fields on the Model Repository, ",(0,s.kt)("em",{parentName:"li"},"all the other steps are normal steps")," ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Data\\Repositories;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass UserRepository extends Repository implements UserRepositoryInterface\n{\n\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'id'    => '=',\n        'email' => '=',\n    ];\n\n}\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Create basic list and search Task")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Tasks;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Port\\Action\\Abstracts\\Action;\n\nclass ListUsersTask extends Action\n{\n    private $userRepository;\n\n    public function __construct(UserRepositoryInterface $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run($order = true)\n    {\n        return $this->userRepository->paginate();\n    }\n}\n     \n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Create basic Action to call that basic Task, and maybe other Tasks later in the future when needed")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\Actions;\n\nuse App\\Containers\\User\\Tasks\\ListUsersTask;\nuse App\\Port\\Action\\Abstracts\\Action;\n\nclass ListAndSearchUsersAction extends Action\n{\n\n    private $listUsersTask;\n\n    public function __construct(ListUsersTask $listUsersTask)\n    {\n        $this->listUsersTask = $listUsersTask;\n    }\n\n    public function run($order = true)\n    {\n        return $this->listUsersTask->run($order);\n    }\n} \n\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Use the Action from a Controller")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\n\npublic function listAllUsers()\n{\n    $users = Apiato::call('User@ListAndSearchUsersAction');\n\n    return $this->response->paginator($users, new UserTransformer());\n} \n\n")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Call it from anywhere as follows: ","[GET]"," ",(0,s.kt)("inlineCode",{parentName:"li"},"http://api.apiato.com/users?search=Mahmoud@apiato.com"))))}m.isMDXComponent=!0}}]);