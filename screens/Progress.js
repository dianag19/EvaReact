import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import * as Expo from "expo";
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Progress extends React.Component {

  render() {
    
  return (
    <Block flex style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        {/*<StatusBar barStyle="light-content" />*/}
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{position:'relative', zIndex: 2}}
          >
            <Block center>
              <Block >
                <Image style={styles.logo} source={require('../assets/images/quebrado.png')} />
              </Block>
              <Text style={styles.text} >
                Puntos ganados: 100
              </Text>
              <Text style={styles.text} >
                Felicitaciones, sigue evaluando!
              </Text>
            </Block>

            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => this.props.navigation.navigate('Question')}
                >
               SIGUIENTE
              </Button>
            </Block>

          </Block>
        </Block>
      </ImageBackground>
    </Block>
  )
}
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
    height: 158,
    width: 310,
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
