"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2455],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3272:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={title:"Localization"},s=void 0,p={unversionedId:"additional-features/localization",id:"additional-features/localization",isDocsHomePage:!1,title:"Localization",description:"- Installation",source:"@site/docs/additional-features/localization.md",sourceDirName:"additional-features",slug:"/additional-features/localization",permalink:"/docs/next/additional-features/localization",editUrl:"https://github.com/apiato/documentation/tree/master/docs/additional-features/localization.md",tags:[],version:"current",lastUpdatedBy:"mohammad-alavi",lastUpdatedAt:1632148794,formattedLastUpdatedAt:"9/20/2021",frontMatter:{title:"Localization"},sidebar:"docs",previous:{title:"Social Authentication",permalink:"/docs/next/additional-features/social-authentication"},next:{title:"Payments",permalink:"/docs/next/additional-features/payments"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Creating new languages files",id:"create-new-languages-files",children:[]},{value:"Support new languages",id:"support-new-languages",children:[]},{value:"Select Request Language",id:"select-request-language",children:[]},{value:"Translating Strings",id:"translating-strings",children:[]},{value:"Disable Localization",id:"disable-localization",children:[]},{value:"Get Available Localizations",id:"get-available-localizations",children:[]},{value:"Tests",id:"tests",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-new-languages-files"},"Creating new languages files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support-new-languages"},"Support new languages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#select-request-language"},"Select Request Language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#translating-strings"},"Translating Strings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#disable-localization"},"Disable Localization")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-available-localizations"},"Get Available Localizations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tests"},"Tests"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/localization-container\n")),(0,o.kt)("h2",{id:"create-new-languages-files"},"Creating new languages files"),(0,o.kt)("p",null,"Languages file can be placed in any container, not only the Localization Container.",(0,o.kt)("br",{parentName:"p"}),"\n","Place language files inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Resources/Languages")," folder of your container. For example\n",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/SectionName/ContainerName/Resources/Languages"),". You can also place general language files inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/Resources/Languages")," folder of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ship"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Just create the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Resources/Languages")," folder if it does not exist.  "))),(0,o.kt)("p",null,"Example languages files are included in the Localization Container at ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Localization/Resources/Languages"),"."),(0,o.kt)("h2",{id:"support-new-languages"},"Support new languages"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Instructions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),(0,o.kt)("p",{parentName:"div"},"1- Copy the container from ",(0,o.kt)("inlineCode",{parentName:"p"},"Vendor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",(0,o.kt)("br",{parentName:"p"}),"\n","2- Fix the namespaces",(0,o.kt)("br",{parentName:"p"}),"\n","3- Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato/localization-container")," dependency from project root composer.json  "))),(0,o.kt)("p",null,"All supported languages must be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"supported_languages")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Localization/Configs/vendor-localization.php"),"\nto prevent users from requesting unsupported languages, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    'supported_languages' => [\n        'ar',\n        'en' => [\n            'en-GB',\n            'en-US',\n        ],\n        'es',\n        'fr',\n        'fa',\n    ],\n")),(0,o.kt)("h2",{id:"select-request-language"},"Select Request Language"),(0,o.kt)("p",null,"You can select the language of the response by adding the header ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," to the request. By default, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," is set to the language defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/app.php")," ",(0,o.kt)("inlineCode",{parentName:"p"},"locale"),"."),(0,o.kt)("p",null,"Please note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," only determines, that the client ",(0,o.kt)("em",{parentName:"p"},"would like")," to get the information in this specific\nlanguage. It is not given, that the API responds in this language!"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header is missing, the default locale will be applied."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please be sure that your client does not send an ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header automatically. Some REST clients\n(e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"POSTMAN"),") automatically add header-fields based on the operating-systems settings. So your ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," header\nmay be set automatically without you knowing!"))),(0,o.kt)("p",null,"The API will answer with the applied language in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Language")," header of the response."),(0,o.kt)("p",null,"If the requested language cannot be resolved (e.g. it is not defined) the API throws an ",(0,o.kt)("inlineCode",{parentName:"p"},"UnsupportedLanguageException")," to tell\nthe client about this."),(0,o.kt)("p",null,"The overall workflow of the Middleware is as follows:\n1) Extract the ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Language")," field from the request header. If none is set, use the default locale from the config file\n2) Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"['en-GB', 'en-US', 'en']")," (the regions before languages,\nas regions are more specific)\n3) Check, if the value from 1) is within the list from 2). If the value is within this list, set it as application language,\nif not throw an ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception"),"."),(0,o.kt)("h2",{id:"translating-strings"},"Translating Strings"),(0,o.kt)("p",null,"By default, all the Container translation files are namespaced as the camelCase of its Section name + ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," + camelCase of its Container name."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Translation files in ",(0,o.kt)("strong",{parentName:"p"},"Ship"),' folder are exception to this and will be namespaced with the word "',(0,o.kt)("strong",{parentName:"p"},"ship"),'" instead of section name, e.g. ',(0,o.kt)("inlineCode",{parentName:"p"},"__('ship::notifications.welcome')")))),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"If a translation file called ",(0,o.kt)("inlineCode",{parentName:"p"},"notifications")," is inside ",(0,o.kt)("inlineCode",{parentName:"p"},"MySection")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"MyContainer")," that contains translation for ",(0,o.kt)("inlineCode",{parentName:"p"},"welcome"),'\nlike "Welcome to our store :)". You can access this translation as follows ',(0,o.kt)("inlineCode",{parentName:"p"},"__('mySection@myContainer::notifications.welcome')"),". If\nyou remove the namespace (part before ",(0,o.kt)("inlineCode",{parentName:"p"},"::"),") and try to access it like this\n",(0,o.kt)("inlineCode",{parentName:"p"},"__('notifications.welcome')")," it will not find your translation and will print ",(0,o.kt)("inlineCode",{parentName:"p"},"notifications.welcome")," only."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you try to load a string for a language that is ",(0,o.kt)("strong",{parentName:"p"},"not available")," (e.g., there is no folder for this language), Apiato\nwill stick to the default one that is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.locale")," config file. This is also true, if the requested locale\nis present in the ",(0,o.kt)("inlineCode",{parentName:"p"},"supported_languages")," array from the configuration file."))),(0,o.kt)("h2",{id:"disable-localization"},"Disable Localization"),(0,o.kt)("p",null,"You will need to remove the Localization Middleware, by simply going to ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Localization/Providers/MainServiceProvider.php"),"\nand remove/comment the ",(0,o.kt)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"$serviceProviders")," property. Or you can just completely remove the container."),(0,o.kt)("h2",{id:"get-available-localizations"},"Get Available Localizations"),(0,o.kt)("p",null,"This container provides a convenient way to get all defined localizations. These localizations can be retrieved via ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /localizations"),'\nby default. Note that this route only outputs the "top level" locales, like ',(0,o.kt)("inlineCode",{parentName:"p"},"en")," from the example above. However, if\nspecific regions (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"en-US"),") are defined, these will show up in the result as well."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Transformer")," for the localizations not only provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"language")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"de"),"), but also outputs the name of the\nlanguage in this specific language (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"locale_name => Deutsch"),"). Furthermore, the language name is outputted in the\napplications default name (e.g., configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.locale"),"). This would result in ",(0,o.kt)("inlineCode",{parentName:"p"},"default_name => German"),"."),(0,o.kt)("p",null,"The same applies to the regions that are defined (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"de-DE"),"). Consequently, this results in ",(0,o.kt)("inlineCode",{parentName:"p"},"locale_name => Deutschland"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"default_name = Germany"),"."),(0,o.kt)("h2",{id:"tests"},"Tests"),(0,o.kt)("p",null,"To change the default language in your tests requests. You can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," language in the ",(0,o.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," file."))}m.isMDXComponent=!0}}]);