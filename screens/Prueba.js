import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Prueba extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    
    return fetch('https://evadjango.herokuapp.com/api/aplications.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.debug("entra a response");
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
        console.debug("error en api");
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.nombre} {item.descripcion}</Text>}
          keyExtractor={({id}, index) => id}
        />
        <Text>Algo dios</Text>
      </View>
    );
  }
}
