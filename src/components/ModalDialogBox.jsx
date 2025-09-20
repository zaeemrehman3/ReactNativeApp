import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';

const ModalDialogBox = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container} >
        <TouchableOpacity style={styles.openButton}
        onPress={()=> setModalVisible(true)}
        >
            <Text style={styles.buttonText} >Show Modal</Text>
        </TouchableOpacity>
        <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={()=> setModalVisible(false)}
        >
            <View style={styles.modalOverlay} >

                <View style={styles.modalView} >

                    <Text style={styles.modalTitle} >Cool Modal</Text>

                    <Text style={styles.modalText} >this is Cool Modal</Text>

                    <TouchableOpacity
                    style={styles.closeButtonText}
                    onPress={()=>setModalVisible(false)} >

                        <Text>Close</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  );
};

export default ModalDialogBox;

const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'rgba(180, 180, 164, 1)',
        justifyContent : 'center',
        alignItems : 'center',
    },

    openButton : {
        backgroundColor : '#6200ea',
        paddingVertical : 12,
        paddingHorizontal : 24,
        borderRadius : 8,
        elevation : 2,
    },

    buttonText : {
        color : '#fff',
        fontSize : 16,
        fontWeight : 'bold',
    },

    modalOverlay : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgba(0,0,0,0.7)',
    },
    modalView : {
        width : '80%',
        backgroundColor : '#fff',
        borderRadius : 20,
        padding : 20,
        alignItems : 'center',
        elevation : 5,
    },

    modalTitle : {
        fontSize : 22,
        fontWeight : 'bold',
        marginBottom : 10,
        color : '#333',
    },

    modalText : {
        fontSize : 16,
        marginBottom : 20,
        textAlign : 'center',
        color : '#333',
    },

    closeButton : {
        backgroundColor : '#03dace',
        paddingVertical : 10,
        paddingHorizontal : 20,
        elevation : 2,
    },

    closeButtonText : {
        color : '#fff',
        fontSize : 16,
        fontWeight : 'bold',
    },
});