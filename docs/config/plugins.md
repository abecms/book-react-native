# Plugins
Pour tous les plugins RN
Une fois l'install faite, aller dans /ios et faire ```pod update```

## react-native-splash-screen
https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae

### Install
```
npm i --save react-native-splash-screen
```

### IOS
Dans AppDelegate.m:
- Ajouter ```#import "RNSplashScreen.h" ```
- ``` [RNSplashScreen show];``` à la fin de la méthode didFinishLaunchingWithOptions (avant le return YES)


## react-native-vector-icons
Idéal pour utiliser les icones fontawesome ou autre
### Install

```
npm i --save react-native-vector-icons
```

puis copier les fonts à utiliser depuis le package dans node_modules dans un répertoire du projet
Ajouter cette ligne dans ios/pod file:
```
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```
puis dans ios : ```pod install```

### Créer des fonts d'icones
Créer la font : https://medium.com/sketch-app-sources/how-to-create-font-icons-from-a-sketch-icon-library-e94fe93ed00c

1. Exporter les icons au format SVG depuis sketch (source : https://medium.com/sketch-app-sources/how-to-create-font-icons-from-a-sketch-icon-library-e94fe93ed00c)
2. Générer la font https://d.pr/v/YVrAsz


## Styles CSS
```
npm i --save styled-components
```

## Installer des fonts
Ajouter des polices:
1. Il faut que le nom du fichier de la police corresponde exactement au nom de la police (ce qu'on a quand on clique bouton droit/info sur le fichier)
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

## Player video natif
```
npm i --save react-native-video
```

# Install asyncstorage
Sur Android, si cela plante a la compile, c'est que la limite des 64k files a été franchie.

Mettre `multiDexEnabled true` dans android/app/build.gradle:
```
defaultConfig {
    applicationId "com.yoodoogood.app"
    minSdkVersion rootProject.ext.minSdkVersion
    targetSdkVersion rootProject.ext.targetSdkVersion
    versionCode 1
    versionName "0.1.9"
    multiDexEnabled true
}
```

# Install Lottie
- Just create a Blank Swift file on XCode. And click on the "Create Bridge Header" after this.
- last go to Build Settings -> Always embed swift standard libraries, make it Yes.
- relaunch a pod install

It should work

# react-native-asset
j’ai centralisé le preloading des assets de son : Ils sont tous preload au moment du chargement de l’app, pendant le splashscreen que je prolonge de 2 secondes
Pour utiliser les sons, il suffit d’important la librairie des sons préparée :
import {sounds} from ‘Screens/AuthLoading’;
Puis d’utiliser les sons que l’on veut :
   ```sounds[‘mine_ambient’].pause();```
   ```sounds[‘mine_loser’].play();```


Pour linker automatiquement les sons dans Android et iOS :
1. Déposer les sons dans le répertoire Assets/Sounds
2. Le fichier react-native.config.js contient ce repertoire
```
module.exports = {
  assets: [
    './src/Assets/Fonts/',
    './src/Assets/Sounds/'
  ]
};
```
3. utiliser ```./node_modules/.bin/react-native-asset``` pour les déplacer et lier dynamiquement.
4. Les preload dans AuthLoading.js ex. :
```sounds.dobble_answer_ko = new Player('dobble_answer_ko.mp3')```

# react-native-mopub-sdk

Pas de difficultés particulières pour l'initilisation du module sur les bannières / interstitiel.
Il faut bien penser à unsubscribe les différents events que l'on écoute afin de ne pas avoir de comportements bizarres.

Par contre les rewards sont conditionnés pour s'afficher avec des paramètres spécifiques (montant du reward et unité du reward).
Il faut donc faire un appel `RNMoPubRewardedVideo.availableRewardsForAdUnitID` pour connaitre ces infos.
Dans notre cas, même si nous n'utilisons pas ces informations, cet appel est indispensable pour afficher correctement les rewards.

## Navigation avec Shared elements
Pour faire des transitions avec des éléments de l'écran précédent qui ont une transition vers un élément du nouvel écran.

```npm i --save react-navigation-shared-element```

## gérer l'orientation par écran
```
npm i --save react-native-orientation-locker
```

## Slider
``` npm i --save @react-native-community/slider```

