import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((result) => {
        setMyData(result.data);
      })
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>GET_API Method</Text>
      {
        myData.map((item) => (
          <Text 
            key={item.id}
            style={{ fontSize: 30, marginBottom: 10 }}
          >
            {item.name}
          </Text>
        ))
      }
    </View>
  );
};

export default GET_API;
