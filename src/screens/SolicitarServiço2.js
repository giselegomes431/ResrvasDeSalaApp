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
import UploadModal from "../components/UploadModal";

export default function SolicitarServico2({ navigation }) {

    const [errorMessage, setErrorMessage] = useState(null)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [professor, setProfessor] = useState(null)
    const [professores, setProfessores] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [files, setFiles] = useState([]);

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

                <View >
                    <Text style={styles.textTitle1}>Solicitar</Text>
                    <Text style={styles.textTitle2}>Serviço</Text>
                </View>

                <View style={styles.formContext}>

                    <TextInput
                        placeholder="Descreva aqui a sua solicitação de manutenção..."
                        keyboardType="ascii-capable"
                        style={styles.input}
                        onChangeText={setNome}
                        value={nome}
                    />

                    <View style={styles.navbar2}>
                        <TouchableOpacity
                            style={styles.buttonAnexar}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textAnexar} onPress={() => navigation.navigate('SolicitarServico2')}>Anexar arquivo</Text>
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

                    <TouchableOpacity
                        style={styles.buttonCadastrar}
                    >
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('SolicitarServico2')}>Solicitar</Text>
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
        marginTop: 40
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
        paddingTop: 20,
        width: "85%",
        height: "60%",
        borderRadius: 30,
        marginBottom: 50
    },

    textForm: {
        color: "#0805A3",
        fontSize: 22,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        height: "60%",
        borderRadius: 15,
        backgroundColor: "#ECEBFD",
        margin: 12,
        marginLeft: 16,
        paddingBottom: 230,
        paddingLeft: 16
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
        margin: 20,
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
        marginTop: 30
    },

    buttonAnexar: {
        borderRadius: 15,
        flexDirection: "row",
        alignItems: 'center',
        width: "40%",
        backgroundColor: "#ECEBFD",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 8,
        margin: 15,
        paddingLeft: 7
    },

    textAnexar: {
        color: "#0805A3",
        fontSize: 12,
        paddingRight: 10,
        paddingLeft: 10
    },

    anexos: {
        borderRadius: 15,
        flexDirection: "row",
        alignItems: 'center',
        width: "50%",
        backgroundColor: "#ECEBFD",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 2,
        margin: 15,
        paddingLeft: 7
    },

    anexosText: {
        color: "#0805A3",
        fontSize: 12,
        paddingRight: 10,
        paddingLeft: 10
    },

    navbar2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
