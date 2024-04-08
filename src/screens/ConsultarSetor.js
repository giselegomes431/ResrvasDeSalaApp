import React, { useState, useEffect } from "react"
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
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';


export default function ConsultarSetor({navigation, route}) {
    const { departamentos } = route.params || { departamentos: [] };
    const [listaDepartamentos, setListaDepartamentos] = useState(departamentos);

    useEffect(() => {
        setListaDepartamentos(departamentos);
    }, [departamentos]);

    return (
        <View style={styles.container}>
        <ImageBackground
        source={require('../assets/Fundo1.png')}
        style={styles.imageBackground}>
         <View style={styles.navbar}>
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="white"/>
    </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name="bars" size={24} color="white" />
            </TouchableOpacity>
            </View>
  
          <Text style={styles.title}>Departamentos</Text>
          <View style={styles.formContext}>
          <View style={styles.container}>
          <FlatList
                            style={styles.list}
                            data={departamentos}
                            renderItem={({item}) => <Text style={styles.result}>{item.departamento}</Text>}
                            keyExtractor={(item) => item.id}

                        />
          </View>
           
  
          </View>
          
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      height:"auto"
    },
  
    title: {
      color:"#FFFFFF",
      fontSize:30,
      textAlign:"center",
      paddingBottom:30,
      marginTop: 80
    },
  
    formContext: {
      backgroundColor:"#FFFFFF",
      width:"85%",
      height:"60%",
      borderRadius:30,
      marginBottom:60
  },
  
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonCadastrar: {
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      width:"70%",
      backgroundColor:"#211DFF",
      paddingTop:14,
      paddingBottom:14,
      marginLeft:50,
      margin:25,
  },
  
  buttonText: {
      color:"#FFFFFF",
      fontSize:20,
  },

  goBack: {
    marginRight:300,
},
  
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  list: {
    marginTop:20,
    marginLeft:20
},

result: {
    fontSize:20,
    color:"#211DFF",
    height:50,
    width:"100%",
    paddingRight:20,
},
});