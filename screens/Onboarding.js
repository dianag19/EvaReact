import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/*}
        <Block flex center>
          <ImageBackground
            source={{  uri: Images.Onboarding }}
            style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
          />
        </Block>
        */}
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block>
              <Block>
                <Image style={styles.logo} source={require('../assets/images/evalogo.png')} />
              </Block>
              <Text size={16} color={materialTheme.COLORS.NEGRO}>
                Califica tus aplicaciones favoritas!
              </Text>

            </Block>

            <Block center>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.REDLOGO}
                onPress={() => navigation.navigate('Home')}>
                INGRESAR COMO ESTUDIANTE
              </Button>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.PRIMARY}
                onPress={() => navigation.navigate('Prueba')}>
                INGRESAR COMO ADMINISTRADOR
              </Button>
            </Block>

          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 128,
    width: 128,
  },
  container: {
    backgroundColor: theme.COLORS.BLANCO,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
