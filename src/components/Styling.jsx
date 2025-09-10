import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../style/style'

const Styling = () => {
  return (
    <View>
      <Text style={{ fontSize : 30 , backgroundColor: 'crimson' , 
      color: 'white' }}>Inline Styling</Text>

      <Text style={style.text}>Internal Styling</Text>

      <Text style={styles.text}>External Styling</Text>

      <Text style={ styles.text , style.text , {fontSize : 30 , backgroundColor: 'crimson' , 
      color: 'white'} }>Mix Styling</Text>

    </View>
  )
}

const style = StyleSheet.create({
  text : {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 30,
    marginVertical: 10,
    padding: 6,
    textAlign: 'center',
    borderColor: 'lightgreen',
    borderWidth: 3,
  }


})

export default Styling 