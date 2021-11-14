"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8473],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7645:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],i={title:"Tests"},l=void 0,p={unversionedId:"optional-components/tests",id:"version-9.x/optional-components/tests",isDocsHomePage:!1,title:"Tests",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/tests.md",sourceDirName:"optional-components",slug:"/optional-components/tests",permalink:"/docs/9.x/optional-components/tests",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/tests.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"Tests"},sidebar:"version-9.x/docs",previous:{title:"Criterias",permalink:"/docs/9.x/optional-components/criterias"},next:{title:"Migrations",permalink:"/docs/9.x/optional-components/migrations"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Tests classes are created to test the Application classes are working as expected."),(0,a.kt)("p",null,"The two most essential Tests types for this architecture are the Unit Tests and the Functional Tests. However, Integration and Acceptance Tests can be used as well."),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Containers MAY be covered by all types of Tests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use Functional Tests to test Container Routes are doing what's expected from them.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use Unit Tests to test Container Actions and Tasks are doing what's expected from them."))),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Container Tests classes SHOULD extend from a Container Internal TestCase class ",(0,a.kt)("inlineCode",{parentName:"li"},"{container-name}/tests/TestCase.php"),". The container ",(0,a.kt)("strong",{parentName:"li"},"TestCase")," MUST extend main TestCase on Ship layer ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tests\\PhpUnit\\TestCase"),". ",(0,a.kt)("em",{parentName:"li"},"(Adding functions to the container TestCase allows sharing those functions between all Test classes of the Container)"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Tests\n                - TestCase.php // the container test case\n                - Unit\n                    - CreateUserTest.php\n                    - UpdateUserTest.php\n                    - ...\n            - UI\n                - API\n                    - Tests\n                        - Functional\n                            - LoginTest.php\n                            - LogoutTest.php\n                            - ...\n                - WEB\n                    - Tests\n                        - Functional\n                            - LoginTest.php\n                            - LogoutTest.php\n                            - ...\n                - CLI\n                    - Tests\n                        - Functional\n                            - BackupDataTest.php\n                            - ...\n")),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Tests\\Functional;\n\nuse App\\Containers\\{container-name}\\Tests\\TestCase;\n\n    class DeleteUserTest extends TestCase\n    {\n        protected $endpoint = '/users';\n\n        protected $permissions = [\n            'delete-users'\n        ];\n\n        public function testDeleteExistingUser_()\n        {\n            // get a testing user of type admin.\n            $user = $this->getLoggedInTestingAdmin();\n\n            // send the HTTP request\n            $response = $this->apiCall($this->endpoint, 'delete');\n\n            // assert response status is correct\n            $this->assertEquals($response->getStatusCode(), '202');\n\n            // ...\n        }\n\n    }\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See the ",(0,a.kt)("a",{parentName:"p",href:".././miscellaneous/tests-helpers"},"Tests Helpers")," Page")))}d.isMDXComponent=!0}}]);