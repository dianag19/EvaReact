import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import * as Expo from "expo";
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Onboarding extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }

  goToHome(navigation) {
    navigation.navigate('Home')
  }
  signIn = async () => {
    console.log("entra a signin")
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: "445366866611-g1pbnlb5vdhplmnmolndmpksmqddjsij.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        }),
          console.log("despues de navigate dice signed es :" + this.state.signedIn)
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("eror", e)
    }
  }

  render() {
    const { navigation } = this.props;
    const { isLoggedIn } = this.state.signedIn;
    const { signIn } = this.signIn

    return (
      <Block flex style={styles.container}>
        <Block flex space="between" >
            {this.state.signedIn ? (
              this.goToHome(navigation)
            ) : (
              <Login signIn={this.signIn} navigation={navigation}/>
                )}
        </Block>
      </Block>
    )
  }
}
const Login = props => {
  return (
    <Block flex style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" />
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{position:'relative', zIndex: 2}}
          >
            <Block center>
              <Block center>
                <Image style={styles.logo} source={require('../assets/images/evalogo.png')} />
              </Block>
              <Text style={styles.text} >
                Califica tus aplicaciones favoritas!
              </Text>
            </Block>

            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.REDLOGO}
                onPress={() => props.signIn()}>
                LOGIN CON GOOGLE
              </Button>
              <Block />
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => props.navigation.navigate('Prueba')}>
                INGRESAR COMO ADMINISTRADOR
              </Button>
            </Block>

          </Block>
        </Block>
      </ImageBackground>
    </Block>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  image: {
    justifyContent: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  text: {
    color: materialTheme.COLORS.BLANCO,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
