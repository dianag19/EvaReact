import React from 'react';
import axios from 'axios';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Prueba extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      aplications:[],
    
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

  componentDidMount(){ 
      axios.get('https://evadjango.herokuapp.com/aplications.json').then(res =>{
        console.log(res)
        this.setState({aplications: res.data});
      });
  }



  render(){

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.aplications}
          renderItem={({item}) => <Text>{item.nombre} {item.descripcion}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );

    /*
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre Aplicacion
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>
        <label>
          Descripcion Aplicacion
          <input type="text" name="descripcion" onChange={this.handleChange}/>
        </label>
        <button type="submit">Add</button>
      </form>
    );*/
  }
}
