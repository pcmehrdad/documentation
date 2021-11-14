"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8924],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Factories"},l=void 0,c={unversionedId:"optional-components/factories",id:"version-9.x/optional-components/factories",isDocsHomePage:!1,title:"Factories",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/factories.md",sourceDirName:"optional-components",slug:"/optional-components/factories",permalink:"/docs/9.x/optional-components/factories",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/factories.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"Factories"},sidebar:"version-9.x/docs",previous:{title:"Seeders",permalink:"/docs/9.x/optional-components/seeders"},next:{title:"Middlewares",permalink:"/docs/9.x/optional-components/middlewares"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Samples",id:"code-samples",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,o.kt)("h3",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Factories (are a short name for Models Factories)."),(0,o.kt)("p",null,"Factories are used to generate some fake data with the help of Faker to be used for testing purposes."),(0,o.kt)("p",null,"Factories are mainly used from Tests."),(0,o.kt)("h3",{id:"principles"},"Principles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Factories SHOULD be created in the Containers.")),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Factory is just a plain PHP script. ",(0,o.kt)("em",{parentName:"li"},"(No classes or namespaces required)"))),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n             - Data\n                - Factories\n                    - UserFactory.php\n                    - ...\n")),(0,o.kt)("h3",{id:"code-samples"},"Code Samples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A User Model Factory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// User\n$factory->define(App\\Containers\\User\\Models\\User::class, function (Faker\\Generator $faker) {\n    return [\n        'name'     => $faker->name,\n        'email'    => $faker->email,\n        'password' => bcrypt(str_random(10)),\n    ];\n});\n\n// ...\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage from ",(0,o.kt)("inlineCode",{parentName:"strong"},"Tests")," or anywhere else:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// creating 4 users\nfactory(User::class, 4)->create();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage with relationships:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$countries = Country::all();\n\n// creating 3 rewards and attaching country relation to them\n$rewards = factory(Reward::class, 3)->make()->each(function ($reward) use ($countries) {\n    $reward->save();\n    $reward->countries()->attach([$countries->random(1)->id, $countries->random(1)->id]);\n    $reward->save();\n});\n")),(0,o.kt)("p",null,"Use make instance of create and pass any data any way, then save after establishing the relations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage while overriding some values:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// creating single Offer and setting a user id\n$offer = factory(Offer::class)->make();\n$offer->user_id = $user->id;\n$offer->save();\n\n// ANOTHER EXAMPLE:\n\n// creating multiple Accounts\nfactory(Account::class, 3)->make()->each(function ($account) use ($user) {\n    $account->user_id = $user->id;\n    $account->save();\n});\n")),(0,o.kt)("p",null,"For more information about the Models Factories read ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/testing#model-factories"},"this"),"."))}d.isMDXComponent=!0}}]);