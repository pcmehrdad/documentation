"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9783],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=o,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3845:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],l={title:"Installation"},p=void 0,s={unversionedId:"getting-started/installation",id:"version-10.x/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"* Apiato Installation",source:"@site/versioned_docs/version-10.x/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/getting-started/installation.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"4/25/2021",frontMatter:{title:"Installation"},sidebar:"version-10.x/docs",previous:{title:"Requirements",permalink:"/docs/"},next:{title:"Architecture",permalink:"/docs/getting-started/software-architectural-patterns"}},m=[{value:"Apiato Application Installation",id:"App",children:[{value:"Project Setup Via Composer",id:"Project-Setup",children:[]},{value:"Database Setup",id:"Setup-Database",children:[]},{value:"OAuth 2.0 Setup",id:"Prepare-OAuth",children:[]},{value:"Documentation Setup",id:"Documentation",children:[]},{value:"Testing Setup",id:"Testing",children:[]}]},{value:"Development Environment Setup",id:"Development-Environment",children:[{value:"Using Docker (with Laradock)",id:"Using-Docker-With-Laradock",children:[]},{value:"Using Vagrant (with Laravel Homestead)",id:"Using-Vagrant-Using-Homestead",children:[]},{value:"Using anything else",id:"Using-anything-else",children:[]}]},{value:"Let&#39;s Play",id:"Play",children:[]}],u={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#App"},"Apiato Installation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Project-Setup"},"Project Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Setup-Database"},"Database Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Prepare-OAuth"},"OAuth Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Documentation"},"Documentation Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Testing"},"Testing Setup")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Development-Environment"},"Environment Setup"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Using-Docker-With-Laradock"},"Using Docker and Laradock")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Using-Vagrant-Using-Homestead"},"Using Vagrant and Homestead")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Using-anything-else"},"Using MAMP/WAMP or something else")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Play"},"Play"))),(0,i.kt)("h2",{id:"App"},"Apiato Application Installation"),(0,i.kt)("h3",{id:"Project-Setup"},"Project Setup Via Composer"),(0,i.kt)("p",null,"If you already have ",(0,i.kt)("inlineCode",{parentName:"p"},"php")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"composer")," installed on your computer (",(0,i.kt)("a",{parentName:"p",href:"../"},"read requirements"),") you may create a new Apiato project using the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"composer create-project apiato/apiato my-api\n")),(0,i.kt)("h4",{id:"apiato-installer"},"The Apiato Installer"),(0,i.kt)("p",null,"Or, you may install the Apiato Installer as a global Composer dependency:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"composer global require apiato/installer\n")),(0,i.kt)("p",null,"Then create a new Apiato project using Apiato Installer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apiato new my-api\n")),(0,i.kt)("p",null,"Advantages of using Apiato Installer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After your project installed, you will be asked to choose containers you want to install in your fresh project."),(0,i.kt)("li",{parentName:"ul"},"You can install the latest stable version (by default), or the latest development version of Apiato using ",(0,i.kt)("inlineCode",{parentName:"li"},"--dev")," option."),(0,i.kt)("li",{parentName:"ul"},"You can initial a new git repository for your project using ",(0,i.kt)("inlineCode",{parentName:"li"},"--git")," option.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure to place Composer's system-wide vendor bin directory in your ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," so the apiato executable can be located by your system. This directory exists in different locations based on your operating system; however, some common locations include:"),(0,i.kt)("p",{parentName:"div"},"macOS: ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.composer/vendor/bin"),"\nWindows: ",(0,i.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%\\AppData\\Roaming\\Composer\\vendor\\bin"),"\nGNU / Linux Distributions: ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.config/composer/vendor/bin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.composer/vendor/bin")))),(0,i.kt)("p",null,"For convenience, the Apiato installer can also create a Git repository for your new project. To indicate that you want a Git repository to be created, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"--git")," flag when creating a new project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apiato new my-api --git\n")),(0,i.kt)("p",null,"This command will initialize a new Git repository for your project and automatically commit the base Apiato skeleton. The ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," flag assumes you have properly installed and configured Git (",(0,i.kt)("a",{parentName:"p",href:"../"},"read requirements"),"). You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--branch")," flag to set the initial branch name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'apiato new my-api --git --branch="main"\n')),(0,i.kt)("h3",{id:"Setup-Database"},"Database Setup"),(0,i.kt)("p",null,"1) Migrate the Database:"),(0,i.kt)("p",null,"Run the migration artisan command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate\n")),(0,i.kt)("p",null,"2) Seed the database with the artisan command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),(0,i.kt)("p",null,'3) Optional. By default, Apiato seeds a "Super User", given the default ',(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role (the role has no Permissions set\nto it)."),(0,i.kt)("p",null,"To give the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role, access to all the seeded permissions in the system, run the following command, at any time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:permissions:toRole admin\n")),(0,i.kt)("h3",{id:"Prepare-OAuth"},"OAuth 2.0 Setup"),(0,i.kt)("p",null,'1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients\nwhich will be used to generate access tokens:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan passport:install\n")),(0,i.kt)("h3",{id:"Documentation"},"Documentation Setup"),(0,i.kt)("p",null,"1) Install ",(0,i.kt)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," using NPM or your favorite dependencies manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,i.kt)("p",null,"2) Run ",(0,i.kt)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")),(0,i.kt)("h5",{id:"visit-api-docs-generator-for-more-details"},"Visit ",(0,i.kt)("a",{parentName:"h5",href:"../additional-features/apiato-containers/documentation"},"API Docs Generator")," for more details."),(0,i.kt)("h3",{id:"Testing"},"Testing Setup"),(0,i.kt)("p",null,"1) Open ",(0,i.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," and make sure the environments are correct for your domain."),(0,i.kt)("p",null,"2) run the tests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/phpunit\n")),(0,i.kt)("h2",{id:"Development-Environment"},"Development Environment Setup"),(0,i.kt)("p",null,"You can run ",(0,i.kt)("strong",{parentName:"p"},"Apiato")," on your favorite environment. Below you'll see how you can run it on top of\n",(0,i.kt)("a",{parentName:"p",href:"https://www.vagrantup.com/"},"Vagrant")," (using ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/homestead"},"Laravel Homestead"),") or\n",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," (using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Laradock/laradock"},"Laradock"),")."),(0,i.kt)("p",null,"We'll see how to use both tools, and you can pick one, or you can use other options like\n",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/valet"},"Laravel Valet"),", ",(0,i.kt)("a",{parentName:"p",href:"https://laragon.org/"},"Laragon")," or even run it directly on your machine."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Heads up!")," ",(0,i.kt)("br",null),"\nThe ICANN has now officially approved ",(0,i.kt)("inlineCode",{parentName:"p"},".dev")," as a generic top level domain (gTLD). Therefore, it is ",(0,i.kt)("strong",{parentName:"p"},"not")," recommended\nto use ",(0,i.kt)("inlineCode",{parentName:"p"},".dev")," domains anymore in your local development setup! We use ",(0,i.kt)("inlineCode",{parentName:"p"},".test"),", however, you may change it to ",(0,i.kt)("inlineCode",{parentName:"p"},".example"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},".localhost")," or whatever suits your needs. ",(0,i.kt)("a",{parentName:"p",href:"http://www.faqs.org/rfcs/rfc2606.html"},"Read more"),".")),(0,i.kt)("h3",{id:"Using-Docker-With-Laradock"},"Using Docker (with Laradock)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Laradock")," is a Docker PHP development environment. It facilitates running PHP Apps on Docker."),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/LaraDock/laradock#installation"},"Laradock"),"."),(0,i.kt)("p",null,"Navigate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"laradock")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd laradock\n")),(0,i.kt)("p",null,"This directory contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. (From the LaraDock project)."),(0,i.kt)("p",null,"If you haven't done so, rename ",(0,i.kt)("inlineCode",{parentName:"p"},"env-example")," to ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cp env-example .env\n")),(0,i.kt)("p",null,"Run the Docker containers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d nginx mysql redis beanstalkd\n")),(0,i.kt)("p",null,"Make sure you are setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker IP")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"DB")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Redis"),"  in your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("p",null,"Add the domain to the Hosts file: ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),". We'll be using ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato.test")," as local domain (you can change it if you want)."),(0,i.kt)("p",null,"Map the domain and its subdomains to 127.0.0.1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1  apiato.test\n127.0.0.1  api.apiato.test\n127.0.0.1  admin.apiato.test\n")),(0,i.kt)("p",null,"If you're using NGINX or Apache, make sure the ",(0,i.kt)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",(0,i.kt)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your server config file, is set to the following ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",(0,i.kt)("em",{parentName:"p"},"(Also don't forget to point the ",(0,i.kt)("strong",{parentName:"em"},"Root")," or ",(0,i.kt)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",(0,i.kt)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),(0,i.kt)("h3",{id:"Using-Vagrant-Using-Homestead"},"Using Vagrant (with Laravel Homestead)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Laravel Homestead")," is installed by default. If you have removed homestead you can install it using  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"composer require laravel/homestead --dev\n")),(0,i.kt)("h4",{id:"configure-homestead"},"Configure Homestead:"),(0,i.kt)("p",null,"Create the Homestead config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vendor/bin/homestead make\n")),(0,i.kt)("p",null,"Map the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.apiato.test")," domain to the project public directory - Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"sites:\n    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n")),(0,i.kt)("p",null,"You can also map other domains like ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato.test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.apiato.test")," to other web apps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"    - map: apiato.test\n      to: /{full-path-to}/clients/web/user\n    - map: admin.apiato.test\n      to: /{full-path-to}/clients/web/admin\n")),(0,i.kt)("p",null,"Note: in the example above the ",(0,i.kt)("inlineCode",{parentName:"p"},"/{full-path-to}/clients/web/***")," are separate apps, who live on their own repositories\nand in different folder then the Apiato one. If your Admins, Users or other type of Apps are within Apiato, then you\nmust point them all to the Apiato project folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/{full-path-to}/apiato/public"),". So in that case you would have\nsomething like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"    - map: api.apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: apiato.test\n      to: /{full-path-to}/apiato/public\n    - map: admin.apiato.test\n      to: /{full-path-to}/apiato/public\n")),(0,i.kt)("h4",{id:"configure-hosts"},"Configure Hosts:"),(0,i.kt)("p",null,"Open the hosts file on your local machine ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"We'll be using ",(0,i.kt)("inlineCode",{parentName:"em"},"apiato.test")," as local domain (you can change it if you want).")),(0,i.kt)("p",null,"Map the domain and its subdomains to the Vagrant IP Address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"192.168.10.10   apiato.test\n192.168.10.10   api.apiato.test\n192.168.10.10   admin.apiato.test\n")),(0,i.kt)("p",null,"If you're using NGINX or Apache, make sure the ",(0,i.kt)("strong",{parentName:"p"},"server_name")," (in case of NGINX) or ",(0,i.kt)("strong",{parentName:"p"},"ServerName")," (in case of Apache)\nin your server config file, is set to the following ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato.test api.apiato.test admin.apiato.test"),".\n",(0,i.kt)("em",{parentName:"p"},"(Also don't forget to set your ",(0,i.kt)("strong",{parentName:"em"},"root")," or ",(0,i.kt)("strong",{parentName:"em"},"DocumentRoot")," to the public directory inside apiato ",(0,i.kt)("inlineCode",{parentName:"em"},"apiato/public"),")"),"."),(0,i.kt)("p",null,"Run the Virtual Machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"homestead up --provision\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you see ",(0,i.kt)("inlineCode",{parentName:"em"},"No input file specified")," on the sub-domains!\ntry running this command ",(0,i.kt)("inlineCode",{parentName:"em"},"homestead halt && homestead up --provision"),".")),(0,i.kt)("h3",{id:"Using-anything-else"},"Using anything else"),(0,i.kt)("p",null,"If you're not into virtualization solutions, you can set up your environment directly on your machine. Check the\n",(0,i.kt)("a",{parentName:"p",href:"../"},"software's requirements list"),"."),(0,i.kt)("h2",{id:"Play"},"Let's Play"),(0,i.kt)("p",null,"Now let's see it in action"),(0,i.kt)("p",null,"Open your web browser and visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://apiato.test")," You should see an HTML page, with ",(0,i.kt)("inlineCode",{parentName:"li"},"Apiato")," in the middle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test")," You should see a response like this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n"Welcome to Apiato"\n]\n')),(0,i.kt)("p",null,"Open your HTTP client and call:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/")," You should see a JSON response with message: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Welcome to apiato."'),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http://api.apiato.test/v1")," You should see a JSON response with message: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Welcome to apiato (API V1)."'),",")),(0,i.kt)("p",null,"Make some HTTP calls to the API:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To make the calls you can use ",(0,i.kt)("a",{parentName:"em",href:"https://www.getpostman.com/"},"Postman"),", ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/jkbrzt/httpie"},"HTTPIE")," or\nany other tool you prefer.")),(0,i.kt)("p",null,"Let's test the (user registration) endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"http://api.apiato.test/v1/register")," with ",(0,i.kt)("strong",{parentName:"p"},"cURL"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Cache-Control: no-cache" -F "email=John@Doe.me" -F "password=so-secret" -F "name=John Doe" "http://api.apiato.test/v1/register"\n')),(0,i.kt)("p",null,"You should get a response like this:"),(0,i.kt)("p",null,"Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Access-Control-Allow-Origin \u2192 ...\nCache-Control \u2192 ...\nConnection \u2192 keep-alive\nContent-Language \u2192 en\nContent-Type \u2192 application/json\nDate \u2192 Wed, 11 Apr 2000 22:55:88 GMT\nServer \u2192 nginx\nTransfer-Encoding \u2192 chunked\nVary \u2192 Origin\nX-Powered-By \u2192 PHP/7.7.7\nX-RateLimit-Limit \u2192 30\nX-RateLimit-Remaining \u2192 29\n")),(0,i.kt)("p",null,"Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "7VgmkMw7rR2pWO5j",\n    "name": "John Doe",\n    "email": "John@Doe.me",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null,\n    "created_at": "2021-04-12T13:33:24.000000Z",\n    "updated_at": "2021-04-12T13:33:24.000000Z",\n    "readable_created_at": "1 second ago",\n    "readable_updated_at": "1 second ago"\n  },\n  "meta": {\n    "include": [\n      "roles"\n    ],\n    "custom": []\n  }\n}\n')))}c.isMDXComponent=!0}}]);