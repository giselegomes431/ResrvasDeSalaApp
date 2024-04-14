import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Adicionar from "../screens/Adicionar";
import CadastrarProfessor from "../screens/CadastrarProfessor";
import CadastrarSetor from "../screens/CadastrarSetor";
import Espaco from "../screens/Espaco";
import stacksEspaco from "./stacksEspaco"
import TabRoutes from "./tab.routes";
import HomeTab from "./HomeTab";
import ConsultarProfessor2 from "../screens/ConsultarProfessor2";
import ConsultarProfessores from "../screens/ConsultarProfessores";
import ConsultarSetor from "../screens/ConsultarSetor";
import MEditarMensagem from "../components/MEditarMensagem";
import MEditar from "../components/MEditar";

const Stack = createNativeStackNavigator();

export default function Stacks(){
    return (
            <Stack.Navigator screenOptions={{title:"", headerBackTitleVisible: false, headerShown: false,}}>
                <Stack.Screen name="homeTab" component={HomeTab} />

            <Stack.Screen
                name="CadastrarProfessor"
                component={CadastrarProfessor}>    
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarSetor"
                component={CadastrarSetor} 
                >
            </Stack.Screen>

            <Stack.Screen
                name="stacksEspaco"
                component={stacksEspaco}>
            </Stack.Screen>
            
            <Stack.Screen
                name="ConsultarProfessores"
                component={ConsultarProfessores}>
            </Stack.Screen>

            <Stack.Screen
                name="ConsultarSetor"
                component={ConsultarSetor}>
            </Stack.Screen>

            <Stack.Screen
                name="ConsultarProfessor2"
                component={ConsultarProfessor2}>
            </Stack.Screen>

            </Stack.Navigator>
    )
}

