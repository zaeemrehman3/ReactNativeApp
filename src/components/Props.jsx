import { View, Text ,Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const props = () => {
    const [count , setCount] = useState(0);

    const [item , setItem] = useState(10);

  return (
    <View>
      <Text style={ {fontSize : 30 }}>props</Text>
      <Button title='Counter' onPress={ () => setCount ( count + 1 ) } />

      <Button title='item' onPress={ () => setItem ( item + 10 ) } />

      <Child data={count} item={item} />

    </View>

  )
}

export default props