import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Pressable,
    Keyboard,
    TextInput
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import MEditar from "../components/MEditar";

export default function EditarEspaco({ navigation, route }) {

    const [modalVisible, setModalVisible] = useState(false);
    const espaco = route.params.item;

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

                <Text style={styles.title}>Espaço</Text>

                <View style={styles.formContext}>
                    <Text style={styles.nome}>{espaco.nome}</Text>
                    <Text style={styles.modulo}>{espaco.modulo}</Text>

                    <View style={styles.navbar}>
                        <Text style={styles.capacidade}>Capacidade:</Text>
                        <TextInput
                            placeholder={espaco.capacidade}
                            keyboardType="ascii-capable"
                            style={styles.capacidade2}
                        />
                    </View>

                    <Text style={styles.descricao}>Descrição:</Text>
                    <TextInput
                        placeholder={espaco.descricao}
                        keyboardType="ascii-capable"
                        style={styles.input}
                    />

                    <View style={styles.alinhar}>
                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('EditarEquipamentos', { item: espaco })}>
                            <Text style={styles.text}>Equipamentos</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('EditarAcessibilidades', { item: espaco })}>
                            <Text style={styles.text}>Acessibilidades</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('EditarReservas', { item: espaco })}>
                            <Text style={styles.text}>Reservas</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons2} onPress={() => navigation.navigate('EditarGestores', { item: espaco })}>
                            <Text style={styles.text}>Gestores</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.buttonCadastrar}
                        >
                            <Text style={styles.buttonText} onPress={() => setModalVisible(true)}>Editar</Text>
                        </TouchableOpacity>

                        <MEditar visible={modalVisible} onClose={() => setModalVisible(false)} />
                    </View>
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

    title: {
        color: "#FFFFFF",
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 20,
        marginTop: 10
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
        height: "80%",
        borderRadius: 30,
        marginBottom: 10,
    },

    input: {
        width: "90%",
        height: "20%",
        borderRadius: 15,
        backgroundColor: "#ECEBFD",
        margin: 12,
        paddingLeft: 10,
        marginLeft: 16,
        color: "#0805A3",
        paddingBottom: 70
    },

    goBack: {
        marginRight: 300,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nome: {
        color: "#0805A3",
        fontSize: 22,
        marginLeft: 16,
    },

    modulo: {
        color: "#0805A3",
        marginLeft: 16,
        marginBottom: 30,
    },

    capacidade: {
        color: "#466EB6",
        marginLeft: 16,
        marginRight: 150
    },

    capacidade2: {
        color: "#211DFF",
    },

    descricao: {
        color: "#466EB6",
        marginLeft: 16,
        marginTop: 20,
    },

    buttons: {
        marginBottom: 30,
        width: "70%",
        height: "10%",
        borderRadius: 15,
        backgroundColor: "#ECEBFD",
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },

    buttons2: {
        marginBottom: 5,
        width: "70%",
        height: "10%",
        borderRadius: 15,
        backgroundColor: "#ECEBFD",
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#0805A3",
        marginRight: 15
    },

    alinhar: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonCadastrar: {
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        backgroundColor: "#211DFF",
        paddingTop: 14,
        paddingBottom: 14,
        margin: 10,
        marginTop: 20
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 22,
    },
});
