# Setup d'un nouveau projet mobile React native

```npx react-native init```

```
npm i
cd ios
pod install
```

# Démarrer le dev sous iOS

```npx react-native run-ios```

```npx react-native run-android```

# Install app icons
https://medium.com/@scottianstewart/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c

# Ajouter des polices
1. Il faut que le nom du fichier de la police corresponde exactement au nom de la police (ce qu'on a quand on clique bouton droit/info sur le fichier)
2. Une fois que les polices ttf sont dans un répertoire, créer le fichier react-native.config.js à la racine du projet
```
module.exports = {
    assets: ['./App/assets/fonts/']
};
```
3. ```react-native link``` pour les ajouter
4. on utilise une police en mettant
```
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'LineAwesome',
  'line-awesome.ttf'
);
```

# Gestion des Web services

Axios pour les appels HTTP (On préfère Axios à fetch pour sa simplicité et sa gestion des erreurs.)
lodash comme outil de manipulation js
html-entities pour manipuler les chaînes HTML encodées

```
npm i --save axios html-entities lodash
```

# Microsoft App Center
## iOS
### Add the SDK to the project

In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app:

```shell
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
```
### Integrate the SDK

- Run pod install from iOS directory to install CocoaPods dependencies.

Note: Integrating the iOS SDK requires CocoaPods. If you want to integrate manually, follow these steps.

- Create a new file with the name AppCenter-Config.plist with the following content. Don't forget to add this file to the Xcode project (right-click the app in Xcode and click Add files to `<App Name>`...).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
    <key>AppSecret</key>
    <string>secretkeyfromappcenter</string>
    </dict>
</plist>
```

### Modify the app's AppDelegate.m file to include code for starting SDK:

- Add these lines to import section

``` swift
#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>
#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>
```

- Add these lines to the didFinishLaunchingWithOptions method

``` swift
[AppCenterReactNative register];
[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
[AppCenterReactNativeCrashes registerWithAutomaticProcessing];
[AppCenterReactNative register];
[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
[AppCenterReactNativeCrashes registerWithAutomaticProcessing];
```

### Explore data

- Now build and launch your app, then go to the Analytics section.
- You should see one active user and at least one session! The charts will get more relevant as you get more users.
- Once your app actually crashes, you will have Crashes data show up as well.

## Android

### Add the SDK to the project

In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app:

```shell
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
```
### Integrate the SDK

Create a new file with the filename appcenter-config.json with the following content. Don't forget to add this file to the assets folder of your Android app.

```java
{
  "app_secret": "6ec2cb7b-df06-48f5-8bc0-6a6d48c8be58"
}
```

- Modify the app's res/values/strings.xml to include the following lines:

```java
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
```

### Explore data

Now build and launch your app, then go to the Analytics section. You should see one active user and at least one session! The charts will get more relevant as you get more users. Once your app actually crashes, you will have Crashes data show up as well.


## CheatSheet

- Dans le channel slack #yoodoogood taper `/appcenter build master` pour builder et distribuer l'app dans TestFlight

## Styled components
Nous utilisons pour tous nos projets la librairie StyledComponents

Voici comment l'utiliser :
1. Il faut analyser les components de l'app et préparer les styles communs (comme Container, SafeView ...) qui se retrouveront dans Theme.js
2. Créer un répertoire Styled et dans ce répertoire déposer les fichiers de styles : Theme.js + un fichier par screen ou composant qui a besoin de ses propres styles. ex.

```
Styled/
  Theme.js
  Screens/
    Homepage.js
    Download.js
  Components/
    Player/
      Top.js
      Middle.js
      Bottom.js
```


## Créer une app de démo pour un store : Mode kiosk

Ce mode s'appelle `Single App Mode`. Pour placer un iPad ou iPhone dans ce mode, il faut installer sur votre Mac "Apple Configurator".

Ce mode permet de bloquer l'iPad sur une seule app sans qu'il soit possible d'en sortir.

Votre iPAd connecté en mode supervisé via un cable USB à votre Mac, ouvrez Apple Configurator et selectionnez le device. Cliquer sur le menu `actions`, puis `Advanced` et sélectionner `Start Single App Mode`. Vous pourrez ensuite choisir les options souhaitées.

Pour retirer ce mode de l'iPad, le reconnecter à votre Mac et retirer cette option depuis Apple Configurator.

