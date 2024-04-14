import { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import MEditarMensagem from "./MEditarMensagem";

export default function MEditar({ visible, onClose, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', }}>
          <View style={styles.container}>
            <View style={styles.container2}>
              <Text style={styles.text}>Confirmar Edição?</Text>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>

            <MEditarMensagem visible={modalVisible} onClose={() => setModalVisible(false)} />

            <TouchableOpacity onPress={onClose} style={styles.button2}>
              <Text style={styles.buttonText2}>Voltar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "40%",
    margin: 10,
    backgroundColor: "#FFF",

  },

  container2: {
    borderColor: "#0805A3",
    borderWidth: 2,
    borderRadius: 15,
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",

  },

  text: {
    color: "#0805A3",
    fontSize: 20
  },

  button: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "15%",
    backgroundColor: "#211DFF",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  button2: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "15%",
    backgroundColor: "#fff",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#211DFF",
  },

  buttonText2: {
    color: "#211DFF",
    fontSize: 20,
  },
})