# DEV
## CodePush
Permet de màj le code sans passer par le store !
https://jolicode.com/blog/react-native-et-codepush-deployer-sans-compter

S'installer code-push : ```npm i -g code-push```
Déployer en staging : ```code-push release-react cc-ios ios```
Déployer en prod : ```code-push release-react cc-ios ios --deploymentName Production```

Lister les deployment keys d'une app :
```code-push deployment list cc-ios --displayKeys```

## Màj RN 0.62
- fix de bfads
- (https://react-native-community.github.io/upgrade-helper/?from=0.61.5&to=0.62.2)


# Deeplinking
https://invertase.io/oss/react-native-firebase/v6/dynamic-links/quick-start
L'implémentation du deeplinking est fait grace à Firebase Dynamcis Links. Cela permet de s'affranchir de toute la partie configuration coté site web et surtout cela permet d'être sélectif au niveau des liens qui s'ouvrent au sein de l'application.

## 1. Configuration Firebase
Il faut dans un premier temps activer l'option depuis la console Firebase. A l'activation Firebase propose de générer un domaine automatique ou de personnaliser ce domaine.

## 2. Installation
```
npm install @react-native-firebase/dynamic-links --save
```

## 3. Configuration iOs
Il faut ajouter au sein du `Info.plist` l'entrée ci-dessous (avec le domaine utilisé à l'étape 1) :
````
<key>FirebaseDynamicLinksCustomDomains</key>
<array>
  <string>https://$domain</string>
</array>
````

Il faut ensuite ajouter une capabilities `Associated domains` et ajouter les domaines suivants (modifier les variables en fonction de la configuration du projet):
````
applinks:$packageName.app.goo.gl
applinks:$domain
````

Pour finir il faut ajouter une Url Type (dispo dans Xcode depuis l'onglet Info)
Saisir un `identifier` (peu importe la valeur), et un `URL Schemes` (qui correspond au nom du package)

## Mettre en place la fonctionnalité de download (vidéo / son / fichier)

## Créer un bouoton swipeable comme gmail (on swipe, une action apparait que l'on peut déclencher)

Il faut utiliser la librairie `react-native-gesture-handler/Swipeable`

