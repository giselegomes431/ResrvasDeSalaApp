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

export default function DetalhesSetor({ navigation, route }) {

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

                    <Text style={styles.input}>{setor.nome}</Text>

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Sigla:</Text>
                    </View>

                    <Text style={styles.input}>{setor.sigla}</Text>

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Email:</Text>
                    </View>

                    <Text style={styles.input}>{setor.email}</Text>

                    <View style={styles.box}>
                        <Text style={styles.textForm}>Telefone:</Text>
                    </View>

                    <Text style={styles.input}>{setor.telefone}</Text>

                    <View style={styles.navbar2}>

                        <TouchableOpacity style={styles.b} onPress={() => navigation.navigate('EditarSetor', { item: setor })}>
                            <FontAwesome6 name="edit" size={20} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.b2} onPress={() => setModalVisible(true)}>
                            <AntDesign name="delete" size={20} color="white" />
                        </TouchableOpacity>

                        <MExcluir visible={modalVisible} onClose={() => setModalVisible(false)}/>

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
});
