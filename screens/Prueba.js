import React from 'react';
import axios from 'axios';
import { FlatList, ActivityIndicator, StyleSheet, Dimensions, Text, View, TextInput } from 'react-native';
import { Block, Button, theme } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
import materialTheme from '../constants/Theme';

export default class Prueba extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aplications: [],
      nombre: '',
      descripcion: '',
      image: ''
    }
  }

  /*
    handleChange = event => {
      this.setState({
        nombre: event.target.value,
        descripcion: event.target.value
      })
    }
    handleSubmit = event => {
      event.preventDefault();
  
      const aplication = {
        nombre: this.state.nombre,
        descripcion: this.state.descripcion,
      }
  
      axios.post('https://evadjango.herokuapp.com/aplications/',{aplication})
      .then(res =>{
        console.log(res);
        console.log(res.data);
      })
    }
  */

  componentDidMount() {
    axios.get('https://evadjango.herokuapp.com/aplications.json').then(res => {
      console.log(res)
      this.setState({ aplications: res.data });
    });
  }

  /*enviarApp(url,data) {
    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }*/
  updateValue(text, field) {
    console.log(text)
    if (field == 'nombre') {
      console.log("entra a cambiar" + field)
      this.setState({
        nombre: text,
      })
    } else if (field == 'descripcion') {
      console.log("entra a cambiar" + field)
      this.setState({
        descripcion: text,
      })
    }
  }

  submit() {
    console.log("entra a submit")
    let collection = {}

    collection.nombre = this.state.nombre,
    collection.descripcion = this.state.descripcion
    console.log(collection)

    var url = 'https://evadjango.herokuapp.com/aplications/';

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }
  cleanState(){
    this.setState({
      nombre: '',
      descripcion: '',
    })
  }
  alertSuccess(){
    alert('Aplicacion creada')
  }
  render() {

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Block>
          <Text>Nombre de la Aplicación</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Nombre de la aplicación..."
            onChangeText={(text) => this.updateValue(text, 'nombre')}
            value={this.state.nombre}
          />

          <Text>Descripcion</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Descripción de la aplicación..."
            onChangeText={(text) => this.updateValue(text, 'descripcion')}
            value={this.state.descripcion}
          />

        </Block>
        <Button
          shadowless
          style={styles.button}
          color={materialTheme.COLORS.REDLOGO}
          //onPress={() => props.signIn()}>
          onPress={() => this.submit()}
        >CREAR APLICACION</Button>

        <FlatList
          data={this.state.aplications}
          renderItem={({ item }) => <Text>{item.nombre} {item.descripcion}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
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
    //fontWeight: 'bold',
    textAlign: 'center',
  }
});

