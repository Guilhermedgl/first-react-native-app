/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

const Detail = (props) => {
  const { item } = props.navigation.state.params;

  return (
    <ImageBackground source={{ uri: item.show.image.original }} style={{ width: '100%', height: '100%', opacity: 0.8, backgroundColor: '#000000' }}>
      <View>
        <Image source={{ uri: item.show.image.medium }} />
      </View>
      <View>
        <Text>{item.show.name}</Text>
        <Text>Type: {item.show.type}</Text>
        <Text>Language: {item.show.language}</Text>
        <Text>Premiered: {item.show.premiered}</Text>
      </View>
    </ImageBackground>
  );
};

Detail.navigationOptions = {
  title: 'Detail',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#FFF',
};

export default Detail;
