import { View, Text } from 'react-native'
import React from 'react'

const child = (props) => {
    console.log(props.data);
    let count = props.data;

     let item = props.item;
    
  return (
    <View>
      <Text style={ { fontSize : 30 }} >child</Text>
      <Text style={ { fontSize : 30 }} >{count}</Text>
        <Text style={ { fontSize : 30 }} >{item}</Text>

    </View>
  )
}

export default child