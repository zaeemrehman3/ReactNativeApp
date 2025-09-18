import React, { Component } from 'react';
import {  Text, View } from 'react-native';
import SecondClass from './SecondClass';

class ClassComponents extends Component {
    render(){
        const age = 20;
        return(
            <View>
                <Text style={{ fontSize : 30,fontWeight : 'bold',
                color : 'brown',textAlign : 'center',}} >
                    Class Components</Text>

                <SecondClass data={age} />    
            </View>
        
        );
    };
};



export default ClassComponents;