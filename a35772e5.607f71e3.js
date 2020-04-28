(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(119)),o={},c={id:"setup/setup",title:"setup",description:"# Setup d'un nouveau projet mobile React native",source:"@site/docs/setup/setup.md",permalink:"/docs/setup/setup",sidebar:"docs",previous:{title:"introduction",permalink:"/docs/setup/introduction"},next:{title:"plugins",permalink:"/docs/config/plugins"}},l=[{value:"iOS",id:"ios",children:[{value:"Add the SDK to the project",id:"add-the-sdk-to-the-project",children:[]},{value:"Integrate the SDK",id:"integrate-the-sdk",children:[]},{value:"Modify the app&#39;s AppDelegate.m file to include code for starting SDK:",id:"modify-the-apps-appdelegatem-file-to-include-code-for-starting-sdk",children:[]},{value:"Explore data",id:"explore-data",children:[]}]},{value:"Android",id:"android",children:[{value:"Add the SDK to the project",id:"add-the-sdk-to-the-project-1",children:[]},{value:"Integrate the SDK",id:"integrate-the-sdk-1",children:[]},{value:"Explore data",id:"explore-data-1",children:[]}]},{value:"CheatSheet",id:"cheatsheet",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"setup-dun-nouveau-projet-mobile-react-native"},"Setup d'un nouveau projet mobile React native"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npx react-native init")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm i\ncd ios\npod install\n")),Object(i.b)("h1",{id:"d\xe9marrer-le-dev-sous-ios"},"D\xe9marrer le dev sous iOS"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npx react-native run-ios")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npx react-native run-android")),Object(i.b)("h1",{id:"install-app-icons"},"Install app icons"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@scottianstewart/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c"}),"https://medium.com/@scottianstewart/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c")),Object(i.b)("h1",{id:"ajouter-des-polices"},"Ajouter des polices"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Il faut que le nom du fichier de la police corresponde exactement au nom de la police (ce qu'on a quand on clique bouton droit/info sur le fichier)"),Object(i.b)("li",{parentName:"ol"},"Une fois que les polices ttf sont dans un r\xe9pertoire, cr\xe9er le fichier react-native.config.js \xe0 la racine du projet")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"module.exports = {\n    assets: ['./App/assets/fonts/']\n};\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"react-native link")," pour les ajouter"),Object(i.b)("li",{parentName:"ol"},"on utilise une police en mettant")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"import { createIconSetFromIcoMoon } from 'react-native-vector-icons';\nimport icoMoonConfig from './selection.json';\nconst Icon = createIconSetFromIcoMoon(\n  icoMoonConfig,\n  'LineAwesome',\n  'line-awesome.ttf'\n);\n")),Object(i.b)("h1",{id:"gestion-des-web-services"},"Gestion des Web services"),Object(i.b)("p",null,"Axios pour les appels HTTP (On pr\xe9f\xe8re Axios \xe0 fetch pour sa simplicit\xe9 et sa gestion des erreurs.)\nlodash comme outil de manipulation js\nhtml-entities pour manipuler les cha\xeenes HTML encod\xe9es"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm i --save axios html-entities lodash\n")),Object(i.b)("h1",{id:"microsoft-app-center"},"Microsoft App Center"),Object(i.b)("h2",{id:"ios"},"iOS"),Object(i.b)("h3",{id:"add-the-sdk-to-the-project"},"Add the SDK to the project"),Object(i.b)("p",null,"In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install appcenter appcenter-analytics appcenter-crashes --save-exact\n")),Object(i.b)("h3",{id:"integrate-the-sdk"},"Integrate the SDK"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run pod install from iOS directory to install CocoaPods dependencies.")),Object(i.b)("p",null,"Note: Integrating the iOS SDK requires CocoaPods. If you want to integrate manually, follow these steps."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new file with the name AppCenter-Config.plist with the following content. Don't forget to add this file to the Xcode project (right-click the app in Xcode and click Add files to ",Object(i.b)("inlineCode",{parentName:"li"},"<App Name>"),"...).")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n    <dict>\n    <key>AppSecret</key>\n    <string>secretkeyfromappcenter</string>\n    </dict>\n</plist>\n')),Object(i.b)("h3",{id:"modify-the-apps-appdelegatem-file-to-include-code-for-starting-sdk"},"Modify the app's AppDelegate.m file to include code for starting SDK:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add these lines to import section")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>\n#import <AppCenterReactNative.h>\n#import <AppCenterReactNativeAnalytics.h>\n#import <AppCenterReactNativeCrashes.h>\n#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>\n#import <AppCenterReactNative.h>\n#import <AppCenterReactNativeAnalytics.h>\n#import <AppCenterReactNativeCrashes.h>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add these lines to the didFinishLaunchingWithOptions method")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"[AppCenterReactNative register];\n[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];\n[AppCenterReactNativeCrashes registerWithAutomaticProcessing];\n[AppCenterReactNative register];\n[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];\n[AppCenterReactNativeCrashes registerWithAutomaticProcessing];\n")),Object(i.b)("h3",{id:"explore-data"},"Explore data"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Now build and launch your app, then go to the Analytics section."),Object(i.b)("li",{parentName:"ul"},"You should see one active user and at least one session! The charts will get more relevant as you get more users."),Object(i.b)("li",{parentName:"ul"},"Once your app actually crashes, you will have Crashes data show up as well.")),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("h3",{id:"add-the-sdk-to-the-project-1"},"Add the SDK to the project"),Object(i.b)("p",null,"In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install appcenter appcenter-analytics appcenter-crashes --save-exact\nnpm install appcenter appcenter-analytics appcenter-crashes --save-exact\n")),Object(i.b)("h3",{id:"integrate-the-sdk-1"},"Integrate the SDK"),Object(i.b)("p",null,"Create a new file with the filename appcenter-config.json with the following content. Don't forget to add this file to the assets folder of your Android app."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'{\n  "app_secret": "6ec2cb7b-df06-48f5-8bc0-6a6d48c8be58"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Modify the app's res/values/strings.xml to include the following lines:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>\n<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>\n<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>\n<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>\n')),Object(i.b)("h3",{id:"explore-data-1"},"Explore data"),Object(i.b)("p",null,"Now build and launch your app, then go to the Analytics section. You should see one active user and at least one session! The charts will get more relevant as you get more users. Once your app actually crashes, you will have Crashes data show up as well."),Object(i.b)("h2",{id:"cheatsheet"},"CheatSheet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dans le channel slack #yoodoogood taper ",Object(i.b)("inlineCode",{parentName:"li"},"/appcenter build master")," pour builder et distribuer l'app dans TestFlight")))}s.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(h,c({ref:t},p,{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);