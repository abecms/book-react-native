(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(157)),l={},o={id:"dev/tips",title:"tips",description:"# Tips and tricks",source:"@site/docs/dev/tips.md",permalink:"/docs/dev/tips",sidebar:"docs",previous:{title:"dev",permalink:"/docs/dev/dev"}},p=[{value:"Renommer un projet react-native",id:"renommer-un-projet-react-native",children:[{value:"Usage",id:"usage",children:[]}]},{value:"D\xe9veloppement android",id:"d\xe9veloppement-android",children:[]},{value:"Pour compiler l&#39;app et la tester en APK",id:"pour-compiler-lapp-et-la-tester-en-apk",children:[]}],c={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"tips-and-tricks"},"Tips and tricks"),Object(i.b)("h2",{id:"renommer-un-projet-react-native"},"Renommer un projet react-native"),Object(i.b)("p",null,"Utilisez le package npm ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-rename")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installation en global sur le poste ",Object(i.b)("inlineCode",{parentName:"li"},"npm install react-native-rename -g")),Object(i.b)("li",{parentName:"ul"},"Utilisation")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"At he project root:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"react-native-rename <newName>\n")),Object(i.b)("p",null,"With custom Bundle Identifier (Android only. For iOS, please use Xcode)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"react-native-rename <newName> -b <bundleIdentifier>\n")),Object(i.b)("p",null,"Then"),Object(i.b)("p",null,"in ",Object(i.b)("inlineCode",{parentName:"p"},"iOS")," directory run ",Object(i.b)("inlineCode",{parentName:"p"},"pod install")),Object(i.b)("h2",{id:"d\xe9veloppement-android"},"D\xe9veloppement android"),Object(i.b)("p",null,"Si un soucis de communication apparait entre metro et l'application, il faut ajouter l'adresse IP du serveur dans le fichier ",Object(i.b)("inlineCode",{parentName:"p"},"android/app/src/main/res/xml/network_security_config.xml")," :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'<network-security-config>\n    <domain-config cleartextTrafficPermitted="true">\n        ...\n        <domain includeSubdomains="true">xx.xx.xx.xx</domain>\n        ...\n    </domain-config>\n</network-security-config>\n')),Object(i.b)("p",null,"Cette configuration sp\xe9cifique au SDK Admob mediation permet au SDK de g\xe9rer le cache localement."),Object(i.b)("h2",{id:"pour-compiler-lapp-et-la-tester-en-apk"},"Pour compiler l'app et la tester en APK"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res\n")),Object(i.b)("h1",{id:"reset-le-cache-quand-un-module-ne-sinstalle-pas-correctement"},"reset le cache quand un module ne s'installe pas correctement"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm start -- --reset-cache")),Object(i.b)("h1",{id:"comment-g\xe9rer-les-layers-en-absolute-avec-android"},"Comment g\xe9rer les layers en absolute avec Android"),Object(i.b)("p",null,"Android ne g\xe8re pas bien les view en absolute avec des boutons touchable. Surtout si la view en dessous est une ScrollView !"),Object(i.b)("p",null,"La seule fa\xe7on de g\xe9rer \xe7a correctement est de placer le layer qui devra passer au-dessus, EN-DESSOUS de SCROLLVIEW dans le code !\napr\xe8s utiliser le zIndex pour le placer correctement."),Object(i.b)("h1",{id:"comment-g\xe9rer-un-back-depuis-un-\xe9cran-dun-stack-vers-un-autre-\xe9cran-de-stack"},"Comment g\xe9rer un back depuis un \xe9cran d'un stack vers un autre \xe9cran de stack"),Object(i.b)("p",null,"La solution : Lorsque l'\xe9cran initial appelle l'\xe9cran plac\xe9 dans un autre stack, passer une variable indiquant de quelle route on vient.\nDepuis l'\xe9cran pour faire un goBack, il suffit alors de faire :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"onPress={() =>\n  navigation.getParam('search')\n    ? navigation.popToTop() && navigation.navigate('recherche')\n    : navigation.goBack()\n}\n")),Object(i.b)("p",null,"L'astuce ici est de faire un popToTop() qui ram\xe8ne \xe0 la racine du stack puis d'aller \xe0 l'\xe9cran d'origine."),Object(i.b)("h1",{id:"error-use-of-undeclared-identifier-"},"error Use of undeclared identifier '...'"),Object(i.b)("p",null,"If you have properly installed your plugin, make sure that your import (in ",Object(i.b)("inlineCode",{parentName:"p"},"AppDelegate.m")," for example) before any ",Object(i.b)("inlineCode",{parentName:"p"},"#if DEBUG")),Object(i.b)("p",null,"ie. GOOD"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'    #import "RNBootSplash.h"\n\n    #if DEBUG\n    #import <FlipperKit/FlipperClient.h>\n    #import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n    #import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n    #import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n    #import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n    #import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>\n\n')),Object(i.b)("p",null,"BAD"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'    #if DEBUG\n    #import <FlipperKit/FlipperClient.h>\n    #import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n    #import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n    #import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n    #import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n    #import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>\n\n     #import "RNBootSplash.h"\n\n')),Object(i.b)("h1",{id:"cr\xe9er-une-font-\xe0-partir-de-svg-fournies"},"Cr\xe9er une font \xe0 partir de SVG fournies"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Extraire les icones depuis les sketch (ou psd) au format svg"),Object(i.b)("li",{parentName:"ol"},"Aller sur icomoon.io, dans projet : ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://icomoon.io/app/#/projects"}),"https://icomoon.io/app/#/projects"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Cr\xe9er un nouveau projet puis cliquer sur LOAD"),Object(i.b)("li",{parentName:"ul"},"Puis cliquer sur IMPORT ICONES dans la barre de menu"),Object(i.b)("li",{parentName:"ul"},"S\xe9lectionner les icones import\xe9es dans le projet"),Object(i.b)("li",{parentName:"ul"},"Puis cliquer sur GENERATE FONT dans le menu footer"),Object(i.b)("li",{parentName:"ul"},"Puis cliquer sur DOWNLOAD dans le menu footer")))))}u.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||b[d]||i;return n?a.a.createElement(m,o({ref:t},c,{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);