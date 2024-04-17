import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConsultarEspaco from "../screens/ConsultarEspaco";
import DetalhesEspaco from "../screens/DetalhesEspaco";
import DetalhesEquipamento from "../screens/DetalhesEquipamentos";
import DetalhesAcessibilidades from "../screens/DetalhesAcessibilidades";
import DetalhesGestores from "../screens/DetalhesGestores";
import DetalhesReservas from "../screens/DetalhesReservas";

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
                component={DetalhesEquipamento}>
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
        </Stack.Navigator>
    )
}
