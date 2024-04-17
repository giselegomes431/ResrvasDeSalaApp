import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Pressable,
    Keyboard
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import MExcluir from "../components/MExcluir";

export default function DetalhesEspaco({ navigation, route }) {

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
                        <Text style={styles.capacidade2}>{espaco.capacidade}</Text>
                    </View>

                    <Text style={styles.descricao}>Descrição:</Text>

                    <Text style={styles.input}>{espaco.descricao}</Text>

                    <View style={styles.alinhar}>
                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('DetalhesEquipamento', { item: espaco })}>
                            <Text style={styles.text}>Equipamentos</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('DetalhesAcessibilidades', { item: espaco })}>
                            <Text style={styles.text}>Acessibilidades</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('DetalhesReservas', { item: espaco })}>
                            <Text style={styles.text}>Reservas</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons2} onPress={() => navigation.navigate('DetalhesGestores', { item: espaco })}>
                            <Text style={styles.text}>Gestores</Text>
                            <AntDesign name="caretright" size={20} color="#211DFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.navbar3}>

                        <TouchableOpacity style={styles.b} onPress={() => navigation.navigate('EditarProfessor', { item: professor })}>
                            <FontAwesome6 name="edit" size={20} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.b2} onPress={() => setModalVisible(true)}>
                            <AntDesign name="delete" size={20} color="white" />
                        </TouchableOpacity>

                        <MExcluir visible={modalVisible} onClose={() => setModalVisible(false)} />

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
        paddingLeft: 15,
        paddingTop: 15,
        marginLeft: 16,
        color: "#0805A3",
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
        marginTop: 20,
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
        marginBottom: 10,
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
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },

    navbar3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});
