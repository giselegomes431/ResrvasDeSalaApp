import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';

LocaleConfig.locales['pt-BR'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-BR';

export default function CadastrarGestorDeReserva4({ navigation, route }) {
    const { turnos } = route.params || {};
    const [items, setItems] = useState({});

    useEffect(() => {
        if (turnos) {
            const horariosSelecionados = {};

            for (const dia in turnos) {
                if (turnos[dia].checked) {
                    const eventosDia = [];

                    for (const turno in turnos[dia].turnos) {
                        if (turnos[dia].turnos[turno]) {
                            const inicio = turnos[dia].horarios[turno].inicio;
                            const termino = turnos[dia].horarios[turno].termino;

                            if (inicio && termino) {
                                eventosDia.push({
                                    name: `${dia.charAt(0).toUpperCase() + dia.slice(1)} - ${turno.charAt(0).toUpperCase() + turno.slice(1)}: ${inicio} - ${termino}`,
                                    height: 50,
                                });
                            }
                        }
                    }

                    if (eventosDia.length > 0) {
                        const strTime = getNextWeekdayDate(dia);
                        if (!horariosSelecionados[strTime]) {
                            horariosSelecionados[strTime] = [];
                        }

                        horariosSelecionados[strTime] = [...horariosSelecionados[strTime], ...eventosDia];
                    }
                }
            }

            setItems(horariosSelecionados);
        }
    }, [turnos]);

    const loadItems = (day) => {
        setTimeout(() => {
            const newItems = { ...items };
            const strTime = timeToString(day.timestamp);
            if (!newItems[strTime]) {
                newItems[strTime] = [];
            }
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <View style={[styles.item, { height: item.height }]}>
                <Text>{item.name}</Text>
            </View>
        );
    };

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const getNextWeekdayDate = (weekday) => {
        const dayMap = {
            'Domingo': 0,
            'Segunda': 1,
            'Terça': 2,
            'Quarta': 3,
            'Quinta': 4,
            'Sexta': 5,
            'Sábado': 6
        };
        const today = new Date();
        const todayDay = today.getDay();
        const targetDay = dayMap[weekday];
        const daysUntilNext = (targetDay - todayDay + 7) % 7;
        const nextDate = new Date(today.getTime() + daysUntilNext * 24 * 60 * 60 * 1000);
        return timeToString(nextDate.getTime());
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/Fundo.png')}
                style={styles.imageBackground}>
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <AntDesign name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <SafeAreaView style={styles.safeArea}>
                    <Agenda
                        items={items}
                        loadItemsForMonth={loadItems}
                        selected={timeToString(new Date().getTime())}
                        renderItem={renderItem}
                        theme={{
                            agendaDayTextColor: 'black',
                            agendaDayNumColor: 'black',
                            agendaTodayColor: 'red',
                            agendaKnobColor: 'blue'
                        }}
                    />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background semitransparente para o Agenda
        borderRadius: 15,
        margin: 10,
        overflow: 'hidden',
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
});

