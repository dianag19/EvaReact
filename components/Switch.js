import React from 'react';
import { Switch, Platform } from 'react-native';

import materialTheme from '../constants/Theme';

export default class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor = Platform.OS === 'ios' ? null :
      Platform.OS === 'android' && value ? materialTheme.COLORS.SWITCH_ON : materialTheme.COLORS.SWITCH_OFF;

      /**SWITCH son los de settings, activado o desactivado */
    return (
      <Switch
        value={value}
        thumbColor={thumbColor}
        ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
        trackColor={{ false: materialTheme.COLORS.SWITCH_OFF, true: materialTheme.COLORS.SWITCH_ON }}
        {...props}
      />
    );
  }
}