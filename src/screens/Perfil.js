import React, { useState } from "react"
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Foto from '../assets/Perfil.jpg'
import MSair from '../components/MSair';

export default function Perfil({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Fundo1.png')}
        style={styles.imageBackground}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name="bars" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Meu Perfil</Text>

        <View style={styles.formContext}>
          <View style={styles.imagem}>
          <Image source={Foto} style={styles.imagem2} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textForm}>Nome:</Text>
            <Text style={styles.input}>Gisele Gomes Oliveira</Text>

            <Text style={styles.textForm}>E-mail:</Text>
            <Text style={styles.input}>202110446@uesb.edu.br</Text>

            <Text style={styles.textForm}>Tipo de usuário:</Text>
            <Text style={styles.input}>Administrador</Text>

            <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonCancelar} onPress={() => setModalVisible(true)}>Sair da conta</Text>
          </TouchableOpacity>

          <MSair visible={modalVisible} onClose={() => setModalVisible(false)}/>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "auto"
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 30,
    marginTop: 30
  },

  formContext: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: "70%",
    borderRadius: 30,
    alignItems: "center",
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonCadastrar: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    backgroundColor: "#211DFF",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 50,
    margin: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 300
  },

  textForm: {
    color: "#0805A3",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 5,
  },

  input: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: "#ECEBFD",
    height: 50,
    margin: 10,
    paddingTop: 15,
    textAlign: "center",
    marginBottom: 30
  },

  imagem: {
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 150,
    backgroundColor: "#ECEBFD",
    width: "41%",
    height: "22%",
    alignItems: "center",
    paddingBottom: 10
  },

  textContainer: {
    width: "100%",
    alignItems: "center",
  },

  imagem2: {
    width: 120,
    height: 120,
    marginTop: 7,
    borderRadius: 100,
},

button: {
  paddingBottom: 20
},

buttonCancelar: {
  color: "#AC1515",
  fontSize: 15,
  textDecorationLine: "underline"
},
});
