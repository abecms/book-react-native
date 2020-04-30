# Tips and tricks
## Renommer un projet react-native

Utilisez le package npm `react-native-rename`
- Installation en global sur le poste `npm install react-native-rename -g`
- Utilisation

### Usage

At he project root:
```shell
react-native-rename <newName>
```
With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```shell
react-native-rename <newName> -b <bundleIdentifier>
```
Then

in `iOS` directory run `pod install`

## Développement android
Si un soucis de communication apparait entre metro et l'application, il faut ajouter l'adresse IP du serveur dans le fichier `android/app/src/main/res/xml/network_security_config.xml` :
````
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        ...
        <domain includeSubdomains="true">xx.xx.xx.xx</domain>
        ...
    </domain-config>
</network-security-config>
````
Cette configuration spécifique au SDK Admob mediation permet au SDK de gérer le cache localement.

## Pour compiler l'app et la tester en APK
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

# reset le cache quand un module ne s'installe pas correctement
```npm start -- --reset-cache```

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