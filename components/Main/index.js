import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import style from './style';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'batman',
    }
  }

  static navigationOptions = {
    title: 'My-first-app',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#FFF'
  }
  
  render() {
    return (
      <View style={style.container}>
        <Text>Welcome to my first React Native App.</Text>
        <TextInput placeholder='ex: Batman' onChangeText={(text) => this.setState({text})} />
        <Button onPress={() => this.props.navigation.navigate('Shows', {search: this.state.text})} title='Click me' />
      </View>
    )
  }
}