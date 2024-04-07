import React, { useState } from "react"
import { StyleSheet, 
        Text, 
        View, 
        ImageBackground,
        TextInput,
        TouchableOpacity,
        Vibration,
        Pressable,
        Keyboard} from 'react-native';

        import { AntDesign } from '@expo/vector-icons';

export default function CadastrarProfessor({navigation}) {

  const [errorMessage, setErrorMessage] = useState(null)
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  function verification(){
        if(!nome.trim() || !email.trim() || !telefone.trim()){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
        }
        else {
            setErrorMessage(null)
        }
    }

    function validation(){
        verification()
    }

  return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <ImageBackground
        source={require('../assets/Fundo.png')}
        style={styles.imageBackground}
        >
            <View style={styles.navbar}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="white"/>
    </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name="bars" size={24} color="white" />
            </TouchableOpacity>
            </View>
            
            <View >
            <Text style={styles.textTitle1}>Cadastrar</Text>
            <Text style={styles.textTitle2}>Professor</Text>
        </View>

        <View style={styles.formContext}>
            <View style={styles.box}>
                <Text style={styles.textForm}>Nome:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <TextInput
                placeholder="Ex.: João"
                keyboardType="ascii-capable"
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                />

            <View style={styles.box}>
                <Text style={styles.textForm}>Email:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <TextInput
                placeholder="Ex.: joao@uesb.edu.br"
                keyboardType="email-address"
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                />

            <View style={styles.box}>
                <Text style={styles.textForm}>Telefone:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            <TextInput 
                placeholder="Ex.: 12345678901"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={setTelefone}
                value={telefone}
                />

            <TouchableOpacity
                style={styles.buttonCadastrar}
            >
                <Text style={styles.buttonText} onPress={() => {validation()}}>Cadastrar</Text>
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
    height:"auto"
  },

  textTitle1: {
    color:"#FFFFFF",
    fontSize:30,
    textAlign:"center",
    marginTop: 70
},

textTitle2: {
    color:"#FFFFFF",
    fontSize:50,
    textAlign:"center",
    marginBottom:15
},

iconTitle: {
    paddingTop:10,
    paddingLeft:50,
    paddingBottom:40
},

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },

  formContext: {
    backgroundColor:"#FFFFFF",
    paddingTop:20,
    width:"85%",
    height:"50%",
    borderRadius:30,
    marginBottom:70
},

textForm: {
    color:"#0805A3",
    fontSize:22,
    paddingLeft:20,
},

input: {
    width:"90%",
    borderRadius: 15,
    backgroundColor:"#ECEBFD",
    height:50,
    margin:12,
    paddingLeft:15,
    marginLeft:16
},

buttonCadastrar: {
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    backgroundColor:"#211DFF",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:80,
    margin:25,
},

buttonText: {
    color:"#FFFFFF",
    fontSize:22,
},

button: {
    paddingBottom:20
},

buttonCancelar: {
    color:"#0805A3",
    fontSize:15,
    paddingLeft:138,
    textDecorationLine:"underline"
},

errorMessage: {
    fontSize:10,
    color:"red",
    fontWeight:"bold",
    paddingLeft:10,
    paddingTop:10
},

box: {
    flexDirection:"row",
},

goBack: {
    marginRight:300,
},

navbar: {
    flexDirection: 'row',
    alignItems: 'center',
}
});
