import { View, Text } from 'react-native';
import React from 'react';
import SubChild from './SubChild';

const FirstChild = () => {
  return (
    <View>
        <SubChild />
    </View>
  );
};

export default FirstChild;