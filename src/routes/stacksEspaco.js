import {createNativeStackNavigator} from "@react-navigation/native-stack";

import CadastrarEspaco from "../screens/CadastrarEspaco";
import CadastrarEsAcessibilidade from "../screens/CadastrarEsAcessibilidade";

const Stack = createNativeStackNavigator();

export default function Stacks(){
    return (
            <Stack.Navigator screenOptions={{title:"",
            headerLeft: null,
            headerShown: false}}>
                <Stack.Screen
                name="CadastrarEspaco"
                component={CadastrarEspaco}>
            </Stack.Screen>

            <Stack.Screen
                name="CadastrarEsAcessibilidade"
                component={CadastrarEsAcessibilidade}>
            </Stack.Screen>
            

            </Stack.Navigator>
    )
}
