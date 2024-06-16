import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
    Image
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import UploadModal from "../components/UploadModal";

export default function SolicitarServico2({ route, navigation }) {
    const { solicitacao } = route.params;
    const [errorMessage, setErrorMessage] = useState(null);
    const [nome, setNome] = useState(solicitacao ? solicitacao.nome : "");
    const [email, setEmail] = useState(solicitacao ? solicitacao.email : "");
    const [telefone, setTelefone] = useState(solicitacao ? solicitacao.telefone : "");
    const [modalVisible, setModalVisible] = useState(false);
    const [files, setFiles] = useState([]);

    function verification() {
        if (!nome.trim() || !email.trim() || !telefone.trim()) {
            Vibration.vibrate();
            setErrorMessage("campo obrigatório*");
        } else {
            setErrorMessage(null);
        }
    }

    function validation() {
        verification();
        if (!errorMessage) {
            const solicitacao = {
                id: new Date().getTime(),
                nome: nome,
                email: email,
                telefone: telefone,
            };
            navigation.navigate('VisualizarServicos', { solicitacao });
        }
    }

    function handleFileUpload(newFile) {
        setFiles((prevFiles) => [...prevFiles, newFile]);
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

                <View>
                    <Text style={styles.textTitle1}>Solicitar</Text>
                    <Text style={styles.textTitle2}>Serviço</Text>
                </View>

                <View style={styles.formContext}>
                    <TextInput
                        placeholder="Descreva aqui a sua solicitação de manutenção..."
                        keyboardType="ascii-capable"
                        style={styles.input}
                        onChangeText={setTelefone}
                        value={telefone}
                    />

                    <View style={styles.navbar2}>
                        <TouchableOpacity
                            style={styles.buttonAnexar}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textAnexar}>Anexar arquivo</Text>
                            <AntDesign name="download" size={11} color="#0805A3" />
                        </TouchableOpacity>

                        <UploadModal
                            visible={modalVisible}
                            onClose={() => setModalVisible(false)}
                            onFileUpload={handleFileUpload}
                        />

                        <View style={styles.anexos}>
                            <Text style={styles.anexosText}>{files.length} Arquivo(s) anexado(s)!</Text>
                        </View>
                    </View>

                    <FlatList
                        data={files}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Image source={{ uri: item }} style={styles.image} />
                        )}
                        horizontal
                    />

                    <TouchableOpacity
                        style={styles.buttonCadastrar}
                        onPress={validation}
                    >
                        <Text style={styles.buttonText}>Solicitar</Text>
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
        height: "auto",
    },
    textTitle1: {
        color: "#FFFFFF",
        fontSize: 30,
        textAlign: "center",
        marginTop: 40,
    },
    textTitle2: {
        color: "#FFFFFF",
        fontSize: 50,
        textAlign: "center",
        marginBottom: 15,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    formContext: {
        backgroundColor: "#FFFFFF",
        paddingTop: 20,
        width: "85%",
        height: "auto",
        borderRadius: 30,
        marginBottom: 50,
        paddingBottom: 20,
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
        height: 150,
        margin: 12,
        paddingLeft: 15,
        marginLeft: 16,
        textAlignVertical: 'top',
        paddingTop: 10,
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
        paddingTop: 10,
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
    navbar2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 12,
    },
    buttonAnexar: {
        backgroundColor: "#ECEBFD",
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textAnexar: {
        color: "#0805A3",
        fontSize: 14,
        marginRight: 5,
    },
    anexos: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    anexosText: {
        color: "#0805A3",
        fontSize: 14,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 10,
    },
});
