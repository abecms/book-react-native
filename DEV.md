



# Modules utilisés

| Function        | Name        | URL
|:----------------:|:---------:|:-----------------------------:|
| Error Reporting | Firebase Crashlytics | `https://www.npmjs.com/package/@react-native-firebase/crashlytics`



# Install

```
npm i
cd ios
pod install
```

# Plugins
Pour tous les plugins RN
Une fois l'install faite, aller dans /ios et faire ```pod update```

## react-native-splash-screen
https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae

## Install
```
npm i --save react-native-splash-screen
```

### IOS
Dans AppDelegate.m:
- Ajouter ```#import "RNSplashScreen.h" ```
- ``` [RNSplashScreen show];``` à la fin de la méthode didFinishLaunchingWithOptions (avant le return YES)

## Install app icons
https://medium.com/@scottianstewart/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4c

## react-native-vector-icons
Idéal pour utiliser les icones fontawesome ou autre
### Install

```
npm i --save react-native-vector-icons
```

Ajouter cette ligne dans ios/pod file:
```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```
puis dans ios : ```pod install```

### Créer des fonts d'icones
Créer la font : https://medium.com/sketch-app-sources/how-to-create-font-icons-from-a-sketch-icon-library-e94fe93ed00c

1. Exporter les icons au format SVG depuis sketch (source : https://medium.com/sketch-app-sources/how-to-create-font-icons-from-a-sketch-icon-library-e94fe93ed00c)
2. Générer la font https://d.pr/v/YVrAsz

Ajouter des polices:
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

## Navigation
Modules permettant de créer toute navigation dans l'app

### Install
```
npm i --save react-navigation react-navigation-stack react-navigation-tabs react-native-gesture-handler react-native-reanimated react-navigation-hooks
```

### Créer une bottom bar
Voici un exemple avec usage d'icones:

```
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcon  from 'react-native-vector-icons/EvilIcons';

...

const TabNavigator = createBottomTabNavigator(
  {
    Accueil: HomeStack,
    Participez: ParticipezScreen,
    Profil: ProfilScreen,
    Plus: PlusScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Accueil') {
          IconComponent = Icon;
          iconName = `home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Participez') {
          IconComponent = Icon;
          iconName = `event`;
        } else if (routeName === 'Profil') {
          IconComponent = EvilIcon;
          iconName = `user`;
        } else if (routeName === 'Plus') {
          IconComponent = Icon;
          iconName = `menu`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} style={{marginTop: 10}}/>;
      },
      // tabBarOptions: {
      //     activeTintColor: '#2BEDBA',
      //     inactiveTintColor: '#000'
      // },
    })
  }
);
```

### Afficher ou non la bottom bar
On peut supprimer la bottom bar pour une route spécifique.
Pour une navigation de type bottom-bar->stacked (cf. ci-dessous), on peut vérifier que l'on est sur une route du stack en faisant ```if (navigation.state.index === 1 && navigation.state.routes[1].routeName === 'Video')``` :
```
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    Theme: ThemeScreen,
    Video: VideoScreen,
  },
  {
    headerMode: 'none'
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state;

  if (navigation.state.index === 1 && navigation.state.routes[1].routeName === 'Video') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Accueil: HomeStack,
    Participez: ParticipezScreen,
    Profil: ProfilScreen,
    Plus: PlusScreen
  }
);
```

```
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state;

  if (navigation.state.index === 1 && navigation.state.routes[1].routeName === 'Video') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
```

### Header
Il y a 2 moyens de faire le header.
1. En utilisant le header de navigation (très bien pour des navigations qui ne nécessitent pas beaucoup de cusomization)
2. En bypassant le header de navigation et en faisant son propre composant (très souple)

### Le header de react-navigation
- Pour pouvoir changer des paramètres dans des screens : On utilise useEffect pour récupérer les data passées en param de navigation qu'on réintère dans les params de navigation de ce screen. Puis on set les navigationOptions de ce screen via ```CategoryScreen.navigationOptions = ({ navigation }) => {}``` :

```
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, FlatList, StatusBar} from 'react-native';
import SlideCategory from '../Components/SlideCategory';

const CategoryScreen = props => {

    const category = props.navigation.getParam('category');

    useEffect(() => {
        props.navigation.setParams({
            bgColor: category.attributes.field_couleur,
            title: category.attributes.title,
            color: '#fff'
        })
    }, [])

  return (
    <SafeView bgColor={category.attributes.field_couleur}>
      <Body>
        <View>
          <Description>{category.attributes.field_description}</Description>
        </View>
        <FlatList/>
      </Body>
    </SafeView>
  );
};

CategoryScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title'),
    headerStyle: {
      backgroundColor: navigation.getParam('bgColor'),
    },
    headerTintColor: navigation.getParam('color'),
  }
}

export default CategoryScreen;
```

### Un header custom
1. On désactive le header de react-navigation (```headerMode: 'none'```)
```
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    Theme: ThemeScreen,
    Video: VideoScreen,
  },
  {
    headerMode: 'none'
  }
);
```

2. On crée son composant Header qu'on pourra utiliser normalement dans nos screens
```
import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  background-color: ${props => (props.bgColor ? props.bgColor : 'white')};
`;

const Logo = styled.Image`
  height: 50;
`;

const Header = props => (
  <Container bgColor={props.bgColor}>
    <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
          <Text>goback</Text>
      </TouchableWithoutFeedback>
    <Logo source={require('../Assets/Images/cc-logo-transparent.png')} />
    {/* <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Search')}>
          <Icon
              name="search"
              color="black"
              size={25}
          />
      </TouchableWithoutFeedback> */}
  </Container>
);

export default Header;
```

usage dans un écran :

```
const CategoryScreen = props => {

  const category = props.navigation.getParam('category');

  return (
    <SafeView bgColor={category.attributes.field_couleur}>
      <Header navigation={props.navigation} bgColor={category.attributes.field_couleur}/>
      <Body>
        <View>
          <Description>{category.attributes.field_description}</Description>
        </View>
        ...
```

## Navigation avec Shared elements
Pour faire des transitions avec des éléments de l'écran précédent qui ont une transition vers un élément du nouvel écran.

```npm i --save react-navigation-shared-element```

## Styles CSS
```
npm i --save styled-components
```

## Installer des fonts
https://medium.com/@mehran.khan/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
Ajouter des polices:
1. Il faut que le nom du fichier de la police corresponde exactement au nom de la police (ce qu'on a dans postscript name quand on clique sur l'icone info (i) dans font book du mac)
2. Une fois que les polices ttf sont dans un répertoire, créer le fichier react-native.config.js à la racine du projet
```
module.exports = {
    assets: ['./App/Assets/Fonts/']
};
```
3. ```react-native link``` pour les ajouter
4. on utilise une police en mettant (pour une police ttf nommée AvantGarde-Medium.ttf) :
```
const Title = styled.Text`
  font-family: AvantGarde-Medium;
`;
```

## Gestion des Web services

Axios pour les appels HTTP (On préfère Axios à fetch pour sa simplicité et sa gestion des erreurs.)
lodash comme outil de manipulation js
html-entities pour manipuler les chaînes HTML encodées

```
npm i --save axios html-entities lodash
```

## gérer l'orientation par écran
```
npm i --save react-native-orientation-locker
```

## Player video natif
```
npm i --save react-native-video
```

## Slider
``` npm i --save @react-native-community/slider```

# Comment gérer les layers en absolute avec Android
Android ne gère pas bien les view en absolute avec des boutons touchable. Surtout si la view en dessous est une ScrollView !

La seule façon de gérer ça correctement est de placer le layer qui devra passer au-dessus, EN-DESSOUS de SCROLLVIEW dans le code !
après utiliser le zIndex pour le placer correctement.

# Comment gérer un back depuis un écran d'un stack vers un autre écran de stack
La solution : Lorsque l'écran initial appelle l'écran placé dans un autre stack, passer une variable indiquant de quelle route on vient.
Depuis l'écran pour faire un goBack, il suffit alors de faire :
```
onPress={() =>
  navigation.getParam('search')
    ? navigation.popToTop() && navigation.navigate('recherche')
    : navigation.goBack()
}
```

L'astuce ici est de faire un popToTop() qui ramène à la racine du stack puis d'aller à l'écran d'origine.


# Microsoft App Center

## iOS

### Add the SDK to the project

In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app:

```shell
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
```
### Integrate the SDK

- Run pod install from iOS directory to install CocoaPods dependencies.

Note: Integrating the iOS SDK requires CocoaPods. If you want to integrate manually, follow these steps.

- Create a new file with the name AppCenter-Config.plist with the following content. Don't forget to add this file to the Xcode project (right-click the app in Xcode and click Add files to <App Name>...).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
    <key>AppSecret</key>
    <string>secretkeyfromappcenter</string>
    </dict>
</plist>
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

## CheatSheet

- Dans le channel slack svod taper `/appcenter build master` pour builder et distribuer l'app dans TestFlight

# Firebase Crashlytics

## Pré-requis
- Avoir un compte google (googleservices@livingcolor.fr)
- se logguer ici : `https://console.firebase.google.com/`
- `Add Project`
- 
- Cliquez sur `Crashlytics` et `Set up Crashlytics`
- Renseignez le Bundle iD que vous trouverez dans l'App Store Connect
- Téléchargez le fichier `GoogleService-info.plist` proposé par Firebase
- 

## Installation
- `npm i @react-native-firebase/app`
- `npm i @react-native-firebase/crashlytics`
- `cd iOS` et `pod install --repo-update` 
- Dans le fichier 
- Builder l'app dans xcode et vérifier que les statistiques arrivent.


### ANDROID

Add to `android/build.gradle`

```javascript
buildscript {
  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository
  }
  dependencies {
    ...
    // Add this line
    classpath 'com.google.gms:google-services:4.3.2'
  }
}

allprojects {
  ...
  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository
    ...
  }
}
```

in android/app/build.gradle add crashlytics dependencies.

```javascript
dependencies {
...
    implementation 'com.crashlytics.sdk.android:crashlytics:2.10.1'
```

