/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import Espaco from '../screens/Espaco';
import Manutencao from '../screens/Manutencao';
import Gestor from '../screens/Gestor';
//import {AppStack} from './AppStack';
//import AddStack from './AppStack';
import Adicionar from '../screens/Adicionar';
import Consultar from '../screens/Consultar';
import ButtonNew from '../components/ButtonNew';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>

      <Tab.Screen
        name="espaco"
        component={Espaco}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Espaço',
        }}
      />

      <Tab.Screen
        name="manutencao"
        component={Manutencao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wrench" size={size} color={color} />
          ),
          tabBarLabel: 'Manutenção',
        }}
      />

      <Tab.Screen
        name="adicionar"
        component={Adicionar}
        options={{
          tabBarIcon: ({ focused, color, size }) => (<ButtonNew size={size} color={color} focused={focused} />),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="gestor"
        component={Gestor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-group" size={size} color={color} />
          ),
          tabBarLabel: 'Gestor',
        }}
      />

      <Tab.Screen
        name="consultar"
        component={Consultar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
          tabBarLabel: 'Consultar',
        }}
      />
    </Tab.Navigator>
  );
}