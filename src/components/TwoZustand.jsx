import { View, Text, Button } from 'react-native';
import React from 'react';
import { useCounterStore } from '../zustand/store';

const TwoZustand = () => {
    const {count, increment, decrement} = useCounterStore();
  return (
    <View>
      <Text>Counter: {count} </Text>
      <Button title='Increment' onPress={increment} />
      <Button title='Decrement' onPress={decrement} />
    </View>
  );
};

export default TwoZustand;