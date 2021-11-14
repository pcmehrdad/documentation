"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[872],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8109:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Conventions and Principles"},s=void 0,p={unversionedId:"getting-started/conventions-and-principles",id:"version-9.x/getting-started/conventions-and-principles",isDocsHomePage:!1,title:"Conventions and Principles",description:"* HTTP Methods usage in RESTful API's",source:"@site/versioned_docs/version-9.x/getting-started/conventions-and-principles.md",sourceDirName:"getting-started",slug:"/getting-started/conventions-and-principles",permalink:"/docs/9.x/getting-started/conventions-and-principles",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/getting-started/conventions-and-principles.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"4/10/2021",frontMatter:{title:"Conventions and Principles"},sidebar:"version-9.x/docs",previous:{title:"Software Architectural Patterns",permalink:"/docs/9.x/getting-started/software-architectural-patterns"},next:{title:"Code Generator",permalink:"/docs/9.x/core-features/code-generator"}},u=[{value:"HTTP Methods usage in RESTful API&#39;s",id:"http-methods-usage-in-restful-apis",children:[]},{value:"Naming Conventions for Routes &amp; Actions",id:"naming-conventions-for-routes-and-actions",children:[]},{value:"General guidelines and principles for RESTful URLs",id:"general-guidelines-and-principles-for-restful-urls",children:[]},{value:"Good URL examples",id:"good-url-examples",children:[]},{value:"General principles for HTTP methods",id:"general-principles-for-http-methods",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#http-methods-usage-in-restful-apis"},"HTTP Methods usage in RESTful API's")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#naming-conventions-for-routes-and-actions"},"Naming Conventions for Routes & Actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#general-guidelines-and-principles-for-restful-urls"},"General guidelines and principles for RESTful URLs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#good-url-examples"},"Good URL examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#general-principles-for-http-methods"},"General principles for HTTP methods"))),(0,i.kt)("h3",{id:"http-methods-usage-in-restful-apis"},"HTTP Methods usage in RESTful API's"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET (SELECT): retrieve a specific resource from the server, or a listing of resources."),(0,i.kt)("li",{parentName:"ul"},"POST (CREATE): create a new resource on the server."),(0,i.kt)("li",{parentName:"ul"},"PUT (UPDATE): update a resource on the server, providing the entire resource."),(0,i.kt)("li",{parentName:"ul"},"PATCH (UPDATE): update a resource on the server, providing only changed attributes."),(0,i.kt)("li",{parentName:"ul"},"DELETE (DELETE): remove a resource from the server.")),(0,i.kt)("h3",{id:"naming-conventions-for-routes-and-actions"},"Naming Conventions for Routes & Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GetAllResource"),": to fetch all resources. You can apply ",(0,i.kt)("inlineCode",{parentName:"li"},"?search")," query parameter to filter data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FindResourceByID"),": to search for single resource by its unique identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CreateResource"),": to create a new resource."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UpdateResource"),": to update/edit existing resource."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DeleteResource"),": to delete a resource.")),(0,i.kt)("h3",{id:"general-guidelines-and-principles-for-restful-urls"},"General guidelines and principles for RESTful URLs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A URL identifies a resource."),(0,i.kt)("li",{parentName:"ul"},"URLs should include nouns, not verbs."),(0,i.kt)("li",{parentName:"ul"},"Use plural nouns only for consistency (no singular nouns)."),(0,i.kt)("li",{parentName:"ul"},"Use HTTP verbs (GET, POST, PUT, DELETE) to operate on the collections and elements."),(0,i.kt)("li",{parentName:"ul"},"You should not need to go deeper than resource/identifier/resource."),(0,i.kt)("li",{parentName:"ul"},"Put the version number at the base of your URL, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"http://apiato.test/v1/path/to/resource"),"."),(0,i.kt)("li",{parentName:"ul"},'If an input data changes the logic of the endpoint, it should be passed in the URL. If not can go in the header "like Auth Token".'),(0,i.kt)("li",{parentName:"ul"},"Don't use query parameters to alter state."),(0,i.kt)("li",{parentName:"ul"},"Don't use mixed-case paths if you can help it; lowercase is best."),(0,i.kt)("li",{parentName:"ul"},"Don't use implementation-specific extensions in your URIs (.php, .py, .pl, etc.)"),(0,i.kt)("li",{parentName:"ul"},"Limit your URI space as much as possible. And keep path segments short."),(0,i.kt)("li",{parentName:"ul"},"Don't put metadata in the body of a response that should be in a header")),(0,i.kt)("h3",{id:"good-url-examples"},"Good URL examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find a single Car by its unique identifier (ID):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars/123")))),(0,i.kt)("li",{parentName:"ul"},"Get all Cars:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars")))),(0,i.kt)("li",{parentName:"ul"},"Find/Search cars by one or more fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars?search=maker:mercedes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars?search=maker:mercedes;color:white")))),(0,i.kt)("li",{parentName:"ul"},"Order and Sort query result:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars?orderBy=created_at&sortedBy=desc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars?search=maker:mercedes&orderBy=created_at&sortedBy=desc")))),(0,i.kt)("li",{parentName:"ul"},"Specify optional fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars?filter=id;name;status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars/123?filter=id;name;status")))),(0,i.kt)("li",{parentName:"ul"},"Get all Drivers belonging to a Car:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars/123/drivers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars/123/drivers/123/addresses")))),(0,i.kt)("li",{parentName:"ul"},"Include Drivers objects relationship with the car response:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars/123?include=drivers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET http://www.api.apiato.test/v1/cars/123?include=drivers,owner")))),(0,i.kt)("li",{parentName:"ul"},"Add new Car:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST http://www.api.apiato.test/v1/cars")))),(0,i.kt)("li",{parentName:"ul"},"Add new Driver to a Car:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST http://www.api.apiato.test/v1/cars/123/drivers"))))),(0,i.kt)("h3",{id:"general-principles-for-http-methods"},"General principles for HTTP methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't ever use GET to alter state; to prevent Googlebot from corrupting your data. And use GET as much as possible."),(0,i.kt)("li",{parentName:"ul"},"Don't use PUT unless you are updating an entire resource. And unless you can also legitimately do a GET on the same URI."),(0,i.kt)("li",{parentName:"ul"},"Don't use POST to retrieve information that is long-lived or that might be reasonable to cache."),(0,i.kt)("li",{parentName:"ul"},"Don't perform an operation that is not idempotent with PUT."),(0,i.kt)("li",{parentName:"ul"},"Use GET for things like calculations, unless your input is large, in which case use POST."),(0,i.kt)("li",{parentName:"ul"},"Use POST in preference to PUT when in doubt."),(0,i.kt)("li",{parentName:"ul"},"Use POST whenever you have to do something that feels RPC-like."),(0,i.kt)("li",{parentName:"ul"},"Use PUT for classes of resources that are larger or hierarchical."),(0,i.kt)("li",{parentName:"ul"},"Use DELETE in preference to POST to remove resources.")))}d.isMDXComponent=!0}}]);