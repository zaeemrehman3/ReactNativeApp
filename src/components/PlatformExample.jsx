import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PlatformExample = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.meetText} >Welcome to ZRTech</Text>
      Platform.OS === 'ios' : 'Welcome IOS Users!' : 'Welcome Android Users!'
      <Text style={styles.platformText} >Meet our CEO Zaeem Rehman</Text>
    </View>
  );
};

export default PlatformExample;

const styles = StyleSheet.create({

    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : '#6631edff',
    },

    meetText : {
        fontSize : 24,
        color : '#dcd1f7ff',
        marginBottom : 20,
    },

    platformText : {
        fontSize : 18,
        color : '#000',
    },


});