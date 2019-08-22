import React from 'react';
import { ImageBackground, SafeAreaView, CheckBox, StyleSheet, StatusBar, Dimensions, Image, Platform, Modal, View, TouchableHighlight, Alert, TextInput } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('screen');
import * as Expo from "expo";
import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
import { HeaderHeight } from "../constants/utils";

export default class Question extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
        activeIndex:0,
        carouselItems: [
        {
            title:"Me gusta usarlo"
        },
        {
            title:"No lo usaría de nuevo"
        },
        {
            title:"Lo usaría de nuevo"
        },
        {
            title:"Nunca lo recomendaría a nadie"
        },
        {
            title:"Usaría otro sistema"
        },
        {
            title:"Lo usaría si es necesario"
        },
        {
            title:"Lo usaría"
        }
    ]}    
  };  

  _renderItem({item,index}){
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
          <Image style={styles.image} source={require('../assets/images/Huevo-Feliz.png')} />
          <Text size={20} bold={true}>{item.title}</Text>          
        </View>
    )
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    const { navigation, style } = this.props;
    
    return (
      <Block flex >
        
        <StatusBar barStyle="light-content" />
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ position: 'relative', zIndex: 2 }}
          >
            <Block center>
              <Block center>
                <Image style={styles.logo} source={require('../assets/images/evalogo.png')} />
              </Block>
              <Text bold style={styles.text} >
                ¿Deseas usar la aplicación +nombreAplicacion?
              </Text>
            </Block>
            

            <SafeAreaView style={styles.container}>           
              <TouchableHighlight
                onPress={
                    () => { this.carousel._snapToItem(this.state.activeIndex-1)}
                }>
                <Image source={require('../assets/images/leftarrow.png')}/>
              </TouchableHighlight>

              <View>
                <Carousel
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={250}
                  itemWidth={250}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) }
                />
              </View>
              
              <TouchableHighlight            
                  onPress={
                      () => { this.carousel._snapToItem(this.state.activeIndex+1)}
                  }>
                  <Image source={require('../assets/images/rightarrow.png')}/>                
              </TouchableHighlight>         
            </SafeAreaView>
            <View>
              <Block center>                
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
              </Block> 
            </View>

            <View style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              }}>
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
                  onPress={() => this.props.navigation.navigate('ProgressQuestion2')}>

                  SIGUIENTE
                </Button>
              </Block>            
            </View>

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
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  
  image: {
    justifyContent: 'center',
    height: 188,
    width: 148,
  },
  logo: {
    height: 98,
    width: 98,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
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
    color: materialTheme.COLORS.NEGRO, 
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  text: {
    color: materialTheme.COLORS.NEGRO,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});