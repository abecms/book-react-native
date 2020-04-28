# Navigation
Modules permettant de créer toute navigation dans l'app

## Install
```
npm i --save react-navigation react-navigation-stack react-navigation-tabs react-native-gesture-handler react-native-reanimated
```

## Créer une bottom bar
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

## Afficher ou non la bottom bar
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

## Header
Il y a 2 moyens de faire le header.
1. En utilisant le header de navigation (très bien pour des navigations qui ne nécessitent pas beaucoup de cusomization)
2. En bypassant le header de navigation et en faisant son propre composant (très souple)

## Le header de react-navigation
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

## Un header custom
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
