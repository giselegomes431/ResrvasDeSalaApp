import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastrarProfessor from "../screens/CadastrarProfessor";
import CadastrarSetor from "../screens/CadastrarSetor";
import stacksEspaco from "./stacksEspaco"
import HomeTab from "./HomeTab";
import DetalhesProfessor from "../screens/DetalhesProfessor";
import ConsultarProfessor from "../screens/ConsultarProfessor";
import ConsultarSetor from "../screens/ConsultarSetor";
import EditarProfessor from "../screens/EditarProfessor";
import DetalhesSetor from "../screens/DetalhesSetor";
import EditarSetor from "../screens/EditarSetor";
import StacksCEspaco from "./stacksCEspaco";

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
                name="ConsultarProfessor"
                component={ConsultarProfessor}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesProfessor"
                component={DetalhesProfessor}>
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

            <Stack.Screen
                name="StacksCEspaco"
                component={StacksCEspaco}>
            </Stack.Screen>

        </Stack.Navigator>
    )
}

