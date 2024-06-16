import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ImageModal({ modalVisible, setModalVisible, imageSource }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalView}>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
                <Image source={imageSource} style={styles.modalImage} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },
});
