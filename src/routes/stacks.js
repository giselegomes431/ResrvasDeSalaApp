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
import CadastrarGestorDeReserva from "../screens/CadastrarGestorDeReserva";
import CadastrarGestorDeReserva2 from "../screens/CadastrarGestorDeReserva2";
import CadastrarGestorDeReserva3 from "../screens/CadastrarGestorDeReserva3";
import CadastrarGestorDeReserva4 from "../screens/CadastrarGestorDeReserva4";
import CadastrarGestorDeServico from "../screens/CadastrarGestorDeServico";
import CadastrarGestorDeServico2 from "../screens/CadastrarGestorDeServico2";
import CadastrarGestorDeServico3 from "../screens/CadastrarGestorDeServico3";
import SolicitarServico from "../screens/SolicitarServiço";
import SolicitarServico2 from "../screens/SolicitarServiço2";
import VisualizarServicos from "../screens/VisualizarServicos";
import DetalhesServicos from "../screens/DetalhesServicos";
import DetalhesServicos2 from "../screens/DetalhesServicos2";
import DetalhesServicos3 from "../screens/DetalhesServicos3";

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

            <Stack.Screen
                name="CadastrarGestorDeReserva"
                component={CadastrarGestorDeReserva}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarGestorDeReserva2"
                component={CadastrarGestorDeReserva2}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarGestorDeReserva3"
                component={CadastrarGestorDeReserva3}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarGestorDeReserva4"
                component={CadastrarGestorDeReserva4}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarGestorDeServico"
                component={CadastrarGestorDeServico}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarGestorDeServico2"
                component={CadastrarGestorDeServico2}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarGestorDeServico3"
                component={CadastrarGestorDeServico3}>
            </Stack.Screen>

            <Stack.Screen
                name="SolicitarServico"
                component={SolicitarServico}>
            </Stack.Screen>

            <Stack.Screen
                name="SolicitarServico2"
                component={SolicitarServico2}>
            </Stack.Screen>

            <Stack.Screen
                name="VisualizarServicos"
                component={VisualizarServicos}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesServicos"
                component={DetalhesServicos}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesServicos2"
                component={DetalhesServicos2}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesServicos3"
                component={DetalhesServicos3}>
            </Stack.Screen>

        </Stack.Navigator>
    )
}

