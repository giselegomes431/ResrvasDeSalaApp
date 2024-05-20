import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function CadastrarGestorDeServico2({ navigation }) {

    const [errorMessage, setErrorMessage] = useState(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [professor, setProfessor] = useState(null)
    const [professores, setProfessores] = useState([])

    function guardarProfessores() {
        setProfessores((arr) => [...arr, { id: new Date().getTime(), professor: nome }])
        setProfessor(nome)
    }

    function verification() {
        if (!nome.trim() || !email.trim() || !telefone.trim()) {
            Vibration.vibrate();
            setErrorMessage("campo obrigatório*")
        }
        else {
            setErrorMessage(null)
        }
    }

    function validation() {
        guardarProfessores()
        verification()
        navigation.navigate('ConsultarProfessores', { professores: professores })
        console.log(setProfessores)
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <ImageBackground
                source={require('../assets/Fundo.png')}
                style={styles.imageBackground}
            >
                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <AntDesign name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View >
                    <Text style={styles.textTitle1}>Vincular</Text>
                    <Text style={styles.textTitle2}>Gestor de Serviço</Text>
                </View>

                <View style={styles.formContext}>
                    <TouchableOpacity style={styles.b} onPress={() => navigation.navigate('CadastrarGestorDeReserva3')}>
                        <AntDesign name="plus" size={20} color="white" />
                    </TouchableOpacity>

                    <View style={styles.horizontalLine} />
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
        marginBottom: 15
    },

    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },

    formContext: {
        backgroundColor: "#FFFFFF",
        paddingTop: 30,
        width: "85%",
        height: "25%",
        borderRadius: 30,
        marginBottom: 110,
        marginTop: 40
    },

    textForm: {
        color: "#0805A3",
        fontSize: 22,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 15,
        backgroundColor: "#ECEBFD",
        height: 50,
        margin: 12,
        paddingLeft: 15,
        marginLeft: 16
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

    goBack: {
        marginRight: 300,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    b: {
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#211DFF",
        marginLeft: 16
    },

    horizontalLine: {
        height: 1,
        width: '90%', // Ou você pode usar um valor específico, como 200
        backgroundColor: '#211DFF',
        marginLeft: 17,
        marginTop: 20,
        marginBottom: 30
    },
});
