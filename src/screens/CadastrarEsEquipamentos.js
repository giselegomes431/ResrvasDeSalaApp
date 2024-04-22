import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CadastrarEsEquipamentos({ navigation }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [quantidades, setQuantidades] = useState({
    Projetor: { checked: false, quantity: 0 },
    Computador: { checked: false, quantity: 0 },
    'Ar condicionado': { checked: false, quantity: 0 }
  });

  function verification() {
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    } else {
      setErrorMessage(null);
    }
  }

  function handleCheckboxChange(name) {
    return () => {
      setQuantidades(prevQuantidades => ({
        ...prevQuantidades,
        [name]: { ...prevQuantidades[name], checked: !prevQuantidades[name].checked }
      }));
    };
  }

  function handleQuantityChange(name, text) {
    setQuantidades(prevQuantidades => ({
      ...prevQuantidades,
      [name]: { ...prevQuantidades[name], quantity: parseInt(text) || 0 }
    }));
  }

  function validation() {
    verification();
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <ImageBackground
        source={require('../assets/Fundo.png')}
        style={styles.imageBackground}
      >
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name="bars" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textTitle1}>Cadastrar Espaço</Text>
          <Text style={styles.textTitle2}>Equipamentos</Text>
        </View>

        <View style={styles.formContext}>
          <View style={styles.box}>
            <Text style={styles.textForm}>Selecione os equipamentos disponíveis:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
          {Object.entries(quantidades).map(([name, { checked, quantity }], index) => (
            <View key={index} style={styles.section}>
              <TouchableOpacity onPress={handleCheckboxChange(name)}>
                <View style={[styles.checkbox, { backgroundColor: checked ? 'blue' : 'transparent' }]} />
              </TouchableOpacity>
              <Text style={styles.textCheckBox}>{name}</Text>
              {checked ? (
                <TextInput
                  style={styles.quantityInput}
                  keyboardType="numeric"
                  placeholder="Quantidade"
                  value={quantity.toString()}
                  onChangeText={(text) => handleQuantityChange(name, text)}
                />
              ) : null}
            </View>
          ))}

          <TouchableOpacity
            style={styles.buttonCadastrar}
          >
            <Text style={styles.buttonText} onPress={() => navigation.navigate('CadastrarEsEspecificacoes')}>Continuar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonCancelar} onPress={() => navigation.goBack()}>Voltar</Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "auto"
  },

  textTitle1: {
    color: "#FFFFFF",
    fontSize: 30,
    textAlign: "center",
    marginTop: 100
  },

  textTitle2: {
    color: "#FFFFFF",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 30
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },

  formContext: {
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    width: "85%",
    height: "50%",
    borderRadius: 30,
    marginBottom: 50
  },

  textForm: {
    color: "#0805A3",
    fontSize: 22,
    paddingLeft: 20,
    paddingBottom: 15
  },

  buttonCadastrar: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#211DFF",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 80,
    margin: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },

  button: {
    paddingBottom: 20
  },

  buttonCancelar: {
    color: "#0805A3",
    fontSize: 15,
    paddingLeft: 138,
    textDecorationLine: "underline"
  },

  errorMessage: {
    fontSize: 10,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10
  },

  box: {
    flexDirection: "row",
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 20
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
  },

  textCheckBox: {
    color: "#211DFF"
  },

  quantityInput: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    backgroundColor: "#ECEBFD",
    width: "20%"
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 300
  }
});
