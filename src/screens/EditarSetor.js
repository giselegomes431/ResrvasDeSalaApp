import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Pressable,
    Keyboard
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import MEditar from "../components/MEditar";

export default function EditarSetor({ navigation, route }) {

    const [modalVisible, setModalVisible] = useState(false);
    const setor = route.params.item;

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

                <Text style={styles.title}>Setor</Text>

                <View style={styles.formContext}>

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Nome:</Text>
                    </View>

                    <TextInput
                        placeholder={setor.nome}
                        keyboardType="ascii-capable"
                        style={styles.input}
                    />

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Sigla:</Text>
                    </View>

                    <TextInput
                        placeholder={setor.sigla}
                        keyboardType="ascii-capable"
                        style={styles.input}
                    />

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Email:</Text>
                    </View>

                    <TextInput
                        placeholder={setor.email}
                        keyboardType="email-address"
                        style={styles.input}
                    />

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Telefone:</Text>
                    </View>

                    <TextInput
                        placeholder={setor.telefone}
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.buttonCadastrar}
                    >
                        <Text style={styles.buttonText} onPress={() => setModalVisible(true)}>Editar</Text>
                    </TouchableOpacity>
                    
                    <MEditar visible={modalVisible} onClose={() => setModalVisible(false)}/>

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
        marginTop: 70
    },

    textTitle2: {
        color: "#FFFFFF",
        fontSize: 50,
        textAlign: "center",
        marginBottom: 15
    },

    iconTitle: {
        paddingTop: 10,
        paddingLeft: 50,
        paddingBottom: 40
    },

    title: {
        color: "#FFFFFF",
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 30,
        marginTop: 50
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
        height: "60%",
        borderRadius: 30,
        marginBottom: 70,
        marginTop: 20
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
        marginLeft: 16,
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
        margin: 10,
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

    goBack: {
        marginRight: 300,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    b: {
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#211DFF",
    },

    navbar2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20
    },

    b2: {
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#211DFF",
        marginLeft: 200
    },


});
