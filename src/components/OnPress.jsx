import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const OnPress = () => {
  let name = 'Zaeem';
  const [message, setMessage] = useState('');

  const getName = () => {
    setMessage('Functions');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button title="Press" onPress={getName} />
      <Text style={{ fontSize: 20, marginTop: 20 }}>{message}</Text>
    </View>
  );
};

export default OnPress;
