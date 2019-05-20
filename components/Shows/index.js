import React, { Component } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import api from '../service/api';
import style from './style';

export default class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const search = navigation.getParam('search');
    api.get(search)
    .then(res => this.setState({ data: res.data }))
    .catch(error => console.log(error));
  }
  
  static navigationOptions = {
    title: 'List',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#FFF'
  }

  renderItem = ({ item }) => {
    return (
      <View style={style.container}>
        <View>
          <Image style={style.image} source={{ uri: item.show.image.medium }} />
        </View>
        <View style={style.textContainer}>
          <Text style={style.title}>{item.show.name}</Text>
          <Text style={style.text}>Type: {item.show.type}</Text>
          <Text style={style.text}>Language: {item.show.language}</Text>
          <Text style={style.text}>Premiered: {item.show.premiered}</Text>
          <TouchableOpacity style={style.touch} onPress={() => this.props.navigation.navigate('Detail', {item})}><Text style={style.touchText}>See more</Text></TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList 
        data={this.state.data}
        keyExtractor={(item) => item.show.id}
        renderItem={this.renderItem} />
      </View>
    )
  }
}