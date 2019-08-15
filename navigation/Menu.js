import React from "react";
import { DrawerItems } from 'react-navigation';
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Dimensions, Image, ImageBackground } from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Icon } from '../components/';
import { Images, materialTheme } from "../constants/";//IMPORTA CONSTANTES COMO IMAGENES EN LA NUBE

const { width } = Dimensions.get('screen');

const Drawer = (props) => (
  <Block style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block flex={0.3} style={styles.header}>
      <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.bgImage}
          resizeMode="cover"
        >

      {/*IMAGEN DE PERFIL EN LA BARRA(IMG PERFIL Y NOMBRE) */}
      <TouchableWithoutFeedback //onPress={() => props.navigation.navigate('Profile')} 
      >
        <Block center style={styles.profile}>
          <Image source={{ uri: props.profile.avatar}} style={styles.avatar} />
          <Text h5 color="white">{props.profile.name}</Text>
        </Block>
      </TouchableWithoutFeedback>

      {/*PLAN PRO DE PROFILE, SELLER Y RANKING(ESTRELLITAS)*/}
      <Block row>
        <Text size={18} style={styles.seller}>Total puntos: </Text>
        <Text size={18} color={materialTheme.COLORS.BLANCO}><Icon name="shape-star" family="GalioExtra" size={14} />
          700 
        </Text>
      </Block>
      </ImageBackground>
    </Block>

    <Block flex>
      {/*SCROLL VERTICAL EN BARRA LATERAL*/}
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <DrawerItems {...props} />
      </ScrollView>
    </Block>

  </Block>
);
//SE DEFINE EL PROFILE
const profile = {
  avatar: Images.Profile,
  name: 'Diana Gomez',
  //type: 'Seller',
  //plan: 'Pro',
  rating: 5.0
};

const Menu = {
  contentComponent: props => <Drawer {...props} profile={profile} />,
  drawerBackgroundColor: 'white',
  drawerWidth: width * 0.8,
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#000',
    activeBackgroundColor: 'transparent',
    itemStyle: {
      width: width * 0.75,
      backgroundColor: 'transparent',
    },
    labelStyle: {
      fontSize: 18,
      marginLeft: 12,
      fontWeight: 'normal',
    },
    itemsContainerStyle: {
      paddingVertical: 16,
      paddingHorizonal: 12,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
  },
};

const styles = StyleSheet.create({
  bgImage: {
    marginHorizontal: -27,
    height: 150,
  },
  container: {
    flex: 1,
  },
  header: {
    //backgroundColor: '#4B1958',
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: 'flex-end'
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: 16,
    color: materialTheme.COLORS.BLANCO,
  }
});

export default Menu;
