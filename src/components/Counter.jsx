import { View, Text, Button } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/slice/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.Counter.value);
  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />                        
      <Button title='Decrement' onPress={() => dispatch(decrement())} />                        
      <Button title='Reset' onPress={() => dispatch(reset())} />                        
    </View>
  );
};

export default Counter;