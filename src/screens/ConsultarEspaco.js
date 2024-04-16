import React, { useState, useEffect } from "react"
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function ConsultarEspaco() {
  const navigation = useNavigation();

  const navigateToDetails = item => {
    navigation.navigate('DetalhesEspaco', { item });

  };

  const [espacos, setEspacos] = useState([
    {
      id: 1,
      nome: 'Sala 15',
      capacidade: '25 pessoas',
      descricao: 'A sala é ampla e possui ar-condicionado excelente.',
      modulo: 'Josélia Navarro',
      equipamentos: ['Projetor', 'Computador', 'Arcondicionado'],
      acessibilidades: ['Acesso via rampa', 'Acesso via elevador'],
      reservas: ['Projetor', 'Computador', 'Arcondicionado'],
      gestorS: 'Gestor de Serviço 01',
      gestoresR: ['Gestor 01', 'Gestor 02']
    },
    {
      id: 2,
      nome: 'Lab 23',
      capacidade: '20 pessoas',
      descricao: 'A sala é ampla e possui ar-condicionado excelente.',
      modulo: 'Administrativo',
      equipamentos: ['Projetor', 'Computador', 'Arcondicionado'],
      acessibilidades: ['Acesso via rampa', 'Acesso via elevador'],
      reservas: ['Projetor', 'Computador', 'Arcondicionado'],
      gestorS: 'Gestor de Serviço 02',
      gestoresR: ['Gestor 03', 'Gestor 04']
    },
    {
      id: 3,
      nome: 'Sala 21',
      capacidade: '30 pessoas',
      descricao: 'A sala é ampla e possui ar-condicionado excelente.',
      modulo: 'Josélia Navarro',
      equipamentos: ['Projetor', 'Computador', 'Arcondicionado'],
      acessibilidades: ['Acesso via rampa', 'Acesso via elevador'],
      reservas: ['Projetor', 'Computador', 'Arcondicionado'],
      gestorS: 'Gestor de Serviço 03',
      gestoresR: ['Gestor 05', 'Gestor 06']
    },
  ]);

  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Fundo1.png')}
        style={styles.imageBackground}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="white" />
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
              data={espacos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    height: "auto"
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 30,
    marginTop: 80
  },

  formContext: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: "60%",
    borderRadius: 30,
    marginBottom: 60
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },

  goBack: {
    marginRight: 300,
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  list: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },

  item: {
    backgroundColor: '#ECEBFD',
    padding: 10,
    marginVertical: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  
  text: {
    fontSize: 16,
    color: '#0805A3',
  },
});