import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');/**Se ajusta al width de la pantalla */

class Product extends React.Component {
  render() {
    const { navigation, product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    /**BLOCK ES COMO UN div */
    /**TouchableWithoutFeedback ES SIMILAR A UN BOTON con la posibilidad de tener feedback */
    /**Product.image porque image es pasado como props desde la screen que lo use */
    return (
     
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
         {/*ESTE BLOCK ES DIV DE PRODUCTO*/}
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
          >  
         {/*SIMILAR A BOTON DE PRODUCTO // IMAGEN*/}
          <TouchableWithoutFeedback //onPress={() => navigation.navigate('Pro', { product: product })}
          >
            <Block flex style={[styles.imageContainer, styles.shadow]}>
              {/*Imagen de producto*/}
              <Image source={{ uri: product.image }} style={imageStyles} />
            </Block>
          </TouchableWithoutFeedback>

          {/*TEXTO DE PRODUCTO*/}
          <TouchableWithoutFeedback //onPress={() => navigation.navigate('Pro', { product: product })}
          >
            <Block flex space="between" style={styles.productDescription}>
              <Text size={16} bold={true} style={styles.productTitle}>{product.nombre}</Text>
              <Block center>
                <Button shadowless color="info" style={[styles.button, styles.shadow]}>
                  Evaluar
                </Button>
              </Block>
            </Block>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </Block>
    );
  }
}

export default withNavigation(Product);

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    color: materialTheme.COLORS.BLANCO, 
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  button: {
    width: 100,
  },
});