(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(8),i=(n(0),n(222)),r={title:"Frequently Asked Questions"},l={unversionedId:"general/faq",id:"general/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"* Do I have to use the Porto Architecture to benefit from Apiato",source:"@site/docs/general/faq.md",slug:"/general/faq",permalink:"/docs/next/general/faq",editUrl:"https://github.com/apiato/documentation/docs/general/faq.md",version:"current",lastUpdatedBy:"Mahmoud Zalt",lastUpdatedAt:1618139844,formattedLastUpdatedAt:"4/11/2021",sidebar:"docs",previous:{title:"Postman Environment",permalink:"/docs/next/miscellaneous/postman"},next:{title:"Upgrade Guide",permalink:"/docs/next/general/upgrade-guide"}},p=[{value:"Do I have to use the Porto Architecture to benefit from Apiato!?",id:"do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato",children:[]},{value:"How to use my custom domain?",id:"how-to-use-my-custom-domain",children:[]},{value:"Where to put my frontend code?",id:"where-to-put-my-frontend-code",children:[]},{value:"Where do I register Service Providers and Aliases?",id:"where-do-i-register-service-providers-and-aliases",children:[]},{value:"How to change the default API URL (Subdomain and Prefix)?",id:"how-to-change-the-default-api-url",children:[]},{value:"Where do I define my Composer dependencies?",id:"where-do-i-define-my-composer-dependencies",children:[]},{value:"How to enable Query Caching?",id:"how-to-enable-query-caching",children:[]},{value:"Can I give my Actions REST names?",id:"can-i-give-my-actions-rest-names",children:[]},{value:"How are Service Providers auto-loaded?",id:"how-are-service-providers-auto-loaded",children:[]},{value:"Why is the Laravel 5.5 Auto-Discovery feature not working?",id:"why-is-the-laravel-55-auto-discovery-feature-not-working",children:[]},{value:"How to create third-party Containers?",id:"how-to-create-third-party-containers",children:[]},{value:"What is the default Username for authentication?",id:"what-is-the-default-username-for-authentication",children:[]},{value:"I have a question, and I can&#39;t find answer!!",id:"other-questions",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato"},"Do I have to use the Porto Architecture to benefit from Apiato")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-use-my-custom-domain"},"How to use my custom domain?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#where-to-put-my-frontend-code"},"Where to put my frontend code?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#where-do-i-register-service-providers-and-aliases"},"Where do I register Service Providers and Aliases?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-change-the-default-api-url"},"How to change API URL?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#where-do-i-define-my-composer-dependencies"},"Where do I define my Composer dependencies?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-enable-query-caching"},"How to enable Query Caching?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#can-i-give-my-actions-rest-names"},"Can I give my Actions REST names?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-are-service-providers-auto-loaded"},"How are Service Providers auto-loaded?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#why-is-the-laravel-55-auto-discovery-feature-not-working"},"Why is the Laravel 5.5 Auto-Discovery feature not working?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-create-third-party-containers"},"How to create third-party Containers?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#what-is-the-default-username-for-authentication"},"What is the default Username for authentication?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#other-questions"},"I have a question and I can't find answer!!"))),Object(i.b)("h3",{id:"do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato"},"Do I have to use the Porto Architecture to benefit from Apiato!?"),Object(i.b)("p",null,"NO. You can still use the standard MVC (Controllers are still there) or any other architecture you prefer and you can\ncall the Apiato provided ",Object(i.b)("inlineCode",{parentName:"p"},"Actions")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Tasks")," from your Controllers or Services or whichever classes you prefer. You\nhave the freedom to structure your own project anyway you like, and still use all the feature that Apiato provide."),Object(i.b)("h3",{id:"how-to-use-my-custom-domain"},"How to use my custom domain?"),Object(i.b)("p",null,"Change the default URL from ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.test")," to ",Object(i.b)("inlineCode",{parentName:"p"},"awesome.com")),Object(i.b)("p",null,"1) Edit your hosts file ",Object(i.b)("inlineCode",{parentName:"p"},"sudo vi ect/hosts"),", and map your domain ",Object(i.b)("inlineCode",{parentName:"p"},"awesome.com")," to the IP address of your Virtual Host\n(Localhost, Docker IP, Vagrant IP, ...)"),Object(i.b)("p",null,"2) Edit the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file and replace ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.test")," with ",Object(i.b)("inlineCode",{parentName:"p"},"awesome.com")," in ",Object(i.b)("inlineCode",{parentName:"p"},"APP_URL"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"API_URL")," ",Object(i.b)("em",{parentName:"p"},"(note the API domain\nshould be api.)")),Object(i.b)("p",null,"3) Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"phpunit.xml")," file and change ",Object(i.b)("inlineCode",{parentName:"p"},"API_BASE_URL")," from ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.test")," to ",Object(i.b)("inlineCode",{parentName:"p"},"awesome.com")),Object(i.b)("h3",{id:"where-to-put-my-frontend-code"},"Where to put my frontend code?"),Object(i.b)("p",null,"It's recommended that the front-end Apps code live outside apiato completely. Example in ",Object(i.b)("inlineCode",{parentName:"p"},"clients/web/")," directory,\nseparated from the Server code (apiato Code)."),Object(i.b)("p",null,"The front-end App should be able to run as a stand-alone App, and it can consume the Server API or other Testing API's."),Object(i.b)("p",null,"You can configure NGINX to serve the Front-end and the Back-end each on a different domain or on subdomains ",Object(i.b)("em",{parentName:"p"},"(Example\n",Object(i.b)("inlineCode",{parentName:"em"},"app.com")," for the front-end App and ",Object(i.b)("inlineCode",{parentName:"em"},"api.app.com")," for the API)"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example project structure:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"- MyProject\n  - Server\n    - Api   // < apiato Code\n  - Clients\n    - Web\n      - Main App   // < Web App code (HTML, CSS, JS, ...)\n    - Mobile\n      - Android   // < Android App code\n      - iOS   // < iPhone App code\n")),Object(i.b)("p",null,"However, apiato does support serving HTML from within. So only of you prefer, you can serve HTML from apiato directly\nsame as serving the API."),Object(i.b)("p",null,"In this case the code will live in:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"- MyProject\n  - app\n    - Containers\n      - Container-X\n        - UI\n          - API\n          - WEB  // <<\n            - Views\n          - CLI\n      - Container-Y\n        - UI\n          - API\n          - WEB  // <<\n            - Views\n          - CLI\n")),Object(i.b)("h3",{id:"where-do-i-register-service-providers-and-aliases"},"Where do I register Service Providers and Aliases?"),Object(i.b)("p",null,"Most of the third party packages Service Providers and Aliases SHOULD be registered inside the Container's Main Service\nProviders, inside the ",Object(i.b)("inlineCode",{parentName:"p"},"$serviceProviders")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$aliases")," properties. However, some more general Service Providers and\nAliases (application features used by all containers) CAN be registered on the Ship layer in\n",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Providers/ShipProvider.php")," inside the ",Object(i.b)("inlineCode",{parentName:"p"},"$serviceProviders")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$aliases")," properties."),Object(i.b)("p",null,"Refer to the ",Object(i.b)("a",{parentName:"p",href:".././optional-components/providers"},"Providers")," page for more details."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Important Information"),": Laravel 5.5 introduces an ",Object(i.b)("inlineCode",{parentName:"p"},"auto-discovery")," feature that lets you automatically register\n",Object(i.b)("inlineCode",{parentName:"p"},"ServiceProviders"),". Due to the nature and structure of Apiato applications, this features ",Object(i.b)("strong",{parentName:"p"},"is turned off"),", because\nit messes up how ",Object(i.b)("inlineCode",{parentName:"p"},"config")," files are loaded in apiato. This means, that you still need to ",Object(i.b)("strong",{parentName:"p"},"manually")," register\n3rd-party ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceProviders")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceProvider")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"Container"),".")),Object(i.b)("h3",{id:"how-to-change-the-default-api-url"},"How to change the default API URL (Subdomain and Prefix)?"),Object(i.b)("p",null,"By default, Apiato uses ",Object(i.b)("inlineCode",{parentName:"p"},"api.")," as subdomain for all endpoints and adds only the ",Object(i.b)("inlineCode",{parentName:"p"},"v1")," API version as prefix."),Object(i.b)("p",null,"To change this from ",Object(i.b)("inlineCode",{parentName:"p"},"api.apiato.com")," to ",Object(i.b)("inlineCode",{parentName:"p"},"apiato.com/api/"),", do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},".env"),", change your api domain to ",Object(i.b)("inlineCode",{parentName:"li"},"API_URL=http://apiato.com")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"API_URL=http://api.apiato.com")," to\nremove the subdomain."),Object(i.b)("li",{parentName:"ol"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"app/Ship/Configs/apiato.php"),", set prefix to ",Object(i.b)("inlineCode",{parentName:"li"},"'prefix' => 'api/',"),"."),Object(i.b)("li",{parentName:"ol"},"That's it. Now you might need to update your tests endpoints, if they fail. Since each test can specify which\nendpoint to test, Example: In ",Object(i.b)("inlineCode",{parentName:"li"},"CreateAdminTest")," change ",Object(i.b)("inlineCode",{parentName:"li"},"protected $endpoint = 'post@v1/admins';")," to\n",Object(i.b)("inlineCode",{parentName:"li"},"protected $endpoint = 'post@api/v1/admins';"),", including the new prefix.")),Object(i.b)("p",null,"To remove the version prefix as well, set ",Object(i.b)("inlineCode",{parentName:"p"},"enable_version_prefix")," to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," in ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php"),"."),Object(i.b)("h3",{id:"where-do-i-define-my-composer-dependencies"},"Where do I define my Composer dependencies?"),Object(i.b)("p",null,"All the Composer dependencies should be defined in their Containers, in a ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," file."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"The Ship layer dependencies live on the root of the Ship layer in a ",Object(i.b)("inlineCode",{parentName:"em"},"composer.json")," file.\nFinally, the Framework core dependencies live on the project root ",Object(i.b)("inlineCode",{parentName:"em"},"composer.json")," file"),"."),Object(i.b)("p",null,"Basically using any of the ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," will do the same job. it's up to you to pick the most relevant location."),Object(i.b)("h3",{id:"how-to-enable-query-caching"},"How to enable Query Caching?"),Object(i.b)("p",null,"By default, this feature is turned off."),Object(i.b)("p",null,"To turn it on, go to the ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file and set ",Object(i.b)("inlineCode",{parentName:"p"},"ELOQUENT_QUERY_CACHE=true"),". The query result will be cleared on\n",Object(i.b)("inlineCode",{parentName:"p"},"create"),", ",Object(i.b)("inlineCode",{parentName:"p"},"update")," and ",Object(i.b)("inlineCode",{parentName:"p"},"delete"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"All these configurations can be changed from ",Object(i.b)("inlineCode",{parentName:"em"},"Ship/Configs/repository.php")),"."),Object(i.b)("h3",{id:"can-i-give-my-actions-rest-names"},"Can I give my Actions REST names?"),Object(i.b)("p",null,"Example: ",Object(i.b)("inlineCode",{parentName:"p"},"IndexAction"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ShowAction"),", ",Object(i.b)("inlineCode",{parentName:"p"},"StoreAction"),"..."),Object(i.b)("p",null,"Yes, you can name anything, anyway you prefer, sa long as you\u2019re just changing the name and not the naming format\n",Object(i.b)("em",{parentName:"p"},"\u201clike in case of routes files, they include the version number which gets applied to the api,\nand the api type to help to add the route file to different docs automatically\u201d"),"."),Object(i.b)("p",null,"The goal of giving the Actions and Tasks\u2026 a descriptive long names is, to be able to understand what\u2019s going on\ninside the class before opening it, and there\u2019s a feature that I will add to the generator later,\nthat will list all the use cases \u201cActions\u201d in your system, so you can see what you already implemented and what\nneeds to be done. If your Action name is \u201cShowAction\u201d you will see 50 of them without really knowing what\nthe action is doing!,"),Object(i.b)("p",null,"I prepend the container name before the action name, but still a maintainable code means anyone who reads it can\nunderstand it without any explanation from the original writer!..\nso I personally prefer ",Object(i.b)("inlineCode",{parentName:"p"},"ShowTotalNumberOfUsersActions")," than ",Object(i.b)("inlineCode",{parentName:"p"},"ShowAction"),"."),Object(i.b)("p",null,"Back to that future feature, here\u2019s how it works:\nimagine you can add all your endpoints \u201croutes files\u201d with no implementation and then implement them one by\none \u201csimilar to TDD/BDD\u201d with the help of a command that tells what you already have been completed and what\nneeds to be completed... as well as what Tasks are available to be used from any Action.."),Object(i.b)("h3",{id:"how-are-service-providers-auto-loaded"},"How are Service Providers auto-loaded?"),Object(i.b)("p",null,"Each Container has Main Provider and other Providers (Additional Providers).\nWhen ",Object(i.b)("inlineCode",{parentName:"p"},"runLoadersBoot()")," is called it auto register all the Main Providers from all the Containers."),Object(i.b)("p",null,"Each main provider calls its",Object(i.b)("inlineCode",{parentName:"p"},"boot()")," function after being registered, which calls ",Object(i.b)("inlineCode",{parentName:"p"},"loadServiceProviders()")," to register\nall the other container Providers. The other providers must be defined on its ",Object(i.b)("inlineCode",{parentName:"p"},"$serviceProviders")," property, otherwise\nit will be ignored."),Object(i.b)("p",null,"On the other side the ",Object(i.b)("inlineCode",{parentName:"p"},"ApiatoServiceProvider")," is manually registered on the ",Object(i.b)("inlineCode",{parentName:"p"},"app.php")," file (and it's the only one\nregistered there)."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ApiatoServiceProvider")," is the one who calls ",Object(i.b)("inlineCode",{parentName:"p"},"runLoadersBoot()")," on startup. After it calls that function it\nregisters ",Object(i.b)("inlineCode",{parentName:"p"},"ShipProvider")," which has all the other Providers defined on its ",Object(i.b)("inlineCode",{parentName:"p"},"$serviceProviders")," property."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Important Information"),": Laravel 5.5 introduces an ",Object(i.b)("inlineCode",{parentName:"p"},"auto-discovery")," feature that lets you automatically register\n",Object(i.b)("inlineCode",{parentName:"p"},"ServiceProviders"),". Due to the nature and structure of Apiato applications, this features ",Object(i.b)("strong",{parentName:"p"},"is turned off"),", because it\nmesses up how ",Object(i.b)("inlineCode",{parentName:"p"},"config")," files are loaded in apiato. This means, that you still need to ",Object(i.b)("strong",{parentName:"p"},"manually")," register 3rd-party\n",Object(i.b)("inlineCode",{parentName:"p"},"ServiceProviders")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"ServiceProvider")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"Container"),".")),Object(i.b)("h3",{id:"why-is-the-laravel-55-auto-discovery-feature-not-working"},"Why is the Laravel 5.5 Auto-Discovery feature not working?"),Object(i.b)("p",null,"That is, because this feature is turned off by default in Apiato. The Laravel ",Object(i.b)("inlineCode",{parentName:"p"},"Auto-Discovery")," feature registers 3rd-party\nService Providers during startup of the application and thereby messes with the way, Apiato handles / loads components.\nThis is especially problematic in the context of ",Object(i.b)("inlineCode",{parentName:"p"},"config")," files, as they are ignored."),Object(i.b)("p",null,"To re-enable it go to the main ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json"),' file and remove the "*" from the ',Object(i.b)("inlineCode",{parentName:"p"},"dont-discover")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "extra": {\n    "laravel": {\n      "dont-discover": [\n        "*"\n      ]\n    },\n')),Object(i.b)("p",null,'After enabling the Auto-Discovery, you must move all the config files from the Containers and the Ship layer to the\noriginal config folder of Laravel. Otherwise, they won\'t be loaded (except your custom Configs "config files that does\nnot belong to a composer package", they will still work fine).'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You ",Object(i.b)("strong",{parentName:"p"},"must")," register 3rd-party Service Providers on your own in the ",Object(i.b)("inlineCode",{parentName:"p"},"MainServiceProvider")," of respective Container\n(i.e., same like in Laravel 5.4 and before).")),Object(i.b)("h3",{id:"how-to-create-third-party-containers"},"How to create third-party Containers?"),Object(i.b)("p",null,"You can create your own Containers ",Object(i.b)("em",{parentName:"p"},"(use the containers generator command to quickly create them)"),", and publish them\nto your own repository. The only requirement is to have the package type set to ",Object(i.b)("inlineCode",{parentName:"p"},"apiato-container"),"\n(",Object(i.b)("inlineCode",{parentName:"p"},'"type": "apiato-container"'),") in your ",Object(i.b)("inlineCode",{parentName:"p"},"composer.json")," file."),Object(i.b)("p",null,"To use install the Container in your project add it as dependency to ",Object(i.b)("inlineCode",{parentName:"p"},"app/Ship/composer.json"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"apiato/containers-installer")," will download your Container to the ",Object(i.b)("inlineCode",{parentName:"p"},"app/containers/")," directory."),Object(i.b)("h3",{id:"what-is-the-default-username-for-authentication"},"What is the default Username for authentication?"),Object(i.b)("p",null,"The default credentials to login are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Username: ",Object(i.b)("a",{parentName:"li",href:"mailto:admin@admin.com"},"admin@admin.com")),Object(i.b)("li",{parentName:"ul"},"Password: admin")),Object(i.b)("h2",{id:"other-questions"},"I have a question, and I can't find answer!!"),Object(i.b)("p",null,"If you have a question, or did not find an answer you were looking for on ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/apiato"},"StackOverflow"),". First make sure your question is related to\napiato and is not a general question. If so, then consider visiting the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues"},"apiato's Github Issues")," and searching for ",Object(i.b)("em",{parentName:"p"},"keywords")," related to your\nissue ",Object(i.b)("em",{parentName:"p"},"(filter open and closed issues)"),". Another option you have is to get help from the community on\n",Object(i.b)("a",{parentName:"p",href:"https://discord.gg/ryPcV4KM5k"},"Discord"),"."),Object(i.b)("p",null,"Lastly, if you got your question answered, consider sharing it, if you believe it can help others. You can submit a PR\nadding the questions and answer here on the FAQ page. Or leave it somewhere on the repository or on the chat room. Thanks in\nadvance :)"))}s.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);