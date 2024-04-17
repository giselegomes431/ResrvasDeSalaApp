import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConsultarEspaco from "../screens/ConsultarEspaco";
import DetalhesEspaco from "../screens/DetalhesEspaco";
import DetalhesEquipamentos from "../screens/DetalhesEquipamentos";
import DetalhesAcessibilidades from "../screens/DetalhesAcessibilidades";
import DetalhesGestores from "../screens/DetalhesGestores";
import DetalhesReservas from "../screens/DetalhesReservas";
import EditarEspaco from "../screens/EditarEspaco";
import EditarEquipamentos from "../screens/EditarEquipamentos";
import EditarAcessibilidades from "../screens/EditarAcessibilidades";
import EditarReservas from "../screens/EditarReservas";
import EditarGestores from "../screens/EditarGestores";

const Stack = createNativeStackNavigator();

export default function StacksEspaco() {
    return (
        <Stack.Navigator screenOptions={{
            title: "",
            headerLeft: null,
            headerShown: false
        }}>
            <Stack.Screen
                name="ConsultarEspaco"
                component={ConsultarEspaco}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesEspaco"
                component={DetalhesEspaco}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesEquipamento"
                component={DetalhesEquipamentos}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesAcessibilidades"
                component={DetalhesAcessibilidades}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesGestores"
                component={DetalhesGestores}>
            </Stack.Screen>

            <Stack.Screen
                name="DetalhesReservas"
                component={DetalhesReservas}>
            </Stack.Screen>

            <Stack.Screen
                name="EditarEspaco"
                component={EditarEspaco}>
            </Stack.Screen>

            <Stack.Screen
                name="EditarEquipamentos"
                component={EditarEquipamentos}>
            </Stack.Screen>
            
            <Stack.Screen
                name="EditarAcessibilidades"
                component={EditarAcessibilidades}>
            </Stack.Screen>

            <Stack.Screen
                name="EditarReservas"
                component={EditarReservas}>
            </Stack.Screen>

            <Stack.Screen
                name="EditarGestores"
                component={EditarGestores}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}
