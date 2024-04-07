import { View, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import TabRoutes from "./tab.routes";
import Perfil from "../screens/Perfil";
import Configuracoes from "../screens/Configuracoes";

const Drawer = createDrawerNavigator();


export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{
            title: "",
            headerShown: false // Para ocultar a barra de título
        }}>
            <Drawer.Screen
                name="Home"
                component={TabRoutes}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="home" size={size} color={color} />,
                    drawerLabel:"Início",
                }}
            />

        <Drawer.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    drawerIcon: ({color, size}) => <Feather name="user" size={size} color={color} />,
                    drawerLabel:"Meu Perfil"
                }}
            />
            <Drawer.Screen
                name="Configuracoes"
                component={Configuracoes}
                options={{
                    drawerIcon: ({color, size}) => <AntDesign name="setting" size={size} color={color} />,
                    drawerLabel:"Configurações"
                }}
            />
        </Drawer.Navigator>
    )
}