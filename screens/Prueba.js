import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image , Button } from 'react-native';
//import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';


export default class PruebaScreen extends React.Component {
 constructor(props) {
    super(props);

    this.state  = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      //base_url: "https://pyconlunchbeta.azurewebsites.net"
    }
  }

  componentDidMount() {
    this.fetchDataFromApi();

  }

  fetchDataFromApi = ()  => {
    var numero = 1;
    const url = 'http://127.0.0.1:8000/api/aplications/?format=json';

    this.setState({ loading: true });

    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    // fetch('http://127.0.0.1:8000/api/aplications/1.json')
    //   .then(res => res.json())
    //   .then(resJson => {
    //     console.log("entra a data");
    //     this.setState({
    //       data: resJson,
    //       error: null,
    //       loading: false,
    //       refreshing: false
    //     });
    //   })
    //   .catch(error => {
    //       console.log("error api");
    //     this.setState({ error, loading : false });
    //   })
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.fetchDataFromApi();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          marginTop: "3%"
        }}
      />
    );
  };

 verState = () =>{
   alert(this.state.data);
   console.log("entra");
 }

  render() {
    return (
      <View containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <Text>aqui data:{this.state.data}</Text>
          <Button
          title="ver estado"
          onPress={this.verState}
          color="#E91E63"
          />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.nombre}</Text>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   subtitleView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 110
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  locText: {
    paddingLeft: 10,
    color: 'grey',
    marginTop: 6,
    fontSize: 12
  },
  titleText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600,
    height: 800
  }
});