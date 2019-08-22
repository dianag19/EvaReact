import React from 'react';
import axios from 'axios';
import { StyleSheet, Dimensions, ScrollView, View, ImageBackground } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aplications: [],
      name: '',
      photo: '',
    }
  }

  renderSearch = () => {
    const { navigation } = this.props;
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />
    /*iconCamera es el icono de lupa*/
    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconCamera}
        placeholder="Qué aplicación estás buscando?"
      //onFocus={() => navigation.navigate('Pro')}
      />
    )
  }


  componentDidMount() {
    axios.get('https://evadjango.herokuapp.com/aplications.json').then(res => {
      console.log(res)
      this.setState({ aplications: res.data });
    });
  }

  WholeNews() {
    return this.state.aplications.map(function (app, i) {
      console.log("app desde home " + app)
      return (

        <Product product={app} style={{ margin: theme.SIZES.BASE }} />

      );
    });
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          {/*<Product product={products[0]} horizontal />*/}

          <Block flex row>
            <Product product={products[0]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[1]} />
          </Block>
          <Block flex row>
            <Product product={products[2]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[3]} />
          </Block>
        </Block>
        <Block>
          <Text>
            Aplicaciones
          </Text>

        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>

        <Block flex>
          {/*<Product product={products[0]} horizontal />*/}

          <Block flex row>
            {this.WholeNews()}
          </Block>

        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
