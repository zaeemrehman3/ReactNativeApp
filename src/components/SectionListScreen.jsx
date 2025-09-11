import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const listItems = [
    {
        title : 'Fruits',
        data : [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'banana' },
            { id: 3, name: 'Mango' },
        ],
    },

     {
        title : 'Vegetables',
        data : [
            { id: 4, name: 'Potato' },
            { id: 5, name: 'Carrot' },
            { id: 6, name: 'Tomato' },
        ],
    },
];

const SectionListScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item} >
            <Text style={{ fontSize:30}}  >{item.name}</Text>
        </View>
    );
    const renderSectionHeader = ({ section }) => (
        <View style={styles.header} >
            <Text style={styles.headertitle}  >{section.title}</Text>
        </View>
    )
  return (
    <View style={styles.container} >
        <SectionList
        sections={listItems}
        renderItem={renderItem} 
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#c5b2b2ff',
        paddingTop : 10,
    },

    item : {
        backgroundColor : '#add8e6',
        padding : 10,
        marginVertical : 5,
        borderRadius: 5,
    },

    title : {
        fontSize : 25,
    },

    header : {
        backgroundColor : '#90ee90',
        padding : 10,
        borderRadius : 5,
        marginVertical : 5,
    },
    headertitle : {
        fontSize : 20,
        fontWeight : 'bold',
    },


});

export default SectionListScreen