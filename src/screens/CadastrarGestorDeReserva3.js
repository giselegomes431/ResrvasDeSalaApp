import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    TextInput,
    ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default function CadastrarGestorDeReserva3({ navigation }) {
    const [errorMessage, setErrorMessage] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [turnos, setTurnos] = useState({
        Segunda: { checked: false, turnos: { manha: false, tarde: false, noite: false }, horarios: { manha: { inicio: '', termino: '' }, tarde: { inicio: '', termino: '' }, noite: { inicio: '', termino: '' } } },
        Terça: { checked: false, turnos: { manha: false, tarde: false, noite: false }, horarios: { manha: { inicio: '', termino: '' }, tarde: { inicio: '', termino: '' }, noite: { inicio: '', termino: '' } } },
        Quarta: { checked: false, turnos: { manha: false, tarde: false, noite: false }, horarios: { manha: { inicio: '', termino: '' }, tarde: { inicio: '', termino: '' }, noite: { inicio: '', termino: '' } } },
        Quinta: { checked: false, turnos: { manha: false, tarde: false, noite: false }, horarios: { manha: { inicio: '', termino: '' }, tarde: { inicio: '', termino: '' }, noite: { inicio: '', termino: '' } } },
        Sexta: { checked: false, turnos: { manha: false, tarde: false, noite: false }, horarios: { manha: { inicio: '', termino: '' }, tarde: { inicio: '', termino: '' }, noite: { inicio: '', termino: '' } } },
        Sábado: { checked: false, turnos: { manha: false, tarde: false, noite: false }, horarios: { manha: { inicio: '', termino: '' }, tarde: { inicio: '', termino: '' }, noite: { inicio: '', termino: '' } } },
    });
    


    function verification() {
        if (!nome.trim() || !email.trim() || !telefone.trim()) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
        } else {
            setErrorMessage(null);
        }
    }

    function handleDiaChange(dia) {
        setTurnos(prevTurnos => ({
            ...prevTurnos,
            [dia]: {
                ...prevTurnos[dia],
                checked: !prevTurnos[dia].checked
            }
        }));
    }

    function handleTurnoChange(dia, turno) {
        return () => {
            setTurnos(prevTurnos => ({
                ...prevTurnos,
                [dia]: {
                    ...prevTurnos[dia],
                    turnos: {
                        ...prevTurnos[dia].turnos,
                        [turno]: !prevTurnos[dia].turnos[turno]
                    }
                }
            }));
        };
    }

    function handleHorarioChange(dia, turno, type, text) {
        setTurnos(prevTurnos => ({
            ...prevTurnos,
            [dia]: {
                ...prevTurnos[dia],
                horarios: {
                    ...prevTurnos[dia].horarios,
                    [turno]: {
                        ...prevTurnos[dia].horarios[turno],
                        [type]: text
                    }
                }
            }
        }));
    }

    function validation() {
        verification();
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
                    <Text style={styles.textTitle1}>Vincular</Text>
                    <Text style={styles.textTitle2}>Gestor de Reserva</Text>
                </View>

                <View style={styles.formContext}>


                    <View style={styles.scrollContainer}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <View style={styles.box}>
                                <Text style={styles.textForm2}>Email:</Text>
                            </View>

                            <TextInput
                                placeholder="Ex.: joao@uesb.edu.br"
                                keyboardType="email-address"
                                style={styles.input}
                            />
                            <View style={styles.box}>
                                <Text style={styles.textForm}>Selecione os dias para trabalhar:</Text>
                                <Text style={styles.errorMessage}>{errorMessage}</Text>
                            </View>

                            {diasDaSemana.map((dia, index) => (
                                <View key={index} style={styles.daySection}>
                                    <TouchableOpacity onPress={() => handleDiaChange(dia)} style={styles.dayRow}>
                                        <View style={[styles.checkbox, { backgroundColor: turnos[dia].checked ? 'blue' : 'transparent' }]} />
                                        <Text style={styles.dayTitle}>{dia}</Text>
                                    </TouchableOpacity>
                                    {turnos[dia].checked && (
                                        <View style={styles.turnoContainer}>
                                            {['manha', 'tarde', 'noite'].map((turno) => (
                                                <View key={turno} style={styles.turnoSection}>
                                                    <TouchableOpacity onPress={handleTurnoChange(dia, turno)} style={styles.turnoRow}>
                                                        <View style={[styles.checkbox, { backgroundColor: turnos[dia].turnos[turno] ? 'blue' : 'transparent' }]} />
                                                        <Text style={styles.textCheckBox}>{turno.charAt(0).toUpperCase() + turno.slice(1)}</Text>
                                                    </TouchableOpacity>
                                                    {turnos[dia].turnos[turno] && (
                                                        <View style={styles.horarioInputContainer}>
                                                            <TextInput
                                                                style={styles.horarioInput}
                                                                placeholder="Início"
                                                                value={turnos[dia].horarios[turno].inicio}
                                                                onChangeText={(text) => handleHorarioChange(dia, turno, 'inicio', text)}
                                                            />
                                                            <TextInput
                                                                style={styles.horarioInput}
                                                                placeholder="Término"
                                                                value={turnos[dia].horarios[turno].termino}
                                                                onChangeText={(text) => handleHorarioChange(dia, turno, 'termino', text)}
                                                            />
                                                        </View>
                                                    )}
                                                </View>
                                            ))}
                                        </View>
                                    )}
                                </View>
                            ))}
                            <TouchableOpacity
                                style={styles.buttonCadastrar} onPress={() => navigation.navigate('CadastrarGestorDeReserva4', { turnos: turnos })}
                            >
                                <Text style={styles.buttonText}>Cadastrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.buttonCancelar}>Voltar</Text>
                            </TouchableOpacity>
                        </ScrollView>

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

    textTitle1: {
        color: "#FFFFFF",
        fontSize: 30,
        textAlign: "center",
        marginTop: 30
    },

    textTitle2: {
        color: "#FFFFFF",
        fontSize: 50,
        textAlign: "center",
        marginBottom: 10
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
        borderRadius: 30,
        marginBottom: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        height: 500,
    },

    scrollViewContent: {
        paddingBottom: 20,
    },

    textForm: {
        color: "#0805A3",
        fontSize: 22,
        paddingBottom: 20,
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
        alignSelf: "center",
        margin: 25,
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 22,
    },

    button: {
        paddingBottom: 20,
    },

    buttonCancelar: {
        color: "#0805A3",
        fontSize: 15,
        textDecorationLine: "underline",
        textAlign: "center"
    },

    errorMessage: {
        fontSize: 10,
        color: "red",
        fontWeight: "bold",
        paddingTop: 10
    },

    box: {
        flexDirection: "row",
        alignItems: "center",
    },

    daySection: {
        marginBottom: 20,
        marginLeft: 16,
    },

    dayRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    dayTitle: {
        fontSize: 18,
        color: "#0805A3",
        marginLeft: 10,
    },

    turnoContainer: {
        paddingLeft: 34,
    },

    turnoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    turnoSection: {
        marginBottom: 10,
    },

    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 8,
        borderWidth: 1,
    },

    textCheckBox: {
        fontSize: 16,
        color: "#0805A3",
    },

    horarioInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },

    horarioInput: {
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
        backgroundColor: "#ECEBFD",
        width: "35%"
    },

    goBack: {
        marginRight: 300,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
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

    textForm2: {
        color: "#0805A3",
        fontSize: 22,
        paddingLeft: 20,
    },
});

