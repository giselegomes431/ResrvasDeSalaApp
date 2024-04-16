import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastrarProfessor from "../screens/CadastrarProfessor";
import CadastrarSetor from "../screens/CadastrarSetor";
import stacksEspaco from "./stacksEspaco"
import HomeTab from "./HomeTab";
import ConsultarProfessor2 from "../screens/ConsultarProfessor2";
import ConsultarProfessores from "../screens/ConsultarProfessores";
import ConsultarSetor from "../screens/ConsultarSetor";
import EditarProfessor from "../screens/EditarProfessor";
import DetalhesSetor from "../screens/DetalhesSetor";
import EditarSetor from "../screens/EditarSetor";

const Stack = createNativeStackNavigator();

export default function Stacks() {
    return (
        <Stack.Navigator screenOptions={{ title: "", headerBackTitleVisible: false, headerShown: false, }}>

            <Stack.Screen
                name="homeTab"
                component={HomeTab}>
            </Stack.Screen>

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
                name="ConsultarProfessor2"
                component={ConsultarProfessor2}>
            </Stack.Screen>

            <Stack.Screen
                name="EditarProfessor"
                component={EditarProfessor}
            >
            </Stack.Screen>

            <Stack.Screen
                name="ConsultarSetor"
                component={ConsultarSetor}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesSetor"
                component={DetalhesSetor}>
            </Stack.Screen>

            <Stack.Screen
                name="EditarSetor"
                component={EditarSetor}
            >
            </Stack.Screen>

        </Stack.Navigator>
    )
}

