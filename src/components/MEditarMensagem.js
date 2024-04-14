import {useState} from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export default function MEditarMensagem( { visible, onClose, navigation } ){

    return(
        <View>
           <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ECEBFD',  }}>
       
          <View style={styles.container2 }>
          <EvilIcons name="check" size={200} color="#0805A3" />
        <Text style={styles.text}>Atualizado com Sucesso!</Text>
      </View>
      
       
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Retornar para a tela de Editar</Text>
          </TouchableOpacity>

      </View>
    </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      width:"80%",
      height:"40%",
      margin: 10,
      backgroundColor:"#FFF",
    
    },

    container2: {
      borderColor:"#0805A3",
      borderWidth: 2,
      borderRadius:15,
      width:"80%",
      height:"40%",
      alignItems:"center",
      justifyContent:"center",

    },

    text: {
      color: "#0805A3",
      fontSize:20,
      marginTop:20,
    },

    button: {
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      width:"80%",
      height: "10%",
      backgroundColor:"#211DFF",
      marginTop:70,
    },

    buttonText: {
      color:"#FFFFFF",
      fontSize:20,
  },

  button2: {
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    width:"80%",
    height: "15%",
    backgroundColor:"#fff",
    marginTop:20,
    borderWidth: 2,
    borderColor:"#211DFF",
  },

  buttonText2: {
    color:"#211DFF",
    fontSize:20,
},
})