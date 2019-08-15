import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import * as Expo from "expo";
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { HeaderHeight } from "../constants/utils";

export default class Question extends React.Component {
  render() {

    const { navigation } = this.props;
    
    return (
      <Block flex style={styles.container}>
        
        <StatusBar barStyle="light-content" />
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ position: 'relative', zIndex: 2 }}
          >
            <Block center>
              <Block center>
                <Image style={styles.logo} source={require('../assets/images/evalogo.png')} />
              </Block>
              <Text bold style={styles.text} >
                ¿Qué sentiste cuando usaste la aplicación +nombreAplicacion?
              </Text>
            </Block>
            <Block center>
              <Image style={styles.image} source={require('../assets/images/Feliz.png')} />
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => navigation.navigate('ProgressQuestion')}>

                SIGUIENTE
              </Button>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={materialTheme.COLORS.INFO}
              >
                JUSTIFICAR RESPUESTA
              </Button>
            </Block>
          </Block>
        </Block>
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
    height: 168,
    width: 138,
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
    color: materialTheme.COLORS.NEGRO,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
