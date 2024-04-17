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

export default function DetalhesReservas({ navigation, route }) {

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

                    <Text style={styles.text}>Reservas:</Text>
                    <View style={styles.navbar2}>
                        {espaco.reservas.map((reservas, index) => (
                            <Text key={index} style={styles.list}>• {reservas}</Text>
                        ))}
                    </View>


                </View>



            </ImageBackground>
        </Pressable >
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
        marginTop: 140
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
        marginBottom: 90,
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

    text: {
        color: "#0805A3",
        marginRight: 15,
        marginLeft: 16,
        marginBottom: 20,
        fontSize: 22,
    },

    navbar2: {
        backgroundColor: "#ECEBFD",
        width: "90%",
        height: "50%",
        marginLeft: 16,
        borderRadius: 20,
        paddingLeft: 16,
        paddingTop: 16
    },

    list: {
        marginBottom: 10,
        color: "#0805A3"
    }
});
