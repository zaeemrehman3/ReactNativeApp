import { FlatList } from 'react-native';
import React from 'react';
import { users } from './userContactinfo';
import ContactItem from '../../components/ContactItem'
import { Text } from 'react-native';
import { styles } from './style';


const ContactListScreen = () => {
  const renderItem= ({item}) => <ContactItem name={item.name} email={item.email}  />;
  return (
   <FlatList 
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id }
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.heading} >Contacts</Text>}
   
   />
  );
};

export default ContactListScreen;