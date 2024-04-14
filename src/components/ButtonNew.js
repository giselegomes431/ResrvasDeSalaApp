import React from "react";
import { View, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons'

export default function ButtonNew({ focused, size }) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? "#017afd" : "#211DFF" }]}>
            <Entypo name="plus" color={focused ? "#fff" : "#f8f8f8"} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    }
})