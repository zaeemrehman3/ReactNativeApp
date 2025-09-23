import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API_LIST = () => {
    const [myData, setMyData] = useState([]);
    useEffect(()=> {
        axios.get('http://10.0.2.2:3000/users')
        .then((response)=> {
            setMyData(response.data);
        });

    },[]);
    const renderItem = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
        </View>
    );
  return (
    <View>
        <Text>Users</Text>
        <FlatList 
        data={myData}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id.toString() }
        />
    </View>
  );
};

export default GET_API_LIST;