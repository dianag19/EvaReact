import React from 'react';
import { Easing, Animated, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import { Block, Text, theme } from "galio-framework";

import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';

import Menu from './Menu';
import Header from '../components/Header';
import { Drawer } from '../components/';
import PruebaScreen from '../screens/Prueba';
import Question from '../screens/Question';
import Progress from '../screens/Progress';
import Question2 from '../screens/Question2';
import Progress2 from '../screens/Progress2';
import Question3 from '../screens/Question3';
import Progress3 from '../screens/Progress3';
import Question4 from '../screens/Question4';
import Progress4 from '../screens/Progress4';
import Question5 from '../screens/Question5';
import Progress5 from '../screens/Progress5';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index
    const width = layout.initWidth
    
    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    })
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1],
    })
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0],
    })

    const scaleWithOpacity = { opacity }
    const screenName = "Search"

    if (screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] }
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header white transparent title="Profile" navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Settings" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ComponentsStack = createStackNavigator({
  Components: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Components" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const Prueba = createStackNavigator({
  CrearApp: {
    screen: PruebaScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Crear aplicación" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ProgressStack = createStackNavigator({
  ProgressQuestion: {
    screen: Progress,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Progreso" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});
const QuestionStack = createStackNavigator({
  Question: {
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Pregunta" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ProgressStack2 = createStackNavigator({
  ProgressQuestion2: {
    screen: Progress2,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Progreso 2" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});
const QuestionStack2 = createStackNavigator({
  Question2: {
    screen: Question2,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Pregunta 2" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ProgressStack3 = createStackNavigator({
  ProgressQuestion3: {
    screen: Progress3,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Progreso 3" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});
const QuestionStack3 = createStackNavigator({
  Question3: {
    screen: Question3,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Pregunta 3" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ProgressStack4 = createStackNavigator({
  ProgressQuestion4: {
    screen: Progress4,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Progreso 4" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});
const QuestionStack4 = createStackNavigator({
  Question4: {
    screen: Question4,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Pregunta 4" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const ProgressStack5 = createStackNavigator({
  ProgressQuestion5: {
    screen: Progress5,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Progreso 5" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});
const QuestionStack5 = createStackNavigator({
  Question5: {
    screen: Question5,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Pregunta 5" navigation={navigation} />,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  transitionConfig,
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header search tabs title="Principal" navigation={navigation} />,
    })
  },
  Pro: {
    screen: ProScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header back white transparent title="" navigation={navigation} />,
      headerTransparent: true,
    })
  },
},
{
  cardStyle: { 
    backgroundColor: '#EEEEEE', //this is the backgroundColor for the app
  },
  transitionConfig,
});
//BARA LATERAL IZQUIERDA, ITEMS DIFERENTES A SCREEN
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        drawerLabel: () => {},
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Home" title="Principal" />
        )
      }
    },    
    Profile: {
      screen: ProfileStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Profile" title="Perfil" />
        ),
      }),
    },
    Prueba: {
      screen: Prueba,
      navigationOptions: {
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Prueba" title="Crear aplicación" />
        )
      }
    },
    ProgressQuestion: {
      screen: ProgressStack,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    Question: {
      screen: QuestionStack,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    ProgressQuestion2: {
      screen: ProgressStack2,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    Question2: {
      screen: QuestionStack2,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    ProgressQuestion3: {
      screen: ProgressStack3,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    Question3: {
      screen: QuestionStack3,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    ProgressQuestion4: {
      screen: ProgressStack4,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    Question4: {
      screen: QuestionStack4,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    ProgressQuestion5: {
      screen: ProgressStack5,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
    Question5: {
      screen: QuestionStack5,
      navigationOptions: {
        drawerLabel: () => {},
      }
    },
  /*
    Woman: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Woman" />
        ),
      }),
    },
    Man: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Man" />
        ),
      }),
    },
    Kids: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Kids" />
        ),
      }),
    },
    NewCollection: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="New Collection" />
        ),
      }),
    Settings: {
      screen: SettingsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Settings" title="Settings" />
        ),
      }),
    },
    Components: {
      screen: ComponentsStack,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Components" title="Components" />
        ),
      }),
    },
    MenuDivider: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: () => <Block style={{marginVertical: 8}}><Text>{` `}</Text></Block>,
      },
    },
    SignIn: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Sign In" />
        ),
      }),
    },
    SignUp: {
      screen: ProScreen,
      navigationOptions: (navOpt) => ({
        drawerLabel: ({focused}) => (
          <Drawer focused={focused} screen="Pro" title="Sign Up" />
        ),
      }),
    },*/
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;