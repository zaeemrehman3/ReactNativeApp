import { View, Text , Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHooks = () => {
    const [name , setName] = useState('Zaeem');
    const updateName = () => {
       setName('Rehman');
    }

  return (
    <View>
      <Text style={ { fontSize : 30 } }  >UseStateHooks</Text>
       <Text style={ { fontSize : 30 } }  > Name: {name} </Text>
       <Button title='Press' onPress={updateName} />

    </View>
  )
}

export default UseStateHooks