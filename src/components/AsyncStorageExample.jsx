import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');

  const saveUsername = async() => {
    await AsyncStorage.setItem('value', username );
    setUsername('');
    Alert.alert('username Saved');
  };

   const getUsername = async() => {
    const SavedtUsername = await AsyncStorage.getItem('value');
    if (SavedtUsername) {
      setStoredUsername(SavedtUsername);
    }
    else{
    Alert.alert('username not found');
    }
  };

  const removeUsername = async() => {
    await AsyncStorage.removeItem('value');
    setStoredUsername('');
    Alert.alert('username removed');
  };

  useEffect(() => {
    getUsername();
  },[]);

  return (
    <View>
      <TextInput
      placeholder='Enter Username'
      value={username}
      onChangeText={setUsername}
      />

      <Button title='Save Username' onPress={saveUsername} />
      <Button title='Get Username' onPress={getUsername} />
      <Button title='Remove Username' onPress={removeUsername} />


      <Text style={{fontSize:30,marginTop:10,color:'red'}} >Stored Username: {storedUsername} </Text>
    </View>
  );
};

export default AsyncStorageExample;