import React from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import GalioConfig from '../assets/fonts/galioExtra';

const GalioExtra = require('../assets/fonts/galioExtra.ttf');
const IconGalioExtra = createIconSetFromIcoMoon(GalioConfig, 'GalioExtra');

export default class IconExtra extends React.Component {
  state = {
    fontLoaded: false,
  }
  /**Comprueba que el componente se ha montado */
  async componentDidMount() {
    await Font.loadAsync({ GalioExtra: GalioExtra });
    this.setState({ fontLoaded: true });/**cambia estado */
  }

  render() {
    const { name, family, ...rest } = this.props;/**PARAMETROS QUE SE LE PASAN A COMPONENTE ICON */
    
    if (name && family && this.state.fontLoaded) {
      if (family === 'GalioExtra') {
        return <IconGalioExtra name={name} family={family} {...rest} />;
      }
      return <Icon name={name} family={family} {...rest} />;
    }

    return null;
  }
}
