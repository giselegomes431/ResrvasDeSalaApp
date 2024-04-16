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

export default function ConsultarSetor() {
  const navigation = useNavigation();

  const navigateToDetails = item => {
    navigation.navigate('DetalhesSetor', { item });

  };

  const [setores, setSetores] = useState([
    {
      id: 1,
      nome: 'Departamento de Ciências e Tecnologia',
      sigla: 'DCT',
      email: 'dct@uesb.edu.br',
      telefone: '(73) 3528-9611',
    },
    {
      id: 2,
      nome: 'Departamento de Ciências Humanas e Letras',
      sigla: 'DCHL',
      email: 'dchl.jq@uesb.edu.br',
      telefone: '(73) 3528-9664',
    },
    {
      id: 3,
      nome: 'Departamento de Ciências Biológicas',
      sigla: 'DCB',
      email: 'dcbjq@uesb.edu.br',
      telefone: '(73) 3528-9616',
    },
    {
      id: 4,
      nome: 'Departamento de Saúde I',
      sigla: 'DS I',
      email: 'ds1jq@uesb.edu.br',
      telefone: '(73) 3528-9610',
    },
    {
      id: 5,
      nome: 'Departamento de Saúde II',
      sigla: 'DS II',
      email: 'ds2jq@uesb.edu.br',
      telefone: '(73) 3528-9623',
    },
  ]);

  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.sigla}</Text>
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
              data={setores}
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