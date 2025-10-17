import { View, Text } from 'react-native';
import React from 'react';
import TwoZustand from './TwoZustand';

const OneZustand = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
      <Text style={{fontSize:24}} >Zustand</Text>
      <TwoZustand />
    </View>
  );
};

export default OneZustand;