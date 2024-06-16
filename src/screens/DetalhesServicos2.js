import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Pressable,
    Keyboard,
    Image
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function DetalhesServicos2({ navigation, route }) {

    const modulo = route.params.item;

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

                <Text style={styles.title}>{modulo.sala1}</Text>

                <View style={styles.formContext}>

                    <Text style={styles.textForm}>Modulo:</Text>
                    <Text style={styles.input}>{modulo.nome}</Text>

                    <Text style={styles.textForm}>Desrição:</Text>
                    <Text style={styles.input}>{modulo.descricao1}</Text>

                    <Text style={styles.textForm}>Anexos:</Text>
                    <View style={styles.item}>
                        <Image source={modulo.ar} style={styles.imagem} />
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
        paddingTop: 15,
        marginLeft: 16,
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

    item: {
        backgroundColor: '#ECEBFD',
        marginVertical: 8,
        borderRadius: 20,
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: 15,
        marginLeft: 16,
        width: "90%",
    },

    text: {
        fontSize: 16,
        color: '#0805A3',
    },

    list: {
        marginLeft: 20,
        marginRight: 20
    },

    imagem: {
        width: 100,
        height: 100,
        marginTop: 8,
    },
});
