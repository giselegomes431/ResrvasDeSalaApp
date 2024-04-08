import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Consultar from "../screens/Consultar";
import ConsultarProfessores from "../screens/ConsultarProfessores";
import ConsultarSetor from "../screens/ConsultarSetor";

const Stack = createNativeStackNavigator();

export default function StacksConsultar(){
    return (
            <Stack.Navigator screenOptions={{title:"",
            headerLeft: null,
            headerShown: false}}>
                <Stack.Screen
                name="Consultar"
                component={Consultar}>
            </Stack.Screen>

            <Stack.Screen
                name="ConsultarProfessores"
                component={ConsultarProfessores}>
            </Stack.Screen>

            <Stack.Screen
                name="ConsultarSetor"
                component={ConsultarSetor}>
            </Stack.Screen>
            
            </Stack.Navigator>
    )
}
