import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image, Platform, Modal, View, TouchableHighlight, Alert, TextInput } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import * as Expo from "expo";
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { HeaderHeight } from "../constants/utils";

export default class Question extends React.Component {
   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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
                onPress={() => {this.setModalVisible(true); }}
              >
                JUSTIFICAR RESPUESTA
              </Button>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={materialTheme.COLORS.INFO}
                onPress={() => this.props.navigation.navigate('ProgressQuestion')}>

                SIGUIENTE
              </Button>
            </Block>            

             <View style={{marginTop: 22}}>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                  <View>
                  <Block>
                    <Text bold style={styles.text} >
                      ¿Por qué y cuándo sentiste esa(s) emoción(es)?
                    </Text>
                  </Block>
                  <Block center>
                    <View style={{padding: 10}}>
                      <TextInput
                        style={{height: 80, padding: 10, fontSize: 20}}
                        placeholder="Justifica tu respuesta"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                      />
                    </View>
                  </Block>
                    <Block center>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>ACEPTAR</Text>
                      </TouchableHighlight>
                    </Block>
                  </View>
                </View>
              </Modal>

            </View>

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
